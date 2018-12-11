import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isDate, format as formatDate } from 'date-fns'

import { TextInput, DatePicker } from '..'
import { IconBlank } from '../../icons'

const Container = styled.div`
  position: relative;
`

class DateInput extends React.PureComponent {
  state = {
    showPicker: false,
  }

  get formattedValue() {
    const { value } = this.props

    return isDate(value) ? formatDate(value, this.props.format) : ''
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showPicker !== prevState.showPicker) {
      if (this.state.showPicker) {
        document.addEventListener('mousedown', this.handleClickOutside)
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside)
      }
    }
  }

  handleClick = event => {
    event.stopPropagation()
    this.setState({ showPicker: true })
  }

  handleClickOutside = event => {
    if (this.rootRef && !this.rootRef.contains(event.target)) {
      this.setState({ showPicker: false })
    }
  }

  handleSelect = date => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(date)
    }

    this.setState({ showPicker: false })
  }

  render() {
    return (
      <Container ref={el => (this.rootRef = el)} onClick={this.handleClick}>
        <TextInput
          {...this.props}
          value={this.formattedValue}
          readOnly
          icon={<IconBlank />}
          iconPosition="right"
        />
        {this.state.showPicker && (
          <DatePicker
            currentDate={this.props.value}
            onSelect={this.handleSelect}
            overlay
          />
        )}
      </Container>
    )
  }
}

DateInput.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

DateInput.defaultProps = {
  format: 'LL/dd/yyyy',
  onChange: () => {},
}

export default DateInput
