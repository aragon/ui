import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import { unselectable } from '../../utils'

const MODE_INDICATOR = 'indicator'
const MODE_IDENTIFIER = 'identifier'
const MODE_NEW = 'new'
const MODE_ACTIVITY = 'activity'

const SIZE_NORMAL = 'normal'
const SIZE_SMALL = 'small'

const COUNT_DEFAULT = 2

function useMode(mode) {
  const theme = useTheme()

  if (mode === MODE_IDENTIFIER) {
    return {
      background: theme.tagIdentifier.alpha(0.16),
      color: theme.tagIdentifierContent,
      size: SIZE_NORMAL,
    }
  }

  if (mode === MODE_NEW) {
    return {
      background: theme.tagNew.alpha(0.16),
      color: theme.tagNewContent,
      size: SIZE_NORMAL,
    }
  }

  if (mode === MODE_ACTIVITY) {
    return {
      background: theme.tagActivity,
      color: theme.tagActivityContent,
      size: SIZE_SMALL,
    }
  }

  // mode === MODE_INDICATOR (default)
  return {
    background: theme.tagIndicator,
    color: theme.tagIndicatorContent,
    size: SIZE_NORMAL,
  }
}

function getSize(size, { uppercase, discMode, iconAndLabel }) {
  if (size === SIZE_SMALL) {
    return `
      min-width: ${2 * GU}px;
      width: ${discMode ? `${2 * GU}px` : 'auto'};
      height: ${2 * GU}px;
      padding: ${discMode ? '0' : `0 ${0.5 * GU}px`};
      padding-top: ${uppercase ? '0.5px' : 0};
      border-radius: ${2 * GU}px;
      ${textStyle('label3')};
      font-weight: 600;
    `
  }

  // normal
  return `
    min-width: ${3 * GU}px;
    width: ${discMode ? `${3 * GU}px` : 'auto'};
    height: ${3 * GU}px;
    padding: ${discMode ? '0' : `0 ${1.5 * GU}px`} ;
    padding-top: ${uppercase ? '1.5px' : 0};
    ${iconAndLabel ? `padding-left: ${1.25 * GU}px` : ''};
    border-radius: ${3 * GU}px;
    ${textStyle('label2')};
    font-weight: 600;
  `
}

function useLabel({ label, limitDigits }) {
  const finalLabel = useMemo(() => {
    if (limitDigits === false) {
      return label || ''
    }

    const digits = typeof limitDigits === 'number' ? limitDigits : COUNT_DEFAULT
    const parsed = parseInt(label, 10)

    if (isNaN(parsed)) {
      return label || ''
    }

    const max = Math.pow(10, digits) - 1
    const formatedValue = parsed >= max ? `${max}+` : parsed

    return formatedValue
  }, [label, limitDigits])

  // Always convert to a string so we can check the length
  return String(finalLabel)
}

function Tag({
  background,
  children,
  color,
  limitDigits,
  icon,
  label,
  mode,
  size,
  uppercase,
  ...props
}) {
  if ((icon || label) && children) {
    throw new Error('Tag: you cannot use icon or label with children.')
  }

  const modeProps = useMode(mode)

  const finalSize = size || modeProps.size
  const finalLabel = useLabel({ label: label || children, limitDigits })

  const sizeStyles = getSize(finalSize, {
    uppercase,
    discMode:
      // icon only
      (icon && !finalLabel) ||
      // label only, using 1 or 0 chars
      (!icon && typeof finalLabel === 'string' && finalLabel.length < 2),
    iconAndLabel: icon && finalLabel,
  })

  // Slightly tweak the alignment when there are no descenders,
  // to make the characters look more aligned.
  const alignmentCorrection =
    finalSize === SIZE_NORMAL &&
    (uppercase || typeof label === 'number' || limitDigits !== false)

  return (
    <span
      css={`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        ${sizeStyles};
        ${!uppercase ? 'text-transform: unset' : ''};
        color: ${color || modeProps.color};
        background: ${background || modeProps.background};
        ${unselectable};
      `}
      {...props}
    >
      {icon && (
        <span
          css={`
            display: flex;
            align-items: center;
            margin-right: ${finalLabel ? 0.25 * GU : 0}px;
          `}
        >
          {icon}
        </span>
      )}
      <span
        css={`
          margin-top: ${alignmentCorrection ? '1px' : '0'};
        `}
      >
        {finalLabel}
      </span>
    </span>
  )
}

Tag.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  limitDigits: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.number]),
  mode: PropTypes.oneOf([
    MODE_IDENTIFIER,
    MODE_NEW,
    MODE_INDICATOR,
    MODE_ACTIVITY,
  ]),
  size: PropTypes.oneOf([SIZE_NORMAL, SIZE_SMALL]),
  uppercase: PropTypes.bool,
}

Tag.defaultProps = {
  uppercase: true,
  limitDigits: false,
}

export { Tag }
