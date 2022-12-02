import { client } from '../../lib/client'
import ComingSoon from '../../components/ComingSoon'
import PaintingsInCollection from '../../components/PaintingsInCollection'

export default function PrintShop({prints4sale}) {

  if(prints4sale.length < 1){
    return (
      <ComingSoon/>
    )
  }

  return (
    <PaintingsInCollection
      paintings={prints4sale}
    />
  )
}

export const getServerSideProps = async () => {
  const prints4sale = await client.fetch(
    `*[_type == "printShop" && print->prints_available]{
      'description': print->description,
      'id': print->_id,
      'title': print->title,
      'imageUrl': print->image.asset->url,
      "original": print->original_available,
      "prints": print->prints_available,
      "slug": print->slug.current
    }`
  )

  return {
    props: {prints4sale}
  }
}