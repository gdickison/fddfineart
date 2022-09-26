import Link from "next/link";

export default function ProductDetails(products) {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product._id}>
            <Link href={`/products/${product.slug.current}`}></Link>
          </div>
        )
      })}
    </div>
  )
}