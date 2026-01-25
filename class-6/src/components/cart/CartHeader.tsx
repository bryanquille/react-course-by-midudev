import { useContext } from "react"
import { CloseIcon } from "../Icons"
import { CartContext } from "../../context/CartContext"

function CartHeader() {
  const cartContext = useContext(CartContext)
  if (!cartContext) return null
  const { closeCart } = cartContext

  return (
    <header className="relative">
      <h2 className="mb-8 font-bold text-3xl text-center">Cart</h2>
      <button
        type="button"
        className="absolute top-1/2 right-2 cursor-pointer transform -translate-y-1/2 hover:opacity-70"
        onClick={closeCart}
      >
        <CloseIcon />
      </button>
    </header>
  )
}

export default CartHeader