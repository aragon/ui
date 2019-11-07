import React, { useEffect, useState } from 'react'
import { createBrowserHistory } from 'history'
import styled from 'styled-components'
import { Link, Main, textStyle, useTheme, GU } from '@aragon/ui'
import GlobalStyles from './global-styles'
import { PAGE_GROUPS, PAGES } from './routes'
import Sidebar from './components/Sidebar/Sidebar'
import env from './environment'

const history = createBrowserHistory()

function App() {
  const theme = useTheme()
  const [activePage, setActivePage] = useState(null)
  const Page = activePage && activePage.comp

  useEffect(() => {
    const updateLocation = location => {
      const page = PAGES.find(page => page.path === location.pathname)
      setActivePage(page || null)
    }
    const stop = history.listen(updateLocation)
    updateLocation(history.location)
    return () => stop()
  }, [])

  return (
    <Main assetsUrl={env().aragonUiPath} legacyFonts layout={false}>
      <div css="display: flex">
        <Sidebar
          title={PAGES[0].name}
          root={PAGES[0].path}
          groups={PAGE_GROUPS}
          activePage={activePage}
          onOpen={page => history.push(page, {})}
        />
        <div
          css={`
            width: 100%;
          `}
        >
          {Page ? (
            <Page title={activePage.name} />
          ) : (
            <div
              css={`
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              `}
            >
              <h1
                css={`
                  margin-bottom: ${2 * GU}px;
                  ${textStyle('title2')};
                `}
              >
                Page not found
              </h1>
              <p
                css={`
                  ${textStyle('body1')};
                `}
              >
                You might want to check the{' '}
                <Link href="/intro" external={false}>
                  intro to aragonUI
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
      <GlobalStyles theme={theme} />
    </Main>
  )
}

export default App
