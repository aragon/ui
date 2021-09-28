import aragon from './aragon.js';
import { warnOnce, warn } from '../utils/environment.js';

const THEME_NAME = 'Aragon UI';
const THEME_DARK_NAME = 'Aragon UI Dark';
const BRAND_NAME = 'Aragon Brand'; // Name of the group a given palette belong to

const getGroupName = name => {
  if (name === THEME_NAME) return 'theme';
  if (name === THEME_DARK_NAME) return 'themeDark';
  if (name === BRAND_NAME) return 'brand';
  return 'colors';
}; // Resolve a single color


const resolveColor = (value, palettes) => {
  // already resolved color
  if (!value.startsWith('=')) {
    return value;
  }

  const [paletteName, key] = value.slice(1).split('.');
  const color = palettes[paletteName] && palettes[paletteName][key];

  if (!color) {
    throw new Error(`resolveColor: ${value} doesn’t seem to exist`);
  } // follow the references until we find one


  if (color.startsWith('=')) {
    return resolveColor(color, palettes);
  }

  return color;
}; // Resolve all the colors in a palette


const resolveColors = (palette, palettes) => Object.entries(palette).reduce((pal, [name, value]) => {
  if (typeof value === 'string') {
    pal[name] = resolveColor(value, palettes);
  }

  return pal;
}, {}); // Prepare groups from the palettes: theme, themeDark, brand and colors.


const generateGroups = palettes => Object.entries(palettes).reduce((groups, [paletteName, palette]) => {
  const groupName = getGroupName(paletteName);

  if (groupName === 'colors') {
    groups.colors[paletteName] = resolveColors(palette, palettes);
  } else {
    groups[groupName] = resolveColors(palette, palettes);
  }

  return groups;
}, {
  colors: {}
}); // Deprecate any access to the palettes


const {
  themeDark,
  theme,
  brand,
  colors
} = Object.fromEntries(Object.entries(generateGroups(aragon)).map(([name, group]) => [name, new Proxy(group, {
  get(group, colorName) {
    if (group[colorName]) {
      warnOnce(`theme-legacy:${name}.${colorName}`, `${name}.${colorName} was accessed but ${name} will be removed soon, ` + `please use useTheme() instead.`);
    } else {
      warn(`${name}.${colorName} doesn’t exist. ${name} will be removed soon, ` + `please use useTheme() instead.`);
    }

    return group[colorName];
  }

})])); // TODO: show a deprecating warning when any of these colors get accessed once.

export { brand, colors, theme, themeDark };
//# sourceMappingURL=palettes.js.map
