import { css } from 'styled-components'
import { GU } from './constants'

// These breakpoints values represent minimum screen sizes.
export const BREAKPOINTS = {
  min: 360,
  small: 360,
  medium: 96 * GU,
  large: 144 * GU,
}

// CSS breakpoints
export const breakpoint = (name, styles) => css`
  @media (min-width: ${BREAKPOINTS[name]}px) {
    ${styles};
  }
`
