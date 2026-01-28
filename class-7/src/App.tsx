import { useEffect, useState } from "react"

const NAVIGATION_EVENT = 'pushState'

function navigate(path: string) {
  window.history.pushState({}, '', path)
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga officia rem. Aut voluptatum id dolorum velit magnam delectus quidem vero natus impedit, error ipsa exercitationem blanditiis quisquam perferendis temporibus.</p>
      <button
        type="button"
        onClick={() => navigate('/about')}
      >
        Go to AboutPage
      </button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>AboutPage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga officia rem. Aut voluptatum id dolorum velit magnam delectus quidem vero natus impedit, error ipsa exercitationem blanditiis quisquam perferendis temporibus.</p>
      <img src="https://cdn.pixabay.com/photo/2026/01/11/08/15/08-15-24-346_1280.png" alt="Image of a girl who is seeing fireworks." />
      <button
        type="button"
        onClick={() => navigate('/')}
      >
        Go to HomePage
      </button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
  
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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