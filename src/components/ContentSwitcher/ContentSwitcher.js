import React from 'react'
import PropTypes from 'prop-types'
import { noop, warnOnce } from '../../utils'
import { useTheme } from '../../theme'
import Content from './Content'
import ComponentHeading from '../ComponentHeading/ComponentHeading'

function ContentBar({ items, selected, onChange, ...props }) {
  return (
    <ul
      css={`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      `}
    >
      {items.map((item, i) => (
        <Content
          key={i}
          index={i}
          item={item}
          onChange={onChange}
          selected={i === selected}
          paddingSettings={props.paddingSettings}
        />
      ))}
    </ul>
  )
}

ContentBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
  wide: PropTypes.bool,
  title: PropTypes.node,
  subtitle: PropTypes.node,
}

ContentBar.defaultProps = {
  selected: 0,
  onChange: noop,
  wide: false,
  title: '',
  subtitle: '',
}

function ContentSwitcher(props) {
  const theme = useTheme()

  const selectedIndex =
    typeof props.selected === 'number'
      ? props.selected
      : typeof props.selected === 'boolean' && props.selected
      ? 1
      : 0

  const selected = Math.min(props.items.length - 1, Math.max(0, selectedIndex))

  if (selected !== selectedIndex) {
    warnOnce(
      'ContentSwitcher:outOfRangeSelected',
      `ContentSwitcher: the selected item doesn’t exist (selected index: ${selectedIndex}, selection range: 0 to ${props
        .items.length - 1}). Selecting ${selected} instead.`
    )
  }

  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <ComponentHeading title={props.title} subtitle={props.subtitle} />
      <div
        css={`
          width: ${props.wide ? '100%' : 'min-content'};
          background: ${theme.surface};
          border: 2px solid ${theme.border};
          border-radius: 10em;
        `}
      >
        <ContentBar {...props} selected={selectedIndex} />
      </div>
    </div>
  )
}

ContentSwitcher.propTypes = ContentBar.propTypes

export default ContentSwitcher
