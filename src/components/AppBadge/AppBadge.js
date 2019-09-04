import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ImageExists } from '../../hooks'
import { GU, RADIUS } from '../../style'
import { isAddress, warn } from '../../utils'
import BadgeBase from '../BadgeBase/BadgeBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import { Tag } from '../Tag/Tag'
import AppBadgePopover from './AppBadgePopover'
import iconDefaultSvg from './assets/app-default.svg'

const IdentityBadge = React.memo(function IdentityBadge({
  appAddress,
  badgeOnly,
  compact,
  iconSrc,
  identifier,
  label,
  labelStyle,
  networkType,
  popoverAction,
  popoverTitle,
  ...props
}) {
  const badgeRef = useRef(null)
  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => setOpened(false), [])
  const handleOpen = useCallback(() => setOpened(true), [])

  const isValidAddress = isAddress(appAddress)
  if (!isValidAddress) {
    warn(`AppBadge: provided invalid app address (${appAddress})`)
  }

  popoverTitle = popoverTitle || (
    <div
      css={`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
      `}
    >
      <span
        css={`
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `}
      >
        {label}
      </span>
      {identifier && (
        <Tag
          mode="identifier"
          css={`
            margin-left: ${1 * GU}px;
          `}
        >
          {identifier}
        </Tag>
      )}
    </div>
  )

  return (
    <BadgeBase
      badgeRef={badgeRef}
      compact={compact}
      disabled={badgeOnly}
      icon={
        <ImageExists src={iconSrc}>
          {({ displayFallback, exists }) => (
            <Icon compact={compact} src={exists ? iconSrc : iconDefaultSvg} />
          )}
        </ImageExists>
      }
      label={label}
      labelStyle={labelStyle}
      onClick={isValidAddress ? handleOpen : undefined}
      title={appAddress}
    >
      {popoverDisabled =>
        !popoverDisabled &&
        appAddress && (
          <AppBadgePopover
            appAddress={appAddress}
            iconFallbackSrc={iconDefaultSvg}
            iconSrc={iconSrc}
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
  appAddress: PropTypes.string,
  badgeOnly: PropTypes.bool,
  compact: PropTypes.bool,
  iconSrc: PropTypes.string,
  identifier: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node,
}

const Icon = ({ compact, src }) => {
  const size = (compact ? 2.25 : 3) * GU
  return (
    <span
      css={`
        flex-shrink: 0;
        width: ${size}px;
        height: ${size}px;
        margin-right: ${1 * GU}px;
        border-radius: ${compact ? `${RADIUS}px` : 0};
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${src});
      `}
    />
  )
}
Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired,
}

export default IdentityBadge
