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

function Markdown({ allowHtml, content, unstyled }) {
  const markdown = (
    <MarkdownToJsx
      options={{
        disableParsingRawHTML: !allowHtml,
        overrides: { a: Link, input: CustomInput },
      }}
    >
      {content}
    </MarkdownToJsx>
  )

  return unstyled ? markdown : <NormalizedHtml>{markdown}</NormalizedHtml>
}

Markdown.propTypes = {
  allowHtml: PropTypes.bool,
  content: PropTypes.string.isRequired,
  unstyled: PropTypes.bool,
}

Markdown.defaultProps = {
  unstyled: false,
}

export default Markdown
