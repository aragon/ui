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
  if (block) return StyledText.Block
  if (inline) return StyledText.Inline
  if (heading) {
    return (
      StyledText[`Heading${Math.max(1, Math.min(6, parseInt(heading, 10)))}`] ||
      StyledText
    )
  }
  return StyledText
}

const Text = ({
  smallcaps = false,
  block = false,
  inline = false,
  heading,
  children,
  ...props
}) => {
  const StyledComp = getStyledComponent({ inline, block, heading })
  return <StyledComp children={children} {...props} />
}

export { StyledText }
export default Text
