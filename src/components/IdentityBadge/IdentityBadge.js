import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { isAddress, monospace, shortenAddress } from '../../utils'
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
  fontSize,
  networkType,
  popoverAction,
  popoverTitle,
  shorten,
  style,
}) {
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
          color: ${theme.textPrimary};
          height: ${3 * GU}px;
          &:active {
            ${compact ? 'background: rgba(220, 234, 239, 0.3);' : ''};
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
                margin-right: -3px;
                ${compact ? 'position: relative; top: -1px;' : ''};
              `}
            >
              <EthIdenticon
                scale={compact ? 0.58 : 1}
                radius={compact ? 2 : 0}
                address={address}
              />
            </div>
          )}
          <span
            css={`
              padding: 0 ${1 * GU}px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              ${textStyle('body2')}
              ${!customLabel && address ? monospace : ''}
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
  fontSize: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: PopoverActionType,
  popoverTitle: PropTypes.node,
  shorten: PropTypes.bool,
  style: PropTypes.object,
}
IdentityBadge.defaultProps = {
  entity: '',
  shorten: true,
  fontSize: 'normal',
  networkType: 'main',
  connectedAccount: false,
  compact: false,
  badgeOnly: false,
}

export default IdentityBadge
