import { client } from '../../lib/client'
import PaintingsInShow from '../../components/PaintingsInShow'

export default function Home({show}) {
  return (
    <div>
      <div>
        <PaintingsInShow
          paintings={show[0].paintings}
        />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {

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