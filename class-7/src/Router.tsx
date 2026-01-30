import { useEffect, useState } from "react"
import { EVENTS } from "./constants"

type PageType = {
  path: string
  component: React.ComponentType
}

type RouterPropsTypes = {
  routes: PageType[]
  defaultComponent?: React.ComponentType
}

function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404: Not Found</h1> }: RouterPropsTypes) {
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

  const Page = routes.find(({path}) => path === currentPath)?.component

  return Page ? <Page /> : <DefaultComponent />
}

export default Router