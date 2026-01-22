import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

function PriceFilter() {
  const {
    filters,
    handlePrice,
    pricesList
  } = useFilters()
  const maxPriceId = useId()

  return (
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
          value={filters && filters.maxPrice}
          onChange={handlePrice}
          step={10}
          min={0}
          max={`${pricesList && Math.ceil(pricesList[pricesList.length - 1])}`}
        />
        <span>${pricesList && Math.ceil(pricesList[pricesList.length - 1])}</span>
      </div>
      <span>Max: ${filters && filters.maxPrice}</span>
    </label>
  )
}

export default PriceFilter