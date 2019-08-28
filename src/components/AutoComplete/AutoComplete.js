import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import { unselectable, noop, identity } from '../../utils'
import { springs } from '../../style'
import { theme } from '../../theme-legacy'
import { useClickOutside, useOnBlur, useArrowKeysFocus } from '../../hooks'
import ButtonBase from '../ButtonBase/ButtonBase'
import TextInput from '../Input/TextInput'
import { IconSearch } from '../../icons'

const { accent, contentBackground, contentBorder, textPrimary } = theme

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
  const [refs] = useState([])

  const handleClose = useCallback(() => setOpened(false), [])
  const handleFocus = useCallback(() => setOpened(true), [])
  const handleSelect = useCallback(
    item => e => {
      e.preventDefault()
      onSelect(item)
    },
    [onSelect]
  )
  const handleChange = useCallback(({ target: { value } }) => onChange(value), [
    onChange,
  ])

  const { handleBlur } = useOnBlur(handleClose, wrapRef)
  const { highlightedIndex, setHighlightedIndex } = useArrowKeysFocus(refs)
  const reset = setHighlightedIndex(-1)
  const { ref: containerRef, handleBlur: handleResetBlur } = useOnBlur(reset)
  useEffect(() => {
    reset()
  }, [opened, items, value])
  useClickOutside(handleClose, wrapRef)

  return (
    <div css="position: relative" ref={wrapRef} onBlur={handleBlur}>
      <TextInput
        css={`
          caret-color: ${accent};
          padding-right: 35px;
        `}
        ref={ref}
        wide={wide}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        value={value}
      />
      <div
        css={`
          position: absolute;
          top: 0;
          right: 0;
          height: 40px;
          width: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <IconSearch css="color: #a8b3c8" />
      </div>
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
              ref={containerRef}
              onBlur={handleResetBlur}
              role="listbox"
              style={{
                opacity,
                transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
              }}
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

const Items = styled(animated.ul)`
  position: absolute;
  z-index: 2;
  top: 100%;
  width: 100%;
  padding: 8px 0;
  color: ${textPrimary};
  background: ${contentBackground};
  border: 1px solid ${contentBorder};
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
`

const AutoCompleteMemo = React.memo(AutoComplete)

export default React.forwardRef((props, ref) => (
  <AutoCompleteMemo {...props} forwardedRef={ref} />
))
