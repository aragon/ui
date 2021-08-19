import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { warnOnce, unselectable } from '../../utils'
import { GU, RADII, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { IconDown } from '../../icons'
import { useViewport } from '../../providers/Viewport/Viewport'
import ButtonBase from '../ButtonBase/ButtonBase'
import Popover from '../Popover/Popover'

// const MIN_WIDTH = 128

const borderColor = (theme, status) => {
  switch (status) {
    case 'error':
      return theme.red
    case 'success':
      return theme.green
    default:
      return theme.border
  }
}

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
  }, [buttonRef])

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
  placement,
  gap,
  status,
  error,
  shadow,
  iconOnly,

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
  const { width: vw } = useViewport()

  // const [widthNoPx = MIN_WIDTH] = (width || '').split('px')
  const [buttonWidth, setButtonWidth] = useState(0)
  const [measureWidth, setMeasureWidth] = useState(true)

  // Adjust the button width if the item widths are larger than declared width
  // const [placeholderMinWidth, setPlaceholderMinWidth] = useState(
  //   Math.min(widthNoPx, MIN_WIDTH)
  // )
  const popoverRefCallback = useCallback(el => {
    if (!el) {
      return
    }
    // setPlaceholderMinWidth(el.clientWidth)
    setMeasureWidth(false)
  }, [])
  useEffect(() => {
    setMeasureWidth(true)
  }, [vw, items])

  // Update the button width every time the reference updates
  const { refCallback, buttonRef } = useButtonRef(el => {
    setButtonWidth(el.clientWidth)
  })
  // And every time the viewport resizes
  useEffect(() => {
    if (!buttonRef.current) {
      return
    }
    setButtonWidth(buttonRef.current.clientWidth)
  }, [buttonRef, vw])

  const selectedIndex = useMemo(() => {
    if (selected !== undefined) {
      return selected
    }
    if (active !== undefined) {
      return active
    }
    return -1
  }, [active, selected])

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

  // const closedWithChanges = !opened && selectedIndex !== -1
  const Label = renderLabel

  return (
    <Inside name="DropDown">
      <ButtonBase
        ref={refCallback}
        disabled={disabled}
        onClick={toggle}
        focusRingRadius={RADII['small']}
        focusRingSpacing={1}
        showFocusRing={false}
        css={`
          display: ${wide ? 'flex' : 'inline-flex'};
          justify-content: space-between;
          align-items: center;
          height: ${5.75 * GU}px;
          padding-left: ${1.5 * GU}px;
          padding-right: ${1.5 * GU}px;
          width: ${width || (wide ? '100%' : 'auto')};
          background: ${disabled ? theme.surfaceUnder : theme.surface};
          color: ${disabled ? theme.disabledContent : theme.surfaceContent};
          border: ${disabled ? 0 : 2}px solid ${borderColor(theme, status)};
          ${shadow ? `box-shadow: 0px 3px 3px rgba(180, 193, 228, 0.35);` : ''}
          ${textStyle('title4')};
          font-weight: 500;
          ${disabled
            ? 'font-weight: 600;'
            : `
              &:active {
                background: ${theme.surfacePressed};
              }
            `}
        `}
        {...props}
      >
        {!iconOnly ? (
          <div css="overflow: hidden;">
            <Label
              selectedIndex={selectedIndex}
              selectedLabel={selectedLabel}
            />
          </div>
        ) : (
          ''
        )}
        <IconDown
          size="small"
          css={`
            ${!iconOnly ? `margin-left: ${1.5 * GU}px;` : ''}
            color: ${disabled ? theme.disabledIcon : theme.accentEnd};
          `}
        />
      </ButtonBase>
      {error && (
        <div
          css={`
            color: ${theme.red};
            ${textStyle('body3')};
            margin-left: ${1 * GU}px;
          `}
        >
          {error}
        </div>
      )}
      {measureWidth && (
        <div
          css={`
            position: absolute;
            top: -100vh;
            left: -100vw;
            opacity: 0;
            visibility: hidden;
          `}
        >
          <PopoverContent
            refCallback={popoverRefCallback}
            buttonWidth={buttonWidth}
            header={header}
            items={items}
          />
        </div>
      )}
      <Popover
        onClose={close}
        opener={buttonRef.current}
        visible={opened}
        placement={placement}
        gap={gap}
      >
        <PopoverContent
          buttonWidth={buttonWidth}
          header={header}
          items={items}
          handleItemSelect={handleItemSelect}
          selectedIndex={selectedIndex}
        />
      </Popover>
    </Inside>
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
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  gap: PropTypes.number,
  status: PropTypes.oneOf(['normal', 'success', 'error']),
  error: PropTypes.string,
  shadow: PropTypes.bool,
  iconOnly: PropTypes.bool,

  // deprecated
  active: PropTypes.number,
  label: PropTypes.string,
}

DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: ({ selectedLabel }) => selectedLabel,
  wide: false,
  placement: 'bottom',
  gap: 6,
  status: 'normal',
  error: '',
  shadow: false,
  iconOnly: false,
}

const PopoverContent = React.memo(function PopoverContent({
  refCallback,
  buttonWidth,
  header,
  items,
  handleItemSelect,
  selectedIndex,
}) {
  const theme = useTheme()
  return (
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
        ref={refCallback}
        css={`
          margin: 0;
          padding: 0;
          list-style: none;
          width: 100%;
        `}
      >
        <Inside name="DropDown:menu">
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
        </Inside>
      </ul>
    </div>
  )
})

PopoverContent.propTypes = {
  refCallback: PropTypes.func.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  header: PropTypes.node,
  items: PropTypes.array.isRequired,
  handleItemSelect: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
}

PopoverContent.defaultProps = {
  refCallback: () => null,
  handleItemSelect: () => null,
  selectedIndex: -1,
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
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;

          ${textStyle('body2')};
          ${
            !header && index === 0
              ? `border-top-left-radius: ${RADII['small']}px;`
              : ''
          }
          ${
            index === length - 1
              ? `border-bottom-left-radius: ${RADII['small']}px;`
              : ''
          }
          ${
            selected === index
              ? `
              background: ${theme.surfaceSelected};
            `
              : ''
          }

          &:active {
            background: ${theme.surfacePressed};
          }

          &:hover {
            background: ${theme.surfaceUnder};
            ${
              index === 0 && header
                ? `border-top: 1px solid ${theme.disabled};`
                : index !== 0
                ? `border-top: 1px solid ${theme.disabled};`
                : ''
            }
            ${index !== length - 1 &&
              `border-bottom: 1px solid ${theme.disabled};`}
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
