import type { PageType } from "./types/types"

function Route({ path, component }: PageType) {
  console.log(path, component)
  return null
}

export default Route