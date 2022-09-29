/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const ProductDetails = ({productDetails}) => {
  const [selectedFrame, setSelectedFrame] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedMedia, setSelectedMedia] = useState(null)

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

  const addToCart = e => {
    e.preventDefault()
    alert("Added to cart")
  }

  const { id, title, image, original, original_price, prints, slug, tags, description } = productDetails
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="mx-auto flex gap-8">
            <div className="w-1/2 m-auto">
              <img  src={image} alt={title} />
            </div>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col justify-center gap-4">
              <div>
                <h1 className="text-black text-3xl title-font font-thin mb-4">{title}</h1>
                <p className="leading-relaxed mb-4  font-thin text-black">{description}</p>
              </div>
              {original &&
                <div>
                <h2 className="text-black text-2xl title-font font-thin mb-4">Purchase the Original</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(original_price)}</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={addToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              }
              {prints &&
                <div>
                  <h2 className="text-black text-2xl title-font font-thin mb-4">Purchase a Print</h2>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Size</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
                      <option key="size_24x36" value="size24x36" selected>24x36</option>
                      <option key="size_8x10" value="size8x10">8x10</option>
                      <option key="size_36x48" value="size36x48">36x48</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Media</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                      <option key="media_art_paper" value="media_art_paper" selected>Art Paper</option>
                      <option key="media_canvas" value="media_canvas">Canvas</option>
                      <option key="media_saw_blade" value="media_saw_blade">Saw Blade</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Frame</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                      <option key="frame_none" value="frame_none" selected>None</option>
                      <option key="frame_wood" value="frame_wood">Wood</option>
                      <option key="frame_other" value="frame_other">Other</option>
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(58)}</span>
                    <div className="w-1/2 mx-2">
                      <button type="button" className="w-full py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={addToCart}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
