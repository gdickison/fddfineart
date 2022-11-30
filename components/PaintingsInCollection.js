/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
// import { urlFor } from "../lib/client"
import Image from "next/image"

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

  return (
    <div>
      <section className={`flex ${paintings.length > 2 ? "justify-center" : ""} flex-col sm:flex-row flex-wrap max-w-[1170px] mx-auto gap-2`}>
        {paintings.map((painting, idx) => (
          <figure
            key={idx}
            className="flex justify-center hover-effect hover:cursor-pointer"
            onClick={!painting.placeholder ? e => openModal(e, idx, paintings) : e => e.preventDefault()}
          >
            <Image
              src={painting.imageUrl}
              width={370}
              height={300}
              alt={painting.title}
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
