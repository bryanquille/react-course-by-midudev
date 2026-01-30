import { Children } from "react"
import { match } from "path-to-regexp"
import { useCurrentPath } from "./hooks/useCurrentPath"
import type { PageType } from "./types/types"

type RouterPropsTypes = {
  routes: PageType[]
  defaultComponent?: React.ComponentType
  children?: React.ReactNode
}

function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404: Not Found</h1>,
  children
}: RouterPropsTypes) {
  const { currentPath } = useCurrentPath()

  let routeParams = {}

  const routesFromChildren = Children.map(children, (child: any) => {
    const { props, type } = child
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean) as PageType[]

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    /*
      Usamos path-to-regexp para detectar rutas dinámicas
      /search/:query <-- :query es una ruta dinámica
    */
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false
    routeParams = matched.params
    return true

  })?.component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent />
}

export default Router