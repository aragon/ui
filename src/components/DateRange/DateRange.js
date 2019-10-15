import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { Button } from '../Button/Button'
import { useViewport } from '../../providers/Viewport/Viewport'
import { RADIUS, breakpoint, GU } from '../../style'
import { useTheme } from '../../theme'
import DatePicker from './DatePicker'
import Labels from './Labels'
import { Controls, Wrap } from './components'
import { START_DATE, END_DATE, INPUT_HEIGHT, INPUT_BORDER } from './consts'
import { handleDateSelect } from './utils'

class DateRangeInput extends React.PureComponent {
  state = {
    showPicker: false,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
  }
  _datePickerContainer = React.createRef()

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
    const stateUpdate = handleDateSelect({ date, startDate, endDate })
    if (stateUpdate) {
      this.setState(stateUpdate)
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

  getLabelsProps = () => {
    const { format } = this.props
    const { showPicker } = this.state

    const startDate = showPicker ? this.state.startDate : this.props.startDate
    const endDate = showPicker ? this.state.endDate : this.props.endDate
    return {
      startText: startDate ? dayjs(startDate).format(format) : START_DATE,
      endText: endDate ? dayjs(endDate).format(format) : END_DATE,
    }
  }

  render() {
    const { startDate, endDate, showPicker } = this.state
    const {
      compactMode,
      theme,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

    // if both dates are in the same month, use the right calendar for it,
    // and display month before on the left calendar
    const propsDatesInSameMonth =
      startDateProps &&
      endDateProps &&
      dayjs(startDateProps).isSame(dayjs(endDateProps), 'month')

    const displayMonthBeforeOnLeft = compactMode
      ? false
      : propsDatesInSameMonth || !startDateProps

    return (
      <div
        css={`
          height: ${INPUT_HEIGHT}px;
          width: ${GU * 31}px;
          position: relative;
          border: ${startDateProps && endDateProps
            ? `${INPUT_BORDER}px solid ${theme.accent}`
            : `${INPUT_BORDER}px solid ${theme.border}`};
          border-radius: ${RADIUS}px;
        `}
        ref={el => (this.rootRef = el)}
        onClick={this.handleClick}
      >
        <Labels enabled={showPicker} {...this.getLabelsProps()} />
        {this.state.showPicker && (
          <div
            ref={this._datePickerContainer}
            css={`
              position: absolute;
              top: ${INPUT_HEIGHT}px;
              left: -${INPUT_BORDER}px;
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
                  .subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month')
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
