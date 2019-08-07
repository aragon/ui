import React from 'react'
import { Count } from '../Count/Count'
import { warnOnce } from '../../utils/environment'

export default props => {
  warnOnce('"BadgeNumber" has been deprecated. Please use "Count" instead.')

  return <Count {...props} />
}
