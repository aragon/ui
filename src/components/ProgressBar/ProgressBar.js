import React from 'react'
import PropTypes from '../../proptypes'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { springs } from '../../utils/styles'
import { pause } from '../../utils/miscellaneous'
import { warn } from '../../utils/environment'
import { theme } from '../../theme'

const BAR_HEIGHT = 6
const RADIUS = 2

const transformCss = (scale, translate) =>
  `scale3d(${scale}, 1, 1) translate3d(${translate}%, 0, 0)`

const springNormal = value => ({
  config: { ...springs.smooth, precision: 0.001 },
  from: { transform: transformCss(0, 0) },
  to: { transform: transformCss(value, 0) },
  reset: false,
})

const springIndeterminate = () => ({
  config: {
    ...springs.sluggish,
    precision: 0.01,
    clamp: true,
  },
  from: { transform: transformCss(0.5, -100) },
  to: async next => {
    while (true) {
      await next({ transform: transformCss(0.5, 200) })
      await pause(800)
    }
  },
  reset: true,
})

function ProgressBar({ color, progress, value }) {
  // Support `progress` for a while
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

  const transition = useSpring(
    indeterminate ? springIndeterminate() : springNormal(value)
  )

  return (
    <div
      css={`
        width: 100%;
        align-items: center;
      `}
    >
      <div
        css={`
          width: 100%;
          height: ${BAR_HEIGHT}px;
          background: ${theme.secondaryBackground};
          border-radius: ${RADIUS}px;
          overflow: hidden;
        `}
      >
        <Bar color={color} style={transition} />
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  value: -1,
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  progress: PropTypes._0to1,
  value: PropTypes.oneOfType([PropTypes._0to1, PropTypes.oneOf([-1])]),
}

const Bar = styled(animated.div)`
  height: ${BAR_HEIGHT}px;
  background: ${({ color }) => color || theme.accent};
  transform-origin: 0 0;
`

export default ProgressBar
