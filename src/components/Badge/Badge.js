import React from 'react'
import { Tag } from '../Tag/Tag'
import { warnOnce } from '../../utils/environment'
import { useTheme } from '../../theme'

function deprecationWarning() {
  warnOnce(
    'Badge',
    '"Badge" and its variants have been deprecated. Please use "Tag" instead.'
  )
}

/* eslint-disable react/prop-types */
function Badge({ background, foreground, shape, children, ...props }) {
  deprecationWarning()
  return (
    <Tag
      background={background}
      color={foreground}
      size={shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'}
      {...props}
    >
      {children}
    </Tag>
  )
}

function BadgeNumber({
  background,
  children,
  foreground,
  label,
  shape,
  small,
  ...props
}) {
  deprecationWarning()
  if (!children && typeof label === 'number') {
    return (
      <Badge
        limitDigits
        background={background}
        color={foreground}
        label={label}
        size={small ? 'small' : 'normal'}
        {...props}
      />
    )
  }
  return (
    <Tag count={true} background={background} color={foreground} {...props}>
      {children || label}
    </Tag>
  )
}

function BadgeInfo(props) {
  return <BadgeNumber {...props} />
}

function BadgeIdentity(props) {
  return <Badge {...props} uppercase={false} />
}

function BadgeApp(props) {
  return <Badge {...props} />
}

function BadgeNotification(props) {
  const theme = useTheme()
  return (
    <BadgeNumber
      background={String(theme.positive)}
      foreground={String(theme.positiveContent)}
      {...props}
    />
  )
}
/* eslint-enable react/prop-types */

Badge.Info = BadgeInfo
Badge.Notification = BadgeNotification
Badge.Identity = BadgeIdentity
Badge.App = BadgeApp

export { BadgeNumber }
export default Badge
