import { useEffect, useMemo, useState } from 'react'
import cachedMap from '../utils/cached-map'

const srcCache = cachedMap()

// Check if a remote image exists.
export function useImageExists(src) {
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let image = new Image()

    const init = () => {
      if (!src) {
        setExists(false)
        setLoading(false)
        return
      }

      if (srcCache.get(src)) {
        success()
        return
      }

      setExists(false)
      setLoading(true)

      // TODO: ensure only one image is loading at a time for a given src.
      image.addEventListener('load', success)
      image.src = src
    }

    const success = () => {
      setLoading(false)
      setExists(true)
      srcCache.set(src, true)
      done()
    }

    const done = () => {
      if (image) {
        image.removeEventListener('load', success)
        image = null
      }
    }

    init()

    return done
  }, [src])

  return useMemo(() => ({ src, exists, loading }), [src, exists, loading])
}

// render prop
export const ImageExists = ({ src, children }) => children(useImageExists(src))
