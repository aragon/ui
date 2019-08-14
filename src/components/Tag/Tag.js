import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'

const MODE_INDICATOR = 'indicator'
const MODE_IDENTIFIER = 'identifier'
const MODE_NEW = 'new'
const MODE_ACTIVITY = 'activity'

const SIZE_NORMAL = 'normal'
const SIZE_SMALL = 'small'

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

function useSize(size, { uppercase, discMode, iconAndLabel }) {
  if (size === SIZE_SMALL) {
    return `
      min-width: ${2 * GU}px;
      width: ${discMode ? `${2 * GU}px` : 'auto'};
      height: ${2 * GU}px;
      padding: ${discMode ? '0' : `0 ${0.5 * GU}px`};
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

function getLabel({ label, count, countDigits }) {
  return useMemo(() => {
    if (!count) {
      return label || ''
    }

    const parsed = parseInt(label, 10)

    if (isNaN(parsed)) {
      return label || ''
    }

    const max = Math.pow(10, countDigits) - 1
    const formatedValue = parsed >= max ? `${max}+` : parsed

    return formatedValue
  }, [label, count, countDigits])
}

function Tag({
  background,
  children,
  color,
  count,
  countDigits,
  icon,
  label,
  mode,
  size,
  uppercase,
  ...props
}) {
  const modeProps = useMode(mode)

  const finalSize = size || modeProps.size
  const finalLabel = getLabel({
    label: label || (!icon && children),
    count,
    countDigits,
  })

  const childrenOrLabel = children || finalLabel
  const singleChar =
    !icon && typeof childrenOrLabel === 'string' && childrenOrLabel.length < 2
  const iconOnly = icon && !finalLabel

  const sizeStyles = useSize(finalSize, {
    uppercase,
    discMode: iconOnly || singleChar,
    iconAndLabel: icon && finalLabel,
  })

  return (
    <span
      css={`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        ${sizeStyles};
        ${!uppercase && 'text-transform: unset'};
        color: ${color || modeProps.color};
        background: ${background || modeProps.background};
      `}
      {...props}
    >
      {children || (
        <React.Fragment>
          <span
            css={`
              display: flex;
              align-items: center;
              margin-top: ${finalSize === SIZE_NORMAL ? '-3px' : '0'};
            `}
          >
            {icon}
          </span>
          {icon && finalLabel && (
            <span
              css={`
                width: ${0.25 * GU}px;
              `}
            />
          )}
          {finalLabel}
        </React.Fragment>
      )}
    </span>
  )
}

Tag.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  count: PropTypes.bool,
  countDigits: PropTypes.number,
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
  countDigits: 2,
}

export { Tag }
