/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const ProductDetails = ({productDetails, frameOptions, sizeOptions, mediaOptions}) => {
  const [selectedFrame, setSelectedFrame] = useState(`${frameOptions[0].style} - ${frameOptions[0].price}`)
  const [selectedSize, setSelectedSize] = useState(`${sizeOptions[0].size} - ${sizeOptions[0].price}`)
  const [selectedMedia, setSelectedMedia] = useState(`${mediaOptions[0].style} - ${mediaOptions[0].price}`)

  const handleSizeChange = e => {
    e.preventDefault()
    setSelectedSize(e.target.value)
  }

  const handleMediaChange = e => {
    e.preventDefault()
    setSelectedMedia(e.target.value)
  }

  const handleFrameChange = e => {
    e.preventDefault()
    setSelectedFrame(e.target.value)
  }

  const addToCart = e => {
    e.preventDefault()
    alert("Added to cart")
  }

  const framePrice = Number(selectedFrame.split(' - ')[1])
  const sizePrice = Number(selectedSize.split(' - ')[1])
  const mediaPrice = Number(selectedMedia.split(' - ')[1])

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
                      {sizeOptions && sizeOptions.map(option => {
                        return (
                          <option key={option.id} value={`${option.size} - ${option.price}`}>{option.size}</option> // TODO: add price to value or onChange
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Media</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
                      {mediaOptions && mediaOptions.map(option => {
                        return (
                          <option key={option.id} value={`${option.style} - ${option.price}`}>{option.style}</option> // TODO: add price to value or onChange
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2">
                    <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select a Frame</label>
                    <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
                      {frameOptions && frameOptions.map(option => {
                        return (
                          <option key={option.id} value={`${option.style} - ${option.price}`}>{option.style}</option> // TODO: add price to value or onChange
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 py-2 items-center">
                    <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(framePrice + sizePrice + mediaPrice)}</span>
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
