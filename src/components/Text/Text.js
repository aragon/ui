import React from 'react'
import PropTypes from 'prop-types'
import { font, warnOnce } from '../../utils'

function Text({
  children,
  color,
  monospace,
  size,
  smallcaps,
  weight,
  ...props
}) {
  warnOnce(
    'Text',
    'Text, Text.Block and Text.Paragraph are deprecated. ' +
      'Please use the textStyle() utility function instead.'
  )
  return (
    <span
      css={`
        ${font({
          deprecationNotice: false,
          monospace,
          size,
          smallcaps,
          weight,
        })};
        ${color ? `color: ${color}` : ''};
      `}
      {...props}
    >
      {children}
    </span>
  )
}

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
