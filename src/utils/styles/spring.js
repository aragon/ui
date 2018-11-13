// This module exports a `springs` object and a `spring()` function:
//
//   - `spring()` is deprecated and will be removed in the future (react-motion).
//   - `springs` should be used from now on (react-spring).

export const springs = {
  // Super slow spring, for debugging purposes
  debug: { mass: 1, tension: 10, friction: 40 },

  // Slow spring, can be used to move large things (e.g. a side panel).
  lazy: { mass: 1, tension: 120, friction: 20, precision: 0.001 },

  // Medium speed spring, can be used to move small objects.
  smooth: { mass: 0.7, tension: 300, friction: 25, precision: 0.001 },

  // Fast speed spring, for actions that need to feel almost instant.
  swift: { mass: 0.5, tension: 400, friction: 30, precision: 0.001 },
}

// Deprecated react-motion springs (see above)
const reactMotionSprings = {
  slow: { stiffness: 150, friction: 18 },
  normal: { stiffness: 190, friction: 22 },
  fast: { stiffness: 220, friction: 24 },
}

export const spring = name => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Using spring(name) with react-motion is deprecated. ' +
        'Please use springs[name] with react-spring instead.'
    )
  }
  return reactMotionSprings[name] || reactMotionSprings.normal
}
