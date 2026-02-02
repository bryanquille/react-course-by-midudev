import { SUPPORTED_LANGUAGES } from "../constants/constants"
import type { fromLanguageType, LanguageTypes } from "../types/types"

type ModalSelectorPropsTypes = {
  closeSelector: () => void
  setFromLangague?: (payload: fromLanguageType) => void
  setToLanguage?: (payload: LanguageTypes) => void
}

function ModalSelector({ closeSelector, setFromLangague, setToLanguage }: ModalSelectorPropsTypes) {
  const handleSelect = (val: fromLanguageType | LanguageTypes) => {
    if (setFromLangague) setFromLangague(val)
    if (setToLanguage) setToLanguage(val)
    closeSelector()
  }

  return (
    <section className="w-full border-2 border-[#d5d5d5] rounded-lg">
      <div className="p-2 flex flex-row-reverse justify-end items-center gap-2 border-b border-b-[#d5d5d5] text-[#5f6368]">
        <h2>
          Seleccionar un idioma
        </h2>
        <button
          type="button"
          className="cursor-pointer p-1.5 rounded-full transition-all duration-150 hover:bg-[#f0f0f0]"
          onClick={closeSelector}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 -960 960 960"
            className="fill-[#474747] hover:fill-[#343434]"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </button>
      </div>
      <ul className="p-2 grid grid-cols-3 text-center">
        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => {
            return (
              <li key={key}>
                <button
                  type="button"
                  className="cursor-pointer px-8 py-1 hover:bg-[#f5f5f5]"
                  onClick={() => handleSelect(key)}
                >
                  {value}
                </button>
              </li>)
          })
        }
      </ul>
    </section>
  )
}

export default ModalSelector