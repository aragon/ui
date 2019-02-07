import React from 'react'
import styled from 'styled-components'
import { Popover, Root, Button } from '@aragon/ui'

class App extends React.Component {
  _opener = React.createRef()
  state = {
    show: false,
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleOpen = () => {
    this.setState({ show: true })
  }
  render() {
    const { title } = this.props
    const { show } = this.state
    return (
      <Main>
        <div>
          <Button
            ref={this._opener}
            onClick={this.handleOpen}
            size="small"
            mode="strong"
          >
            Open
          </Button>
          <Popover
            opener={this._opener.current}
            visible={show}
            onClose={this.handleClose}
          >
            <Box>
              <span>hello </span>
              <Button mode="strong" size="mini">
                focus me
              </Button>
            </Box>
          </Popover>
        </div>
      </Main>
    )
  }
}

const Main = styled.div`
  display: grid;
  width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Box = styled.div`
  padding: 50px;
`

export default App
