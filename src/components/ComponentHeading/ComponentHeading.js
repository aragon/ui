import React from 'react'
import PropTypes from 'prop-types'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'

const ComponentHeading = ({ title, subtitle }) => {
  const theme = useTheme()
  const currentTitle =
    typeof title === 'string' ? (
      <div
        css={`
          ${textStyle('title3')};
        `}
      >
        {title}
      </div>
    ) : (
      title
    )

  const currentSubtitle =
    typeof subtitle === 'string' ? (
      <div
        css={`
          ${textStyle('title4')};
          color: ${theme.disabledContent};
        `}
      >
        {subtitle}
      </div>
    ) : (
      subtitle
    )

  return (
    <div
      css={`
        width: 100%;
      `}
    >
      {currentTitle}
      {currentSubtitle}
    </div>
  )
}

ComponentHeading.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
}

ComponentHeading.defaultProps = {
  title: '',
  subtitle: '',
}

export default ComponentHeading
