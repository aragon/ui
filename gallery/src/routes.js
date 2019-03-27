// Styles
import PageHome from './pages/PageHome'
import PageColors from './pages/PageColors'
import PageTheme from './pages/PageTheme'
import PageText from './pages/PageText'
import PageIcons from './pages/PageIcons'

// Controls
import PageButton from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageCheckBox from './pages/PageCheckBox'
import PageContextMenu from './pages/PageContextMenu'
import PageRadio from './pages/PageRadio'
import PageRadioGroup from './pages/PageRadioGroup'
import PageRadioList from './pages/PageRadioList'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSafeLink from './pages/PageSafeLink'
import PageSlider from './pages/PageSlider'
import PageTabBar from './pages/PageTabBar'

// Other components
import PageBadge from './pages/PageBadge'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageInfo from './pages/PageInfo'
import PageProgressBar from './pages/PageProgressBar'
import PageTransactionProgress from './pages/PageTransactionProgress'
import PagePopover from './pages/PagePopover'
import PageRootPortal from './pages/PageRootPortal'

// Containers
import PageMain from './pages/PageMain'
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
import PageToastHub from './pages/PageToastHub'

const preparePage = ([comp, name, path = camelCaseToDashes(name)]) => ({
  comp,
  name,
  path: '/' + path.replace(/^\//, '') + (path === '/' ? '' : '/'),
})

const camelCaseToDashes = str =>
  [...str].reduce(
    (str, char, i) =>
      str + (/[A-Z]/.test(char) && i > 0 ? '-' : '') + char.toLowerCase(),
    ''
  )

export const PAGE_GROUPS = [
  {
    name: 'Styles',
    pages: [
      [PageColors, 'Colors'],
      [PageTheme, 'Theme'],
      [PageText, 'Text'],
      [PageIcons, 'Icons'],
    ],
  },
  {
    name: 'Controls',
    pages: [
      [PageButton, 'Button'],
      [PageDropDown, 'DropDown'],
      [PageContextMenu, 'ContextMenu'],
      [PageCheckBox, 'CheckBox'],
      [PageRadioGroup, 'RadioGroup'],
      [PageRadioList, 'RadioList'],
      [PageRadio, 'Radio'],
      [PageTextInput, 'TextInput'],
      [PageField, 'Field'],
      [PageSafeLink, 'SafeLink'],
      [PageSlider, 'Slider'],
      [PageTabBar, 'TabBar'],
    ],
  },
  {
    name: 'Containers',
    pages: [
      [PageMain, 'Main'],
      [PageAragonApp, 'AragonApp'],
      [PageAppBar, 'AppBar'],
      [PageNavigationBar, 'NavigationBar'],
      [PageAppView, 'AppView'],
      [PageSidePanel, 'SidePanel'],
      [PageCard, 'Card'],
      [PageEmptyStateCard, 'EmptyStateCard'],
      [PageTable, 'Table'],
    ],
  },
  {
    name: 'Components',
    pages: [
      [PageBadge, 'Badge'],
      [PageCircleGraph, 'CircleGraph'],
      [PageCountdown, 'Countdown'],
      [PageInfo, 'Info'],
      [PageProgressBar, 'ProgressBar'],
      [PageTransactionProgress, 'TransactionProgress'],
      [PagePopover, 'Popover'],
      [PageRootPortal, 'RootPortal'],
    ],
  },
  {
    name: 'Providers',
    pages: [
      [PageRedraw, 'Redraw'],
      [PageRedrawFromDate, 'RedrawFromDate'],
      [PageObserve, 'Observe'],
      [PageToastHub, 'ToastHub'],
    ],
  },
].map(group => ({ ...group, pages: group.pages.map(preparePage) }))

export const PAGES = [
  preparePage([PageHome, 'aragonUI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
