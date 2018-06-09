// This module exports a `springs` object and a `spring()` function:
//
//   - `spring()` is deprecated and will be removed in the future.
//   - `springs` should be used from now on.

export const springs = {
  // Super slow spring, for debugging purposes
  debug: { tension: 10, friction: 40 },

  // Slow spring, can be used to move large things (e.g. a side panel).
  lazy: { tension: 50, friction: 10 },

  // These springs (slow, normal, fast) were originally created for
  // react-motion. While they can be used with react-spring, their use is not
  // recommended. New springs will be added later as we move everything to
  // use react-spring.
  slow: { tension: 150, friction: 18 },
  normal: { tension: 190, friction: 22 },
  fast: { tension: 220, friction: 24 },
}

// Deprecated, see above
export const spring = name => {
  return springs[name] || springs.normal
}

const reactMotionSprings = Object.entries(springs).reduce(
  // react-motion aliases:
  //  stiffness => tension
  //  damping => friction
  (springs, [name, spring]) => ({
    ...springs,
    [name]: {
      ...spring,
      stiffness: spring.tension,
      damping: spring.friction,
      precision: 0.001,
    },
  }),
  {}
)
