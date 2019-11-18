import React from 'react'
import PropTypes from '../../proptypes'
import styled from 'styled-components'
import { theme } from '../../theme-legacy'
import { noop, warn } from '../../utils'
import { Button } from '../Button/Button'
import Text from '../Text/Text'
import Card from './Card'
import omit from 'lodash-es/omit'

class EmptyStateCard extends React.Component {
  static propTypes = {
    action: PropTypes.element,
    actionButton: PropTypes._component,
    actionDisabled: PropTypes.bool,
    actionText: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes._component]),
    onActivate: PropTypes.func,
    text: PropTypes.string,
    title: PropTypes.string,
  }
  static defaultProps = {
    title: 'Nothing here.',
    actionDisabled: false,
    onActivate: noop,
  }

  constructor(props) {
    super(props)
    this.displayWarnings({}, props)
  }

  componentDidUpdate(prevProps) {
    this.displayWarnings(prevProps, this.props)
  }

  displayWarnings(prevProps, props) {
    // Deprecated warnings
    if (prevProps.actionButton !== props.actionButton && props.actionButton) {
      warn(
        'The “actionButton” prop is deprecated. Please use “action” to pass ' +
          'a custom element instead.'
      )
    }
    if (
      prevProps.icon !== props.icon &&
      props.icon &&
      !React.isValidElement(props.icon)
    ) {
      warn(
        'Passing a component to the “icon” prop is deprecated. Please pass ' +
          'an element instead (i.e. use icon={<Icon />} rather than ' +
          'icon={Icon}).'
      )
    }

    // Display a warning if `action` is used to override the button, while also
    // using one of the props that apply to the default button component.
    const anyActionParam =
      props.actionDisabled || props.actionText || props.onActivate
    if (prevProps.action !== props.action && props.action && anyActionParam) {
      warn(
        'Using `action` takes priority over `actionDisabled`, `actionText`, ' +
          'and `onActivate`. Please use either `action` or any of these ' +
          'props.'
      )
    }
  }

  // Render icon, even when provided as a component (deprecated)
  iconElement() {
    const { icon } = this.props
    return !icon || React.isValidElement(icon)
      ? icon
      : React.createElement(icon)
  }

  // Render the action (usually a button)
  actionElement() {
    const {
      action,
      actionButton,
      actionDisabled,
      actionText,
      onActivate,
    } = this.props

    // If an action node is provided, it takes priority above the other props
    if (action) {
      return action
    }

    // If no label is provided, the button is not displayed
    if (!actionText) {
      return null
    }

    // Use the provided actionButton if it exists, or a local component.
    const Button = actionButton || DefaultActionButton

    return (
      <Button disabled={actionDisabled} mode="strong" onClick={onActivate} wide>
        {actionText}
      </Button>
    )
  }

  render() {
    const { title, text, ...props } = this.props
    const extraProps = omit(props, Object.keys(EmptyStateCard.propTypes))
    return (
      <Main {...extraProps}>
        <section>
          {this.iconElement()}
          <Heading>
            <Text color={theme.accent} weight="bold" size="large">
              {title}
            </Text>
          </Heading>
          {text && <Text.Block>{text}</Text.Block>}
          <ActionWrapper>{this.actionElement()}</ActionWrapper>
        </section>
      </Main>
    )
  }
}

const Main = styled(Card)`
  display: flex;
  padding: 40px 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  section {
    padding-top: 20px;
  }
`

const DefaultActionButton = styled(Button)`
  width: 150px;
`

const Heading = styled.h1`
  margin: 20px 0 5px;
`

const ActionWrapper = styled.div`
  margin-top: 20px;
`

export default EmptyStateCard
