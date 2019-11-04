import React from 'react'
import styled, { css } from 'styled-components'

import ButtonBase from '../ButtonBase/ButtonBase'
import { useTheme } from '../../theme'
import { GU, breakpoint, textStyle } from '../../style'
import { IconLeft, IconRight } from '../../icons/components'

export const HoverIndicator = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  ${({ theme, selected }) => css`
    background: ${selected ? theme.selected : theme.surface};
    border: 2px solid ${theme.accent};
  `}
`

const ArrowButton = props => {
  const theme = useTheme()
  return (
    <ButtonBase
      focusRingRadius={GU * 2}
      css={`
        font-size: 9px;
        padding: 5px 4px 0 4px;
        margin-top: -4px;
        color: ${theme.hint};

        &:hover {
          color: inherit;
        }
      `}
      {...props}
    />
  )
}

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${1 * GU}px;

  span {
    ${({ small, theme }) => css`
      ${textStyle(small ? 'label2' : 'body2')};
      ${small &&
        css`
          color: ${theme.hint};
          font-weight: 600;
        `}
    `}
  }
`

// eslint-disable-next-line react/prop-types
export function Selector({ prev, next, children, small }) {
  const theme = useTheme()
  return (
    <SelectorWrapper small={small} theme={theme}>
      <ArrowButton onClick={prev}>
        <IconLeft size="small" />
      </ArrowButton>
      <span>{children}</span>
      <ArrowButton onClick={next}>
        <IconRight size="small" />
      </ArrowButton>
    </SelectorWrapper>
  )
}
