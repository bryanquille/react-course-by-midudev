import { goTop } from "../utils/utils"

function GoTopButton() {
  return (
    <button
      type="button"
      className="fixed bottom-7 right-7 cursor-pointer p-2.5 grid place-items-center bg-stone-300 rounded-full hover:bg-neutral-400"
      onClick={goTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#0f172b">
        <path d="M320-120v-240H120l360-440 360 440H640v240H320Zm80-80h160v-240h111L480-674 289-440h111v240Zm80-240Z" />
      </svg>
    </button>
  )
}

export default GoTopButton