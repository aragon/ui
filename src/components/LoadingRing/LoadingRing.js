import React from 'react'
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingRing = React.memo(function LoadingRing({ paused, ...props }) {
  const theme = useTheme()
  const [insideSyncIndicator] = useInside('SyncIndicator')
  if (insideSyncIndicator) {
    return (
      <span
        css={`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-name: ${paused ? 'none' : spin};
        `}
        {...props}
      >
        <span
          css={`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid ${theme.floatingContent};
            opacity: 0.3;
          `}
        />
        <span
          css={`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid ${theme.accent};
            border-bottom-color: ${paused ? theme.accent : 'transparent'};
            border-left-color: ${paused ? theme.accent : 'transparent'};
          `}
        />
      </span>
    )
  } else {
    return (
      <span
        css={`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-name: ${paused ? 'none' : spin};
        `}
        {...props}
      >
        <span
          css={`
            position: relative;
            width: 10px;
            height: 100%;
          `}
          style={{
            overflow: paused ? 'visible' : 'hidden',
          }}
        >
          <span
            css={`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 14px;
              height: 14px;
              border-radius: 50%;
              border: 1px solid ${theme.accent};
            `}
          />
        </span>
      </span>
    )
  }
})

LoadingRing.propTypes = {
  paused: PropTypes.bool,
}

LoadingRing.defaultProps = {
  paused: false,
}

export default LoadingRing
