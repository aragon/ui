import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Card from './Card'

const StyledCard = Card.extend`
  display: flex;
  padding: 40px 60px;
  align-items: center;
  text-align: center;
  section {
    padding-top: 20px;
  }
`

const StyledHeading = styled.h1`
  margin: 20px 0 5px;
`

const StyledActionButton = styled(Button)`
  width: 150px;
  margin-top: 20px;
`

const EmptyStateCard = ({
  actionText,
  onActivate,
  text,
  title,
  actionButton: ActionButton,
  icon: Icon,
  ...props
}) => (
  <StyledCard {...props}>
    <section>
      <Icon />
      <StyledHeading>
        <Text color={theme.accent} weight="bold" size="large">
          {title}
        </Text>
      </StyledHeading>
      <Text.Block>{text}</Text.Block>
      <ActionButton mode="strong" onClick={onActivate}>
        {actionText}
      </ActionButton>
    </section>
  </StyledCard>
)

EmptyStateCard.propTypes = {
  actionButton: PropTypes.node,
  actionText: PropTypes.string,
  icon: PropTypes.node,
  onActivate: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
}

EmptyStateCard.defaultProps = {
  actionButton: StyledActionButton,
  title: 'Nothing here.',
}

export default EmptyStateCard
