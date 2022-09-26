/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { client } from "../../lib/client";
import Link from "next/link";

const ProductCollectionPage = ({products}) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1 className="text-3xl text-center">Category: {slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
      {products && products.map((product, idx) => {
        return(
          <div key={idx} >
            <div key={product._id}>
              <Link href={{
                pathname: '/product-details/[slug]',
                query: {slug: product.slug.current}
              }}>
                <div>
                  <h1 className="text-white">{product.title}</h1>
                  <img className="h-96" src={product.images[0]} alt={product.title} />
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductCollectionPage

export const getServerSideProps = async (context) => {
  const products = await client.fetch(`*[_type == "category" && slug.current == "${context.params.slug}"]{
    _id,
    title,
    "products": products[]->{
      _id,
      title,
      "images": images[].asset->url,
      "product_variants": product_variants->{
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
      categories,
      description->{
        children[]{
          text
        }
      },
      "description": description[].children[].text
    }
  }`)
  .then(data => data[0].products)

  return {
    props: {products}
  }
}
