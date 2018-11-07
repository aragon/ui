import React from 'react'
import ReactDOM from 'react-dom'

import LinkedSliders from './apps/LinkedSliders'
import RadioButton from './apps/RadioButton'
import SidePanel from './apps/SidePanel'
import NavigationBar from './apps/NavigationBar'
import Button from './apps/Button'
import EmptyStateCard from './apps/EmptyStateCard'
import TabBar from './apps/TabBar'
import IdentityBadge from './apps/IdentityBadge'

// Set DEVBOX_APP to one of these apps (e.g. `DEVBOX_APP=Button npm start`)
const MODULES = {
  LinkedSliders,
  RadioButton,
  SidePanel,
  NavigationBar,
  Button,
  EmptyStateCard,
  TabBar,
  IdentityBadge,
}

const App =
  MODULES[process.env.DEVBOX_APP] ||
  (() => <div>DEVBOX_APP is not set correctly (see devbox/index.js)</div>)

ReactDOM.render(<App />, document.getElementById('app'))
