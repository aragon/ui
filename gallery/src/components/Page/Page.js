import React from 'react'
import styled from 'styled-components'
import renderReadme from 'src/render-readme'
import MarkdownContent from './MarkdownContent'

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
`

class Page extends React.Component {
  state = { intro: '', doc: '' }
  async componentDidMount() {
    if (!this.props.readme) return
    const { intro, doc } = await renderReadme(this.props.readme)
    this.setState({ intro, doc })
  }
  render() {
    const { title, children } = this.props
    const { intro, doc } = this.state
    return (
      <StyledPage>
        <h1>{title}</h1>

        <MarkdownContent content={intro} />

        <div>
          <h2>Example</h2>
          <div>{children}</div>
        </div>

        <MarkdownContent content={doc} />
      </StyledPage>
    )
  }
}

export default Page
