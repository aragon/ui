import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { Main } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import GlobalStyles from './global-styles'
import { PAGE_GROUPS, PAGES } from './routes'

class App extends React.Component {
  state = {
    pages: PAGES,
    activePage: null,
  }
  componentDidMount() {
    this.history = createHistory()
    this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
    this.handleLocationUpdate(this.history.location, true)
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
      <Main assetsUrl={ARAGON_UI_PATH} legacyFonts layout={false}>
        <div
          css={`
            display: flex;
            height: 100vh;
            > :first-child {
              margin-right: 20px;
            }
          `}
        >
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
        </div>
        <GlobalStyles />
      </Main>
    )
  }
}

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

export default App
