import { useEffect, useRef, useState } from "react"

export const useHeightElement = () => {
  const [heightEl, setHeightEl] = useState<number | null>(null)
  const element = useRef<HTMLElement>(null)

  useEffect(() => {
    const getHeightElement = () => {
      if(element.current?.clientHeight) {
        const height = element.current?.clientHeight
        setHeightEl(height)
      }
    }
    getHeightElement()
  }, [])

  return {
    heightEl,
    element
  }
}
