import { client } from '../../lib/client'
import PaintingsInCollection from '../../components/PaintingsInCollection'

export default function Originals({originalPaintings}) {
  return (
    <PaintingsInCollection
      paintings={originalPaintings}
    />
  )
}

export const getStaticProps = async () => {

  const originalPaintings = await client.fetch(
    `*[_type == "paintings" && original_available == true && !(_id match "draft*")]{
      "id": _id,
      "imageUrl": image.asset->url,
      title,
      "slug": slug.current,
      "original": original_available,
      "dimensions": original_dimensions,
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