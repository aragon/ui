import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'

const BORDER_WIDTH = 4

const VALUE_DEFAULT = 1
const SIZE_DEFAULT = 80
const LABEL_DEFAULT = value => `${Math.round(value * 100)}`
const COLOR_DEFAULT = '#21c1e7'

const CircleGraph = ({ value, label, size, color, width }) => {
  const length = Math.PI * 2 * (size - width)
  const radius = (size - width) / 2
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
            <CircleBase
              cx={size / 2}
              cy={size / 2}
              r={radius}
              color={color}
              style={{
                strokeWidth: width,
              }}
            />
            <CircleValue
              cx={size / 2}
              cy={size / 2}
              r={radius}
              color={color}
              style={{
                strokeDasharray: length,
                strokeDashoffset: progressValue.interpolate(
                  t => length - (length * t) / 2
                ),
                strokeWidth: width,
              }}
            />
          </CircleSvg>
          <Label size={size / 3}>
            {progressValue.interpolate(t => label(Math.min(1, Math.max(0, t))))}
          </Label>
          <Label
            size={size / 6}
            css={`
              margin-top: ${size / 8}px;
            `}
          >
            %
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
  color: PropTypes.string,
  width: PropTypes.number,
}

CircleGraph.defaultProps = {
  value: VALUE_DEFAULT,
  size: SIZE_DEFAULT,
  label: LABEL_DEFAULT,
  color: COLOR_DEFAULT,
  width: BORDER_WIDTH,
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
  stroke: #ecedf1;
`

const CircleValue = styled(animated.circle)`
  fill: none;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  stroke: ${({ color }) => color};
`

const Label = styled(animated.div)`
  font-size: ${({ size }) => size}px;
  font-weight: 400;
  color: #25314d;
`

export default CircleGraph
