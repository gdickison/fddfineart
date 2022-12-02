/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
// import { urlFor } from "../lib/client"
// import Image from "next/image"

export default function PaintingsInCollection ({paintings}) {
  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, idx, paintings) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ idx, paintings})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  // const shimmer = (w, h) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <defs>
  //     <linearGradient id="g">
  //       <stop stop-color="#333" offset="20%" />
  //       <stop stop-color="#222" offset="50%" />
  //       <stop stop-color="#333" offset="70%" />
  //     </linearGradient>
  //   </defs>
  //   <rect width="${w}" height="${h}" fill="#333" />
  //   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  //   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  // </svg>`

  // const toBase64 = (str) =>
  //   typeof window === 'undefined'
  //     ? Buffer.from(str).toString('base64')
  //     : window.btoa(str)

  return (
    <div>
      <section className={`flex ${paintings.length > 2 ? "justify-center" : ""} flex-col sm:flex-row flex-wrap max-w-[1170px] mx-auto gap-2`}>
        {paintings.map((painting, idx) => (
          <figure
            key={idx}
            className="flex justify-center hover-effect hover:cursor-pointer"
            onClick={!painting.placeholder ? e => openModal(e, idx, paintings) : e => e.preventDefault()}
          >
            <img
              src={painting.imageUrl}
              width={370}
              height={300}
              alt={painting.title}
              // placeholder="blur"
              // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(370, 300))}`}
              // className="grow md:h-72 my-2 md:m-2 px-4 md:px-0 object-center object-cover hover:cursor-pointer"
            />
            <figcaption>
              <div className="caption-container hover:cursor-pointer font-libre">
                <h4 className="text-xl">
                  {painting.title}
                </h4>
                <div className="text-sm">

                <p>
                  {painting.dimensions}
                </p>
                {!painting.placeholder &&
                  <>
                    <p>
                      Original {painting.original ? 'Available' : 'Sold'}
                    </p>
                    <p>
                      {painting.prints ? 'Prints Available' : ''}
                    </p>
                  </>
                }
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
      {showModal &&
        <ProductModal
          closeModal={closeModal}
          idx={modalContents.idx}
          paintings={modalContents.paintings}
        />
      }
    </div>
  )
}
