import { client } from "../../lib/client";
import ProductDetails from "../../components/ProductDetails";
import Footer from "../../components/Footer"

const ProductDetailsPage = ({productDetails}) => {

  return (
    <div>
      <ProductDetails
        productDetails={productDetails}
      />
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage

export const getStaticPaths = async () => {
  const products = await client.fetch(`*[_type == "paintings"] {
    slug {
      current
    }
  }`)

  const paths = products.map(product => {
    return {params: {slug: product.slug.current}}
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
  const productDetails = await client.fetch(`*[_type == "paintings" && slug.current == "${context.params.slug}"]{
    "id": _id,
    title,
    "image": image.asset->url,
    slug,
    tags,
    description
  }`)
  .then(data => data[0])

  return {
    props: {productDetails}
  }
}