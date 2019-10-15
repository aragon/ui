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
  margin-top: ${GU * 2.25}px;
  padding-right: 7px;

  ${breakpoint(
    'medium',
    `
      max-width: 255px;
      margin-right: 0;
      margin-left: auto;
    `
  )}
`

export const DatePickersWrapper = styled.div`
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
  padding: 0;
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
        font-size: 9px;
        padding: 0 4px;
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
  margin-bottom: ${GU}px;

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
