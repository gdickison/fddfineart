import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState()
  const [qty, setQty] = useState(1)

  const incQty = () => {
    setQty(prevQty => prevQty + 1)
  }

  const decQty = () => {
    setQty(prevQty => {
      if(prevQty > 0){
        return prevQty - 1
      }
    })
  }

  const addToCart = (product) => {
    console.log('product', product)
    
    setCartItems([...cartItems, { ...product }])
    toast.success(`${product.title} was Added to Cart`)
    console.log('cartItems', cartItems)
  }


  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        addToCart
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)