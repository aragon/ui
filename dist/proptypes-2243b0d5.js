'use strict';

var index = require('./index-19b0c963.js');

const VALID_INTEGER_REGEX = /^[-+]?[0-9]+$/; // Check if a value is “empty”, in the prop-types sense (null or undefined)

function isEmpty(value) {
  return value === undefined || value === null;
} // Require a prop to not be empty


function requireProp(props, propName, componentName) {
  return isEmpty(props[propName]) ? new Error(`The prop \`${propName}\` is required for \`${componentName}\`.`) : null;
} // Create the `isRequired` version of a prop type


function createIsRequired(propTypeFn) {
  return (...params) => requireProp(...params) || propTypeFn(...params);
} // Accept any number in the 0 => 1 range


function _0to1(props, propName, componentName) {
  if (isEmpty(props[propName])) {
    return null;
  }

  if (typeof props[propName] === 'number' && props[propName] >= 0 && props[propName] <= 1) {
    return null;
  }

  return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a number in the 0-1 range.`);
}

_0to1.isRequired = createIsRequired(_0to1); // Accept DOM Element, in DOM environments

function _element(props, propName, componentName) {
  if (!props[propName]) {
    return null;
  }

  if (typeof Element !== 'undefined') {
    return props[propName] instanceof Element ? null : new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a DOM Element.`);
  }

  return null;
}

_element.isRequired = createIsRequired(_element);

function _bigIntish(props, propName, componentName) {
  if (isEmpty(props[propName])) {
    return null;
  }

  if (typeof props[propName] === 'number') {
    return null;
  }

  if (typeof props[propName] === 'bigint') {
    return null;
  }

  if (VALID_INTEGER_REGEX.test(String(props[propName]))) {
    return null;
  }

  return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a BigInt, Number or a value that can convert into a BigInt-like string.`);
}

_bigIntish.isRequired = createIsRequired(_bigIntish);
const ExtendedPropTypes = { ...index.PropTypes,
  _bigIntish,
  _component: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.string, index.PropTypes.shape({
    render: index.PropTypes.func.isRequired
  })]),
  _spring: index.PropTypes.shape({
    mass: index.PropTypes.number,
    tension: index.PropTypes.number,
    friction: index.PropTypes.number,
    precision: index.PropTypes.number
  }),
  _null: index.PropTypes.oneOf([null]),
  _0to1,
  _element
};
var PropTypes = ExtendedPropTypes;

exports.PropTypes = PropTypes;
//# sourceMappingURL=proptypes-2243b0d5.js.map
