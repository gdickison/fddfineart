import { client } from '../lib/client'
import PaintingsInCollection from '../components/PaintingsInCollection'

export default function Home({show}) {
  return (
    <PaintingsInCollection
      paintings={show[0].paintings}
    />
  )
}

export const getStaticProps = async () => {

  const show = await client.fetch(
    `*[_type == "shows" && is_current == true]{
      "id": _id,
      "imageUrl": image.asset->url,
      title,
      slug,
      description,
      "paintings": paintings[]->{
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
    props: {show}
  }
}