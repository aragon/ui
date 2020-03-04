import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import { Inside } from 'use-inside'
import RootPortal from '../RootPortal/RootPortal'
import { useTheme } from '../../theme'
import { GU, RADIUS, textStyle, springs } from '../../style'
import { useViewport } from '../../providers/Viewport/Viewport'
import { ToastContext } from '../ToastHub/ToastHub'

const FloatIndicator = React.memo(function FloatIndicator({
  children,
  visible,
  shift,
  ...props
}) {
  const theme = useTheme()
  const { below } = useViewport()
  const { itemsVisible: toastItemsVisible } = useContext(ToastContext)

  const wide = below('medium')
  const horizontalSpacing = wide ? 2 * GU : 3 * GU
  const horizontalSpacingEnd = horizontalSpacing + (shift || 0)

  return (
    <RootPortal>
      <Transition
        native
        items={toastItemsVisible ? false : visible}
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
                bottom: ${wide ? 2 * GU : 3 * GU}px;
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 0 ${horizontalSpacingEnd}px 0 ${horizontalSpacing}px;
              `}
            >
              <animated.div
                style={{
                  pointerEvents: visible ? 'auto' : 'none',
                  opacity: progress,
                  transform: progress.interpolate(
                    v => `translate3d(0, calc(10px * ${1 - v}), 0)`
                  ),
                }}
                css={`
                  flex-grow: ${Number(wide)};
                  display: flex;
                  align-items: center;
                  height: ${6 * GU}px;
                  padding: ${1 * GU}px ${2 * GU}px;
                  ${textStyle('body3')};
                  white-space: nowrap;
                  color: ${theme.floatingContent};
                  background: ${theme.floating};
                  border: 1px solid ${theme.border};
                  border-radius: ${RADIUS}px;
                  cursor: default;
                  justify-content: center;
                `}
                {...props}
              >
                <Inside name="FloatIndicator">{children}</Inside>
              </animated.div>
            </div>
          ))
        /* eslint-enable react/prop-types */
        }
      </Transition>
    </RootPortal>
  )
})

FloatIndicator.propTypes = {
  children: PropTypes.node.isRequired,
  shift: PropTypes.number,
  visible: PropTypes.bool,
}

FloatIndicator.defaultProps = {
  shift: 0,
  visible: true,
}

export default FloatIndicator
