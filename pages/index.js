import { client } from '../lib/client'
import PaintingsInShow from '../components/PaintingsInShow'
import Footer from '../components/Footer'

export default function Home({show}) {
console.log('show', show)
console.log('paintings', show[0].paintings)
  return (
    <div>
      <div>
        <PaintingsInShow
          paintings={show[0].paintings}
        />
      </div>
      <footer>
        <Footer/>
      </footer>
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