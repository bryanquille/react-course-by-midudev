import type { selectorType } from "../types/types"

type TextAreaPropsTypes = {
  name: selectorType
  placeholder: string
  readonly: boolean
  loading?: boolean
  fromText?: string
  result?: string
  setFromText?: (payload: string) => void
}

function TextArea({ 
  name, 
  placeholder, 
  readonly, 
  fromText, 
  loading, 
  result,
  setFromText,
}: TextAreaPropsTypes) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    console.log(e)
    const textToTranslate = e.target.value
    if(setFromText && name === "from") setFromText(textToTranslate)
  }
  return (
    <textarea
      name={name}
      className={`min-h-40 p-2 border-2 border-[#f0f0f0] rounded-lg text-2xl resize-none ${
        name === 'to' 
          ? result 
            ? '' 
            : 'bg-[#f5f5f5] focus-visible:outline-0' 
          : ''
        }`}
      placeholder={placeholder}
      readOnly={result ? false : readonly}
      onChange={handleChange}
      value={
        name === 'to'
          ? loading
            ? 'Traduciendo...'
            : result
          : fromText
      }
    ></textarea>
  )
}

export default TextArea