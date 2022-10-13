/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
import { PhotoAlbum, PhotoProps } from 'react-photo-album'
import Image from "next/future/image"

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
    painting.width = painting.imageUrl.split('-')[1].split('.')[0].split('x')[0]
    painting.height = painting.imageUrl.split('-')[1].split('.')[0].split('x')[1]
    painting.src = painting.imageUrl
  })

  const renderPhoto = ({photo}) => {
    return (
      <figure
        key={photo.id}
        className="flex grow hover-effect relative"
        onClick={!photo.placeholder ? e => openModal(e, photo.original, photo.prints, photo.id, photo.title, photo.image, photo.dimensions, photo.slug) : e => e.preventDefault()}
      >
        <img
          src={photo.src}
          width={100}
          // height={200}
          alt={photo.title}
          className="grow p-2 object-contain hover:cursor-pointer"
        />
        <figcaption>
          <div className="caption-container hover:cursor-pointer font-libre">
            <h4 className="text-xl">
              {photo.title}
            </h4>
            <div className="text-sm">

            <p>
              {photo.dimensions}
            </p>
            {!photo.placeholder &&
              <>
                <p>
                  Original {photo.original ? 'Available' : 'Sold'}
                </p>
                <p>
                  {photo.prints ? 'Prints Available' : ''}
                </p>
              </>
            }
            </div>
          </div>
        </figcaption>
      </figure>
    )
  }

  const photos = paintings.map((painting, idx) => {
    return {
      src: painting.src,
      width: Number(painting.width),
      height: Number(painting.height),
      placeholder: painting.placeholder,
      original: (painting.original).toString(),
      prints: painting.prints,
      id: painting.id,
      title: painting.title,
      image: painting.imageUrl,
      dimensions: painting.dimensions,
      slug: painting.slug,
      sizes: painting.sizes
    }
  })

  return (
    <div>
    {console.log('photos', photos)}
      <PhotoAlbum
        photos={photos}
        layout={"rows"}
        targetRowHeight={360}
        renderPhoto={renderPhoto}
      />
      {/* <section className="flex flex-wrap max-w-[1170px] mx-auto">
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
      </section> */}
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
