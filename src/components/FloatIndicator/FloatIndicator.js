import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import RootPortal from '../RootPortal/RootPortal'
import { springs } from '../../utils/styles'
import { theme } from '../../theme-legacy'
import { font } from '../../utils/styles/font'

const FloatIndicator = React.memo(({ children, visible }) => (
  <RootPortal>
    <Transition
      native
      items={visible}
      from={{ progress: 0 }}
      enter={{ progress: 1 }}
      leave={{ progress: 0 }}
      config={springs.smooth}
    >
      {show =>
        show &&
        /* eslint-disable react/prop-types */
        (({ progress }) => (
          <div
            css={`
              position: absolute;
              z-index: 1;
              width: 100%;
              display: flex;
              justify-content: center;
              bottom: 25px;
            `}
          >
            <Box
              style={{
                pointerEvents: visible ? 'auto' : 'none',
                opacity: progress,
                transform: progress.interpolate(
                  v => `translate3d(0, calc(10px * ${1 - v}), 0)`
                ),
              }}
            >
              {children}
            </Box>
          </div>
        ))
      /* eslint-enable react/prop-types */
      }
    </Transition>
  </RootPortal>
))

FloatIndicator.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

FloatIndicator.defaultProps = {
  visible: true,
}

const Box = styled(animated.div)`
  display: flex;
  padding: 8px 20px;
  background: ${theme.contentBackground};
  color: ${theme.textSecondary};
  border: 1px solid ${theme.contentBorder};
  border-radius: 3px;
  ${font({ size: 'small' })};
  cursor: default;
`

export default FloatIndicator
