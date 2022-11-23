/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from '../../lib/client'
import { useState } from 'react'
import ComingSoon from '../../components/ComingSoon'
import ProductModal from '../../components/ProductModal'

export default function Illustrations({ illustrations }) {

  const [showModal, setShowModal] = useState(false)
  const [modalContents, setModalContents] = useState()

  const openModal = (e, idx, illustrations) => {
    e.preventDefault()
    setShowModal(true)
    setModalContents({ idx, illustrations})
  }

  const closeModal = e => {
    e.preventDefault()
    setShowModal(false)
  }

  if(illustrations.length < 1){
    return (
      <ComingSoon/>
    )
  }

  return (
    <div>
      <section className={`flex ${illustrations.length > 2 ? "justify-center" : ""} flex-col sm:flex-row flex-wrap max-w-[1170px] mx-auto gap-2`}>
        {illustrations.map((illustration, idx) => (
          <figure
            key={idx}
            className="flex justify-center hover-effect hover:cursor-pointer"
            onClick={!illustration.placeholder ? e => openModal(e, idx, illustrations) : e => e.preventDefault()}
          >
            <img
              src={urlFor(illustration.imageUrl).auto('format').url()}
              width={370}
              height={300}
              alt={illustration.title}
              // className="grow md:h-72 my-2 md:m-2 px-4 md:px-0 object-center object-cover hover:cursor-pointer"
            />
            <figcaption>
              <div className="caption-container hover:cursor-pointer font-libre">
                <h4 className="text-xl">
                  {illustration.title}
                </h4>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
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