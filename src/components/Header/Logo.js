/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import getPublicUrl from '../../public-url'
import { BreakPoint } from '../..'

import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'
import logoMinimal from './assets/logo-minimal.svg'

const Container = styled.span`
  display: flex;
  align-items: center;
`

type Props = {
  compact: boolean,
  renderLink: ({ url: string, children: Node }) => Node,
  publicUrl: string,
}

const DefaultProps = {
  compact: false,
  renderLink: ({ url, children }) => <a href={url}>{children}</a>,
}

const Logo = ({ compact, renderLink, publicUrl }: Props) => {
  return (
    <span className="logo">
      {renderLink({
        url: '/',
        children: (
          <Container>
            <BreakPoint to="medium">
              <img alt="Aragon" src={publicUrl + logoMinimal} height={40} />
            </BreakPoint>
            <BreakPoint from="medium" to="large">
              <img alt="Aragon" src={publicUrl + logoMinimal} height={50} />
            </BreakPoint>
            <BreakPoint from="large">
              <img
                alt="Aragon"
                src={publicUrl + (compact ? logoCompact : logo)}
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

export default getPublicUrl(Logo)
