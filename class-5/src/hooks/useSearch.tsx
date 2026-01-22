import { useState, useMemo } from "react"
import debounce from "just-debounce-it"

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const debouceGetMovies = useMemo(
    () => debounce((query: string) => setSearch(query), 500),
    []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.currentTarget.value
    setQuery(newQuery)
    debouceGetMovies(newQuery)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newSearch = query.trim().toLowerCase()
    setSearch(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return {
    query,
    search,
    sort,
    handleChange,
    handleSubmit,
    handleSort,
  }
}
