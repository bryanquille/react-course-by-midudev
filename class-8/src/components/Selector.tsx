type SelectorPropsTypes = {
  option: string
  isSelectorOpen: boolean
  toggleSelector: () => void
}

function Selector({ option, isSelectorOpen, toggleSelector }: SelectorPropsTypes) {
  const handleClick = () => {
    toggleSelector()
  }

  return (
    <button
      type="button"
      className="cursor-pointer w-full h-fit px-3 py-2 flex justify-between items-center border-2 border-[#bdbdbd] rounded-lg"
      onClick={handleClick}
    >
      <span className="text-[#2e22b2]">{option}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 -960 960 960"
        className={`fill-[#2e22b2] transition-all duration-200 ${isSelectorOpen ? 'transform rotate-180' : ''}`}
      >
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </button>
  )
}

export default Selector