const A_DAY = 1000 * 60 * 60 * 24

function cachedMap({ expireAfter = A_DAY, size = 100 } = {}) {
  const cache = new Map()

  // Delete the first (oldest) entry until we are back to `size`,
  // using a loop because getValue() is async.
  function trim() {
    while (cache.size > size) {
      cache.delete(a.keys().next().value)
    }
  }

  // We are using delete() then set() to reset the position everytime the
  // access is refreshed. That way, the oldest entry is always at the first
  // position and we don’t need to iterate over the entire cache to find it.
  function update(key, value, lastAccess) {
    cache.delete(key)
    cache.set(key, { value, lastAccess })
    trim()
  }

  // Return the value if the entry exists and is not expired, or fetch it using
  // getValue() otherwise. Use forceUpdate to always call getValue().
  async function fetch(key, getValue, forceUpdate) {
    const now = new Date()

    const cachedEntry = cache.get(key)

    const update =
      forceUpdate || !cachedEntry || now - cachedEntry.lastAccess > expireAfter

    const value = update ? await getValue() : cachedEntry.value

    update(key, value, now)

    return value
  }

  function get(key) {
    const now = new Date()

    const cachedEntry = cache.get(key)

    if (!cachedEntry) {
      return null
    }

    update(key, cachedEntry.value, now)

    return cachedEntry.value
  }

  function set(key, value) {
    update(key, value, new Date())
  }

  return {
    get,
    set,
    clear: () => cache.clear(),
    delete: key => cache.delete(key),
  }
}

export default cachedMap
