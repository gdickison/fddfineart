/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const ProductModal = ({id, title, image, slug, closeModal}) => {
  return (
    <div key={id} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  w-[100vw] h-[100vh] gap-4 p-6 sm:py-8 sm:px-12 bg-black text-gray-100">
      <button className="absolute top-4 right-4 w-12 h-12 hover:cursor-pointer" onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-8 h-8">
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain"
      />
      <p className="text-center text-gray-200">
        <span className="font-libre">{title}</span>
        <span>{` - `}</span>
        <span className="font-libre">Size Goes Here</span>
        <span>{` - `}</span>
        <Link href={`/product-details/${slug}`}>
          <span className="underline font-libre hover:text-gray-400 hover:cursor-pointer">See Purchase Options</span>
        </Link>
      </p>
    </div>
  )
}
export default ProductModal