import { useEffect, useMemo, useRef, useState } from "react"
import { getMovies } from "../services/getMovies"

type Movie = {
  id: number
  title: string
  imageUrl: string
  year: string
}

type useMoviesProps = {
  search: string
  sort: boolean
}

export const useMovies = ({ search, sort }: useMoviesProps) => {
  const [movies, setMovies] = useState<Movie[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const previousSearch = useRef(search)

  useEffect(() => {
    const fetchMovies = async () => {
      if (previousSearch.current === search) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const response = await getMovies(search)
        setMovies(response)
      } catch (err) {
        console.log(err)
        if (err instanceof Error) setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()

  }, [search])

  const sortedMovies = useMemo(() => {
    return sort && movies
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return {
    movies: sortedMovies,
    loading,
    error,
  }
}
