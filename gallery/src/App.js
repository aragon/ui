import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled, { injectGlobal } from 'styled-components'
import { AragonApp } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import initGlobalStyles from './global-styles'
import { PAGE_GROUPS, PAGES } from './routes'

const Main = styled.div`
  display: flex;
  height: 100vh;
  > :first-child {
    margin-right: 20px;
  }
`
const Menu = styled.div`
  flex-shrink: 0;
  height: 100%;
  overflow: auto;
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

class App extends React.Component {
  state = {
    pages: PAGES,
    activePage: null,
  }
  componentDidMount() {
    this.history = createHistory()
    this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
    this.handleLocationUpdate(this.history.location, true)
    initGlobalStyles()

    injectGlobal`
      body, html {
        overflow: hidden;
      }
    `
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
      <AragonApp publicUrl={ARAGON_UI_PATH} supportLegacyAgents>
        <Main>
          <Menu>
            <Sidebar
              title={pages[0].name}
              root={pages[0].path}
              groups={PAGE_GROUPS}
              activePage={activePage}
              onOpen={this.handleOpenPage}
            />
          </Menu>
          <Content>{Page && <Page title={activePage.name} />}</Content>
        </Main>
      </AragonApp>
    )
  }
}

export default App
