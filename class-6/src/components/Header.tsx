import { useContext } from "react"
import { CartIcon } from "./Icons"
import { CartContext } from "../context/CartContext"
import { ItemsContext } from "../context/ItemsContext"

type HeaderProps = {
  elementRef: React.RefObject<HTMLElement | null>
}

function Header({ elementRef }: HeaderProps) {
  const cartContext = useContext(CartContext)
  const itemsContext = useContext(ItemsContext)

  if (!cartContext) return null
  const { openCart } = cartContext

  if (!itemsContext) return null
  const shopList = itemsContext.shopList

  return (
    <header
      className="fixed top-3 left-1/2 w-11/12 max-w-3xl py-3 rounded-xl bg-slate-900/60 backdrop-blur-xs shadow-md shadow-neutral-400 transform -translate-x-1/2"
      ref={elementRef}
    >
      <h1>Cart App</h1>
      <button
        type="button"
        className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2"
        onClick={openCart}
      >
        <CartIcon />
        {
          shopList.length !== 0
          && <span
            className="absolute top-0 ring-0 w-5 h-5 rounded-full text-sm font-semibold bg-purple-500 text-neutral-100 transform -translate-y-1/2"
          >
            {
              shopList.length
            }
          </span>
        }
      </button>
    </header>
  )
}

export default Header