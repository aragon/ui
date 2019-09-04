import React from 'react'
import PropTypes from 'prop-types'
import { ImageExists } from '../../hooks'
import { blockExplorerUrl } from '../../utils'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import Link from '../Link/Link'

const TokenBadgePopover = React.memo(function TokenBadgePopover({
  address,
  iconUrl,
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
        iconUrl ? (
          <ImageExists src={iconUrl}>
            {({ exists }) => (
              <AddressField
                address={address}
                icon={exists ? <Icon src={iconUrl} /> : null}
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
  iconUrl: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
}

const Icon = ({ src }) => (
  <div
    css={`
      flex-shrink: 0;
      display: flex;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
    `}
  >
    <div
      css={`
        width: 26px;
        height: 26px;
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${src});
      `}
    />
  </div>
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default TokenBadgePopover
