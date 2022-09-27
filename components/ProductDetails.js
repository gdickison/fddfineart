/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const ProductDetails = ({productDetails}) => {
  const [selectedFrame, setSelectedFrame] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [originalAvailable, setOriginalAvailable] = useState(true)
  const [printsAvailable, setPrintsAvailable] = useState(true)

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

  const { title, images, product_variants } = productDetails
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 mb-6 lg:mb-0">
              <h1 className="text-gray-100 text-3xl title-font font-thin mb-4">{title}</h1>
              <p className="leading-relaxed mb-4 text-lg font-thin text-gray-100">{productDetails.description}</p>
              {originalAvailable &&
                <div>
                <h2 className="text-gray-100 text-2xl title-font font-thin mb-4">Purchase the Original</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-gray-100" >$2000.00</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-3 font-semibold bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-gray-100" onClick={addToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              }
              {printsAvailable &&
                <div>
                  <h2 className="text-gray-100 text-2xl title-font font-thin mb-4">Purchase a Print</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Size</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
                      <option key="size_24x36" value="size24x36" selected>24x36</option>
                      <option key="size_8x10" value="size8x10">8x10</option>
                      <option key="size_36x48" value="size36x48">36x48</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Media</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                      <option key="media_art_paper" value="media_art_paper" selected>Art Paper</option>
                      <option key="media_canvas" value="media_canvas">Canvas</option>
                      <option key="media_saw_blade" value="media_saw_blade">Saw Blade</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-gray-100"  htmlFor="options">Select a Frame</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                      <option key="frame_none" value="frame_none" selected>None</option>
                      <option key="frame_wood" value="frame_wood">Wood</option>
                      <option key="frame_other" value="frame_other">Other</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-gray-100" >$58.00</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-3 font-semibold bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-gray-100" onClick={addToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              }
            </div>
            <img className="w-1/2 m-auto" src={images[0]} alt={title} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
