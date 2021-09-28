'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-19b0c963.js');
var BadgeBase = require('./BadgeBase.js');
var web3 = require('./web3-e13b67d7.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./index-70e12149.js');
require('./ButtonBase.js');
require('./extends-5150c1f4.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TransactionBadge = /*#__PURE__*/React__default["default"].memo(function TransactionBadge({
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
    environment.warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    environment.warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  const isTx = web3.isTransaction(transaction);
  const transactionUrl = isTx ? web3.blockExplorerUrl('transaction', transaction, {
    networkType
  }) : '';
  const label = !isTx ? 'Invalid transaction' : shorten ? web3.shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React__default["default"].createElement(BadgeBase["default"], {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: index.PropTypes.string,
  disabled: index.PropTypes.bool,
  labelStyle: index.PropTypes.string,
  networkType: index.PropTypes.string,
  shorten: index.PropTypes.bool,
  style: index.PropTypes.object,
  transaction: index.PropTypes.string.isRequired,
  // Deprecated
  background: index.PropTypes.string,
  fontSize: index.PropTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports["default"] = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
