import React from 'react'
import PropTypes from 'prop-types'
import FloatIndicator from '../FloatIndicator/FloatIndicator'
import LoadingRing from '../LoadingRing/LoadingRing'
import { Inside } from '../../utils/inside'

function SyncIndicator({ visible, label, estimate }) {
  return (
    <FloatIndicator visible={visible}>
      <Inside name="SyncIndicator">
        <LoadingRing animated />
      </Inside>
      <span css="margin-left: 5px; line-height: 30px;">
        {label}&nbsp;{estimate && `Estimate: ${estimate} `}🙏
      </span>
    </FloatIndicator>
  )
}

SyncIndicator.propTypes = {
  label: PropTypes.string,
  estimate: PropTypes.string,
  visible: PropTypes.bool,
}

SyncIndicator.defaultProps = {
  label: 'Syncing data…',
}

export default SyncIndicator
