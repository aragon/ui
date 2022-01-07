import React, { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { useInside, Inside } from 'use-inside'

type AccordionContentRow = string
type AccordionExpansibleRow = React.ReactNode

type AccordionItem = [content: AccordionContentRow, expansible: AccordionExpansibleRow]

type AccordionPropsType = {
  className?: string | undefined
  items: Array<AccordionItem>
  style?: React.CSSProperties | undefined
}

export declare function Accordion(props: AccordionPropsType): JSX.Element

type MsgToOnCopyType = string
type OnCopyType = (message: MsgToOnCopyType) => void | undefined

export declare function AddressField(props: {
  address: string
  autofocus?: boolean
  icon: React.ReactNode
  onCopy?: OnCopyType
} & React.RefAttributes<any>): JSX.Element

type ValueInputHTMLType = Pick<React.InputHTMLAttributes<any>, 'value'>['value']

export declare function TextCopy(props: {
  adornment: React.ReactNode
  autofocus?: boolean
  message?: MsgToOnCopyType
  monospace?: boolean
  value?: ValueInputHTMLType
  onCopy?: OnCopyType
} & React.RefAttributes<any>): JSX.Element

export declare function AppBadge(props: any): JSX.Element
export declare function AppBadgePopover(props: any): JSX.Element

export declare function AutoComplete(props: any): JSX.Element
export declare function AutoCompleteSelected(props: any): JSX.Element

/**
 * Check address equality without checksums
 * @param {string} first First address
 * @param {string} second Second address
 * @returns {boolean} Address equality
 */
export declare function addressesEqual(first: string, second: string): boolean

export declare function AppBar(props: any): JSX.Element

export declare function AppView({
  appBar,
  children,
  height,
  padding,
  tabs,
  title,
  ...props
}: Partial<{
  [x: string]: any
  appBar: any
  children: any
  height: any
  padding: any
  tabs: any
  title: any
}>): JSX.Element

export declare function BackButton({
  label,
  ...props
}: Partial<{
  [x: string]: any
  label: any
}>): JSX.Element

export declare function Badge({
  background,
  foreground,
  shape,
  children,
  ...props
}: Partial<{
  [x: string]: any
  background: any
  foreground: any
  shape: any
  children: any
}>): JSX.Element

export declare function BadgeInfo(props: any): JSX.Element
export declare function BadgeNotification(props: any): JSX.Element
export declare function BadgeIdentity(props: any): JSX.Element
export declare function BadgeApp(props: any): JSX.Element

export declare namespace Badge {
  export {
    BadgeInfo as Info
  }
  export {
    BadgeNotification as Notification
  }
  export {
    BadgeIdentity as Identity
  }
  export {
    BadgeApp as App
  }
}

export declare function BadgeNumber({
  background,
  children,
  foreground,
  label,
  shape,
  small,
  ...props
}: {
  [x: string]: any
  background?: any
  children?: any
  foreground?: any
  label?: any
  shape?: any
  small?: any
}): JSX.Element

export declare function BadgeBase(props: any): JSX.Element
export declare function BadgePopoverBase(props: any): JSX.Element

export declare function Bar({
  children,
  primary,
  secondary,
  ...props
}: {
  [x: string]: any
  children?: any
  primary?: any
  secondary?: any
}): JSX.Element

export declare function BaseStyles(props: any): JSX.Element

export declare const BIG_RADIUS: 16

/**
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.networkType The Ethereum network type (main, kovan, rinkeby, ropsten, goerli, or private).
 * @param {string} options.provider The explorer provider (e.g. etherscan).
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export declare function blockExplorerUrl(
  type: string,
  value: string,
  {
    networkType,
    provider,
  }?: {
    networkType: string
    provider: string
  }
): string

export declare function Box({
  heading,
  children,
  padding,
  ...props
}: {
  [x: string]: any
  heading?: any
  children?: any
  padding?: any
}): JSX.Element

export declare const brand: any //TODO: Check what it's suppose to be

export declare function breakpoint(name: any, styles: any): any

export declare namespace BREAKPOINTS {
  const min: number
  const small: number
  const medium: number
  const large: number
}

export declare function Button(props: any): JSX.Element
export declare function ButtonBase(props: any): JSX.Element
export declare function ButtonIcon({
  label,
  children,
  mode,
  ...props
}: {
  [x: string]: any
  label?: any
  children?: any
  mode?: any
}): JSX.Element

export declare function ButtonText({
  horizontalPadding,
  ...props
}: {
  [x: string]: any
  horizontalPadding?: any
}): JSX.Element

export declare function Card({
  children,
  width,
  height,
  onClick,
  ...props
}: {
  [x: string]: any
  children?: any
  width?: any
  height?: any
  onClick?: any
}): JSX.Element

export declare function CardLayout({
  children,
  columnWidthMin,
  rowHeight,
  ...props
}: {
  [x: string]: any
  children?: any
  columnWidthMin?: any
  rowHeight?: any
}): JSX.Element

export declare function Checkbox(props: any): JSX.Element
export declare function CircleGraph({
  color,
  label,
  size,
  strokeWidth,
  value,
}: {
  color?: any
  label?: any
  size?: any
  strokeWidth?: any
  value?: any
}): JSX.Element

/**
 * Constrains a value to not exceed a maximum and minimum value.
 *
 * From Processing.js
 *
 * @param {Number} value   the value to constrain
 * @param {Number} value   minimum limit
 * @param {Number} value   maximum limit
 * @returns {Number}
 */
export declare function clamp(value: number, min?: number, max?: number): number


declare class Color extends String { // TODO: Check if its better Interface and new to constructor here
  constructor(value) //TODO: Check if we will allow new Color() or use the factory color() method
  toArray(): [r: number, g: number, b: number]
  toObject(): {
    r: number
    g: number
    b: number
  }
  alpha(alpha?: number): string
  toCssRgb({ alpha }?: { alpha?: number }): string
}

export declare function color(value: any): Color

export declare const colors: any // TODO: Check if used

export declare function ContextMenu({
  children,
  zIndex,
  disabled,
}: {
  children?: any
  zIndex?: any
  disabled?: any
}): JSX.Element

export declare function ContextMenuItem(props: any): JSX.Element

/**
 * @deprecated The method should not be used
 */
export declare function Countdown(props: any): JSX.Element

export declare function cssPx(value: any): any

export declare function DataView(props: any): JSX.Element

export declare function DateRangePicker({
  format,
  endDate: endDateProp,
  onChange,
  startDate: startDateProp,
}: {
  format?: any
  endDate?: any
  onChange?: any
  startDate?: any
}): JSX.Element

export declare function ListView(props: any): JSX.Element
export declare function OpenedSurfaceBorder(props: any): JSX.Element
export declare function TableView(props: any): JSX.Element
export declare function ToggleButton(props: any): JSX.Element
export declare function DatePicker(props: any): JSX.Element
export declare function Selector(props: any): JSX.Element
export declare function Labels(props: any): JSX.Element
export declare function MonthDay(props: any): JSX.Element

export declare const DEFAULT_FONT_FAMILY: 'aragon-ui'

export declare function Details({
  children,
  label,
  onToggle,
  opened: openedProp,
  ...props
}: {
  [x: string]: any
  children?: any
  label?: any
  onToggle?: any
  opened?: any
}): JSX.Element

export declare function devOnly(cb: any): any

export declare function difference(
  date1: any,
  date2: any,
  options?: {}
): {
  remaining: any
  remainingUnits: any
  seenNonZero: boolean
}

export declare function DiscButton(props: any): JSX.Element

export declare function Distribution({
  colors,
  showLegend,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  renderFullLegendItem: FullLegendItem,
  items,
}: {
  colors?: any
  showLegend?: any
  heading?: any
  itemTitle?: any
  renderLegendItem?: any
  renderFullLegendItem?: any
  items?: any
}): JSX.Element

/**
 * Divide and round two big integers.
 *
 * @param {BigInt|string|number} dividend Integer to be divided + rounded
 * @param {BigInt|string|number} divisor  Divisor
 * @returns {string}
 */
export declare function divideRoundBigInt(
  dividend: BigInt | string | number,
  divisor: BigInt | string | number
): string

export declare function DropDown(props: any): JSX.Element

export declare function eachDayOfInterval({
  start,
  end,
}?: {
  start: any
  end: any
}): any[]

export declare function EmptyState(props: any): JSX.Element
export declare function EmptyStateCard(props: any): JSX.Element

export declare function ensureTrailingSlash(path: any): any

export declare function EscapeOutside(props: {
  children?: any
  onEscapeOutside?: any
  useCapture?: any
  _element?: any
  _document?: any
  handleClick?: (e?: any) => void
  handleEscape?: (e?: any) => void
}): JSX.Element

type EthProps = {
  address?: any
  scale?: any
  radius?: any
  soften?: any
}
export declare function EthIdenticon(props: EthProps): JSX.Element

/**
 * @deprecated The method should not be used, use @Link
 */
export declare function ExternalLink(props: any): JSX.Element

export declare function Field({
  children,
  label,
  required,
  ...props
}: {
  [x: string]: any
  children?: any
  label?: any
  required?: any
}): JSX.Element

export declare function FloatIndicator(props: any):JSX.Element

export declare function FocusVisible(props: any): JSX.Element

/**
 * @deprecated - font() is deprecated. Please use textStyle() instead.
 */
export declare function font({
  size,
  weight,
  smallcaps,
  monospace,
  deprecationNotice,
}: {
  size: any
  weight: any
  smallcaps?: boolean
  monospace?: boolean
  deprecationNotice?: boolean
}): string

export declare function formatHtmlDatetime(date: any): any

/**
 * Formats an integer based on a limited range.
 *
 * Example:
 *   formatIntegerRange(234, 0, 99, '+') === "99+"
 *
 * @param {number} [value]     The number to format.
 * @param {number} [min]       Range minimum.
 * @param {number} [max]       Range maximum.
 * @param {number} [maxSuffix] Suffix to add if the value exceeds the max.
 * 
 * @returns {string}
 */
export declare function formatIntegerRange(
  value?: number,
  min?: number,
  max?: number,
  maxSuffix?: number
): string

/**
 * Formats a number for display purposes.
 *
 * This function is not using Intl.NumberFormat() to be compatible with big
 * integers expressed as string, or BigInt-like objects.
 *
 * @param {BigInt|string|number} number Number to convert
 * @returns {string}
 */
export declare function formatNumber(number: BigInt | string | number): string

/**
 * Formats a token amount for display purposes.
 *
 * @param {BigInt|string|number} amount              Number to round
 * @param {BigInt|string|number} decimals            Decimal placement for amount
 * @param {BigInt|string|number} digits //FIXME: { digits?:number, symbol?:string, displaySign?: boolean }              Rounds the number to a given decimal place
 * @param {boolean}              options.displaySign Decides if the sign should be displayed
 * @param {string}               options.symbol      Symbol for the token amount
 * @returns {string}
 */
export declare function formatTokenAmount(
  amount: BigInt | string | number,
  decimals: BigInt | string | number,
  { digits, 
    symbol, 
    displaySign
   }?: { 
     digits?:number, 
     symbol?:string, 
     displaySign?: boolean 
    }
): string

export declare function forwardProps(instance: any, names: any): any

export declare const GU: 8

export declare function Header({
  primary,
  secondary,
  children,
  ...props
}: {
  [x: string]: any
  primary?: any
  secondary?: any
  children?: any
}): JSX.Element

export declare namespace Header {
  export function Title({
    children,
    ...props
  }: {
    [x: string]: any
    children?: any
  }): JSX.Element
}

export declare function Help({
  hint,
  children,
}: {
  hint?: any
  children?: any
}): JSX.Element

declare function IconAddUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconAddUser }
export { IconAddUser as IconIdentity }

declare function IconAlert({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconAlert }
export { IconAlert as IconNotifications }

export declare function IconAlignCenter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconAlignJustify({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconAlignLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconAlignRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconAragon({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconArrowDown({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconArrowLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconArrowRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconArrowUp({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconAtSign({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconBlock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export declare function IconBookmark({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export declare function IconCalendar({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconCanvas({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconCaution({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconCaution as IconAttention }
export { IconCaution }

export declare function IconCenter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconChart({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export declare function IconChat({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconCheck({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconChip({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconCircleCheck({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconCircleMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconCircleMinus }
export { IconCircleMinus as IconRemove }

declare function IconCirclePlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconCirclePlus as IconAdd }
export { IconCirclePlus }

declare function IconClock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconClock }
export { IconClock as IconTime }

export declare function IconCloudDownload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconCloudUpload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconCoin({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconCoin }
export { IconCoin as IconFundraising }

export declare function IconConfiguration({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconConnect({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconConnection({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconConsole({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconCopy({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconCross({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconCross as IconClose }
export { IconCross }

export declare function IconDashedSquare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconDown({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconDownload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconEdit({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconEllipsis({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconEnter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconEthereum({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconExternal({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconFile({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export { IconFile as IconBlank }
export { IconFile }

export declare function IconFilter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconFlag({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconFolder({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconGraph({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconGraph2({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconGrid({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export { IconGrid as IconApps }
export { IconGrid }

export declare function IconGroup({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconHash({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconHeart({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconHide({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconHome({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconImage({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconInfo({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export { IconInfo }
export { IconInfo as IconBylaw }
export { IconInfo as IconPermissions }

export declare function IconLabel({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconLayers({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconLink({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconLocation({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconLock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMail({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMaximize({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMenu({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMinimize({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconMove({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconNoPicture({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconPicture({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconPlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconPower({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconPrint({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconProhibited({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconQuestion({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconRefresh({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconRemoveUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconRotateLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconRotateRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSearch({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSettings({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconShare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSquare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSquareMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSquarePlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconStar({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconStarFilled({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconSwap({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconTarget({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconToken({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconTrash({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconUnlock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconUp({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconUpload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconView({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconVote({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconWallet({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare function IconWarning({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element


export { IconWarning as IconError }
export { IconWarning }

export declare function IconWorld({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconWrite({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconZoomIn({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare function IconZoomOut({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

/**
 * A function that only returns the first parameter passed to it.
 * @param {any} x The first parameter
 * @returns {any}
 */
export declare function identity(x: any): any

export declare function IdentityBadge(props: any): JSX.Element
export declare function IdentityBadgePopover(props: any): JSX.Element

export declare function ImageExists({
  timeUntilFallback,
  src,
  children,
}: Partial<{
  timeUntilFallback: any
  src: any
  children: any
}>): any

export declare function Info({
  children,
  mode,
  color,
  titleColor,
  background,
  borderColor,
  title,
  ...props
}: {
  [x: string]: any
  children?: any
  title?: any
  mode?: Info.MODES
  color?: string
  titleColor?: string
  background?: string
  borderColor?: string
}): JSX.Element

export declare namespace Info {
  export enum MODES  {
    INFO='info', 
    WARNING='warning', 
    ERROR='error', 
    DESCRIPTION='description'
  }

  export {
    Info as Action
  }
  export {
    Warning as Permissions
  }
  export {
    Warning as Alert
  }
}

export declare function Warning(props: any): JSX.Element


export declare function initContainsComponent(): {
  Provider({ children }: { children: any }): JSX.Element
  useContains(): any
  useRegister(): void
}

export { Inside }

/**
 *
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {string} address the given HEX address
 * @returns {boolean}
 */
export declare function isAddress(address: string): boolean

/**
 *
 * Checks if the given string is a transaction
 *
 * @method isTransaction
 * @param {string} address the given HEX address
 * @returns {boolean}
 */
export declare function isTransaction(transaction: any): boolean

export declare const KEY_DOWN: 40

export declare const KEY_ENTER: 13

export declare const KEY_ESC: 27

export declare const KEY_UP: 38

export declare function Layout({
  breakpoints,
  children,
  paddingBottom,
  parentWidth,
  ...props
}: {
  [x: string]: any
  breakpoints?: any
  children?: any
  paddingBottom?: any
  parentWidth?: any
}): JSX.Element

export declare namespace Layout {

  type LayoutContext = React.Context<{}>
  export {
    LayoutContext as __Context
  }
}

export declare type LayoutType = {
  layoutName: 'small' | 'medium' | 'large' | 'max'
  layoutWidth: string
}

/**
 * Calculates a number between two numbers at a specific increment. The
 * progress parameter is the amount to interpolate between the two values where
 * 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is
 * half-way in between, etc. The lerp function is convenient for creating
 * motion along a straight path and for drawing dotted lines.
 *
 * From Processing.js
 *
 * @param {Number} progress     between 0.0 and 1.0
 * @param {Number} value1       first value
 * @param {Number} value2       second value
 * @returns {Number}
 */
export declare function lerp(
  progress: number,
  value1: number,
  value2: number
): number

export declare function LineChart({
  animDelay,
  borderColor,
  color,
  dotRadius,
  height,
  label,
  labelColor,
  lines,
  reset,
  springConfig,
  total,
  width,
  ...props
}: Partial<{
  [x: string]: any
  animDelay: any
  borderColor: any
  color: any
  dotRadius: any
  height: any
  label: any
  labelColor: any
  lines: any
  reset: any
  springConfig: any
  total: any
  width: any
}>): JSX.Element

export declare function Link({
  onClick,
  href,
  external,
  ...props
}: {
  [x: string]: any
  onClick?: () => void
  href?: any
  external?: any
}): JSX.Element

export declare namespace Link {
  const propTypes: any
}

export declare function LinkBase(props: any): JSX.Element
export declare function LoadingRing(props: any): JSX.Element

export declare const log: any

export declare function Main(props: any): JSX.Element

/**
 * Re-maps a number from one range to another.
 *
 * In the example above, the number '25' is converted from a value in the range
 * 0..100 into a value that ranges from the left edge (0) to the right edge
 * (width) of the screen. Numbers outside the range are not clamped to 0 and 1,
 * because out-of-range values are often intentional and useful.
 *
 * From Processing.js
 *
 * @param {Number} value        The incoming value to be converted
 * @param {Number} istart       Lower bound of the value's current range
 * @param {Number} istop        Upper bound of the value's current range
 * @param {Number} ostart       Lower bound of the value's target range
 * @param {Number} ostop        Upper bound of the value's target range
 * @returns {Number}
 */
export declare function map(
  value: number,
  istart: number,
  istop: number,
  ostart: number,
  ostop: number
): number

export declare function Markdown({
  allowHtml,
  className,
  content,
  markdownToJsxOptions,
  normalized,
  style,
  ...props
}: Partial<{
  [x: string]: any
  allowHtml: any
  className: any
  content: any
  markdownToJsxOptions: any
  normalized: any
  style: any
}>): JSX.Element

export declare const MEDIUM_RADIUS: 12

export declare function Modal({
  children,
  onClose,
  onClosed,
  padding,
  visible,
  width,
  closeButton,
  ...props
}: {
  [x: string]: any
  children?: any
  onClose?: () => void
  onClosed?: () => void
  padding?: any
  visible?: any
  width?: any
  closeButton?: any
}): JSX.Element

export declare function monospace(): string

export declare const MONOSPACE_FONT_FAMILY: 'aragon-ui-monospace'

export declare function NavigationBar(props: Partial<{
  onBack: any
  items: any[]
  compact: any
}>): JSX.Element

/**
 * Does nothing.
 */
export declare function noop(): void

/**
 * Normalizes a number from another range into a value between 0 and 1.
 *
 * Identical to map(value, low, high, 0, 1)
 * Numbers outside the range are not clamped to 0 and 1, because out-of-range
 * values are often intentional and useful.
 *
 * From Processing.js
 *
 * @param {Number} aNumber    The incoming value to be converted
 * @param {Number} low        Lower bound of the value's current range
 * @param {Number} high       Upper bound of the value's current range
 * @returns {Number}
 */
export declare function norm(aNumber: number, low: number, high: number): number

export declare function observe(
  observe: any,
  initialState?: {}
): (
  Component: any
) => {
  new (): {
    state: {}
    componentDidMount(): void
    componentWillReceiveProps({
      observable: nextObservable,
    }: {
      observable: any
    }): void
    componentWillUnmount(): void
    subscribe: (observable: any) => void
    unsubscribe: () => void
    render(): JSX.Element
  }
  displayName: string
  propTypes: {
    observable: (
      {
        observable,
      }: {
        observable: any
      },
      _: any,
      componentName: any
    ) => void
  }
}

export declare function Pagination(props: any): JSX.Element

export declare function PartitionBar({
  data,
  caption,
  colors,
}: Partial<{
  data: any
  caption: any
  colors: any
}>): JSX.Element

/**
 * Creates a new object from obj that only contains specific keys.
 * @param {object} obj The source object.
 * @param {array}  keys The keys to pick in the source object.
 * @returns {object}
 */
export declare function pick(obj: object, keys: any[]): object

export declare function Popover(props: Partial<{
  [x: string]: any
  scaleEffect: any
  visible: any
  children: any
  closeOnOpenerFocus: any
  onClose: any
  opener: any
  placement: any
  rootBoundary: any
  theme: any
  transitionStyles: any
  zIndex: any
  }>): JSX.Element

export declare function prefixUrl(url: any, publicUrl: any): any

export declare function ProgressBar(props: any): JSX.Element

export declare function PublicUrl(props: any): JSX.Element
export declare function PublicUrlProvider(props: any): any

export declare namespace PublicUrl {
  export {
    PublicUrlProvider as Provider
  }
  export function hocWrap(props: any): any
  export function styledUrl(url: any): any
}

export declare function Radio(props: Partial<{
  [x:string]: any
  addRadio: any
  checked: any
  disabled: any
  id: any
  onChange: any
  removeRadio: any
  selectNext: any
  selectPrev: any
  tabIndex: any
}>): JSX.Element

export { Radio as RadioButton }

export declare function RadioGroup(props: Partial<{
  children: any
  selected: any
  onChange: any
  handleChange: (id: any) => void
  addRadio: (id: any) => void
  removeRadio: (id: any) => void
  getSiblingId(position: any): any
  selectPrev: () => void
  selectNext: () => void
}>): JSX.Element

export declare function RadioList({
  description,
  items,
  onChange,
  selected,
  title,
  ...props
}: Partial<{
  [x: string]: any
  description: any
  items: any
  onChange: any
  selected: any
  title: any
}>): JSX.Element

export declare const RADIUS: 4

/**
 * Random number between two values.
 *
 * From Mozilla MDN
 *
 * @param {Number} min The minimum number (included)
 * @param {Number} max The maximum number (excluded)
 * @returns {Number}
 */
export declare function random(min?: number, max?: number): number

/**
 * Returns a random integer between min (included) and max (excluded)
 * Note: Using Math.round() would give a non-uniform distribution
 *
 * From Mozilla MDN
 *
 * @param {Number} min    The minimum number (included)
 * @param {Number} max    The maximum number (excluded)
 * @returns {Number}
 */
export declare function randomInt(min: number, max: number): number


export declare class Redraw {
  static propTypes: {
    interval: any
    children: any
  }
  static defaultProps: {
    interval: number
  }
  state: {
    lastDraw: number
  }
  componentDidMount(): void
  raf: number
  componentWillUnmount(): void
  draw: () => void
  render(): any
}

export declare namespace Redraw {
  function hocWrap(param:any):any
  export { hocWrap };
}


export declare class RedrawFromDate {
  static propTypes: {
    children: any
    fromDate: any
  }
  state: {
    redrawTime: number
    lastDraw: number
  }
  componentDidMount(): void
  componentWillReceiveProps({ fromDate }: { fromDate: any }): void
  componentWillUnmount(): void
  clearInterval: () => void
  restartDrawInterval: (redrawTime: any) => void
  interval: NodeJS.Timeout
  render(): any
}

export declare function Root(props: any): JSX.Element

export declare namespace Root {
  function RootProvider(props: any): any
  export {
    RootProvider as Provider
  }
}

export declare function RootPortal(props: any): JSX.Element

/**
 * @deprecated The method should not be used, use @Link
 */
export declare function SafeLink(props: any): JSX.Element

export declare function ScrollView({
  children,
  horizontal,
  vertical,
  ...props
}: Partial<{
  [x: string]: any
  children: any
  horizontal: any
  vertical: any
}>): JSX.Element

export declare function SearchInput(props: any): JSX.Element

/**
 * Shorten an Ethereum address. `charsLength` allows to change the number of
 * characters on both sides of the ellipsis.
 *
 * Examples:
 *   shortenAddress('0x19731977931271')    // 0x1973…1271
 *   shortenAddress('0x19731977931271', 2) // 0x19…71
 *   shortenAddress('0x197319')            // 0x197319 (already short enough)
 *
 * @param {string} address The address to shorten
 * @param {number} [charsLength=4] The number of characters to change on both sides of the ellipsis
 * @returns {string} The shortened address
 */
export declare function shortenAddress(
  address: string,
  charsLength?: number
): string

/**
 * Shorten an Ethereum address. `charsLength` allows to change the number of
 * characters on both sides of the ellipsis.
 *
 * Examples:
 *   shortenAddress('0x19731977931271')    // 0x1973…1271
 *   shortenAddress('0x19731977931271', 2) // 0x19…71
 *   shortenAddress('0x197319')            // 0x197319 (already short enough)
 *
 * @param {string} address The address to shorten
 * @param {number} [charsLength=4] The number of characters to change on both sides of the ellipsis
 * @returns {string} The shortened address
 */
export declare function shortenTransaction(
  address: string,
  charsLength?: number
): string

export declare function SidePanel({
  blocking,
  children,
  opened,
  onClose,
  onTransitionEnd,
  title,
}: Partial<{
  blocking: any
  children: any
  opened: any
  onClose: any
  onTransitionEnd: any
  title: any
}>): JSX.Element

export declare function SidePanelSeparator(props: any): JSX.Element

export declare function SidePanelSplit({
  children,
  ...props
}: Partial<{
  [x: string]: any
  children: any
}>): JSX.Element

export declare function Slider(props: any): JSX.Element

export declare function Split({
  primary,
  secondary,
  invert,
}: Partial<{
  primary: any
  secondary: any
  invert: any
}>): JSX.Element

export declare namespace springs {
  export namespace debug {
      const mass: number;
      const tension: number;
      const friction: number;
  }
  export namespace lazy {
      const mass_1: number;
        export  { mass_1 as mass };
      const tension_1: number;
      export { tension_1 as tension };
      const friction_1: number;
      export { friction_1 as friction };
  }
  export namespace smooth {
      const mass_2: number;
      export   { mass_2 as mass };
      const tension_2: number;
      export    { tension_2 as tension };
      const friction_2: number;
      export{ friction_2 as friction };
  }
  export namespace swift {
      const mass_3: number;
      export    { mass_3 as mass };
      const tension_3: number;
      export{ tension_3 as tension };
      const friction_3: number;
      export  { friction_3 as friction };
  }
  export namespace instant {
      const mass_4: number;
      export   { mass_4 as mass };
      const tension_4: number;
      export { tension_4 as tension };
      const friction_4: number;
      export { friction_4 as friction };
  }
}

export declare function stylingProps(instance: any, names?: any[]): any

export declare function Switch({
  checked,
  disabled,
  onChange,
}: Partial<{
  checked: any
  disabled: any
  onChange: any
}>): JSX.Element

export declare function SyncIndicator({
  children,
  label,
  shift,
  visible,
  ...props
}: Partial<{
  [x: string]: any
  children: any
  label: any
  shift: any
  visible: any
}>): JSX.Element

export declare function TabBar(props: any): JSX.Element

export declare function Table({
  header,
  children,
  noSideBorders,
  ...props
}: Partial<{
  [x: string]: any
  header: any
  children: any
  noSideBorders: any
}>): JSX.Element


export declare function TableCell({
  children,
  contentContainer,
  align,
  ...props
}: Partial<{
  [x: string]: any
  children: any
  contentContainer: any
  align: any
}>): JSX.Element


export declare function TableHeader({
  title,
  align,
  ...props
}: Partial<{
  [x: string]: any
  title: any
  align: any
}>): JSX.Element

export declare function TableRow(props: any): JSX.Element

export declare function Tab(props: any): JSX.Element
export declare function TabBarLegacy(props: any): JSX.Element
export declare function TabsFullWidth(props: any): JSX.Element
export declare function Tabs(props: any): JSX.Element

export declare function Tag(props: Partial<{
  [x: string]: any
  background: any
  children: any
  color: any
  limitDigits: any
  icon: any
  label: any
  mode: any
  size: any
  uppercase: any
}>): JSX.Element

declare function Text_2({
  children,
  color,
  deprecationNotice,
  monospace,
  size,
  smallcaps,
  weight,
  ...props
}: {
  [x: string]: any
  children: any
  color: any
  deprecationNotice: any
  monospace: any
  size: any
  smallcaps: any
  weight: any
}): JSX.Element

/**
 * @deprecated - Text.Block and Text.Paragraph are deprecated. Please use the textStyle() utility function instead.
 */
declare namespace Text_2 {
  namespace propTypes {
    const children: any
    const color: any
    const deprecationNotice: any
    const monospace: any
    const size: any
    const smallcaps: any
    const weight: any
  }
  namespace defaultProps {
    const deprecationNotice_1: boolean
    export {
      deprecationNotice_1 as deprecationNotice
    }
  }
  /**
 * @deprecated - Text.Block and Text.Paragraph are deprecated. Please use the textStyle() utility function instead.
 */
  function Block(params:any):any
  export {
    Block
  }
  /**
 * @deprecated - Text.Block and Text.Paragraph are deprecated. Please use the textStyle() utility function instead.
 */
  function Paragraph(params:any):any
  export {
    Paragraph
  }
}
export { Text_2 as Text }

export declare namespace TEXT_STYLES {
  export namespace title1 {
    const size: number
    const weight: number
    const lineHeight: number
  }
  export namespace title2 {
    const size_1: number
    export {
      size_1 as size
    }
    const weight_1: number
    export {
      weight_1 as weight
    }
    const lineHeight_1: number
    export {
      lineHeight_1 as lineHeight
    }
  }
  export namespace title3 {
    const size_2: number
    export {
      size_2 as size
    }
    const weight_2: number
    export {
      weight_2 as weight
    }
    const lineHeight_2: number
    export {
      lineHeight_2 as lineHeight
    }
  }
  export namespace title4 {
    const size_3: number
    export {
      size_3 as size
    }
    const weight_3: number
    export {
      weight_3 as weight
    }
    const lineHeight_3: number
    export {
      lineHeight_3 as lineHeight
    }
  }
  export namespace body1 {
    const size_4: number
    export {
      size_4 as size
    }
    const weight_4: number
    export {
      weight_4 as weight
    }
    const lineHeight_4: number
    export {
      lineHeight_4 as lineHeight
    }
  }
  export namespace body2 {
    const size_5: number
    export {
      size_5 as size
    }
    const weight_5: number
    export {
      weight_5 as weight
    }
    const lineHeight_5: number
    export {
      lineHeight_5 as lineHeight
    }
  }
  export namespace body3 {
    const size_6: number
    export {
      size_6 as size
    }
    const weight_6: number
    export {
      weight_6 as weight
    }
    const lineHeight_6: number
    export {
      lineHeight_6 as lineHeight
    }
  }
  export namespace body4 {
    const size_7: number
    export {
      size_7 as size
    }
    const weight_7: number
    export {
      weight_7 as weight
    }
    const lineHeight_7: number
    export {
      lineHeight_7 as lineHeight
    }
  }
  export namespace label1 {
    const size_8: number
    export {
      size_8 as size
    }
    const weight_8: number
    export {
      weight_8 as weight
    }
    const lineHeight_8: number
    export {
      lineHeight_8 as lineHeight
    }
    export const transform: string
  }
  export namespace label2 {
    const size_9: number
    export {
      size_9 as size
    }
    const weight_9: number
    export {
      weight_9 as weight
    }
    const lineHeight_9: number
    export {
      lineHeight_9 as lineHeight
    }
    const transform_1: string
    export {
      transform_1 as transform
    }
  }
  export namespace label3 {
    const size_10: number
    export {
      size_10 as size
    }
    const weight_10: number
    export {
      weight_10 as weight
    }
    const lineHeight_10: number
    export {
      lineHeight_10 as lineHeight
    }
    const transform_2: string
    export {
      transform_2 as transform
    }
  }
  export namespace address1 {
    const size_11: number
    export {
      size_11 as size
    }
    const weight_11: number
    export {
      weight_11 as weight
    }
    const lineHeight_11: number
    export {
      lineHeight_11 as lineHeight
    }
    const monospace: boolean
  }
  export namespace address2 {
    const size_12: number
    export {
      size_12 as size
    }
    const weight_12: number
    export {
      weight_12 as weight
    }
    const lineHeight_12: number
    export {
      lineHeight_12 as lineHeight
    }
    const monospace_1: boolean
    export {
      monospace_1 as monospace
    }
  }
}

export declare function TextInput(props: any): JSX.Element

export declare function textStyle(
  name: any,
  includeLineHeight?: boolean
): string

export declare function Theme({
  theme,
  children,
}: {
  theme?: any
  children?: any
}): JSX.Element

export declare namespace Theme {
  export const THEME_DEFAULT = 'light'
  
  // export const EMBEDDED_THEMES
}

export declare const theme: any

export declare const themeDark: any

export declare function Timer(props: any): JSX.Element

export declare function Toast(props: any): any

export declare function ToastHub(props: any): JSX.Element

export declare class ToastHub {
  static propTypes: {
    children: any
    position: any
    shift: any
    showIndicator: any
    threshold: any
    timeout: any
    top: any
  }
  static defaultProps: {
    position: string
    showIndicator: boolean
    threshold: number
    timeout: number
    top: boolean
  }
  state: {
    items: any[]
    leaving: any[]
    preLeaving: any[]
  }
  cancelMap: WeakMap<object, any>
  add: (msg: any) => void
  remove: (item: any) => void
  config: (
    item: any,
    state: any
  ) =>
    | {
        mass: number
        tension: number
        friction: number
      }
    | (
        | {
            mass: number
            tension: number
            friction: number
          }
        | {
            duration: any
          }
      )[]
  cancel: (item: any, secondPass?: boolean) => void
  leave: (item: any) => (next: any, cancel: any) => Promise<void>
  render(): JSX.Element
}

export declare function TokenBadge(props: any): JSX.Element
export declare function TokenBadgePopover(props: any): JSX.Element

/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export declare function tokenIconUrl(address?: string): string

export declare function TransactionBadge(props: any): JSX.Element
export declare function TransactionProgress(props: any): JSX.Element

export declare function unselectable(): string

/**
 *
 * Start here hooks typing
 */
export declare function useArrowKeysFocus(
  refs: any
): {
  highlightedIndex: number
  setHighlightedIndex: Dispatch<SetStateAction<number>>
}

export declare function useClickOutside(
  cb: any,
  ref?: MutableRefObject<undefined>
): {
  ref: MutableRefObject<undefined>
}

export declare const useContainsAppView: () => any

export declare function useFocusEnter(
  cb: any,
  _ref: any
): {
  ref: any
  handleFocusEnter: (event: any) => void
}

export declare function useFocusLeave(
  cb: any,
  _ref: any
): {
  ref: any
  handleFocusLeave: (event: any) => void
}

export declare function useImageExists(
  src: any,
  timeUntilFallback?: number
): {
  src: any
  displayFallback: boolean
  exists: boolean
  loading: boolean
}

export { useInside }

export declare function useKeyDown(key: any, callback: any): void

/**
 * Some layout method
 *
 * @typedef {object} LayoutType
 * @property {("small" | "medium" | "large" | "max")} layoutName
 * @property {string} layoutWidth
 *
 * @returns {LayoutType}
 */
export declare function useLayout(): LayoutType

export declare function useOnBlur(
  ...params: any[]
): {
  ref: any
  handleFocusLeave: (event: any) => void
}
/**
 *
 * End here hooks typing
 */

/**
 *
 * Start here hooks typing from another folders
 */
export declare function useRoot(): any

export declare function useSidePanel(): any

export declare function useSidePanelFocusOnReady(ref: any): any

export declare function useTheme(): any

export declare function useToast(): any

/**
 *
 * End here hooks typing from another folders
 */

export declare function useViewport(): any

export declare function Viewport(props: any): JSX.Element

export declare namespace Viewport {
  function ViewportProvider(props: any): JSX.Element
  export {
    ViewportProvider as Provider
  }
}

export declare const warn: any

export declare const warnOnce: any

export {} // TODO: Maybe it can be removed, need check and test
