import React, { useState } from 'react'
import {
  GU,
  RADIUS,
  Button,
  ButtonBase,
  useTheme,
  useLayout,
} from '@tecommons/ui'
import * as icons from '../all-icons'
import { ToggleThemeButton } from '../components/current-theme'

function useCols() {
  const { layoutName } = useLayout()
  if (layoutName === 'large') return 4
  if (layoutName === 'medium') return 3
  return 1
}

function IconsView() {
  const theme = useTheme()
  const cols = useCols()
  return (
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
          grid-template-columns: repeat(${cols}, ${24 * GU}px);
          grid-template-rows: repeat(auto-fill, ${18 * GU}px);
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
              height: ${18 * GU}px;
            `}
          >
            <div
              css={`
                display: grid;
                grid-template-columns: repeat(4, auto);
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
              <Icon size="large" />
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
              <span
                css={`
                  color: ${theme.surfaceContentSecondary.alpha(0.5)};
                `}
              >
                Icon
              </span>
              {name.replace(/^Icon/, '')}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ButtonsView() {
  const theme = useTheme()
  const cols = useCols()
  return (
    <div
      css={`
        display: grid;
        justify-content: center;
        align-items: center;
      `}
    >
      {['medium', 'small', 'mini'].map(size => (
        <div key={size}>
          <h2
            css={`
              font-size: 20px;
              color: ${theme.content};
              text-align: center;
              padding: ${4 * GU}px 0;
            `}
          >
            Size: {size}
          </h2>
          <div
            css={`
              display: grid;
              grid-template-columns: repeat(${cols}, ${24 * GU}px);
              grid-gap: ${2 * GU}px;
              padding: 0 0 ${4 * GU}px;
            `}
          >
            {Object.entries(icons).map(([name, Icon]) => (
              <div key={name}>
                <div
                  css={`
                    display: grid;
                    grid-template-columns: repeat(4, auto);
                    grid-gap: ${1 * GU}px;
                    width: 100%;
                    justify-items: start;
                    align-items: center;
                    flex-grow: 1;
                  `}
                >
                  <div>
                    <Button
                      size={size}
                      icon={<Icon />}
                      label={name.replace(/^Icon/, '')}
                      css={`
                        min-width: 0;
                      `}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Icons() {
  const theme = useTheme()
  const [buttonsView, setButtonsView] = useState(false)
  return (
    <>
      <ToggleThemeButton />
      <ButtonBase
        onClick={() => setButtonsView(v => !v)}
        css={`
          position: fixed;
          left: ${5 * GU}px;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${5 * GU}px;
          height: ${5 * GU}px;
        `}
      >
        {buttonsView ? '🥦' : '🥟'}
      </ButtonBase>
      <h1
        css={`
          font-size: 26px;
          color: ${theme.content};
          text-align: center;
          padding: ${4 * GU}px 0;
        `}
      >
        aragonUI icons
      </h1>
      {buttonsView ? <ButtonsView /> : <IconsView />}
    </>
  )
}

export default Icons
