import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isAddress, shortenAddress, stylingProps } from '../../utils'
import { theme } from '../../theme'
import Text from '../Text/Text'
import EthIdenticon from '../EthIdenticon/EthIdenticon'
import ButtonBase from '../Button/ButtonBase'
import IdentityBadgePopover from './IdentityBadgePopover'
import PopoverActionType from './PopoverActionType'

class IdentityBadge extends React.PureComponent {
  static propTypes = {
    connectedAccount: PropTypes.bool,
    customLabel: PropTypes.string,
    entity: PropTypes.string,
    fontSize: PropTypes.string,
    networkType: PropTypes.string,
    popoverTitle: PropTypes.node,
    popoverAction: PopoverActionType,
    shorten: PropTypes.bool,
  }
  static defaultProps = {
    entity: '',
    shorten: true,
    fontSize: 'normal',
    networkType: 'main',
    connectedAccount: false,
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
    const {
      connectedAccount,
      popoverAction,
      popoverTitle,
      entity,
      fontSize,
      customLabel,
      networkType,
      shorten,
    } = this.props
    const address = isAddress(entity) ? entity : null
    const label =
      customLabel || (address && shorten ? shortenAddress(address) : entity)

    return (
      <React.Fragment>
        <ButtonBase
          ref={this._element}
          title={address}
          onClick={address && this.handleOpen}
          css={`
            display: inline-flex;
            overflow: hidden;
            color: ${theme.textPrimary};
          `}
        >
          <Main {...stylingProps(this)}>
            {address && (
              <Identicon>
                <EthIdenticon scale={1} address={address} />
              </Identicon>
            )}
            <Label size={fontSize}>{label}</Label>
          </Main>
        </ButtonBase>
        {address && (
          <IdentityBadgePopover
            address={address}
            visible={opened}
            connectedAccount={connectedAccount}
            networkType={networkType}
            opener={this._element.current}
            onClose={this.handleClose}
            popoverAction={popoverAction}
            title={popoverTitle}
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
  background: #daeaef;
  border-radius: 3px;
  text-decoration: none;
`

const Identicon = styled.div`
  display: block;
  margin-right: -3px;
`

const Label = styled(Text)`
  padding: 0 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export default IdentityBadge
