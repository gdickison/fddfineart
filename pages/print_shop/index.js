import { client } from '../../lib/client'
import ComingSoon from '../../components/ComingSoon'
import PaintingsInCollection from '../../components/PaintingsInCollection'

export default function PrintShop({printPaintings}) {
  console.log('printPaintings', printPaintings)

  if(printPaintings.length < 1){
    return (
      <ComingSoon/>
    )
  }

  return (
    <PaintingsInCollection
      paintings={printPaintings}
    />
  )
}

export const getServerSideProps = async () => {

  const printPaintings = await client.fetch(
    `*[_type == "paintings" && prints_available == true && !(_id match "draft*")]{
      "id": _id,
      "imageUrl": image.asset->url,
      title,
      "slug": slug.current,
      "original": original_available,
      "prints": prints_available,
      tags,
      description,
      order
    }`
  )

  return {
    props: {printPaintings}
  }
}