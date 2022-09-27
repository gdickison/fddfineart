/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const ProductCollection = ({slug, products}) => {
  return (
    <div>
      <h1 className="text-3xl text-center font-thin">Category: {slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
      <div className="flex justify-evenly p-6">
        {products && products.map((product, idx) => {
          return(
            <div key={idx} >
              <div key={product._id} className="hover:cursor-pointer">
                <Link href={{
                  pathname: '/product-details/[slug]',
                  query: {slug: product.slug.current}
                }}>
                  <div>
                    <img className="h-96" src={product.images[0]} alt={product.title} />
                    <h1 className="text-white text-xl font-thin uppercase text-center p-4">{product.title}</h1>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCollection