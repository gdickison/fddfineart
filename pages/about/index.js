/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'
// import Swiper JS
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
  
const About = ({bio}) => {
  const slides = bio.bioImages.map((image, idx) => {
    return (
      <img
        key={idx}
        className="flex-shrink-0 object-cover aspect-square px-1 w-full swiper-lazy"
        data-src={image}
        alt={`Slide ${idx + 1}`}
        data-slide={`Slide ${idx + 1}`}
      />
    )
  })

  return (
    <main className="flex flex-col items-center landscape:flex-row  gap-8">
      <div className='flex items-center justify-center sm:w-2/3 md:w-1/2 h-auto overflow-hidden'>
        <Swiper
          id="swiper-custom"
          modules={[
            Autoplay,
            Lazy,
            Navigation,
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
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={50}
        >
          {slides.map((slide, idx) => {
            return (
              <SwiperSlide key={idx}>
                {slide}
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={`flex flex-col justify-center ${bio.name === null ? "space-y-0" : "space-y-4"} sm:w-2/3 md:w-1/2 landscape:pr-6 text-justify`}>
        <h2 className={`text-xl font-semibold ${bio.name === null ? "hidden" : "block"}`}>{bio.name}</h2>
        <p className='font-thin md:leading-[1.7rem] md:text-lg p-4 md:p-0'>{bio.text}</p>
      </div>
    </main>
  )
}

export default About

export const getServerSideProps = async () => {

  const bio = await client.fetch(
    `*[_type == "bio"]{
      "id": _id,
      "imageUrl": bio_image.asset->url,
      "bioImages": bio_images[].asset->url,
      "name": bio_name,
      "text": bio_text
    }`
  )
  .then(data => data[0])

  return {
    props: {bio}
  }
}