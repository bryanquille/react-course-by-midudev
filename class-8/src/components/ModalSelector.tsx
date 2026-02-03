import { SUPPORTED_LANGUAGES } from "../constants/constants"
import type { fromLanguageType, LanguageTypes } from "../types/types"
import { GoBackIcon } from "./Icons"

type ModalSelectorPropsTypes = {
  selector: 'from' | 'to'
  closeSelector: () => void
  setFromLangague?: (payload: fromLanguageType) => void
  setToLanguage?: (payload: LanguageTypes) => void
}

type ModalSelectorHandleSelectType = 
  | ((val: fromLanguageType) => void)
  | ((val: LanguageTypes) => void)

function ModalSelector({
  selector,
  closeSelector,
  setFromLangague,
  setToLanguage,
}: ModalSelectorPropsTypes) {
  
  const handleSelect: ModalSelectorHandleSelectType = (val) => {
    if (setFromLangague && selector === 'from') setFromLangague(val as fromLanguageType)
    if (setToLanguage && selector === 'to' && val !== "Detectar idioma") {
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
          Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
            return (
              <li key={key}>
                <button
                  type="button"
                  className="cursor-pointer px-8 py-1 hover:bg-[#f5f5f5]"
                  onClick={() => handleSelect(key as fromLanguageType)}
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