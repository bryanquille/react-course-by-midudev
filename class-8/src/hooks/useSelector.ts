import { useState } from "react"

export const useSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const [selector, setSelector] = useState<'from' | 'to'>('from')

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
