import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import { warn } from '../../utils'

function Distribution({
  colors,
  showLegend,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  items,
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

  const total = items.reduce((total, { percentage }) => total + percentage, 0)
  if (total > 100) {
    warn(
      `Distribution: the total of percentages is greater than 100 (${total}).`
    )
  }

  // Sort by percentage
  items = items.sort((a, b) => b.percentage - a.percentage)

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
        {items.map(({ item, percentage }, index) => (
          <div
            key={index}
            title={itemTitle({ item, percentage, index })}
            style={{
              width: `${percentage}%`,
              background: colors[index % colors.length],
            }}
          />
        ))}
      </div>
      {showLegend && (
        <ul
          css={`
            margin-top: ${3 * GU}px;
          `}
        >
          {items.map(({ item, percentage }, index) => (
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
                    item={item}
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
  heading: PropTypes.node,
  itemTitle: PropTypes.func,
  renderLegendItem: PropTypes.func,
  showLegend: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.any.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

Distribution.defaultProps = {
  heading: null,
  itemTitle: ({ item, percentage, index }) => {
    return `${
      typeof item === 'string' ? item : `Item ${index + 1}`
    }: ${percentage}%`
  },
  renderLegendItem: ({ item, percentage, index }) => {
    return typeof item === 'string' ? item : `Item ${index + 1}`
  },
  showLegend: true,
}

export default Distribution
