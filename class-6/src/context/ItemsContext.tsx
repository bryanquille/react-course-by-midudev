import { createContext } from "react";
import type { Item } from "../types/types";

type ItemsContextType = {
  items: Item[]
  shopList: Item[]
  addItemToCart: (item: Item) => void
  removeItemToCart: (item: Item) => void
  clearCart: () => void
  decreaseQuantity: (item: Item) => void
  increaseQuantity: (item: Item) => void
}

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined)