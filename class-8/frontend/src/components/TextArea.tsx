import type { selectorType } from "../types/types"
import ActionButton from "./ActionButton"
import { CopyContentIcon, MicrophoneIcon, SpeakIcon } from "./Icons"

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
    const textToTranslate = e.target.value
    if (setFromText && name === "from") {
      setFromText(textToTranslate)
    }
  }

  /*
   TODO: 
     - Fix focus outline in TextAreas
     - Add functionality to the Action Buttons
     - Fix Loading text
  */

  return (
    <div
      className={`min-h-40 flex flex-col border-2 border-[#f0f0f0] rounded-lg text-2xl resize-none ${name === 'to'
        ? 'bg-[#f5f5f5]'
        : 'focus-visible:outline-0'
        }`}
    >
      <textarea
        name={name}
        className={`w-full p-2 grow resize-none 
          ${name === 'to'
            ? 'focus-visible:outline-0'
            : ''
          }`}
        placeholder={placeholder}
        readOnly={readonly}
        onChange={handleChange}
        value={
          name === 'to'
            ? loading
              ? 'Traduciendo...'
              : result
            : fromText
        }
      ></textarea>
      {
        name === 'to'
        ? <div className="p-3 flex justify-start items-center gap-2">
          <ActionButton
            onClick={() => {console.log('working...')}}
          >
            <SpeakIcon />
          </ActionButton>
          <ActionButton
            onClick={() => {console.log('working...')}}
          >
            <CopyContentIcon />
          </ActionButton>
        </div>
        : <div className="p-3 flex justify-start items-center gap-2">
          <ActionButton
            onClick={() => {console.log('working...')}}
          >
            <MicrophoneIcon />
          </ActionButton>
        </div>
      }
    </div>
  )
}

export default TextArea