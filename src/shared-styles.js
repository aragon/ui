/* @flow */
import React from 'react'
import Media from 'react-media'
import { css } from 'styled-components'

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
  slow: { stiffness: 150, damping: 18, precision: 0.001 },
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
  const fontWeight = FONT_WEIGHTS[weight] || FONT_WEIGHTS.normal
  return `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: 1.5;
  `
}

export const grid = (cols, gutters = cols - 1) =>
  GRID.columnWidth * cols + GRID.gutterWidth * gutters

export const spring = name => {
  return SPRINGS[name] || SPRINGS.normal
}

// CSS breakpoints
export const breakpoint = (name, styles) => css`
  @media (min-width: ${BREAKPOINTS[name]}px) {
    ${styles};
  }
`

// Rendering breakpoints
export const BreakPoint = ({
  from,
  to,
  children,
  ...props
}: {
  from: string,
  to: string,
}) => {
  const query = {}
  if (BREAKPOINTS[from]) {
    query.minWidth = BREAKPOINTS[from]
  }
  if (BREAKPOINTS[to]) {
    query.maxWidth = BREAKPOINTS[to] - 1
  }
  return (
    <Media query={query} defaultMatches={false} {...props}>
      {ok => (ok ? children : null)}
    </Media>
  )
}

export const unselectable = () => `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

// TODO: deprecate the previous names
export { font as fontStyle, grid as gridWidth, spring as springConf }
