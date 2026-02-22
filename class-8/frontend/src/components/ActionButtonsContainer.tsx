import type { selectorType } from "../types/types"
import ActionButton from "./ActionButton"
import { CopyContentIcon, MicrophoneIcon, SpeakIcon } from "./Icons"
import Notification from "./Notification"

type ActionButtonsContainerPropsTypes = {
  name: selectorType
  copyToClipboard: () => void
  isCopied: boolean
  textToSpeech: () => void
}

function ActionButtonsContainer({ name, copyToClipboard, isCopied, textToSpeech }: ActionButtonsContainerPropsTypes) {
  return (
    name === 'to'
      ? <div className="p-3 flex justify-start items-center gap-2">
        <ActionButton
          onClick={textToSpeech}
        >
          <SpeakIcon />
        </ActionButton>
        <ActionButton
          onClick={copyToClipboard}
        >
          <CopyContentIcon />
        </ActionButton>
        {isCopied && <Notification message="Texto copiado al portapapeles" />}
      </div>
      : <div className="p-3 flex justify-start items-center gap-2">
        <ActionButton
          onClick={() => { console.log('working...') }}
        >
          <MicrophoneIcon />
        </ActionButton>
      </div>
  )
}

export default ActionButtonsContainer