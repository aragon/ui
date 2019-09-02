import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { isAddress, shortenAddress, warnOnce } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import IdentityBadgePopover from './IdentityBadgePopover'
import PopoverActionType from './PopoverActionType'

const IdentityBadge = React.memo(function IdentityBadge({
  badgeOnly,
  className,
  compact,
  connectedAccount,
  customLabel,
  entity,
  labelStyle,
  networkType,
  popoverAction,
  popoverTitle,
  shorten,
  style,

  // Deprecated
  fontSize,
}) {
  if (fontSize) {
    warnOnce(
      'IdentityBadge:fontSize',
      'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.'
    )
  }

  const theme = useTheme()
  const elementRef = useRef(null)

  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])
  const handleOpen = useCallback(() => {
    setOpened(true)
  }, [])

  const address = isAddress(entity) ? entity : null
  const label =
    customLabel || (address && shorten ? shortenAddress(address) : entity)

  return (
    <React.Fragment>
      <ButtonBase
        ref={elementRef}
        title={address}
        disabled={badgeOnly}
        onClick={address && !badgeOnly ? handleOpen : undefined}
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
                padding-left: ${1 * GU}px;
                border-radius: 2px;
              `
              : `
                background: ${theme.badge};
                border-radius: ${RADIUS}px;
              `};
            text-decoration: none;
          `}
          className={className}
          style={style}
        >
          {address && (
            <div
              css={`
                display: block;
                ${compact ? 'position: relative; top: -1px;' : ''};
              `}
            >
              <EthIdenticon
                scale={compact ? 0.75 : 1}
                radius={compact ? 2 : 0}
                address={address}
              />
            </div>
          )}
          <span
            css={`
              padding: 0 ${(address ? 1 : 1.5) * GU}px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              ${textStyle(!customLabel && address ? 'address1' : 'body2')}
              ${labelStyle}
            `}
          >
            {label}
          </span>
        </div>
      </ButtonBase>
      {address && !badgeOnly && (
        <IdentityBadgePopover
          address={address}
          visible={opened}
          connectedAccount={connectedAccount}
          networkType={networkType}
          opener={elementRef.current}
          onClose={handleClose}
          popoverAction={popoverAction}
          title={popoverTitle}
        />
      )}
    </React.Fragment>
  )
})
IdentityBadge.propTypes = {
  badgeOnly: PropTypes.bool,
  className: PropTypes.string,
  compact: PropTypes.bool,
  connectedAccount: PropTypes.bool,
  customLabel: PropTypes.string,
  entity: PropTypes.string,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: PopoverActionType,
  popoverTitle: PropTypes.node,
  shorten: PropTypes.bool,
  style: PropTypes.object,

  // Deprecated
  fontSize: PropTypes.string,
}
IdentityBadge.defaultProps = {
  entity: '',
  shorten: true,
  networkType: 'main',
  connectedAccount: false,
  compact: false,
  badgeOnly: false,
}

export default IdentityBadge
