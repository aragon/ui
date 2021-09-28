import { useState, useEffect, useMemo } from 'react';
import cachedMap from '../lib/cached-map.js';

const srcCache = cachedMap(); // Check if a remote image exists and can be loaded within a specific amount of time.

function useImageExists(src, timeUntilFallback = 50) {
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [displayFallback, setDisplayFallback] = useState(false);
  useEffect(() => {
    let image = new Image();
    const fallbackTimer = setTimeout(() => setDisplayFallback(true), timeUntilFallback);

    const init = () => {
      if (!src) {
        setExists(false);
        setLoading(false);
        return;
      }

      if (srcCache.get(src)) {
        success();
        return;
      }

      setExists(false);
      setLoading(true); // TODO: ensure only one image is loading at a time for a given src.

      image.addEventListener('load', success);
      image.src = src;
    };

    const success = () => {
      setLoading(false);
      setExists(true);
      srcCache.set(src, true);
      done();
    };

    const done = () => {
      clearTimeout(fallbackTimer);

      if (image) {
        image.removeEventListener('load', success);
        image = null;
      }
    };

    init();
    return done;
  }, [src, timeUntilFallback]);
  return useMemo(() => {
    return {
      src,
      displayFallback,
      exists,
      loading
    };
  }, [src, displayFallback, exists, loading]);
} // render prop

const ImageExists = ({
  timeUntilFallback,
  src,
  children
}) => children(useImageExists(src, timeUntilFallback));

export { ImageExists, useImageExists };
//# sourceMappingURL=useImageExists.js.map
