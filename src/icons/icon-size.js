import { GU } from '../style'
import { useInside } from '../utils/inside'

const ICON_SIZES = new Map([
  ['large', 6 * GU],
  ['medium', 3 * GU],
  ['small', 2 * GU],
  ['tiny', 1.75 * GU],
])

// Mapping of button size => icon size
const BUTTON_ICON_SIZES = new Map([
  ['medium', 'medium'],
  ['small', 'medium'],
  ['mini', 'small'],
])

function useIconSize(size) {
  const [insideButtonIcon, { buttonSize }] = useInside('Button:icon')

  // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.
  const sizeName =
    !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonSize) : size

  return ICON_SIZES.get(sizeName) || ICON_SIZES.get('medium')
}

export default useIconSize
