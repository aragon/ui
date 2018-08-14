// prefix helper
const prefixUrl = (url, publicUrl) =>
  url.startsWith('data:') ? url : publicUrl + url

const ensureSlash = path => {
  return path.endsWith('/') ? `${path}/` : path
}

export { prefixUrl, ensureSlash }
