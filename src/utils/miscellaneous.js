export function noop() {}

export function identity(x) {
  return x
}

export function pick(obj, keys) {
  return keys.reduce((filtered, key) => {
    if (obj[key] !== undefined) {
      filtered[key] = obj[key]
    }
    return filtered
  }, {})
}
