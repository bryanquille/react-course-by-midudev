import { useEffect, useState } from "react"

export const useMouseFollow = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const {clientX, clientY} = e
      setPosition({x:clientX, y:clientY})
    }

    if(enabled) window.addEventListener('pointermove', handleMove)
    
    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({x:0, y:0})
    }

  }, [enabled])
  
  const handleClick = () => {
    setEnabled(!enabled)
  }

  return {
    enabled,
    position,
    handleClick
  }
}
