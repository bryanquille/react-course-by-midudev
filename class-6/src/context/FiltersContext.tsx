import { createContext } from "react";
import type { Item } from "../types/types";

type FiltersContextType = {
  filters: {
    category: string
    maxPrice: number
  }
  setFilters: (filters: FiltersContextType['filters']) => void
  filterItems: (items: Item[]) => Item[]
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined)