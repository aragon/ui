// Styles
import PageHome from './pages/PageHome'
import PageColors from './pages/PageColors'
import PageTheme from './pages/PageTheme'
import PageText from './pages/PageText'
import PageIcons from './pages/PageIcons'

// Controls
import PageButton from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageContextMenu from './pages/PageContextMenu'
import PageRadioButton from './pages/PageRadioButton'
import PageRadioGroup from './pages/PageRadioGroup'
import PageRadioList from './pages/PageRadioList'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSafeLink from './pages/PageSafeLink'
import PageSlider from './pages/PageSlider'

// Other components
import PageBadge from './pages/PageBadge'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageInfo from './pages/PageInfo'

// Containers
import PageAragonApp from './pages/PageAragonApp'
import PageAppBar from './pages/PageAppBar'
import PageNavigationBar from './pages/PageNavigationBar'
import PageAppView from './pages/PageAppView'
import PageSidePanel from './pages/PageSidePanel'
import PageCard from './pages/PageCard'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageTable from './pages/PageTable'

// Providers
import PageRedraw from './pages/PageRedraw'
import PageRedrawFromDate from './pages/PageRedrawFromDate'
import PageObserve from './pages/PageObserve'

const preparePage = ([comp, name, path]) => ({
  comp,
  name,
  path: '/' + path.replace(/^\//, '') + (path === '/' ? '' : '/'),
})

export const PAGE_GROUPS = [
  {
    name: 'Styles',
    pages: [
      [PageColors, 'Colors', '/colors'],
      [PageTheme, 'Theme', '/theme'],
      [PageText, 'Text', '/text'],
      [PageIcons, 'Icons', '/icons'],
    ].map(preparePage),
  },
  {
    name: 'Controls',
    pages: [
      [PageButton, 'Button', '/button'],
      [PageDropDown, 'DropDown', '/drop-down'],
      [PageContextMenu, 'ContextMenu', '/context-menu'],
      [PageRadioGroup, 'RadioGroup', '/radio-group'],
      [PageRadioList, 'RadioList', '/radio-list'],
      [PageRadioButton, 'RadioButton', '/radio-button'],
      [PageTextInput, 'TextInput', '/text-input'],
      [PageField, 'Field', '/field'],
      [PageSafeLink, 'SafeLink', '/safe-link'],
      [PageSlider, 'Slider', '/slider'],
    ].map(preparePage),
  },
  {
    name: 'Containers',
    pages: [
      [PageAragonApp, 'AragonApp', '/aragon-app'],
      [PageAppBar, 'AppBar', '/app-bar'],
      [PageNavigationBar, 'NavigationBar', '/navigation-bar'],
      [PageAppView, 'AppView', '/app-view'],
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
      [PageCircleGraph, 'CircleGraph', '/circle-graph'],
      [PageCountdown, 'Countdown', '/countdown'],
      [PageInfo, 'Info', '/info'],
    ].map(preparePage),
  },
  {
    name: 'Providers',
    pages: [
      [PageRedraw, 'Redraw', '/redraw'],
      [PageRedrawFromDate, 'RedrawFromDate', '/redraw-from-date'],
      [PageObserve, 'Observe', '/observe'],
    ].map(preparePage),
  },
]

export const PAGES = [
  preparePage([PageHome, 'Aragon UI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
