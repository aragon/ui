/* @flow */
import React from 'react'
import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'

type Props = {
  compact: boolean,
}

const Logo = ({ compact }: Props) => (
  <a href="/" className="logo">
    <img
      alt="Aragon"
      src={compact ? logoCompact : logo}
      height={compact ? 36 : 51}
    />
  </a>
)

Logo.defaultProps = {
  compact: false,
}

export default Logo
