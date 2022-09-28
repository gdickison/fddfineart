/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import ProductModal from "./ProductModal"

export default function ProductCategories({categories}) {
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
        {categories.map((category, idx) => (
          <figure
            key={idx}
            className="flex grow hover-effect"
            onClick={e => openModal(e, category.id, category.title, category.imageUrl, category.description, category.slug.current)}
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="grow h-72 m-2 object-center object-cover hover:cursor-pointer"
            />
            <figurecaption>
              <div className="caption-container hover:cursor-pointer font-libre">
                <h4 className="text-xl">
                  {category.title}
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
