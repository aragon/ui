'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var AppBar = require('./AppBar.js');
var Main = require('./Main.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-fdbd3c46.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./index-70e12149.js');
require('./Text.js');
require('./environment.js');
require('./miscellaneous.js');
require('./font.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./css.js');
require('./springs.js');
require('./PublicUrl-dfca81a5.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');
require('./BaseStyles.js');
require('./text-styles.js');
require('./ToastHub.js');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./Viewport-b495052b.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./constants.js');
require('./components.js');
require('./Layout.js');
require('./ScrollView.js');
require('./contains-component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AppView({
  appBar,
  children,
  height,
  padding,
  tabs,
  title,
  ...props
}) {
  // Notify Main that it contains this AppView
  Main.useRegisterAppView();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({
    height: height
  }, props), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null, appBar || /*#__PURE__*/React__default["default"].createElement(AppBar["default"], {
    title: title,
    tabs: tabs
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, null, /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: index.PropTypes.element,
  title: index.PropTypes.string,
  children: index.PropTypes.node,
  padding: index.PropTypes.number,
  height: index.PropTypes.string,
  tabs: index.PropTypes.element
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sc-sm6g80-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], p => p.height);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sc-sm6g80-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sc-sm6g80-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sc-sm6g80-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], ({
  padding
}) => `${padding}px`);

exports["default"] = AppView;
//# sourceMappingURL=AppView.js.map
