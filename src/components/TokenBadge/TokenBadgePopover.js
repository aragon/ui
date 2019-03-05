import React from 'react'
import PropTypes from 'prop-types'
import { blockExplorerUrl, font } from '../../utils'
import { theme } from '../../theme'
import { IconClose } from '../../icons'
import SafeLink from '../Link/SafeLink'
import Popover from '../Popover/Popover'
import ButtonIcon from '../Button/ButtonIcon'
import AddressField from '../AddressField/AddressField'

class TokenBadgePopover extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    visible: PropTypes.bool,
    opener: PropTypes.instanceOf(Element),
    onClose: PropTypes.func,
    networkType: PropTypes.string,
  }
  render() {
    const {
      address,
      name,
      symbol,
      visible,
      opener,
      onClose,
      networkType,
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
                ${font({ size: 'large', weight: 'bold' })};
              `}
            >
              {`${name} (${symbol})`}
            </h1>
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

export default TokenBadgePopover
