import React from 'react'
import styled from 'styled-components'
import { NormalizedHtml, RenderedMarkdown } from '@aragon/ui'

const MARKDOWN_HTML = "Italicized text is the *cat's meow*."
class App extends React.Component {
  render() {
    return (
      <Main>
        <NormalizedHtml>
          <RenderedMarkdown content={MARKDOWN_HTML} />
        </NormalizedHtml>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`

export default App
