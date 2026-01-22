import { useContext } from "react"
import { useHeightElement } from "./hooks/useHeightElement"
import Header from "./components/Header"
import GoTopButton from "./components/GoTopButton"
import ListItems from "./components/ListItems"
import Filters from "./components/Filters"
import { ItemsContext } from "./context/ItemsContext"
import { FiltersContext } from "./context/FiltersContext"

function App() {
  const { heightEl, element } = useHeightElement()
  const context = useContext(ItemsContext)
  const items = context?.items || []
  const filtersContext = useContext(FiltersContext)
  const filterItems = filtersContext?.filterItems || undefined

  const filteredItems = filterItems && filterItems(items)

  return (
    <>
      <Header elementRef={element} />
      <main
        className="w-full max-w-5xl mx-auto"
        style={{ marginTop: `${heightEl && heightEl + 48}px` }}
      >
        <h2 className="text-center font-bold text-3xl">
          Products
        </h2>
        <Filters
        />
        {
          <ListItems items={filteredItems || []} />
        }
      </main>
      <GoTopButton />
    </>
  )
}

export default App