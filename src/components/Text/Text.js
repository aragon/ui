/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { fontStyle } from '../../shared-styles'

const StyledText = styled.p`
  color: ${theme.textPrimary};
  ${({ size, weight }) => fontStyle({ size, weight })};
  ${({ smallcaps }) => {
    if (!smallcaps) return ''
    return `
      text-transform: lowercase;
      font-variant: small-caps;
    `
  }};
  ${({ color }) => {
    return color ? `color: ${color}` : ''
  }};
`

// We use different HTML elements based on the provided properties.
StyledText.Block = StyledText.withComponent('div')
StyledText.Inline = StyledText.withComponent('span')
StyledText.Heading1 = StyledText.withComponent('h1')
StyledText.Heading2 = StyledText.withComponent('h2')
StyledText.Heading3 = StyledText.withComponent('h3')
StyledText.Heading4 = StyledText.withComponent('h4')
StyledText.Heading5 = StyledText.withComponent('h5')
StyledText.Heading6 = StyledText.withComponent('h6')

const getStyledComponent = ({
  heading = null,
  block = false,
  inline = false,
}) => {
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
  weight: ?string,
  color: ?string,
  children: Node,
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
  const styledProps = { ...props, weight, size, smallcaps, color, children }
  return <StyledComp {...styledProps} />
}

Text.defaultProps = {
  block: false,
  inline: false,
  smallcaps: false,
  heading: null,
  size: null,
  weight: null,
  color: null,
}

export { StyledText }
export default Text
