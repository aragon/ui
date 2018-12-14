import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, SafeLink } from '..'
import {
  isTransaction,
  shortenTransaction,
  blockExplorerUrl,
  stylingProps,
} from '../../utils'

class TransactionBadge extends React.PureComponent {
  static propTypes = {
    tx: PropTypes.string.isRequired,
    shorten: PropTypes.bool,
    fontSize: PropTypes.string,
    networkType: PropTypes.string,
    background: PropTypes.string,
  }
  static defaultProps = {
    tx: '',
    shorten: true,
    fontSize: 'normal',
    networkType: 'main',
    background: 'none',
  }
  getMainProps(tx) {
    const { networkType } = this.props
    const baseProps = stylingProps(this)
    if (!tx) {
      return baseProps
    }
    return {
      ...baseProps,
      as: SafeLink,
      target: '_blank',
      href: blockExplorerUrl('tx', tx, { networkType }),
      style: { ...baseProps.style, cursor: 'pointer' },
    }
  }
  render() {
    const { tx, shorten, fontSize, background } = this.props
    const transaction = isTransaction(tx) ? tx : null
    const props = this.getMainProps(transaction)
    return (
      <Main
        title={transaction}
        background={background}
        onClick={this.handleClick}
        {...props}
      >
        <Label size={fontSize}>
          {transaction && shorten ? shortenTransaction(tx) : tx}
        </Label>
      </Main>
    )
  }
}

const Main = styled.div`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  ${props =>
    props.background && `background: ${props.background};`}
  border-radius: 3px;
  cursor: default;
  text-decoration: none;
`

const Label = styled(Text)`
  padding: 0 8px;
  white-space: nowrap;
`

export default TransactionBadge
