import PageAddressField from './pages/PageAddressField'
import PageAutoComplete from './pages/PageAutoComplete'
import PageBar from './pages/PageBar'
import PageButton from './pages/PageButton'
import PageColors from './pages/PageColors'
import PageBox from './pages/PageBox'
import PageButtonBase from './pages/PageButtonBase'
import PageCard from './pages/PageCard'
import PageCheckBox from './pages/PageCheckBox'
import PageCircleGraph from './pages/PageCircleGraph'
import PageContextMenu from './pages/PageContextMenu'
import PageCountdown from './pages/PageCountdown'
import PageDataView from './pages/PageDataView'
import PageDateRangePicker from './pages/PageDateRangePicker'
import PageDistribution from './pages/PageDistribution'
import PageDropDown from './pages/PageDropDown'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageEthIdenticon from './pages/PageEthIdenticon'
import PageField from './pages/PageField'
import PageFocusVisible from './pages/PageFocusVisible'
import PageGettingStarted from './pages/PageGettingStarted'
import PageHome from './pages/PageHome'
import PageIcons from './pages/PageIcons'
import PageIdentityBadge from './pages/PageIdentityBadge'
import PageInfo from './pages/PageInfo'
import PageLineChart from './pages/PageLineChart'
import PageLink from './pages/PageLink'
import PageMain from './pages/PageMain'
import PageSplit from './pages/PageSplit'
import PageHeader from './pages/PageHeader'
import PageModal from './pages/PageModal'
import PageObserve from './pages/PageObserve'
import PagePopover from './pages/PagePopover'
import PageProgressBar from './pages/PageProgressBar'
import PagePublicUrl from './pages/PagePublicUrl'
import PageRadio from './pages/PageRadio'
import PageRadioGroup from './pages/PageRadioGroup'
import PageRadioList from './pages/PageRadioList'
import PageRedraw from './pages/PageRedraw'
import PageRedrawFromDate from './pages/PageRedrawFromDate'
import PageRoot from './pages/PageRoot'
import PageRootPortal from './pages/PageRootPortal'
import PageSidePanel from './pages/PageSidePanel'
import PageSlider from './pages/PageSlider'
import PageSwitch from './pages/PageSwitch'
import PageTable from './pages/PageTable'
import PageTabs from './pages/PageTabs'
import PageText from './pages/PageText'
import PageTextCopy from './pages/PageTextCopy'
import PageTextInput from './pages/PageTextInput'
import PageTimer from './pages/PageTimer'
import PageToastHub from './pages/PageToastHub'
import PageTransactionBadge from './pages/PageTransactionBadge'
import PageTransactionProgress from './pages/PageTransactionProgress'
import PageViewport from './pages/PageViewport'

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
    name: '',
    pages: [
      [PageGettingStarted, 'Getting started', 'getting-started'],
      [PageColors, 'Colors', 'colors'],
      [PageText, 'Text styling', 'text-styling'],
    ],
  },
  {
    name: 'Base',
    pages: [
      [PageMain, 'Main'],
      [PageIcons, 'Icons'],
      [PageLink, 'Link'],
      [PageButton, 'Button'],
    ],
  },
  {
    name: 'Containers',
    pages: [
      [PageBar, 'Bar'],
      [PageBox, 'Box'],
      [PageCard, 'Card'],
      [PageHeader, 'Header'],
      [PageModal, 'Modal'],
      [PageSidePanel, 'SidePanel'],
      [PageSplit, 'Split'],
      [PageTable, 'Table'],
      [PageTabs, 'Tabs'],
    ],
  },
  {
    name: 'Data',
    pages: [
      [PageCircleGraph, 'CircleGraph'],
      [PageDataView, 'DataView'],
      [PageDistribution, 'Distribution'],
      [PageLineChart, 'LineChart'],
      [PageProgressBar, 'ProgressBar'],
      [PageTimer, 'Timer'],
    ],
  },
  {
    name: 'Controls',
    pages: [
      [PageAutoComplete, 'AutoComplete'],
      [PageCheckBox, 'CheckBox'],
      [PageDateRangePicker, 'DateRangePicker'],
      [PageDropDown, 'DropDown'],
      [PageField, 'Field'],
      [PageRadio, 'Radio'],
      [PageRadioGroup, 'RadioGroup'],
      [PageRadioList, 'RadioList'],
      [PageSlider, 'Slider'],
      [PageSwitch, 'Switch'],
      [PageTextCopy, 'TextCopy'],
      [PageTextInput, 'TextInput'],
    ],
  },
  {
    name: 'Web3',
    pages: [
      [PageAddressField, 'AddressField'],
      [PageEthIdenticon, 'EthIdenticon'],
      [PageIdentityBadge, 'IdentityBadge'],
      [PageTransactionBadge, 'TransactionBadge'],
      [PageTransactionProgress, 'TransactionProgress'],
    ],
  },
  {
    name: 'Other',
    pages: [
      [PageContextMenu, 'ContextMenu'],
      [PageCountdown, 'Countdown'],
      [PageEmptyStateCard, 'EmptyStateCard'],
      [PageInfo, 'Info'],
      [PageToastHub, 'Toast'],
    ],
  },
  {
    name: 'Advanced',
    pages: [
      [PageButtonBase, 'ButtonBase'],
      [PageFocusVisible, 'FocusVisible'],
      [PageObserve, 'Observe'],
      [PagePopover, 'Popover'],
      [PagePublicUrl, 'PublicUrl'],
      [PageRedraw, 'Redraw'],
      [PageRedrawFromDate, 'RedrawFromDate'],
      [PageRoot, 'Root'],
      [PageRootPortal, 'RootPortal'],
      [PageViewport, 'Viewport'],
    ],
  },
].map(group => ({ ...group, pages: group.pages.map(preparePage) }))

export const PAGES = [
  preparePage([PageHome, 'aragonUI', '/']),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), []),
]
