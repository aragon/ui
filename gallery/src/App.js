import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { AragonApp } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import initGlobalStyles from './global-styles'

// Styles
import PageHome from 'pages/PageHome'
import PageColors from 'pages/PageColors'
import PageTheme from 'pages/PageTheme'
import PageText from 'pages/PageText'

// Controls
import PageButton from 'pages/PageButton'
import PageDropDown from 'pages/PageDropDown'
import PageContextMenu from 'pages/PageContextMenu'
import PageTextInput from 'pages/PageTextInput'
import PageField from './pages/PageField'

// Other components
import PageBadge from './pages/PageBadge'
import PageCircleGraph from 'pages/PageCircleGraph'
import PageCountdown from 'pages/PageCountdown'

// Containers
import PageAragonApp from 'pages/PageAragonApp'
import PageAppBar from './pages/PageAppBar'
import PageSidePanel from './pages/PageSidePanel'
import PageCard from './pages/PageCard'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageTable from './pages/PageTable'

// TODO: move these components in @aragon/web
// import PageHeader from 'pages/PageHeader'
// import PageFooter from 'pages/PageFooter'
// import PagePreFooter from 'pages/PagePreFooter'
// import PageSection from 'pages/PageSection'
// import PageIllustratedSection from 'pages/PageIllustratedSection'

const preparePage = ([comp, name, path]) => ({
  comp,
  name,
  path: '/' + path.replace(/^\//, '') + (path === '/' ? '' : '/'),
})

const PAGE_GROUPS = [
  {
    name: 'Styles',
    pages: [
      [PageColors, 'Colors', '/colors'],
      [PageTheme, 'Theme', '/theme'],
      [PageText, 'Text', '/text'],
    ].map(preparePage),
  },
  {
    name: 'Controls',
    pages: [
      [PageButton, 'Button', '/button'],
      [PageDropDown, 'DropDown', '/dropdown'],
      [PageContextMenu, 'ContextMenu', '/contextmenu'],
      [PageTextInput, 'TextInput', '/text-input'],
      [PageField, 'Field', '/field'],
    ].map(preparePage),
  },
  {
    name: 'Containers',
    pages: [
      [PageAragonApp, 'AragonApp', '/aragon-app'],
      [PageAppBar, 'AppBar', '/app-bar'],
      [PageSidePanel, 'SidePanel', '/side-panel'],
      [PageCard, 'Card', '/card'],
      [PageEmptyStateCard, 'EmptyStateCard', '/empty-state-card'],
      [PageTable, 'Table', '/table'],
    ].map(preparePage),
  },
  {
    name: 'Components',
    pages: [
      [PageBadge, 'Badge', '/badge'],
      [PageCircleGraph, 'CircleGraph', '/circlegraph'],
      [PageCountdown, 'Countdown', '/countdown'],
    ].map(preparePage),
  },
]

const PAGES = [
  preparePage([PageHome, 'Aragon UI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]

const Main = styled.div`
  display: flex;
  height: 100%;
  > :first-child {
    margin-right: 20px;
  }
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
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Sidebar
            title={pages[0].name}
            root={pages[0].path}
            groups={PAGE_GROUPS}
            activePage={activePage}
            onOpen={this.handleOpenPage}
          />
          {Page && <Page title={activePage.name} />}
        </Main>
      </AragonApp>
    )
  }
}

export default App
