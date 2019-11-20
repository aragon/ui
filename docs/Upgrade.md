# Upgrade to aragonUI 1.0

All deprecations requiring a manual upgrade will log warnings to the console in non-production environments.

Outside of any listed exceptions, all deprecations in 1.0 will be removed in releases after March 2020.

## Experimental components

Using experimental components have their names prefixed with an underscore, and should always require your attention whenever aragonUI gets updated.

For this release, the `_DateRange` component has been renamed `DateRangePicker`.

## Theming

Theming is now done with a hook rather than statically. This change was necessary to allow the theme to change at run time. The `useTheme()` hook should now be used to fetch the theme object.

The `colors`, `theme`, `themeDark`, or `brand` objects are now deprecated.

For more information, please consult [the documentation page for colors](https://ui.aragon.org/colors/).

## AragonApp

This component was already deprecated, and has now been removed. If you were still using it, please use the [`Main`](https://ui.aragon.org/main/) component instead.

## AppView

`AppView` is now deprecated. The layout of an app should now be implicitly handled by [`Main`](https://ui.aragon.org/main/) and [`Header`](https://ui.aragon.org/header/) should be used for the app header.

Note: if you really must keep using the `AppView` component, you can set set `layout={false}` on `Main`. This feature will be removed at the same time as other deprecations.

## Button

The `secondary`, `outline`, and `text` modes don’t exist anymore. Setting them will display the button in normal mode (the default).

The `text` mode has been replaced by the `ButtonText` component.

The `emphasis` prop doesn’t exist anymore. `positive` and `negative` are now modes that can be set directly.

See the [`Button` documentation page](https://ui.aragon.org/button/) for more details.

## Springs

The `spring()` function has been removed. If you were using it, please use the `springs` (with an s) object instead.

## BreakPoint

[`useViewport()`](https://ui.aragon.org/viewport/) should be used instead.

## GRID and grid()

Responsiveness is now handled in a different way, and nothing replaces `GRID` / `grid()`.

## AppBar and NavigationBar

For the title and the main action of an app, [`Header`](http://ui.aragon.org/header/) should get used.

For tabs, use the `Tabs` component.

For `NavigationBar`, we now recommend achieving this by using the [`BackButton`](http://ui.aragon.org/back-button/) inside a [`Bar`](http://ui.aragon.org/bar/).

## TabBar

`TabBar` has been renamed to `Tabs`. A legacy `TabBar` is still available, but will be removed at the same
time as other deprecations.

The `onSelect` prop has been removed in `Tabs`: please use `onChange` instead.

## Text and font()

Both the `Text` component and the `font()` utility are deprecated.

Please use [`textStyle()`](https://ui.aragon.org/text-styles/) directly in your components instead.

## Badge

If you were using the `Badge` component and/or its variants (`Badge.Info`, `Badge.Identity`, `Badge.App`, `Badge.Notification`, `BadgeNumber`), you should switch as follows:

- `Badge` => `<Tag />`.
- `Badge.Info` => `<Tag />`.
- `Badge.Identity` => `<IdentityBadge />`.
- `Badge.App` => `<Tag />`.
- `Badge.Notification` => `<Tag limitDigits />`.
- `BadgeNumber` => `<Tag limitDigits />`.

## Table

If you were using the `Table` component, you might want to have a look at the new [`DataView`](https://ui.aragon.org/data-view/) component. It does what `Table` was doing, and much more.

`Table` is not considered deprecated yet, but may be in a future version. It will not be removed following March 2020.

## observe()

The `observe()` utility is now deprecated. If you were using it with [`@aragon/api`](https://hack.aragon.org/docs/api-js-ref-api), using [`@aragon/api-react`](https://hack.aragon.org/docs/api-js-ref-react) directly is now the recommended way to do this.
