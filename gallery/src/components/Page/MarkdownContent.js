import React from 'react'
import styled from 'styled-components'
import { useTheme, textStyle, GU, RADIUS } from '@aragon/ui'

function StyledMarkdown(props) {
  const theme = useTheme()
  return (
    <div
      css={`
        code {
          color: ${theme.contentSecondary};
        }
        pre {
          padding: ${3 * GU}px;
          border-radius: ${RADIUS}px;
        }
        pre code {
          padding: 0;
          color: inherit;
          background: inherit;
        }
        h2 code,
        h3 code {
          padding: 0;
          background: none;
          color: inherit;
        }
        a {
          color: ${theme.link};
        }
        .info {
          background: ${theme.infoSurface};
          color: ${theme.infoSurfaceContent};
          border-left: 2px solid ${theme.info};
          padding: ${2 * GU}px;
          border-radius: ${RADIUS}px;
          word-wrap: break-word;
          margin-bottom: ${4 * GU}px;
        }
        .info p:last-child {
          margin-bottom: 0;
        }
        img {
          max-width: 100%;
        }
        figcaption .ref {
          vertical-align: middle;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${2 * GU}px;
          height: ${2 * GU}px;
          overflow: hidden;
          padding-top: 1px;
          background: tomato;
          color: white;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 600;
          position: relative;
          top: -1px;
        }
      `}
      {...props}
    />
  )
}

const MarkdownContent = ({ content }) => {
  if (!content) return null
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownContent
