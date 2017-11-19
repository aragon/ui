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

// styled-component helper
const styledPublicUrl = url => ({ publicUrl }) =>
  url.startsWith('data:') ? url : publicUrl + url

export { styledPublicUrl }
export default getPublicUrl
