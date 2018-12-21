import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'
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

class Radio extends React.PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    variant: PropTypes.oneOf(['checkbox', 'radio']),
    onCheck: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    addRadio: PropTypes.func,
    removeRadio: PropTypes.func,
    selectNext: PropTypes.func,
    selectPrev: PropTypes.func,
    tabIndex: PropTypes.string,
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
    this.props.onCheck(this.props.id)
  }
  render() {
    const { variant, checked, onCheck, id, tabIndex, ...props } = this.props
    return (
      <Checkbox
        ref={this._element}
        variant={variant}
        checked={checked}
        tabIndex={tabIndex}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...props}
      />
    )
  }
}

class ConnectedRadio extends React.PureComponent {
  static propTypes = Radio.propTypes
  static defaultProps = Radio.defaultProps
  static displayName = 'Radio'
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
          <Radio
            {...props}
            onCheck={props.onCheck || onCheck || noop}
            checked={
              props.checked || (props.id === selected && selected !== null)
            }
            tabIndex={
              props.tabIndex ||
              (focusable === undefined || props.id === focusable ? '0' : '-1')
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

export default ConnectedRadio
