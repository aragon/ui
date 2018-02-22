import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ children, className, ...radioProps }) => (
  <div className={className} role="radiogroup">
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        ...radioProps,
      })
    )}
  </div>
)
RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default RadioGroup
