import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'

const BORDER_WIDTH = 4

const VALUE_DEFAULT = 1
const SIZE_DEFAULT = 80
const LABEL_DEFAULT = value => `${Math.round(value * 100)}%`

const CircleGraph = ({ value, label, size }) => {
  const length = Math.PI * 2 * (size - BORDER_WIDTH)
  const radius = (size - BORDER_WIDTH) / 2
  return (
    <Spring to={{ progressValue: value }} native>
      {({ progressValue }) => (
        <Main
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <CircleSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <CircleBase cx={size / 2} cy={size / 2} r={radius} />
            <CircleValue
              cx={size / 2}
              cy={size / 2}
              r={radius}
              style={{
                strokeDasharray: length,
                strokeDashoffset: progressValue.interpolate(
                  t => length - (length * t) / 2
                ),
                strokeWidth: BORDER_WIDTH,
              }}
            />
          </CircleSvg>
          <Label>
            {progressValue.interpolate(t => label(Math.min(1, Math.max(0, t))))}
          </Label>
        </Main>
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

const Main = styled.div`
  position: relative;
`

const CircleSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`

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

const Label = styled(animated.div)`
  font-size: 16px;
  font-weight: 400;
  color: #000;
`

export default CircleGraph
