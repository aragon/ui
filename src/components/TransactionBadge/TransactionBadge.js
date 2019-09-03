import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import {
  blockExplorerUrl,
  isTransaction,
  shortenTransaction,
  warnOnce,
} from '../../utils'
import { Link } from '../Link'

const TransactionBadge = React.memo(function TransactionBadge({
  className,
  labelStyle,
  networkType,
  shorten,
  style,
  transaction,

  // Deprecated
  background,
  fontSize,
}) {
  if (fontSize) {
    warnOnce(
      'TransactionBadge:fontSize',
      'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.'
    )
  }
  if (background) {
    warnOnce(
      'TransactionBadge:background',
      'The “background” prop is deprecated. Please use “className” to style the badge instead.'
    )
  }

  const theme = useTheme()

  const isTx = isTransaction(transaction)
  const transactionUrl = isTx
    ? blockExplorerUrl('transaction', transaction, { networkType })
    : ''
  const label = !isTx
    ? 'Invalid'
    : shorten
    ? shortenTransaction(transaction)
    : transaction
  return (
    <Link
      title={transaction}
      href={transactionUrl}
      css={`
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        background: ${theme.badge};
        color: ${theme.badgeContent};
        border-radius: ${RADIUS}px;
        text-decoration: none;
      `}
      className={className}
      style={style}
    >
      <div
        css={`
          padding: 0 ${1.5 * GU}px;
          white-space: nowrap;
          ${labelStyle}
        `}
      >
        {label}
      </div>
    </Link>
  )
})
TransactionBadge.propTypes = {
  className: PropTypes.string,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  shorten: PropTypes.bool,
  style: PropTypes.object,
  transaction: PropTypes.string.isRequired,

  // Deprecated
  background: PropTypes.string,
  fontSize: PropTypes.string,
}
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true,
}

export default TransactionBadge
