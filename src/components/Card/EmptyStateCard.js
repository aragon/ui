import React from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { Inside, warnOnce } from '../../utils'
import { usePublicUrl } from '../../providers/PublicUrl'
import { useTheme } from '../../theme'
import Card from './Card'
import illustrationDefault from './assets/empty-state-card-illustration-default.png'

const EmptyStateCard = React.memo(function EmptyStateCard({
  action,
  icon,
  illustration,
  text,
  ...props
}) {
  const theme = useTheme()
  const publicUrl = usePublicUrl()

  if (icon !== undefined) {
    warnOnce(
      'EmptyStateCard:icon',
      'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.'
    )
    if (illustration === undefined) {
      illustration = icon
    }
  }

  // default illustration
  if (!illustration) {
    illustration = (
      <img src={publicUrl + illustrationDefault} alt="" height={20 * GU} />
    )
  }

  return (
    <Inside name="EmptyStateCard">
      <Card
        css={`
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: ${20 * GU}px 1fr auto;
          height: ${42 * GU}px;
          padding: ${2 * GU}px;
          text-align: center;
        `}
        {...props}
      >
        <div
          css={`
            display: flex;
            justify-content: center;
            overflow: hidden;
          `}
        >
          {illustration}
        </div>
        <div
          css={`
            color: ${theme.surfaceContent};
            ${textStyle('title4')};
          `}
        >
          {text}
        </div>
        <div>{action}</div>
      </Card>
    </Inside>
  )
})

EmptyStateCard.propTypes = {
  action: PropTypes.node,
  illustration: PropTypes.node,
  text: PropTypes.node.isRequired,

  // deprecated
  icon: PropTypes.node,
}

export default EmptyStateCard
