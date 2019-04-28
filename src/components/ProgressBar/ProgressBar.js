import React from 'react'
import PropTypes from '../../proptypes'
import { useSpring, animated, interpolate } from 'react-spring'
import { springs } from '../../utils/styles'
import { pause } from '../../utils/miscellaneous'
import { warn } from '../../utils/environment'
import { theme } from '../../theme'

const RADIUS = 2
const BAR_HEIGHT = 6

const INDETERMINATE_BAR_WIDTH = 1 / 4
const INDETERMINATE_ANIM_DURATION = [1200, 400]

const springNormal = (value, restart, animate) => ({
  config: { ...springs.smooth, precision: 0.001 },
  from: { scale: 0, x: 0 },
  to: { scale: restart ? 0 : value, x: 0 },
  reset: restart,
  immediate: restart || !animate,
})

const springIndeterminate = (restart, animate) => ({
  config: { duration: INDETERMINATE_ANIM_DURATION[0] },
  from: { scale: INDETERMINATE_BAR_WIDTH, x: -INDETERMINATE_BAR_WIDTH },
  to: async next => {
    const scale = INDETERMINATE_BAR_WIDTH

    // Center the bar when not animated.
    if (!animate) {
      await next({ scale, x: 0.5 - scale / 2 })
      return
    }

    // Indeterminate animation.
    while (true) {
      await next({ scale, x: 1 })
      await pause(INDETERMINATE_ANIM_DURATION[1])
    }
  },
  reset: animate,
  immediate: restart || !animate,
})

const ProgressBar = React.memo(({ animate, color, progress, value }) => {
  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress
    if (!ProgressBar._warned) {
      warn(
        'The `progress` prop of ProgressBar is deprecated: please use `value` instead.'
      )
      ProgressBar._warned = true
    }
  }

  // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).
  const indeterminate = value === -1

  // `isSwitching` is set to `true` to reset the transition between the normal
  // and indeterminate state, then set to `false` immediatly after.
  const [isSwitching, setIsSwitching] = React.useState(false)
  React.useEffect(() => setIsSwitching(!isSwitching), [indeterminate])
  React.useEffect(() => setIsSwitching(false), [isSwitching])

  const transition = useSpring(
    indeterminate
      ? springIndeterminate(isSwitching, animate)
      : springNormal(value, isSwitching, animate)
  )

  return (
    <div
      css={`
        width: 100%;
        height: ${BAR_HEIGHT}px;
        background: ${theme.secondaryBackground};
        border-radius: ${RADIUS}px;
        overflow: hidden;
      `}
    >
      <animated.div
        style={{
          width: '100%',
          height: `${BAR_HEIGHT}px`,
          background: color,
          borderRadius: `${indeterminate ? RADIUS : 0}px`,
          transformOrigin: '0 0',
          transform: interpolate(
            [transition.x, transition.scale],
            (x, s) => `translate3d(${x * 100}%, 0, 0) scale3d(${s}, 1, 1)`
          ),
        }}
      />
    </div>
  )
})

ProgressBar.defaultProps = {
  animate: true,
  color: theme.accent,
  value: -1,
}

ProgressBar.propTypes = {
  animate: PropTypes.bool,
  color: PropTypes.string,
  progress: PropTypes._0to1,
  value: PropTypes.oneOfType([PropTypes._0to1, PropTypes.oneOf([-1])]),
}

export default ProgressBar
