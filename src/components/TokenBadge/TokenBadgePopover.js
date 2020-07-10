import React from 'react'
import PropTypes from '../../proptypes'
import { ImageExists } from '../../hooks'
import { GU } from '../../style'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'

const TokenBadgePopover = React.memo(function TokenBadgePopover({
  address,
  iconSrc,
  link,
  onClose,
  opener,
  title,
  visible,
}) {
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
      link={link}
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
  link: PropTypes.node,
  onClose: PropTypes.func,
  opener: PropTypes._element,
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
