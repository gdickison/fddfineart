/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const ProductDetails = ({productDetails}) => {
  const [selectedOption, setSelectedOption] = useState({})
  const [selectedFrame, setSelectedFrame] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const handleOptionChange = e => {
    e.preventDefault()
    setSelectedOption({...selectedOption, [e.target.name]: e.target.value})
  }

  const handleSizeChange = e => {
    e.preventDefault()
    setSelectedSize({...selectedSize, [e.target.name]: e.target.value})
  }

  const handleMediaChange = e => {
    e.preventDefault()
    setSelectedMedia({...selectedMedia, [e.target.name]: e.target.value})
  }

  const handleFrameChange = e => {
    e.preventDefault()
    setSelectedFrame({...selectedFrame, [e.target.name]: e.target.value})
  }

  const addQuantity = e => {
    e.preventDefault()
    setQuantity(quantity + 1)
  }

  const subtractQuantity = e => {
    e.preventDefault()
    if(quantity > 0){
      setQuantity(quantity - 1)
    }
  }

  {console.log('productDetails', productDetails)}
  const { title, images, product_variants } = productDetails
  return (
    <div>
      <h1 className="p-6 text-3xl text-center font-thin">{title}</h1>
      <img className="w-1/3 m-auto" src={images[0]} alt={title} />
      <div className="flex flex-col items-center p-6 font-thin space-y-6">
        <p className="text-2xl">{productDetails.description}</p>
        <p>{productDetails.blurb}</p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <div className="flex flex-col w-1/5 space-y-4 p-6 items-center border-2 border-blue-300">
          <label className="font-thin text-xl mx-2"  htmlFor="options">Select an option</label>
          <select className="w-1/2 mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="option" name="option" defaultValue="" onChange={handleOptionChange}>
            <option disabled></option>
            { product_variants && product_variants.map(variant => {
              return (
                <option key={variant.title} value={variant.title}>{variant.title}</option>
              )
            })}
          </select>
          <div className="flex flex-col items-center">
            <p className="font-thin text-xl">Price</p>
            <div className="min-h-[44px] m-2 border-2 border-blue-400 p-1 bg-white text-black font-thin text-xl rounded-md">
              <span>$Price</span>
            </div>
          </div>
        </div>
        <div className="flex items-center border-2 border-blue-300">
          <div className="flex">
            <div className="flex flex-col space-y-4 p-6 items-center">
              <label className="font-thin text-xl mx-2"  htmlFor="options">Select a Size</label>
              <select className="w-full mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
                <option key="size_24x36" value="size24x36" selected>24x36</option>
                <option key="size_8x10" value="size8x10">8x10</option>
                <option key="size_36x48" value="size36x48">36x48</option>
              </select>
            </div>
            <div className="flex flex-col space-y-4 p-6 items-center">
              <label className="font-thin text-xl mx-2"  htmlFor="options">Select a Media</label>
              <select className="w-full mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                <option key="media_art_paper" value="media_art_paper" selected>Art Paper</option>
                <option key="media_canvas" value="media_canvas">Canvas</option>
                <option key="media_saw_blade" value="media_saw_blade">Saw Blade</option>
              </select>
            </div>
            <div className="flex flex-col space-y-4 p-6 items-center">
              <label className="font-thin text-xl mx-2"  htmlFor="options">Select a Frame</label>
              <select className="w-full mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                <option key="frame_none" value="frame_none" selected>None</option>
                <option key="frame_wood" value="frame_wood">Wood</option>
                <option key="frame_other" value="frame_other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-thin text-xl">Price</p>
            <div className="min-h-[44px] m-2 border-2 border-blue-400 p-1 bg-white text-black font-thin text-xl rounded-md">
              <span>$Price</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <span className="flex items-center justify-center w-12 h-12 group hover:cursor-pointer" onClick={subtractQuantity}>
            <svg className="fill-current text-gray-100 w-3 group-active:scale-150" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </span>
          <span className="flex justify-center items-center bg-white mx-2 border w-12 h-12 text-gray-800">{quantity}</span>
          <span className="flex items-center justify-center w-12 h-12 group hover:cursor-pointer" onClick={addQuantity}>
            <svg className="fill-current text-gray-100 w-3 group-active:scale-150" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </span>
        </div>
        <div>
          <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

{/* <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
    </div>
  </div>
</section> */}