import React from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'
import PropTypes from '../../proptypes'
import { unselectable, springs } from '../../utils/styles'

const LABELS_HEIGHT = 30

class LineChart extends React.Component {
  static propTypes = {
    springConfig: PropTypes._spring,
    total: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dotRadius: PropTypes.number,
    animDelay: PropTypes.number,
    borderColor: PropTypes.string,
    labelColor: PropTypes.string,
    reset: PropTypes.bool,
    lines: PropTypes.arrayOf(
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
    springConfig: springs.lazy,
    total: -1,
    width: 300,
    height: 200,
    dotRadius: 7 / 2,
    animDelay: 500,
    reset: false,
    borderColor: 'rgba(209, 209, 209, 0.5)',
    labelColor: '#6d777b',
    lines: [],
    label: index => index + 1,
    color: (index, { lines }) =>
      `hsl(${(index * (360 / lines.length) + 40) % 360}, 60%, 70%)`,
  }

  getX(index) {
    const { width } = this.props
    const slice = width / Math.max(1, this.getTotalCount() - 1)
    return slice * index
  }

  getY(percentage, progress, height) {
    const { dotRadius } = this.props

    const padding = dotRadius + 2
    return height - padding - (height - padding * 2) * percentage * progress
  }

  getLines() {
    const { lines } = this.props
    return lines.map(lineOrValues =>
      Array.isArray(lineOrValues) ? { values: lineOrValues } : lineOrValues
    )
  }

  getValuesCount() {
    const lines = this.getLines()
    // All the values have the same length, so we can use the first one.
    return lines[0] ? lines[0].values.length : 0
  }

  getTotalCount() {
    const { total } = this.props
    const valuesCount = this.getValuesCount()
    // If no total is provided, the total is the number of provided values.
    return total > 0 && total > valuesCount ? total : valuesCount
  }

  getLabelPosition(index, length) {
    if (index === 0) return 'start'
    if (index === length - 1) return 'end'
    return 'middle'
  }

  render() {
    const {
      width,
      height,
      borderColor,
      dotRadius,
      springConfig,
      label,
      reset,
      animDelay,
      color,
      labelColor,
    } = this.props

    const lines = this.getLines()

    // the provided values, up to this point
    const valuesCount = this.getValuesCount()

    // the total amount of values
    const totalCount = this.getTotalCount()

    const labels =
      label && totalCount > 0 ? [...Array(totalCount).keys()].map(label) : null

    const chartHeight = height - (labels ? LABELS_HEIGHT : 0)

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
              <svg viewBox={`0 0 ${width} ${height}`}>
                <rect
                  width={width}
                  height={chartHeight}
                  rx="3"
                  ry="3"
                  fill="#ffffff"
                  strokeWidth="1"
                  stroke={borderColor}
                />
                {totalCount > 0 && (
                  <path
                    d={`
                    ${[...new Array(totalCount - 1)].reduce(
                      (path, _, index) =>
                        `${path} M ${this.getX(index)},${chartHeight} l 0,-8`,
                      ''
                    )}
                  `}
                    stroke={borderColor}
                    strokeWidth="1"
                  />
                )}
                {lines.map((line, lineIndex) => (
                  <g key={`line-plot-${line.id || lineIndex}`}>
                    <path
                      d={`
                            M
                            ${this.getX(0)},
                            ${this.getY(line.values[0], progress, chartHeight)}

                            ${line.values
                              .slice(1)
                              .map(
                                (val, index) =>
                                  `L
                                   ${this.getX((index + 1) * progress)},
                                   ${this.getY(val, progress, chartHeight)}
                                  `
                              )
                              .join('')}
                          `}
                      fill="transparent"
                      stroke={line.color || color(lineIndex, { lines })}
                      strokeWidth="2"
                    />
                    {line.values.slice(1, -1).map((val, index) => (
                      <circle
                        key={index}
                        cx={this.getX(index + 1) * progress}
                        cy={this.getY(val, progress, chartHeight)}
                        r={dotRadius}
                        fill="white"
                        stroke={line.color || color(lineIndex, { lines })}
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                ))}
                <line
                  x1={this.getX(valuesCount - 1) * progress}
                  y1="0"
                  x2={this.getX(valuesCount - 1) * progress}
                  y2={chartHeight}
                  stroke="#DAEAEF"
                  strokeWidth="3"
                />
                {labels && (
                  <g transform={`translate(0,${chartHeight})`}>
                    {labels.map((label, index) => (
                      <LabelText
                        key={index}
                        x={this.getX(index)}
                        y={LABELS_HEIGHT / 2}
                        textAnchor={this.getLabelPosition(index, labels.length)}
                        fill={labelColor}
                      >
                        {label}
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
  alignment-baseline: middle;
  font-size: 12px;
  font-weight: 300;
  ${unselectable};
`

export default LineChart
