import { SwitchIcon } from "./Icons"

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
      disabled={fromLanguage === 'auto'}
      className="cursor-pointer w-fit p-2.5 rounded-full transition-all duration-150 hover:bg-[#f0f0f0] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent"
      onClick={handleClick}
    >
      <SwitchIcon />
    </button>
  )
}

export default InterchangeBtn