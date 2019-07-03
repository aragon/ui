import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import { font } from '../../utils/styles'

export const TASK_LIST_CLASSNAME = 'task-list-item'

const HtmlWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${font({ weight: 'normal' })}
    margin-bottom: 16px;
    margin-top: 24px;
  }
  h1,
  h2 {
    padding-bottom: 4px;
    border-bottom: 1px solid ${theme.contentBorder};
  }
  h1 {
    ${font({ size: 'great' })}
  }
  h2 {
    ${font({ size: 'xxlarge' })}
  }
  h3 {
    ${font({ size: 'xlarge' })}
  }
  h4 {
    ${font({ size: 'large' })}
  }
  h5 {
    ${font({ size: 'normal' })}
  }
  h6 {
    color: ${theme.textSecondary};
    ${font({ size: 'small' })}
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
    padding: 16px;
  }
  ul,
  ol {
    padding-left: 32px;
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

class NormalizedHtml extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props
    return <HtmlWrapper>{children}</HtmlWrapper>
  }
}

export default NormalizedHtml
