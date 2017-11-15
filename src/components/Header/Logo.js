/* @flow */
import React from 'react'
import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'

type Props = {
  compact: boolean,
  renderLink: mixed,
}

const DefaultProps = {
  compact: false,
  renderLink: ({ url, children }) => <a href={url}>{children}</a>,
}

const Logo = ({ compact, renderLink }: Props) => (
  <span className="logo">
    {renderLink({
      url: '/',
      children: (
        <img
          alt="Aragon"
          src={compact ? logoCompact : logo}
          height={compact ? 36 : 51}
        />
      ),
    })}
  </span>
)

Logo.defaultProps = DefaultProps

export default Logo
