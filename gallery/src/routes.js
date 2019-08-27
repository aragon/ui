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
import PageLink from './pages/PageLink'
import PageRadio from './pages/PageRadio'
import PageRadioGroup from './pages/PageRadioGroup'
import PageRadioList from './pages/PageRadioList'
import PageTextInput from './pages/PageTextInput'
import PageField from './pages/PageField'
import PageSlider from './pages/PageSlider'
import PageTabs from './pages/PageTabs'
import PageAutoComplete from './pages/PageAutoComplete'

// Other components
import PageAddressField from './pages/PageAddressField'
import PageCircleGraph from './pages/PageCircleGraph'
import PageCountdown from './pages/PageCountdown'
import PageEthIdenticon from './pages/PageEthIdenticon'
import PageIdentityBadge from './pages/PageIdentityBadge'
import PageInfo from './pages/PageInfo'
import PageProgressBar from './pages/PageProgressBar'
import PageModal from './pages/PageModal'
import PageRootPortal from './pages/PageRootPortal'
import PageLineChart from './pages/PageLineChart'
import PageTimer from './pages/PageTimer'
import PageTransactionBadge from './pages/PageTransactionBadge'
import PageTransactionProgress from './pages/PageTransactionProgress'
import PageDistribution from './pages/PageDistribution'

// Containers
import PageMain from './pages/PageMain'
import PageAppBar from './pages/PageAppBar'
import PageNavigationBar from './pages/PageNavigationBar'
import PageAppView from './pages/PageAppView'
import PageSidePanel from './pages/PageSidePanel'
import PageCard from './pages/PageCard'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageTable from './pages/PageTable'
import PageFocusVisible from './pages/PageFocusVisible'
import PageDataView from './pages/PageDataView'

// Advanced
import PagePopover from './pages/PagePopover'
import PageButtonBase from './pages/PageButtonBase'
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
      [PageColors, 'Colors'],
      [PageIcons, 'Icons'],
      [PageText, 'Text'],
      [PageTheme, 'Theme'],
    ],
  },
  {
    name: 'Controls',
    pages: [
      [PageLink, 'Link'],
      [PageButton, 'Button'],
      [PageCheckBox, 'CheckBox'],
      [PageContextMenu, 'ContextMenu'],
      [PageDropDown, 'DropDown'],
      [PageField, 'Field'],
      [PageRadio, 'Radio'],
      [PageRadioGroup, 'RadioGroup'],
      [PageRadioList, 'RadioList'],
      [PageSlider, 'Slider'],
      [PageTextInput, 'TextInput'],
      [PageAutoComplete, 'AutoComplete'],
    ],
  },
  {
    name: 'Containers',
    pages: [
      [PageMain, 'Main'],
      [PageAppBar, 'AppBar'],
      [PageAppView, 'AppView'],
      [PageCard, 'Card'],
      [PageEmptyStateCard, 'EmptyStateCard'],
      [PageFocusVisible, 'FocusVisible'],
      [PageNavigationBar, 'NavigationBar'],
      [PageSidePanel, 'SidePanel'],
      [PageTable, 'Table'],
      [PageTabs, 'Tabs'],
      [PageDataView, 'DataView'],
    ],
  },
  {
    name: 'Components',
    pages: [
      [PageAddressField, 'AddressField'],
      [PageCircleGraph, 'CircleGraph'],
      [PageCountdown, 'Countdown'],
      [PageEthIdenticon, 'EthIdenticon'],
      [PageIdentityBadge, 'IdentityBadge'],
      [PageInfo, 'Info'],
      [PageLineChart, 'LineChart'],
      [PageModal, 'Modal'],
      [PageProgressBar, 'ProgressBar'],
      [PageRootPortal, 'RootPortal'],
      [PageTimer, 'Timer'],
      [PageTransactionBadge, 'TransactionBadge'],
      [PageTransactionProgress, 'TransactionProgress'],
      [PageDistribution, 'Distribution'],
    ],
  },
  {
    name: 'Advanced',
    pages: [
      [PagePopover, 'Popover'],
      [PageButtonBase, 'ButtonBase'],
      [PageViewport, 'Viewport'],
      [PageObserve, 'Observe'],
      [PagePublicUrl, 'PublicUrl'],
      [PageRedraw, 'Redraw'],
      [PageRedrawFromDate, 'RedrawFromDate'],
      [PageRoot, 'Root'],
      [PageToastHub, 'ToastHub'],
    ],
  },
].map(group => ({ ...group, pages: group.pages.map(preparePage) }))

export const PAGES = [
  preparePage([PageHome, 'aragonUI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
