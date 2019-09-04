import React from 'react'
import PropTypes from 'prop-types'
import { ImageExists } from '../../hooks'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
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
  const theme = useTheme()
  const etherscanUrl = blockExplorerUrl('token', address, { networkType })

  return (
    <BadgePopoverBase
      addressField={
        iconSrc ? (
          <ImageExists src={iconSrc}>
            {({ exists }) => (
              <AddressField
                address={address}
                icon={exists ? <Icon src={iconSrc} theme={theme} /> : null}
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

const Icon = ({ src, theme }) => (
  <div
    css={`
      flex-shrink: 0;
      display: flex;
      width: ${5 * GU}px;
      height: ${5 * GU}px;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.border};
      border-radius: ${RADIUS}px;
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
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
  theme: PropTypes.object.isRequired,
}

export default TokenBadgePopover
