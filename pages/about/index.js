/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'
import Carousel from 'nuka-carousel/lib/carousel'

const About = ({bio}) => {
  const slides = bio.bioImages.map((image, idx) => {
    return (
      <img
        key={idx}
        className="flex-shrink-0 object-cover aspect-square"
        src={image}
        alt={`Slide ${idx + 1}`}
        data-slide={`Slide ${idx + 1}`}
        style={{
          width: '100%',
          paddingLeft: '5px',
          paddingRight: '5px'
        }}
      />
    )
  })

  return (
    <main className="flex flex-col items-center landscape:flex-row  gap-8 landscape:gap-4">
      {bio.bioImages.length > 1
        ? <div className="flex items-center justify-center md:w-1/2 h-auto overflow-hidden">
            <Carousel
              defaultControlsConfig={{
                nextButtonText: " ",
                nextButtonStyle: {
                  display: 'none',
                  backgroundImage: 'url("/next_chev.svg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                  backgroundPosition: 'left',
                  height: '2rem',
                  width: '2.5rem',
                  padding: 0
                },
                pagingDotsStyle: {
                  padding: '1rem',
                  fill: 'white'
                },
                prevButtonText: " ",
                prevButtonStyle: {
                  display: 'none',
                  backgroundImage: 'url("/previous_chev.svg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                  backgroundPosition: 'right',
                  height: '2rem',
                  width: '2.5rem',
                  padding: 0
                }
              }}
              dragThreshold={0}
              enableKeyboardControls={true}
              wrapAround={true}
              autoplay={true}
              autoplayInterval={8000}
              cellSpacing={20}
            >
              {slides}
            </Carousel>
          </div>
        : <img src={bio.bioImages[0]} alt="" className="flex-shrink-0 object-cover aspect-square w-full md:w-1/2" />
      }
      <div className={`flex flex-col justify-center ${bio.name === null ? "space-y-0" : "space-y-4"} md:w-1/2`}>
        <h2 className={`text-xl font-semibold ${bio.name === null ? "hidden" : "block"}`}>{bio.name}</h2>
        <p className='font-light p-4 md:font-thin text-3xl md:leading-[1.7rem]  md:text-lg md:p-0'>{bio.text}</p>
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