import React from 'react'
import PropTypes from 'prop-types'
import SafeLink from '../Link/SafeLink'
import Checkbox from '../Input/Checkbox'
import MDReactComponent from 'react-markdown'

class RenderedMarkdown extends React.Component {
  static propTypes = {
    content: PropTypes.string,
  }

  static defaultProps = {
    content: PropTypes.string,
  }

  render() {
    const { content } = this.props

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
        { className: checkbox ? 'task-list-item' : '' },
        checkbox,
        children
      )
    }

    return (
      <MDReactComponent
        source={content}
        renderers={{ link: Link, listItem: ListItem }}
      />
    )
  }
}

export default RenderedMarkdown
