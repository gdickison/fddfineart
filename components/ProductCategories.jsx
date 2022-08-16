/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const categories = [
  'Recent',
  'Archived',
  'Originals',
  'Prints',
  'Fine Art',
  'Illustration',
  'Idaho',
  'Montana',
  'Oregon',
  'Scotland'
]

const products = [
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Montana_Symphony_2048x_3394ebd7-7af0-4abc-8e1a-948d930d8989.jpg?v=1639537622',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Cape_Kiwanda_42x42_71b146d6-dac0-4e5f-ad01-2cf6c5bba233.jpg?v=1639537620',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Old_Man_Montana_11x14_72f76475-0ada-4f54-91bb-315dff316ce9.jpg?v=1639537617',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Battle_for_Ronan_Keep.jpg?v=1639537614',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Kamiak_Butte.jpg?v=1639537608',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Spring_Greens.jpg?v=1639537605',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/Spring_Valley_Evening.jpg?v=1639537603',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/HelloNinjaFireflies.jpg?v=1639537577',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/The_Snow_Makes_Its_Escape_24x30_6ea775e1-7527-4e5d-bda7-372d0e7cb5ac.jpg?v=1639537631',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0616/3054/6132/products/McDonald_Creek_Falls_8_x_10.jpg?v=1639537627',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }
]

export default function ProductCategories() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="py-4 text-2xl font-thin tracking-widest text-slate-200 text-center uppercase">Collections</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
          {products.map((product, idx) => (
            <div key={idx} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none hover:cursor-pointer">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-slate-200 text-lg uppercase font-thin">
                    <a href={product.href}>
                      <span aria-hidden="true"  />
                      {categories[idx]}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm">{product.color}</p> */}
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
