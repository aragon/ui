'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
var font = require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "yxw4o9-0"
})(["", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Text(_ref) {
  var children = _ref.children,
      color = _ref.color,
      deprecationNotice = _ref.deprecationNotice,
      monospace = _ref.monospace,
      size = _ref.size,
      smallcaps = _ref.smallcaps,
      weight = _ref.weight,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "color", "deprecationNotice", "monospace", "size", "smallcaps", "weight"]);

  if (deprecationNotice) {
    environment.warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React__default.createElement(_StyledSpan, _extends$1._extends({}, props, {
    _css: font.font({
      deprecationNotice: false,
      monospace: monospace,
      size: size,
      smallcaps: smallcaps,
      weight: weight
    }),
    _css2: color ? "color: ".concat(color) : ''
  }), children);
}

var Block = function Block(props) {
  return /*#__PURE__*/React__default.createElement(Text, _extends$1._extends({
    as: "div"
  }, props));
};

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React__default.createElement(Text, _extends$1._extends({
    as: "p"
  }, props));
};

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: index.PropTypes.node,
  color: index.PropTypes.string,
  deprecationNotice: index.PropTypes.bool,
  monospace: index.PropTypes.bool,
  size: index.PropTypes.string,
  smallcaps: index.PropTypes.bool,
  weight: index.PropTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

exports.default = Text;
//# sourceMappingURL=Text.js.map
