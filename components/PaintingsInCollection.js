/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"

export default function PaintingsInCollection ({paintings}) {
  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, original, prints, id, title, image, dimensions, slug) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ original, prints, id, title, image, dimensions, slug})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row flex-wrap max-w-[1170px] mx-auto">
        {paintings.map((painting, idx) => (
          <figure
            key={idx}
            className="flex grow hover-effect"
            onClick={!painting.placeholder ? e => openModal(e, painting.original, painting.prints, painting.id, painting.title, painting.imageUrl, painting.dimensions, painting.slug) : e => e.preventDefault()}
          >
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className="grow md:h-72 my-2 md:m-2 px-4 md:px-0 object-center object-cover hover:cursor-pointer"
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
          original={modalContents.original}
          prints={modalContents.prints}
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
