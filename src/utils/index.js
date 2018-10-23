/* eslint-disable prettier/prettier */
export { difference, formatHtmlDatetime } from './date'
export { formatIntegerRange } from './format'
export {
  font,
  grid,
  spring,
  springs,
  breakpoint,
  BreakPoint,
  unselectable,
} from './styles'

export function noop() {}

// Return a function that executes `cb` when on the dev environment
export function devOnly(cb) {
  return process.env.NODE_ENV === 'development' ? cb : noop
}

export const log = devOnly((...params) => {
  console.log(...params)
})

export const warn = devOnly((...params) => {
  console.warn(...params)
})
