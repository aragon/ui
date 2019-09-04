import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { blockExplorerUrl, noop } from '../../utils'
import AddressField from '../AddressField/AddressField'
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase'
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType'
import Link from '../Link/Link'
import { Tag } from '../Tag/Tag'

const IdentityBadgePopover = React.memo(function IdentityBadgePopover({
  address,
  connectedAccount,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
  const etherscanUrl = blockExplorerUrl('address', address, { networkType })

  return (
    <BadgePopoverBase
      addressField={<AddressField address={address} />}
      link={etherscanUrl && <Link href={etherscanUrl}>See on Etherscan</Link>}
      onClose={onClose}
      opener={opener}
      popoverAction={popoverAction}
      title={title}
      titleTag={
        connectedAccount && (
          <Tag
            css={`
              margin-left: ${0.5 * GU}px;
            `}
            size="small"
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
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool,
}
IdentityBadgePopover.defaultProps = {
  title: 'Address',
  onClose: noop,
}

export default IdentityBadgePopover
