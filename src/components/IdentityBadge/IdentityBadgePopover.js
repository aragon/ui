import React from 'react'
import PropTypes from '../../proptypes'
import { GU } from '../../style'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import Tag from '../Tag/Tag'

const IdentityBadgePopover = React.memo(function IdentityBadgePopover({
  address,
  connectedAccount,
  link,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
  return (
    <BadgePopoverBase
      addressField={<AddressField address={address} />}
      link={link}
      onClose={onClose}
      opener={opener}
      popoverAction={popoverAction}
      title={title}
      titleTag={
        connectedAccount && (
          <Tag
            css={`
              margin-left: ${1 * GU}px;
            `}
            title="This is your Ethereum address"
          >
            you
          </Tag>
        )
      }
      visible={visible}
    />
  )
})
IdentityBadgePopover.propTypes = {
  address: PropTypes.string,
  connectedAccount: PropTypes.bool,
  link: PropTypes.node,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool,
}
IdentityBadgePopover.defaultProps = {
  title: 'Address',
}

export default IdentityBadgePopover
