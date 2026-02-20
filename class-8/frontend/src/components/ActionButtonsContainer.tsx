import type { selectorType } from "../types/types"
import ActionButton from "./ActionButton"
import { CopyContentIcon, MicrophoneIcon, SpeakIcon } from "./Icons"

type ActionButtonsContainerPropsTypes = {
  name: selectorType
  copyToClipboard: () => void
}

/*
  Adding a text notification when the user clicks the copy to clipboard button
*/

function ActionButtonsContainer({ name, copyToClipboard }: ActionButtonsContainerPropsTypes) {
  return (
    name === 'to'
      ? <div className="p-3 flex justify-start items-center gap-2">
        <ActionButton
          onClick={() => { console.log('working...') }}
        >
          <SpeakIcon />
        </ActionButton>
        <ActionButton
          onClick={copyToClipboard}
        >
          <CopyContentIcon />
        </ActionButton>
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