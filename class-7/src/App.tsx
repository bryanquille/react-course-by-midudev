import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Router from "./Router"
import Page404 from "./errorPages/Page404"

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

function App() {
  return (
    <>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </>
  )
}

export default App