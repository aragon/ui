import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ children, className, ...radioProps }) => (
  <div className={className} role="radiogroup">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index,
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
