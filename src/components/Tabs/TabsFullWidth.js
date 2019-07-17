import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Transition, animated } from 'react-spring'
import { GU, textStyle, springs } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from '../Button/ButtonBase'
import { IconDown } from '../../icons'
import { useKeyDown } from '../../hooks'

const ESC_CODE = 27

function TabsFullWidth({ items, selected, onChange }) {
  const theme = useTheme()
  const [opened, setOpened] = useState(false)
  const el = useRef(null)

  const selectedItem = items[selected]

  const close = useCallback(() => {
    setOpened(false)
  }, [])

  const toggle = useCallback(() => {
    setOpened(opened => !opened)
  }, [])

  const blur = useCallback(event => {
    if (!el.current.contains(event.relatedTarget)) {
      close()
    }
  }, [])

  useEffect(() => {
    setOpened(false)
  }, [selectedItem])

  useKeyDown(ESC_CODE, () => {
    close()
  })

  return (
    <div
      ref={el}
      onBlur={blur}
      css={`
        padding-bottom: ${2 * GU}px;
      `}
    >
      <div
        css={`
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: ${8 * GU}px;
        `}
      >
        <ButtonBase
          css={`
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            background: ${theme.surface};
            border-style: solid;
            border-color: ${theme.border};
            border-width: 1px 0;
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
                  z-index: 1;
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
                <Menu items={items} onChange={onChange} />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    </div>
  )
}

function Menu({ items, onChange }) {
  const theme = useTheme()
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
