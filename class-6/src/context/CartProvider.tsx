import { useEffect, useState, type ReactNode } from "react"
import { CartContext } from "./CartContext"

function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const body = document.children[0].lastElementChild
    if(isCartOpen) {
      body?.setAttribute('style', 'overflow: hidden;')
    }
    
    return () => {
      body?.removeAttribute('style')
    }
  }, [isCartOpen])
  

  const openCart = () => {
    setIsCartOpen(true)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider