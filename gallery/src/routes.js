import React from 'react'
import Page from './components/Page/Page'

import PageAddressField from './pages/PageAddressField'
import PageAutoComplete from './pages/PageAutoComplete'
import PageBackButton from './pages/PageBackButton'
import PageBar from './pages/PageBar'
import PageBox from './pages/PageBox'
import PageButton from './pages/PageButton'
import PageButtonBase from './pages/PageButtonBase'
import PageCard from './pages/PageCard'
import PageCheckBox from './pages/PageCheckBox'
import PageCircleGraph from './pages/PageCircleGraph'
import PageContextMenu from './pages/PageContextMenu'
import PageDataView from './pages/PageDataView'
import PageDateRangePicker from './pages/PageDateRangePicker'
import PageDistribution from './pages/PageDistribution'
import PageDropDown from './pages/PageDropDown'
import PageEmptyStateCard from './pages/PageEmptyStateCard'
import PageEthIdenticon from './pages/PageEthIdenticon'
import PageField from './pages/PageField'
import PageFocusVisible from './pages/PageFocusVisible'
import PageHeader from './pages/PageHeader'
import PageHome from './pages/PageHome'
import PageIcons from './pages/PageIcons'
import PageIdentityBadge from './pages/PageIdentityBadge'
import PageInfo from './pages/PageInfo'
import PageLineChart from './pages/PageLineChart'
import PageLink from './pages/PageLink'
import PageModal from './pages/PageModal'
import PagePagination from './pages/PagePagination'
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
import PageSplit from './pages/PageSplit'
import PageSwitch from './pages/PageSwitch'
import PageTable from './pages/PageTable'
import PageTabs from './pages/PageTabs'
import PageTextCopy from './pages/PageTextCopy'
import PageTextInput from './pages/PageTextInput'
import PageTextStyles from './pages/PageTextStyles'
import PageTimer from './pages/PageTimer'
import PageToastHub from './pages/PageToastHub'
import PageTransactionBadge from './pages/PageTransactionBadge'
import PageTransactionProgress from './pages/PageTransactionProgress'
import PageViewport from './pages/PageViewport'

import accordionMd from 'ui-src/components/Accordion/README.md'
import colorsMd from 'ui-docs/Colors.md'
import floatIndicatorMd from 'ui-src/components/FloatIndicator/README.md'
import gettingstartedMd from 'ui-docs/GettingStarted.md'
import helpMd from 'ui-src/components/Help/README.md'
import loadingRingMd from 'ui-src/components/LoadingRing/README.md'
import mainMd from 'ui-src/components/Main/README.md'
import searchInputMd from 'ui-src/components/Input/SearchInput.md'
import spacingMd from 'ui-docs/Spacing.md'
import syncIndicatorMd from 'ui-src/components/SyncIndicator/README.md'
import tagMd from 'ui-src/components/Tag/README.md'
import upgradeMd from 'ui-docs/Upgrade.md'

// Create a page component that only renders a markdown file
// Remember to update the list of markdown pages in webpack.config.js!
function readmePage(readme) {
  return ({ title }) => <Page title={title} readme={readme} />
}

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
      [readmePage(gettingstartedMd), 'Getting started', 'getting-started'],
      [readmePage(upgradeMd), 'How to upgrade', 'how-to-upgrade'],
    ],
  },
  {
    name: 'Base',
    pages: [
      [readmePage(spacingMd), 'Spacing', 'spacing'],
      [readmePage(colorsMd), 'Colors', 'colors'],
      [PageTextStyles, 'Text styles', 'text-styles'],
      [PageIcons, 'Icons'],
      [readmePage(mainMd), 'Main'],
    ],
  },
  {
    name: 'Actions',
    pages: [
      [PageButton, 'Button'],
      [PageContextMenu, 'ContextMenu'],
    ],
  },
  {
    name: 'Navigation',
    pages: [
      [PageTabs, 'Tabs'],
      [PagePagination, 'Pagination'],
      [PageBackButton, 'BackButton'],
      [PageLink, 'Link'],
      [PageHeader, 'Header'],
    ],
  },
  {
    name: 'Structure',
    pages: [
      [PageBar, 'Bar'],
      [PageBox, 'Box'],
      [PageCard, 'Card'],
      [PageSplit, 'Split'],
      [PageDataView, 'DataView'],
      [PageTable, 'Table'],
      [PageEmptyStateCard, 'EmptyStateCard'],
      [PageIdentityBadge, 'IdentityBadge'],
      [PageTransactionBadge, 'TransactionBadge'],
      [readmePage(tagMd), 'Tag'],
      [readmePage(accordionMd), 'Accordion'],
      [PageTimer, 'Timer'],
      [PageEthIdenticon, 'EthIdenticon'],
      [PageTransactionProgress, 'TransactionProgress'],
    ],
  },
  {
    name: 'Data entry',
    pages: [
      [PageAutoComplete, 'AutoComplete'],
      [PageDateRangePicker, 'DateRangePicker'],
      [PageDropDown, 'DropDown'],
      [PageSwitch, 'Switch'],
      [PageRadio, 'Radio'],
      [PageCheckBox, 'CheckBox'],
      [PageSlider, 'Slider'],
      [PageTextInput, 'TextInput'],
      [readmePage(searchInputMd), 'SearchInput'],
      [PageAddressField, 'AddressField'],
      [PageRadioGroup, 'RadioGroup'],
      [PageRadioList, 'RadioList'],
      [PageTextCopy, 'TextCopy'],
      [PageField, 'Field'],
    ],
  },
  {
    name: 'Visualization',
    pages: [
      [PageCircleGraph, 'CircleGraph'],
      [PageLineChart, 'LineChart'],
      [PageDistribution, 'Distribution'],
    ],
  },
  {
    name: 'Feedback',
    pages: [
      [PageInfo, 'Info'],
      [PageProgressBar, 'ProgressBar'],
      [readmePage(loadingRingMd), 'LoadingRing'],
      [PageToastHub, 'Toast'],
      [readmePage(syncIndicatorMd), 'SyncIndicator'],
      [readmePage(floatIndicatorMd), 'FloatIndicator'],
    ],
  },
  {
    name: 'Overlays',
    pages: [
      [readmePage(helpMd), 'Help'],
      [PagePopover, 'Popover'],
      [PageModal, 'Modal'],
      [PageSidePanel, 'SidePanel'],
    ],
  },
  {
    name: 'Advanced',
    pages: [
      [PageButtonBase, 'ButtonBase'],
      [PageFocusVisible, 'FocusVisible'],
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
