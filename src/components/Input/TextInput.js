import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { warnOnce } from '../../utils'
import { textStyle, GU, RADIUS } from '../../style'

// Simple text input
function TextInput({ multiline, type, ...props }) {
  const theme = useTheme()
  return (
    <input
      as={multiline ? 'textarea' : 'input'}
      type={multiline ? undefined : type}
      {...props}
      css={`
        width: ${({ wide }) => (wide ? '100%' : 'auto')};
        height: ${5 * GU}px;
        padding: 0 ${1.5 * GU}px;
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        color: ${theme.surfaceContent};
        border-radius: ${RADIUS}px;
        appearance: none;
        ${textStyle('body3')};

        ${multiline
          ? `
            height: auto;
            padding: ${1 * GU}px ${1.5 * GU}px;
            resize: vertical;
          `
          : ''}

        &:focus {
          outline: none;
          border-color: ${theme.selected};
        }
        &:read-only {
          color: transparent;
          text-shadow: 0 0 0 ${theme.surfaceContentSecondary};
        }
      `}
    />
  )
}

TextInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  multiline: PropTypes.bool,
}

TextInput.defaultProps = {
  required: false,
  type: 'text',
  multiline: false,
}

// Text input wrapped to allow adornments
const WrapperTextInput = React.forwardRef(
  (
    {
      adornment,
      adornmentPosition,
      adornmentSettings: {
        width: adornmentWidth = 36,
        padding: adornmentPadding = 4,
      },
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    if (!adornment) {
      return <TextInput ref={ref} {...props} />
    }
    return (
      <div
        css={`
          display: inline-flex;
          position: relative;
          width: ${props.wide ? '100%' : 'max-content'};
        `}
      >
        <TextInput
          ref={ref}
          css={`
            ${adornmentPosition === 'end'
              ? 'padding-right'
              : 'padding-left'}: ${adornmentWidth - adornmentPadding * 2}px;
          `}
          {...props}
        />
        <div
          css={`
            position: absolute;
            top: 0;
            bottom: 0;
            height: 100%;
            ${adornmentPosition === 'end'
              ? 'right'
              : 'left'}: ${adornmentPadding}px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${theme.surfaceContentSecondary};
          `}
        >
          {adornment}
        </div>
      </div>
    )
  }
)

WrapperTextInput.propTypes = {
  ...TextInput.propTypes,
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  adornmentSettings: PropTypes.shape({
    width: PropTypes.number,
    padding: PropTypes.number,
  }),
}

WrapperTextInput.defaultProps = {
  ...TextInput.defaultProps,
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {},
}

// <input type=number> (only for compat)
function TextInputNumber(props) {
  warnOnce(
    'TextInputNumber',
    'TextInputNumber is deprecated. Please use TextInput instead.'
  )
  return <TextInput type="number" {...props} />
}

// Multiline input (textarea element)
function TextInputMultiline(props) {
  return <TextInput multiline {...props} />
}

TextInputMultiline.propTypes = {
  required: PropTypes.bool,
}
TextInputMultiline.defaultProps = {
  required: false,
}

WrapperTextInput.Number = TextInputNumber
WrapperTextInput.Multiline = TextInputMultiline

export default WrapperTextInput
