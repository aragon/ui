// Styles
import PageHome from './pages/PageHome'
import PageColors from './pages/PageColors'
import PageTheme from './pages/PageTheme'
import PageText from './pages/PageText'
import PageIcons from './pages/PageIcons'
import PageBaseStyles from './pages/PageBaseStyles'

// Controls
import PageButton from './pages/PageButton'
import PageDropDown from './pages/PageDropDown'
import PageCheckBox from './pages/PageCheckBox'
import PageContextMenu from './pages/PageContextMenu'
import PageExternalLink from './pages/PageExternalLink'
import PageRadio from './pages/PageRadio'
import PageRadioGroup from './pages/PageRadioGroup'
import PageRadioList from './pages/PageRadioList'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSafeLink from './pages/PageSafeLink'
import PageSlider from './pages/PageSlider'
import PageTabBar from './pages/PageTabBar'

// Other components
import PageBadgeNumber from './pages/PageBadgeNumber'
import PageAddressField from './pages/PageAddressField'
import PageBadge from './pages/PageBadge'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageEthIdenticon from './pages/PageEthIdenticon'
import PageIdentityBadge from './pages/PageIdentityBadge'
import PageInfo from './pages/PageInfo'
import PageProgressBar from './pages/PageProgressBar'
import PageTransactionProgress from './pages/PageTransactionProgress'
import PagePopover from './pages/PagePopover'
import PageModal from './pages/PageModal'
import PageRootPortal from './pages/PageRootPortal'
import PageLineChart from './pages/PageLineChart'
import PagePartitionBar from './pages/PagePartitionBar'
import PageTimer from './pages/PageTimer'
import PageTransactionBadge from './pages/PageTransactionBadge'

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
import PageFocusVisible from './pages/PageFocusVisible'

// Providers
import PageRedraw from './pages/PageRedraw'
import PageRoot from './pages/PageRoot'
import PageRedrawFromDate from './pages/PageRedrawFromDate'
import PageObserve from './pages/PageObserve'
import PageViewport from './pages/PageViewport'
import PageToastHub from './pages/PageToastHub'
import PagePublicUrl from './pages/PagePublicUrl'

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
      [PageBaseStyles, 'BaseStyles'],
      [PageColors, 'Colors'],
      [PageIcons, 'Icons'],
      [PageText, 'Text'],
      [PageTheme, 'Theme'],
    ],
  },
  {
    name: 'Controls',
    pages: [
      [PageButton, 'Button'],
      [PageCheckBox, 'CheckBox'],
      [PageContextMenu, 'ContextMenu'],
      [PageDropDown, 'DropDown'],
      [PageExternalLink, 'ExternalLink'],
      [PageField, 'Field'],
      [PageRadio, 'Radio'],
      [PageRadioGroup, 'RadioGroup'],
      [PageRadioList, 'RadioList'],
      [PageSafeLink, 'SafeLink'],
      [PageSlider, 'Slider'],
      [PageTabBar, 'TabBar'],
      [PageTextInput, 'TextInput'],
    ],
  },
  {
    name: 'Containers',
    pages: [
      [PageAppBar, 'AppBar'],
      [PageAppView, 'AppView'],
      [PageAragonApp, 'AragonApp'],
      [PageCard, 'Card'],
      [PageEmptyStateCard, 'EmptyStateCard'],
      [PageFocusVisible, 'FocusVisible'],
      [PageMain, 'Main'],
      [PageNavigationBar, 'NavigationBar'],
      [PageSidePanel, 'SidePanel'],
      [PageTable, 'Table'],
    ],
  },
  {
    name: 'Components',
    pages: [
      [PageAddressField, 'AddressField'],
      [PageBadge, 'Badge'],
      [PageBadgeNumber, 'BadgeNumber'],
      [PageCircleGraph, 'CircleGraph'],
      [PageCountdown, 'Countdown'],
      [PageEthIdenticon, 'EthIdenticon'],
      [PageIdentityBadge, 'IdentityBadge'],
      [PageInfo, 'Info'],
      [PageLineChart, 'LineChart'],
      [PageModal, 'Modal'],
      [PagePartitionBar, 'PartitionBar'],
      [PagePopover, 'Popover'],
      [PageProgressBar, 'ProgressBar'],
      [PageRootPortal, 'RootPortal'],
      [PageTimer, 'Timer'],
      [PageTransactionBadge, 'TransactionBadge'],
      [PageTransactionProgress, 'TransactionProgress'],
    ],
  },
  {
    name: 'Providers',
    pages: [
      [PageObserve, 'Observe'],
      [PagePublicUrl, 'PublicUrl'],
      [PageRedraw, 'Redraw'],
      [PageRedrawFromDate, 'RedrawFromDate'],
      [PageRoot, 'Root'],
      [PageToastHub, 'ToastHub'],
      [PageViewport, 'Viewport'],
    ],
  },
].map(group => ({ ...group, pages: group.pages.map(preparePage) }))

export const PAGES = [
  preparePage([PageHome, 'aragonUI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
