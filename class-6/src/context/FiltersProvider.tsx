import { useState, type ReactNode } from "react"
import { FiltersContext } from "./FiltersContext"
import type { Item } from "../types/types"

type FiltersProviderProps = {
  children: ReactNode
}

function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState({ category: 'all', maxPrice: 0 })

  const filterItems = (items: Item[]) => {
    if (filters.maxPrice === 0) {
      return items.filter(item => {
        return (item.category === filters.category ||
          filters.category === 'all')
      })
    }
    return items.filter(item => {
      return item.price <= filters.maxPrice &&
        (
          filters.category === 'all' ||
          filters.category === item.category
        )
    })
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        filterItems
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersProvider