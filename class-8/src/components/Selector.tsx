import { useRotateSelectorArrow } from "../hooks/useRotateSelectorArrow"
import { DropDownIcon } from "./Icons"

type SelectorPropsTypes = {
  option: string
  isSelectorOpen: boolean
  toggleSelector: () => void
}

function Selector({ option, isSelectorOpen, toggleSelector }: SelectorPropsTypes) {
  const { isOpen, rotateArrow } = useRotateSelectorArrow(isSelectorOpen, toggleSelector)
  
  return (
    <button
      type="button"
      className="cursor-pointer w-full h-fit px-3 py-2 flex justify-between items-center border-2 border-[#bdbdbd] rounded-lg"
      onClick={rotateArrow}
    >
      <span className="text-[#2e22b2]">{option}</span>
      <DropDownIcon isOpen={isOpen} />
    </button>
  )
}

export default Selector