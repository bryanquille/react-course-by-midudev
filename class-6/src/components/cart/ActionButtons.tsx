import { useContext } from "react"
import { DecreaseIcon, DeleteAllIcon, DeleteIcon, IncreaseIcon } from "../Icons"
import { ItemsContext } from "../../context/ItemsContext"
import type { Item } from "../../types/types"
import confetti from 'canvas-confetti'

export const IncreaseButton = ({ item }: { item: Item }) => {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const increaseQuantity = itemsContext.increaseQuantity

  return (
    <button
      type="button"
      className="p-1 border-2 border-slate-300 rounded-full hover:opacity-75 hover:bg-green-700"
      onClick={() => increaseQuantity(item)}
    >
      <IncreaseIcon />
    </button>
  )
}

export const DecreaseButton = ({ item }: { item: Item }) => {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const decreaseQuantity = itemsContext.decreaseQuantity

  return (
    <button
      type="button"
      className="p-1 border-2 border-slate-300 rounded-full hover:opacity-75 hover:bg-yellow-600"
      onClick={() => decreaseQuantity(item)}
    >
      <DecreaseIcon />
    </button>
  )
}

export const DeleteButton = ({ item }: { item: Item }) => {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const removeItemToCart = itemsContext.removeItemToCart

  return (
    <button
      type="button"
      className="p-1 border-2 border-slate-300 rounded-md hover:bg-red-400/75"
      onClick={() => removeItemToCart(item)}
    >
      <DeleteIcon />
    </button>
  )
}

export const ClearButton = () => {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const { shopList, clearCart } = itemsContext

  return (
    <button
      type="button"
      className={`px-4 py-2 flex justify-center items-center gap-2 border-2 border-slate-100 rounded-2xl ${shopList.length === 0 ? '' : 'hover:opacity-80 hover:bg-red-600'} `}
      style={{cursor: `${shopList.length === 0 ? 'not-allowed' : 'pointer'}`}}
      onClick={clearCart}
      disabled={shopList.length === 0}
    >
      <span>Delete all</span>
      <DeleteAllIcon />
    </button>
  )
}

export const BuyButton = () => {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const shopList = itemsContext.shopList

  return (
    <button
      type="button"
      className={`px-4 py-2 flex justify-center items-center gap-2 border-2 border-slate-100 rounded-2xl font-semibold bg-green-600  ${shopList.length === 0 ? 'cursor-not-allowed' : 'hover:opacity-75'}`}
      style={{cursor: `${shopList.length === 0 ? 'not-allowed' : 'pointer'}`}}
      onClick={() => confetti()}
      disabled={shopList.length === 0}
    >
      Buy!
    </button>
  )
} 