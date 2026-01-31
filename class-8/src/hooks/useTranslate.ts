import { useReducer } from "react"
import type { actionType, fromLanguageType, LanguageTypes, stateType } from "../types/types"
import { AUTO_LANGUAGE } from "../constants/constants"

const initialState = {
  fromLanguage: AUTO_LANGUAGE,
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    case 'INTERCHANGE_LANGUAGES':
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: action.payload
      }
    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload
      }
    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    default:
      return state
  }
}

export const useTranslate = () => {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: fromLanguageType) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload })
  }

  const setToLanguage = (payload: LanguageTypes) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  }
}
