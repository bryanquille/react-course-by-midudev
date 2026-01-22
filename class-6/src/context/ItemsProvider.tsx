import { useEffect, useState, type ReactNode } from "react";
import { ItemsContext } from "./ItemsContext";
import type { Item } from "../types/types";

type ItemsProviderProps = {
  children: ReactNode
}

function ItemsProvider({ children }: ItemsProviderProps) {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data: Item[] = await response.json()
        setItems(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  return (
    <ItemsContext.Provider
      value={{
        items,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider
