import { useContext, useEffect, useState, useMemo } from "react"
import { ItemsContext } from "../context/ItemsContext"
import { FiltersContext } from "../context/FiltersContext"
import type { Item } from "../types/types"

export const useFilters = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [pricesList, setPricesList] = useState<number[]>([])
  const filtersContext = useContext(FiltersContext)
  const filters = filtersContext?.filters
  const setFilters = filtersContext?.setFilters
  const context = useContext(ItemsContext)
  const items = useMemo(() => context?.items || [], [context?.items])

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenCategory = e.target.value
    if (setFilters && filters) {
      setFilters({
        ...filters,
        category: chosenCategory,
      })
    }
  }

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = Number(e.target.value)
    if (setFilters && filters) {
      setFilters({
        ...filters,
        maxPrice: newPriceRange
      })
    }
  }

  useEffect(() => {
    const getFiltersData = (items: Item[]) => {
      setCategories([
        'all',
        ...new Set(items.map(item => item.category))
      ])
      setPricesList([
        0,
        ...new Set(items.map(item => item.price))
      ].sort((a, b) => a - b))
    }
    getFiltersData(items)
  }, [items])

  return {
    filters,
    handleCategory,
    handlePrice,
    categories,
    pricesList,
  }
}
