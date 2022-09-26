/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function ProductCategories({categories}) {
  return (
    <div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="py-4 text-2xl font-thin tracking-widest text-slate-200 text-center uppercase">Collections</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
          {categories.map((category, idx) => (
            <div key={idx} className="group relative">
              <Link href={`/product-collection/${category.slug.current}`}>
                <div className="hover:cursor-pointer">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none hover:cursor-pointer">
                      <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <h3 className="text-slate-200 text-lg uppercase font-thin">
                        <span aria-hidden="true"  />
                        {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
