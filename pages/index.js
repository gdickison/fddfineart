import { client } from '../lib/client'
import Head from 'next/head'
import ProductCategories from '../components/ProductCategories'
import Footer from '../components/Footer'

export default function Home({categories, shows}) {
console.log('shows', shows)
  return (
    <div>
      <Head>
        <title>Forrest Dickison Fine Art & Illustration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ProductCategories
          categories={categories}
        />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "category"] | order(order){
    "id": _id,
    "imageUrl": image.asset->url,
    title,
    slug,
    description,
    products[]->{tags}
  }`
  const categories = await client.fetch(query)

  const shows = await client.fetch(
    `*[_type == "shows" && is_current == true]{
      "id": _id,
      "imageUrl": image.asset->url,
      title,
      slug,
      description,
      paintings
    }`
  )

  return {
    props: {categories, shows}
  }
}