import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { textStyle, GU } from '../../style'
import { unselectable, Inside } from '../../utils'

// This variable is used as a simple mechanism to generate unique IDs, that can
// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.
let fieldId = 1

function Field({ children, label, required, ...props }) {
  const theme = useTheme()

  const isRequired =
    required ||
    React.Children.toArray(children).some(
      ({ props }) => props && props.required
    )

  const id = useMemo(
    () => (typeof children === 'function' ? `Field_${fieldId++}` : null),
    [children]
  )

  const labelProps = id === null ? {} : { htmlFor: id }

  return (
    <Inside name="Field">
      <div
        css={`
          margin-bottom: ${3 * GU}px;
        `}
        {...props}
      >
        <label {...labelProps}>
          <div
            css={`
              display: flex;
              align-items: center;
              height: ${2 * GU}px;
              margin-bottom: ${0.5 * GU}px;
              color: ${theme.surfaceContentSecondary};
              white-space: nowrap;
              ${textStyle('label2')};
              ${unselectable()};
            `}
          >
            <Inside name="Field:label">
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
            </Inside>
          </div>
          <Inside name="Field:content">
            {typeof children === 'function' ? children({ id }) : children}
          </Inside>
        </label>
      </div>
    </Inside>
  )
}

Field.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.node,
  required: PropTypes.bool,
}

export default Field
