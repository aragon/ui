var unselectable = function unselectable() {
  return "\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n";
}; // Transforms a number to be used as a CSS value, with the `px` suffix appended to it. If not a number, the value is returned directly.

function cssPx(value) {
  return typeof value === 'number' ? value + 'px' : value;
}

export { cssPx, unselectable };
//# sourceMappingURL=css.js.map
