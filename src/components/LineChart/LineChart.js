import React from 'react'
import styled, { css } from 'styled-components'
import { Spring } from 'react-spring'
import memoize from 'lodash-es/memoize'
import PropTypes from '../../proptypes'
import { unselectable, springs } from '../../utils/styles'

class LineChart extends React.Component {
  static propTypes = {
    springConfig: PropTypes._spring,
    durationSlices: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    captionsHeight: PropTypes.number,
    dotRadius: PropTypes.number,
    animDelay: PropTypes.number,
    borderColor: PropTypes.string,
    reset: PropTypes.bool,
    settings: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.number,
          values: PropTypes.arrayOf(PropTypes.number).isRequired, // numbers between 0 and 1
          color: PropTypes.string, // overrides the color() prop if set
        }),
        // values can also be passed directly
        PropTypes.arrayOf(PropTypes.number),
      ])
    ),
    label: PropTypes.oneOfType([PropTypes.func, PropTypes._null]),
    color: PropTypes.func,
  }

  static defaultProps = {
    durationSlices: 16,
    springConfig: springs.lazy,
    width: 300,
    height: 200,
    captionsHeight: 20,
    dotRadius: 7 / 2,
    animDelay: 500,
    reset: false,
    borderColor: 'rgba(209, 209, 209, 0.5)',
    settings: [],
    label: index => index + 1,
    color: (index, { settings }) =>
      `hsl(${(index * (360 / settings.length) + 40) % 360}, 60%, 70%)`,
  }

  getX(index) {
    const { width, durationSlices } = this.props

    const slice = width / (durationSlices - 1)
    return slice * index
  }

  getY(percentage, progress) {
    const { dotRadius, height } = this.props

    const padding = dotRadius + 2
    return height - padding - (height - padding * 2) * percentage * progress
  }

  convertSettings = memoize(settings => {
    return settings.map(settingOrValues =>
      Array.isArray(settingOrValues)
        ? { values: settingOrValues }
        : settingOrValues
    )
  })

  render() {
    const {
      width,
      height,
      captionsHeight,
      borderColor,
      durationSlices,
      dotRadius,
      springConfig,
      label,
      reset,
      animDelay,
      color,
    } = this.props

    const settings = this.convertSettings(this.props.settings)

    // All the settings' values should have same length
    const valuesLength = settings.length ? settings[0].values.length : 0
    const labels = label ? [...Array(valuesLength).keys()].map(label) : null

    return (
      <div>
        <SvgWrapper>
          <Spring
            from={{ progress: 0 }}
            to={{ progress: 1 }}
            config={springConfig}
            delay={animDelay}
            reset={reset}
          >
            {({ progress }) => (
              <svg viewBox={`0 0 ${width} ${height + captionsHeight}`}>
                <rect
                  width={width}
                  height={height}
                  rx="3"
                  ry="3"
                  fill="#ffffff"
                  strokeWidth="1"
                  stroke={borderColor}
                />
                <path
                  d={`
                    M 0,${height}
                    ${[...new Array(durationSlices)].reduce(
                      (path = '', _, i) =>
                        `${path} M ${this.getX(i)},${height} l 0,-8`
                    )}
                  `}
                  stroke={borderColor}
                  strokeWidth="1"
                />
                {settings.map(
                  (setting, index) =>
                    valuesLength && (
                      <g key={`line-plot-${setting.id || index}`}>
                        <path
                          d={`
                            M
                            ${this.getX(0)},
                            ${this.getY(setting.values[0], progress)}

                            ${setting.values
                              .slice(1)
                              .map(
                                (val, i) =>
                                  `L
                                   ${this.getX((i + 1) * progress)},
                                   ${this.getY(val, progress)}
                                  `
                              )
                              .join('')}
                          `}
                          fill="transparent"
                          stroke={setting.color || color(index, { settings })}
                          strokeWidth="2"
                        />
                        {setting.values.slice(1, -1).map((val, i) => (
                          <circle
                            key={i}
                            cx={this.getX(i + 1) * progress}
                            cy={this.getY(val, progress)}
                            r={dotRadius}
                            fill="white"
                            stroke={setting.color || color(index, { settings })}
                            strokeWidth="1"
                          />
                        ))}
                      </g>
                    )
                )}
                <line
                  x1={this.getX(valuesLength - 1) * progress}
                  y1="0"
                  x2={this.getX(valuesLength - 1) * progress}
                  y2={height}
                  stroke="#DAEAEF"
                  strokeWidth="3"
                />
                {labels && (
                  <g transform={`translate(0,${height + 20})`}>
                    {[...new Array(durationSlices - 1)].map((_, i) => (
                      <LabelText
                        key={i}
                        x={this.getX(i) + (i === 0 ? 2 : 0)}
                        textAnchor="middle"
                      >
                        {labels[i]}
                      </LabelText>
                    ))}
                  </g>
                )}
              </svg>
            )}
          </Spring>
        </SvgWrapper>
      </div>
    )
  }
}

const SvgWrapper = styled.div`
  svg {
    display: block;
  }
`

const LabelText = styled.text`
  font-size: 12px;
  font-weight: 300;
  fill: #6d777b;
  ${unselectable};
`

export default LineChart
