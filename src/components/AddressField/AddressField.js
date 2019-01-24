import React from 'react'
import PropTypes from 'prop-types'
import { IconCopy } from '../../icons'
import TextInput from '../Input/TextInput'
import ButtonIcon from '../Button/ButtonIcon'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import { Toast } from '../ToastHub/ToastHub'
import { theme } from '../../theme'
import { noop, warn } from '../../utils'

class AddressField extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
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
    const { address } = this.props
    return (
      <div
        css={`
          display: inline-flex;
          max-width: 100%;
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
            top: 0;
            left: 0;
            bottom: 0;
            border-radius: 3px;
            overflow: hidden;
          `}
        >
          <EthIdenticon
            address={address}
            scale={2}
            css={`
              transform: scale(calc(40 / 48));
              transform-origin: 0 0;
            `}
          />
        </div>
        <TextInput
          ref={this._input}
          value={address}
          onFocus={this.handleFocus}
          readOnly
          css={`
            text-overflow: ellipsis;
            width: 350px;
            max-width: 100%;
            border: 0;
            box-shadow: none;
            background: transparent;
            &:read-only {
              color: ${theme.textPrimary};
              text-shadow: none;
            }
          `}
        />
        <ButtonIcon
          ref={this._button}
          onClick={this.handleCopy}
          title="Copy"
          css={`
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
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

export default props =>
  // If onCopy is set (either to a function or null), Toast is not used.
  props.onCopy || props.onCopy === null ? (
    <AddressField {...props} onCopy={props.onCopy || noop} />
  ) : (
    <Toast>{add => <AddressField onCopy={add} {...props} />}</Toast>
  )
