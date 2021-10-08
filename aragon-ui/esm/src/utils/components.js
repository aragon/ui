import toConsumableArray from '../../node_modules/@babel/runtime/helpers/toConsumableArray.js';

// Forward some props of an instance to a child element.
//
// Usage example:
//
//   <Child {...forwardProps(this, ['name', 'style'])}>
//
function forwardProps(instance, names) {
  return names.reduce(function (props, name) {
    if (instance.props[name]) {
      props[name] = instance.props[name];
    }

    return props;
  }, {});
} // Forward the props useful to extend the styles  of the main child of a
// component, using either styled() or the style attribute. Additionnal names
// can be passed as a second parameter.

function stylingProps(instance) {
  var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return forwardProps(instance, ['style', 'className'].concat(toConsumableArray(names)));
}

export { forwardProps, stylingProps };
//# sourceMappingURL=components.js.map
