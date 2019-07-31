import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import { prefixUrl } from '../../utils/url'

const PublicUrlContext = React.createContext('')
const { Provider, Consumer } = PublicUrlContext

class PublicUrlProvider extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
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

function usePublicUrl() {
  return useContext(PublicUrlContext)
}

export { PublicUrl, Provider, hocWrap, styledUrl, usePublicUrl }
export default PublicUrl
