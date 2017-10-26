import React from 'react'
import styled from 'styled-components'
import { colors } from '@aragon/ui'

const StyledGroup = styled.div`
  margin-bottom: 40px;
  h2 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;
    color: ${colors.Black.Black};
  }
  ul {
    display: flex;
    flex-direction: ${props => (props.compact ? 'row' : 'column')};
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: ${props => (props.compact ? '0' : '20px')};
  }
  .color {
    width: ${props => (props.compact ? '50px' : '20px')};
    height: ${props => (props.compact ? '50px' : '20px')};
    margin-right: ${props => (props.compact ? '20px' : '10px')};
    border: 1px solid ${colors.Grey['Gainsboro']};
    border-radius: 60px;
  }
  .name {
    display: ${props => (props.compact ? 'none' : 'block')};
    font-size: 16px;
  }
`

const Group = ({ name, colors, compact }) => (
  <StyledGroup compact={compact}>
    <h2>{name}</h2>
    <ul>
      {Object.entries(colors).map(([name, color]) => (
        <li title={name} key={name}>
          <span className="color" style={{ background: color }} />
          <span className="name">{name}</span>
        </li>
      ))}
    </ul>
  </StyledGroup>
)

export default Group
