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

const getStyledComponent = ({ heading, block = false, inline = false }) => {
  if (block) return StyledBlock
  if (inline) return StyledInline
  if (heading) {
    return (
      styledHeadings[Math.max(1, Math.min(6, parseInt(heading, 10))) - 1] ||
      StyledText
    )
  }
  return StyledText
}

type Props = {
  block: boolean,
  inline: boolean,
  heading: string | number,
  smallcaps: boolean,
  size: string,
  weight: string,
  color: string,
  children: Node,
}

const DefaultProps = {
  block: false,
  inline: false,
  smallcaps: false,
  heading: -1,
  size: '',
  weight: '',
  color: '',
}

const Text = ({
  block,
  inline,
  heading,
  smallcaps,
  size,
  weight,
  color,
  children,
  ...props
}: Props) => {
  const StyledComp = getStyledComponent({ inline, block, heading })
  return (
    <StyledComp
      {...props}
      weight={weight}
      size={size}
      smallcaps={smallcaps}
      color={color}
      children={children}
    />
  )
}

Text.defaultProps = DefaultProps

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
