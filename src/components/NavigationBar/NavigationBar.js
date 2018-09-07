import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import { springs } from '../../utils/styles/spring'
import LeftIcon from './LeftIcon'

class NavigationBar extends React.Component {
  static propTypes = {
    onBack: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.node),
  }
  static defaultProps = {
    onBack: () => {},
    items: [],
  }
  state = {
    cachedItems: null,
    direction: -1,

    // only animate after the first rendering
    animate: false,
  }
  static getDerivedStateFromProps(props, state) {
    const updatedState = { cachedItems: props.items }
    if (!state.cachedItems) {
      return updatedState
    }
    return {
      ...updatedState,
      direction: state.cachedItems.length > props.items.length ? 1 : -1,
    }
  }
  componentDidMount() {
    this.setState({ animate: true })
  }
  render() {
    const { onBack, items } = this.props
    const { animate } = this.state
    const displayedItems = items
      .map((node, index) => ({ node, index }))
      .slice(-1)
    return (
      <Container>
        <Transition
          keys={displayedItems.map(
            // Use a different key than 0 when there is only one item, so that
            // the “leave” transition of the first item can be executed when a
            // second item is added.
            item => (items.length === 1 ? -1 : item.index)
          )}
          config={springs.smooth}
          from={{ opacity: 0, position: this.state.direction * -1 }}
          enter={{ opacity: 1, position: 0 }}
          leave={{ opacity: 0, position: this.state.direction }}
          immediate={!animate}
          native
        >
          {displayedItems.map(item => styles => (
            <Item
              label={item.node}
              onBack={onBack}
              displayBack={items.length > 1 && item.index > 0}
              {...styles}
            />
          ))}
        </Transition>
      </Container>
    )
  }
}

const Item = ({ opacity, position, displayBack, onBack, label }) => (
  <animated.span
    style={{
      display: 'flex',
      alignItems: 'center',
      opacity,
      transform: position.interpolate(p => `translate(${p * 20}px, 0)`),
    }}
  >
    <Title>
      {displayBack && (
        <BackButton onClick={onBack}>
          <LeftIcon />
        </BackButton>
      )}
      <Label>{label}</Label>
    </Title>
  </animated.span>
)

Item.propTypes = {
  opacity: PropTypes.object,
  position: PropTypes.object,
  displayBack: PropTypes.bool,
  onBack: PropTypes.func,
  label: PropTypes.node,
}

const Container = styled.span`
  display: flex;
  position: relative;
  height: 100%;
`

const Title = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`

const Label = styled.span`
  padding-left: 30px;
  white-space: nowrap;
  font-size: 22px;
`

const BackButton = styled.span`
  display: flex;
  align-items: center;
  height: 63px;
  padding: 0 30px;
  cursor: pointer;
  svg {
    color: hsl(179, 76%, 48%);
  }
  :active svg {
    color: hsl(179, 76%, 63%);
  }
  & + ${Label} {
    padding-left: 0;
  }
`

export default NavigationBar
