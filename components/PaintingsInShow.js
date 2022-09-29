/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"

export default function PaintingsInShow ({paintings}) {
  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, id, title, image, dimensions, slug) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({id, title, image, dimensions, slug})
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
            onClick={!painting.placeholder ? e => openModal(e, painting.id, painting.title, painting.imageUrl, painting.dimensions, painting.slug) : e => e.preventDefault()}
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
            </figurecaption>
          </figure>
        ))}
      </section>
      {showModal &&
        <ProductModal
          id={modalContents.id}
          title={modalContents.title}
          image={modalContents.image}
          dimensions={modalContents.dimensions}
          slug={modalContents.slug}
          closeModal={closeModal}
        />
      }
    </div>
  )
}
