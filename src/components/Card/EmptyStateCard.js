/* @flow */
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
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
  actionText: string,
  icon: string,
  onActivate: mixed,
  text: string,
  title: string,
}

const DefaultProps = {
  title: 'Nothing here.',
}

const EmptyStateCard = ({
  actionText,
  icon,
  onActivate,
  text,
  title,
  ...props
}: Props) => (
  <StyledCard {...props}>
    <section>
      <img src={icon} alt="" />
      <StyledHeading>
        <Text color={theme.accent} weight="bold" size="large">
          {title}
        </Text>
      </StyledHeading>
      <Text.Block>{text}</Text.Block>
      <StyledActionButton mode="strong" onClick={onActivate}>
        {actionText}
      </StyledActionButton>
    </section>
  </StyledCard>
)

EmptyStateCard.defaultProps = DefaultProps

export default EmptyStateCard
