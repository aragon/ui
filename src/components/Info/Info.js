import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, RADIUS } from '../../style'

const Info = ({ children, title, ...props }) => {
  const theme = useTheme()

  return (
    <Main
      background={theme.infoSurface}
      color={theme.infoContent}
      accent={theme.infoBorder}
      {...props}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Main>
  )
}

Info.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node,
}

const Main = styled.section`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-left: ${({ accent }) => `2px solid ${accent}`};
  padding: ${2 * GU}px;
  border-radius: ${RADIUS}px;
  word-wrap: break-word;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
`

export default Info
