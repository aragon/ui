import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import SafeLink from '../Link/SafeLink'
import {
  isTransaction,
  shortenTransaction,
  blockExplorerUrl,
  stylingProps,
} from '../../utils'

class TransactionBadge extends React.PureComponent {
  static propTypes = {
    transaction: PropTypes.string.isRequired,
    shorten: PropTypes.bool,
    fontSize: PropTypes.string,
    networkType: PropTypes.string,
    background: PropTypes.string,
  }
  static defaultProps = {
    transaction: '',
    shorten: true,
    fontSize: 'normal',
    networkType: 'main',
    background: '#daeaef',
  }
  getMainProps(transaction) {
    const { networkType, background } = this.props
    const baseProps = stylingProps(this)
    if (!transaction) {
      return baseProps
    }
    return {
      ...baseProps,
      as: SafeLink,
      target: '_blank',
      href: blockExplorerUrl('transaction', transaction, { networkType }),
      style: {
        ...baseProps.style,
        cursor: 'pointer',
        backgroundColor: background,
      },
    }
  }
  getLabel(transaction) {
    const { shorten } = this.props
    if (!transaction) {
      return 'Invalid'
    }
    return shorten ? shortenTransaction(transaction) : transaction
  }
  render() {
    const { props } = this
    const { fontSize } = props
    const transaction = isTransaction(props.transaction)
      ? props.transaction
      : null
    const mainProps = this.getMainProps(transaction)
    return (
      <Main title={transaction} onClick={this.handleClick} {...mainProps}>
        <Label size={fontSize}>{this.getLabel(transaction)}</Label>
      </Main>
    )
  }
}

const Main = styled.div`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  cursor: default;
  text-decoration: none;
`

const Label = styled(Text)`
  padding: 0 8px;
  white-space: nowrap;
`

export default TransactionBadge
