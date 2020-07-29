// Springs to be used with react-spring
var springs = {
  // Super slow spring, for debugging purposes
  debug: {
    mass: 1,
    tension: 10,
    friction: 40
  },
  // Slow spring, can be used to move large things (e.g. a side panel).
  lazy: {
    mass: 1,
    tension: 120,
    friction: 20
  },
  // Medium speed spring, can be used to move small objects.
  smooth: {
    mass: 0.8,
    tension: 300,
    friction: 28
  },
  // Fast speed spring, for interactions that feel “almost instant”.
  swift: {
    mass: 0.5,
    tension: 800,
    friction: 30
  },
  // Super fast speed spring, for interactions
  // that feel instant (e.g. a checkbox tick).
  instant: {
    mass: 0.3,
    tension: 1000,
    friction: 30
  }
};

export { springs };
//# sourceMappingURL=springs.js.map
