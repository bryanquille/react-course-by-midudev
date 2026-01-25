import { useContext } from "react"
import { DecreaseButton, DeleteButton, IncreaseButton } from "./ActionButtons"
import { ItemsContext } from "../../context/ItemsContext"

function MobileCart() {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const shopList = itemsContext.shopList

  return (
    <main className="mb-8 grid-list">
      {
        shopList.length === 0
          ? <p className="text-center text-xl">Your cart is empty!</p>
          : shopList.map(item => {
            return (
              <article
                className="p-4 flex flex-col justify-center items-center gap-5 rounded-2xl text-center bg-slate-800 shadow-sm shadow-slate-300"
                key={item.id}
              >
                <div
                  className="flex flex-col-reverse gap-2"
                >
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <img
                    src={item.image}
                    alt={`Image of ${item.title}`}
                    className="max-h-48 object-contain"
                  />
                </div>
                <div>
                  <p className="mb-0.5">Unit price: <span>${item.price.toFixed(2)}</span></p>
                  <p>Total price: <span>${item.total_price?.toFixed(2)}</span></p>
                </div>
                <div className="w-full flex justify-evenly items-center gap-8">
                  <div className="flex justify-center items-center gap-3">
                    <DecreaseButton item={item} />
                    <span className="text-lg">{item.quantity}</span>
                    <IncreaseButton item={item} />
                  </div>
                  <DeleteButton item={item} />
                </div>
              </article>
            )
          })
      }

    </main>
  )
}

export default MobileCart