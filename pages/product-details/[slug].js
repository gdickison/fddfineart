import { client } from "../../lib/client";
import ProductDetails from "../../components/ProductDetails";

const ProductDetailsPage = ({productDetails, frameOptions, sizeOptions, mediaOptions}) => {

  return (
    <div>
      <ProductDetails
        productDetails={productDetails}
        frameOptions={frameOptions}
        sizeOptions={sizeOptions}
        mediaOptions={mediaOptions}
      />
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
    placeholder,
    "original": original_available,
    original_price,
    "prints": prints_available,
    slug,
    tags,
    description
  }`)
  .then(data => data[0])

  const frameOptions = await client.fetch(`*[_type == "frame"] | order(price){
    "id": _id,
    style,
    description,
    image,
    price
  }`)

  const sizeOptions = await client.fetch(`*[_type == "sizes"] | order(price){
    "id": _id,
    size,
    price
  }`)

  const mediaOptions = await client.fetch(`*[_type == "media"] | order(price){
    "id": _id,
    style,
    description,
    price
  }`)

  return {
    props: {
      productDetails,
      frameOptions,
      sizeOptions,
      mediaOptions
    }
  }
}