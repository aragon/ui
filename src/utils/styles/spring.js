const SPRINGS = {
  slow: { stiffness: 150, damping: 18, precision: 0.001 },
  normal: { stiffness: 190, damping: 22, precision: 0.001 },
  fast: { stiffness: 220, damping: 24, precision: 0.001 },
}

export const spring = name => {
  return SPRINGS[name] || SPRINGS.normal
}
