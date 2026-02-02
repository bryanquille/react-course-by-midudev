import { useState } from "react"

export const useSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)

  const toggleSelector = () => {
    setIsSelectorOpen(!isSelectorOpen)
  }

  const closeSelector = () => {
    setIsSelectorOpen(false)
  }
  return {
    isSelectorOpen,
    toggleSelector,
    closeSelector,
  }
}
