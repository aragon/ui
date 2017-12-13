import React from 'react'
import createHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { BaseStyles, publicUrlInjector } from '@aragon/ui'
import Sidebar from 'comps/Sidebar/Sidebar'
import PageHome from 'pages/PageHome'
import PageColors from 'pages/PageColors'
import PageTheme from 'pages/PageTheme'
import PageButton from 'pages/PageButton'
import PageDropDown from 'pages/PageDropDown'
import PageText from 'pages/PageText'
import PageHeader from 'pages/PageHeader'
import PageFooter from 'pages/PageFooter'
import PagePreFooter from 'pages/PagePreFooter'
import PageSection from 'pages/PageSection'
import PageIllustratedSection from 'pages/PageIllustratedSection'
import initGlobalStyles from './global-styles'

const PAGES = [
  [PageHome, 'Aragon UI', '/'],
  [PageColors, 'Colors', '/colors'],
  [PageTheme, 'Theme', '/theme'],
  [PageText, 'Text', '/text'],
  [PageSection, 'Section', '/section'],
  [PageButton, 'Button', '/button'],
  [PageDropDown, 'DropDown', '/dropdown'],
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

const Main = publicUrlInjector(styled.main`
  display: flex;
  height: 100%;
  > :first-child {
    margin-right: 20px;
  }
`)

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
      <Main publicUrl="/">
        <BaseStyles />
        <Sidebar
          pages={pages}
          activePage={activePage}
          onOpen={this.handleOpenPage}
        />
        {Page && <Page title={activePage.name} />}
      </Main>
    )
  }
}

export default App
