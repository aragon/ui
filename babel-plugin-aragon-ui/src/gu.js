import { isStyled, isHelper } from './utils/detectors'

const GU = 8
const GU_REGEX = /([^0-9a-zA-Z])((-?[0-9]*\.?[0-9]+)gu)/gm

function guReplacer(match, p1, p2, p3) {
  const value = parseInt(p3, 10)
  if (isNaN(value)) {
    return match
  }
  return `${p1}${value * GU}px`
}

function replaceGus(value) {
  return value.replace(GU_REGEX, guReplacer)
}

// Transform a styled component or helper (e.g. css``)
export function guStyledComponent(t, path, state) {
  if (isStyled(t)(path.node.tag, state) || isHelper(t)(path.node.tag, state)) {
    path.node.quasi.quasis.forEach(element => {
      element.value.raw = replaceGus(element.value.raw)
      element.value.cooked = replaceGus(element.value.cooked)
    })
  }
}

// Transform the css prop
export function guCss(t, path, state) {
  if (path.node.name.name !== 'css') {
    return
  }

  // css="width: 10gu"
  if (t.isStringLiteral(path.node.value)) {
    path.node.value.value = replaceGus(path.node.value.value)
    return
  }

  // css={`
  //   width: 10gu;
  // `}
  if (
    t.isJSXExpressionContainer(path.node.value) &&
    t.isTemplateLiteral(path.node.value.expression)
  ) {
    path.node.value.expression.quasis.forEach(element => {
      element.value.raw = replaceGus(element.value.raw)
      element.value.cooked = replaceGus(element.value.cooked)
    })
    return
  }
}
