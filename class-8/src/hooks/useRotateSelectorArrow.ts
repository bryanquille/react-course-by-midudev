import { useEffect, useState } from "react"

export const useRotateSelectorArrow = (isSelectorOpen: boolean, toggleSelector: () => void) => {
    const [isOpen, setIsOpen] = useState(false)
  const rotateArrow = () => {
      setIsOpen(!isOpen)
      toggleSelector()
  }

  useEffect(() => {
    const closeSelector = () => {
      setIsOpen(false)
    }
    if(!isSelectorOpen) {
      closeSelector()
    }
  }, [isSelectorOpen])
  return {
    isOpen,
    rotateArrow
  }
}
