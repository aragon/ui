// prefix helper
const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

export { prefixUrl }
