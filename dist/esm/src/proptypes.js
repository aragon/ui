import PropTypes$1 from '../node_modules/prop-types/index.js';

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
const ExtendedPropTypes = { ...PropTypes$1,
  _bigIntish,
  _component: PropTypes$1.oneOfType([PropTypes$1.func, PropTypes$1.string, PropTypes$1.shape({
    render: PropTypes$1.func.isRequired
  })]),
  _spring: PropTypes$1.shape({
    mass: PropTypes$1.number,
    tension: PropTypes$1.number,
    friction: PropTypes$1.number,
    precision: PropTypes$1.number
  }),
  _null: PropTypes$1.oneOf([null]),
  _0to1,
  _element
};
var PropTypes = ExtendedPropTypes;

export { PropTypes as default };
//# sourceMappingURL=proptypes.js.map
