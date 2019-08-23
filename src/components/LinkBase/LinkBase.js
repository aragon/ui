import React from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { RADIUS } from '../../style'
import { useTheme } from '../../theme'

function LinkBase({
  children,
  external,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  innerRef,
  showFocusRing,
  ...props
}) {
  const theme = useTheme()

  const passedProps = { ...props }
  if (external) {
    passedProps._target = 'blank'
  }

  return (
    <a
      ref={innerRef}
      tabIndex="0"
      {...passedProps}
      css={`
        position: relative;
        outline: 0;

        &:focus:after {
          content: '';
          position: absolute;
          top: ${-focusRingSpacing}px;
          left: ${-focusRingSpacing}px;
          right: ${-focusRingSpacing}px;
          bottom: ${-focusRingSpacing}px;
          border-radius: ${focusRingRadius}px;
          border: ${focusVisible && showFocusRing
            ? `2px solid ${theme.focus}`
            : '0'};
        }
      `}
    >
      {children}
    </a>
  )
}

LinkBase.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  focusRingRadius: PropTypes.number,
  focusRingSpacing: PropTypes.number,
  focusVisible: PropTypes.bool,
  innerRef: PropTypes.any,
  rel: PropTypes.string,
  showFocusRing: PropTypes.bool,
}

LinkBase.defaultProps = {
  external: false,
  focusRingRadius: RADIUS,
  focusRingSpacing: 6,
  rel: 'noopener noreferrer',
  showFocusRing: true,
}

const LinkBaseWithFocus = React.forwardRef((props, ref) => (
  <FocusVisible>
    {({ focusVisible, onFocus }) => (
      <LinkBase
        innerRef={ref}
        onFocus={onFocus}
        focusVisible={focusVisible}
        {...props}
      />
    )}
  </FocusVisible>
))

export default LinkBaseWithFocus
