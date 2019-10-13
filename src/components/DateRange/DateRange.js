import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Button } from '../Button/Button'
import { IconCalendar } from '../../icons/components'
import { GU, RADIUS, breakpoint, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import DatePicker from './DatePicker'

const INPUT_HEIGHT = 5 * GU
const INPUT_HEIGHT_WITHOUT_BORDER = INPUT_HEIGHT - 2
const START_DATE = 'Start date'
const END_DATE = 'End date'

const Labels = ({ enabled, text, invalid }) => {
  const theme = useTheme()
  const color = invalid ? theme.hint : 'inherit'
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
  invalid: PropTypes.bool,
}

class DateRangeInput extends React.PureComponent {
  state = {
    showPicker: null,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    startPicker: null,
    endPicker: null,
    startPartialApplied: false,
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
      this.setState(({ showPicker }) => ({
        showPicker: showPicker ? null : 'start',
      }))
    }
  }

  handleClickOutside = event => {
    if (this.rootRef && !this.rootRef.contains(event.target)) {
      this.setState({ showPicker: null })
    }
  }

  handleSelectStartDate = date => {
    const { startDate, endDate } = this.state
    const isAfter = dayjs(date).isAfter(endDate)
    const isValidDate = !endDate || !isAfter
    if (dayjs(date).isSame(startDate, 'day')) {
      this.setState({
        startDate: null,
      })
    } else if (dayjs(date).isSame(endDate, 'day')) {
      this.setState({
        endDate: null,
      })
      // } else if (isAfter) {
      //   this.setState({
      //     endDate: dayjs(date)
      //       .endOf('day')
      //       .toDate(),
      //   })
    } else if (isValidDate) {
      this.setState({
        showPicker: 'end',
        startDate: dayjs(date)
          .startOf('day')
          .toDate(),
      })
    }
  }

  handleSelectEndDate = date => {
    const { startDate, endDate } = this.state
    const isBefore = dayjs(date).isBefore(startDate)
    const isValidDate = !startDate || !isBefore
    if (dayjs(date).isSame(startDate, 'day')) {
      this.setState({
        startDate: null,
        showPicker: 'start',
      })
    } else if (dayjs(date).isSame(endDate, 'day')) {
      this.setState({
        endDate: null,
      })
    } else if (isBefore) {
      this.setState({
        startDate: dayjs(date)
          .startOf('day')
          .toDate(),
      })
    } else if (isValidDate) {
      this.setState({
        endDate: dayjs(date)
          .endOf('day')
          .toDate(),
      })
    }
  }

  handleApply = e => {
    e.preventDefault()
    e.stopPropagation()

    const { startDate, endDate, showPicker } = this.state
    const startDateAllowed = this.props.partial === 'end' || startDate
    const endDateAllowed = this.props.partial === 'start' || endDate

    if (startDateAllowed && endDateAllowed) {
      const start = startDate
        ? dayjs(startDate)
            .startOf('day')
            .toDate()
        : null
      const end = endDate
        ? dayjs(endDate)
            .endOf('day')
            .toDate()
        : null

      this.props.onChange({
        start,
        end,
      })

      this.setState({ showPicker: null })
    }

    if (this.props.partial === 'end' && showPicker !== 'end') {
      this.setState({ showPicker: 'end' })
    }
  }

  handleClear = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showPicker: 'start', startDate: null, endDate: null })
    this.props.onChange({
      start: null,
      end: null,
    })
  }

  getValueText = () => {
    const { startDate, endDate, showPicker } = this.state
    const {
      format,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

    const startDateSelected = showPicker ? startDate : startDateProps
    const endDateSelected = showPicker ? endDate : endDateProps

    const startStr = startDateSelected
      ? dayjs(startDateSelected).format(format)
      : START_DATE
    const endStr = endDateSelected
      ? dayjs(endDateSelected).format(format)
      : END_DATE
    return `${startStr} | ${endStr}`
  }

  render() {
    const { startDate, endDate, showPicker } = this.state
    const {
      theme,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

    const partial = this.props.partial
    const startDateSelected = showPicker ? startDate : startDateProps
    const endDateSelected = showPicker ? endDate : endDateProps
    const startDateRequired = partial !== 'end' && !startDateSelected
    // const endDateRequired = !showPicker && partial !== 'start' && !endDateSelected
    const endDateRequired = partial !== 'start' && !endDateSelected
    const startPartialApplied = showPicker === 'end'
    const startAppliedOrClosed =
      partial !== 'end' || startPartialApplied || !showPicker
    const invalid =
      (!startPartialApplied && startDateRequired) ||
      (startAppliedOrClosed && endDateRequired)

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
        <Labels
          enabled={!!showPicker}
          text={this.getValueText()}
          invalid={invalid}
        />
        {!!showPicker && (
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
              {showPicker === 'start' && (
                <DatePicker
                  name="Start date"
                  startDate={startDate}
                  endDate={endDate}
                  onSelect={this.handleSelectStartDate}
                  overlay={false}
                />
              )}
              {showPicker === 'end' && (
                <DatePicker
                  name="End date"
                  startDate={startDate}
                  endDate={endDate}
                  onSelect={this.handleSelectEndDate}
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
                disabled={invalid}
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
  // partial is 'start' if beginning is required, 'end' if end is required
  partial: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  theme: PropTypes.object.isRequired,
}

DateRangeInput.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
  partial: null,
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
  const theme = useTheme()
  return <DateRangeInput theme={theme} {...props} />
}

export { DateRange }
