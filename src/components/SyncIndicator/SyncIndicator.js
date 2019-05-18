import React from 'react'
import PropTypes from 'prop-types'
import FloatIndicator from '../FloatIndicator/FloatIndicator'
import LoadingRing from '../LoadingRing/LoadingRing'

function SyncIndicator({ visible, label }) {
  return (
    <FloatIndicator visible={visible}>
      <LoadingRing animated />
      <span css="margin-left: 5px">{label}</span>
    </FloatIndicator>
  )
}

SyncIndicator.propTypes = {
  label: PropTypes.string,
  visible: PropTypes.bool,
}

SyncIndicator.defaultProps = {
  label: 'Syncing data…',
}

export default SyncIndicator
