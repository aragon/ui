import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import getPublicUrl, { prefixUrl } from '../../public-url'
import theme from '../../theme'
import infoIcon from './assets/info.svg'

const Info = getPublicUrl(({ title, publicUrl, children }) => (
  <Main>
    <Title>
      <Icon src={prefixUrl(infoIcon, publicUrl)} alt="" />
      {title}
    </Title>
    {children && <div>{children}</div>}
  </Main>
))

const Main = styled.section`
  padding: 15px;
  background: ${theme.infoBackground};
  border-radius: 3px;
`

const Icon = styled.img`
  display: block;
  margin-right: 10px;
`

const Title = styled.h1`
  display: flex;
`

export default Info
