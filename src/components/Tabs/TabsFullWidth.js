import React, { useCallback, useEffect, useState } from 'react'
import { Transition, animated } from 'react-spring'
import { GU, textStyle, springs } from '../../style'
import { useOnBlur, useKeyDown } from '../../hooks'
import { IconDown } from '../../icons'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import { ButtonBase } from '../Button/ButtonBase'

const ESC_CODE = 27

// TabsFullWidth is an internal component
/* eslint-disable react/prop-types */

function TabsFullWidth({ items, selected, onChange }) {
  const theme = useTheme()
  const [insideSidePanel] = useInside('SidePanel')
  const [opened, setOpened] = useState(false)

  const selectedItem = items[selected]

  const close = useCallback(() => {
    setOpened(false)
  }, [])

  const toggle = useCallback(() => {
    setOpened(opened => !opened)
  }, [])

  const { handleBlur, ref } = useOnBlur(close)

  const change = useCallback(
    index => {
      onChange(index)
      close()
    },
    [onChange]
  )

  useEffect(() => {
    setOpened(false)
  }, [selectedItem])

  useKeyDown(ESC_CODE, () => {
    close()
  })

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
              background: ${theme.surfacePressed};
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
              padding: 0 ${2 * GU}px;
              color: ${theme.surfaceIcon};
              transition: transform 150ms ease-in-out;
              transform: rotate3d(0, 0, 1, ${opened ? 180 : 0}deg);
            `}
          >
            <IconDown />
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
                <Menu items={items} onChange={change} />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    </div>
  )
}

function Menu({ items, onChange }) {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
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
      key={index}
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
