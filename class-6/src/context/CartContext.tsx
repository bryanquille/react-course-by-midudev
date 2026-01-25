import { createContext } from "react";

type CartStatusTypes = {
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

export const CartContext = createContext<CartStatusTypes | undefined>(undefined)