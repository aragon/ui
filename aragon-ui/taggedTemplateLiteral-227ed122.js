'use strict';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

exports._taggedTemplateLiteral = taggedTemplateLiteral;
//# sourceMappingURL=taggedTemplateLiteral-227ed122.js.map
