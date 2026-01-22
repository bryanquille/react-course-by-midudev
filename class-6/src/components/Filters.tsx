import CategoryFilter from "./CategoryFilter"
import PriceFilter from "./PriceFilter"

function Filters() {
  return (
    <div className="mt-8 flex flex-wrap justify-evenly items-center gap-6">
      <CategoryFilter />
      <PriceFilter />
    </div>
  )
}

export default Filters