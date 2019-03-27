import { differenceInSeconds, format } from 'date-fns'

const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30

export const difference = (date1, date2) => {
  const totalInSeconds = differenceInSeconds(date1, date2)

  let seconds = totalInSeconds

  const months =  Math.floor(seconds / MONTH_IN_SECONDS)
  seconds = seconds % MONTH_IN_SECONDS

  const days = Math.floor(seconds / DAY_IN_SECONDS)
  seconds = seconds % DAY_IN_SECONDS

  const hours = Math.floor(seconds / HOUR_IN_SECONDS)
  seconds = seconds % HOUR_IN_SECONDS

  const minutes = Math.floor(seconds / MINUTE_IN_SECONDS)
  seconds = seconds % MINUTE_IN_SECONDS

  return { months, days, hours, minutes, seconds, totalInSeconds }
}

export const formatHtmlDatetime = date =>
  format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
