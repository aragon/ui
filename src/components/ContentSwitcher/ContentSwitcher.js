import React from 'react'
import PropTypes from 'prop-types'
import { noop, warnOnce } from '../../utils'
import { useTheme } from '../../theme'
import Content from './Content'

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
  selected: PropTypes.number,
  onChange: PropTypes.func,
  wide: PropTypes.bool,
}

ContentBar.defaultProps = {
  selected: 0,
  onChange: noop,
  wide: false,
}

function ContentSwitcher(props) {
  const theme = useTheme()

  const selected = Math.min(props.items.length - 1, Math.max(0, props.selected))

  if (selected !== props.selected) {
    warnOnce(
      'ContentSwitcher:outOfRangeSelected',
      `ContentSwitcher: the selected item doesn’t exist (selected index: ${
        props.selected
      }, selection range: 0 to ${props.items.length -
        1}). Selecting ${selected} instead.`
    )
  }

  return (
    <div
      css={`
        width: ${props.wide ? '100%' : 'min-content'};
        background: ${theme.surface};
        border: 2px solid ${theme.border};
        border-radius: 10em;
      `}
    >
      <ContentBar {...props} selected={selected} />
    </div>
  )
}

ContentSwitcher.propTypes = ContentBar.propTypes

export default ContentSwitcher
