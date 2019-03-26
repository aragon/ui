import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import EscapeOutside from '../EscapeOutside/EscapeOutside'
import { breakpoint, springs } from '../../utils/styles'
import { Root } from '../../providers'

const Modal = ({ visible, children, zIndex, onClose }) => (
  <Transition
    native
    items={visible}
    from={{ opacity: 0, enterProgress: 0, blocking: false }}
    enter={{ opacity: 1, enterProgress: 1, blocking: true }}
    leave={{ opacity: 0, enterProgress: 1, blocking: false }}
    config={springs.lazy}
  >
    {show =>
      show &&
      /* eslint-disable react/prop-types */
      (({ opacity, enterProgress, blocking }) => (
        <Wrap
          style={{
            pointerEvents: blocking ? 'auto' : 'none',
            zIndex,
          }}
        >
          <Overlay style={{ opacity: opacity.interpolate(v => v * 0.5) }} />
          <AnimatedWrap
            style={{
              opacity,
              transform: enterProgress.interpolate(
                v => `
                    translate3d(0, ${(1 - v) * 10}px, 0)
                    scale3d(${1 - (1 - v) * 0.03}, ${1 - (1 - v) * 0.03}, 1)
                  `
              ),
            }}
          >
            <WrapModal role="alertdialog" onEscapeOutside={onClose}>
              {children}
            </WrapModal>
          </AnimatedWrap>
        </Wrap>
      ))
    /* eslint-enable react/prop-types */
    }
  </Transition>
)

Modal.defaultProps = { zIndex: 1 }

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
}

const WrapModal = styled(EscapeOutside)`
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;
  padding: 16px;
  max-width: calc(100vw - 32px);
  margin: 16px 0;

  ${breakpoint(
    'medium',
    `
      max-width: 50vw;
      max-height: 75vh;
      overflow: auto;
    `
  )}
`

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(59, 59, 59);
`

const Wrap = styled.div`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`

const AnimatedWrap = styled(animated.div)`
  position: relative;
  min-height: 0;
`

export default props => (
  <Root>
    {rootElement => {
      if (!rootElement) {
        throw new Error('<Modal> needs to be nested in <Root.Provider>.')
      }
      return ReactDOM.createPortal(<Modal {...props} />, rootElement)
    }}
  </Root>
)
