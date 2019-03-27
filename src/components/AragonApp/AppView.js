import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppBar from './AppBar'
import { stylingProps } from '../../utils'

class AppView extends React.Component {
  static defaultProps = {
    title: '',
    padding: 30,
    height: '100vh',
  }
  static propTypes = {
    appBar: PropTypes.element,
    title: PropTypes.string,
    children: PropTypes.node,
    padding: PropTypes.number,
    height: PropTypes.string,
    tabs: PropTypes.element,
  }
  render() {
    const { appBar, children, height, padding, tabs, title } = this.props
    return (
      <Main height={height} {...stylingProps(this)}>
        <Header>{appBar || <AppBar title={title} tabs={tabs} />}</Header>
        <ScrollWrapper>
          <Content padding={padding}>{children}</Content>
        </ScrollWrapper>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  height: ${p => p.height};
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
