import { useEffect, useState } from "react"

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const desktopMedia = () => {
      setIsMobile(false)
    }
    if (window.innerWidth >= 1024) {
      desktopMedia()
    }
  }, [])

  return {
    isMobile
  } 
}