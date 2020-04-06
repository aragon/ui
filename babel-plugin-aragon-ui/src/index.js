import syntax from 'babel-plugin-syntax-jsx'
import { guStyledComponent, guCss } from './gu'

export default function({ types: t }) {
  return {
    inherits: syntax,
    visitor: {
      Program(path, state) {
        path.traverse(
          {
            JSXAttribute(path, state) {
              guCss(t, path, state)
            },
          },
          state
        )
      },
      TaggedTemplateExpression(path, state) {
        guStyledComponent(t, path, state)
      },
    },
  }
}
