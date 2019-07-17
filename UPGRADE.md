## Theming

A new hook, `useTheme()`, should now be used to get the theme object. This
change was necessary to allow swapping the theme on the fly.

Importing the `colors`, `theme`, `themeDark`, or `brand` objects still works but is deprecated.

## AppView

`AppView` is deprecated. The layout is now provided by `Main`, and `Header`
should be used to provide the top bar of an app.

To keep using the `AppView` component, set `layout={false}` on `Main`.

## Button

The `secondary` mode doesn’t exist anymore. Setting it will display the button in normal mode (the default).

## Springs

The `spring()` function has been removed. The `springs` object should be used instead.

## Viewport breakpoints

small: 540 => 52 GU
medium: 768 => 96 GU
large: 1170 => 138 GU

## BreakPoint has been removed

The ViewPort component should be used instead.

## GRID / grid() have been removed

The Layout component should be used instead.

## AragonApp has been removed

The Main component should be used instead.

## AppView

AppView is deprecated and should be removed. Nothing replaces it: the
different layouts, provided by the Layout component, will be automatically
provided by the Main component if AppView is not present.

## AppBar is deprecated

A combination of Header and Bar should be used instead.

## Tabs (TabBar)

Support for the `onSelect` prop has been removed. Please use `onChange` instead.

`TabBar` has been renamed `Tabs`, but `TabBar` is still supported.

## fonts() vs. textStyle()

`fonts()` is now deprecated and `textStyle()` should be used instead.
