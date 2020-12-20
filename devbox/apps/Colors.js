import React from 'react'
import { useTheme, useLayout, GU } from '@tecommons/ui'
import themeDark from '../../src/theme/theme-dark'
import themeLight from '../../src/theme/theme-light'

const groups = [
  ['Base', 'background'],
  ['Surface', 'surface'],
  ['Feedback', 'feedbackSurface'],
  ['Warning', 'warning'],
  ['Info', 'info'],
  ['Help', 'help'],
  ['Tones', 'negative'],
  ['Tag', 'tagIdentifier'],
  ['Special', 'link'],
  ['Controls', 'control'],
  ['Accent', 'accent'],
  ['Colors', 'green'],
  ['Deprecated', 'error'],
]

function ThemeList({ name, theme, ...props }) {
  const _theme = useTheme()
  const { layoutName } = useLayout()
  return (
    <div
      css={`
        width: ${layoutName === 'small' ? '100%' : '50%'};
        padding: ${8 * GU}px 0;
      `}
      {...props}
    >
      <h1
        css={`
          font-size: 40px;
          margin-bottom: ${4 * GU}px;
        `}
      >
        {name}
      </h1>
      {Object.entries(theme)
        .filter(([key]) => key !== '_name' && key !== '_appearance')
        .map(([key, value]) => {
          const group = groups.find(g => g[1] === key)
          return (
            <div key={key}>
              {group && (
                <h2
                  css={`
                    margin-top: ${6 * GU}px;
                    line-height: ${6 * GU}px;
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
                    flex-shrink: 0;
                    width: ${6 * GU}px;
                    height: 100%;
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
                    {value.toUpperCase()}
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
  const { layoutName } = useLayout()
  return (
    <>
      <div
        css={`
          display: ${layoutName === 'small' ? 'block' : 'flex'};
          justify-content: space-between;
        `}
      >
        <ThemeList
          name="Light theme"
          theme={themeLight}
          css={`
            margin-right: ${3 * GU}px;
          `}
        />
        <ThemeList name="Dark theme" theme={themeDark} />
      </div>
    </>
  )
}
