import React from 'react'
import styled, { css } from 'styled-components'

import ButtonBase from '../ButtonBase/ButtonBase'
import { useTheme } from '../../theme'
import { GU, breakpoint, textStyle } from '../../style'
import { IconLeft, IconRight } from '../../icons/components'

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 8px;

  ${breakpoint(
    'medium',
    `
      display: block;
      text-align: right;
    `
  )}
`

export const Wrap = styled.div`
  > div {
    border: 0;
    box-shadow: none;
  }

  ${breakpoint(
    'medium',
    `
      display: flex;
      flex-direction: row;
      align-items: baseline;
    `
  )}
`

export const MonthWrapper = styled.ol`
  margin: 0;
  padding: 0 0.5em 0.5em;
  display: grid;
  grid-template: auto / repeat(7, 1fr);
  list-style: none;
`

export const TodayIndicator = styled.span`
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
      css={`
        padding: ${GU / 2}px ${GU}px;
        font-size: 9px;
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

  span {
    ${({ small, theme }) => css`
      ${textStyle(small ? 'body4' : 'body3')};
      ${small &&
        css`
          color: ${theme.hint};
          font-weight: 600;
        `}
    `}
  }
`

// eslint-disable-next-line react/prop-types
export const Selector = ({ prev, next, children, small }) => {
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
