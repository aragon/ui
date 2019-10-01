import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import { useClickOutside, useOnBlur, useArrowKeysFocus } from '../../hooks'
import { springs } from '../../style'
import { useTheme } from '../../theme'
import { unselectable, noop, identity } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'
import { SearchInput } from '../Input/SearchInput'
import { IconSearch } from '../../icons'

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
  const theme = useTheme()

  const ref = forwardedRef
  const uniqueItems = new Set(items)
  const [opened, setOpened] = useState(true)
  const wrapRef = useRef()
  const [refs] = useState([])

  const handleClose = useCallback(() => setOpened(false), [])
  const handleFocus = useCallback(() => setOpened(true), [])
  const handleSelect = useCallback(
    item => e => {
      e.preventDefault()
      onSelect(item)
      setOpened(false)
    },
    [onSelect]
  )

  const { handleBlur } = useOnBlur(handleClose, wrapRef)
  const { highlightedIndex, setHighlightedIndex } = useArrowKeysFocus(refs)
  useClickOutside(handleClose, wrapRef)
  useEffect(() => {
    setHighlightedIndex(-1)()
  }, [opened, items, value, setHighlightedIndex])

  return (
    <div css="position: relative" ref={wrapRef} onBlur={handleBlur}>
      <SearchInput
        ref={ref}
        wide={wide}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onFocus={handleFocus}
        value={value}
      />
      <Transition
        config={springs.swift}
        items={opened && !!items.length}
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
              role="listbox"
              style={{
                opacity,
                transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
              }}
              theme={theme}
            >
              {Array.from(uniqueItems).map((item, index) => (
                <Item role="option" key={item.key || item}>
                  <ButtonBase
                    ref={node => (refs[index] = node)}
                    onClick={handleSelect(item)}
                    onFocus={setHighlightedIndex(index)}
                    onMouseOver={setHighlightedIndex(index)}
                    css={`
                      text-align: left;
                      padding: 4px 8px;
                      width: 100%;
                      border-radius: 0;
                      border-left: 3px solid transparent;
                      cursor: pointer;

                      ${index === highlightedIndex &&
                        `
                          outline: 2px solid ${theme.accent};
                          background: #f9fafc;
                          border-left: 3px solid ${theme.accent};
                        `}
                      ${itemButtonStyles};
                    `}
                  >
                    {renderItem(item, value)}
                  </ButtonBase>
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

const Item = styled.li`
  ${unselectable()};
  overflow: hidden;
  cursor: pointer;
`

/* eslint-disable react/prop-types */
const Items = React.forwardRef(({ theme, ...props }, ref) => (
  <animated.ul
    ref={ref}
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

      & ${Item}:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
      & ${Item}:last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    `}
    {...props}
  />
))
/* eslint-enable react/prop-types */

const AutoCompleteMemo = React.memo(AutoComplete)

export default React.forwardRef((props, ref) => (
  <AutoCompleteMemo {...props} forwardedRef={ref} />
))
