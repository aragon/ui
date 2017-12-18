/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'
import getPublicUrl, { styledPublicUrl as asset } from '../../public-url'
import theme from '../../theme'
import Text from '../Text/Text'

import chevronSvg from './assets/chevron.svg'

const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  background: ${theme.contentBackground};
  border-bottom: 1px solid ${theme.contentBorder};
`

const StyledAppBarStart = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
`
const StyledAppBarEnd = styled.div`
  margin-left: auto;
  padding-right: 30px;
`

const StyledAppBarTitle = getPublicUrl(styled.h1`
  padding-right: 20px;
  margin-right: 20px;
  background-image: ${({ chevron }) =>
    chevron ? css`url(${asset(chevronSvg)})` : 'none'};
  background-position: 100% 50%;
  background-repeat: no-repeat;
`)

type Props = {
  title: string,
  children?: Node,
  endContent?: Node,
}

const AppBar = ({ children, endContent, title, ...props }: Props) => (
  <StyledAppBar {...props}>
    <StyledAppBarStart>
      <StyledAppBarTitle chevron={!!children}>
        <Text size="xxlarge">{title}</Text>
      </StyledAppBarTitle>
    </StyledAppBarStart>
    {children}
    {endContent && <StyledAppBarEnd>{endContent}</StyledAppBarEnd>}
  </StyledAppBar>
)

export default AppBar
