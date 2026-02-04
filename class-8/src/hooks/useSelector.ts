import { useState } from "react"
import type { selectorType } from "../types/types"

export const useSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const [selector, setSelector] = useState<selectorType>('from')

  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen)
  }

  const closeSelector = () => {
    setIsSelectorOpen(false)
  }

  const setFromSelector = () => {
    setSelector('from')
  }

  const setToSelector = () => {
    setSelector('to')
  }

  return {
    isSelectorOpen,
    selector,
    setFromSelector,
    setToSelector,
    toggleSelector,
    closeSelector,
  }
}
