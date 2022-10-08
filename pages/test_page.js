import { client } from '../lib/client'
import ReactPhotoAlbumTest from '../components/ReactPhotoAlbumTest'

export default function PhotoAlbumTest({originalPaintings}) {
  console.log('originalPaintings', originalPaintings)
  return (
    <ReactPhotoAlbumTest
      paintings={originalPaintings}
    />
  )
}

export const getServerSideProps = async () => {

  const originalPaintings = await client.fetch(
    `*[_type == "paintings" && original_available == true && !(_id match "draft*")]{
      "id": _id,
      "imageUrl": image.asset->url,
      title,
      "slug": slug.current,
      "original": original_available,
      prints_available,
      tags,
      description,
      order
    }`
  )

  return {
    props: {originalPaintings}
  }
}