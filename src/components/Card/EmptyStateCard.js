import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Card from './Card'

const EmptyStateCard = ({
  actionText,
  onActivate,
  text,
  title,
  actionButton: ActionButton,
  icon: Icon,
  ...props
}) => (
  <Main {...props}>
    <section>
      <Icon />
      <Heading>
        <Text color={theme.accent} weight="bold" size="large">
          {title}
        </Text>
      </Heading>
      <Text.Block>{text}</Text.Block>
      <ButtonWrapper>
        <ActionButton mode="strong" wide onClick={onActivate}>
          {actionText}
        </ActionButton>
      </ButtonWrapper>
    </section>
  </Main>
)

EmptyStateCard.propTypes = {
  actionText: PropTypes.string,
  onActivate: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
}

EmptyStateCard.defaultProps = {
  actionButton: Button,
  title: 'Nothing here.',
}

const Main = styled(Card)`
  display: flex;
  padding: 40px 60px;
  align-items: center;
  text-align: center;
  section {
    padding-top: 20px;
  }
`

const Heading = styled.h1`
  margin: 20px 0 5px;
`

const ButtonWrapper = styled.div`
  width: 150px;
  margin-top: 20px;
`

export default EmptyStateCard
