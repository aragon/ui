'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
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
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

function getModeStyles(theme, mode) {
  if (mode === 'warning') {
    return {
      background: theme.warningSurface,
      borderColor: theme.warning,
      color: theme.warningSurfaceContent,
      titleColor: theme.warningSurfaceContent
    };
  }

  if (mode === 'error') {
    return {
      background: theme.negativeSurface,
      borderColor: theme.negative,
      color: theme.negativeSurfaceContent,
      titleColor: theme.negativeSurfaceContent
    };
  }

  if (mode === 'description') {
    return {
      background: theme.infoSurface,
      borderColor: theme.info,
      color: theme.surfaceContent,
      titleColor: theme.surfaceContentSecondary
    };
  }

  return {
    background: theme.infoSurface,
    borderColor: theme.info,
    color: theme.infoSurfaceContent,
    titleColor: theme.infoSurfaceContent
  };
}

var _StyledSection = _styled__default("section").withConfig({
  displayName: "Info___StyledSection",
  componentId: "sc-1kgnlbm-0"
})(["color:", ";background:", ";border-left:2px solid ", ";padding:", "px;border-radius:", "px;word-wrap:break-word;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, function (p) {
  return p._css5;
});

var _StyledH = _styled__default("h1").withConfig({
  displayName: "Info___StyledH",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;align-items:center;color:", ";", ";margin-bottom:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Info(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      color = _ref.color,
      titleColor = _ref.titleColor,
      background = _ref.background,
      borderColor = _ref.borderColor,
      title = _ref.title,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "mode", "color", "titleColor", "background", "borderColor", "title"]);

  var theme = Theme.useTheme(); // Get styles from the current mode

  var modeStyles = React.useMemo(function () {
    var styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return /*#__PURE__*/React__default.createElement(_StyledSection, _extends$1._extends({}, props, {
    _css: color || modeStyles.color,
    _css2: background || modeStyles.background,
    _css3: borderColor || modeStyles.borderColor,
    _css4: 2 * constants.GU,
    _css5: textStyles.textStyle('body3')
  }), title && /*#__PURE__*/React__default.createElement(_StyledH, {
    _css6: titleColor || modeStyles.titleColor,
    _css7: textStyles.textStyle('label2'),
    _css8: 1 * constants.GU
  }, title), children);
}

Info.propTypes = {
  children: index.PropTypes.node,
  title: index.PropTypes.node,
  mode: index.PropTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: index.PropTypes.string,
  titleColor: index.PropTypes.string,
  background: index.PropTypes.string,
  borderColor: index.PropTypes.string
}; // Backward compatibility

function Warning(props) {
  return /*#__PURE__*/React__default.createElement(Info, _extends$1._extends({
    mode: "warning"
  }, props));
}

Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

exports.default = Info;
//# sourceMappingURL=Info.js.map
