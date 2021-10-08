import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import AppBar from './AppBar.js';
import { useRegisterAppView } from '../Main/Main.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sm6g80-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], function (p) {
  return p.height;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sm6g80-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sm6g80-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sm6g80-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], function (_ref) {
  var padding = _ref.padding;
  return "".concat(padding, "px");
});

function AppView(_ref2) {
  var appBar = _ref2.appBar,
      children = _ref2.children,
      height = _ref2.height,
      padding = _ref2.padding,
      tabs = _ref2.tabs,
      title = _ref2.title,
      props = objectWithoutProperties(_ref2, ["appBar", "children", "height", "padding", "tabs", "title"]);

  // Notify Main that it contains this AppView
  useRegisterAppView();
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({
    height: height
  }, props), /*#__PURE__*/React.createElement(_StyledDiv2, null, appBar || /*#__PURE__*/React.createElement(AppBar, {
    title: title,
    tabs: tabs
  })), /*#__PURE__*/React.createElement(_StyledDiv3, null, /*#__PURE__*/React.createElement(_StyledDiv4, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: propTypes.element,
  title: propTypes.string,
  children: propTypes.node,
  padding: propTypes.number,
  height: propTypes.string,
  tabs: propTypes.element
};

export default AppView;
//# sourceMappingURL=AppView.js.map
