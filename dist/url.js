'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// prefix helper
const prefixUrl = (url, publicUrl) => url.startsWith('data:') ? url : publicUrl + url; // trailing slash helper

const ensureTrailingSlash = path => {
  return path.endsWith('/') ? path : `${path}/`;
};

exports.ensureTrailingSlash = ensureTrailingSlash;
exports.prefixUrl = prefixUrl;
//# sourceMappingURL=url.js.map
