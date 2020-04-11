import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { RADIUS, GU, textStyle } from '../../style'

function NormalizedHtml({ children, ...props }) {
  const theme = useTheme()
  return (
    <div
      css={`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: ${2 * GU}px;
          margin-top: ${3 * GU}px;
        }
        h1,
        h2 {
          padding-bottom: ${0.5 * GU}px;
        }
        h1 {
          ${textStyle('title1')};
        }
        h2 {
          ${textStyle('title2')};
        }
        h3 {
          ${textStyle('title3')};
        }
        h4 {
          ${textStyle('title4')};
        }
        h5 {
          ${textStyle('body1')};
        }
        h6 {
          ${textStyle('body1')};
        }
        p,
        pre,
        table,
        blockquote {
          margin: ${2 * GU}px 0;
          &:last-child {
            margin-bottom: 0;
          }
        }
        li p {
          margin: 0;
        }
        hr {
          height: ${0.5 * GU}px;
          margin: ${1 * GU}px 0;
          background: ${theme.border};
          border: 0;
        }
        blockquote {
          padding: 0 ${2 * GU}px;
          border-left: ${0.5 * GU}px solid ${theme.border};
          color: ${theme.contentSecondary};
        }
        a {
          color: ${theme.link};
          text-decoration: underline;
        }
        pre,
        a > code,
        p > code {
          padding: ${0.5 * GU}px ${0.75 * GU}px;
          background: ${theme.surfaceHighlight};
          border-radius: ${RADIUS}px;
        }
        pre {
          overflow: auto;
          padding: ${2 * GU}px;
          border-radius: ${RADIUS}px;
        }
        table {
          border-collapse: collapse;
        }
        tr {
          border-top: 1px solid ${theme.border};
        }
        th,
        td {
          border: 1px solid ${theme.border};
          padding: ${1 * GU}px ${2 * GU}px;
        }
        img {
          max-width: calc(100% - ${2 * GU}px);
        }
        ul,
        ol {
          padding-left: ${4 * GU}px;
        }
        ol ol,
        ul ol {
          list-style-type: lower-roman;
        }
        ol ol ol,
        ol ul ol,
        ul ol ol,
        ul ul ol {
          list-style-type: lower-alpha;
        }
        button[role='checkbox'] {
          position: relative;
          top: 2px;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

NormalizedHtml.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NormalizedHtml
