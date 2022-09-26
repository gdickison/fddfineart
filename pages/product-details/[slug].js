import { useRouter } from "next/router";
import { client } from "../../lib/client";

const ProductDetailsPage = ({productDetails}) => {

  return (
    <div>
      {productDetails && productDetails.map(product => {
        return (
          <div key={product._id}>
            <p>Product Details for {product.title} Go Here</p>
          </div>
        )
      })
      }
    </div>
  )
}

export default ProductDetailsPage

export const getServerSideProps = async (context) => {
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

  return {
    props: {productDetails}
  }
}