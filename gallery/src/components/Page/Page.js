import React from 'react'
import styled from 'styled-components'
import color from 'onecolor'
import { theme } from '@aragon/ui'
import renderReadme from 'src/render-readme'
import MarkdownContent from './MarkdownContent'
import Frame from './Frame'
import Resizable from './Resizable'

const StyledPage = styled.section`
  width: 100%;
  padding: 40px;
  color: #717171;
  code {
    font-family: 'Source Code Pro', monospace;
  }
  > h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    color: #000;
  }
  h2,
  h3 {
    color: #000;
    font-weight: 600;
  }
  h2 {
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;
    color: #000;
  }
  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    line-height: 2;
  }
  .deprecated {
    color: ${theme.negativeText};
    border-radius: 5px;
    padding: 5px 10px;
    background: ${color(theme.negative)
      .alpha(0.8)
      .cssa()};
  }
`

class Page extends React.Component {
  state = { loading: false, intro: '', doc: '' }
  async componentDidMount() {
    const { readme } = this.props
    if (!readme) return

    // Wait 150ms before displaying the loader
    const loadingDelay = setTimeout(() => {
      if (!this.props.intro) {
        this.setState({ loading: true })
      }
    }, 150)

    const { intro, doc } = await renderReadme(readme)

    clearTimeout(loadingDelay)
    this.setState({ intro, doc, loading: false })
  }
  render() {
    const { title, readme, children } = this.props
    const { intro, doc, loading } = this.state

    const content = (
      <div>
        <MarkdownContent content={intro} />
        {children}
        <MarkdownContent content={doc} />
      </div>
    )

    return (
      <StyledPage>
        <h1>{title}</h1>
        {loading && <p>Loading…</p>}
        {!readme || intro ? content : null}
      </StyledPage>
    )
  }
}

Page.Demo = ({ opaque, height, children }) => (
  <div>
    <h2>Demonstration</h2>
    <Resizable>
      <Frame opaque={opaque} height={height}>
        {children}
      </Frame>
    </Resizable>
  </div>
)

export default Page
