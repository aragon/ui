import React from 'react'
import PropTypes from 'prop-types'

// High order component wrapper
// Note that using this HOC on a styled component will destroy that component's ability to be used
// in a reverse selector
const getPublicUrl = Component => {
  class WithPublicUrl extends React.Component {
    static contextTypes = {
      publicUrl: PropTypes.string,
    }
    render() {
      const { publicUrl = '' } = this.context
      const props = { ...this.props, publicUrl }
      return <Component {...props} />
    }
  }
  return WithPublicUrl
}

// prefix helper
const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

// styled-component helper
const styledPublicUrl = url => ({ publicUrl }) => prefixUrl(url, publicUrl)

export { prefixUrl, styledPublicUrl }
export default getPublicUrl
