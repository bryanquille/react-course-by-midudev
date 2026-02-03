import { HamburguerMenuIcon } from "../Icons"

function HambMenu() {
  return (
    <button
      type="button"
      className="cursor-pointer px-2 py-2 rounded-full transition-all duration-150 hover:bg-[#f0f0f0]"
    >
      <HamburguerMenuIcon />
    </button>
  )
}

export default HambMenu