import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import { warn } from '../../utils'

function Distribution({
  colors,
  display,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  values,
}) {
  const theme = useTheme()

  if (!colors) {
    colors = [
      theme.blue,
      theme.red,
      theme.brown,
      theme.yellow,
      theme.purple,
      theme.green,
    ]
  }

  const total = values.reduce((total, { percentage }) => total + percentage, 0)

  if (total !== 100) {
    warn(
      `Distribution: the total of percentages is ${
        total > 100 ? 'greater' : 'less'
      } than 100 (${total}).`
    )
  }

  // Sort by percentage
  values = values.sort((a, b) => b.percentage - a.percentage)

  return (
    <section>
      {heading && (
        <div
          css={`
            margin-bottom: ${1 * GU}px;
          `}
        >
          {typeof heading === 'string' ? (
            <h1 css={textStyle('body2')}>{heading}</h1>
          ) : (
            heading
          )}
        </div>
      )}
      <div
        css={`
          display: flex;
          width: 100%;
          overflow: hidden;
          margin: 0 0 ${1 * GU}px;
          border-radius: 3px;
          div {
            height: 6px;
          }
        `}
      >
        {values.map(({ value, percentage }, index) => (
          <div
            key={index}
            title={itemTitle({ value, percentage, index })}
            style={{
              width: `${percentage}%`,
              background: colors[index % colors.length],
            }}
          />
        ))}
      </div>
      {display === 'all' && (
        <ul
          css={`
            margin-top: ${3 * GU}px;
          `}
        >
          {values.map(({ value, percentage }, index) => (
            <li
              key={index}
              css={`
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 10px;
                list-style: none;
              `}
            >
              <div
                css={`
                  display: flex;
                  align-items: center;
                  max-width: 80%;
                  flex-shrink: 1;
                `}
              >
                <div
                  css={`
                    width: ${1 * GU}px;
                    height: ${1 * GU}px;
                    margin-right: ${1 * GU}px;
                    border-radius: 50%;
                    flex-shrink: 0;
                  `}
                  style={{ background: colors[index % colors.length] }}
                />
                <div
                  css={`
                    flex-shrink: 1;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  `}
                >
                  <LegendItem
                    value={value}
                    percentage={percentage}
                    index={index}
                  />
                </div>
              </div>
              <div css="flex-shrink: 0">
                <strong>{percentage}%</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

Distribution.propTypes = {
  colors: PropTypes.array,
  display: PropTypes.oneOf(['all', 'bar']),
  heading: PropTypes.node,
  itemTitle: PropTypes.func,
  renderLegendItem: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      percentage: PropTypes.number,
    })
  ).isRequired,
}

Distribution.defaultProps = {
  display: 'all',
  heading: null,
  itemTitle: ({ value, percentage, index }) => {
    return `${
      typeof value === 'string' ? value : `Item ${index + 1}`
    }: ${percentage}%`
  },
  renderLegendItem: ({ value, percentage, index }) => {
    return typeof value === 'string' ? value : `Item ${index + 1}`
  },
}

export default Distribution
