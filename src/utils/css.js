import { MONOSPACE_FONT_FAMILY } from '../components/BaseStyles/BaseStyles'

export const monospace = () => `
  font-family: ${MONOSPACE_FONT_FAMILY}, monospace;
`

export const unselectable = () => `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

// Transforms a number to be used as a CSS value, with the `px` suffix appended to it. If not a number, the value is returned directly.
export function cssPx(value) {
  return typeof value === 'number' ? value + 'px' : value
}
