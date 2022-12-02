/* eslint-disable @next/next/no-img-element */
import { client } from "../../lib/client";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { Mousewheel, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductDetailModal from "../../components/ProductDetailModal";
import { urlFor } from "../../lib/client";
import PrintDetails from "../../components/PrintDetails";

const ProductDetailsPage = ({productDetails, printOptions}) => {

  const { addToCart } = useStateContext()

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, i, slides) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ i, slides})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  const { id, title, image, wallImages, original, original_price, original_dimensions, description } = productDetails

  const handleAddOriginalToCart = e => {
    e.preventDefault()
    const cartId = self.crypto.randomUUID()
    const itemPrice = original_price
    addToCart({cartId, id, title, image, original, itemPrice, original_dimensions})
  }

  const paintingImages = wallImages !== null ? image.concat(wallImages) : image

  const slides = paintingImages.map((image, idx) => {
    return (
      <img key={idx} src={urlFor(image).auto('format').url()} alt={title} />
    )
  })

  return (
      <section className="text-gray-600 body-font mx-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="md:w-1/2 m-auto flex flex-row-reverse">
              {slides && slides.length > 1
                ?
                  <>
                    <Swiper
                      id="swiper-product-details"
                      modules={[
                        Mousewheel,
                        Navigation,
                        Thumbs
                      ]}
                      loop={true}
                      mousewheel={true}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    >
                      {slides.map((slide, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <div onClick={e => openModal(e, i, slides)} className="hover:cursor-pointer">
                              {slide}
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <Swiper
                      id="swiper-thumbs"
                      direction={'vertical'}
                      modules={[
                        Mousewheel,
                        Thumbs
                      ]}
                      mousewheel={true}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={3}
                      watchSlidesProgress={true}
                    >
                      {slides.map((slide, i) => {
                        return (
                          <SwiperSlide key={i}>
                            {slide}
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </>
                : <img src={slides[0].props.src} alt={slides[0].props.alt} />
              }
            </div>
            <div className="md:w-1/2 w-full mb-6 lg:mb-0 flex flex-col justify-center gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-black text-3xl title-font font-thin mb-4">{title}</h1>
                <p className="leading-relaxed mb-4  font-thin text-black">{description}</p>
              </div>
              {original &&
                <div>
                <h2 className="text-black text-2xl title-font font-thin mb-4 text-center md:text-left">Purchase the Original</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(original_price)}</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={handleAddOriginalToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              }
              {printOptions &&
                <PrintDetails
                  printOptions={printOptions}
                />
              }
            </div>
          </div>
        </div>
        {showModal &&
          <ProductDetailModal
            idx={modalContents.i}
            images={modalContents.slides}
            closeModal={closeModal}
          />
        }
      </section>

  )
}

export default ProductDetailsPage

export const getServerSideProps = async (context) => {
  const productDetails = await client.fetch(`*[_type == "paintings" && slug.current == "${context.params.slug}"]{
    "id": _id,
    title,
    "image": [image.asset->url],
    "wallImages": wall_images[].asset->url,
    placeholder,
    "original": original_available,
    original_price,
    original_dimensions,
    "prints": prints_available,
    slug,
    tags,
    description
  }`)
  .then(data => data[0])

  const printOptions = await client.fetch(`*[_type == "printShop" && print->slug.current == "${context.params.slug}"]{
    "id": print->_id,
    "title": print->title,
    "prints": print->prints_available,
    "image": [print->image.asset->url],
    'sizeOptions': size_options[]{
      'key': _key,
      'unitPrice': unit_price,
      'sizeLabel': size_label,
      height,
      width
    },
    'frameOptions': frame_options[]{
      'key': _key,
      'unitPrice': frame_style->price,
      'width': frame_style->width,
      'height': frame_style->height,
      'style': frame_style->style
    },
    'mediaOptions': [{
      'key': '1234567890',
      'style': 'Fine Art Paper',
      'unitPrice': 0
    }]
  }`).then(res => res.length > 0 ? res[0] : null)

  return {
    props: {
      productDetails,
      printOptions
    }
  }
}