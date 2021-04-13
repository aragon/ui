import React from 'react'
import PropTypes from '../../proptypes'
import { ImageExists } from '../../hooks'
import { blockExplorerUrl } from '../../utils'
import { capitalize } from '../../utils/characters'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import Link from '../Link/Link'

const AppBadgePopover = React.memo(function AppBadgePopover({
  appAddress,
  iconFallbackSrc,
  iconSrc,
  explorerProvider,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
  const explorerUrl = blockExplorerUrl('address', appAddress, {
    networkType,
    provider: explorerProvider,
  })
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
      link={
        explorerUrl && (
          <Link href={explorerUrl}>
            See on {capitalize(explorerProvider ?? 'blockscout')}
          </Link>
        )
      }
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
  explorerProvider: PropTypes.string,
  iconFallbackSrc: PropTypes.string,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node.isRequired,
  visible: PropTypes.bool,
}

function Icon({ src, ...props }) {
  return (
    <div
      css={`
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${src});
      `}
      {...props}
    />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default AppBadgePopover
