/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../context/StateContext"

const Cart = () => {
  const { setShowCart, cartItems, removeFromCart } = useStateContext()

  const priceArray = cartItems.map(item => {
    return item.original ? item.original_price : item.selectedFrame.price + item.selectedSize.price + item.selectedMedia.price
  })

  const cartTotalPrice = priceArray.reduce((a, b) => {
    return a + b
  }, 0)

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/2 h-fit overflow-scroll max-h-[98vh] p-6 space-y-4 sm:p-10 text-gray-900 border-2 shadow-xl bg-white font-libre">
      <button className="absolute top-12 right-8 w-12 h-12 hover:cursor-pointer" onClick={e => setShowCart(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-8 h-8">
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>
      <h2 className="text-lg uppercase">Your cart</h2>
      <div className="border-y-2">
        <ul className="flex flex-col divide-y divide-gray-300">
          {cartItems && cartItems.map(item => {
            return (
              <li key={item.cartId} className="flex items-center justify-between">
                <div className="py-4">
                  <img className="h-32 w-auto" src={item.image} alt={item.title} />
                </div>
                <div>
                  {item.original &&
                  <>
                    <p>Original</p>
                    <p>{item.original_dimensions}</p>
                  </>
                  }
                  {!item.original &&
                    <>
                      <p>{item.selectedFrame.style}</p>
                      <p>{item.selectedSize.style}</p>
                      <p>{item.selectedMedia.style}</p>
                    </>
                  }
                </div>
                <div className="h-32 flex flex-col items-end justify-evenly">
                  <div>
                    <h3 className="text-lg leading-snug">{item.title}</h3>
                  </div>
                  <div>
                    <p className="text-lg">
                      {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(item.original ? item.original_price : item.selectedFrame.price + item.selectedSize.price + item.selectedMedia.price)}
                    </p>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button type="button" className="flex items-center hover:cursor-pointer" onClick={e => removeFromCart(item.cartId)}>
                      <img src="/trash_can.svg" alt="remove from cart" className="h-8"/>
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col items-end gap-2">
          <p className="font-semibold text-lg">
            Total: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(cartTotalPrice)}
          </p>
          <p className="text-sm text-gray-900">Not including taxes and shipping costs</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="px-6 py-2 border rounded-md border-black" onClick={e => setShowCart(false)}>
            Continue Shopping
          </button>
          <button type="button" className="px-6 py-2 border rounded-md bg-violet-400 disabled:bg-gray-200 text-gray-900 disabled:text-gray-400 border-violet-400 disabled:border-gray-200" disabled={cartItems.length === 0} onClick={e => console.log('checkout button clicked')}>
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart