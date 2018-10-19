import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Card from './Card'

const EmptyStateCard = ({
  actionDisabled,
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
        <ActionButton
          disabled={actionDisabled}
          mode="strong"
          wide
          onClick={onActivate}
        >
          {actionText}
        </ActionButton>
      </ButtonWrapper>
    </section>
  </Main>
)

const PropTypesComponent = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
])

EmptyStateCard.propTypes = {
  actionButton: PropTypesComponent,
  actionDisabled: PropTypes.bool,
  actionText: PropTypes.string,
  icon: PropTypesComponent.isRequired,
  onActivate: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
}

EmptyStateCard.defaultProps = {
  title: 'Nothing here.',
  actionButton: styled(Button)`
    width: 150px;
  `,
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
  margin-top: 20px;
`

export default EmptyStateCard
