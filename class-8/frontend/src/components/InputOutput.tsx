import { useEffect } from "react"
import TextArea from "./TextArea"
import { useDebounce } from "../hooks/useDebounce"
import { translate } from "../services/translate"

type InputOutputPropsTypes = {
  fromLanguage: string
  toLanguage: string
  loading: boolean
  result: string
  fromText: string
  setFromText: (payload: string) => void
  setResult: (payload: string) => void
}

function InputOutput({
  fromLanguage,
  toLanguage,
  loading,
  result,
  fromText,
  setFromText,
  setResult,
}: InputOutputPropsTypes) {
  const { debouncedValue } = useDebounce(fromText.trim(), 500)

  useEffect(() => {
    if (debouncedValue === '') return
    const controller = new AbortController();
    const signal = controller.signal;
    translate(debouncedValue, fromLanguage, toLanguage, signal)
      .then(res => {
        if (!signal.aborted) {
          setResult(res);
        }
      })

    return () => {
      controller.abort()
    }
  }, [debouncedValue, fromLanguage, toLanguage, setResult])

  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2">
      <TextArea
        name="from"
        placeholder="Escribe, habla..."
        readonly={false}
        fromText={fromText}
        setFromText={setFromText}
      />
      <TextArea
        name="to"
        placeholder="Traducción"
        readonly={true}
        loading={loading}
        result={result}
      />
    </div>
  )
}

export default InputOutput