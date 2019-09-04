// Using generic names so we can change the font if needed, while using these
// generic names in our components.
export const DEFAULT_FONT_FAMILY = 'aragon-ui'
export const MONOSPACE_FONT_FAMILY = 'aragon-ui-monospace'

export const monospace = () => `
  font-family: ${MONOSPACE_FONT_FAMILY}, monospace;
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

const monospaceCss = monospace =>
  monospace
    ? `
      font-family: ${MONOSPACE_FONT_FAMILY}, monospace;
    `
    : ''

export const font = ({
  size,
  weight,
  smallcaps = false,
  monospace = false,
}) => {
  return `
    ${fontSizeCss(size)};
    ${weightCss(weight)};
    ${smallcapsCss(smallcaps)};
    ${monospaceCss(monospace)};
  `
}
