type Movie = {
  id: number
  title: string
  imageUrl: string
  year: string
}

type MoviesListProps = {
  movies: Movie[] | null
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <>
      {
        movies
          ? movies.length === 0
              ? <p className="text-center text-2xl font-bold">No movies found</p>
              : <ul className="movies-list">
                  {movies.map(movie => {
                    return (
                      <li
                        key={movie.id}
                        className="w-full max-w-80 flex flex-col items-center justify-center gap-4 bg-slate-800 p-4 rounded-xl"
                      >
                        <div
                          className="w-full h-full flex flex-col-reverse items-center justify-center gap-4"
                        >
                          <h3 className="text-2xl font-bold">
                            {movie.title}
                          </h3>
                          <img
                            src={movie.imageUrl}
                            alt={`${movie.title} poster`}
                            className="w-full h-72 object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-400">
                          {movie.year}
                        </p>
                      </li>
                    )
                  })}
                </ul>
          :  ''
      }
    </>
  )
}

export default MoviesList