import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import { isTransaction, blockExplorerUrl, shortenTransaction } from '../../utils/web3.js';
import { warnOnce } from '../../utils/environment.js';

const TransactionBadge = /*#__PURE__*/React.memo(function TransactionBadge({
  className,
  disabled,
  labelStyle,
  networkType,
  shorten,
  style,
  transaction,
  // Deprecated
  background,
  fontSize
}) {
  if (fontSize) {
    warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  const isTx = isTransaction(transaction);
  const transactionUrl = isTx ? blockExplorerUrl('transaction', transaction, {
    networkType
  }) : '';
  const label = !isTx ? 'Invalid transaction' : shorten ? shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  shorten: PropTypes.bool,
  style: PropTypes.object,
  transaction: PropTypes.string.isRequired,
  // Deprecated
  background: PropTypes.string,
  fontSize: PropTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

export { TransactionBadge as default };
//# sourceMappingURL=TransactionBadge.js.map
