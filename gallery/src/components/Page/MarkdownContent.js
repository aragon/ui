import React from 'react'
import styled from 'styled-components'

const StyledMarkdown = styled.div`
  code {
    padding: 0 3px;
    border-radius: 5px;
    color: #000;
    background: white;
  }
  pre {
    padding: 20px;
    border-radius: 5px;
  }
  pre code {
    color: inherit;
    background: inherit;
  }
  h2 code,
  h3 code {
    padding: 0;
    background: none;
  }
  p,
  ul {
    list-style-position: inside;
    line-height: 2;
    margin-bottom: 20px;
  }
`

const MarkdownContent = ({ content }) => {
  if (!content) return null
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownContent
