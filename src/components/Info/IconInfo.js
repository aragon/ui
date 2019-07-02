import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconAttention, IconBylaw } from '../../icons'
import { theme } from '../../theme-legacy'
import color from '../../utils/color'
import { font } from '../../utils'
import Info from './Info'

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
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

const Action = props => <IconInfo icon={<IconAttention />} {...props} />

const redColor = color(theme.negative)

const Alert = props => (
  <IconInfo
    background={redColor.alpha(0.06)}
    icon={
      <IconAttention
        bg={redColor.alpha(0.1).toString()}
        color={redColor.toString()}
      />
    }
    {...props}
  />
)

const PermissionIconInfo = styled(IconInfo)`
  ${Icon} {
    color: ${theme.infoPermissionsIcon};
  }
`

const Permissions = props => (
  <PermissionIconInfo
    background={theme.infoPermissionsBackground}
    icon={<IconBylaw />}
    {...props}
  />
)

export { Action, Alert, Permissions }
export default IconInfo
