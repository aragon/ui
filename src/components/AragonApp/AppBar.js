import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { PublicUrl } from '../../providers/PublicUrl'
import { theme } from '../../theme'
import Text from '../Text/Text'
import { unselectable } from '../../utils/styles'

import chevronSvg from './assets/chevron.svg'

// The app bar height includes its border.
const BAR_HEIGHT = 64

const AppBar = ({
  children,
  endContent,
  title,
  onTitleClick,
  tabs,
  ...props
}) => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: ${BAR_HEIGHT}px;
      background: ${theme.contentBackground};
      border-bottom: ${tabs ? '0' : '1px'} solid ${theme.contentBorder};
      ${unselectable()};
    `}
  >
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: ${BAR_HEIGHT - 1}px;
      `}
      {...props}
    >
      {title && (
        <div
          css={`
            display: flex;
            align-items: center;
            padding-left: 30px;
          `}
        >
          <AppBarTitle
            chevron={Boolean(children)}
            clickable={Boolean(onTitleClick)}
            onClick={onTitleClick}
          >
            {typeof title === 'string' ? (
              <Text size="xxlarge">{title}</Text>
            ) : (
              title
            )}
          </AppBarTitle>
        </div>
      )}
      {children}
      {endContent && (
        <div
          css={`
            margin-left: auto;
            padding-right: 30px;
          `}
        >
          {endContent}
        </div>
      )}
    </div>
    {tabs}
  </div>
)

const AppBarTitle = PublicUrl.hocWrap(styled.h1`
  padding-right: 20px;
  margin-right: calc(20px - 7px);
  white-space: nowrap;
  background-image: ${({ chevron }) =>
    chevron ? css`url(${PublicUrl.styledUrl(chevronSvg)})` : 'none'};
  background-position: 100% 50%;
  background-repeat: no-repeat;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`)

AppBar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  endContent: PropTypes.node,
  onTitleClick: PropTypes.func,
  tabs: PropTypes.element,
}

AppBar.defaultProps = {
  title: '',
  onTitleClick: () => {},
}

export default AppBar
