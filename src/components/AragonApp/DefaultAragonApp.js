/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import AragonApp from './AragonApp'

const StyledAragonApp = styled(AragonApp)`
  display: flex;
  flex-direction: column;
`

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const StyledContent = styled.div`
  width: 100%;
  padding: 30px;
  align-self: flex-start;
`

type Props = {
  children: Node,
  appBar?: Node,
  empty?: boolean,
  placeholder?: Node,
}

const DefaultAragonApp = ({
  appBar,
  children,
  empty,
  placeholder,
  ...props
}: Props) => (
  <StyledAragonApp {...props}>
    {appBar}
    <StyledContentContainer>
      {empty ? placeholder : <StyledContent>{children}</StyledContent>}
    </StyledContentContainer>
  </StyledAragonApp>
)

export default DefaultAragonApp
