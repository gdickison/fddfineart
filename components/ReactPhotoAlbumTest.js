/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import ProductModal from "./ProductModal"
import PhotoAlbum from 'react-photo-album'
import Image from "next/image"
import { shimmer, toBase64 } from "../lib/utils"

export default function ReactPhotoAlbumTest ({paintings}) {
  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, photo, idx) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ idx, paintings})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  paintings.forEach(painting => {
    painting.width = Number(painting.imageUrl.split('-')[1].split('.')[0].split('x')[0])
    painting.height = Number(painting.imageUrl.split('-')[1].split('.')[0].split('x')[1])
  })

  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

  const photos = paintings.map((painting) => ({
    src: painting.imageUrl,
    alt: painting.title,
    title: `${painting.title} | ${painting.dimensions} | ${painting.original} | ${painting.prints_available}`,
    width: painting.width,
    height: painting.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((painting.height / painting.width) * breakpoint);
      return {
        src: painting.imageUrl,
        alt: painting.title,
        title: `${painting.title} | ${painting.dimensions} | ${painting.original} | ${painting.prints_available}`,
        width: breakpoint,
        height
      };
    }),
  }));

  const NextJsImage = ({
    imageProps: { src, alt, title, sizes, className, onClick },
    wrapperStyle,
  }) => (
    <div style={wrapperStyle}>
      <figure
          className="flex justify-center hover-effect hover:cursor-pointer relative"
          style={{width: "100%", height: "100%"}}
        >
          <div style={{ display: "block", position: "relative", width: "100%", height: "100%" }}>
            <Image
              fill
              src={src}
              alt={alt}
              title={title}
              sizes={sizes}
              className="painting-image"
              onClick={onClick}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(370, 300))}`}
            />
          </div>
        <figcaption>
          <div className="caption-container hover:cursor-pointer font-libre">
            <h4 className="text-xl">
              {title.split('|')[0].trim()}
            </h4>
            <div className="text-sm">
            <p>
              {title.split('|')[1].trim()}
            </p>
            <p>
              Original {title.split('|')[2].trim() === "true" ? 'Available' : 'Sold'}
            </p>
            <p>
              {title.split('|')[3].trim() === "true" ? 'Prints Available' : ''}
            </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );

  return (
    <div>
      <PhotoAlbum
        photos={photos}
        layout={"rows"}
        targetRowHeight={360}
        rowConstraints={
          {maxPhotos: 5}
        }
        renderPhoto={NextJsImage}
        onClick={(e, photo, idx) => {openModal(e, photo, idx)}}
      />
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
