import Searcher from "./components/Searcher"
import Loader from "./components/Loader"
import MoviesList from "./components/MoviesList"
import GoTopButton from "./components/GoTopButton"
import { useSearch } from "./hooks/useSearch"
import { useMovies } from "./hooks/useMovies"

function App() {
  const { query, search, sort, handleChange, handleSubmit, handleSort } = useSearch()
  const { movies, loading } = useMovies({search, sort})

  return (
    <>
      <h1 className="mt-10 mb-8 font-bold text-center text-4xl">
        Movie Searcher App
      </h1>
      <Searcher
        query={query}
        sort={sort}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onSort={handleSort}
      />
      <div className="w-11/12 max-w-7xl mx-auto mb-12 px-4 grid place-items-center">
        {
          loading
            ? <Loader />
            : <MoviesList movies={movies} />
        }
      </div>
      <GoTopButton />
    </>
  )
}

export default App