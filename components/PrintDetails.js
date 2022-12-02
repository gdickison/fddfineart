import { useState } from "react"
import { useStateContext } from "../context/StateContext"

export default function PrintDetails ({printOptions}) {

  const [selectedFrame, setSelectedFrame] = useState({
    'id': printOptions.frameOptions[0].key,
    'frame': printOptions.frameOptions[0].style,
    'width': printOptions.frameOptions[0].width,
    'height': printOptions.frameOptions[0].height,
    'price': printOptions.frameOptions[0].unitPrice
  })
  const [selectedSize, setSelectedSize] = useState({
    'id': printOptions.sizeOptions[0].key,
    'size': printOptions.sizeOptions[0].sizeLabel,
    'width': printOptions.sizeOptions[0].width,
    'height': printOptions.sizeOptions[0].height,
    'price': printOptions.sizeOptions[0].unitPrice
  })
  const [selectedMedia, setSelectedMedia] = useState({
    'id': printOptions.mediaOptions[0].key,
    'media': printOptions.mediaOptions[0].style,
    'price': printOptions.mediaOptions[0].unitPrice
  })

  const handleSizeChange = e => {
    e.preventDefault()
    printOptions.sizeOptions.find(option => {
      if(option.key === e.target.value){
        setSelectedSize({
          'key': option.key,
          'size': option.sizeLabel,
          'price': option.unitPrice,
          'width': option.width,
          'height': option.height
        })
      }
    })
  }

  const handleMediaChange = e => {
    e.preventDefault()
    printOptions.mediaOptions.find(option => {
      if(option.key === e.target.value){
        setSelectedMedia({
          'key': option.key,
          'media': option.style,
          'price': option.unitPrice
        })
      }
    })
  }

  const handleFrameChange = e => {
    e.preventDefault()
    printOptions.frameOptions.find(option => {
      if(option.key === e.target.value){
        setSelectedFrame({
          'key': option.key,
          'frame': option.style,
          'price': option.unitPrice,
          'width': option.width,
          'height': option.height
        })
      }
    })
  }

  const { addToCart } = useStateContext()

  const { id, title, image } = printOptions

  const handleAddPrintToCart = e => {
    e.preventDefault()
    const cartId = self.crypto.randomUUID()
    const itemPrice = selectedFrame.price + selectedSize.price + selectedMedia.price
    const frameStyle = selectedFrame.frame
    const frameWidth = selectedFrame.width
    const frameHeight = selectedFrame.height
    const printMedia = selectedMedia.media
    const printSize = selectedSize.size
    const printWidth = selectedSize.width
    const printHeight = selectedSize.height

    addToCart({cartId, id, title, image, frameStyle, frameWidth, frameHeight, printMedia, printSize, printWidth, printHeight, itemPrice})
  }

  return (
    <div>
      <h2 className="text-black text-2xl title-font font-thin mb-4">Purchase a Print</h2>
      <div className="flex justify-between border-t border-gray-200 py-2">
        <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select Size</label>
        <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="size" name="size" defaultValue="" onChange={handleSizeChange}>
          {printOptions && printOptions.sizeOptions.map(option => {
            return (
              <option key={option.key} value={option.key}>{`${option.height}" x ${option.width}"`}</option>
            )
          })}
        </select>
      </div>
      <div className="hidden"> {/* Remove this div when media and frame options are added to Sanity */}
        <div className="flex justify-between border-t border-gray-200 py-2">
          <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select Media</label>
          <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="media" name="media" defaultValue="" onChange={handleMediaChange}>
            {printOptions && printOptions.mediaOptions.map(option => {
              return (
                <option key={option.style} value={option.style}>{option.style}</option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-between border-t border-gray-200 py-2">
          <label className="font-thin text-xl mx-2 text-black"  htmlFor="options">Select Frame</label>
          <select className="w-1/2 mx-2 text-center border-2 hover:border-gray-800 bg-white text-black font-thin text-xl" id="frame" name="frame" defaultValue="" onChange={handleFrameChange}>
            {printOptions && printOptions.frameOptions.map(option => {
                return (
                  <option key={option.key} value={option.key}>{option.style} {option.style !== "No Frame" ? `(${option.height}" x ${option.width}")` : ''}</option>
                )
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 py-2 items-center">
        <span className="title-font text-xl mx-2 text-black" >{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(selectedFrame.price + selectedSize.price + selectedMedia.price)}</span>
        <div className="w-1/2 mx-2">
          <button type="button" className="w-full py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={handleAddPrintToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
