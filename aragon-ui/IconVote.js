'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-56de5759.js');

function IconVote(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.023 2.178a.656.656 0 01.898 0l.713.675a1.553 1.553 0 01.458 1.459l-.001.005-.427 1.928h3.849c.829 0 1.543.645 1.543 1.482v1.061a1.845 1.845 0 01-.15.72l-2.03 4.488c-.306.694-1.022 1.156-1.83 1.156H4.992C3.912 15.152 3 14.32 3 13.245V7.727c0-.536.233-1.015.592-1.355l4.43-4.194zM4.49 7.283l-.45-.456.45.456a.61.61 0 00-.198.444v5.518c0 .334.29.64.7.64h6.053a.695.695 0 00.647-.4l2.025-4.477a.594.594 0 00.045-.22v-1.06c0-.097-.093-.216-.25-.216h-4.65a.652.652 0 01-.504-.236.624.624 0 01-.129-.532l.596-2.692a.297.297 0 00-.09-.288l-.264-.25-3.981 3.77z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.977 21.822a.656.656 0 01-.898 0l-.713-.675a1.553 1.553 0 01-.457-1.464l.427-1.928h-3.849c-.829 0-1.543-.645-1.543-1.482v-1.061c0-.259.056-.49.14-.696l1.202.466a.6.6 0 00-.049.23v1.06c0 .097.093.216.25.216h4.65c.196 0 .381.087.504.236s.17.345.129.532l-.596 2.692a.297.297 0 00.09.288l.264.25 3.981-3.77.45.457-.45-.456a.61.61 0 00.198-.444v-5.518c0-.334-.29-.64-.7-.64H14.52V8.848h4.489c1.08 0 1.992.832 1.992 1.907v5.518c0 .536-.233 1.015-.592 1.355l-4.43 4.194z",
    clipRule: "evenodd"
  }));
}

IconVote.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconVote;
//# sourceMappingURL=IconVote.js.map
