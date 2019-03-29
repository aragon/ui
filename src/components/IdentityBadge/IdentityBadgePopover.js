import React from 'react'
import PropTypes from 'prop-types'
import { blockExplorerUrl, noop, font } from '../../utils'
import { theme } from '../../theme'
import { IconClose } from '../../icons/components'
import SafeLink from '../Link/SafeLink'
import Popover from '../Popover/Popover'
import Button from '../Button/Button'
import ButtonIcon from '../Button/ButtonIcon'
import AddressField from '../AddressField/AddressField'
import Badge from '../Badge/Badge'
import PopoverActionType from './PopoverActionType'

class IdentityBadgePopover extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
    connectedAccount: PropTypes.bool,
    networkType: PropTypes.string,
    onClose: PropTypes.func,
    opener: PropTypes.instanceOf(Element),
    popoverAction: PopoverActionType,
    title: PropTypes.node,
    visible: PropTypes.bool,
  }

  static defaultProps = { title: 'Address', onClose: noop }

  render() {
    const {
      address,
      connectedAccount,
      popoverAction,
      networkType,
      onClose,
      opener,
      title,
      visible,
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
            label="Close"
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
              {title}
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
          {popoverAction && (
            <Button
              mode="outline"
              size="small"
              onClick={this.handlePopoverActionClick}
            >
              {popoverAction.label}
            </Button>
          )}
        </section>
      </Popover>
    )
  }

  handlePopoverActionClick = () => {
    const {
      onClose,
      popoverAction: { onClick = noop },
    } = this.props
    onClose()
    onClick()
  }
}

export default IdentityBadgePopover
