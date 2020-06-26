import React from 'react'
import PropTypes from 'prop-types'
import { useInside } from 'use-inside'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import ButtonBase from '../ButtonBase/ButtonBase'

const BadgeBase = React.memo(function BadgeBase({
  badgeRef,
  children,
  className,
  compact,
  disabled,
  href,
  icon,
  label,
  labelStyle,
  onClick,
  style,
  title,
  ...props
}) {
  const theme = useTheme()
  const [insideDropDownMenu] = useInside('DropDown')

  if (insideDropDownMenu) {
    disabled = true
  }

  return (
    <React.Fragment>
      <ButtonBase
        ref={badgeRef}
        title={title}
        disabled={disabled}
        element={href || disabled ? 'a' : 'button'}
        onClick={!disabled ? onClick : undefined}
        href={!disabled ? href : undefined}
        focusRingRadius={RADIUS}
        css={`
          display: inline-flex;
          overflow: hidden;
          color: ${theme.badgeContent};
          height: ${3 * GU}px;
          background: ${compact ? 'transparent' : theme.badge};
          ${insideDropDownMenu ? 'cursor: pointer' : ''};

          &:active {
            ${!disabled && compact ? `background: ${theme.badgePressed}` : ''};
          }
          border-radius: ${RADIUS}px;
        `}
      >
        <div
          css={`
            overflow: hidden;
            display: flex;
            align-items: center;
            text-decoration: none;
            ${compact
              ? `
                  padding: 0 ${1 * GU}px;
                  border-radius: 2px;
                `
              : `
                  padding-left: ${(icon ? 0 : 1.5) * GU}px;
                  padding-right: ${(icon ? 1 : 1.5) * GU}px;
                  border-radius: ${RADIUS}px;
                `};
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
        ? children(disabled) // whether popover is disabled
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
