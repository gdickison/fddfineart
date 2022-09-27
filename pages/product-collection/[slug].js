/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { client } from "../../lib/client";
import HeroBanner from "../../components/HeroBanner";
import ProductCollection from "../../components/ProductCollection";

const ProductCollectionPage = ({products}) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <main>
        <HeroBanner/>
      </main>
      <ProductCollection
        slug={slug}
        products={products}
      />
    </div>
  )
}

export default ProductCollectionPage

export const getStaticPaths = async () => {
  const categories = await client.fetch(`*[_type == "category"] {
    slug {
      current
    }
  }`)

  const paths = categories.map(category => {
    return {params: {slug: category.slug.current}}
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context) => {
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
