/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import ProductModal from "./ProductModal"

export default function PaintingsInShow ({paintings}) {
  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, id, title, image, description, slug) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({id, title, image, description, slug})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  return (
    <div>
      <section className="flex flex-wrap max-w-[1170px] mx-auto">
        {paintings.map((painting, idx) => (
          <figure
            key={idx}
            className="flex grow hover-effect"
            onClick={e => openModal(e, painting.id, painting.title, painting.imageUrl, painting.description, painting.slug)}
          >
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className="grow h-72 m-2 object-center object-cover hover:cursor-pointer"
            />
            <figurecaption>
              <div className="caption-container hover:cursor-pointer font-libre">
                <h4 className="text-xl">
                  {painting.title}
                </h4>
                <div className="text-sm">

                <p>
                  32 x 40
                </p>
                <p>
                  Original - Sold
                </p>
                <p>
                  Print - Available
                </p>
                </div>
              </div>
            </figurecaption>
          </figure>
        ))}
      </section>
      {showModal &&
        <ProductModal
          id={modalContents.id}
          title={modalContents.title}
          image={modalContents.image}
          description={modalContents.description}
          slug={modalContents.slug}
          closeModal={closeModal}
        />
      }
    </div>
  )
}
