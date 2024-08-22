import { client } from '../../lib/client'
import PaintingsInCollection from '../../components/PaintingsInCollection'

export default function Originals({originalPaintings}) {

  return (
    <PaintingsInCollection
      paintings={originalPaintings[0].originals}
    />
  )
}

export const getServerSideProps = async () => {

  const originalPaintings = await client.fetch(
    `*[_type == "collections" && title == "Originals"]{
      "originals": paintings[]->{
        "id": _id,
        title,
        "imageUrl": image.asset->url,
        placeholder,
        "original": original_available,
        "dimensions": original_dimensions,
        "prints": prints_available,
        "slug": slug.current,
        tags,
        description,
        order
      }
    }`
  )

  return {
    props: {originalPaintings}
  }
}