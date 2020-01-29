import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import FloatIndicator from '../FloatIndicator/FloatIndicator'
import LoadingRing from '../LoadingRing/LoadingRing'

function SyncIndicator({
  children,
  estimate,
  label,
  shift,
  visible,
  ...props
}) {
  return (
    <FloatIndicator visible={visible} shift={shift} {...props}>
      <LoadingRing />
      <div
        css={`
          margin-left: ${1.5 * GU}px;
        `}
      >
        {children || `${label} ${estimate ? `Estimate: ${estimate}` : ''} 🙏`}
      </div>
    </FloatIndicator>
  )
}

SyncIndicator.propTypes = {
  children: PropTypes.node,
  estimate: PropTypes.string,
  label: PropTypes.string,
  shift: PropTypes.number,
  visible: PropTypes.bool,
}

SyncIndicator.defaultProps = {
  label: 'Syncing data…',
}

export default SyncIndicator
