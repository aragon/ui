import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Attention from '../../icons/components/Attention'
import Bylaw from '../../icons/components/Bylaw'
import theme from '../../theme'
import { font } from '../../utils/styles'
import Info from './Info'

const Icon = styled.span`
  margin-right: 10px;
`

const Title = styled.div`
  color: ${theme.textSecondary};
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  ${font({ size: 'small' })};
`

const TitlelessBody = styled.div`
  display: flex;
  align-items: center;
`

const IconInfo = ({ children, icon, title, ...props }) => {
  let titleElm = title
  let bodyElm = (
    <TitlelessBody>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </TitlelessBody>
  )
  if (title) {
    titleElm = (
      <Title>
        {icon && <Icon>{icon}</Icon>}
        {title}
      </Title>
    )
    bodyElm = children
  }
  return (
    <Info title={titleElm} {...props}>
      {bodyElm}
    </Info>
  )
}
IconInfo.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  title: PropTypes.node,
}

const Action = props => <IconInfo icon={<Attention />} {...props} />

const PermissionIconInfo = styled(IconInfo)`
  ${Icon} {
    color: ${theme.infoPermissionsIcon};
  }
`

const Permissions = props => (
  <PermissionIconInfo
    background={theme.infoPermissionsBackground}
    icon={<Bylaw />}
    {...props}
  />
)

export { Action, Permissions }
export default IconInfo
