import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledMarkdown = styled.div`
  code {
    padding: 0 3px;
    border-radius: 5px;
    color: ${theme.textSecondary};
    background: ${theme.contentBackground};
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
    margin-bottom: 30px;
  }
`

const MarkdownContent = ({ content }) => {
  if (!content) return null
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownContent
