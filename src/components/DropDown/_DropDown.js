import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonBase, Popover } from '../'
import { IconDown } from '../../icons'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'

function useDropDown({ items, activeIndex, onChange, label }) {
  const containerRef = useRef()
  const [selectedLabel, setSelectedLabel] = useState(label)
  const [opened, setOpened] = useState(false)
  const handleClose = () => {
    // if the popover is opened and the user clicks on the button
    // this handler was being called before the click handler, so the
    // click handler was re-opening the popover, by having this on the
    // next tick things happen in order.
    setTimeout(() => setOpened(false), 10)
  }
  const handleToggle = () => setOpened(!opened)
  const handleChange = index => () => {
    onChange(index)
    handleClose()
  }

  useEffect(() => {
    if (activeIndex === -1 || !items[activeIndex]) {
      return
    }
    setSelectedLabel(items[activeIndex])
  }, [items, activeIndex])

  return {
    containerRef,
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  }
}

function DropDown({ activeIndex, items, label, header, onChange, width }) {
  const {
    accent,
    content,
    surfaceContentSecondary,
    surfacePressed,
    surfaceSelected,
  } = useTheme()
  const {
    containerRef,
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  } = useDropDown({
    activeIndex,
    items,
    label,
    onChange,
  })
  const closedWithChanges = !opened && activeIndex !== -1

  return (
    <div ref={containerRef}>
      <Button
        onClick={handleToggle}
        css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 ${2 * GU}px;
          width: ${width};
          min-width: unset;
          ${closedWithChanges ? `border: 1px solid ${accent}` : ''}
        `}
      >
        <span
          css={`
            color: ${content};
            ${textStyle('body2')};
          `}
        >
          {selectedLabel}
        </span>
        <IconDown
          size="tiny"
          css={`
            transition: transform 0.3s;
            transform: rotate3d(0, 0, 1, ${opened ? 180 : 0}deg);
            ${closedWithChanges ? `color: ${accent}` : ''}
          `}
        />
      </Button>
      <Popover
        visible={opened}
        onClose={handleClose}
        opener={containerRef.current}
        placement="bottom-start"
      >
        <div
          css={`
            width: calc(${width} - 2px);
            color: ${surfaceContentSecondary};
          `}
        >
          {!!header && (
            <div
              css={`
                padding: ${1.5 * GU}px ${2 * GU}px ${1.25 * GU}px;
                ${textStyle('label2')};
                ${unselectable};
              `}
            >
              {header}
            </div>
          )}
          <ul
            css={`
              margin: 0;
              list-style: none;
              width: 100%;
            `}
          >
            {items.map((item, index) => {
              const handleChangeWithIndex = handleChange(index)

              return (
                <li key={item}>
                  <ButtonBase
                    onClick={handleChangeWithIndex}
                    css={`
                      width: 100%;
                      text-align: left;
                      padding: ${1.25 * GU}px ${2 * GU}px;
                      border-radius: 0;
                      color: ${content};
                      ${textStyle('body2')};
                      ${!header &&
                        index === 0 &&
                        `border-top-left-radius: ${RADIUS}px;`}
                      ${index === items.length - 1 &&
                        `border-bottom-left-radius: ${RADIUS}px;`}
                      ${activeIndex === index &&
                        `
                          border-left: 2px solid ${accent};
                          background: ${surfaceSelected};
                        `}

                      &:active {
                        background: ${surfacePressed};
                      }
                    `}
                  >
                    {item}
                  </ButtonBase>
                </li>
              )
            })}
          </ul>
        </div>
      </Popover>
    </div>
  )
}

DropDown.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  header: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
}

export default DropDown
