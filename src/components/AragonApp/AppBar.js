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
  height: 100%;
  padding-left: ${({ padding }) => `${padding}px`};
`
const StyledAppBarEnd = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  padding-right: ${({ padding }) => `${padding}px`};
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

const AppBar = ({
  children,
  padding,
  endContent,
  title,
  onTitleClick,
  ...props
}) => (
  <StyledAppBar {...props}>
    {title && (
      <StyledAppBarStart padding={padding}>
        <StyledAppBarTitle
          chevron={Boolean(children)}
          clickable={Boolean(onTitleClick)}
          onClick={onTitleClick}
        >
          {typeof title === 'string' ? (
            <Text size="xxlarge">{title}</Text>
          ) : (
            title
          )}
        </StyledAppBarTitle>
      </StyledAppBarStart>
    )}
    {children}
    {endContent && (
      <StyledAppBarEnd padding={padding}>{endContent}</StyledAppBarEnd>
    )}
  </StyledAppBar>
)

AppBar.propTypes = {
  children: PropTypes.node,
  endContent: PropTypes.node,
  onTitleClick: PropTypes.func,
  padding: PropTypes.number,
  title: PropTypes.node,
}

AppBar.defaultProps = {
  onTitleClick: () => {},
  padding: 30,
  title: '',
}

export default AppBar
