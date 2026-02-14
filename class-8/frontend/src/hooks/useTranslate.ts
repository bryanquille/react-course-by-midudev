import { useCallback, useReducer } from "react"
import type { actionType, fromLanguageType, LanguageTypes, stateType } from "../types/types"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants"

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGE) return state
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
    if (payload === toLanguage && fromLanguage != 'auto') {
      dispatch({ type: 'SET_TO_LANGUAGE', payload: fromLanguage })
      console.log(fromLanguage)
    } else if (payload === toLanguage && fromLanguage === 'auto') {
      const newLanguage = Object.keys(SUPPORTED_LANGUAGES).filter(lang => lang != toLanguage)
      console.log(newLanguage)
      dispatch({ type: 'SET_TO_LANGUAGE', payload: newLanguage[0] })
    }
    dispatch({ type: "SET_FROM_LANGUAGE", payload })
  }

  const setToLanguage = (payload: LanguageTypes) => {
    if (payload === fromLanguage) {
      const newLanguage = Object.keys(SUPPORTED_LANGUAGES).filter(lang => lang != fromLanguage)
      console.log(newLanguage)
      dispatch({ type: 'SET_FROM_LANGUAGE', payload: newLanguage[0] })
    }
    dispatch({ type: "SET_TO_LANGUAGE", payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload })
  }

  const setResult = useCallback((payload: string) => {
    dispatch({ type: "SET_RESULT", payload })
  }, [])

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
