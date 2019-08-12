import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from '../Button/ButtonBase'
import Popover from '../Popover/Popover'
import { IconDown } from '../../icons'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { warnOnce, unselectable } from '../../utils'
import { useViewport } from '../../providers/Viewport/Viewport'

function useDropDown({
  buttonRef,
  items,
  label,
  onChange,
  placeholder,
  selected,
}) {
  const [selectedLabel, setSelectedLabel] = useState(placeholder || label)
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
    },
    [onChange, handleClose]
  )

  useEffect(() => {
    if (selected === -1 || !items[selected]) {
      if (placeholder || label) {
        setSelectedLabel(placeholder || label)
      }
      return
    }
    setSelectedLabel(items[selected])
  }, [items, selected, setSelectedLabel, label, placeholder])

  return {
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  }
}

function useButtonRef(cb) {
  const buttonRef = useRef(null)

  const refCallback = useCallback(
    el => {
      if (el) {
        cb(el)
      }
      buttonRef.current = el
    },
    [cb]
  )

  return {
    buttonRef,
    refCallback,
  }
}

const DropDown = React.memo(function DropDown({
  disabled,
  header,
  items,
  onChange,
  placeholder,
  renderLabel,
  selected,
  wide,
  width,

  // deprecated
  active,
  label,
}) {
  if (active !== undefined) {
    warnOnce(
      'DropDown:active',
      'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.'
    )
  }
  if (label !== undefined) {
    warnOnce(
      'DropDown:label',
      'DropDown: the “label” prop is deprecated, please use “placeholder” instead.'
    )
  }

  const theme = useTheme()

  const selectedIndex = useMemo(() => {
    if (active !== undefined) {
      return active
    }
    if (selected !== undefined) {
      return selected
    }
    return -1
  }, [active, selected])

  const [buttonWidth, setButtonWidth] = useState(0)

  const { refCallback, buttonRef } = useButtonRef(el => {
    // Update the button width every time the reference updates
    setButtonWidth(el.clientWidth)
  })

  // And every time the viewport resizes
  const { width: vw } = useViewport()
  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.clientWidth)
    }
  }, [vw, buttonRef])

  const {
    handleChange,
    handleClose,
    handleToggle,
    opened,
    selectedLabel,
  } = useDropDown({
    buttonRef,
    items,
    label,
    onChange,
    placeholder,
    selected,
  })

  const closedWithChanges = !opened && selectedIndex !== -1
  const Label = renderLabel

  return (
    <React.Fragment>
      <ButtonBase
        ref={refCallback}
        disabled={disabled}
        focusRingRadius={RADIUS}
        onClick={handleToggle}
        css={`
          display: ${wide ? 'flex' : 'inline-flex'};
          justify-content: space-between;
          align-items: center;
          height: ${5 * GU}px;
          padding: 0 ${2 * GU}px;
          width: ${width || (wide ? '100%' : 'auto')};
          background: ${disabled ? theme.disabled : theme.surface};
          color: ${disabled ? theme.disabledContent : theme.surfaceContent};
          border: ${disabled ? 0 : 1}px solid
            ${closedWithChanges ? theme.selected : theme.border};
          ${textStyle('body2')};

          ${!disabled &&
            `
              &:active {
                background: ${theme.surfacePressed};
              }
          `}
        `}
      >
        <Label selectedIndex={selectedIndex} selectedLabel={selectedLabel} />
        <IconDown
          size="tiny"
          css={`
            margin-left: ${1 * GU}px;
            color: ${closedWithChanges && !disabled ? theme.accent : 'inherit'};
          `}
        />
      </ButtonBase>
      <Popover
        visible={opened}
        onClose={handleClose}
        opener={buttonRef.current}
      >
        <div
          css={`
            min-width: ${buttonWidth}px;
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
  disabled: PropTypes.bool,
  header: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.node,
  renderLabel: PropTypes.func,
  selected: PropTypes.number,
  wide: PropTypes.bool,
  width: PropTypes.string,

  // deprecated
  active: PropTypes.number,
  label: PropTypes.string,
}

DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: ({ selectedLabel }) => selectedLabel,
  wide: false,
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
