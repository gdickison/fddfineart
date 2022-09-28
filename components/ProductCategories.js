/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function ProductCategories({categories}) {
  return (
    <section className="flex flex-wrap max-w-[1170px] mx-auto">
      {categories.map((category, idx) => (
        <Link key={idx} href={`/product-collection/${category.slug.current}`}>
        <figure className="flex grow hover-effect">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="grow h-72 m-2 object-center object-cover hover:opacity-50 hover:cursor-pointer"
          />
          <figurecaption>
            <div className="caption-container hover:cursor-pointer">
              <h4 className="text-xl">
                {category.title}
              </h4>
              <p>
                32 x 40
              </p>
              <p>
                Original - Sold
              </p>
              <p>
                Print - Available
              </p>
            </div>
          </figurecaption>
        </figure>
        </Link>
      ))}
    </section>
  )
}


// hover section from shopify

{/* <figure class="hover-effect">
            <img class="picture" src="{{ product.featured_image.src | img_url: 'large' }}" alt="{{ product.featured_image.alt | escape }}">
            <figurecaption class="card-body">
                <div class="caption-container">
                    <h4>
                      {{ product.title }}
                    </h4>
                    <p>
                      from {{ product.price | money }}
                    </p>
                    {% unless product.available %}<br><strong>SOLD OUT!</strong>{% endunless %}
                </div>
            </figurecaption>
        </figure> */}