import { ALL_LANGUAGES_OPTIONS, SUPPORTED_LANGUAGES } from "../constants/constants"
import type { fromLanguageType, LanguageTypes } from "../types/types"
import { GoBackIcon } from "./Icons"

type ModalSelectorPropsTypes = {
  selector: 'from' | 'to'
  closeSelector: () => void
  setFromLangague?: (payload: fromLanguageType) => void
  setToLanguage?: (payload: LanguageTypes) => void
}

function ModalSelector({
  selector,
  closeSelector,
  setFromLangague,
  setToLanguage,
}: ModalSelectorPropsTypes) {

  const handleFromSelect = (val: fromLanguageType) => {
    if (setFromLangague && selector === 'from') {
      setFromLangague(val as fromLanguageType)
    }
    closeSelector()
  }

  const handleToSelect = (val: LanguageTypes) => {
    if (setToLanguage && selector === 'to') {
      setToLanguage(val as LanguageTypes)
    }
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
          <GoBackIcon />
        </button>
      </div>
      <ul className="p-2 grid grid-cols-3 text-center">
        {
          selector === 'from'
            ? Object.entries(ALL_LANGUAGES_OPTIONS).map(([key, literal]) => {
              return (
                <li key={key}>
                  <button
                    type="button"
                    className="cursor-pointer px-8 py-1 hover:bg-[#f5f5f5]"
                    onClick={() => handleFromSelect(key as fromLanguageType)}
                  >
                    {literal}
                  </button>
                </li>
              )
            })
            : Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
              return (
                <li key={key}>
                  <button
                    type="button"
                    className="cursor-pointer px-8 py-1 hover:bg-[#f5f5f5]"
                    onClick={() => handleToSelect(key as LanguageTypes)}
                  >
                    {literal}
                  </button>
                </li>
              )
            })
        }
      </ul>
    </section>
  )
}

export default ModalSelector