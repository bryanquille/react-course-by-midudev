import { useContext } from "react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { BuyButton, ClearButton } from "./ActionButtons"
import CartHeader from "./CartHeader"
import DesktopCart from "./DesktopCart"
import MobileCart from "./MobileCart"
import { CartContext } from "../../context/CartContext"
import { ItemsContext } from "../../context/ItemsContext"

function Cart() {
  const { isMobile } = useIsMobile()

  const cartContext = useContext(CartContext);
  const itemsContext = useContext(ItemsContext)

  if (!cartContext) return null;
  const { isCartOpen } = cartContext;

  if (!itemsContext) return null
  const shopList = itemsContext.shopList

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-full h-screen bg-slate-950 transition-all duration-300 ${isCartOpen ? 'opened-cart' : 'closed-cart'}`}
    >
      <section
        className="absolute top-1/2 left-1/2 w-11/12 max-w-6xl h-11/12 min-h-11/12 p-5 overflow-y-auto rounded-3xl bg-slate-900/60 backdrop-blur-md shadow-md shadow-slate-300 transform -translate-1/2"
      >
        <CartHeader />
        {
          isMobile
            ? <MobileCart />
            : <DesktopCart />
        }
        <footer className="flex justify-between items-center gap-8">
          <p className="text-lg">
            Total:
            <span className="font-semibold text-xl">
              {` $${
              shopList.reduce((sum, item) => {
                if (item.total_price) return sum + item.total_price
                return sum
              }, 0).toFixed(2)
              }`}
            </span>
          </p>
          <BuyButton />
          <ClearButton />
        </footer>
      </section>
    </div>
  )
}

export default Cart