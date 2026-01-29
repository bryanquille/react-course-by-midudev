import { type ComponentPropsWithoutRef } from "react"
import { navigate } from "./logic/navaigate"
import { BUTTON } from "./constants"

type LinkPropsTypes = ComponentPropsWithoutRef<'a'> & {
  target?: string
  pathTo: string
}

function Link({ target, pathTo, ...restProps }: LinkPropsTypes) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const isMainEvent = e.button === BUTTON.primary
    const isModifiedEvent = (
      e.metaKey
      || e.altKey
      || e.ctrlKey
      || e.shiftKey
    )
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(pathTo)
    }
  }

  return (
    <a
      target={target}
      href={pathTo}
      onClick={handleClick}
      {...restProps}
    >
      {restProps.children}
    </a>
  )
}

export default Link