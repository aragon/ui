/* @flow */
import React from 'react'
import styled from 'styled-components'
import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'
import logoMinimal from './assets/logo-minimal.svg'

import { BreakPoint } from '../..'

const Container = styled.span`
  display: flex;
  align-items: center;
`

type Props = {
  compact: boolean,
  renderLink: mixed,
}

const DefaultProps = {
  compact: false,
  renderLink: ({ url, children }) => <a href={url}>{children}</a>,
}

const Logo = ({ compact, renderLink }: Props) => {
  return (
    <span className="logo">
      {renderLink({
        url: '/',
        children: (
          <Container>
            <BreakPoint to="medium">
              <img alt="Aragon" src={logoMinimal} height={40} />
            </BreakPoint>
            <BreakPoint from="medium" to="large">
              <img alt="Aragon" src={logoMinimal} height={50} />
            </BreakPoint>
            <BreakPoint from="large">
              <img
                alt="Aragon"
                src={compact ? logoCompact : logo}
                height={compact ? 36 : 51}
              />
            </BreakPoint>
          </Container>
        ),
      })}
    </span>
  )
}

Logo.defaultProps = DefaultProps

export default Logo
