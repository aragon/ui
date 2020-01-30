import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import FloatIndicator from '../FloatIndicator/FloatIndicator'
import LoadingRing from '../LoadingRing/LoadingRing'

function SyncIndicator({ children, label, shift, visible, ...props }) {
  return (
    <FloatIndicator visible={visible} shift={shift} {...props}>
      <LoadingRing />
      <div
        css={`
          margin-left: ${1.5 * GU}px;
        `}
      >
        {children}
      </div>
    </FloatIndicator>
  )
}

SyncIndicator.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  shift: PropTypes.number,
  visible: PropTypes.bool,
}

SyncIndicator.defaultProps = {
  children: 'Syncing data… 🙏',
}

export default SyncIndicator
