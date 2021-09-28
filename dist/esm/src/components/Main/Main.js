import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { ensureTrailingSlash } from '../../utils/url.js';
import BaseStyles from '../BaseStyles/BaseStyles.js';
import ToastHubProvider from '../ToastHub/ToastHub.js';
import Layout from '../Layout/Layout.js';
import ScrollView from '../ScrollView/ScrollView.js';
import { initContainsComponent } from '../../utils/contains-component.js';
import { Theme } from '../../theme/Theme2.js';
import { Viewport } from '../../providers/Viewport/Viewport.js';
import { Root } from '../../providers/Root/Root.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';

const {
  Provider: ContainsAppViewProvider,
  useContains: useContainsAppView,
  useRegister: useRegisterAppView
} = initContainsComponent();

function Main({
  assetsUrl,
  children,
  layout,
  scrollView,
  theme
}) {
  const containsAppView = useContainsAppView();

  if (layout === undefined) {
    layout = !containsAppView;
  }

  if (scrollView === undefined) {
    scrollView = !containsAppView;
  } // Optionally wrap `children` with Layout and/or ScrollView


  let content = layout ? /*#__PURE__*/React.createElement(Layout, null, children) : children;
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
  assetsUrl: PropTypes.string,
  children: PropTypes.node,
  layout: PropTypes.bool,
  scrollView: PropTypes.bool,
  theme: Theme.propTypes.theme
};
Main.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$1 = (props => /*#__PURE__*/React.createElement(ContainsAppViewProvider, null, /*#__PURE__*/React.createElement(Main, props)));

var _StyledScrollView = _styled(ScrollView).withConfig({
  displayName: "Main___StyledScrollView",
  componentId: "sc-1n64cjc-0"
})(["height:100vh"]);

export { Main$1 as default, useContainsAppView, useRegisterAppView };
//# sourceMappingURL=Main.js.map
