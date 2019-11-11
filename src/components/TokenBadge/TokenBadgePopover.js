import React from 'react'
import PropTypes from 'prop-types'
import { ImageExists } from '../../hooks'
import { GU } from '../../style'
import { blockExplorerUrl } from '../../utils'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import Link from '../Link/Link'

const TokenBadgePopover = React.memo(function TokenBadgePopover({
  address,
  iconSrc,
  networkType,
  onClose,
  opener,
  title,
  visible,
}) {
  const etherscanUrl = blockExplorerUrl('token', address, { networkType })

  return (
    <BadgePopoverBase
      addressField={
        iconSrc ? (
          <ImageExists src={iconSrc}>
            {({ exists }) => (
              <AddressField
                address={address}
                icon={exists ? <Icon src={iconSrc} /> : null}
              />
            )}
          </ImageExists>
        ) : (
          <AddressField address={address} />
        )
      }
      link={etherscanUrl && <Link href={etherscanUrl}>See on Etherscan</Link>}
      onClose={onClose}
      opener={opener}
      title={title}
      visible={visible}
    />
  )
})

TokenBadgePopover.propTypes = {
  address: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
}

function Icon({ src }) {
  return (
    <div
      css={`
        width: calc(100% - ${0.5 * GU}px);
        height: calc(100% - ${0.5 * GU}px);
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${src});
      `}
    />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default TokenBadgePopover
