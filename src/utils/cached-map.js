const A_DAY = 1000 * 60 * 60 * 24

function cachedMap({ expireAfter = A_DAY, size = 100 } = {}) {
  const cache = new Map()

  // Delete the first (oldest) entry if we are above `size`. `cache.size`
  // should never be greater than `size + 1`, so no need for a loop here.
  function trim() {
    if (cache.size > size) {
      cache.delete(cache.keys().next().value)
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

  function get(key) {
    const now = new Date()

    const cachedEntry = cache.get(key)

    if (!cachedEntry) {
      return null
    }

    // Expired: delete the entry
    if (now - cachedEntry.lastAccess > expireAfter) {
      cache.delete(key)
      return null
    }

    update(key, cachedEntry.value, now)

    return cachedEntry.value
  }

  function set(key, value) {
    update(key, value, new Date())
  }

  return {
    clear: () => cache.clear(),
    delete: key => cache.delete(key),
    get,
    set,
  }
}

export default cachedMap
