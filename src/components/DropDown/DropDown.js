import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { ButtonBase } from '../Button/ButtonBase'
import Popover from '../Popover/Popover'
import { IconDown } from '../../icons'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { warn, unselectable } from '../../utils'

function useDropDown({ items, selected, onChange, label }) {
  const buttonRef = useRef()
  const [selectedLabel, setSelectedLabel] = useState(label)
  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => {
    // if the popover is opened and the user clicks on the button
    // this handler was being called before the click handler, so the
    // click handler was re-opening the popover, by having this on the
    // next tick things happen in order.
    setTimeout(() => setOpened(false), 10)

    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [setOpened])
  const handleToggle = useCallback(() => setOpened(!opened), [
    setOpened,
    opened,
  ])
  const handleChange = useCallback(
    index => {
      onChange(index)
      handleClose()
      setSelectedLabel(items[index])
    },
    [onChange, handleClose, items, setSelectedLabel]
  )

  useEffect(() => {
    if (selected === -1 || !items[selected]) {
      return
    }
    setSelectedLabel(items[selected])
  }, [items, selected, setSelectedLabel])

  return {
    buttonRef,
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  }
}

const DropDown = React.memo(function DropDown({
  active,
  header,
  items,
  label,
  onChange,
  selected,
  width,
}) {
  if (active !== undefined && !DropDown._warned) {
    warn(
      'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.'
    )
    DropDown._warned = true
  }

  const selectedIndex = useMemo(() => {
    if (active !== undefined) {
      return active
    }
    if (selected !== undefined) {
      return selected
    }
    return -1
  }, [active, selected])

  const theme = useTheme()

  const {
    buttonRef,
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  } = useDropDown({
    selected,
    items,
    label,
    onChange,
  })
  const closedWithChanges = !opened && selectedIndex !== -1

  return (
    <React.Fragment>
      <Button
        ref={buttonRef}
        onClick={handleToggle}
        css={`
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 ${2 * GU}px;
          width: ${width};
          min-width: unset;
          ${closedWithChanges ? `border: 1px solid ${theme.accent}` : ''}
        `}
      >
        <span
          css={`
            color: ${theme.content};
            ${textStyle('body2')};
          `}
        >
          {selectedLabel}
        </span>
        <IconDown
          size="tiny"
          css={`
            margin-left: ${1 * GU}px;
            transition: transform 0.3s;
            transform: rotate3d(0, 0, 1, ${opened ? 180 : 0}deg);
            ${closedWithChanges ? `color: ${theme.accent}` : ''}
          `}
        />
      </Button>
      <Popover
        visible={opened}
        onClose={handleClose}
        opener={buttonRef.current}
        placement="bottom-start"
      >
        <div
          css={`
            width: calc(${width} - 2px);
            color: ${theme.surfaceContentSecondary};
          `}
        >
          {header && (
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
              return (
                <Item
                  key={index}
                  index={index}
                  onClick={handleChange}
                  theme={theme}
                  item={item}
                  header={header}
                  length={items.length}
                  selected={selectedIndex}
                />
              )
            })}
          </ul>
        </div>
      </Popover>
    </React.Fragment>
  )
})

DropDown.propTypes = {
  header: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.number,
  width: PropTypes.string,

  // deprecated
  active: PropTypes.number,
}

DropDown.defaultProps = {
  label: 'Select an item',
}

const Item = React.memo(function Item({
  header,
  index,
  item,
  length,
  onClick,
  selected,
  theme,
}) {
  const handleClick = useCallback(() => {
    onClick(index)
  }, [index, onClick])

  return (
    <li>
      <ButtonBase
        onClick={handleClick}
        css={`
          width: 100%;
          text-align: left;
          padding: ${1.25 * GU}px ${2 * GU}px;
          border-radius: 0;
          color: ${theme.content};

          ${textStyle('body2')};
          ${!header && index === 0 && `border-top-left-radius: ${RADIUS}px;`}
          ${index === length - 1 && `border-bottom-left-radius: ${RADIUS}px;`}
          ${selected === index &&
            `
              border-left: 2px solid ${theme.accent};
              background: ${theme.surfaceSelected};
            `}

          &:active {
            background: ${theme.surfacePressed};
          }
        `}
      >
        {item}
      </ButtonBase>
    </li>
  )
})

Item.propTypes = {
  header: PropTypes.node,
  index: PropTypes.number.isRequired,
  item: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
}

export default DropDown
