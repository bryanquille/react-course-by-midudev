import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants"

export type LanguageTypes = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguageType = typeof AUTO_LANGUAGE
export type fromLanguageType = LanguageTypes | AutoLanguageType

export type stateType = {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type actionType = 
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: string }
  | { type: 'SET_TO_LANGUAGE'; payload: string }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string }

export type selectorType = 'from' | 'to'