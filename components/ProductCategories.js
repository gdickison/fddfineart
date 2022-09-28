/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function ProductCategories({categories}) {
  return (
    <section className="flex flex-wrap max-w-[1170px] mx-auto">
      {categories.map((category, idx) => (
        <Link key={idx} href={`/product-collection/${category.slug.current}`}>
          <img
            src={category.imageUrl}
            alt={category.title}
            className="grow h-72 m-2 object-center object-cover hover:opacity-75 hover:cursor-pointer"
          />
        </Link>
      ))}
    </section>
  )
}
