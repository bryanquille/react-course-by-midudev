import { useEffect, useState } from "react"
import { EVENTS } from "./constants"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
  
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POSTSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POSTSTATE, onLocationChange)
    }
  }, [])
  
  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App