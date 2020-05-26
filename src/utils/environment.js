import { noop } from './miscellaneous'

// Return a function that executes `cb` when on the dev environment
export function devOnly(cb) {
  return cb
  return process.env.NODE_ENV === 'development' ? cb : noop
}

// Log in dev mode only
export const log = devOnly((...params) => {
  console.log(...params)
})

// Warn in dev mode only
export const warn = devOnly((...params) => {
  console.warn(...params)
})

// Like warn(), but only once
const Warned = new Map()
export const warnOnce = devOnly((domain, ...params) => {
  if (!Warned.get(domain)) {
    console.warn(...params)
    Warned.set(domain, true)
  }
})
