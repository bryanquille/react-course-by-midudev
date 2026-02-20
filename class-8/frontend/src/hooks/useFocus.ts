import { useState } from "react"
export const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false)

  const activeFocus = () => {
    setIsFocus(true)
  }

  const disableFocus = () => {
    setIsFocus(false)
  }

  return {
    isFocus,
    activeFocus,
    disableFocus,
  }
}
