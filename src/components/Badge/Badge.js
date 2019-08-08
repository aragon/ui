import React from 'react'
import { Tag } from '../Tag/Tag'
import { Count } from '../Count/Count'
import { warnOnce } from '../../utils/environment'
import { useTheme } from '../../theme'

function deprecationWarning() {
  warnOnce(
    'Badge',
    '"Badge" and its variants have been deprecated. Please use "Tag" instead.'
  )
}

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
      <Count
        background={background}
        color={foreground}
        value={label}
        size={small ? 'small' : 'normal'}
        {...props}
      />
    )
  }
  return (
    <Tag background={background} color={foreground} {...props}>
      {children || label}
    </Tag>
  )
}

function BadgeInfo(props) {
  return <BadgeNumber {...props} />
}

function BadgeIdentity(props) {
  return <Badge {...props} />
}

function BadgeApp(props) {
  return <Badge {...props} mode="tag" />
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

Badge.Info = BadgeInfo
Badge.Notification = BadgeNotification
Badge.Identity = BadgeIdentity
Badge.App = BadgeApp

export default Badge
