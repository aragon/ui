import React from 'react'
import { Tag } from '../Tag/Tag'
import { warnOnce } from '../../utils/environment'

export default props => {
  warnOnce('"BadgeNumber" has been deprecated. Please use "Count" instead.')

  return <Tag {...props} />
}
