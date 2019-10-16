import dayjs from 'dayjs'

export const handleDateSelect = ({ date, startDate, endDate }) => {
  // clicking on start date resets it, so it can be re-picked
  if (startDate && dayjs(date).isSame(startDate, 'day')) {
    return {
      startDate: null,
    }
  }
  // clicking on end date resets it, so it can be re-picked
  if (endDate && dayjs(date).isSame(endDate, 'day')) {
    return {
      endDate: null,
    }
  }

  const isValidStartDate = !endDate || !dayjs(date).isAfter(endDate)
  const isValidEndDate = !startDate || !dayjs(date).isBefore(startDate)
  // if we have startDate, then `date` is the end date
  const isValidDate = startDate ? isValidEndDate : isValidStartDate

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
    return {
      startDate: date,
    }
  }

  // one date is selected, but the clicked date is not corresponding
  // (start selected, but clicked a date before start, and vice-versa)
  // in this case, reverse the range
  if (!startDate && endDate && dayjs(date).isAfter(endDate)) {
    return {
      startDate: endDate,
      endDate: date,
    }
  }
  if (!endDate && startDate && dayjs(date).isBefore(startDate)) {
    return {
      startDate: date,
      endDate: startDate,
    }
  }

  if (isValidDate) {
    return {
      [startDate ? 'endDate' : 'startDate']: date,
    }
  }
}
