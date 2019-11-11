import React, { useCallback, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'
import { IconCopy } from '../../icons/'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { noop, warn } from '../../utils'
import TextInput from '../Input/TextInput'
import { ButtonIcon } from '../Button/ButtonIcon'
import { useToast } from '../ToastHub/ToastHub'

const HEIGHT = 5 * GU

const TextCopy = React.memo(
  React.forwardRef(function TextCopy(
    { adornment, autofocus, message, monospace, onCopy, value, ...props },
    ref
  ) {
    const theme = useTheme()
    const toast = useToast()
    const inputRef = useRef(null)

    // Allows to focus the component from the outside
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus()
      },
    }))

    // Select the content on focus
    const handleFocus = useCallback(() => {
      inputRef.current && inputRef.current.select()
    }, [])

    // If onCopy is set (either to a function or null), Toast is not used.
    const onCopyOrToast = onCopy === undefined ? toast : onCopy || noop

    const handleCopy = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus()

        try {
          document.execCommand('copy')
          onCopyOrToast(message)
        } catch (err) {
          warn(err)
        }
      }
    }, [message, onCopyOrToast])

    return (
      <div
        css={`
          position: relative;
          display: inline-flex;
          width: ${52.5 * GU}px;
          max-width: 100%;
          height: ${HEIGHT}px;
          padding-left: ${adornment ? `${HEIGHT}px` : '0'};
        `}
        {...props}
      >
        {adornment && (
          <div
            css={`
              position: absolute;
              top: 0;
              left: 0;
              overflow: hidden;
              width: ${HEIGHT}px;
              height: ${HEIGHT}px;
              background: ${theme.surface};
              border: 1px solid ${theme.border};
              border-right: 0;

              // 0.0001px fixes an issue on Blink browsers, where each
              // border-radius need to be non 0 for overflow:hidden to work.
              border-radius: ${RADIUS}px 0.0001px 0.0001px ${RADIUS}px;
            `}
          >
            <div
              css={`
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${HEIGHT - 2}px;
                height: ${HEIGHT - 2}px;
              `}
            >
              {adornment}
            </div>
          </div>
        )}
        <TextInput
          ref={inputRef}
          adornment={
            <ButtonIcon
              onClick={handleCopy}
              label="Copy"
              css={`
                width: ${HEIGHT - 2}px;
                height: ${HEIGHT - 2}px;
                border-radius: 0;
                color: ${theme.surfaceIcon};
              `}
            >
              <IconCopy />
            </ButtonIcon>
          }
          adornmentPosition="end"
          adornmentSettings={{
            // Keep the button square
            width: HEIGHT - 2,
            padding: 0,
          }}
          autofocus={autofocus}
          onFocus={handleFocus}
          readOnly
          value={value}
          wide
          css={`
            text-overflow: ellipsis;
            height: ${HEIGHT}px;
            max-width: 100%;
            border: 1px solid ${theme.border};
            ${adornment
              ? `
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  border-left: 0;
                `
              : ''};
            ${textStyle(monospace ? 'address2' : 'body3')};
            &:read-only {
              color: ${theme.surfaceContent};
              text-shadow: none;
            }
          `}
        />
      </div>
    )
  })
)

TextCopy.propTypes = {
  adornment: PropTypes.node,
  autofocus: PropTypes.bool,
  message: PropTypes.string,
  monospace: PropTypes.bool,
  onCopy: PropTypes.func,
  value: PropTypes.string,
}

TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true,
}

export default TextCopy
