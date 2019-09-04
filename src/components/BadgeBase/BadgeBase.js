import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'

const BadgeBase = React.memo(function BadgeBase({
  badgeOnly,
  buttonRef,
  children,
  className,
  compact,
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
  const localBadgeOnly = insideDropDownMenu || badgeOnly

  return (
    <React.Fragment>
      <ButtonBase
        ref={buttonRef}
        title={title}
        disabled={localBadgeOnly}
        element={localBadgeOnly ? 'a' : 'button'}
        onClick={!localBadgeOnly ? onClick : undefined}
        href={!localBadgeOnly ? href : undefined}
        focusRingRadius={RADIUS}
        css={`
          display: inline-flex;
          overflow: hidden;
          color: ${theme.badgeContent};
          height: ${3 * GU}px;
          &:active {
            ${compact ? `background: ${theme.badgePressed};` : ''};
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
        ? children({ badgeOnly: localBadgeOnly })
        : children}
    </React.Fragment>
  )
})
BadgeBase.propTypes = {
  badgeOnly: PropTypes.bool,
  buttonRef: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  compact: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  labelStyle: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
}
BadgeBase.defaultProps = {
  badgeOnly: false,
  compact: false,
}

export default BadgeBase
