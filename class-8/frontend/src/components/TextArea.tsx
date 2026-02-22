import type { selectorType } from "../types/types"
import { useFocus } from "../hooks/useFocus"
import ActionButtonsContainer from "./ActionButtonsContainer"
import { voiceLanguage } from "../constants/constants"
import { speak } from "../utils/speak"

type TextAreaPropsTypes = {
  name: selectorType
  placeholder: string
  readonly: boolean
  toLanguage?: string
  loading?: boolean
  fromText?: string
  result?: string
  setFromText?: (payload: string) => void
}

function TextArea({
  name,
  placeholder,
  readonly,
  toLanguage,
  fromText,
  loading,
  result,
  setFromText,
}: TextAreaPropsTypes) {

  const { isFocus, activeFocus, disableFocus } = useFocus()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    const textToTranslate = e.target.value
    if (setFromText && name === "from") {
      setFromText(textToTranslate)
    }
  }

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result)
    }
  }

  const handleTextToSpeech = () => {
    if (!result) return;

    const voiceLang = voiceLanguage[toLanguage as keyof typeof voiceLanguage]
    speak(result, voiceLang)
  }

  /*
   TODO: 
     - Add functionality to the Action Button for voice input
  */

  return (
    <div
      className={`min-h-40 flex flex-col border-2 border-[#f0f0f0] rounded-lg text-2xl resize-none ${name === 'to'
        ? 'bg-[#f5f5f5]'
        : isFocus ? 'outline-2 outline-black' : ''
        }`}
    >
      <textarea
        name={name}
        className={`w-full p-2 grow resize-none focus-visible:outline-0`}
        onFocus={activeFocus}
        onBlur={disableFocus}
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
      <ActionButtonsContainer
        name={name}
        copyToClipboard={copyToClipboard}
        textToSpeech={handleTextToSpeech}
      />
    </div>
  )
}

export default TextArea