import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components'
import { useInside } from 'use-inside'
import { useTheme } from '../../theme'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SIZE_SMALL = 14
const SIZE_MEDIUM = 24

const CONTAINER_SIZE_SMALL = 22
const CONTAINER_SIZE_MEDIUM = 24

const BORDER_WIDTH_STRONG = 2.5
const BORDER_WIDTH_MEDIUM = 1

let lastInstanceId = 1

const LoadingRing = React.memo(function LoadingRing({
  paused,
  mode: modeProp,
  ...props
}) {
  const theme = useTheme()
  const [instanceId] = useState(() => `sync-indicator-${lastInstanceId++}`)
  const [insideFloatIndicator] = useInside('FloatIndicator')

  const mode = modeProp || (insideFloatIndicator ? 'half-circle' : 'two-parts')

  const containerSize =
    mode === 'half-circle' ? CONTAINER_SIZE_MEDIUM : CONTAINER_SIZE_SMALL
  const borderWidth =
    mode === 'half-circle' ? BORDER_WIDTH_STRONG : BORDER_WIDTH_MEDIUM
  const size = (mode === 'half-circle' ? SIZE_MEDIUM : SIZE_SMALL) - borderWidth

  const [gapLength, dashLength] = useMemo(() => {
    const length = Math.PI * size

    // Both modes display a full circle when paused.
    if (paused) {
      return [0, length]
    }

    if (mode === 'two-parts') {
      return [length / 4, length / 4]
    }

    // half-circle
    return [length / 2, length / 2]
  }, [mode, size, paused])

  return (
    <span
      css={`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${containerSize}px;
        height: ${containerSize}px;
      `}
      {...props}
    >
      <svg
        width={size + borderWidth}
        height={size + borderWidth}
        viewBox={`0 0 ${size + borderWidth} ${size + borderWidth}`}
      >
        <linearGradient
          id={`${instanceId}-gradient`}
          gradientTransform="rotate(90)"
        >
          <stop offset="0%" stopColor={theme.accentEnd} />
          <stop offset="100%" stopColor={theme.accentStart} />
        </linearGradient>
        {insideFloatIndicator && (
          <circle
            cx="50%"
            cy="50%"
            r={size / 2}
            fill="transparent"
            stroke={theme.floatingContent.alpha(0.3)}
            strokeWidth={borderWidth}
          />
        )}
        <mask id={`${instanceId}-mask`}>
          <circle
            cx="50%"
            cy="50%"
            r={size / 2}
            fill="transparent"
            stroke={`url(#${instanceId}-gradient)`}
            strokeWidth={borderWidth}
            strokeDasharray={`${dashLength} ${gapLength}`}
            css={`
              animation-duration: 1s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
              animation-name: ${paused ? 'none' : spin};
              transform-origin: 50% 50%;
            `}
          />
        </mask>
        <circle
          cx="50%"
          cy="50%"
          r={size / 2 + borderWidth / 2}
          fill={`url(#${instanceId}-gradient)`}
          mask={`url(#${instanceId}-mask)`}
        />
      </svg>
    </span>
  )
})

LoadingRing.propTypes = {
  mode: PropTypes.oneOf(['two-parts', 'half-circle']),
  paused: PropTypes.bool,
}

LoadingRing.defaultProps = {
  paused: false,
}

export default LoadingRing
