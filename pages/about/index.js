/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const About = ({bio}) => {
  const [count, setCount] = useState(0)

  const usePrevious = (state) => {
    const [countArray, setCountArray] = useState([null, state])
    if (countArray[1] !== count) {
      setCountArray([countArray[1], count])
    }
    return countArray[0]
  }

  const prev = usePrevious(count)
  const direction = count > prev ? 1 : -1

  const variants = {
    enter: direction => ({ x: direction * 550 }),
    center: {x: 0},
    exit: direction => ({ x: direction * -550 })
  }

  return (
    <div>
      <div className="relative flex flex-col items-center landscape:flex-row p-6 gap-6 max-w-[1170px] md:max-h-[70vh]">
        {/* <img src={bio.imageUrl} alt="" className="flex-shrink-0 object-cover rounded-sm bg-gray-500 aspect-square w-full md:w-1/2" /> */}
        {bio.bioImages.length > 1
          ? <>
            <div className="flex items-center justify-center w-[32rem] h-[32rem] overflow-hidden relative">
              <button className='absolute left-[3%] z-50' onClick={() => setCount(count - 1)}>
                <img src="/previous_chev.svg" alt="previous" />
              </button>
              <AnimatePresence custom={direction}>
                <motion.div
                  key={count}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{duration: 0.5}}
                  className={`absolute flex justify-center items-center}`}
                >
                  <img src={bio.bioImages[Math.abs(count) % bio.bioImages.length]} alt="Bio Image" className="flex-shrink-0 object-cover aspect-square w-full" />
                </motion.div>
              </AnimatePresence>
              <button className='absolute right-[3%] z-50' onClick={() => setCount(count + 1)}>
                <img src="/next_chev.svg" alt="next" />
              </button>
            </div>
          </>
          : <img src={bio.bioImages[0]} alt="" className="flex-shrink-0 object-cover aspect-square w-full md:w-1/2" />
        }
        <div className={`flex flex-col justify-center ${bio.name === null ? "space-y-0" : "space-y-4"} md:w-1/2`}>
          <h2 className={`text-xl font-semibold ${bio.name === null ? "hidden" : "block"}`}>{bio.name}</h2>
          <p className='md:leading-[1.7rem] font-light text-2xl md:text-lg'>{bio.text}</p>
        </div>
      </div>
    </div>
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