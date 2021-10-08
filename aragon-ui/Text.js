'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var environment = require('./environment.js');
var font = require('./font.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledSpan = _styled__default['default']("span").withConfig({
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
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "color", "deprecationNotice", "monospace", "size", "smallcaps", "weight"]);

  if (deprecationNotice) {
    environment.warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan, _extends._extends_1({}, props, {
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
  return /*#__PURE__*/React__default['default'].createElement(Text, _extends._extends_1({
    as: "div"
  }, props));
};

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React__default['default'].createElement(Text, _extends._extends_1({
    as: "p"
  }, props));
};

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: index.propTypes.node,
  color: index.propTypes.string,
  deprecationNotice: index.propTypes.bool,
  monospace: index.propTypes.bool,
  size: index.propTypes.string,
  smallcaps: index.propTypes.bool,
  weight: index.propTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

exports.default = Text;
//# sourceMappingURL=Text.js.map
