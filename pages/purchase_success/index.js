import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext'

const PurchaseSuccess = () => {
  const { setCartItems, setTotalPrice } = useStateContext()
  const {query} = useRouter()

  useEffect(() => {
    const updatePainting = async () => {
      const _id = query.original_id

      if(query.success && query.original === 'sold'){
        try {
          await fetch('/api/originalSold', {
            method: 'PUT',
            body: JSON.stringify({_id}),
            type: 'application/json'
          })
        } catch (error) {
          console.log('error', error)
        }
      }
    }

    updatePainting()

    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
  }, [query, setCartItems, setTotalPrice])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          {query.success &&
            <>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Purchase Was Successful!</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thank you for your purchase.</p>
            </>
          }
          {query.canceled &&
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Purchase Was Cancelled</h1>
          }
        </div>
        <div className="flex justify-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <Link href="/">
          <button type="button" className="w-full md:w-1/2 py-2 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black">Continue Shopping</button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default PurchaseSuccess