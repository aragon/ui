import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import { prefixUrl } from '../../utils/url'

const DEFAULT_URL = ''

const { Provider, Consumer } = React.createContext(DEFAULT_URL)

class PublicUrlProvider extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    const { url, children } = this.props
    return <Provider value={url}>{children}</Provider>
  }
}

// HOC wrapper
const hocWrap = Component => {
  const HOC = props => (
    <Consumer>{url => <Component {...props} publicUrl={url} />}</Consumer>
  )
  HOC.displayName = `PublicUrlProvider(${getDisplayName(Component)})`
  return HOC
}

// styled-components utility for URLs
const styledUrl = url => ({ publicUrl }) => prefixUrl(url, publicUrl)

const PublicUrl = props => <Consumer {...props} />
PublicUrl.Provider = PublicUrlProvider
PublicUrl.hocWrap = hocWrap
PublicUrl.styledUrl = styledUrl

export { PublicUrl, Provider, hocWrap, styledUrl }
export default PublicUrl
