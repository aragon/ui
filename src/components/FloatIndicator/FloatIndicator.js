import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import RootPortal from '../RootPortal/RootPortal'
import { useTheme } from '../../theme'
import { GU, RADIUS, textStyle, springs } from '../../style'

const FloatIndicator = React.memo(function FloatIndicator({
  children,
  visible,
}) {
  const theme = useTheme()
  return (
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
                justify-content: flex-end;
                bottom: 25px;
                padding-right: ${2 * GU}px;
              `}
            >
              <Box
                css={`
                  background: ${theme.floating};
                  color: ${theme.floatingContent};
                  border: 1px solid ${theme.border};
                `}
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
  )
})

FloatIndicator.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

FloatIndicator.defaultProps = {
  visible: true,
}

const Box = styled(animated.div)`
  display: flex;
  padding: ${GU}px ${3 * GU}px;
  border-radius: ${RADIUS}px;
  ${textStyle('body3')};
  cursor: default;
`

export default FloatIndicator
