import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors } from '../../theme'
import { font } from '../../utils/styles'
import BadgeInfo from './Badge.Info'
import BadgeNotification from './Badge.Notification'
import BadgeIdentity from './Badge.Identity'
import BadgeApp from './Badge.App'

const shapeStyles = shape => {
  if (shape === 'disc') {
    return css`
      overflow: hidden;
      padding-top: 2px;
      letter-spacing: -0.5px;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border-radius: 9px;
      ${font({ size: 'xsmall', weight: 'bold' })};
      line-height: 20px;
    `
  }
  if (shape === 'smalldisc') {
    return css`
      overflow: hidden;
      padding-top: 1px;
      letter-spacing: -1px;
      justify-content: center;
      align-items: center;
      width: 14px;
      height: 14px;
      border-radius: 7px;
      ${font({ size: 'xxsmall', weight: 'bold' })};
      line-height: 14px;
    `
  }
  if (shape === 'compact') {
    return css`
      padding: 1px 3px 0;
      border-radius: 3px;
      ${font({ size: 'xxsmall' })};
    `
  }
  // round shape
  return css`
    padding: 1px 8px 0;
    border-radius: 9px;
    ${font({ size: 'xsmall' })};
  `
}

const Badge = styled.span`
  display: inline-flex;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ foreground }) => foreground};
  background: ${({ background }) => background};
  ${({ shape }) => shapeStyles(shape)};
`

Badge.defaultProps = {
  shape: 'round',
  foreground: colors.Purple.Portage,
  background: colors.Purple.Lavender,
}

Badge.propTypes = {
  shape: PropTypes.oneOf(['disc', 'smalldisc', 'compact', 'round']),
  background: PropTypes.string,
  foreground: PropTypes.string,
}

Badge.Info = BadgeInfo
Badge.Notification = BadgeNotification
Badge.Identity = BadgeIdentity
Badge.App = BadgeApp

export default Badge
