import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { isAddress, shortenAddress, warnOnce } from '../../utils'
import BadgeBase from '../BadgeBase/BadgeBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import IdentityBadgePopover from './IdentityBadgePopover'

const IdentityBadge = React.memo(function IdentityBadge({
  compact,
  connectedAccount,
  entity,
  label,
  labelStyle,
  networkType,
  popoverAction,
  popoverTitle,
  shorten,

  // Deprecated
  customLabel,
  fontSize,

  ...props
}) {
  if (customLabel) {
    warnOnce(
      'IdentityBadge:customLabel',
      'The “customLabel” prop is deprecated. Please use “label” instead.'
    )
    label = label || customLabel
  }
  if (fontSize) {
    warnOnce(
      'IdentityBadge:fontSize',
      'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.'
    )
  }

  const badgeRef = useRef(null)
  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => setOpened(false), [])
  const handleOpen = useCallback(() => setOpened(true), [])

  const address = isAddress(entity) ? entity : null
  const displayLabel =
    label || (address && shorten ? shortenAddress(address) : entity)

  return (
    <BadgeBase
      badgeRef={badgeRef}
      compact={compact}
      icon={
        address && (
          <div
            css={`
              display: block;
              margin-right: ${1 * GU}px;
              ${compact
                ? `
                  position: relative;
                  top: -1px;
                `
                : ''};
            `}
          >
            <EthIdenticon
              scale={compact ? 0.75 : 1}
              radius={compact ? 2 : 0}
              address={address}
            />
          </div>
        )
      }
      label={displayLabel}
      labelStyle={`
        ${!label && address ? textStyle('address1') : ''}
        ${labelStyle}
      `}
      onClick={address ? handleOpen : undefined}
      title={address}
      {...props}
    >
      {badgeOnly =>
        !badgeOnly &&
        address && (
          <IdentityBadgePopover
            address={address}
            connectedAccount={connectedAccount}
            networkType={networkType}
            onClose={handleClose}
            opener={badgeRef.current}
            popoverAction={popoverAction}
            title={popoverTitle}
            visible={opened}
          />
        )
      }
    </BadgeBase>
  )
})
IdentityBadge.propTypes = {
  compact: PropTypes.bool,
  connectedAccount: PropTypes.bool,
  entity: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node,
  shorten: PropTypes.bool,

  // Deprecated
  customLabel: PropTypes.string,
  fontSize: PropTypes.string,
}
IdentityBadge.defaultProps = {
  entity: '',
  networkType: 'main',
  shorten: true,
}

export default IdentityBadge
