import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Button } from '../Button/Button'
import { IconCalendar } from '../../icons/components'
import { useViewport } from '../../providers/Viewport/Viewport'
import { GU, RADIUS, breakpoint, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import DatePicker from './DatePicker'

const INPUT_HEIGHT = 5 * GU
const INPUT_HEIGHT_WITHOUT_BORDER = INPUT_HEIGHT - 2
const START_DATE = 'Start date'
const END_DATE = 'End date'

const Labels = ({ enabled, text }) => {
  const theme = useTheme()
  const color = text.indexOf(START_DATE) > -1 ? theme.hint : 'inherit'
  const [start, end] = text.split('|')
  return (
    <div
      css={`
        z-index: 2;
        cursor: pointer;
        background: ${theme.surface};
        ${unselectable}
      `}
    >
      <div
        css={`
          position: absolute;
          width: calc(100% - 28px);
          display: grid;
          grid-template-columns: 50% 2px 50%;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
          overflow: hidden;
          color: ${color};
          ${textStyle('body2')}
        `}
      >
        <div css="text-align: center;">{start}</div>
        <div>|</div>
        <div css="text-align: center;">{end}</div>
      </div>
      <div
        css={`
          position: absolute;
          right: 4px;
          display: flex;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
        `}
      >
        <IconCalendar
          css={`
            color: ${enabled ? theme.accent : theme.surfaceIcon};
          `}
        />
      </div>
    </div>
  )
}

Labels.propTypes = {
  enabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

class DateRangeInput extends React.PureComponent {
  state = {
    showPicker: false,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    startPicker: null,
    endPicker: null,
    startDateSelected: false,
    endDateSelected: false,
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

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showPicker !== prevState.showPicker) {
      const { startDate, endDate, compactMode } = this.props
      // unsetting selection for compact because it shows one calendar at a time
      /* eslint-disable */
      this.setState({
        startDateSelected: !compactMode && !!startDate,
        endDateSelected: !compactMode && !!endDate,
        startDate: !compactMode ? startDate : null,
        endDate: !compactMode ? endDate : null,
      })
      /* eslint-enable */
      if (this.state.showPicker) {
        document.addEventListener('mousedown', this.handleClickOutside)
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside)
      }
    }
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

    // clicking on start date resets it, so it can be re-picked
    if (startDate && dayjs(date).isSame(startDate, 'day')) {
      this.setState({
        startDateSelected: false,
        startDate: null,
      })
      return
    }
    // clicking on end date resets it, so it can be re-picked
    if (endDate && dayjs(date).isSame(endDate, 'day')) {
      this.setState({
        endDateSelected: false,
        endDate: null,
      })
      return
    }

    const isValidStartDate = !endDate || !dayjs(date).isAfter(endDate)
    const isValidEndDate = !startDate || !dayjs(date).isBefore(startDate)
    // if we have startDate, then `date` is the end date
    const isValidDate = startDate ? isValidEndDate : isValidStartDate

    const selectedDate = dayjs(date)
      .endOf('day')
      .toDate()

    // both dates are selected - if a date is clicked and it's before
    // start date, it should be the new start date
    // (this way the start date does not have to be reset before setting)
    // (the converse case for end date is handled implicitly below, because
    // after both dates are selected, any selected date will be candidate for
    // new end date)
    if (
      startDate &&
      endDate &&
      isValidStartDate &&
      dayjs(date).isBefore(startDate, 'day')
    ) {
      this.setState({
        startDateSelected: true,
        startDate: selectedDate,
      })
      return
    }

    if (isValidDate) {
      this.setState({
        [startDate ? 'endDateSelected' : 'startDateSelected']: true,
        [startDate ? 'endDate' : 'startDate']: selectedDate,
      })
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
      compactMode,
      format,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props
    const { showPicker, startDateSelected, endDateSelected } = this.state

    // closed
    // shows props, if props null then placeholder
    if (!showPicker) {
      return startDateProps && endDateProps
        ? `${dayjs(startDateProps).format(format)} | ${dayjs(
            endDateProps
          ).format(format)}`
        : `${START_DATE} | ${END_DATE}`
    }

    // opened
    // shows constants, till dates selected
    if (compactMode) {
      return `${startDateSelected ? this.formattedStartDate : START_DATE} | ${
        endDateSelected ? this.formattedEndDate : END_DATE
      }`
    }

    //  shows props, changes with selection
    return `${
      this.formattedStartDate ? this.formattedStartDate : START_DATE
    } | ${this.formattedEndDate ? this.formattedEndDate : END_DATE}`
  }

  render() {
    const {
      startDate,
      endDate,
      startDateSelected,
      endDateSelected,
      showPicker,
    } = this.state
    const {
      compactMode,
      theme,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

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
              {(!compactMode || !startDateSelected) && (
                <DatePicker
                  datesRangeStart={startDate}
                  datesRangeEnd={endDate}
                  onSelect={this.handleSelectDate}
                  overlay={false}
                  initialDate={dayjs()
                    .subtract(1, 'month')
                    .toDate()}
                />
              )}
              {(!compactMode || startDateSelected) && (
                <DatePicker
                  datesRangeStart={startDate}
                  datesRangeEnd={endDate}
                  onSelect={this.handleSelectDate}
                  overlay={false}
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
                disabled={!startDateSelected || !endDateSelected}
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

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 8px;

  ${breakpoint(
    'medium',
    `
      display: block;
      text-align: right;
    `
  )}
`

const Wrap = styled.div`
  > div {
    border: 0;
    box-shadow: none;
  }

  ${breakpoint(
    'medium',
    `
      display: flex;
      flex-direction: row;
      align-items: baseline;
    `
  )}
`

const DateRange = props => {
  const { below } = useViewport()
  const theme = useTheme()
  return (
    <DateRangeInput compactMode={below('medium')} theme={theme} {...props} />
  )
}

export { DateRange }
