import { GU } from '../style'

const ICON_SIZES = new Map([
  ['medium', 3 * GU],
  ['small', 2 * GU],
  ['tiny', 1.75 * GU],
])

function iconSize(size) {
  if (ICON_SIZES.has(size)) {
    return ICON_SIZES.get(size)
  }
  return ICON_SIZES.get('medium')
}

export default iconSize
