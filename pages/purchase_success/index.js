import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext'

const PurchaseSuccess = () => {
  const { setCartItems, setTotalPrice } = useStateContext()
  const [order, setOrder] = useState(null)

  const updatePainting = async () => {
    const _id = "40b83307-79cb-4e91-b75c-923e6da004de"

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

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    updatePainting()
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Purchase Was Successful!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep.</p>
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