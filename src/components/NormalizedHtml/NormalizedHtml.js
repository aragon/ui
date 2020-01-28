import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'

export const TASK_LIST_CLASSNAME = 'task-list-item'

function NormalizedHtml({ children }) {
  const theme = useTheme()

  const HtmlWrapper = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${textStyle({ weight: 'normal' })}
      margin-bottom: ${2 * GU}px;
      margin-top: ${3 * GU}px;
    }
    h1,
    h2 {
      padding-bottom: 4px;
      border-bottom: 1px solid ${theme.contentBorder};
    }
    h1 {
      ${textStyle({ size: 'great' })}
    }
    h2 {
      ${textStyle({ size: 'xxlarge' })}
    }
    h3 {
      ${textStyle({ size: 'xlarge' })}
    }
    h4 {
      ${textStyle({ size: 'large' })}
    }
    h5 {
      ${textStyle({ size: 'normal' })}
    }
    h6 {
      color: ${theme.textSecondary};
      ${textStyle({ size: 'small' })}
    }
    p,
    blockquote,
    table,
    pre {
      margin: 16px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
    blockquote {
      padding: 0 16px;
      border-left: 4px solid ${theme.textTertiary};
      color: ${theme.textTertiary};
    }
    a {
      color: ${theme.gradientStart};
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    a > code,
    p > code {
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
      padding: 3px 6px;
    }
    table {
      border-collapse: collapse;
    }
    tr {
      border-top: 1px solid ${theme.contentBorder};
    }
    tr:nth-child(2n) {
      background-color: #f8f8f8;
    }
    th,
    td {
      border: 1px solid ${theme.contentBorder};
      padding: 8px 16px;
    }
    img {
      max-width: 95%;
    }
    pre {
      background-color: ${theme.mainBackground};
      border-radius: 3px;
      overflow: auto;
      padding: ${2 * GU}px;
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
    li.${TASK_LIST_CLASSNAME} {
      list-style-type: none;
      position: relative;
      & > button:first-child {
        position: absolute;
        margin-left: 0;
        margin-top: 5px;
        right: 100%;
      }
    }
  `
  return <HtmlWrapper>{children}</HtmlWrapper>
}

NormalizedHtml.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NormalizedHtml
