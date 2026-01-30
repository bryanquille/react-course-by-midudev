import Router from "./Router"
import Page404 from "./errorPages/Page404"
import SearchPage from "./pages/SearchPage"
import Route from "./Route"
import { lazy, Suspense } from "react"

const lazyHomePage = lazy(() => import("./pages/HomePage"))
const lazyAboutPage = lazy(() => import("./pages/AboutPage"))

const appRoutes = [
  {
    path: '/search/:query',
    component: SearchPage
  }
]

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" component={lazyHomePage} />
          <Route path="/about" component={lazyAboutPage} />
        </Router>
      </Suspense>
    </>
  )
}

export default App