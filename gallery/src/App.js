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
import PageCircleGraph from 'pages/PageCircleGraph'
import PageText from 'pages/PageText'
import PageTextInput from 'pages/PageTextInput'
import PageHeader from 'pages/PageHeader'
import PageFooter from 'pages/PageFooter'
import PagePreFooter from 'pages/PagePreFooter'
import PageSection from 'pages/PageSection'
import PageIllustratedSection from 'pages/PageIllustratedSection'
import initGlobalStyles from './global-styles'

const PAGES = [
  [PageHome, 'Aragon UI', '/'],
  [PageAragonApp, 'AragonApp', '/aragon-app'],
  [PageColors, 'Colors', '/colors'],
  [PageTheme, 'Theme', '/theme'],
  [PageText, 'Text', '/text'],
  [PageSection, 'Section', '/section'],
  [PageButton, 'Button', '/button'],
  [PageDropDown, 'DropDown', '/dropdown'],
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
