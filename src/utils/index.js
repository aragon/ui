/* eslint-disable prettier/prettier */
export * from './date'
export * from './format'
export * from './styles'
export * from './web3'
export * from './components'

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
