import { useId } from "react"

type FiltersProps = {
  categories: string[]
  pricesList: number[]
  filter: {
    category: string
    maxPrice: number
  }
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Filters({
  categories,
  pricesList,
  filter,
  handleCategory,
  handlePrice
}: FiltersProps) {
  const categoryId = useId()
  const maxPriceId = useId()

  return (
    <div className="mt-8 flex flex-wrap justify-evenly items-center gap-6">
      {/* Category selector */}
      <label
        htmlFor={categoryId}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <span>Select a category:</span>
        <select
          name="category"
          id={categoryId}
          value={filter.category}
          onChange={handleCategory}
          className="px-3 py-2 text-neutral-950 bg-neutral-300 rounded-sm"
        >
          {
            categories && categories.map(category => {
              return (
                <option
                  key={category}
                  value={category}
                >
                  {
                    category.split('', 1)
                      .join('').toUpperCase()
                    + category.slice(1)
                  }
                </option>
              )
            })
          }
        </select>
      </label>
      {/* Range of prices */}
      <label
        htmlFor={maxPriceId}
        className="flex flex-col justify-center items-center gap-2"
      >
        <span>Select a range of prices:</span>
        <div className="flex justify-center items-center gap-2">
          <span>${pricesList && pricesList[0]}</span>
          <input
            type="range"
            name="price"
            id={maxPriceId}
            value={filter.maxPrice}
            onChange={handlePrice}
            step={10}
            min={0}
            max={`${pricesList && Math.ceil(pricesList[pricesList.length - 1])}`}
          />
          <span>${pricesList && Math.ceil(pricesList[pricesList.length - 1])}</span>
        </div>
        <span>Max: ${filter.maxPrice}</span>
      </label>
    </div>
  )
}

export default Filters