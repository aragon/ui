import React from 'react'
import PropTypes from 'prop-types'
import { ensureTrailingSlash } from '../../utils/url'
import { PublicUrl } from '../../providers/PublicUrl'
import { Root } from '../../providers/Root'
import { Viewport } from '../../providers/Viewport'
import BaseStyles from '../BaseStyles/BaseStyles'
import ToastHub from '../ToastHub/ToastHub'
import Layout from '../Layout/Layout'
import { Theme } from '../../theme'
import ScrollView from '../ScrollView/ScrollView'
import { initContainsComponent } from '../../utils/contains-component'

const {
  Provider: ContainsAppViewProvider,
  useContains: useContainsAppView,
  useRegister: useRegisterAppView,
} = initContainsComponent()

function Main({ assetsUrl, children, layout, scrollView, theme, toastProps }) {
  const containsAppView = useContainsAppView()

  if (layout === undefined) {
    layout = !containsAppView
  }

  if (scrollView === undefined) {
    scrollView = !containsAppView
  }

  // Optionally wrap `children` with Layout and/or ScrollView
  let content = layout ? <Layout>{children}</Layout> : children
  content = scrollView ? (
    // The main ScrollView is set to 100vh by default (best for Aragon apps)
    // Disable `scrollView` and insert your own if needed.
    <ScrollView css="height: 100vh">{content}</ScrollView>
  ) : (
    content
  )

  return (
    <Root.Provider>
      <Viewport.Provider>
        <PublicUrl.Provider url={ensureTrailingSlash(assetsUrl)}>
          <Theme theme={theme}>
            <BaseStyles />
            <ToastHub {...toastProps}>{content}</ToastHub>
          </Theme>
        </PublicUrl.Provider>
      </Viewport.Provider>
    </Root.Provider>
  )
}

Main.propTypes = {
  assetsUrl: PropTypes.string,
  children: PropTypes.node,
  layout: PropTypes.bool,
  scrollView: PropTypes.bool,
  theme: Theme.propTypes.theme,
  toastProps: PropTypes.any,
}

Main.defaultProps = {
  assetsUrl: './aragon-ui/',
}

export { useContainsAppView, useRegisterAppView }

export default props => (
  <ContainsAppViewProvider>
    <Main {...props} />
  </ContainsAppViewProvider>
)
