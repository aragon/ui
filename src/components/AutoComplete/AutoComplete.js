import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import {
  useArrowKeysFocus,
  useClickOutside,
  useKeyDown,
  useOnBlur,
} from '../../hooks'
import { springs } from '../../style'
import { useTheme } from '../../theme'
import { unselectable, noop, identity, KEY_ESC } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'
import { SearchInput } from '../Input/SearchInput'

function AutoComplete({
  forwardedRef,
  itemButtonStyles = '',
  items = [],
  onSelect = noop,
  onChange = noop,
  placeholder,
  renderItem = identity,
  required,
  value,
  wide,
}) {
  const ref = forwardedRef
  const uniqueItems = new Set(items)
  const [opened, setOpened] = useState(true)
  const wrapRef = useRef()
  const refs = useRef([])

  const handleClose = useCallback(() => setOpened(false), [])
  const handleFocus = useCallback(() => setOpened(true), [])

  const handleSelect = useCallback(
    item => {
      onSelect(item)
      setOpened(false)
    },
    [onSelect]
  )

  const handleInputChange = useCallback(
    (...params) => {
      setOpened(true)
      onChange(...params)
    },
    [onChange]
  )

  const { handleBlur } = useOnBlur(handleClose, wrapRef)
  const { highlightedIndex, setHighlightedIndex } = useArrowKeysFocus(refs)

  useClickOutside(handleClose, wrapRef)
  useKeyDown(KEY_ESC, handleClose)

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [opened, items, value, setHighlightedIndex])

  return (
    <div css="position: relative" ref={wrapRef} onBlur={handleBlur}>
      <SearchInput
        ref={ref}
        wide={wide}
        placeholder={placeholder}
        required={required}
        onChange={handleInputChange}
        onFocus={handleFocus}
        value={value}
      />
      <Transition
        config={springs.swift}
        items={opened && items.length > 0}
        from={{ scale: 0.98, opacity: 0 }}
        enter={{ scale: 1, opacity: 1 }}
        leave={{ scale: 1, opacity: 0 }}
        native
      >
        {show =>
          show &&
          /* eslint-disable react/prop-types */
          (({ scale, opacity }) => (
            <Items
              style={{
                opacity,
                transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
              }}
            >
              {Array.from(uniqueItems).map((item, index) => (
                <Item
                  key={item.key || item}
                  ref={node => (refs.current[index] = node)}
                  index={index}
                  item={item}
                  itemButtonStyles={itemButtonStyles}
                  onHighlight={setHighlightedIndex}
                  onSelect={handleSelect}
                  selected={index === highlightedIndex}
                >
                  {renderItem(item, value)}
                </Item>
              ))}
            </Items>
          ))
        /* eslint-enable react/prop-types */
        }
      </Transition>
    </div>
  )
}

AutoComplete.propTypes = {
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string,
  wide: PropTypes.bool,
}

/* eslint-disable react/prop-types */
const Item = React.forwardRef(function Item(
  { children, index, item, itemButtonStyles, onHighlight, onSelect, selected },
  ref
) {
  const theme = useTheme()

  const handleClick = useCallback(
    event => {
      event.preventDefault()
      onSelect(item)
    },
    [item, onSelect]
  )

  const handleFocusOrMouseOver = useCallback(() => {
    onHighlight(index)
  }, [index, onHighlight])

  return (
    <li
      role="option"
      css={`
        overflow: hidden;
        cursor: pointer;
        ${unselectable()};
      `}
    >
      <ButtonBase
        ref={ref}
        onClick={handleClick}
        onFocus={handleFocusOrMouseOver}
        onMouseOver={handleFocusOrMouseOver}
        css={`
          text-align: left;
          padding: 4px 8px;
          width: 100%;
          border-radius: 0;
          border-left: 3px solid transparent;
          cursor: pointer;

          ${selected
            ? `
                outline: 2px solid ${theme.accent};
                background: ${theme.surfaceHighlight};
                border-left: 3px solid ${theme.accent};
              `
            : ''};
          ${itemButtonStyles};
        `}
      >
        {children}
      </ButtonBase>
    </li>
  )
})
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */
const Items = function Items(props) {
  const theme = useTheme()
  return (
    <animated.ul
      role="listbox"
      css={`
        position: absolute;
        z-index: 2;
        top: 100%;
        width: 100%;
        padding: 8px 0;
        color: ${theme.surfaceContent};
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
        border-radius: 3px;
        padding: 0;
        margin: 0;
        list-style: none;

        & > li:first-child {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
        & > li:last-child {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      `}
      {...props}
    />
  )
}
/* eslint-enable react/prop-types */

const AutoCompleteMemo = React.memo(AutoComplete)

export default React.forwardRef((props, ref) => (
  <AutoCompleteMemo {...props} forwardedRef={ref} />
))
