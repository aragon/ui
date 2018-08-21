import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { springs } from '../../utils/styles'

const BORDER_WIDTH = 4

const VALUE_DEFAULT = 1
const SIZE_DEFAULT = 80
const LABEL_DEFAULT = value => `${Math.round(value * 100)}%`

const CircleGraph = ({ value, label, size }) => {
  const length = Math.PI * 2 * (size - BORDER_WIDTH)
  const radius = (size - BORDER_WIDTH) / 2
  return (
    <Spring
      config={springs.lazy}
      to={{
        progressValue: value,
      }}
      native
    >
      {({ progressValue }) => (
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <CircleBase cx={size / 2} cy={size / 2} r={radius} />
          <CircleValue
            cx={size / 2}
            cy={size / 2}
            r={radius}
            style={{
              strokeDasharray: length,
              strokeDashoffset: progressValue.interpolate(t => length - length * t / 2),
              strokeWidth: BORDER_WIDTH,
            }}
          />
          <Label x="50%" y="50%">
            {label(Math.min(value, Math.max(0, value)))}
          </Label>
        </svg>
      )}
    </Spring>
  )
}

CircleGraph.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
  label: PropTypes.func,
}

CircleGraph.defaultProps = {
  value: VALUE_DEFAULT,
  size: SIZE_DEFAULT,
  label: LABEL_DEFAULT,
}

const CircleBase = styled.circle`
  fill: none;
  stroke: #6d777b;
  opacity: 0.3;
`

const CircleValue = styled(animated.circle)`
  fill: none;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  stroke: #21c1e7;
`

const Label = styled.text`
  fill: #000;
  font-size: 16px;
  font-weight: 600;
  dominant-baseline: middle;
  alignment-baseline: middle;
  text-anchor: middle;
`

export default CircleGraph
