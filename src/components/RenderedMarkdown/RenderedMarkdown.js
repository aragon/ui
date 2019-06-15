import React from 'react'
import PropTypes from 'prop-types'
import SafeLink from '../Link/SafeLink'
import Checkbox from '../Input/Checkbox'
import { TASK_LIST_CLASSNAME } from '../NormalizedHtml/NormalizedHtml'
import MDReactComponent from 'react-markdown'

const Link = ({ children, ...props }) => (
  <SafeLink {...props} target="_blank">
    {children}
  </SafeLink>
)

const ListItem = ({ checked, children, ...props }) => {
  let checkbox = null
  if (checked !== null) {
    checkbox = <Checkbox checked={checked} />
  }

  return React.createElement(
    'li',
    { className: checkbox ? TASK_LIST_CLASSNAME : '' },
    checkbox,
    children
  )
}

Link.propTypes = {
  children: PropTypes.node,
}

ListItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
}

class RenderedMarkdown extends React.Component {
  static propTypes = {
    content: PropTypes.string,
  }

  static defaultProps = {
    content: PropTypes.string,
  }

  render() {
    const { content } = this.props

    return (
      <MDReactComponent
        source={content}
        renderers={{ link: Link, listItem: ListItem }}
      />
    )
  }
}

export default RenderedMarkdown
