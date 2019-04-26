export function noop() {}

export function pause(duration = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
