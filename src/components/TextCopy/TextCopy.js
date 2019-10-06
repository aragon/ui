import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IconCopy } from '../../icons/'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { noop, warn } from '../../utils'
import TextInput from '../Input/TextInput'
import { ButtonIcon } from '../Button/ButtonIcon'
import { Toast } from '../ToastHub/ToastHub'

const HEIGHT = 5 * GU
const HEIGHT_ADJUSTED_FOR_BORDER = 5 * GU - 2
const ICON_WIDTH = 5 * GU

const TextCopyBase = React.memo(({ value, icon, onCopy, ...props }) => {
  const theme = useTheme()
  const inputRef = useRef(null)

  const handleFocus = useCallback(() => {
    inputRef.current && inputRef.current.select()
  }, [])
  const handleCopy = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()

      try {
        document.execCommand('copy')
        onCopy('Address copied')
      } catch (err) {
        warn(err)
      }

      inputRef.current.focus()
    }
  }, [onCopy])

  useEffect(() => {
    setTimeout(() => {
      inputRef.current && inputRef.current.focus()
    }, 0)
  }, [])

  const iconPaddingRule = icon ? `padding-left: ${ICON_WIDTH}px;` : null

  return (
    <div
      css={`
        position: relative;
        display: inline-flex;
        max-width: 100%;
        height: ${HEIGHT}px;
        background: ${theme.surface};
        ${iconPaddingRule}
      `}
      {...props}
    >
      {icon ? (
        <div
          css={`
            position: absolute;
            top: 0;
            left: 0;
            width: ${ICON_WIDTH}px;
            height: ${HEIGHT}px;
            overflow: hidden;
            border-radius: ${RADIUS}px 0 0 ${RADIUS}px;

            // Fix an issue where the border-radius wasn’t visible on Blink browsers.
            // See https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
            mask-image: linear-gradient(red, red);
          `}
        >
          {icon}
        </div>
      ) : null}
      <TextInput
        ref={inputRef}
        value={value}
        onFocus={handleFocus}
        readOnly
        wide
        adornment={
          <ButtonIcon
            onClick={handleCopy}
            label="Copy"
            css={`
              width: ${HEIGHT_ADJUSTED_FOR_BORDER}px;
              height: ${HEIGHT_ADJUSTED_FOR_BORDER}px;
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
          width: HEIGHT_ADJUSTED_FOR_BORDER,
          padding: 0,
        }}
        css={`
          text-overflow: ellipsis;
          height: ${HEIGHT}px;
          width: ${52.5 * GU}px;
          max-width: 100%;
          border: 1px solid ${theme.border};
          ${icon
            ? `
						border-top-left-radius: 0;
						border-bottom-left-radius: 0;
						padding-left: ${1 * GU}px
					`
            : ''};
          ${textStyle('address2')};
          &:read-only {
            color: ${theme.surfaceContent};
            text-shadow: none;
          }
        `}
      />
    </div>
  )
})

TextCopyBase.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onCopy: PropTypes.func,
}

const TextCopy = props =>
  // If onCopy is set (either to a function or null), Toast is not used.
  props.onCopy || props.onCopy === null ? (
    <TextCopyBase {...props} onCopy={props.onCopy || noop} />
  ) : (
    <Toast>{add => <TextCopy onCopy={add} {...props} />}</Toast>
  )

TextCopy.propTypes = TextCopyBase.propTypes

export default TextCopy
