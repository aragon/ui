import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { RADIUS, GU, font, unselectable, noop } from '../../utils'
import { useTheme } from '../../theme'
import { InAppBarContext } from '../AppView/AppBar'
import { Bar, useInsideBar } from '../Bar/Bar'
import TabBarLegacy from './TabBarLegacy'

function TabBar({ items, selected, onChange }) {
  const [displayFocusRing, setDisplayFocusRing] = useState(false)
  const { insideBar, insideBarPrimary, insideBarSecondary } = useInsideBar()
  const barRef = useRef(null)
  const theme = useTheme()

  const selectElement = useCallback(
    element => {
      if (!element || !barRef.current) {
        return
      }

      const index = [...barRef.current.childNodes].indexOf(element)
      if (index > -1) {
        onChange(index)
      }
    },
    [onChange, barRef]
  )

  const handleMouseDown = useCallback(() => {
    setDisplayFocusRing(false)
  }, [])

  const handleTabMouseDown = useCallback(
    ({ currentTarget }) => {
      // We would usually avoid using the DOM when possible, and prefer using a
      // separate component (`Tab`) to keep the `index` in a prop, then pass it
      // using an event prop. But since `selectElement()` is needed (so we can
      // pass `document.activeElement` to it for the keyboard), and we have
      // `e.currentTarget` in the event object, we might as well use it for the
      // pointer device too.
      selectElement(currentTarget)
    },
    [selectElement]
  )

  useEffect(() => {
    const handleKeydown = ({ key }) => {
      if (key === 'Enter') {
        selectElement(document.activeElement)
        setDisplayFocusRing(true)
      }
      if (key === 'Tab') {
        setDisplayFocusRing(true)
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [selectElement])

  return (
    <nav onMouseDown={handleMouseDown}>
      <ul
        ref={barRef}
        css={`
          display: flex;
          border-bottom: ${!insideBar ? `1px solid ${theme.border}` : '0'};
          margin-left: ${insideBarPrimary ? -Bar.PADDING - 1 : 0}px;
          margin-right: ${insideBarSecondary ? -Bar.PADDING - 1 : 0}px;
        `}
      >
        {items.map((item, i) => (
          <li
            key={i}
            tabIndex="0"
            role="button"
            onMouseDown={handleTabMouseDown}
            css={`
              position: relative;
              list-style: none;
              padding: ${insideBar ? '0' : '0 30px'};
              transition: background 50ms ease-in-out;
              ${font({
                size: 'large',
                weight: 'normal',
              })};
              ${unselectable()};
              &:focus {
                outline: 0;
              }
              &:hover {
                background: ${theme.surfaceHighlight};
              }
              &:focus .focus-ring {
                display: block;
              }
              cursor: pointer;
            `}
          >
            <span
              css={`
                display: flex;
                position: relative;
                align-items: center;
                height: ${insideBar ? `${8 * GU - 2}px` : 'auto'};
                padding: 0 ${3 * GU}px;
                white-space: nowrap;
                color: ${i === selected
                  ? theme.surfaceContent
                  : theme.surfaceContentSecondary};
              `}
            >
              {item}
              <span
                css={`
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: ${theme.selected};
                  height: 2px;
                  opacity: ${Number(i === selected)};
                  transition-property: transform, opacity;
                  transition-duration: 150ms;
                  transition-timing-function: ease-in-out;
                  transform: scale3d(1, ${i === selected ? 1 : 0}, 1);
                  transform-origin: 0 100%;
                `}
              />
            </span>
            {displayFocusRing && (
              <span
                css={`
                  position: absolute;
                  top: 0;
                  left: ${insideBar && !insideBarSecondary && i === 0
                    ? '1px'
                    : '0'};
                  right: ${insideBarSecondary && i === items.length - 1
                    ? '1px'
                    : '0'};
                  bottom: 0;
                `}
              >
                <FocusRing />
              </span>
            )}
          </li>
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

function FocusRing() {
  const theme = useTheme()
  return (
    <span
      className="focus-ring"
      css={`
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid ${theme.focus};
        border-radius: ${RADIUS}px;
      `}
    />
  )
}

export default props => {
  return (
    <InAppBarContext.Consumer>
      {inAppBar =>
        inAppBar ? (
          // Use a separate component for TabBar in AppBar, to prevent breaking anything.
          <TabBarLegacy {...props} inAppBar />
        ) : (
          <TabBar {...props} />
        )
      }
    </InAppBarContext.Consumer>
  )
}
