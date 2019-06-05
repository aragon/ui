import React from 'react'
import PropTypes from 'prop-types'
import { isAddress, shortenAddress, stylingProps } from '../../utils'
import { theme } from '../../theme-legacy'
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
    compact: PropTypes.bool,
    badgeOnly: PropTypes.bool,
  }
  static defaultProps = {
    entity: '',
    shorten: true,
    fontSize: 'normal',
    networkType: 'main',
    connectedAccount: false,
    compact: false,
    badgeOnly: false,
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
      compact,
      badgeOnly,
    } = this.props
    const address = isAddress(entity) ? entity : null
    const label =
      customLabel || (address && shorten ? shortenAddress(address) : entity)

    return (
      <React.Fragment>
        <ButtonBase
          ref={this._element}
          title={address}
          disabled={badgeOnly}
          onClick={address && !badgeOnly ? this.handleOpen : undefined}
          css={`
            display: inline-flex;
            overflow: hidden;
            color: ${theme.textPrimary};
            height: 24px;
            &:active {
              ${compact && 'background: rgba(220, 234, 239, 0.3);'};
            }
          `}
        >
          <div
            css={`
              overflow: hidden;
              display: flex;
              align-items: center;
              ${compact
                ? 'padding-left: 8px; border-radius: 2px;'
                : 'background: #daeaef; border-radius: 3px;'};
              text-decoration: none;
            `}
            {...stylingProps(this)}
          >
            {address && (
              <div
                css={`
                  display: block;
                  margin-right: -3px;
                  ${compact && 'position: relative; top: -1px;'};
                `}
              >
                <EthIdenticon
                  scale={compact ? 0.58 : 1}
                  radius={compact ? 2 : 0}
                  address={address}
                />
              </div>
            )}
            <Text
              css={`
                padding: 0 8px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
              size={fontSize}
              monospace={Boolean(!customLabel && address)}
            >
              {label}
            </Text>
          </div>
        </ButtonBase>
        {address && !badgeOnly && (
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

export default IdentityBadge
