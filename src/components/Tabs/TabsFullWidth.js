import React, { useCallback, useRef, useState } from 'react'
import { Transition, animated } from 'react-spring'
import { useInside } from 'use-inside'
import { GU, textStyle, springs } from '../../style'
import { useOnBlur } from '../../hooks'
import { IconDown } from '../../icons'
import { useTheme } from '../../theme'
import { KEY_ESC } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'

// TabsFullWidth is an internal component
/* eslint-disable react/prop-types */

function TabsFullWidth({ items, selected, onChange }) {
  const theme = useTheme()
  const buttonRef = useRef(null)
  const [insideSidePanel] = useInside('SidePanel')
  const [opened, setOpened] = useState(false)

  const selectedItem = items[selected]
  const dropdownDisabled = items.length === 1

  const close = useCallback(() => setOpened(false), [])

  const focusButton = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [])

  const toggle = useCallback(() => {
    setOpened(opened => !opened)
  }, [])

  const change = useCallback(
    index => {
      if (index !== selected) {
        onChange(index)
        close()
        focusButton()
      }
    },
    [selected, onChange, close, focusButton]
  )

  const { handleBlur, ref } = useOnBlur(close)

  // close on escape
  const handleMenuKeyDown = useCallback(
    event => {
      if (event.keyCode === KEY_ESC) {
        close()
        focusButton()
      }
    },
    [close, focusButton]
  )

  return (
    <div
      ref={ref}
      onBlur={handleBlur}
      css={`
        padding-bottom: ${2 * GU}px;
      `}
    >
      <div
        css={`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: ${8 * GU}px;
        `}
      >
        <ButtonBase
          ref={buttonRef}
          disabled={dropdownDisabled}
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            background: ${theme.surface};
            border-style: solid;
            border-color: ${theme.border};
            border-top-width: ${insideSidePanel ? '0' : '1px'};
            border-bottom-width: 1px;
            border-radius: 0;
            ${textStyle('body2')};
            &:active {
              ${dropdownDisabled ? '' : `background: ${theme.surfacePressed};`}
            }
          `}
          onClick={toggle}
        >
          <div
            css={`
              padding-left: ${2 * GU}px;
            `}
          >
            {selectedItem}
          </div>
          <div
            css={`
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${7 * GU}px;
              height: 100%;
              color: ${theme.surfaceIcon};
            `}
          >
            <IconDown
              css={`
                transition: transform 150ms ease-in-out;
                transform: rotate3d(0, 0, 1, ${opened ? 180 : 0}deg);
                color: ${dropdownDisabled ? theme.disabled : theme.surfaceIcon};
              `}
            />
          </div>
        </ButtonBase>
        <Transition
          items={opened}
          config={springs.swift}
          from={{ y: -1, opacity: 0 }}
          enter={{ y: 0, opacity: 1 }}
          leave={{ y: -1, opacity: 0 }}
          native
        >
          {opened =>
            opened &&
            (({ opacity, y }) => (
              <animated.div
                css={`
                  position: absolute;
                  z-index: 9; // TODO: use <Root>
                  top: ${8 * GU}px;
                  left: 0;
                  right: 0;
                  border-bottom: 1px solid ${theme.border};
                  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
                  background: ${theme.surface};
                `}
                style={{
                  opacity: opacity,
                  transform: y.interpolate(
                    v => `translate3d(0, ${v * 4}px, 0)`
                  ),
                }}
              >
                <Menu
                  items={items}
                  onChange={change}
                  onKeyDown={handleMenuKeyDown}
                />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    </div>
  )
}

function Menu({ items, onChange, ...props }) {
  const handleRef = useCallback(element => {
    if (element) {
      element.focus()
    }
  }, [])

  return (
    <div
      ref={handleRef}
      tabIndex="0"
      {...props}
      css={`
        display: flex;
        flex-direction: column;
        outline: 0;
      `}
    >
      {items.map((item, index) => (
        <MenuItem key={index} item={item} index={index} onChange={onChange} />
      ))}
    </div>
  )
}

function MenuItem({ item, index, onChange }) {
  const theme = useTheme()

  const change = useCallback(() => {
    onChange(index)
  }, [onChange, index])

  return (
    <ButtonBase
      onClick={change}
      css={`
        height: ${8 * GU}px;
        padding-left: ${2 * GU}px;
        text-align: left;
        ${textStyle('body2')};
        &:active {
          background: ${theme.surfacePressed};
        }
      `}
    >
      {item}
    </ButtonBase>
  )
}

export { TabsFullWidth }
