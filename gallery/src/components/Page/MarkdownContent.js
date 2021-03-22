import React from 'react'
import styled from 'styled-components'
import { useTheme, textStyle, GU, RADIUS } from '@tecommons/ui'

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

        table {
          margin-bottom: ${4 * GU}px;
          border-collapse: separate;
          border-radius: ${RADIUS}px;
          border-spacing: 0;
        }

        tbody {
          border-radius: ${RADIUS}px;
        }

        td {
          padding: ${1 * GU}px;
          background: ${theme.surface};
        }

        // Still no border-radius on tr / tbody
        tbody tr:first-child td {
          border-top: 1px solid ${theme.border};
        }
        tbody tr:last-child td {
          border-bottom: 1px solid ${theme.border};
        }
        tbody tr td:first-child {
          border-left: 1px solid ${theme.border};
        }
        tbody tr td:last-child {
          border-right: 1px solid ${theme.border};
        }
        tbody tr:first-child td:first-child {
          border-top-left-radius: ${RADIUS}px;
        }
        tbody tr:first-child td:last-child {
          border-top-right-radius: ${RADIUS}px;
        }
        tbody tr:last-child td:first-child {
          border-bottom-left-radius: ${RADIUS}px;
        }
        tbody tr:last-child td:last-child {
          border-bottom-right-radius: ${RADIUS}px;
        }

        th {
          padding: ${0 * GU}px ${2 * GU}px ${1 * GU}px ${1 * GU}px;
          font-weight: 400;
          text-align: left;
          ${textStyle('label2')};
          color: ${theme.surfaceContentSecondary};
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
