import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated, interpolate } from 'react-spring'
import { Viewport } from '../../providers/Viewport'
import EscapeOutside from '../EscapeOutside/EscapeOutside'
import RootPortal from '../RootPortal/RootPortal'
import { springs } from '../../utils/styles'
import { noop } from '../../utils'

const cssPx = value => (typeof value === 'number' ? value + 'px' : value)

const Modal = ({
  children,
  onClose,
  padding,
  visible,
  width,
  overlayColor,
}) => (
  <RootPortal>
    <Viewport>
      {viewport => (
        <Transition
          native
          items={visible}
          from={{ opacity: 0, position: 1, scale: 0.97 }}
          enter={{ opacity: 1, position: 0, scale: 1 }}
          leave={{ opacity: 0, position: 0, scale: 0.97 }}
          config={springs.smooth}
        >
          {show =>
            show &&
            /* eslint-disable react/prop-types */
            (({ opacity, position, scale }) => (
              <React.Fragment>
                <Overlay style={{ opacity, background: overlayColor }} />
                <ContentWrapper
                  style={{
                    pointerEvents: visible ? 'auto' : 'none',
                    opacity,
                    transform: interpolate(
                      [position, scale],
                      (p, s) => `
                      translate3d(0, ${p * 5}px, 0)
                      scale3d(${s}, ${s}, 1)
                    `
                    ),
                  }}
                >
                  <div css="padding: 24px 12px">
                    <Content
                      role="alertdialog"
                      onEscapeOutside={onClose}
                      style={{
                        padding: cssPx(
                          typeof padding === 'function'
                            ? padding(viewport)
                            : padding
                        ),
                        width: cssPx(
                          typeof width === 'function' ? width(viewport) : width
                        ),
                      }}
                    >
                      {children}
                    </Content>
                  </div>
                </ContentWrapper>
              </React.Fragment>
            ))
          /* eslint-enable react/prop-types */
          }
        </Transition>
      )}
    </Viewport>
  </RootPortal>
)

Modal.defaultProps = {
  onClose: noop,
  padding: 24,
  width: viewport => Math.min(viewport.width - 48, 600),
  overlayColor: 'rgba(0, 0, 0, 0.5)',
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  overlayColor: PropTypes.string,
  padding: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string,
  ]),
  visible: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string,
  ]),
}

const ContentWrapper = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  overflow: auto;
`

const Content = styled(EscapeOutside)`
  overflow: hidden;
  min-width: 288px; /* 320px - 2 * 16px */
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
`

const Overlay = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export default Modal
