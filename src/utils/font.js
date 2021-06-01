import { warnOnce } from './environment'

// Using generic names so we can change the font if needed, while using these
// generic names in our components.
export const DEFAULT_FONT_FAMILY = 'aragon-ui'
export const MANROPE_FONT_FAMILY = 'aragon-ui-Manrope'

export const manrope = () => `
  font-family: ${MANROPE_FONT_FAMILY}, Manrope;
`
const FONT_SIZES = {
  xxsmall: '11px',
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
  great: '37px',
}

const FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800',
}

const fontSizeCss = size => {
  const fontSize = FONT_SIZES[size]
  return fontSize !== undefined
    ? `
      line-height: 1.5;
      font-size: ${fontSize}
    `
    : ''
}

const weightCss = weight => {
  const fontWeight = FONT_WEIGHTS[weight]
  return fontWeight !== undefined ? `font-weight: ${fontWeight}` : ''
}

const smallcapsCss = smallcaps =>
  smallcaps
    ? `
      text-transform: lowercase;
      font-variant: small-caps;
    `
    : ''

const manropeCss = manrope =>
  manrope
    ? `
      font-family: ${MANROPE_FONT_FAMILY}, Manrope;
    `
    : ''

export function font({
  size,
  weight,
  smallcaps = false,
  manrope = false,
  deprecationNotice = true,
}) {
  if (deprecationNotice) {
    warnOnce('font()', 'font() is deprecated. Please use textStyle() instead.')
  }
  return `
    ${fontSizeCss(size)};
    ${weightCss(weight)};
    ${smallcapsCss(smallcaps)};
    ${manropeCss(manrope)};
  `
}
