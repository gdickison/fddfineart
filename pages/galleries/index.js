/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Galleries = () => {
  const mtImages = [
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626453124801-BIP3DVS7IP1VWHV0B6GW/StMaryLake_12x12_%24900.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626453268928-L4PVMRA8Y1HTV53V6JNJ/LastLight_6x8_%24450.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1626457044712-0WGOEJ3KL9TWSR9I6J8N/IMG_8207.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/53371a9fe4b0689d605d373d/1546640342390-4RN5463WDKXGBDHBX9M7/Forrest%2BDickison%2B-%2BPuddle%2Bof%2BClouds%2B-%2B20%2Bx%2B30%2Bin%2B-%2Boil%2Bon%2Blinen%2Bframed%2B-%2B%243400%2B.jpg?format=1500w"
  ]

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
    enter: direction => ({ x: direction * 600 }),
    center: {x: 0},
    exit: direction => ({ x: direction * -600 })
  }

  return (
    <div className="flex justify-center h-[90vh] md:h-auto">
      <div className="flex flex-col items-center md:p-6 gap-0 md:gap-6">
        <div className="flex items-center justify-center w-[32rem] md:w-[40rem] h-80 md:h-96 overflow-hidden relative">
          <button className='absolute left-[0] md:left-[-3%] z-50' onClick={() => setCount(count - 1)}>
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
              <Link href="https://www.montanagallery.net/forrest-dickison">
                <a target="_blank">
                  <img src={mtImages[Math.abs(count) % mtImages.length]} alt="" className="flex-shrink-0 object-cover h-64 sm:h-96 bg-gray-500" />
                </a>
              </Link>
            </motion.div>
          </AnimatePresence>
          <button className='absolute right-[0] md:right-[-3%] z-50' onClick={() => setCount(count + 1)}>
            <img src="/next_chev.svg" alt="next" />
          </button>
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
      </div>
    </div>
  )
}

export default Galleries