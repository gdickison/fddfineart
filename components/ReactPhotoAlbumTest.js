/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
import { PhotoAlbum } from "react-photo-album"

export default function ReactPhotoAlbumTest ({paintings}) {
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

  paintings.forEach(painting => {
    painting.gridImage = {
      src: painting.imageUrl,
      width: painting.imageUrl.split('-')[1].split('.')[0].split('x')[0],
      height: painting.imageUrl.split('-')[1].split('.')[0].split('x')[1]
    }
  })

  const gridImages = paintings.map(painting => {
    return {
      src: painting.imageUrl,
      width: painting.imageUrl.split('-')[1].split('.')[0].split('x')[0],
      height: painting.imageUrl.split('-')[1].split('.')[0].split('x')[1]
    }
  })


  return (
    <div>
      <section className="flex flex-wrap max-w-[1170px] mx-auto">
      {console.log('gridImages', gridImages)}
      <PhotoAlbum layout="rows" photos={gridImages}/>
        {paintings.map((painting, idx) => (
          <>
          {console.log('painting', painting)}
            <figure
              key={idx}
              className="flex grow hover-effect"
              onClick={!painting.placeholder ? e => openModal(e, painting.original, painting.prints, painting.id, painting.title, painting.imageUrl, painting.dimensions, painting.slug) : e => e.preventDefault()}
            >
              <img
                src={painting.imageUrl}
                alt={painting.title}
                className="grow h-72 m-2 object-center object-cover hover:cursor-pointer"
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
          </>
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
