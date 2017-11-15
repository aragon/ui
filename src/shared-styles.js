import React from 'react'
import Responsive from 'react-responsive'

const FONT_SIZES = {
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
}

const FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800',
}

const GRID = {
  columns: 12,
  gutterWidth: 30,
  columnWidth: 68,
}

const SPRINGS = {
  normal: { stiffness: 190, damping: 22, precision: 0.001 },
  fast: { stiffness: 250, damping: 22, precision: 0.001 },
}

// These breakpoints values represent minimum screen sizes.
// Small screen sizes should be targetted by default (mobile first).
const BREAKPOINTS = {
  medium: 768,
  large: 1170,
}

export const font = ({ size = 'normal', weight = 'normal' }) => {
  const fontSize = FONT_SIZES[size] || FONT_SIZES.normal
  const fontWeigt = FONT_WEIGHTS[weight] || FONT_WEIGHTS.normal
  return `
    font-size: ${fontSize};
    font-weight: ${fontWeigt};
    line-height: 1.5;
  `
}

export const grid = cols =>
  GRID.gutterWidth * cols + GRID.columnWidth * (cols - 1)

export const spring = name => {
  return SPRINGS[name] || SPRINGS.normal
}

// CSS breakpoints
export const breakpoint = (name, css) => `
  @media (min-width: ${BREAKPOINTS[name]}px) {
    ${css}
  }
`

// Rendering breakpoints
export const BreakPoint = ({ from, to, ...props }) => (
  <Responsive
    {...props}
    minWidth={BREAKPOINTS[from]}
    maxWidth={BREAKPOINTS[to] && BREAKPOINTS[to] - 1}
  />
)

export const unselectable = () => `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

// TODO: deprecate the previous names
export { font as fontStyle, grid as gridWidth, spring as springConf }
