import { useEffect, useMemo, useState } from 'react'

// Check if a remote image exists.
export function useImageExists(src) {
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      let image = new Image()

      const done = () => {
        if (image) {
          image.removeEventListener('load', onLoad)
          image = null
        }
      }

      const onLoad = () => {
        setLoading(false)
        setExists(true)
        done()
      }

      setExists(false)
      setLoading(true)

      image.addEventListener('load', onLoad)
      image.src = src

      return () => {
        setLoading(false)
        setExists(false)
        done()
      }
    },
    [src]
  )

  return useMemo(() => ({ src, exists, loading }), [src, exists, loading])
}

// render prop
export const ImageExists = ({ src, children }) => children(useImageExists(src))
