import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import Card from './Card'
import { GU, textStyle } from '../../style'
import { Inside } from '../../utils'
import { useTheme } from '../../theme'

const EmptyStateCard = React.memo(function EmptyStateCard({
  actionButton,
  actionText,
  icon,
  onClick,
  text,
}) {
  const theme = useTheme()

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
        {icon}
        <span
          css={`
            color: ${theme.content};
            ${textStyle('title4')};
          `}
        >
          {text}
        </span>
        {actionButton && (
          <Button onClick={onClick} wide mode="strong">
            {actionText}
          </Button>
        )}
      </Card>
    </Inside>
  )
})

EmptyStateCard.propTypes = {
  actionButton: PropTypes.bool,
  actionText: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node,
}

export default EmptyStateCard
