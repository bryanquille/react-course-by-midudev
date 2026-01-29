import { EVENTS } from "../constants"

export function navigate(path: string) {
  window.history.pushState({}, '', path)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}