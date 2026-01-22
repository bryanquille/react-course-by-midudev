import { createContext } from "react";
import type { Item } from "../types/types";

type ItemsContextType = {
  items: Item[]
}

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined)