import React from 'react'
import { warnOnce } from '../../utils'
import Link from './Link'

function ExternalLink(props) {
  warnOnce(
    'ExternalLink',
    'ExternalLink is deprecated. Please use Link instead.'
  )
  return <Link external {...props} />
}

function SafeLink(props) {
  warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.')
  return <Link {...props} />
}

export { ExternalLink, Link, SafeLink }
