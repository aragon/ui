import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { stylingProps } from '../../utils/components'
import { isAddress, tokenIconUrl } from '../../utils/web3'
import { theme } from '../../theme'
import { ImageExists } from '../../hooks'
import ButtonBase from '../Button/ButtonBase'
import TokenBadgePopover from './TokenBadgePopover'

class TokenBadge extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
    name: PropTypes.string,
    networkType: PropTypes.string,
    symbol: PropTypes.string.isRequired,
  }
  static defaultProps = {
    address: '',
    name: '',
    networkType: 'main',
  }
  _element = React.createRef()
  state = { opened: false }

  handleClose = () => {
    this.setState({ opened: false })
  }
  handleOpen = () => {
    this.setState({ opened: true })
  }
  render() {
    const { opened } = this.state
    const { address, symbol, name, networkType } = this.props

    const isValidAddress = isAddress(address)

    const iconUrl =
      isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null

    const label = name && symbol ? `${name} (${symbol})` : symbol

    return (
      <React.Fragment>
        <ButtonBase
          ref={this._element}
          title={`${label} − ${address || 'No address'}`}
          onClick={isValidAddress ? this.handleOpen : null}
          css={`
            display: inline-flex;
            overflow: hidden;
            height: 24px;
            color: ${theme.textPrimary};
          `}
        >
          <div
            css={`
              overflow: hidden;
              display: flex;
              align-items: center;
              background: #daeaef;
              border-radius: 3px;
              text-decoration: none;
              font-size: 15px;
              min-width: 0;
              flex-shrink: 1;
              padding: 0 8px;
            `}
            {...stylingProps(this)}
          >
            <ImageExists src={iconUrl}>
              {({ exists }) => exists && <Icon src={iconUrl} />}
            </ImageExists>
            <div
              css={`
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
            >
              <NameWrapper
                css={`
                  position: relative;
                  top: 1px;
                `}
              >
                {name && <Name>{name}</Name>}
                <Symbol>{name ? `(${symbol})` : symbol}</Symbol>
              </NameWrapper>
            </div>
          </div>
        </ButtonBase>
        {address && (
          <TokenBadgePopover
            address={address}
            iconUrl={iconUrl}
            label={label}
            networkType={networkType}
            onClose={this.handleClose}
            opener={this._element.current}
            visible={opened}
          />
        )}
      </React.Fragment>
    )
  }
}

const Icon = styled.span`
  flex-shrink: 0;
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 4px;
  margin-left: -4px;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${p => p.src});
`

const NameWrapper = styled.span`
  flex-shrink: 1;
  display: flex;
  min-width: 0;
`

const Name = styled.span`
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 20%;
  margin-right: 4px;
`

const Symbol = styled.span`
  flex-shrink: 0;
`

export default TokenBadge
