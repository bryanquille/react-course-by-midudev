import { AUTO_LANGUAGE } from "../constants/constants"

type InterchangeBtnPropsTypes = {
  interchangeLanguages: () => void
  fromLanguage: string
}

function InterchangeBtn({ interchangeLanguages, fromLanguage }: InterchangeBtnPropsTypes) {
  const handleClick = () => {
    interchangeLanguages()
  }
  return (
    <button
      type="button"
      disabled={fromLanguage === AUTO_LANGUAGE}
      className="cursor-pointer w-fit p-2.5 rounded-full transition-all duration-150 hover:bg-[#f0f0f0] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 -960 960 960"
        className="fill-[#474747] hover:fill-[#343434]"
      >
        <path
          d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
      </svg>
    </button>
  )
}

export default InterchangeBtn