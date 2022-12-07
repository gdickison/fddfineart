/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'
import { useState } from 'react'
import ComingSoon from '../../components/ComingSoon'
import ProductModal from '../../components/ProductModal'
import { PhotoAlbum } from 'react-photo-album'
import Image from 'next/image'
import { shimmer, toBase64 } from '../../lib/utils'

export default function Illustrations({ illustrations }) {

  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, photo, idx) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ idx, illustrations})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  illustrations.forEach(illustration => {
    illustration.width = Number(illustration.imageUrl.split('-')[1].split('.')[0].split('x')[0])
    illustration.height = Number(illustration.imageUrl.split('-')[1].split('.')[0].split('x')[1])
  })

  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

  const photos = illustrations.map((illustration) => ({
    src: illustration.imageUrl,
    alt: illustration.title,
    title: `${illustration.title}`,
    width: illustration.width,
    height: illustration.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((illustration.height / illustration.width) * breakpoint);
      return {
        src: illustration.imageUrl,
        alt: illustration.title,
        title: `${illustration.title}`,
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
          </div>
        </figcaption>
      </figure>
    </div>
  );

  if(illustrations.length < 1){
    return (
      <ComingSoon/>
    )
  }

  return (
    <div className="paintings-photo-album">
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
          paintings={modalContents.illustrations}
        />
      }
    </div>
  )
}

export const getServerSideProps = async () => {

  const illustrations = await client.fetch(
    `*[_type == "collections" && title == "Illustrations"]{
      "illustrations": paintings[]->{
        "id": _id,
        title,
        "imageUrl": image.asset->url,
        tags,
        order
      }
    }`
  ).then(response => response[0].illustrations)

  return {
    props: {illustrations}
  }
}