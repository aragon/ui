import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font } from '../../utils/styles'

const Text = styled.span`
  ${({ size, weight, smallcaps, monospace }) =>
    font({ size, weight, smallcaps, monospace })};
  ${({ color }) => (color ? `color: ${color}` : '')};
`

const Block = props => <Text as="div" {...props} />
const Paragraph = props => <Text as="p" {...props} />

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  smallcaps: PropTypes.bool,
  weight: PropTypes.string,
  monospace: PropTypes.bool,
}

Text.Block = Block
Text.Paragraph = Paragraph

export default Text
