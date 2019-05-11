import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subYears,
  subMonths,
  subDays,
  subHours,
  subMinutes,
  subSeconds,
} from 'date-fns'

const fnsByUnit = [
  ['years', differenceInYears, subYears],
  ['months', differenceInMonths, subMonths],
  ['days', differenceInDays, subDays],
  ['hours', differenceInHours, subHours],
  ['minutes', differenceInMinutes, subMinutes],
  ['seconds', differenceInSeconds, subSeconds],
]

// Return the difference between two dates, per unit.
// Set `units` to get specific units only, e.g. { minutes: true, seconds: true }.
// If `units` is not passed, all the units are set to `true`.
export const difference = (
  date1,
  date2,
  units = {
    years: true,
    months: true,
    days: true,
    hours: true,
    minutes: true,
    seconds: true,
  }
) => {
  const start = date2 > date1 ? date1 : date2
  return fnsByUnit.reduce(
    (result, [name, differenceInUnit, subUnit]) => {
      result[name] = null
      if (units[name]) {
        result[name] = differenceInUnit(result.remaining, start)
        result.remaining = subUnit(result.remaining, result[name])
      }
      return result
    },
    { remaining: start === date1 ? date2 : date1 }
  )
}

export const formatHtmlDatetime = date =>
  format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
