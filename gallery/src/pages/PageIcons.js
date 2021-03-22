import React, { useState } from 'react'
import styled from 'styled-components'
import * as UI from '@tecommons/ui'

import Page from 'comps/Page/Page'
import readme from 'ui-src/icons/README.md'

const { ButtonBase, Card, GU, RADIUS, useTheme } = UI

const icons = Object.entries(UI)
  .filter(([name]) => name.startsWith('Icon'))
  .reduce((icons, [name, Icon]) => [...icons, [name, Icon]], [])

function PageIcons({ title }) {
  const theme = useTheme()
  const [buttonsView, setButtonsView] = useState(false)
  return (
    <Page title={title} readme={readme}>
      <h2>Icons set</h2>
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(auto-fit, ${24 * GU}px);
          grid-template-rows: repeat(auto-fill, ${18 * GU}px);
          grid-gap: ${2 * GU}px;
          padding: 0 0 ${4 * GU}px;
        `}
      >
        {icons.map(([name, Icon]) => (
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
    </Page>
  )
}

const IconCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
`

const IconWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`

export default PageIcons
