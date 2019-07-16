import React from 'react'
import { useTheme, useLayout, GU } from '@aragon/ui'
import themeDark from '../../src/theme/theme-dark'
import themeLight from '../../src/theme/theme-light'
import colors from '../../src/theme/aragon-colors'

const colorsByValue = Object.entries(colors).reduce(
  (colorsByValue, [key, value]) => ({
    ...colorsByValue,
    [value]: key,
  }),
  {}
)

const groups = [
  ['Base', 'background'],
  ['Surface', 'surface'],
  ['Feedback', 'feedbackSurface'],
  ['Warning', 'warning'],
  ['Info', 'info'],
  ['Help', 'help'],
  ['Tones', 'negative'],
  ['Tag', 'tag'],
  ['Badge', 'badge'],
  ['Special', 'link'],
  ['Colors', 'green'],
]

function ThemeList({ theme, ...props }) {
  const _theme = useTheme()
  const { name } = useLayout()
  return (
    <div
      css={`
        width: ${name === 'small' ? '100%' : '50%'};
        padding-top: ${3 * GU}px;
      `}
      {...props}
    >
      <h1
        css={`
          font-size: 40px;
          margin-bottom: ${2 * GU}px;
        `}
      >
        Theme: {theme._name}
      </h1>
      {Object.entries(theme)
        .filter(([key]) => key !== '_name')
        .map(([key, value]) => {
          const group = groups.find(g => g[1] === key)
          return (
            <div>
              {group && (
                <h2
                  css={`
                    line-height: 40px;
                  `}
                >
                  {group[0]}
                </h2>
              )}
              <div
                key={key}
                css={`
                  display: flex;
                  align-items: center;
                  height: ${6 * GU}px;
                  border: 1px solid ${_theme.border};
                  border-radius: 4px;
                  margin-bottom: ${3 * GU}px;
                  overflow: hidden;
                  background: ${_theme.surface};
                `}
              >
                <div
                  css={`
                    height: 100%;
                    width: ${6 * GU}px;
                    background: ${value};
                    border-right: 1px solid ${_theme.border};
                    margin-right: ${2 * GU}px;
                  `}
                />
                <div
                  css={`
                    flex-grow: 1;
                    display: flex;
                    justify-content: space-between;
                  `}
                >
                  <div>{key}</div>
                  <div
                    css={`
                      color: ${_theme.surfaceContentSecondary};
                      margin-right: ${3 * GU}px;
                    `}
                  >
                    {colorsByValue[value] ? colorsByValue[value] : '−'}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default function() {
  const { name } = useLayout()
  return (
    <div
      css={`
        display: ${name === 'small' ? 'block' : 'flex'};
        justify-content: space-between;
      `}
    >
      <ThemeList
        theme={themeLight}
        css={`
          margin-right: ${3 * GU}px;
        `}
      />
      <ThemeList theme={themeDark} />
    </div>
  )
}
