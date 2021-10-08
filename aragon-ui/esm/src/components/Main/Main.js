import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { ensureTrailingSlash } from '../../utils/url.js';
import BaseStyles from '../BaseStyles/BaseStyles.js';
import ToastHubProvider from '../ToastHub/ToastHub.js';
import Layout from '../Layout/Layout.js';
import ScrollView from '../ScrollView/ScrollView.js';
import { initContainsComponent } from '../../utils/contains-component.js';
import { Viewport } from '../../providers/Viewport/Viewport.js';
import { Theme } from '../../theme/Theme2.js';
import { Root } from '../../providers/Root/Root.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';

var _initContainsComponen = initContainsComponent(),
    ContainsAppViewProvider = _initContainsComponen.Provider,
    useContainsAppView = _initContainsComponen.useContains,
    useRegisterAppView = _initContainsComponen.useRegister;

var _StyledScrollView = _styled(ScrollView).withConfig({
  displayName: "Main___StyledScrollView",
  componentId: "sc-1n64cjc-0"
})(["height:100vh"]);

function Main(_ref) {
  var assetsUrl = _ref.assetsUrl,
      children = _ref.children,
      layout = _ref.layout,
      scrollView = _ref.scrollView,
      theme = _ref.theme;
  var containsAppView = useContainsAppView();

  if (layout === undefined) {
    layout = !containsAppView;
  }

  if (scrollView === undefined) {
    scrollView = !containsAppView;
  } // Optionally wrap `children` with Layout and/or ScrollView


  var content = layout ? /*#__PURE__*/React.createElement(Layout, null, children) : children;
  content = scrollView ?
  /*#__PURE__*/
  // The main ScrollView is set to 100vh by default (best for Aragon apps)
  // Disable `scrollView` and insert your own if needed.
  React.createElement(_StyledScrollView, null, content) : content;
  return /*#__PURE__*/React.createElement(Root.Provider, null, /*#__PURE__*/React.createElement(Viewport.Provider, null, /*#__PURE__*/React.createElement(PublicUrl.Provider, {
    url: ensureTrailingSlash(assetsUrl)
  }, /*#__PURE__*/React.createElement(Theme, {
    theme: theme
  }, /*#__PURE__*/React.createElement(BaseStyles, null), /*#__PURE__*/React.createElement(ToastHubProvider, null, content)))));
}

Main.propTypes = {
  assetsUrl: propTypes.string,
  children: propTypes.node,
  layout: propTypes.bool,
  scrollView: propTypes.bool,
  theme: Theme.propTypes.theme
};
Main.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$1 = (function (props) {
  return /*#__PURE__*/React.createElement(ContainsAppViewProvider, null, /*#__PURE__*/React.createElement(Main, props));
});

export default Main$1;
export { useContainsAppView, useRegisterAppView };
//# sourceMappingURL=Main.js.map
