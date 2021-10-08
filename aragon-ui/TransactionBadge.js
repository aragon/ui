'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var BadgeBase = require('./BadgeBase.js');
var web3 = require('./web3-4ef44cda.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutProperties-c6d3675c.js');
require('styled-components');
require('./index-c33eeeef.js');
require('./ButtonBase.js');
require('./extends-023d783e.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./keycodes.js');
require('./css.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TransactionBadge = /*#__PURE__*/React__default['default'].memo(function TransactionBadge(_ref) {
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
    environment.warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    environment.warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  var isTx = web3.isTransaction(transaction);
  var transactionUrl = isTx ? web3.blockExplorerUrl('transaction', transaction, {
    networkType: networkType
  }) : '';
  var label = !isTx ? 'Invalid transaction' : shorten ? web3.shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React__default['default'].createElement(BadgeBase['default'], {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: index.propTypes.string,
  disabled: index.propTypes.bool,
  labelStyle: index.propTypes.string,
  networkType: index.propTypes.string,
  shorten: index.propTypes.bool,
  style: index.propTypes.object,
  transaction: index.propTypes.string.isRequired,
  // Deprecated
  background: index.propTypes.string,
  fontSize: index.propTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports.default = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
