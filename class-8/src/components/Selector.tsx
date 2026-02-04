import { useRotateSelectorArrow } from "../hooks/useRotateSelectorArrow"
import { DropDownIcon } from "./Icons"

type SelectorPropsTypes = {
  option: string
  setFromSelector?: () => void
  setToSelector?: () => void
  isSelectorOpen: boolean
  toggleSelector: () => void
}

function Selector({
  option,
  setFromSelector,
  setToSelector,
  isSelectorOpen,
  toggleSelector
}: SelectorPropsTypes) {
  const { isOpen, rotateArrow } = useRotateSelectorArrow(isSelectorOpen, toggleSelector)

  const handleClick = () => {
    if (setFromSelector) {setFromSelector()}
    if (setToSelector) {setToSelector()}
    rotateArrow()
  }

  return (
    <button
      type="button"
      aria-label="Selecciona el idioma"
      className="cursor-pointer w-full h-fit px-3 py-2 flex justify-between items-center border-2 border-[#bdbdbd] rounded-lg"
      onClick={handleClick}
    >
      <span className="text-[#2e22b2]">{option}</span>
      <DropDownIcon isOpen={isOpen} />
    </button>
  )
}

export default Selector