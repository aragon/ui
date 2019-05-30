import React from 'react'
import PropTypes from 'prop-types'
import { blockExplorerUrl, font } from '../../utils'
import { theme } from '../../theme'
import { IconClose } from '../../icons/components'
import { ImageExists } from '../../hooks'
import SafeLink from '../Link/SafeLink'
import Popover from '../Popover/Popover'
import ButtonIcon from '../Button/ButtonIcon'
import AddressField from '../AddressField/AddressField'

class TokenBadgePopover extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string.isRequired,
    iconUrl: PropTypes.string,
    label: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    opener: PropTypes.instanceOf(Element),
    onClose: PropTypes.func,
    networkType: PropTypes.string,
  }
  render() {
    const {
      address,
      iconUrl,
      label,
      networkType,
      onClose,
      opener,
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
          <h1
            css={`
              display: flex;
              align-items: center;
              padding: 5px 0;
              ${font({ size: 'large', weight: 'bold' })};
              color: ${theme.textPrimary};
            `}
          >
            {label}
          </h1>
          {iconUrl ? (
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
          )}
          <p
            css={`
              padding: 10px 0 0;
              text-align: right;
              ${font({ size: 'small' })};
            `}
          >
            <SafeLink
              href={blockExplorerUrl('token', address, { networkType })}
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

const Icon = ({ src }) => (
  <div
    css={`
      flex-shrink: 0;
      display: flex;
      width: 40px;
      height: 40px;
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
