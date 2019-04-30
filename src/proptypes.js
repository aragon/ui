import PropTypes from 'prop-types'

// Check if a value is “empty”, in the prop-types sense (null or undefined)
function isEmpty(value) {
  return value === undefined || value === null
}

// Require a prop to not be empty
function requireProp(props, propName, componentName) {
  return isEmpty(props[propName])
    ? new Error(
        `The prop \`${propName}\` is required for \`${componentName}\`.`
      )
    : null
}

// Accept any number in the 0 => 1 range
function _0to1(props, propName, componentName) {
  if (isEmpty(props[propName])) {
    return null
  }
  if (
    typeof props[propName] === 'number' &&
    props[propName] >= 0 &&
    props[propName] <= 1
  ) {
    return null
  }
  return new Error(
    `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a number in the 0-1 range.`
  )
}

// Required version
_0to1.isRequired = (...params) => requireProp(...params) || _0to1(...params)

const ExtendedPropTypes = {
  ...PropTypes,
  _component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  _spring: PropTypes.shape({
    mass: PropTypes.number,
    tension: PropTypes.number,
    friction: PropTypes.number,
    precision: PropTypes.number,
  }),
  _null: PropTypes.oneOf([null]),
  _0to1,
}

export default ExtendedPropTypes
