/* eslint-disable @next/next/no-img-element */
import { client } from "../../lib/client";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { Mousewheel, Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductDetailModal from "../../components/ProductDetailModal";
import { urlFor } from "../../lib/client";

const ProductDetailsPage = ({productDetails, frameOptions, sizeOptions, mediaOptions}) => {
  const { addToCart } = useStateContext()
  const [selectedFrame, setSelectedFrame] = useState({'id': frameOptions[0].id, 'style': frameOptions[0].style, 'price': frameOptions[0].price})
  const [selectedSize, setSelectedSize] = useState({'id': sizeOptions[0].id, 'style': sizeOptions[0].size, 'price': sizeOptions[0].price})
  const [selectedMedia, setSelectedMedia] = useState({'id': mediaOptions[0].id, 'style': mediaOptions[0].style, 'price': mediaOptions[0].price})
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

  const handleSizeChange = e => {
    e.preventDefault()
    sizeOptions.find(option => {
      if(option.id === e.target.value){
        setSelectedSize({'id': option.id, 'size': option.size, 'price': option.price})
      }
    })
  }

  const handleMediaChange = e => {
    e.preventDefault()
    mediaOptions.find(option => {
      if(option.id === e.target.value){
        setSelectedMedia({'id': option.id, 'media': option.style, 'price': option.price})
      }
    })
  }

  const handleFrameChange = e => {
    e.preventDefault()
    frameOptions.find(option => {
      if(option.id === e.target.value){
        setSelectedFrame({'id': option.id, 'frame': option.style, 'price': option.price})
      }
    })
  }

  const { id, title, image, wallImages, original, original_price, original_dimensions, prints, slug, tags, description } = productDetails

  const handleAddOriginalToCart = e => {
    e.preventDefault()
    const cartId = self.crypto.randomUUID()
    addToCart({cartId, id, title, image, original, original_price, original_dimensions})
  }

  const handleAddPrintToCart = e => {
    e.preventDefault()
    const cartId = self.crypto.randomUUID()
    addToCart({cartId, id, title, image, selectedFrame, selectedMedia, selectedSize})
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
                        Pagination,
                        Thumbs
                      ]}
                      loop={true}
                      mousewheel={true}
                      navigation={true}
                      pagination={{clickable: true}}
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
              {prints &&
                <div>
                  <h2 className="text-black text-2xl title-font font-thin mb-4">Purchase a Print</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Size</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
                      {sizeOptions && sizeOptions.map(option => {
                        return (
                          <option key={option.id} value={option.id}>{option.size}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Media</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                      {mediaOptions && mediaOptions.map(option => {
                        return (
                          <option key={option.id} value={option.id}>{option.style}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Frame</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                      {frameOptions && frameOptions.map(option => {
                        return (
                          <option key={option.id} value={option.id}>{option.style}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(selectedFrame.price + selectedSize.price + selectedMedia.price)}</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={handleAddPrintToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
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

  const frameOptions = await client.fetch(`*[_type == "frame"] | order(price){
    "id": _id,
    style,
    description,
    image,
    price
  }`)

  const sizeOptions = await client.fetch(`*[_type == "sizes"] | order(price){
    "id": _id,
    size,
    price
  }`)

  const mediaOptions = await client.fetch(`*[_type == "media"] | order(price){
    "id": _id,
    style,
    description,
    price
  }`)

  return {
    props: {
      productDetails,
      frameOptions,
      sizeOptions,
      mediaOptions
    }
  }
}