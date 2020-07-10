import React from 'react'
import PropTypes from '../../proptypes'
import { ImageExists } from '../../hooks'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'

const AppBadgePopover = React.memo(function AppBadgePopover({
  appAddress,
  iconFallbackSrc,
  iconSrc,
  link,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
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
      link={link}
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
  link: PropTypes.node,
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
