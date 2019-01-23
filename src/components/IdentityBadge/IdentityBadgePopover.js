import React from 'react'
import PropTypes from 'prop-types'
import {
  SafeLink,
  Popover,
  ButtonIcon,
  IconClose,
  AddressField,
  Badge,
} from '../..'
import { blockExplorerUrl, font } from '../../utils'
import { theme } from '../../theme'

class IdentityBadgePopover extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
    visible: PropTypes.bool,
    opener: PropTypes.instanceOf(Element),
    onClose: PropTypes.func,
    networkType: PropTypes.string,
    connectedAccount: PropTypes.bool,
  }
  render() {
    const {
      address,
      visible,
      opener,
      onClose,
      networkType,
      connectedAccount,
    } = this.props
    return (
      <Popover visible={visible} opener={opener} onClose={onClose}>
        <section
          css={`
            position: relative;
            padding: 10px 18px 20px;
            max-width: calc(100vw - 20px);
            min-width: 300px;
          `}
        >
          <ButtonIcon
            onClick={onClose}
            css={`
              position: absolute;
              top: 0;
              right: 0;
              width: 46px;
              height: 40px;
            `}
          >
            <IconClose />
          </ButtonIcon>
          <header
            css={`
              display: flex;
              align-items: center;
              padding: 5px 0;
            `}
          >
            <h1
              css={`
                ${font({ size: 'large' })};
                color: ${theme.textSecondary};
              `}
            >
              Address
            </h1>
            {connectedAccount && (
              <Badge.Identity
                css={`
                  margin: -1px 0 0 5px;
                  text-transform: uppercase;
                  ${font({ size: 'xxsmall' })};
                `}
                title="This is your Ethereum address"
              >
                You
              </Badge.Identity>
            )}
          </header>
          <AddressField address={address} />
          <p
            css={`
              padding: 10px 0 0;
              text-align: right;
              ${font({ size: 'small' })};
            `}
          >
            <SafeLink
              href={blockExplorerUrl('address', address, { networkType })}
              target="_blank"
              css={`
                color: ${theme.accent};
              `}
            >
              See on Etherscan
            </SafeLink>
          </p>
        </section>
      </Popover>
    )
  }
}

export default IdentityBadgePopover
