// prefix helper
var prefixUrl = function prefixUrl(url, publicUrl) {
  return url.startsWith('data:') ? url : publicUrl + url;
}; // trailing slash helper

var ensureTrailingSlash = function ensureTrailingSlash(path) {
  return path.endsWith('/') ? path : "".concat(path, "/");
};

export { ensureTrailingSlash, prefixUrl };
//# sourceMappingURL=url.js.map
