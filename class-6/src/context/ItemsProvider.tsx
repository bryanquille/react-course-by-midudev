import { useEffect, useReducer, useState, type ReactNode } from "react";
import { ItemsContext } from "./ItemsContext";
import type { Item } from "../types/types";

type ItemsProviderProps = {
  children: ReactNode
}

function shopReducer(state: Item[], action: { type: string; payload?: Item }) {
  switch (action.type) {
    case '[CART]: Add to cart':
      if (action.payload && !action.payload?.quantity) {
        const newItem = { ...action.payload }
        newItem.quantity = 1
        newItem.total_price = action.payload?.price
        return [...state, newItem]
      }
      return [
        ...state,
        action.payload as Item,
      ]
    case '[CART]: Remove to cart':
      return state.filter(item => item.id !== action.payload?.id)
    case '[CART]: Clear cart':
      return []
    case '[CART]: Decrease quantity':
      return state.map(item => {
        const newQuantity = item.quantity && item.quantity - 1
        const newPrice = (item.total_price && newQuantity) && item.price * newQuantity
        if (item.id === action.payload?.id && item.quantity && item.quantity > 1) {
          return {
            ...item,
            quantity: newQuantity,
            total_price: newPrice,
          }
        }
        return item
      })
    case '[CART]: Increase quantity':
      return state.map(item => {
        const newQuantity = item.quantity && item.quantity + 1
        const newPrice = (item.total_price && newQuantity) && item.price * newQuantity
        if (item.id === action.payload?.id && item.quantity) {
          return {
            ...item,
            quantity: newQuantity,
            total_price: newPrice,
          }
        }
        return item
      })
    default:
      return state
  }
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

  const [shopList, dispatch] = useReducer(shopReducer, items)

  const addItemToCart = (item: Item) => {
    for (let i = 0; i < shopList.length; i++) {
      if (shopList[i].id === item.id) return
    }

    const action = {
      type: '[CART]: Add to cart',
      payload: item
    }
    dispatch(action)
  }

  const removeItemToCart = (item: Item) => {
    const action = {
      type: '[CART]: Remove to cart',
      payload: item
    }
    dispatch(action)
  }

  const clearCart = () => {
    const action = {
      type: '[CART]: Clear cart',
    }
    dispatch(action)
  }

  const decreaseQuantity = (item: Item) => {
    const action = {
      type: '[CART]: Decrease quantity',
      payload: item
    }
    dispatch(action)
  }

  const increaseQuantity = (item: Item) => {
    const action = {
      type: '[CART]: Increase quantity',
      payload: item
    }
    dispatch(action)
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        shopList,
        addItemToCart,
        removeItemToCart,
        clearCart,
        decreaseQuantity,
        increaseQuantity
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider
