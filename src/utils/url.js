// prefix helper
export const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

// trailing slash helper
export const ensureSlash = path => {
  return path.endsWith('/') ? `${path}/` : path
}
