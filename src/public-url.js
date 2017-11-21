import React from 'react'
import PropTypes from 'prop-types'

// High order component wrapper
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

// prefix helper
const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

// styled-component helper
const styledPublicUrl = url => ({ publicUrl }) => prefixUrl(url, publicUrl)

export { prefixUrl, styledPublicUrl }
export default getPublicUrl
