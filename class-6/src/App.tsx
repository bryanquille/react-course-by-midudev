import { useEffect, useState } from "react"
import { useHeightElement } from "./hooks/useHeightElement"
import Header from "./components/Header"
import GoTopButton from "./components/GoTopButton"
import ListItems from "./components/ListItems"
import Filters from "./components/Filters"

type Item = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

function App() {
  const { heightEl, element } = useHeightElement()

  const [items, setItems] = useState<Item[] | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [pricesList, setPricesList] = useState<number[]>([])
  const [filter, setFilter] = useState({ category: 'all', maxPrice: 0 })

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data: Item[] = await response.json()
        setItems(data)
        setCategories([
          'all',
          ...new Set(data.map(item => item.category))
        ])
        setPricesList([
          0,
          ...new Set(data.map(item => item.price))
        ].sort((a, b) => a - b))
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  const filterItems = (items: Item[]) => {
    if (filter.maxPrice === 0) {
      return items.filter(item => {
        return (item.category === filter.category ||
          filter.category === 'all')
      })
    }
    return items.filter(item => {
      return item.price <= filter.maxPrice &&
        (
          filter.category === 'all' ||
          filter.category === item.category
        )
    })
  }

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenCategory = e.target.value
    setFilter({
      ...filter,
      category: chosenCategory,
    })
  }

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = Number(e.target.value)
    setFilter({
      ...filter,
      maxPrice: newPriceRange
    })
  }

  const filteredItems = items && filterItems(items)

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
          categories={categories}
          pricesList={pricesList}
          filter={filter}
          handleCategory={handleCategory}
          handlePrice={handlePrice}
        />
        {
          filteredItems && <ListItems items={filteredItems} />
        }
      </main>
      <GoTopButton />
    </>
  )
}

export default App