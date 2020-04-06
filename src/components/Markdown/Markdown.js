import React from 'react'
import PropTypes from 'prop-types'
import MarkdownToJsx from 'markdown-to-jsx'
import NormalizedHtml from '../NormalizedHtml/NormalizedHtml'
import Link from '../Link/Link'
import Checkbox from '../Input/Checkbox'

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
  content,
  markdownToJsxOptions,
  unstyled,
  ...props
}) {
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: { a: Link, input: CustomInput },
  }

  const markdown = (
    <MarkdownToJsx
      options={
        markdownToJsxOptions
          ? markdownToJsxOptions(markdownToJsxOptionsBase)
          : markdownToJsxOptionsBase
      }
    >
      {content}
    </MarkdownToJsx>
  )

  return (
    <div {...props}>
      {unstyled ? markdown : <NormalizedHtml>{markdown}</NormalizedHtml>}
    </div>
  )
}

Markdown.propTypes = {
  allowHtml: PropTypes.bool,
  content: PropTypes.string.isRequired,
  markdownToJsxOptions: PropTypes.func,
  unstyled: PropTypes.bool,
}

Markdown.defaultProps = {
  unstyled: false,
}

export default Markdown
