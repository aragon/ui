import { differenceInSeconds } from 'date-fns/esm'

const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24

export const difference = (date1, date2) => {
  const totalInSeconds = differenceInSeconds(date1, date2)

  let seconds = totalInSeconds

  const days = Math.floor(seconds / DAY_IN_SECONDS)
  seconds = seconds % DAY_IN_SECONDS

  const hours = Math.floor(seconds / HOUR_IN_SECONDS)
  seconds = seconds % HOUR_IN_SECONDS

  const minutes = Math.floor(seconds / MINUTE_IN_SECONDS)
  seconds = seconds % MINUTE_IN_SECONDS

  return { days, hours, minutes, seconds, totalInSeconds }
}
