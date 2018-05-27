import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppBar from './AppBar'

class AppView extends React.Component {
  static defaultProps = {
    title: '',
    padding: 30,
  }
  static propTypes = {
    appBar: PropTypes.element,
    title: PropTypes.string,
    children: PropTypes.node,
    padding: PropTypes.number,
  }
  render() {
    const { appBar, title, children, padding } = this.props
    return (
      <Main>
        <Header>{appBar || <AppBar title={title} />}</Header>
        <ScrollWrapper>
          <Content padding={padding}>{children}</Content>
        </ScrollWrapper>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`

const Header = styled.div`
  position: relative;
  z-index: 2;
  flex-shrink: 0;
`

const ScrollWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: ${({ padding }) => `${padding}px`};
`

export default AppView
