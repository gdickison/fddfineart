/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Autoplay, Lazy, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Galleries = () => {
  const mtImages = [
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626453124801-BIP3DVS7IP1VWHV0B6GW/StMaryLake_12x12_%24900.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626453268928-L4PVMRA8Y1HTV53V6JNJ/LastLight_6x8_%24450.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626457044712-0WGOEJ3KL9TWSR9I6J8N/IMG_8207.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1546640342390-4RN5463WDKXGBDHBX9M7/Forrest%2BDickison%2B-%2BPuddle%2Bof%2BClouds%2B-%2B20%2Bx%2B30%2Bin%2B-%2Boil%2Bon%2Blinen%2Bframed%2B-%2B%243400%2B.jpg?format=1500w"
  ]

  const slides = mtImages.map((image, idx) => {
    return (
      <img
        key={idx}
        className="flex-shrink-0 object-contain"
        src={image}
        alt={`Slide ${idx + 1}`}
        data-slide={`Slide ${idx + 1}`}
        style={{
          height: 400,
          margin: 'auto'
        }}
      />
    )
  })

  return (
    <main className="flex flex-col items-center md:p-6 gap-0 md:gap-6">
      <div className="flex items-center justify-center w-4/5 md:w-3/5  overflow-hidden">
      <Swiper
          id="swiper-custom"
          modules={[
            Autoplay,
            Lazy,
            Pagination
          ]}
          autoplay={{
            delay: 5000
          }}
          lazy={{
            enabled: true,
            loadOnTransitionStart: true,
            loadingClass: 'swiper-lazy-loading'
          }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={50}
        >
          {slides.map((slide, idx) => {
            return (
              <SwiperSlide key={idx}>
                {slide}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="flex flex-col items-center md:gap-4">
        <Link href="https://www.montanagallery.net/forrest-dickison">
          <a target="_blank">
            <h2 className="text-3xl font-libre uppercase">Montana Gallery</h2>
          </a>
        </Link>
        <p className="text-center">
          <span className="block pb-2 text-sm text-gray-400">2710 2nd Avenue North</span>
          <span className="block pb-2 text-sm text-gray-400">Billings, MT 59101</span>
        </p>
      </div>
    </main>
  )

}

export default Galleries