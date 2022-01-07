import { Dispatch } from 'react'
import { Inside } from 'use-inside'
import { MutableRefObject } from 'react'
import { SetStateAction } from 'react'
import { useInside } from 'use-inside'

export declare const Accordion: any

/**
 * Check address equality without checksums
 * @param {string} first First address
 * @param {string} second Second address
 * @returns {boolean} Address equality
 */
export declare function addressesEqual(first: string, second: string): boolean

export declare const AddressField: any

export declare const AppBadge: any

export declare function AppBar(props: any): JSX.Element

export declare function AppView({
  appBar,
  children,
  height,
  padding,
  tabs,
  title,
  ...props
}: {
  [x: string]: any
  appBar: any
  children: any
  height: any
  padding: any
  tabs: any
  title: any
}): JSX.Element

export declare namespace AppView {
  export namespace defaultProps {
    const title: string
    const padding: number
    const height: string
  }
  export namespace propTypes {
    const appBar: any
    const title_1: any
    {
      title_1 as title
    }
    const children: any
    const padding_1: any
    {
      padding_1 as padding
    }
    const height_1: any
    {
      height_1 as height
    }
    const tabs: any
  }
}

export declare var _default: any

export declare var _default: any

export declare function BackButton({
  label,
  ...props
}: {
  [x: string]: any
  label: any
}): JSX.Element

export declare namespace BackButton {
  export namespace propTypes {
    const label: any
  }
  export namespace defaultProps {
    const label_1: string
    {
      label_1 as label
    }
  }
}

export declare function Badge({
  background,
  foreground,
  shape,
  children,
  ...props
}: {
  [x: string]: any
  background: any
  foreground: any
  shape: any
  children: any
}): JSX.Element

export declare namespace Badge {
  {
    BadgeInfo as Info
  }
  {
    BadgeNotification as Notification
  }
  {
    BadgeIdentity as Identity
  }
  {
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
  background: any
  children: any
  foreground: any
  label: any
  shape: any
  small: any
}): JSX.Element

export declare function Bar({
  children,
  primary,
  secondary,
  ...props
}: {
  [x: string]: any
  children: any
  primary: any
  secondary: any
}): JSX.Element

export declare namespace Bar {
  export namespace propTypes {
    const children: any
    const primary: any
    const secondary: any
  }
  {
    BAR_PADDING as PADDING
  }
}

export declare var _default: {
  (props: any): JSX.Element
  displayName: string
}

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

export declare namespace Box {
  export namespace propTypes {
    const heading: any
    const children: any
    const padding: any
  }
}

export declare const brand: any

export declare function breakpoint(name: any, styles: any): any

export declare namespace BREAKPOINTS {
  const min: number
  const small: number
  const medium: number
  const large: number
}

export declare const Button: any

export declare const ButtonBase: any

export declare function ButtonIcon({
  label,
  children,
  mode,
  ...props
}: {
  [x: string]: any
  label: any
  children: any
  mode: any
}): JSX.Element

export declare namespace ButtonIcon {
  export namespace propTypes {
    const label: any
    const children: any
    const mode: any
  }
}

export declare function ButtonText({
  horizontalPadding,
  ...props
}: {
  [x: string]: any
  horizontalPadding: any
}): JSX.Element

export declare namespace ButtonText {
  const propTypes: any
  export namespace defaultProps {
    const horizontalPadding: string
  }
}

export declare function Card({
  children,
  width,
  height,
  onClick,
  ...props
}: {
  [x: string]: any
  children: any
  width: any
  height: any
  onClick: any
}): JSX.Element

export declare namespace Card {
  export namespace propTypes {
    const children: any
    const height: any
    const width: any
    const onClick: any
  }
}

export declare function CardLayout({
  children,
  columnWidthMin,
  rowHeight,
  ...props
}: {
  [x: string]: any
  children: any
  columnWidthMin: any
  rowHeight: any
}): JSX.Element

export declare namespace CardLayout {
  export namespace propTypes {
    const children: any
    const columnWidthMin: any
    const rowHeight: any
  }
  export namespace defaultProps {
    const columnWidthMin_1: number
    {
      columnWidthMin_1 as columnWidthMin
    }
    const rowHeight_1: number
    {
      rowHeight_1 as rowHeight
    }
  }
}

export declare const Checkbox: any

export declare function CircleGraph({
  color,
  label,
  size,
  strokeWidth,
  value,
}: {
  color: any
  label: any
  size: any
  strokeWidth: any
  value: any
}): JSX.Element

export declare namespace CircleGraph {
  export namespace propTypes {
    const color: any
    const label: any
    const size: any
    const strokeWidth: any
    const value: any
  }
  export namespace defaultProps {
    {
      SIZE_DEFAULT as size
    }
    {
      STROKE_WIDTH as strokeWidth
    }
  }
}

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

declare class Color extends String {
  r: number
  g: number
  b: number
  hexColor: string
  toArray(): number[]
  toObject(): {
    r: number
    g: number
    b: number
  }
  alpha(alpha: any): string
  toCssRgb({ alpha }?: { alpha?: number }): string
}

export declare function color(value: any): Color

export declare const colors: any

export declare function ContextMenu({
  children,
  zIndex,
  disabled,
}: {
  children: any
  zIndex: any
  disabled: any
}): JSX.Element

export declare namespace ContextMenu {
  export namespace propTypes {
    const children: any
    const zIndex: any
    const disabled: any
  }
  export namespace defaultProps {
    const zIndex_1: number
    {
      zIndex_1 as zIndex
    }
    const disabled_1: boolean
    {
      disabled_1 as disabled
    }
  }
}

export declare const ContextMenuItem: any

export declare class Countdown {
  deprecationWarning(): void
  render(): JSX.Element
}

export declare namespace Countdown {
  export namespace propTypes {
    const end: any
    const removeDaysAndHours: any
  }
  export namespace defaultProps {
    const removeDaysAndHours_1: boolean
    {
      removeDaysAndHours_1 as removeDaysAndHours
    }
  }
}

export declare function cssPx(value: any): any

declare const DataView_2: any
export { DataView_2 as DataView }

export declare function DateRangePicker({
  format,
  endDate: endDateProp,
  onChange,
  startDate: startDateProp,
}: {
  format: any
  endDate: any
  onChange: any
  startDate: any
}): JSX.Element

export declare namespace DateRangePicker {
  export namespace propTypes {
    const endDate: any
    const format: any
    const onChange: any
    const startDate: any
  }
  export namespace defaultProps {
    const format_1: string
    {
      format_1 as format
    }
    export function onChange_1(): void {
      onChange_1 as onChange
    }
  }
}

export declare const DEFAULT_FONT_FAMILY: 'aragon-ui'

export declare function Details({
  children,
  label,
  onToggle,
  opened: openedProp,
  ...props
}: {
  [x: string]: any
  children: any
  label: any
  onToggle: any
  opened: any
}): JSX.Element

export declare namespace Details {
  export namespace propTypes {
    const children: any
    const label: any
    const onToggle: any
    const opened: any
  }
}

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

export declare const DiscButton: any

export declare function Distribution({
  colors,
  showLegend,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  renderFullLegendItem: FullLegendItem,
  items,
}: {
  colors: any
  showLegend: any
  heading: any
  itemTitle: any
  renderLegendItem: any
  renderFullLegendItem: any
  items: any
}): JSX.Element

export declare namespace Distribution {
  export namespace propTypes {
    const colors: any
    const heading: any
    const itemTitle: any
    const renderLegendItem: any
    const renderFullLegendItem: any
    const showLegend: any
    const items: any
  }
  export namespace defaultProps {
    const heading_1: any
    {
      heading_1 as heading
    }
    export function itemTitle_1({
      item,
      percentage,
      index,
    }: {
      item: any
      percentage: any
      index: any
    }): string {
      itemTitle_1 as itemTitle
    }
    export function renderLegendItem_1({
      item,
      percentage,
      index,
    }: {
      item: any
      percentage: any
      index: any
    }): string {
      renderLegendItem_1 as renderLegendItem
    }
    const showLegend_1: boolean
    {
      showLegend_1 as showLegend
    }
  }
}

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

export declare const DropDown: any

export declare function eachDayOfInterval({
  start,
  end,
}?: {
  start: any
  end: any
}): any[]

export declare const EmptyStateCard: any

export declare function ensureTrailingSlash(path: any): any

export declare class EscapeOutside {
  static propTypes: {
    children: any
    onEscapeOutside: any
    useCapture: any
  }
  static defaultProps: {
    onEscapeOutside: typeof noop
    useCapture: boolean
  }
  _element: any
  _document: any
  componentDidMount(): void
  componentWillUnmount(): void
  handleClick: (e: any) => void
  handleEscape: (e: any) => void
  render(): JSX.Element
}

export declare class EthIdenticon {
  static propTypes: {
    address: any
    scale: any
    radius: any
    soften: any
  }
  static defaultProps: {
    scale: number
    radius: number
    soften: number
  }
  render(): JSX.Element
}

export declare function ExternalLink(props: any): JSX.Element

export declare function Field({
  children,
  label,
  required,
  ...props
}: {
  [x: string]: any
  children: any
  label: any
  required: any
}): JSX.Element

export declare namespace Field {
  export namespace propTypes {
    const children: any
    const label: any
    const required: any
  }
}

export declare const FloatIndicator: any

export declare class FocusVisible {
  static propTypes: {
    children: any
  }
  _element: any
  _document: any
  state: {
    focusVisible: boolean
  }
  componentDidMount(): void
  componentWillUnmount(): void
  handlePointerEvent: (e: any) => void
  _pointerActive: boolean
  _timer: NodeJS.Timeout
  handleFocus: () => void
  render(): JSX.Element
}

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
 * @param {number} value     The number to format.
 * @param {number} min       Range minimum.
 * @param {number} max       Range maximum.
 * @param {number} maxSuffix Suffix to add if the value exceeds the max.
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
 * @param {BigInt|string|number} digits              Rounds the number to a given decimal place
 * @param {boolean}              options.displaySign Decides if the sign should be displayed
 * @param {string}               options.symbol      Symbol for the token amount
 * @returns {string}
 */
export declare function formatTokenAmount(
  amount: BigInt | string | number,
  decimals: BigInt | string | number,
  { digits, symbol, displaySign }?: BigInt | string | number
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
  primary: any
  secondary: any
  children: any
}): JSX.Element

export declare namespace Header {
  export namespace propTypes {
    const primary: any
    const secondary: any
    const children: any
  }
  export function Title({
    children,
    ...props
  }: {
    [x: string]: any
    children: any
  }): JSX.Element
  export namespace Title {
    export namespace propTypes_1 {
      const children_1: any
      {
        children_1 as children
      }
    }
    {
      propTypes_1 as propTypes
    }
  }
}

export declare function Help({
  hint,
  children,
}: {
  hint: any
  children: any
}): JSX.Element

export declare namespace Help {
  export namespace propTypes {
    const hint: any
    const children: any
  }
}

declare function IconAddUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconAddUser {
  {
    IconPropTypes as propTypes
  }
}
export { IconAddUser }
export { IconAddUser as IconIdentity }

declare function IconAlert({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconAlert {
  {
    IconPropTypes as propTypes
  }
}
export { IconAlert }
export { IconAlert as IconNotifications }

export declare function IconAlignCenter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAlignCenter {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconAlignJustify({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAlignJustify {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconAlignLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAlignLeft {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconAlignRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAlignRight {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconAragon({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAragon {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconArrowDown({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconArrowDown {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconArrowLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconArrowLeft {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconArrowRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconArrowRight {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconArrowUp({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconArrowUp {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconAtSign({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconAtSign {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconBlock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconBlock {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconBookmark({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconBookmark {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCalendar({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCalendar {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCanvas({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCanvas {
  {
    IconPropTypes as propTypes
  }
}

declare function IconCaution({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconCaution {
  {
    IconPropTypes as propTypes
  }
}
export { IconCaution as IconAttention }
export { IconCaution }

export declare function IconCenter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCenter {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconChart({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconChart {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconChat({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconChat {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCheck({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCheck {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconChip({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconChip {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCircleCheck({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCircleCheck {
  {
    IconPropTypes as propTypes
  }
}

declare function IconCircleMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconCircleMinus {
  {
    IconPropTypes as propTypes
  }
}
export { IconCircleMinus }
export { IconCircleMinus as IconRemove }

declare function IconCirclePlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconCirclePlus {
  {
    IconPropTypes as propTypes
  }
}
export { IconCirclePlus as IconAdd }
export { IconCirclePlus }

declare function IconClock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconClock {
  {
    IconPropTypes as propTypes
  }
}
export { IconClock }
export { IconClock as IconTime }

export declare function IconCloudDownload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCloudDownload {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCloudUpload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCloudUpload {
  {
    IconPropTypes as propTypes
  }
}

declare function IconCoin({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconCoin {
  {
    IconPropTypes as propTypes
  }
}
export { IconCoin }
export { IconCoin as IconFundraising }

export declare function IconConfiguration({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconConfiguration {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconConnect({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconConnect {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconConnection({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconConnection {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconConsole({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconConsole {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconCopy({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconCopy {
  {
    IconPropTypes as propTypes
  }
}

declare function IconCross({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconCross {
  {
    IconPropTypes as propTypes
  }
}
export { IconCross as IconClose }
export { IconCross }

export declare function IconDashedSquare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconDashedSquare {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconDown({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconDown {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconDownload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconDownload {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconEdit({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconEdit {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconEllipsis({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconEllipsis {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconEnter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconEnter {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconEthereum({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconEthereum {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconExternal({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconExternal {
  {
    IconPropTypes as propTypes
  }
}

declare function IconFile({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconFile {
  {
    IconPropTypes as propTypes
  }
}
export { IconFile as IconBlank }
export { IconFile }

export declare function IconFilter({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconFilter {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconFlag({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconFlag {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconFolder({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconFolder {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconGraph({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconGraph {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconGraph2({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconGraph2 {
  {
    IconPropTypes as propTypes
  }
}

declare function IconGrid({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconGrid {
  {
    IconPropTypes as propTypes
  }
}
export { IconGrid as IconApps }
export { IconGrid }

export declare function IconGroup({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconGroup {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconHash({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconHash {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconHeart({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconHeart {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconHide({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconHide {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconHome({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconHome {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconImage({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconImage {
  {
    IconPropTypes as propTypes
  }
}

declare function IconInfo({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconInfo {
  {
    IconPropTypes as propTypes
  }
}
export { IconInfo as IconBylaw }
export { IconInfo }
export { IconInfo as IconPermissions }

export declare function IconLabel({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLabel {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconLayers({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLayers {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLeft {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconLink({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLink {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconLocation({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLocation {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconLock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconLock {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMail({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMail {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMaximize({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMaximize {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMenu({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMenu {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMinimize({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMinimize {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMinus {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconMove({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconMove {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconNoPicture({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconNoPicture {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconPicture({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconPicture {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconPlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconPlus {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconPower({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconPower {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconPrint({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconPrint {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconProhibited({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconProhibited {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconQuestion({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconQuestion {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconRefresh({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconRefresh {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconRemoveUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconRemoveUser {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconRight {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconRotateLeft({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconRotateLeft {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconRotateRight({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconRotateRight {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSearch({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSearch {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSettings({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSettings {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconShare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconShare {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSquare({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSquare {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSquareMinus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSquareMinus {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSquarePlus({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSquarePlus {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconStar({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconStar {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconStarFilled({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconStarFilled {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconSwap({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconSwap {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconTarget({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconTarget {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconToken({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconToken {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconTrash({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconTrash {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconUnlock({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconUnlock {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconUp({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconUp {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconUpload({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconUpload {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconUser({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconUser {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconView({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconView {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconVote({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconVote {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconWallet({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconWallet {
  {
    IconPropTypes as propTypes
  }
}

declare function IconWarning({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

declare namespace IconWarning {
  {
    IconPropTypes as propTypes
  }
}
export { IconWarning as IconError }
export { IconWarning }

export declare function IconWorld({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconWorld {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconWrite({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconWrite {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconZoomIn({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconZoomIn {
  {
    IconPropTypes as propTypes
  }
}

export declare function IconZoomOut({
  size,
  ...props
}: {
  [x: string]: any
  size?: any
}): JSX.Element

export declare namespace IconZoomOut {
  {
    IconPropTypes as propTypes
  }
}

/**
 * A function that only returns the first parameter passed to it.
 * @param {any} x The first parameter
 * @returns {any}
 */
export declare function identity(x: any): any

export declare const IdentityBadge: any

export declare function ImageExists({
  timeUntilFallback,
  src,
  children,
}: {
  timeUntilFallback: any
  src: any
  children: any
}): any

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
  children: any
  mode: any
  color: any
  titleColor: any
  background: any
  borderColor: any
  title: any
}): JSX.Element

export declare namespace Info {
  export namespace propTypes {
    const children: any
    const title: any
    const mode: any
    const color: any
    const titleColor: any
    const background: any
    const borderColor: any
  }
  {
    Info as Action
  }
  {
    Warning as Permissions
  }
  {
    Warning as Alert
  }
}

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
  breakpoints: any
  children: any
  paddingBottom: any
  parentWidth: any
}): JSX.Element

export declare namespace Layout {
  export namespace propTypes {
    const breakpoints: any
    const children: any
    const paddingBottom: any
    const parentWidth: any
  }
  export namespace defaultProps {
    const breakpoints_1: {}
    {
      breakpoints_1 as breakpoints
    }
    const paddingBottom_1: number
    {
      paddingBottom_1 as paddingBottom
    }
  }
  {
    LayoutContext as __Context
  }
}

/**
 * Some layout method
 */
declare type layoutType = {
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
  lines: linesProps,
  reset,
  springConfig,
  total,
  width: widthProps,
  ...props
}: {
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
}): JSX.Element

export declare namespace LineChart {
  export namespace propTypes {
    const springConfig: any
    const total: any
    const width: any
    const height: any
    const dotRadius: any
    const animDelay: any
    const borderColor: any
    const labelColor: any
    const reset: any
    const lines: any
    const label: any
    const color: any
  }
  export namespace defaultProps {
    const springConfig_1: {
      mass: number
      tension: number
      friction: number
    }
    {
      springConfig_1 as springConfig
    }
    const total_1: number
    {
      total_1 as total
    }
    const height_1: number
    {
      height_1 as height
    }
    const dotRadius_1: number
    {
      dotRadius_1 as dotRadius
    }
    const animDelay_1: number
    {
      animDelay_1 as animDelay
    }
    const reset_1: boolean
    {
      reset_1 as reset
    }
    const borderColor_1: string
    {
      borderColor_1 as borderColor
    }
    const labelColor_1: string
    {
      labelColor_1 as labelColor
    }
    const lines_1: any[]
    {
      lines_1 as lines
    }
    export function label_1(index: any): any {
      label_1 as label
    }
    export function color_1(
      index: any,
      {
        lines,
      }: {
        lines: any
      }
    ): string {
      color_1 as color
    }
  }
}

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

export declare const LinkBase: any

export declare const LoadingRing: any

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
}: {
  [x: string]: any
  allowHtml: any
  className: any
  content: any
  markdownToJsxOptions: any
  normalized: any
  style: any
}): JSX.Element

export declare namespace Markdown {
  export namespace propTypes {
    const allowHtml: any
    const className: any
    const content: any
    const markdownToJsxOptions: any
    const normalized: any
    const style: any
  }
  export namespace defaultProps {
    const normalized_1: boolean
    {
      normalized_1 as normalized
    }
  }
}

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

export declare namespace Modal {
  export namespace propTypes {
    const children: any
    const closeButton: any
    const onClose: any
    const onClosed: any
    const padding: any
    const visible: any
    const width: any
  }
  export namespace defaultProps {
    const closeButton_1: boolean
    {
      closeButton_1 as closeButton
    }
    {
      noop as onClose
    }
    {
      noop as onClosed
    }
    const padding_1: number
    {
      padding_1 as padding
    }
    export function width_1(viewport: any): number {
      width_1 as width
    }
  }
}

export declare function monospace(): string

export declare const MONOSPACE_FONT_FAMILY: 'aragon-ui-monospace'

export declare class NavigationBar {
  static propTypes: {
    onBack: any
    items: any
    compact: any
  }
  static defaultProps: {
    onBack: () => void
    items: any[]
    compact: boolean
  }
  static getDerivedStateFromProps(
    props: any,
    state: any
  ): {
    cachedItems: any
  }
  state: {
    cachedItems: any
    direction: number
  }
  render(): JSX.Element
}

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

export declare const Pagination: any

export declare function PartitionBar({
  data,
  caption,
  colors,
}: {
  data: any
  caption: any
  colors: any
}): JSX.Element

export declare namespace PartitionBar {
  export namespace propTypes {
    const data: any
    const colors: any
    const caption: any
  }
}

/**
 * Creates a new object from obj that only contains specific keys.
 * @param {object} obj The source object.
 * @param {array}  keys The keys to pick in the source object.
 * @returns {object}
 */
export declare function pick(obj: object, keys: any[]): object

export declare function Popover({
  scaleEffect,
  visible,
  ...props
}: {
  [x: string]: any
  scaleEffect: any
  visible: any
}): JSX.Element

export declare namespace Popover {
  export namespace propTypes {
    const scaleEffect: any
    const visible: any
    const children: any
    const closeOnOpenerFocus: any
    const onClose: any
    const opener: any
    const placement: any
    const rootBoundary: any
    const theme: any
    const transitionStyles: any
    const zIndex: any
  }
  export namespace defaultProps {
    const scaleEffect_1: boolean
    {
      scaleEffect_1 as scaleEffect
    }
    const visible_1: boolean
    {
      visible_1 as visible
    }
    const closeOnOpenerFocus_1: boolean
    {
      closeOnOpenerFocus_1 as closeOnOpenerFocus
    }
    const opener_1: any
    {
      opener_1 as opener
    }
    const placement_1: string
    {
      placement_1 as placement
    }
    {
      noop as onClose
    }
    const zIndex_1: number
    {
      zIndex_1 as zIndex
    }
  }
}

export declare function prefixUrl(url: any, publicUrl: any): any

export declare const ProgressBar: any

export declare function PublicUrl(props: any): JSX.Element

export declare namespace PublicUrl {
  {
    PublicUrlProvider as Provider
  }
  {
    hocWrap
  }
  {
    styledUrl
  }
}

declare class Radio {
  static propTypes: {
    addRadio: any
    checked: any
    disabled: any
    id: any
    onChange: any
    removeRadio: any
    selectNext: any
    selectPrev: any
    tabIndex: any
  }
  static defaultProps: {
    addRadio: typeof noop
    checked: boolean
    disabled: boolean
    id: any
    onChange: any
    removeRadio: typeof noop
    selectNext: typeof noop
    selectPrev: typeof noop
  }
  render(): JSX.Element
}
export { Radio }
export { Radio as RadioButton }

export declare class RadioGroup {
  static propTypes: {
    children: any
    selected: any
    onChange: any
  }
  static defaultProps: {
    onChange: typeof noop
  }
  state: {
    radios: Set<any>
  }
  handleChange: (id: any) => void
  addRadio: (id: any) => void
  removeRadio: (id: any) => void
  getSiblingId(position: any): any
  selectPrev: () => void
  selectNext: () => void
  render(): JSX.Element
}

export declare function RadioList({
  description,
  items,
  onChange,
  selected,
  title,
  ...props
}: {
  [x: string]: any
  description: any
  items: any
  onChange: any
  selected: any
  title: any
}): JSX.Element

export declare namespace RadioList {
  export namespace propTypes {
    const description: any
    const items: any
    const onChange: any
    export function selected(
      {
        items,
        selected,
      }: {
        items: any
        selected: any
      },
      _: any,
      componentName: any
    ): void
    const title: any
  }
  export namespace defaultProps {
    const items_1: any[]
    {
      items_1 as items
    }
    {
      noop as onChange
    }
    const selected_1: number
    {
      selected_1 as selected
    }
  }
}

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
  {
    hocWrap
  }
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

export declare namespace RedrawFromDate {
  {
    hocWrap
  }
}

export declare function Root(props: any): JSX.Element

export declare namespace Root {
  {
    RootProvider as Provider
  }
}

export declare function RootPortal(props: any): JSX.Element

export declare namespace RootPortal {
  export namespace propTypes {
    const children: any
  }
}

export declare function SafeLink(props: any): JSX.Element

export declare function ScrollView({
  children,
  horizontal,
  vertical,
  ...props
}: {
  [x: string]: any
  children: any
  horizontal: any
  vertical: any
}): JSX.Element

export declare namespace ScrollView {
  export namespace propTypes {
    const vertical: any
    const horizontal: any
    const children: any
  }
  export namespace defaultProps {
    const vertical_1: boolean
    {
      vertical_1 as vertical
    }
    const horizontal_1: boolean
    {
      horizontal_1 as horizontal
    }
  }
}

export declare const SearchInput: any

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
}: {
  blocking: any
  children: any
  opened: any
  onClose: any
  onTransitionEnd: any
  title: any
}): JSX.Element

export declare namespace SidePanel {
  export namespace propTypes {
    const blocking: any
    const children: any
    const opened: any
    const onClose: any
    const onTransitionEnd: any
    const title: any
  }
  export namespace defaultProps {
    const opened_1: boolean
    {
      opened_1 as opened
    }
    const blocking_1: boolean
    {
      blocking_1 as blocking
    }
    export function onClose_1(): void {
      onClose_1 as onClose
    }
    export function onTransitionEnd_1(): void {
      onTransitionEnd_1 as onTransitionEnd
    }
  }
  {
    CONTENT_PADDING as HORIZONTAL_PADDING
  }
}

export declare function SidePanelSeparator(props: any): JSX.Element

export declare function SidePanelSplit({
  children,
  ...props
}: {
  [x: string]: any
  children: any
}): JSX.Element

export declare namespace SidePanelSplit {
  export namespace propTypes {
    const children: any
  }
}

export declare function Slider(props: any): JSX.Element

export declare function Split({
  primary,
  secondary,
  invert,
}: {
  primary: any
  secondary: any
  invert: any
}): JSX.Element

export declare namespace Split {
  export namespace propTypes {
    const invert: any
    const primary: any
    const secondary: any
  }
  export namespace defaultProps {
    const invert_1: string
    {
      invert_1 as invert
    }
  }
}

export declare namespace springs {
  export namespace debug {
    const mass: number
    const tension: number
    const friction: number
  }
  export namespace lazy {
    const mass_1: number
    {
      mass_1 as mass
    }
    const tension_1: number
    {
      tension_1 as tension
    }
    const friction_1: number
    {
      friction_1 as friction
    }
  }
  export namespace smooth {
    const mass_2: number
    {
      mass_2 as mass
    }
    const tension_2: number
    {
      tension_2 as tension
    }
    const friction_2: number
    {
      friction_2 as friction
    }
  }
  export namespace swift {
    const mass_3: number
    {
      mass_3 as mass
    }
    const tension_3: number
    {
      tension_3 as tension
    }
    const friction_3: number
    {
      friction_3 as friction
    }
  }
  export namespace instant {
    const mass_4: number
    {
      mass_4 as mass
    }
    const tension_4: number
    {
      tension_4 as tension
    }
    const friction_4: number
    {
      friction_4 as friction
    }
  }
}

export declare function stylingProps(instance: any, names?: any[]): any

export declare function Switch({
  checked,
  disabled,
  onChange,
}: {
  checked: any
  disabled: any
  onChange: any
}): JSX.Element

export declare namespace Switch {
  export namespace propTypes {
    const checked: any
    const disabled: any
    const onChange: any
  }
  export namespace defaultProps {
    const checked_1: boolean
    {
      checked_1 as checked
    }
    const disabled_1: boolean
    {
      disabled_1 as disabled
    }
    {
      noop as onChange
    }
  }
}

export declare function SyncIndicator({
  children,
  label,
  shift,
  visible,
  ...props
}: {
  [x: string]: any
  children: any
  label: any
  shift: any
  visible: any
}): JSX.Element

export declare namespace SyncIndicator {
  export namespace propTypes {
    const children: any
    const label: any
    const shift: any
    const visible: any
  }
  export namespace defaultProps {
    const label_1: string
    {
      label_1 as label
    }
  }
}

export declare function TabBar(props: any): JSX.Element

export declare function Table({
  header,
  children,
  noSideBorders,
  ...props
}: {
  [x: string]: any
  header: any
  children: any
  noSideBorders: any
}): JSX.Element

export declare namespace Table {
  export namespace propTypes {
    const children: any
    const header: any
    const noSideBorders: any
  }
  export namespace defaultProps {
    const noSideBorders_1: boolean
    {
      noSideBorders_1 as noSideBorders
    }
  }
}

export declare function TableCell({
  children,
  contentContainer: Container,
  align,
  ...props
}: {
  [x: string]: any
  children: any
  contentContainer: any
  align: any
}): JSX.Element

export declare namespace TableCell {
  export namespace propTypes_1 {
    const align_1: any
    {
      align_1 as align
    }
    const contentContainer: any
    const children: any
  }
  {
    propTypes_1 as propTypes
  }
  export namespace defaultProps {
    const align_2: string
    {
      align_2 as align
    }
    {
      ContentContainerDefault as contentContainer
    }
  }
}

export declare function TableHeader({
  title,
  align,
  ...props
}: {
  [x: string]: any
  title: any
  align: any
}): JSX.Element

export declare namespace TableHeader {
  export namespace propTypes {
    const title: any
    const align: any
  }
  export namespace defaultProps {
    const align_1: string
    {
      align_1 as align
    }
  }
}

export declare const TableRow: any

export declare function Tabs(props: any): JSX.Element

export declare namespace Tabs {
  import propTypes = TabBar.propTypes
  {
    propTypes
  }
}

export declare function Tag({
  background,
  children,
  color,
  limitDigits,
  icon,
  label,
  mode,
  size,
  uppercase,
  ...props
}: {
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
}): JSX.Element

export declare namespace Tag {
  export namespace propTypes {
    const background: any
    const children: any
    const color: any
    const limitDigits: any
    const icon: any
    const label: any
    const mode: any
    const size: any
    const uppercase: any
  }
  export namespace defaultProps {
    const uppercase_1: boolean
    {
      uppercase_1 as uppercase
    }
    const limitDigits_1: boolean
    {
      limitDigits_1 as limitDigits
    }
  }
}

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
    {
      deprecationNotice_1 as deprecationNotice
    }
  }
  {
    Block
  }
  {
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
    {
      size_1 as size
    }
    const weight_1: number
    {
      weight_1 as weight
    }
    const lineHeight_1: number
    {
      lineHeight_1 as lineHeight
    }
  }
  export namespace title3 {
    const size_2: number
    {
      size_2 as size
    }
    const weight_2: number
    {
      weight_2 as weight
    }
    const lineHeight_2: number
    {
      lineHeight_2 as lineHeight
    }
  }
  export namespace title4 {
    const size_3: number
    {
      size_3 as size
    }
    const weight_3: number
    {
      weight_3 as weight
    }
    const lineHeight_3: number
    {
      lineHeight_3 as lineHeight
    }
  }
  export namespace body1 {
    const size_4: number
    {
      size_4 as size
    }
    const weight_4: number
    {
      weight_4 as weight
    }
    const lineHeight_4: number
    {
      lineHeight_4 as lineHeight
    }
  }
  export namespace body2 {
    const size_5: number
    {
      size_5 as size
    }
    const weight_5: number
    {
      weight_5 as weight
    }
    const lineHeight_5: number
    {
      lineHeight_5 as lineHeight
    }
  }
  export namespace body3 {
    const size_6: number
    {
      size_6 as size
    }
    const weight_6: number
    {
      weight_6 as weight
    }
    const lineHeight_6: number
    {
      lineHeight_6 as lineHeight
    }
  }
  export namespace body4 {
    const size_7: number
    {
      size_7 as size
    }
    const weight_7: number
    {
      weight_7 as weight
    }
    const lineHeight_7: number
    {
      lineHeight_7 as lineHeight
    }
  }
  export namespace label1 {
    const size_8: number
    {
      size_8 as size
    }
    const weight_8: number
    {
      weight_8 as weight
    }
    const lineHeight_8: number
    {
      lineHeight_8 as lineHeight
    }
    const transform: string
  }
  export namespace label2 {
    const size_9: number
    {
      size_9 as size
    }
    const weight_9: number
    {
      weight_9 as weight
    }
    const lineHeight_9: number
    {
      lineHeight_9 as lineHeight
    }
    const transform_1: string
    {
      transform_1 as transform
    }
  }
  export namespace label3 {
    const size_10: number
    {
      size_10 as size
    }
    const weight_10: number
    {
      weight_10 as weight
    }
    const lineHeight_10: number
    {
      lineHeight_10 as lineHeight
    }
    const transform_2: string
    {
      transform_2 as transform
    }
  }
  export namespace address1 {
    const size_11: number
    {
      size_11 as size
    }
    const weight_11: number
    {
      weight_11 as weight
    }
    const lineHeight_11: number
    {
      lineHeight_11 as lineHeight
    }
    const monospace: boolean
  }
  export namespace address2 {
    const size_12: number
    {
      size_12 as size
    }
    const weight_12: number
    {
      weight_12 as weight
    }
    const lineHeight_12: number
    {
      lineHeight_12 as lineHeight
    }
    const monospace_1: boolean
    {
      monospace_1 as monospace
    }
  }
}

export declare const TextCopy: any

export declare const TextInput: any

export declare function textStyle(
  name: any,
  includeLineHeight?: boolean
): string

export declare function Theme({
  theme,
  children,
}: {
  theme: any
  children: any
}): JSX.Element

export declare namespace Theme {
  export namespace propTypes {
    const children: any
    const theme: any
  }
  {
    THEME_DEFAULT
  }
  {
    EMBEDDED_THEMES
  }
}

export declare const theme: any

export declare const themeDark: any

export declare function Timer(props: any): JSX.Element

export declare function Toast(props: any): any

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

export declare const TokenBadge: any

/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export declare function tokenIconUrl(address?: string): string

export declare const TransactionBadge: any

export declare const TransactionProgress: any

export declare function unselectable(): string

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
 * @typedef {object} layoutType@typedef {object} layoutType
 * @property {("small" | "medium" | "large" | "max")} layoutName
 * @property {string} layoutWidth
 *
 * @returns {layoutType}
 */
export declare function useLayout(): layoutType

export declare function useOnBlur(
  ...params: any[]
): {
  ref: any
  handleFocusLeave: (event: any) => void
}

export declare function useRoot(): any

export declare function useSidePanel(): any

export declare function useSidePanelFocusOnReady(ref: any): any

export declare function useTheme(): any

export declare function useToast(): any

export declare function useViewport(): any

export declare function Viewport(props: any): JSX.Element

export declare namespace Viewport {
  {
    ViewportProvider as Provider
  }
}

export declare const warn: any

export declare const warnOnce: any

export {}
