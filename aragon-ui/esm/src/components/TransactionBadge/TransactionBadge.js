import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import { isTransaction, blockExplorerUrl, shortenTransaction } from '../../utils/web3.js';
import { warnOnce } from '../../utils/environment.js';

var TransactionBadge = /*#__PURE__*/React.memo(function TransactionBadge(_ref) {
  _ref.className;
      var disabled = _ref.disabled,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      shorten = _ref.shorten;
      _ref.style;
      var transaction = _ref.transaction,
      background = _ref.background,
      fontSize = _ref.fontSize;

  if (fontSize) {
    warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  var isTx = isTransaction(transaction);
  var transactionUrl = isTx ? blockExplorerUrl('transaction', transaction, {
    networkType: networkType
  }) : '';
  var label = !isTx ? 'Invalid transaction' : shorten ? shortenTransaction(transaction) : transaction;
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
  className: propTypes.string,
  disabled: propTypes.bool,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  shorten: propTypes.bool,
  style: propTypes.object,
  transaction: propTypes.string.isRequired,
  // Deprecated
  background: propTypes.string,
  fontSize: propTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

export default TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
