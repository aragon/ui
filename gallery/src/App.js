import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled, { injectGlobal } from 'styled-components'
import { BaseStyles, theme } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import PageHome from 'pages/PageHome'
import PageColors from 'pages/PageColors'
import PageTheme from 'pages/PageTheme'
import PageButton from 'pages/PageButton'

const PAGES = [
  [PageHome, 'Aragon UI', '/'],
  [PageColors, 'Colors', '/colors'],
  [PageTheme, 'Theme', '/theme'],
  [PageButton, 'Button', '/button'],
]

const preparePages = (path, pages) =>
  pages.map(p => ({
    comp: p[0],
    name: p[1],
    path: path + p[2].replace(/^\//, ''),
  }))

const Main = styled.main`
  display: flex;
  height: 100%;
  > :first-child {
    margin-right: 20px;
  }
`

const globalStyles = `
  body {
    background: linear-gradient(
      130deg,
      ${theme.mainBgGradientStart},
      ${theme.mainBgGradientEnd}
    );
  }
`

class App extends React.Component {
  state = {
    pages: preparePages('/', PAGES),
    activePage: null,
  }
  componentDidMount() {
    this.history = createHistory()
    this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
    this.handleLocationUpdate(this.history.location, true)
    injectGlobal`${globalStyles}`
  }
  componentWillUnmount() {
    this.unlistenHistory()
  }
  handleOpenPage = page => {
    this.history.push(page, {})
  }
  handleLocationUpdate = location => {
    const { pages } = this.state
    const page = pages.find(page => page.path === location.pathname)
    if (page) {
      this.setState({ activePage: page })
    }
  }
  render() {
    const { pages, activePage } = this.state
    const Page = activePage && activePage.comp
    return (
      <div>
        <BaseStyles />
        <Main>
          <Sidebar
            pages={pages}
            activePage={activePage}
            onOpen={this.handleOpenPage}
          />
          {Page && <Page title={activePage.name} />}
        </Main>
      </div>
    )
  }
}

export default App
