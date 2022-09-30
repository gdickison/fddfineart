import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState(0)

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }])
    setTotalQuantities(prevState => prevState + 1)
    toast.success(`${product.title} was Added to Cart`)
  }

  const removeFromCart = (idToDelete) => {
    setCartItems(cartItems.filter(item => item.cartId != idToDelete))
    setTotalQuantities(prevState => prevState - 1)
  }


  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)