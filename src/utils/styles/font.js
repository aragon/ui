/* @flow */
type FontSize = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge'
type FontWeight = 'normal' | 'bold' | 'bolder'

const FONT_SIZES: {
  [FontSize]: string,
} = {
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
}

const FONT_WEIGHTS: {
  [FontWeight]: string,
} = {
  normal: '400',
  bold: '600',
  bolder: '800',
}

export const font = ({
  size = 'normal',
  weight = 'normal',
}: {
  size: FontSize,
  weight: FontWeight,
}) => {
  const fontSize = FONT_SIZES[size] || FONT_SIZES.normal
  const fontWeight = FONT_WEIGHTS[weight] || FONT_WEIGHTS.normal
  return `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: 1.5;
  `
}
