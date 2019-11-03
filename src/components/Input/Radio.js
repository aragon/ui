import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from './Checkbox'
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

class RadioButton extends React.PureComponent {
  static propTypes = {
    addRadio: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    removeRadio: PropTypes.func,
    selectNext: PropTypes.func,
    selectPrev: PropTypes.func,
    tabIndex: PropTypes.string,
  }
  static defaultProps = {
    addRadio: noop,
    checked: false,
    disabled: false,
    id: null,
    onChange: undefined, // <Button /> need to detect if onChange has been set
    removeRadio: noop,
    selectNext: noop,
    selectPrev: noop,
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
    if (KEYS_PREV.includes(event.key)) {
      selectPrev()
      event.preventDefault()
    }
    if (KEYS_NEXT.includes(event.key)) {
      selectNext()
      event.preventDefault()
    }
  }
  handleChange = () => {
    const { onChange, id } = this.props
    if (onChange) {
      onChange(id)
    }
  }
  render() {
    const { checked, disabled, id, onChange, tabIndex, ...props } = this.props
    return (
      <Checkbox
        ref={this._element}
        checked={checked}
        disabled={disabled}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        tabIndex={tabIndex}
        variant="radio"
        {...props}
      />
    )
  }
}

class Radio extends React.PureComponent {
  static propTypes = RadioButton.propTypes
  static defaultProps = RadioButton.defaultProps
  render() {
    const { props } = this
    return (
      <RadioGroupConsumer>
        {({
          onChange,
          selected,
          focusableId,
          addRadio,
          removeRadio,
          selectNext,
          selectPrev,
        }) => (
          <RadioButton
            {...props}
            onChange={props.onChange || onChange}
            checked={
              props.checked || (props.id === selected && selected !== null)
            }
            tabIndex={
              props.tabIndex ||
              (focusableId === undefined || props.id === focusableId
                ? '0'
                : '-1')
            }
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

export default Radio
