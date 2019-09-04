import React from 'react'
import PropTypes from 'prop-types'
import { ImageExists } from '../../hooks'
import { GU } from '../../style'
import { blockExplorerUrl } from '../../utils'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import Link from '../Link/Link'

const AppBadgePopover = React.memo(function AppBadgePopover({
  appAddress,
  iconFallbackSrc,
  iconSrc,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
  const etherscanUrl = blockExplorerUrl('address', appAddress, { networkType })

  return (
    <BadgePopoverBase
      addressField={
        <ImageExists src={iconSrc}>
          {({ exists, displayFallback }) => (
            <AddressField
              address={appAddress}
              icon={<Icon src={exists ? iconSrc : iconFallbackSrc} />}
            />
          )}
        </ImageExists>
      }
      link={etherscanUrl && <Link href={etherscanUrl}>See on Etherscan</Link>}
      onClose={onClose}
      opener={opener}
      popoverAction={popoverAction}
      title={title}
      visible={visible}
    />
  )
})
AppBadgePopover.propTypes = {
  appAddress: PropTypes.string.isRequired,
  iconFallbackSrc: PropTypes.string,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node.isRequired,
  visible: PropTypes.bool,
}

const Icon = ({ src }) => (
  <div
    css={`
      width: ${5 * GU}px;
      height: ${5 * GU}px;
      background-size: contain;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-image: url(${src});
    `}
  />
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default AppBadgePopover
