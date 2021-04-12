export const NO_BREAK_SPACE = '\u00a0'
export const capitalize = (s = '') => {
  if (!s) return ''
  return s[0].toUpperCase() + s.slice(1)
}
