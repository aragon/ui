import React from 'react'
import { AppView, GU, RADIUS, useTheme, useLayout } from '@aragon/ui'
import * as icons from '../all-icons'
import ToggleTheme from '../components/ToggleTheme'

function useCols() {
  const { name } = useLayout()
  if (name === 'large') return 5
  if (name === 'medium') return 4
  return 2
}

function Icons() {
  const theme = useTheme()
  const cols = useCols()
  return (
    <ToggleTheme>
      <div
        css={`
          font-size: 26px;
          color: ${theme.content};
          text-align: center;
          padding: ${4 * GU}px 0;
        `}
      >
        aragonUI icons
      </div>

      <div
        css={`
          display: grid;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={`
            display: grid;
            grid-template-columns: repeat(${cols}, ${18 * GU}px);
            grid-template-rows: repeat(auto-fill, ${12 * GU}px);
            grid-gap: ${2 * GU}px;
            padding: 0 0 ${4 * GU}px;
          `}
        >
          {Object.entries(icons).map(([name, Icon]) => (
            <div
              key={name}
              css={`
                display: flex;
                flex-direction: column;
                padding: ${2 * GU}px 0;
                color: ${theme.surfaceContent};
                background: ${theme.surface};
                border: 1px solid ${theme.border};
                border-radius: ${RADIUS}px;
                height: ${12 * GU}px;
              `}
            >
              <div
                css={`
                  display: grid;
                  grid-template-columns: repeat(3, auto);
                  grid-gap: ${1 * GU}px;
                  width: 100%;
                  justify-content: center;
                  align-items: center;
                  flex-grow: 1;
                `}
              >
                <Icon size="tiny" />
                <Icon size="small" />
                <Icon size="medium" />
              </div>
              <div
                css={`
                  display: flex;
                  width: 100%;
                  justify-content: center;
                  flex-shrink: 1;
                  font-size: 14px;
                `}
              >
                <span css="opacity: 0.3">Icon</span>
                {name.replace(/^Icon/, '')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToggleTheme>
  )
}

export default Icons
