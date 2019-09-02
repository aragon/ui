import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IconCopy } from '../../icons/'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { monospace, noop, warn } from '../../utils'
import TextInput from '../Input/TextInput'
import { ButtonIcon } from '../Button/ButtonIcon'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import { Toast } from '../ToastHub/ToastHub'

const HEIGHT_ADJUSTED_FOR_BORDER = 5 * GU - 2

const AddressFieldBase = React.memo(function AddressFieldBase({
  address,
  icon,
  onCopy,
  ...props
}) {
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

  return (
    <div
      css={`
        position: relative;
        display: inline-flex;
        max-width: 100%;
        height: ${5 * GU}px;
        padding-left: ${5 * GU}px;
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        border-radius: ${RADIUS}px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
      `}
      {...props}
    >
      <div
        css={`
          position: absolute;
          top: -1px;
          left: -1px;
          height: 40px;
          overflow: hidden;
          border-radius: ${RADIUS}px 0 0 ${RADIUS}px;
          border: 1px solid transparent;
        `}
      >
        {icon || (
          <EthIdenticon
            address={address}
            scale={2}
            css={`
              transform: scale(calc(38 / 48));
              transform-origin: 0 0;
            `}
          />
        )}
      </div>
      <TextInput
        ref={inputRef}
        value={address}
        onFocus={handleFocus}
        readOnly
        adornment={
          <ButtonIcon
            onClick={handleCopy}
            label="Copy"
            css={`
              width: ${HEIGHT_ADJUSTED_FOR_BORDER}px;
              height: ${HEIGHT_ADJUSTED_FOR_BORDER}px;
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
          height: ${HEIGHT_ADJUSTED_FOR_BORDER}px;
          width: ${52.5 * GU}px;
          max-width: 100%;
          border: 0;
          ${icon ? `padding-left: ${1 * GU}px` : ''};
          ${monospace};
          &:read-only {
            color: ${theme.surfaceContent};
            text-shadow: none;
          }
        `}
      />
    </div>
  )
})
AddressFieldBase.propTypes = {
  address: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onCopy: PropTypes.func,
}

const AddressField = props =>
  // If onCopy is set (either to a function or null), Toast is not used.
  props.onCopy || props.onCopy === null ? (
    <AddressFieldBase {...props} onCopy={props.onCopy || noop} />
  ) : (
    <Toast>{add => <AddressFieldBase onCopy={add} {...props} />}</Toast>
  )

AddressField.propTypes = AddressFieldBase.propTypes

export default AddressField
