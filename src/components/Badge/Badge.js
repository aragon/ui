import React from 'react'
import { Tag } from '../Tag/Tag'
import { warnOnce } from '../../utils/environment'

export default props => {
  warnOnce('"Badge" has been deprecated. Please use "Tag" instead.')

  return <Tag {...props} />
}
