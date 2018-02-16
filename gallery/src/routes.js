// Styles
import PageHome from './pages/PageHome'
import PageColors from './pages/PageColors'
import PageTheme from './pages/PageTheme'
import PageText from './pages/PageText'

// Controls
import PageButton from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageContextMenu from './pages/PageContextMenu'
import PageRadioGroup from './pages/PageRadioGroup'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSafeLink from './pages/PageSafeLink'

// Other components
import PageBadge from './pages/PageBadge'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageInfo from './pages/PageInfo'

// Containers
import PageAragonApp from './pages/PageAragonApp'
import PageAppBar from './pages/PageAppBar'
import PageSidePanel from './pages/PageSidePanel'
import PageCard from './pages/PageCard'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageTable from './pages/PageTable'

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
    ].map(preparePage),
  },
  {
    name: 'Controls',
    pages: [
      [PageButton, 'Button', '/button'],
      [PageDropDown, 'DropDown', '/drop-down'],
      [PageContextMenu, 'ContextMenu', '/context-menu'],
      [PageRadioGroup, 'RadioGroup', '/radio-group'],
      [PageTextInput, 'TextInput', '/text-input'],
      [PageField, 'Field', '/field'],
      [PageSafeLink, 'SafeLink', '/safe-link'],
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
      [PageCircleGraph, 'CircleGraph', '/circle-graph'],
      [PageCountdown, 'Countdown', '/countdown'],
      [PageInfo, 'Info', '/info'],
    ].map(preparePage),
  },
]

export const PAGES = [
  preparePage([PageHome, 'Aragon UI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
