type MovieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const getMovies = async (search: string) => {
  if(search === '') return null
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmYxNTY1YzFlNjY2OWQ0NjM5NGEzMDdkMzU4NDc4ZSIsIm5iZiI6MTczMzk3NDU1OS44MTMsInN1YiI6IjY3NWE1YTFmZGViNDFkZGU5ZGVjY2FmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TODKpnfs86Nemu3sK55xwCgF7GRzeKf68K9B4VJUffk'
    }
  }
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, options)
  const data = await response.json()
  const moviesList: MovieType[] = data.results
  return moviesList.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      imageUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      year: movie.release_date ? movie.release_date.split('-')[0] : 'No registered year'
    }
  })
}
