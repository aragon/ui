/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { fontStyle } from '../../shared-styles'

const StyledText = styled.p`
  ${({ size, weight }) => fontStyle({ size, weight })};
  ${({ smallcaps }) => {
    if (!smallcaps) return ''
    return `
      text-transform: lowercase;
      font-variant: small-caps;
    `
  }};
  ${({ color }) => {
    return `color: ${color || theme.textPrimary}`
  }};
`

const StyledBlock = StyledText.withComponent('div')
const StyledInline = StyledText.withComponent('span')

const StyledH1 = StyledText.withComponent('h1')
const StyledH2 = StyledText.withComponent('h2')
const StyledH3 = StyledText.withComponent('h3')
const StyledH4 = StyledText.withComponent('h4')
const StyledH5 = StyledText.withComponent('h5')
const StyledH6 = StyledText.withComponent('h6')
const styledHeadings = [
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
]

type Props = {
  block: boolean,
  inline: boolean,
  heading: string | number, // Make this just a number?
  smallcaps: boolean,
  size: string,
  weight: string,
  color: string,
  children: Node,
}

const Text = ({ block, inline, heading, ...props }: Props) => {
  /*
  const Component =
    (block && StyledBlock) ||
    (inline && StyledInline) ||
    (heading >= 1 && heading <= 6 && styledHeadings[heading - 1]) ||
    StyledText
  */
  let Component = StyledText
  if (block) {
    Component = StyledBlock
  } else if (inline) {
    Component = StyledInline
  } else if (heading) {
    heading = parseInt(heading, 10)
    if (heading >= 1 && heading <= 6) {
      Component = styledHeadings[heading - 1]
    }
  }

  return <Component {...props} />
}

export {
  StyledBlock,
  StyledInline,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledText,
}
export default Text
