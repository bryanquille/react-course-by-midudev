import { useContext } from "react"
import type { Item } from "../types/types"
import { AddCartIcon } from "./Icons"
import { ItemsContext } from "../context/ItemsContext"

type ItemsProps = {
  item: Item
}

function Items({ item }: ItemsProps) {
  const itemsContext = useContext(ItemsContext)
  if(!itemsContext) return null
  const addItemToCart = itemsContext.addItemToCart

  return (
    <li
      className="p-4 flex flex-col justify-between items-center bg-stone-800 shadow-2xs shadow-stone-50 rounded-2xl"
    >
      <div className="flex flex-col-reverse justify-center items-center gap-6">
        <h3
          className="mb-4 text-center font-semibold text-lg text-pretty"
        >
          {item.title}
        </h3>
        <img
          src={item.image}
          alt={`Image of ${item.title}`}
          className="max-h-52"
        />
      </div>
      <p className="mb-6 text-sm text-stone-400 text-center">{item.category}</p>
      <div className="w-full flex justify-between items-center gap-2">
        <p className="text-center text-2xl font-semibold">
          ${item.price.toFixed(2)}
        </p>
        <button
          type="button"
          className="cursor-pointer px-4 py-2 flex justify-center items-center gap-2 border-2 border-neutral-200 rounded-2xl hover:bg-stone-900 hover:opacity-80"
          onClick={() => addItemToCart(item)}
        >
          <span>Add to Cart</span>
          <AddCartIcon />
        </button>
      </div>
    </li>
  )
}

export default Items