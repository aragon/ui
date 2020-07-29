'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// prefix helper
var prefixUrl = function prefixUrl(url, publicUrl) {
  return url.startsWith('data:') ? url : publicUrl + url;
}; // trailing slash helper

var ensureTrailingSlash = function ensureTrailingSlash(path) {
  return path.endsWith('/') ? path : "".concat(path, "/");
};

exports.ensureTrailingSlash = ensureTrailingSlash;
exports.prefixUrl = prefixUrl;
//# sourceMappingURL=url.js.map
