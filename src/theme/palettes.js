import aragon from './aragon.json'

// These need to match the names in the Open Color palettes
const THEME_NAME = 'Aragon UI'
const THEME_DARK_NAME = 'Aragon UI Dark'
const BRAND_NAME = 'Aragon Brand'

// Name of the group a given palette belong to
const getGroupName = name => {
  if (name === THEME_NAME) return 'theme'
  if (name === THEME_DARK_NAME) return 'themeDark'
  if (name === BRAND_NAME) return 'brand'
  return 'colors'
}

// Resolve a single color
const resolveColor = (value, palettes) => {
  // already resolved color
  if (!value.startsWith('=')) {
    return value
  }

  const [paletteName, key] = value.slice(1).split('.')
  const color = palettes[paletteName] && palettes[paletteName][key]

  if (!color) {
    throw new Error(`resolveColor: ${value} doesn’t seem to exist`)
  }

  // follow the references until we find one
  if (color.startsWith('=')) {
    return resolveColor(color, palettes)
  }
  return color
}

// Resolve all the colors in a palette
const resolveColors = (palette, palettes) =>
  Object.entries(palette).reduce((pal, [name, value]) => {
    if (typeof value === 'string') {
      pal[name] = resolveColor(value, palettes)
    }
    return pal
  }, {})

// Prepare groups from the palettes: theme, themeDark, brand and colors.
const groups = palettes =>
  Object.entries(palettes).reduce(
    (groups, [paletteName, palette]) => {
      const groupName = getGroupName(paletteName)

      if (groupName === 'colors') {
        groups.colors[paletteName] = resolveColors(palette, palettes)
      } else {
        groups[groupName] = resolveColors(palette, palettes)
      }

      return groups
    },
    { colors: {} }
  )

const { themeDark, theme, brand, colors } = groups(aragon)

export { themeDark, theme, brand, colors }
