import React from 'react'
import PropTypes from '../../proptypes'
import styled, { keyframes } from 'styled-components'
import { useSpring, animated, interpolate } from 'react-spring/hooks'
import { springs } from '../../utils/styles'
import { pause } from '../../utils/miscellaneous'
import { warn } from '../../utils/environment'
import { theme } from '../../theme'

const RADIUS = 2
const BAR_HEIGHT = 6

const INDETERMINATE_WIDTH = 1 / 4
const INDETERMINATE_DURATION = 1600

const indeterminateAnim = keyframes`
  // x positions use -1px to anticipate any rounding issues
  0% {
    transform: translate3d(calc(-100% - 1px), 0, 0);
  }
  70%, 100% {
    transform: translate3d(calc(${100 / INDETERMINATE_WIDTH}% + 1px), 0, 0);
  }
`

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

  const transition = useSpring({
    config: { ...springs.smooth, precision: 0.001 },
    from: { scale: 0, x: 0 },
    to: { scale: value, x: 0 },
    immediate: !animate,
  })

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
      <Bar
        style={{
          width: `${(indeterminate ? INDETERMINATE_WIDTH : 1) * 100}%`,
          background: color,
          borderRadius: `${indeterminate ? RADIUS : 0}px`,
          animationName: `${indeterminate ? indeterminateAnim.name : 'none'}`,
          transform: interpolate(
            [transition.x, transition.scale],
            (x, s) => `translate3d(${x * 100}%, 0, 0) scale3d(${s}, 1, 1)`
          ),
        }}
      />
    </div>
  )
})

const Bar = styled(animated.div)`
  width: 100%;
  height: ${BAR_HEIGHT}px;
  transform-origin: 0 0;

  // this need to be defined here rather than as a style property, so that
  // styled can inject the @keyframes (on demand since styled@v4).
  animation: ${indeterminateAnim} ${INDETERMINATE_DURATION}ms ease-in-out
    infinite;
  animation-name: none;
`

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
