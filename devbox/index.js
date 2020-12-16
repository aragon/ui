import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Main, useContainsAppView } from '@tecommons/ui'
import { CurrentTheme, useCurrentTheme } from './components/current-theme'

import * as APPS from './apps'

if (process.env.A11Y_CHECK === 'on') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

function appNameFromHash() {
  return window.location.hash.replace(/^#/, '')
}

function Devbox() {
  const { theme } = useCurrentTheme()
  const [appName, setAppName] = useState(appNameFromHash())

  useEffect(() => {
    const updateAppName = () => {
      setAppName(appNameFromHash())
    }
    updateAppName()
    window.addEventListener('hashchange', updateAppName)
    return () => {
      window.removeEventListener('hashchange', updateAppName)
    }
  }, [])

  const CurrentApp = APPS[appName]

  // Selected app
  if (CurrentApp) {
    return CurrentApp._bare ? (
      <CurrentApp />
    ) : (
      <Main layout={false} theme={theme}>
        <AppWrapper>
          <CurrentApp />
        </AppWrapper>
      </Main>
    )
  }

  // Apps index
  return (
    <React.Fragment>
      <style>{STYLES}</style>
      <main>
        <h1>Devbox</h1>
        <ul>
          {Object.keys(APPS)
            .sort((a, b) => {
              if (a === 'Everything') return 1
              if (b === 'Everything') return -1
              return a.localeCompare(b)
            })
            .map(appName => (
              <li key={appName}>
                <a href={`#${appName}`}>{appName}</a>
              </li>
            ))}
        </ul>
      </main>
    </React.Fragment>
  )
}

function AppWrapper({ children }) {
  const containsAppView = useContainsAppView()
  return containsAppView ? (
    children
  ) : (
    <Layout paddingBottom={0}>{children}</Layout>
  )
}

const STYLES = `
*, *:before, *:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  --background: hsl(48, 92%, 93%);
  --text-color: #111;
  --button: hsl(48, 92%, 96%);
  --button-text: #111;
  --button-shadow: #111;
}
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  padding: 0 20px 60px;
  font: 400 24px/1.5 sans-serif;
  color: var(--text-color);
  background: var(--background);
}
h1 {
  text-transform: lowercase;
  font-weight: 300;
  font-size: 60px;
  margin: 100px 0 80px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: center;
}
li a {
  display: inline-block;
  margin: 20px 10px;
  padding: 10px 20px;
  color: var(--button-text);
  text-decoration: none;
  border-radius: 5px;
  background: var(--button);
  border: 1px solid #000;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;
  transition-property: transform, box-shadow;
  box-shadow: 2px 2px var(--button-shadow);
}
li a:focus {
  outline: 0;
  box-shadow: 2px 3px var(--button-shadow);
  transform: translate(0, -1px);
}
li a:hover {
  box-shadow: 2px 2.5px var(--button-shadow);
  transform: translate(0, -0.5px);
}
li a:active {
  box-shadow: 1px 1px var(--button-shadow);
  transform: translate(1px, 1px);
}
`

ReactDOM.render(
  <CurrentTheme>
    <Devbox />
  </CurrentTheme>,
  document.body.appendChild(document.createElement('div'))
)
