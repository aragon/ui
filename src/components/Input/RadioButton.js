import React from 'react'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'
import { RadioGroupConsumer } from '../Radio/RadioGroup'
import { noop } from '../../utils'

const KEYS_PREV = [
  'ArrowUp',
  'ArrowLeft',
  // IE / Edge support
  'Up',
  'Left',
]

const KEYS_NEXT = [
  'ArrowDown',
  'ArrowRight',
  // IE / Edge support
  'Down',
  'Right',
]

class RadioButton extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    variant: PropTypes.oneOf(['checkbox', 'radio']),
    onCheck: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    addRadio: PropTypes.func,
    removeRadio: PropTypes.func,
    selectNext: PropTypes.func,
    selectPrev: PropTypes.func,
  }
  static defaultProps = {
    checked: false,
    variant: 'radio',
    id: null,
    selectPrev: noop,
    selectNext: noop,
  }
  _element = React.createRef()
  componentDidMount() {
    const { addRadio, id } = this.props
    if (addRadio && id !== null) {
      addRadio(id)
    }
  }
  componentWillUnmount() {
    const { removeRadio, id } = this.props
    if (removeRadio && id !== null) {
      removeRadio(id)
    }
  }
  componentDidUpdate(prevProps) {
    const { checked } = this.props
    if (checked && !prevProps.checked) {
      this._element.current.focus()
    }
  }
  handleKeyDown = event => {
    const { selectPrev, selectNext } = this.props
    console.log('KEY DOWN')
    if (KEYS_PREV.includes(event.key)) {
      selectPrev()
    }
    if (KEYS_NEXT.includes(event.key)) {
      selectNext()
    }
  }
  handleChange = () => {
    this.props.onCheck(this.props.id)
  }
  render() {
    const { variant, checked, onCheck, ...props } = this.props
    return (
      <CheckBox
        ref={this._element}
        variant={variant}
        checked={checked}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...props}
      />
    )
  }
}

class ConnectedRadioButton extends React.Component {
  static propTypes = RadioButton.propTypes
  static defaultProps = RadioButton.defaultProps
  render() {
    const { props } = this
    return (
      <RadioGroupConsumer>
        {({
          onCheck,
          selected,
          focusable,
          addRadio,
          removeRadio,
          selectNext,
          selectPrev,
        }) => (
          <RadioButton
            {...props}
            onCheck={props.onCheck || onCheck || noop}
            checked={props.id === selected && selected !== null}
            tabIndex={props.id === focusable && props.id !== null ? '0' : '-1'}
            addRadio={addRadio}
            removeRadio={removeRadio}
            selectPrev={selectPrev}
            selectNext={selectNext}
          />
        )}
      </RadioGroupConsumer>
    )
  }
}

export default ConnectedRadioButton
