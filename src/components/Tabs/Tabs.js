import React from 'react'
import PropTypes from 'prop-types'
import { useInside } from 'use-inside'
import { noop, warnOnce } from '../../utils'
import { useLayout } from '../Layout/Layout'
import Bar from '../Bar/Bar'
import TabBarLegacy from './TabBarLegacy'
import { TabsFullWidth } from './TabsFullWidth'
import Tab from './Tab'

function TabBar({ items, selected, onChange }) {
  return (
    <nav>
      <ul css="display: flex">
        {items.map((item, i) => (
          <Tab
            key={i}
            index={i}
            item={item}
            onChange={onChange}
            selected={i === selected}
          />
        ))}
      </ul>
    </nav>
  )
}

TabBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func,
}

TabBar.defaultProps = {
  selected: 0,
  onChange: noop,
}

function Tabs(props) {
  const { layoutName } = useLayout()
  const [insideBar] = useInside('Bar')
  const [insideSidePanel] = useInside('SidePanel')

  if (insideBar) {
    throw new Error(
      'Tabs cannot be a child of Bar: please use the Tabs component directly.'
    )
  }

  const selected = Math.min(props.items.length - 1, Math.max(0, props.selected))

  if (selected !== props.selected) {
    warnOnce(
      'Tabs:outOfRangeSelected',
      `Tabs: the selected item doesn’t exist (selected index: ${
        props.selected
      }, selection range: 0 to ${props.items.length -
        1}). Selecting ${selected} instead.`
    )
  }

  if (layoutName === 'small') {
    return <TabsFullWidth {...props} selected={selected} />
  }

  return (
    <Bar
      css={`
        overflow: hidden;
        ${insideSidePanel
          ? `
            border-width: 0 0 1px 0;
            border-radius: 0;
          `
          : ''}
      `}
    >
      <TabBar {...props} selected={selected} />
    </Bar>
  )
}

Tabs.propTypes = TabBar.propTypes

// TabBar legacy compatibility
function TabBarLegacyCompatibility(props) {
  const [insideAppBar] = useInside('AppBar')

  // Use a separate component for Tabs in AppBar, to prevent breaking anything.
  if (insideAppBar) {
    return <TabBarLegacy {...props} inAppBar />
  }

  warnOnce(
    'TabBarLegacyCompatibility',
    'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.'
  )
  return <Tabs {...props} />
}

export { TabBarLegacyCompatibility }
export default Tabs
