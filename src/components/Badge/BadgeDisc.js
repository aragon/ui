import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import Badge from './Badge'

const BadgeDisc = ({ number, small, type, ...props }) => {
  return (
    <Badge shape={small ? 'smalldisc' : 'disc'} {...props}>
      {number}
    </Badge>
  )
}

BadgeDisc.defaultProps = {
  number: 0,
  small: false,
  type: 'info',
  color: theme.positiveText,
  background: theme.positive,
}

BadgeDisc.propTypes = {
  number: PropTypes.number,
  small: PropTypes.boolean,
  type: PropTypes.oneOf(['info', 'notification']),
  color: theme.positiveText,
  background: theme.positive,
}

const Main = styled.span`
  display: inline-flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  width: ${({ small }) => (small ? '14' : '18')}px;
  height: ${({ small }) => (small ? '14' : '18')}px;
  line-height: ${({ small }) => (small ? '13' : '17')}px;
  border-radius: ${({ small }) => (small ? '7' : '9')}px;
  font-size: ${({ small }) => (small ? '10' : '12')}px;
  font-weight: 600;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`

export default BadgeDisc
