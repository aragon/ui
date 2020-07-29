import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import { initContainsComponent } from './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import { ensureTrailingSlash } from './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { Theme } from './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './isObject-3c6ec07e.js';
import { V as Viewport } from './Viewport-cc7debfb.js';
import Layout from './Layout.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './getDisplayName-d5fc7707.js';
import { P as PublicUrl } from './index-edfeada6.js';
import ToastHub from './ToastHub.js';
import { R as Root } from './index-f754c2df.js';
import './RootPortal.js';
import './taggedTemplateLiteral-37fd5203.js';
import BaseStyles from './BaseStyles.js';
import ScrollView from './ScrollView.js';

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
  }, /*#__PURE__*/React.createElement(BaseStyles, null), /*#__PURE__*/React.createElement(ToastHub, null, content)))));
}

Main.propTypes = {
  assetsUrl: PropTypes.string,
  children: PropTypes.node,
  layout: PropTypes.bool,
  scrollView: PropTypes.bool,
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
