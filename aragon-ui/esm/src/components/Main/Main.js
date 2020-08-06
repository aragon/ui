import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { initContainsComponent } from '../../utils/contains-component.js';
import { ensureTrailingSlash } from '../../utils/url.js';
import { Theme as Theme$1 } from '../../theme/Theme2.js';
import { Viewport as Viewport$1 } from '../../providers/Viewport/Viewport.js';
import Layout$1 from '../Layout/Layout.js';
import { PublicUrl as PublicUrl$1 } from '../../providers/PublicUrl/PublicUrl.js';
import { Root as Root$1 } from '../../providers/Root/Root.js';
import ToastHubProvider from '../ToastHub/ToastHub.js';
import BaseStyles$1 from '../BaseStyles/BaseStyles.js';
import ScrollView$1 from '../ScrollView/ScrollView.js';

var _initContainsComponen = initContainsComponent(),
    ContainsAppViewProvider = _initContainsComponen.Provider,
    useContainsAppView = _initContainsComponen.useContains,
    useRegisterAppView = _initContainsComponen.useRegister;

var _StyledScrollView = _styled$1(ScrollView$1).withConfig({
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


  var content = layout ? /*#__PURE__*/React$1.createElement(Layout$1, null, children) : children;
  content = scrollView ?
  /*#__PURE__*/
  // The main ScrollView is set to 100vh by default (best for Aragon apps)
  // Disable `scrollView` and insert your own if needed.
  React$1.createElement(_StyledScrollView, null, content) : content;
  return /*#__PURE__*/React$1.createElement(Root$1.Provider, null, /*#__PURE__*/React$1.createElement(Viewport$1.Provider, null, /*#__PURE__*/React$1.createElement(PublicUrl$1.Provider, {
    url: ensureTrailingSlash(assetsUrl)
  }, /*#__PURE__*/React$1.createElement(Theme$1, {
    theme: theme
  }, /*#__PURE__*/React$1.createElement(BaseStyles$1, null), /*#__PURE__*/React$1.createElement(ToastHubProvider, null, content)))));
}

Main.propTypes = {
  assetsUrl: propTypes.string,
  children: propTypes.node,
  layout: propTypes.bool,
  scrollView: propTypes.bool,
  theme: Theme$1.propTypes.theme
};
Main.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$1 = (function (props) {
  return /*#__PURE__*/React$1.createElement(ContainsAppViewProvider, null, /*#__PURE__*/React$1.createElement(Main, props));
});

export default Main$1;
export { useContainsAppView, useRegisterAppView };
//# sourceMappingURL=Main.js.map
