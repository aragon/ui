import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, SafeLink, EthIdenticon } from '..'
import {
  isAddress,
  shortenAddress,
  blockExplorerUrl,
  stylingProps,
} from '../../utils'

class IdentityBadge extends React.PureComponent {
  static propTypes = {
    entity: PropTypes.string,
    shorten: PropTypes.bool,
    fontSize: PropTypes.string,
    networkType: PropTypes.string,
  }
  static defaultProps = {
    entity: '',
    shorten: true,
    fontSize: 'normal',
    networkType: 'main',
  }
  getMainProps(address) {
    const { networkType } = this.props
    const baseProps = stylingProps(this)
    if (!address) {
      return baseProps
    }
    return {
      ...baseProps,
      as: SafeLink,
      target: '_blank',
      href: blockExplorerUrl('address', address, { networkType }),
      style: { ...baseProps.style, cursor: 'pointer' },
    }
  }
  render() {
    const { entity, shorten, fontSize } = this.props
    const address = isAddress(entity) ? entity : null
    const props = this.getMainProps(address)
    return (
      <Main title={address} onClick={this.handleClick} {...props}>
        {address && (
          <Identicon>
            <EthIdenticon scale={1} address={address} />
          </Identicon>
        )}
        <Label size={fontSize}>
          {address && shorten ? shortenAddress(address) : entity}
        </Label>
      </Main>
    )
  }
}

const Main = styled.div`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  background: #daeaef;
  border-radius: 3px;
  cursor: default;
  text-decoration: none;
`

const Identicon = styled.div`
  display: flex;
  margin-right: -3px;
`

const Label = styled(Text)`
  padding: 0 8px;
  white-space: nowrap;
`

export default IdentityBadge
