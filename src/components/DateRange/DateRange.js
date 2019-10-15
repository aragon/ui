import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { Button } from '../Button/Button'
import { useViewport } from '../../providers/Viewport/Viewport'
import { RADIUS, breakpoint } from '../../style'
import { useTheme } from '../../theme'
import DatePicker from './DatePicker'
import Labels from './Labels'
import { Controls, Wrap } from './styled'
import {
  START_DATE,
  END_DATE,
  INPUT_HEIGHT,
  INPUT_HEIGHT_WITHOUT_BORDER,
} from './consts'
import { handleDateSelect } from './utils'

class DateRangeInput extends React.PureComponent {
  state = {
    showPicker: false,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
  }
  _datePickerContainer = React.createRef()

  get formattedStartDate() {
    const { format } = this.props
    const { startDate } = this.state
    const isDate = startDate instanceof Date

    return isDate ? dayjs(startDate).format(format) : ''
  }

  get formattedEndDate() {
    const { format } = this.props
    const { endDate } = this.state
    const isDate = endDate instanceof Date

    return isDate ? dayjs(endDate).format(format) : ''
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClick = event => {
    event.stopPropagation()
    if (
      !this._datePickerContainer.current ||
      !this._datePickerContainer.current.contains(event.target)
    ) {
      this.setState(({ showPicker }) => ({ showPicker: !showPicker }))
    }
  }

  handleClickOutside = event => {
    if (this.rootRef && !this.rootRef.contains(event.target)) {
      this.setState({ showPicker: false })
    }
  }

  handleSelectDate = date => {
    const { startDate, endDate } = this.state
    const newState = handleDateSelect({ date, startDate, endDate })
    if (newState) {
      this.setState(newState)
    }
  }

  handleApply = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showPicker: false })

    const { startDate, endDate } = this.state
    if (startDate && endDate) {
      this.props.onChange({
        start: dayjs(startDate)
          .startOf('day')
          .toDate(),
        end: dayjs(endDate)
          .endOf('day')
          .toDate(),
      })
    }
  }

  handleClear = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showPicker: false, startDate: null, endDate: null })
    this.props.onChange({
      start: null,
      end: null,
    })
  }

  getValueText = () => {
    const {
      format,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props
    const { showPicker } = this.state

    // closed
    // shows props, if props null then placeholder
    if (!showPicker) {
      return startDateProps && endDateProps
        ? `${dayjs(startDateProps).format(format)} | ${dayjs(
            endDateProps
          ).format(format)}`
        : `${START_DATE} | ${END_DATE}`
    }

    //  shows props, changes with selection
    return `${
      this.formattedStartDate ? this.formattedStartDate : START_DATE
    } | ${this.formattedEndDate ? this.formattedEndDate : END_DATE}`
  }

  render() {
    const { startDate, endDate, showPicker } = this.state
    const {
      compactMode,
      theme,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

    const substractMonthInFirstDatePicker = !(compactMode || startDateProps)

    return (
      <div
        css={`
          height: ${INPUT_HEIGHT}px;
          width: 250px;
          position: relative;
          border: ${startDateProps && endDateProps
            ? `1px solid ${theme.accent}`
            : `1px solid ${theme.border}`};
          border-radius: ${RADIUS}px;
        `}
        ref={el => (this.rootRef = el)}
        onClick={this.handleClick}
      >
        <Labels enabled={showPicker} text={this.getValueText()} />
        {this.state.showPicker && (
          <div
            ref={this._datePickerContainer}
            css={`
              position: absolute;
              top: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
              z-index: 10;
              border: 1px solid ${theme.border};
              border-radius: ${RADIUS}px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
              background: ${theme.surface};
            `}
          >
            <Wrap>
              <DatePicker
                datesRangeStart={startDate}
                datesRangeEnd={endDate}
                onSelect={this.handleSelectDate}
                overlay={false}
                initialDate={dayjs(startDateProps || undefined)
                  .subtract(substractMonthInFirstDatePicker ? 1 : 0, 'month')
                  .toDate()}
              />
              {!compactMode && (
                <DatePicker
                  datesRangeStart={startDate}
                  datesRangeEnd={endDate}
                  onSelect={this.handleSelectDate}
                  overlay={false}
                  initialDate={dayjs(endDateProps || undefined).toDate()}
                />
              )}
            </Wrap>

            <Controls>
              <Button onClick={this.handleClear}>Clear</Button>
              <Button
                css={`
                  ${breakpoint(
                    'medium',
                    `
                      margin-left: 19px;
                    `
                  )}
                `}
                mode="strong"
                onClick={this.handleApply}
                disabled={!startDate || !endDate}
              >
                Apply
              </Button>
            </Controls>
          </div>
        )}
      </div>
    )
  }
}

DateRangeInput.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  compactMode: PropTypes.bool,
  theme: PropTypes.object.isRequired,
}

DateRangeInput.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
}

const DateRange = props => {
  const { below } = useViewport()
  const theme = useTheme()
  return (
    <DateRangeInput compactMode={below('medium')} theme={theme} {...props} />
  )
}

export { DateRange }
