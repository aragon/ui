import styled, { css } from 'styled-components'

import { breakpoint } from '../../style'

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

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MonthWrapper = styled.ol`
  margin: 0;
  padding: 0.5em;
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
