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
import { initContainsComponent } from '../../utils/contains-component'

const [
  ContainsAppViews,
  useAppViewRegister,
  useAppViewsCounter,
] = initContainsComponent()

const Main = ({ children, assetsUrl, layout }) => {
  const [appViews, contextValue] = useAppViewsCounter()

  if (layout === undefined) {
    layout = appViews === 0
  }

  return (
    <ContainsAppViews contextValue={contextValue}>
      <MainTheme>
        <Root.Provider>
          <Viewport.Provider>
            <PublicUrl.Provider url={ensureTrailingSlash(assetsUrl)}>
              <BaseStyles />
              <ToastHub>
                {layout ? <Layout>{children}</Layout> : children}
              </ToastHub>
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
}
Main.defaultProps = {
  assetsUrl: './aragon-ui/',
}

export { useAppViewRegister }
export default Main
