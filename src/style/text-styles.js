import { manrope } from '../utils/font'

const TEXT_STYLES = {
  header1: {
    size: 74,
    weight: 700,
    lineHeight: 2,
  },
  header2: {
    size: 64,
    weight: 700,
    lineHeight: 2,
  },
  header3: {
    size: 54,
    weight: 600,
    lineHeight: 2,
  },
  header4: {
    size: 44,
    weight: 500,
    lineHeight: 2,
  },
  header5: {
    size: 34,
    weight: 500,
    lineHeight: 2,
  },
  header6: {
    size: 24,
    weight: 500,
    lineHeight: 2,
  },

  paragraph1: {
    size: 28,
    weight: 500,
    lineHeight: 2,
  },
  paragraph2: {
    size: 28,
    weight: 500,
    lineHeight: 2,
  },
  paragraph3: {
    size: 20,
    weight: 400,
    lineHeight: 2,
  },

  title1: {
    size: 24,
    weight: 500,
    lineHeight: 1.5,
  },
  title2: {
    size: 18,
    weight: 500,
    lineHeight: 1.5,
  },
  title3: {
    size: 18,
    weight: 400,
    lineHeight: 1.5,
  },
  title4: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
  },

  body1: {
    size: 20,
    weight: 400,
    lineHeight: 1.5,
  },
  body2: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
  },
  body3: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
  },
  body4: {
    size: 12,
    weight: 400,
    lineHeight: 1.5,
  },
  label1: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase',
  },
  label2: {
    size: 12,
    weight: 600,
    lineHeight: 1.5,
    transform: 'uppercase',
  },
  label3: {
    size: 10,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase',
  },
  address1: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
    manrope: true,
  },
  address2: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    manrope: true,
  },
}

const STYLES_CSS = {
  size: value => `font-size: ${value}px;`,
  weight: value => `font-weight: ${value};`,
  transform: value => `text-transform: ${value};`,
  lineHeight: value => `line-height: ${value};`,
  manrope: value => (value ? manrope() : ''),
}

function textStyleToCss(textStyle) {
  return Object.entries(textStyle)
    .map(([name, value]) => STYLES_CSS[name](value))
    .join('')
}

function textStyle(name, includeLineHeight = true) {
  if (!TEXT_STYLES[name]) {
    throw new Error('textStyle(): the text style doesn’t exist: ' + name)
  }

  const style = { ...TEXT_STYLES[name] }

  if (!includeLineHeight) {
    delete style.lineHeight
  }

  return textStyleToCss(style)
}

export { TEXT_STYLES, textStyle }
