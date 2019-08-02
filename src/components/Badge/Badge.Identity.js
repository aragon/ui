import React from 'react'
import { Tag } from '../Tag/Tag'
import { warnOnce } from '../../utils/environment'

export default props => {
  warnOnce(
    '"Badge.Identity" has been deprecated. Please use "IdentityBadge" instead.'
  )

  return <Tag {...props} />
}
