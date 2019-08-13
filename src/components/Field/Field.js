import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { textStyle, GU } from '../../style'
import { unselectable } from '../../utils'

function Field({ children, label, ...props }) {
  const theme = useTheme()

  const isRequired = React.Children.toArray(children).some(
    ({ props }) => props && props.required
  )

  return (
    <div
      css={`
        margin-bottom: ${3 * GU}px;
      `}
      {...props}
    >
      <label>
        <div
          css={`
            display: flex;
            margin-bottom: ${0.5 * GU}px;
            color: ${theme.surfaceContentSecondary};
            ${textStyle('label2')};
            ${unselectable()};
          `}
        >
          {label}
          {isRequired && (
            <span
              css={`
                color: ${theme.accent};
              `}
              title="Required"
            >
              {'\u00a0*'}
            </span>
          )}
        </div>
        {children}
      </label>
    </div>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default Field
