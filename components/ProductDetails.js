/* eslint-disable @next/next/no-img-element */
import HeroBanner from "./HeroBanner"
import { useState } from "react"

const ProductDetails = ({productDetails}) => {
  const [selectedOption, setSelectedOption] = useState({})
  const [selectedFrame, setSelectedFrame] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [quantity, setQuantity] = useState(1)

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
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  {console.log('productDetails', productDetails)}
  const { title, images, product_variants } = productDetails
  return (
    <div>
      <main>
        <HeroBanner/>
      </main>
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
            <svg className="fill-current text-gray-100 w-3" viewBox="0 0 448 512" onClick={subtractQuantity}>
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input className="mx-2 border text-center w-8 text-gray-800" type="text" value={quantity} ></input>
            <svg className="fill-current text-gray-100 w-3" viewBox="0 0 448 512" onClick={addQuantity}>
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails