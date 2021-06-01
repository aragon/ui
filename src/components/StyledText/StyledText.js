import React from 'react'
import PropTypes from 'prop-types'
import { font, warnOnce } from '../../utils'
import { textStyle } from '../../style/text-styles'

function StyledText({ name, children, ...props }) {
  return (
    <div
      css={`
        ${textStyle(name)};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

StyledText.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

StyledText.defaultProps = {
  name: 'title1',
}

export default StyledText
