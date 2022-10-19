/* eslint-disable @next/next/no-img-element */
import toast from "react-hot-toast"
import { useStateContext } from "../context/StateContext"
import getStripe from "../lib/getStripe"

const Cart = () => {
  const { setShowCart, cartItems, removeFromCart } = useStateContext()

  const priceArray = cartItems.map(item => {
    return item.original ? item.original_price : item.selectedFrame.price + item.selectedSize.price + item.selectedMedia.price
  })

  const cartTotalPrice = priceArray.reduce((a, b) => {
    return a + b
  }, 0)

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cartItems, cartTotalPrice})
    })

    if(response.statusCode === 500){
      return
    }

    const data = await response.json()

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className="fixed inset-0 overflow-auto z-50">
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[98%] landscape:w-3/4 max-w-4xl h-fit overflow-scroll landscape:max-h-[100vh] landscape:min-h-[25vh] p-6 landscape:p-10 ${cartItems.length === 0 ? '' : 'space-y-4'} sm:p-6 text-gray-900 border-2 shadow-xl bg-white`}>
        <button className={`absolute ${cartItems.length === 0 ? 'top-1/2 -translate-y-1/2 right-4' : 'top-3 right-4 md:top-6 md:right-6'} w-12 hover:cursor-pointer`} onClick={() => setShowCart(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 md:w-8">
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>
        {cartItems.length === 0 &&
          <div className="text-lg text-left my-auto xs:text-center">
            <p>Your Cart is Empty</p>
          </div>
        }
        {cartItems.length > 0 &&
          <>
            <h2 className="text-lg uppercase">Your cart</h2>
            <div className="border-y-2">
              <div className="flex flex-col divide-y divide-gray-300">
                {cartItems.map(item => {
                  return (
                    <div key={item.cartId} className="flex items-center">
                      <div className="py-4">
                        <img className="w-36 md:w-80" src={item.image} alt={item.title} />
                      </div>
                      <div className="flex flex-col text-sm sm:text-lg md:text-xl landscape:text-2xl items-start pl-3 md:p-8 lg:p-16">
                        <div className="font-medium text-left">
                          <h3 className="">{item.title}</h3>
                        </div>
                        <div className="font-light">
                          {item.original &&
                            <>
                              <p>Original ({item.original_dimensions})</p>
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
                        <div>
                          <p className="font-light">
                            Price: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(item.original ? item.original_price : item.selectedFrame.price + item.selectedSize.price + item.selectedMedia.price)}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-8">
                          <button type="button" className="hover:cursor-pointer" onClick={() => removeFromCart(item.cartId)}>
                            <img src="/trash_can.svg" alt="remove from cart" className="w-6 md:w-8"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold text-lg md:text-xl landscape:text-2xl">
                  Total: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(cartTotalPrice)}
                </p>
                <p className="text-xs md:text-sm landscape:text-base text-gray-900">Price includes US taxes and US shipping</p>
              </div>
              <div className="flex justify-end space-x-4">
                {/* <button type="button" className="px-6 py-2 bg-gray-100 text-gray-800 border-2 hover:border-black" onClick={e => setShowCart(false)}>
                  Continue Shopping
                </button> */}
                <button type="button" className="px-6 py-2 bg-gray-100 text-gray-800 border-2 hover:border-black hover:bg-black hover:text-gray-100 uppercase tracking-widest font-semibold" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Cart