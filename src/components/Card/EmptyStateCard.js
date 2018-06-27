/* @flow */
import type { Node } from 'react'
import React from 'react'
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

// $FlowFixMe
const StyledActionButton = styled(Button)`
  width: 150px;
  margin-top: 20px;
`

type Props = {
  actionButton: Node,
  actionText: string,
  icon: Node,
  onActivate: mixed,
  text: string,
  title: string,
}

const DefaultProps = {
  actionButton: StyledActionButton,
  title: 'Nothing here.',
}

const EmptyStateCard = ({
  actionText,
  onActivate,
  text,
  title,
  actionButton: ActionButton,
  icon: Icon,
  ...props
}: Props) => (
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

EmptyStateCard.defaultProps = DefaultProps

export default EmptyStateCard
