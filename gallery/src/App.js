import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { AragonApp } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import PageHome from 'pages/PageHome'
import PageAragonApp from 'pages/PageAragonApp'
import PageColors from 'pages/PageColors'
import PageTheme from 'pages/PageTheme'
import PageButton from 'pages/PageButton'
import PageDropDown from 'pages/PageDropDown'
import PageContextMenu from 'pages/PageContextMenu'
import PageCircleGraph from 'pages/PageCircleGraph'
import PageText from 'pages/PageText'
import PageTextInput from 'pages/PageTextInput'
import PageHeader from 'pages/PageHeader'
import PageFooter from 'pages/PageFooter'
import PagePreFooter from 'pages/PagePreFooter'
import PageSection from 'pages/PageSection'
import PageIllustratedSection from 'pages/PageIllustratedSection'
import PageCard from './pages/PageCard'
import initGlobalStyles from './global-styles'
import PageAppBar from './pages/PageAppBar'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageField from './pages/PageField'
import PageSidePanel from './pages/PageSidePanel'
import PageTable from './pages/PageTable'

const PAGES = [
  [PageHome, 'Aragon UI', '/'],
  [PageColors, 'Colors', '/colors'],
  [PageTheme, 'Theme', '/theme'],
  [PageAragonApp, 'AragonApp', '/aragon-app'],
  [PageAppBar, 'AppBar', '/app-bar'],
  [PageSidePanel, 'SidePanel', '/side-panel'],
  [PageCard, 'Card', '/card'],
  [PageEmptyStateCard, 'EmptyStateCard', '/empty-state-card'],
  [PageTable, 'Table', '/table'],
  [PageText, 'Text', '/text'],
  [PageSection, 'Section', '/section'],
  [PageField, 'Field', '/field'],
  [PageButton, 'Button', '/button'],
  [PageDropDown, 'DropDown', '/dropdown'],
  [PageContextMenu, 'ContextMenu', '/contextmenu'],
  [PageTextInput, 'TextInput', '/text-input'],
  [PageCircleGraph, 'CircleGraph', '/circlegraph'],
  [PageHeader, 'Header', '/header'],
  [PageFooter, 'Footer', '/footer'],
  [PagePreFooter, 'PreFooter', '/pre-footer'],
  [PageIllustratedSection, 'IllustratedSection', '/illustrated-section'],
]

const preparePages = (path, pages) =>
  pages.map(p => ({
    comp: p[0],
    name: p[1],
    path: path + p[2].replace(/^\//, '') + (p[2] === '/' ? '' : '/'),
  }))

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
    pages: preparePages('/', PAGES),
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
      <AragonApp publicUrl="/">
        <Main>
          <Sidebar
            pages={pages}
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
