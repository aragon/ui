import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import { prefixUrl } from '../../utils/url'

const DEFAULT_URL = ''

const { Provider, Consumer: PublicUrl } = React.createContext(DEFAULT_URL)

const PublicUrlProvider = ({ url, children }) => {
  return <Provider value={url}>{children}</Provider>
}
PublicUrlProvider.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}

// HOC wrapper
const hocWrap = Component => {
  const HOC = props => (
    <PublicUrl>
      {publicUrl => <Component {...props} publicUrl={publicUrl} />}
    </PublicUrl>
  )
  HOC.displayName = `PublicUrlProvider(${getDisplayName(Component)})`
  return HOC
}

// styled-components utility for URLs
const styledUrl = url => ({ publicUrl }) => prefixUrl(url, publicUrl)

PublicUrl.Provider = PublicUrlProvider
PublicUrl.hocWrap = hocWrap
PublicUrl.styledUrl = styledUrl

export { PublicUrl, Provider, hocWrap, styledUrl }
export default PublicUrl
