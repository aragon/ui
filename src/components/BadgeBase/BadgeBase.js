import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'

const BadgeBase = React.memo(function BadgeBase({
  badgeRef,
  children,
  className,
  compact,
  disabled,
  icon,
  href,
  label,
  labelStyle,
  onClick,
  style,
  title,
  ...props
}) {
  const theme = useTheme()
  const [insideDropDownMenu] = useInside('DropDown')
  const isDisabled = disabled || insideDropDownMenu

  return (
    <React.Fragment>
      <ButtonBase
        ref={badgeRef}
        title={title}
        disabled={isDisabled}
        element={href || insideDropDownMenu || isDisabled ? 'a' : 'button'}
        onClick={!isDisabled ? onClick : undefined}
        href={!isDisabled ? href : undefined}
        focusRingRadius={RADIUS}
        css={`
          display: inline-flex;
          overflow: hidden;
          color: ${theme.badgeContent};
          height: ${3 * GU}px;
          ${insideDropDownMenu ? 'cursor: pointer;' : ''}
          &:active {
            ${compact && !isDisabled
              ? `background: ${theme.badgePressed};`
              : ''};
          }
        `}
      >
        <div
          css={`
            overflow: hidden;
            display: flex;
            align-items: center;
            ${compact
              ? `
                padding: 0 ${1 * GU}px;
                border-radius: 2px;
              `
              : `
                padding-left: ${(icon ? 0 : 1.5) * GU}px;
                padding-right: ${(icon ? 1 : 1.5) * GU}px;
                background: ${theme.badge};
                border-radius: ${RADIUS}px;
              `};
            text-decoration: none;
          `}
          className={className}
          style={style}
        >
          {icon}
          <span
            css={`
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              ${textStyle('body2')}
              ${labelStyle}
            `}
          >
            {label}
          </span>
        </div>
      </ButtonBase>
      {typeof children === 'function'
        ? children(isDisabled) // whether popover is disabled
        : children}
    </React.Fragment>
  )
})
BadgeBase.propTypes = {
  badgeRef: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  labelStyle: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
}

export default BadgeBase
