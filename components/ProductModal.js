/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Mousewheel, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { urlFor } from "../lib/client"

const ProductModal = ({idx, paintings, closeModal}) => {
  const slides = paintings.map((painting) => {
    return (
      <>
        <img
          src={urlFor(painting.imageUrl).auto('format').url()}
          alt={painting.title}
          className="w-full h-full object-contain"
        />
        <p className="swiper-gallery-caption text-center text-xs sm:text-base md:text-lg text-gray-200 pt-2">
          <span className="font-libre">{painting.title}</span>
          <span>{` - `}</span>
          <span className="font-libre">{painting.dimensions}</span>
          <span>{` - `}</span>
          {(painting.original || painting.prints) &&
            <Link href={`/product-details/${painting.slug}`}>
              <span className="underline font-libre hover:text-gray-400 hover:cursor-pointer">See Purchase Options</span>
            </Link>
          }
          {!painting.original && !painting.prints  &&
              <span className="underline font-libre hover:text-gray-400 hover:cursor-pointer" onClick={closeModal}>Back to Show</span>
          }
        </p>
      </>
    )
  })

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  w-screen h-screen md:py-8 md:px-8 bg-black text-gray-100 z-50">
      <button className="absolute top-4 right-4 w-14 h-14 pl-4 hover:cursor-pointer" onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-8 h-8">
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>
      <Swiper
        id="swiper-gallery"
        modules={[
          Mousewheel,
          Navigation
        ]}
        loop={true}
        mousewheel={true}
        navigation={true}
        onSwiper={swiper => {
          swiper.slideTo(idx + 1, 0, false)
        }}
        slidesPerView={1}
        spaceBetween={50}
      >
        {slides.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              {slide}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default ProductModal