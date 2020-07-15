import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { warn, warnOnce } from '../../utils'
import { textStyle, GU, RADIUS } from '../../style'

// Simple text input
const TextInput = React.forwardRef(
  ({ autofocus, multiline, type, ...props }, ref) => {
    const theme = useTheme()

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
  autofocus: PropTypes.bool,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
}

TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text',
}

const Adornment = React.memo(({ adornment, position, padding }) => {
  const theme = useTheme()
  return (
    <div
      css={`
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        ${position === 'end' ? 'right' : 'left'}: ${padding}px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.surfaceContentSecondary};
      `}
    >
      {adornment}
    </div>
  )
})

Adornment.propTypes = {
  adornment: PropTypes.node,
  position: PropTypes.oneOf(['start', 'end']),
  padding: PropTypes.number,
}

Adornment.defaultProps = {
  padding: 4,
}

const deprecationWarning = (adornmentPosition, adornmentSettings) => {
  if (adornmentPosition) {
    warn(
      'TextInput: The "adornmentPosition" prop is deprecated. Please use the "adornment" prop instead.'
    )
  }
  if (adornmentSettings) {
    warn(
      'TextInput: The "adornmentSettings" props is deprecated. Please use the "adornment" prop instead.'
    )
  }
}

// Text input wrapped to allow adornments
const WrapperTextInput = React.forwardRef(({ adornment, ...props }, ref) => {
  deprecationWarning(props.adornmentPosition, props.adornmentSettings)

  if (!adornment) {
    return <TextInput ref={ref} {...props} />
  }

  let adornmentConfig = adornment

  const usingDeprecatedAPI =
    React.isValidElement(adornment) ||
    typeof adornment === 'string' ||
    (typeof adornment === 'object' && adornment.constructor === Array)

  if (usingDeprecatedAPI) {
    const { adornmentPosition = 'start', adornmentSettings = {} } = props
    adornmentConfig = {
      [adornmentPosition]: adornment,
      [`${adornmentPosition}Padding`]: adornmentSettings.padding,
      [`${adornmentPosition}Width`]: adornmentSettings.width,
    }
  }

  const {
    start,
    startPadding,
    startWidth = 36,
    end,
    endPadding,
    endWidth = 36,
  } = adornmentConfig

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
          ${start && `padding-left: ${startWidth}`}
          ${end && `padding-right: ${endWidth}`}
        `}
        {...props}
      />
      {start && (
        <Adornment adornment={start} padding={startPadding} position="start" />
      )}
      {end && <Adornment adornment={end} padding={endPadding} position="end" />}
    </div>
  )
})

WrapperTextInput.propTypes = {
  ...TextInput.propTypes,
  adornment: PropTypes.oneOf([
    PropTypes.shape({
      start: PropTypes.node,
      startWidth: PropTypes.number,
      startPadding: PropTypes.number,
      end: PropTypes.node,
      endWidth: PropTypes.number,
      endPadding: PropTypes.number,
    }),
    
    // deprecated
    PropTypes.node,
  ]),

  // deprecated
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  adornmentSettings: PropTypes.shape({
    width: PropTypes.number,
    padding: PropTypes.number,
  }),
}

WrapperTextInput.defaultProps = {
  ...TextInput.defaultProps,
  adornment: null,
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
