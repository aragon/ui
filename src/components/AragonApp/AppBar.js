import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { PublicUrl } from '../../providers/PublicUrl'
import { theme } from '../../theme'
import Text from '../Text/Text'
import { unselectable } from '../../utils/styles'

import chevronSvg from './assets/chevron.svg'

const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 64px;
  background: ${theme.contentBackground};
  border-bottom: 1px solid ${theme.contentBorder};
  ${unselectable()};
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

const StyledAppBarTitle = PublicUrl.hocWrap(styled.h1`
  padding-right: 20px;
  margin-right: calc(20px - 7px);
  white-space: nowrap;
  background-image: ${({ chevron }) =>
    chevron ? css`url(${PublicUrl.styledUrl(chevronSvg)})` : 'none'};
  background-position: 100% 50%;
  background-repeat: no-repeat;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`)

const AppBar = ({ children, endContent, title, onTitleClick, ...props }) => (
  <StyledAppBar {...props}>
    {title && (
      <StyledAppBarStart>
        <StyledAppBarTitle
          chevron={!!children}
          clickable={!!onTitleClick}
          onClick={onTitleClick}
        >
          <Text size="xxlarge">{title}</Text>
        </StyledAppBarTitle>
      </StyledAppBarStart>
    )}
    {children}
    {endContent && <StyledAppBarEnd>{endContent}</StyledAppBarEnd>}
  </StyledAppBar>
)

AppBar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  endContent: PropTypes.node,
  onTitleClick: PropTypes.func,
}

AppBar.defaultProps = {
  title: '',
  onTitleClick: () => {},
}

export default AppBar
