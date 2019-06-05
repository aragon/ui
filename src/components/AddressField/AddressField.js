import React from 'react'
import PropTypes from 'prop-types'
import { IconCopy } from '../../icons/components'
import TextInput from '../Input/TextInput'
import ButtonIcon from '../Button/ButtonIcon'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import { Toast } from '../ToastHub/ToastHub'
import { theme } from '../../theme-legacy'
import { noop, warn } from '../../utils'
import { font } from '../../utils/styles/font'

class AddressFieldBase extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
    icon: PropTypes.node,
  }
  _input = React.createRef()
  _button = React.createRef()
  componentDidMount() {
    setTimeout(() => {
      this._input.current.focus()
    }, 0)
  }
  handleFocus = () => {
    this._input.current.select()
  }
  handleCopy = () => {
    const { onCopy } = this.props
    this._input.current.focus()
    this._input.current.select()

    try {
      document.execCommand('copy')
      onCopy('Address copied')
    } catch (err) {
      warn(err)
    }

    this._input.current.focus()
  }
  render() {
    const { address, icon } = this.props
    return (
      <div
        css={`
          display: inline-flex;
          max-width: 100%;
          height: 40px;
          position: relative;
          background: ${theme.contentBackground};
          border: 1px solid ${theme.contentBorder};
          border-radius: 3px;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
          padding-left: 40px;
          padding-right: 30px;
        `}
      >
        <div
          css={`
            position: absolute;
            top: -1px;
            left: -1px;
            height: 40px;
            overflow: hidden;
            border-radius: 3px 0 0 3px;
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
          ref={this._input}
          value={address}
          onFocus={this.handleFocus}
          readOnly
          css={`
            text-overflow: ellipsis;
            width: 390px;
            max-width: 100%;
            border: 0;
            box-shadow: none;
            background: transparent;
            ${icon && 'padding-left: 8px'};
            ${font({ monospace: true })};
            &:read-only {
              color: ${theme.textPrimary};
              text-shadow: none;
            }
          `}
        />
        <ButtonIcon
          ref={this._button}
          onClick={this.handleCopy}
          label="Copy"
          css={`
            position: absolute;
            top: 0;
            right: 0;
            width: 39px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 3px 3px 0;
            &:active {
              background: rgba(220, 234, 239, 0.3);
            }
          `}
        >
          <IconCopy />
        </ButtonIcon>
      </div>
    )
  }
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
