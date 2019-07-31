import React from 'react'
import PropTypes from 'prop-types'
import { IconBlank } from '../../icons'
import { GU, textStyle } from '../../style'
import { Inside, warnOnce } from '../../utils'
import { useTheme } from '../../theme'
import Card from './Card'

const EmptyStateCard = React.memo(function EmptyStateCard({
  action,
  icon,
  illustration,
  text,
}) {
  const theme = useTheme()

  if (icon !== undefined) {
    warnOnce(
      'EmptyStateCard:icon',
      'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.'
    )
    if (illustration === undefined) {
      illustration = icon
    }
  }

  // To be replaced by a proper empty illustration
  if (!illustration) {
    illustration = (
      <IconBlank
        width={16 * GU}
        height={16 * GU}
        css={`
          color: ${theme.surfaceIcon};
        `}
      />
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
