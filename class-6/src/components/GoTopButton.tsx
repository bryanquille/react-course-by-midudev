import { goTop } from "../utils/utils"
import { UpArrowIcon } from "./Icons"

function GoTopButton() {
  return (
    <button
      type="button"
      className="fixed bottom-7 right-7 cursor-pointer p-2.5 grid place-items-center bg-stone-300 rounded-full hover:bg-neutral-400"
      onClick={goTop}
    >
      <UpArrowIcon />
    </button>
  )
}

export default GoTopButton