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

  const addToCart = e => {
    e.preventDefault()
    alert("Added to cart")
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
          <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-100 text-3xl title-font font-thin mb-4">{title}</h1>
              <p className="leading-relaxed mb-4 text-xl font-thin text-gray-100">{productDetails.description}</p>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Size</label>
                <select className="w-1/2 mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
                  <option key="size_24x36" value="size24x36" selected>24x36</option>
                  <option key="size_8x10" value="size8x10">8x10</option>
                  <option key="size_36x48" value="size36x48">36x48</option>
                </select>
              </div>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Media</label>
                <select className="w-1/2 mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                  <option key="media_art_paper" value="media_art_paper" selected>Art Paper</option>
                  <option key="media_canvas" value="media_canvas">Canvas</option>
                  <option key="media_saw_blade" value="media_saw_blade">Saw Blade</option>
                </select>
              </div>
              <div className="flex justify-between border-t border-gray-200 py-2">
              <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Frame</label>
              <select className="w-1/2 mx-2 text-center border-2 border-blue-400 bg-white text-black rounded-md font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                <option key="frame_none" value="frame_none" selected>None</option>
                <option key="frame_wood" value="frame_wood">Wood</option>
                <option key="frame_other" value="frame_other">Other</option>
              </select>
              </div>
              <div className="flex items-center justify-between border-t border-b mb-6 border-gray-200 py-2">
                <span className="w-1/2 font-thin text-xl mx-2 text-gray-100">Quantity</span>
                <div className="w-1/2 flex justify-center">
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
              </div>
              <div className="flex justify-between items-center">
                <span className="w-1/2 title-font font-medium text-2xl text-gray-900">$58.00</span>
                <div className="w-1/2">
                  <button type="button" className="w-full px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800" onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
            <img className="w-1/2 m-auto" src={images[0]} alt={title} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
