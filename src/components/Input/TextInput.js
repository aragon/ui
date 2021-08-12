import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { textStyle, GU, RADII } from '../../style'
import { useLayout } from '../Layout/Layout'
import ComponentHeading from '../ComponentHeading/ComponentHeading'

const borderColor = (theme, status) => {
  switch (status) {
    case 'error':
      return theme.red
    case 'success':
      return theme.green
    default:
      return theme.border
  }
}

// Simple text input
const TextInput = React.forwardRef(
  ({ autofocus, multiline, type, status, ...props }, ref) => {
    const theme = useTheme()
    const { layoutName } = useLayout()
    const handleRef = useCallback(
      element => {
        if (ref) {
          ref.current = element
        }
        if (autofocus && element) {
          element.focus()
        }
      },
      [autofocus, ref]
    )

    return (
      <input
        ref={handleRef}
        as={multiline ? 'textarea' : 'input'}
        type={multiline ? undefined : type}
        {...props}
        css={`
          width: ${({ wide, width }) =>
            wide ? '100%' : width || 'max-content'};
          height: ${5.75 * GU}px;
          padding: 0 ${1.5 * GU}px;
          background: ${props.disabled ? theme.surfaceUnder : theme.surface};
          border: 2px solid ${borderColor(theme, status)};
          color: ${theme.surfaceContent};
          border-radius: ${layoutName === 'large'
            ? RADII.small
            : RADII[layoutName]}px;
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
            color: ${theme.hint};
            border-color: ${theme.border};
          }

          &::placeholder {
            color: ${theme.hint};
            opacity: 1;
          }

          &:invalid {
            box-shadow: none;
          }
        `}
      />
    )
  }
)

TextInput.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  autofocus: PropTypes.bool,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  status: PropTypes.oneOf(['normal', 'success', 'error']),
  error: PropTypes.string,
}

TextInput.defaultProps = {
  title: '',
  subtitle: '',
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text',
  status: 'normal',
  error: '',
}

// Text input wrapped to allow adornments
const AdornmentTextInput = React.forwardRef(
  (
    {
      adornment,
      adornmentPosition,
      adornmentSettings: {
        removeBorder,
        width: adornmentWidth = 40,
        padding: adornmentPadding = 1 * GU,
      },
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    if (!adornment || props.multiline) {
      return <TextInput ref={ref} {...props} />
    }
    return (
      <div
        css={`
          display: inline-flex;
          position: relative;
          width: ${props.wide ? '100%' : 'max-content'};
          height: ${5.75 * GU}px;
        `}
      >
        <TextInput
          ref={ref}
          css={`
            ${adornmentPosition === 'end'
              ? 'padding-right'
              : 'padding-left'}: ${adornmentWidth + adornmentPadding}px;
            &:focus + div {
              outline: none;
              border-color: ${theme.selected};
            }
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
            ${adornmentPosition === 'end'
              ? 'border-left'
              : 'border-right'}: ${!removeBorder
              ? `2px solid ${borderColor(theme, props.status)}`
              : '0px'};
            ${adornmentPosition === 'end'
              ? 'padding-left'
              : 'padding-right'}: ${adornmentPadding}px;
          `}
        >
          {adornment}
        </div>
      </div>
    )
  }
)

AdornmentTextInput.propTypes = {
  ...TextInput.propTypes,
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  adornmentSettings: PropTypes.shape({
    removeBorder: PropTypes.bool,
    width: PropTypes.number,
    padding: PropTypes.number,
  }),
}

AdornmentTextInput.defaultProps = {
  ...TextInput.defaultProps,
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {},
}

const WrapperTextInput = React.forwardRef(
  ({ title, subtitle, error, ...props }, ref) => {
    const theme = useTheme()
    return (
      <div
        css={`
          width: ${props.wide ? '100%' : 'auto'};
        `}
      >
        <ComponentHeading title={title} subtitle={subtitle} />
        <AdornmentTextInput ref={ref} {...props} />
        {error && (
          <div
            css={`
              color: ${theme.red};
              ${textStyle('body3')};
              margin-left: ${1 * GU}px;
            `}
          >
            {error}
          </div>
        )}
      </div>
    )
  }
)

WrapperTextInput.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  error: PropTypes.string,
  wide: PropTypes.bool,
}
WrapperTextInput.defaultProps = {
  title: '',
  subtitle: '',
  error: '',
  wide: false,
}

// Multiline input (textarea element)
function TextInputMultiline(props) {
  return <WrapperTextInput multiline {...props} />
}

TextInputMultiline.propTypes = {
  required: PropTypes.bool,
}
TextInputMultiline.defaultProps = {
  required: false,
}

WrapperTextInput.Multiline = TextInputMultiline

export default WrapperTextInput
