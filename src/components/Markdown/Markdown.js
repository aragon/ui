import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import NormalizedHtml, {
  TASK_LIST_CLASSNAME,
} from '../NormalizedHtml/NormalizedHtml'
import SafeLink from '../Link/SafeLink'
import Checkbox from '../Input/Checkbox'

const Link = ({ children, ...props }) => (
  <SafeLink {...props} target="_blank">
    {children}
  </SafeLink>
)

const ListItem = ({ checked, children, ...props }) => {
  const checkbox = checked !== null
  return (
    <li className={checkbox ? TASK_LIST_CLASSNAME : ''}>
      {checkbox ? <Checkbox checked={checked} /> : null}
      {children}
    </li>
  )
}

Link.propTypes = {
  children: PropTypes.node,
}

ListItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
}

class Markdown extends React.Component {
  static propTypes = {
    reactMarkdownProps: PropTypes.shape({
      ...ReactMarkdown.PropTypes,
    }),
    content: PropTypes.string.isRequired,
    unstyled: PropTypes.bool,
  }

  static defaultProps = {
    reactMarkdownProps: {
      renderers: {
        link: Link,
        listItem: ListItem,
      },
    },
    unstyled: false,
    content: '',
  }

  render() {
    const { content, unstyled, reactMarkdownProps } = this.props

    return (
      <div>
        {unstyled ? (
          <ReactMarkdown source={content} {...reactMarkdownProps} />
        ) : (
          <NormalizedHtml>
            <ReactMarkdown source={content} {...reactMarkdownProps} />
          </NormalizedHtml>
        )}
      </div>
    )
  }
}

export default Markdown
