import React from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { useTheme } from '../../theme'

const STROKE_WIDTH = 4
const SIZE_DEFAULT = 80

function labelDefault(value) {
  if (value === 0) {
    return { value: '0', suffix: '%' }
  }
  if (Math.floor(value * 100) < 1) {
    return { prefix: '<', value: '1', suffix: '%' }
  }
  return {
    value: String(Math.round(value * 100)),
    suffix: '%',
  }
}

function CircleGraph({ color, label, secondary, size, strokeWidth, value }) {
  const theme = useTheme()
  const length = Math.PI * 2 * (size - strokeWidth)
  const radius = (size - strokeWidth) / 2

  if (label === true) {
    label = labelDefault
  }

  const nodeLabel = React.isValidElement(label)

  const { prefix, suffix } = label && !nodeLabel ? label(value) : {}

  let colorFn = color || (() => theme.accent)
  if (typeof colorFn !== 'function') {
    colorFn = () => color
  }

  return (
    <Spring to={{ progressValue: value }} native>
      {({ progressValue }) => (
        <div
          css={`
            position: relative;
            display: flex;
            align-items: center;
            justify-content center;
            width: ${size}px;
            height: ${size}px;
          `}
        >
          <svg
            css={`
              position: absolute;
              top: 0;
              left: 0;
            `}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              style={{ strokeWidth }}
              fill="none"
              stroke={theme.border}
            />
            <animated.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={length}
              strokeWidth={strokeWidth}
              style={{
                stroke: progressValue.interpolate(colorFn),
                strokeDashoffset: progressValue.interpolate(
                  t => length - (length * t) / 2
                ),
              }}
              css={`
                transform: rotate(270deg);
                transform-origin: 50% 50%;
              `}
            />
          </svg>
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              line-height: 1.2;
            `}
          >
            {nodeLabel
              ? label
              : label && (
                  <div
                    css={`
                      position: absolute;
                      top: 50%;
                      left: 0;
                      right: 0;
                      transform: translateY(-50%);
                    `}
                  >
                    <div
                      css={`
                        display: flex;
                        align-items: baseline;
                        justify-content: center;
                      `}
                    >
                      {prefix && (
                        <div style={{ fontSize: `${size * 0.2}px` }}>
                          {prefix}
                        </div>
                      )}
                      <animated.div style={{ fontSize: `${size * 0.25}px` }}>
                        {progressValue.interpolate(
                          v => label(Math.min(1, Math.max(0, v))).value
                        )}
                      </animated.div>
                      <div
                        css={`
                          display: flex;
                          color: ${theme.surfaceContentSecondary};
                        `}
                        style={{ fontSize: `${size * 0.13}px` }}
                      >
                        {suffix}
                      </div>
                    </div>
                    <div
                      css={`
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        color: ${theme.surfaceContentSecondary};
                      `}
                      style={{ fontSize: `${size * 0.1}px` }}
                    >
                      {secondary}
                    </div>
                  </div>
                )}
          </div>
        </div>
      )}
    </Spring>
  )
}

CircleGraph.propTypes = {
  color: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.bool, PropTypes.func]),
  secondary: PropTypes.node,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  value: PropTypes.number.isRequired,
}

CircleGraph.defaultProps = {
  label: true,
  size: SIZE_DEFAULT,
  strokeWidth: STROKE_WIDTH,
}

export default CircleGraph
