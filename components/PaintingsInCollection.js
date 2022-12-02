/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
import Image from "next/image"
import { shimmer, toBase64 } from "../lib/utils"

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
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(370, 300))}`}
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
