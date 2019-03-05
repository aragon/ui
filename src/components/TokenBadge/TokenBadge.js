import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isAddress } from '../../utils'
import { theme } from '../../theme'
import ButtonBase from '../Button/ButtonBase'
import TokenBadgePopover from './TokenBadgePopover'

class TokenBadge extends React.PureComponent {
  static propTypes = {
    entity: PropTypes.string,
    networkType: PropTypes.string,
    symbol: PropTypes.string,
    name: PropTypes.string,
  }
  static defaultProps = {
    entity: '',
    shorten: true,
    fontSize: 'normal',
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
    const { entity, symbol, name, networkType } = this.props
    const address = isAddress(entity) ? entity : null

    return (
      <React.Fragment>
        <ButtonBase
          ref={this._element}
          title={address}
          onClick={address && this.handleOpen}
          css={`
            display: inline-flex;
            color: ${theme.textPrimary};
          `}
        >
          <Main title={`${name} (${symbol})`}>
            <Label>
              <Icon src={`https://chasing-coins.com/coin/logo/${symbol}`} />
              <NameWrapper>
                <Name>{name}</Name>
                {name !== symbol && <Symbol>({symbol})</Symbol>}
              </NameWrapper>
            </Label>
          </Main>
        </ButtonBase>
        {address && (
          <TokenBadgePopover
            address={address}
            name={name}
            symbol={symbol}
            visible={opened}
            networkType={networkType}
            opener={this._element.current}
            onClose={this.handleClose}
          />
        )}
      </React.Fragment>
    )
  }
}

const Main = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 24px;
  background: #daeaef;
  border-radius: 3px;
  cursor: default;
  padding: 0 8px;
`

const Label = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 15px;
  min-width: 0;
  flex-shrink: 1;
`

const Icon = styled.img.attrs({ alt: '', width: '16', height: '16' })`
  margin-right: 10px;
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
`

const Symbol = styled.span`
  flex-shrink: 0;
  margin-left: 5px;
`

export default TokenBadge
