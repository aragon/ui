/* @flow */
import React from 'react'
import PropTypes from 'prop-types'

// High order component "get" wrapper
const getPublicUrl = Component => {
  const highOrderComponent = (baseProps, context) => {
    const { publicUrl = '' } = context
    const props = { ...baseProps, publicUrl }
    return <Component {...props} />
  }
  highOrderComponent.contextTypes = {
    publicUrl: PropTypes.string,
  }
  return highOrderComponent
}

type UrlInjectorProps = {
  publicUrl: string,
}

// High order component "set" wrapper
const publicUrlInjector = Component => {
  class PublicUrlContextInjector extends React.Component<UrlInjectorProps> {
    getChildContext() {
      return { publicUrl: this.props.publicUrl }
    }
    static childContextTypes = {
      publicUrl: PropTypes.string,
    }
    render() {
      return <Component {...this.props} />
    }
  }
  return PublicUrlContextInjector
}

// prefix helper
const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

// styled-component helper
const styledPublicUrl = url => ({ publicUrl }) => prefixUrl(url, publicUrl)

export { prefixUrl, publicUrlInjector, styledPublicUrl }
export default getPublicUrl
