const RGB_HEX_RE = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

function rgbFromRgbInt(rgbInt) {
  return {
    r: Math.floor(rgbInt / Math.pow(256, 2)),
    g: Math.floor((rgbInt / 256) % 256),
    b: Math.floor(rgbInt % 256),
  }
}

function normalizeHexColor(value) {
  const matches = value ? value.match(RGB_HEX_RE) : null

  if (matches === null) {
    throw new Error(
      `color(): the value must be a valid CSS hexadecimal color. Received: ${value}`
    )
  }

  const hexColor = matches[1].toUpperCase()

  if (hexColor.length === 3) {
    return [...hexColor].map(c => c + c).join('')
  }

  return hexColor
}

class Color extends String {
  constructor(value) {
    super(value)

    const hexColor = normalizeHexColor(value)
    const { r, g, b } = rgbFromRgbInt(parseInt(hexColor, 16))

    this.r = r
    this.g = g
    this.b = b
    this.hexColor = hexColor
  }
  toString() {
    return this.toCssRgb()
  }
  valueOf() {
    return this.toCssRgb()
  }
  toArray() {
    return [this.r, this.g, this.b]
  }
  toObject() {
    const { r, g, b } = this
    return { r, g, b }
  }
  alpha(alpha) {
    return this.toCssRgb({ alpha })
  }
  toCssRgb({ alpha = 1 } = {}) {
    if (alpha === 1) {
      return `#${this.hexColor}`
    }
    alpha = Math.max(0, Math.min(1, alpha))
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`
  }
}

function color(value) {
  return new Color(value)
}

export default color
