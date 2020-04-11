import React from 'react'
import PropTypes from 'prop-types'
import MarkdownToJsx from 'markdown-to-jsx'
import Checkbox from '../Input/Checkbox'
import Link from '../Link/Link'
import NormalizedHtml from './NormalizedHtml'

function CustomInput(props) {
  props = { ...props }
  if (props.type === 'checkbox') {
    delete props.type
    return <Checkbox {...props} />
  }
  return <input {...props} />
}
CustomInput.propTypes = { type: PropTypes.string }

function Markdown({
  allowHtml,
  className,
  content,
  markdownToJsxOptions,
  normalized,
  style,
  ...props
}) {
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: { a: Link, input: CustomInput },
  }

  const markdown = (
    <div className={className} style={style}>
      <MarkdownToJsx
        options={
          markdownToJsxOptions
            ? markdownToJsxOptions(markdownToJsxOptionsBase)
            : markdownToJsxOptionsBase
        }
      >
        {content}
      </MarkdownToJsx>
    </div>
  )

  return normalized ? <NormalizedHtml>{markdown}</NormalizedHtml> : markdown
}

Markdown.propTypes = {
  allowHtml: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  markdownToJsxOptions: PropTypes.func,
  normalized: PropTypes.bool,
  style: PropTypes.object,
}

Markdown.defaultProps = {
  normalized: false,
}

export default Markdown
