import { useRouter } from "next/router";
import { client } from "../../lib/client";
import ProductDetails from "../../components/ProductDetails";
import HeroBanner from "../../components/HeroBanner";

const ProductDetailsPage = ({productDetails}) => {

  return (
    <div>
      <main>
        <HeroBanner/>
      </main>
      <ProductDetails
        productDetails={productDetails}
      />
    </div>
  )
}

export default ProductDetailsPage

export const getStaticPaths = async () => {
  const products = await client.fetch(`*[_type == "product"] {
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
  const productDetails = await client.fetch(`*[_type == "product" && slug.current == "${context.params.slug}"]{
    _id,
    title,
    "images": images[].asset->url,
    "product_variants": product_variants[]{
      "id": _key,
      "title": title,
      "frame": frame[0]->style,
      "media": media[0]->style,
      "size": size->size,
      "price": price,
      "images": images[].asset->url
    },
    slug,
    blurb,
    categories[]->{
      "slug": slug.current
    },
    description[]{
      children[]{
        text
      }
    },
    "description": description[].children[].text
  }`)
  .then(data => data[0])

  return {
    props: {productDetails}
  }
}