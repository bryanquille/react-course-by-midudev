import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

function CategoryFilter() {
  const {
    filters,
    handleCategory,
    categories,
  } = useFilters()
  const categoryId = useId()
  
  return (
    <label
      htmlFor={categoryId}
      className="flex flex-wrap justify-center items-center gap-4"
    >
      <span>Select a category:</span>
      <select
        name="category"
        id={categoryId}
        value={filters && filters.category}
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
  )
}

export default CategoryFilter