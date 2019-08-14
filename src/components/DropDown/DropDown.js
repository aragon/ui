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
  displayedLabel,
  onChange,
  placeholder,
  selected,
}) {
  const [selectedLabel, setSelectedLabel] = useState(displayedLabel)
  const [opened, setOpened] = useState(false)

  const close = useCallback(() => {
    setOpened(false)

    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [])

  const toggle = useCallback(() => setOpened(opened => !opened), [])

  const handleItemSelect = useCallback(
    index => {
      onChange(index)
      close()
    },
    [onChange, close]
  )

  useEffect(() => {
    if (selected === -1 || !items[selected]) {
      if (displayedLabel) {
        setSelectedLabel(displayedLabel)
      }
      return
    }
    setSelectedLabel(items[selected])
  }, [items, selected, displayedLabel])

  return {
    handleItemSelect,
    close,
    toggle,
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

  // rest
  ...props
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
    if (selected !== undefined) {
      return selected
    }
    if (active !== undefined) {
      return active
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
  }, [vw])

  const {
    handleItemSelect,
    close,
    toggle,
    opened,
    selectedLabel,
  } = useDropDown({
    buttonRef,
    displayedLabel: placeholder || label,
    items,
    onChange,
    selected,
  })

  const closedWithChanges = !opened && selectedIndex !== -1
  const Label = renderLabel

  return (
    <React.Fragment>
      <ButtonBase
        ref={refCallback}
        disabled={disabled}
        onClick={toggle}
        focusRingRadius={RADIUS}
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
          ${disabled && 'font-weight: 600;'}
          ${!disabled &&
            `
              &:active {
                background: ${theme.surfacePressed};
              }
          `}
        `}
        {...props}
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
      <Popover visible={opened} onClose={close} opener={buttonRef.current}>
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
                  onSelect={handleItemSelect}
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
  onSelect,
  selected,
  theme,
}) {
  const handleClick = useCallback(() => {
    onSelect(index)
  }, [index, onSelect])

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
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
}

export default DropDown
