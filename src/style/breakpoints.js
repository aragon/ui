import { css } from 'styled-components'
import { GU } from './constants'

// These breakpoints values represent minimum screen sizes.
const BREAKPOINTS = {
  // min, mini or tiny (i.e 320px) will be ignore
  // because it was depricated and most of the component
  // do not recognize or react to 'min'
  small: 47 * GU, // 376
  medium: 96 * GU, // 768
  large: 160 * GU, // 1280
}

// CSS breakpoints
const breakpoint = (name, styles) => css`
  @media (min-width: ${BREAKPOINTS[name]}px) {
    ${styles};
  }
`

export { BREAKPOINTS, breakpoint }
