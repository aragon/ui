// prefix helper
const prefixUrl = (url, publicUrl) => url.startsWith('data:') ? url : publicUrl + url; // trailing slash helper

const ensureTrailingSlash = path => {
  return path.endsWith('/') ? path : `${path}/`;
};

export { ensureTrailingSlash, prefixUrl };
//# sourceMappingURL=url.js.map
