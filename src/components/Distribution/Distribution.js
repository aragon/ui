import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'

function Distribution({
  colors,
  showLegend,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  renderFullLegendItem: FullLegendItem,
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
              width: `${(percentage / total) * 100}%`,
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
          {items.map(({ item, percentage }, index) => {
            const color = colors[index % colors.length]
            return (
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
                {FullLegendItem ? (
                  <FullLegendItem
                    bullet={<Bullet color={color} />}
                    color={color}
                    index={index}
                    item={item}
                    percentage={percentage}
                  />
                ) : (
                  <React.Fragment>
                    <div
                      css={`
                        display: flex;
                        align-items: center;
                        flex-shrink: 1;
                        flex-grow: 1;
                      `}
                    >
                      <Bullet color={color} />
                      <div
                        css={`
                          width: 0;
                          flex-shrink: 1;
                          flex-grow: 1;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
                        `}
                      >
                        <LegendItem
                          color={color}
                          index={index}
                          item={item}
                          percentage={percentage}
                        />
                      </div>
                    </div>
                    <div
                      css={`
                        padding-left: ${1 * GU}px;
                        flex-shrink: 0;
                      `}
                    >
                      <strong>{percentage}%</strong>
                    </div>
                  </React.Fragment>
                )}
              </li>
            )
          })}
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
  renderFullLegendItem: PropTypes.func,
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

/* eslint-disable react/prop-types */
function Bullet({ color }) {
  return (
    <div
      css={`
        width: ${1 * GU}px;
        height: ${1 * GU}px;
        margin-right: ${1 * GU}px;
        border-radius: 50%;
        flex-shrink: 0;
      `}
      style={{ background: color }}
    />
  )
}
/* eslint-enable react/prop-types */

export default Distribution
