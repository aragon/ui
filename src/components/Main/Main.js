import React from 'react'
import PropTypes from 'prop-types'
import { ensureTrailingSlash } from '../../utils/url'
import { PublicUrl } from '../../providers/PublicUrl'
import { Root } from '../../providers/Root'
import { Viewport } from '../../providers/Viewport'
import BaseStyles from '../BaseStyles/BaseStyles'
import { ToastHub } from '../ToastHub/ToastHub'
import { Layout } from '../Layout/Layout'
import { MainTheme } from '../../theme'
import ScrollView from '../ScrollView/ScrollView'
import { initContainsComponent } from '../../utils/contains-component'

const [
  ContainsAppViews,
  useAppViewRegister,
  useAppViewsCounter,
] = initContainsComponent()

function Main({ children, assetsUrl, layout, scrollView }) {
  const [hasAppView, contextValue] = useAppViewsCounter()

  if (layout === undefined) {
    layout = !hasAppView
  }

  if (scrollView === undefined) {
    scrollView = !hasAppView
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
    <ContainsAppViews contextValue={contextValue}>
      <MainTheme>
        <Root.Provider>
          <Viewport.Provider>
            <PublicUrl.Provider url={ensureTrailingSlash(assetsUrl)}>
              <BaseStyles />
              <ToastHub>{content}</ToastHub>
            </PublicUrl.Provider>
          </Viewport.Provider>
        </Root.Provider>
      </MainTheme>
    </ContainsAppViews>
  )
}

Main.propTypes = {
  assetsUrl: PropTypes.string,
  children: PropTypes.node,
  layout: PropTypes.bool,
  scrollView: PropTypes.bool,
}
Main.defaultProps = {
  assetsUrl: './aragon-ui/',
}

export { useAppViewRegister }
export default Main
