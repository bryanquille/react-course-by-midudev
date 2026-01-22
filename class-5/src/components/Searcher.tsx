type SearcherProps = {
  query: string
  sort: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onSort: () => void
}

function Searcher({query, sort, onChange, onSubmit, onSort}: SearcherProps) {
  return (
    <form
      className="w-11/12 max-w-2xl mx-auto mb-8 flex justify-evenly items-center gap-4"
      onSubmit={onSubmit}
    >
      <input
        type="search"
        name="movie"
        id="movie"
        value={query}
        min={3}
        className="w-3/4 max-w-2xl px-4 py-2 border-2 border-amber-50 rounded-xl"
        placeholder="Avengers, Matrix, Terminator..."
        onChange={onChange}
      />
      <input
        type="checkbox"
        name="sortList"
        id="sortList"
        className="transform scale-200"
        onChange={onSort}
        checked={sort}
      />
      <button
        type="submit"
        className="cursor-pointer w-1/4 px-4 py-2 flex justify-center items-center gap-1 rounded-2xl bg-neutral-200 text-neutral-900 hover:bg-neutral-400"
      >
        Search
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
          <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/>
        </svg>
      </button>
    </form>
  )
}

export default Searcher