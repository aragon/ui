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

export const font = ({ size, weight, smallcaps = false, inherit = false }) => {
  return `
    ${fontSizeCss(size, inherit)};
    ${weightCss(weight, inherit)};
    ${smallcapsCss(smallcaps, inherit)};
  `
}
