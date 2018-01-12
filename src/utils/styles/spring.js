/* @flow */
type SpringName = 'slow' | 'normal' | 'fast'


const SPRINGS: {
  [SpringName]: {|
    stiffness: number,
    damping: number,
    precision: number,
  |},
} = {
  slow: { stiffness: 150, damping: 18, precision: 0.001 },
  normal: { stiffness: 190, damping: 22, precision: 0.001 },
  fast: { stiffness: 220, damping: 24, precision: 0.001 },
}

export const spring = (name: SpringName) => {
  return SPRINGS[name] || SPRINGS.normal
}