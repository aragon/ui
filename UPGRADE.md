## Theming

A new hook, `useTheme()`, should now be used to get the theme object. This
change was necessary to allow swapping the theme on the fly.

Importing the `colors`, `theme`, `themeDark`, or `brand` objects still works but is deprecated.

## Button

The `secondary` mode doesn’t exist anymore. Setting it will display the button in normal mode (the default).

## Springs

The `spring()` function has been removed. The `springs` object should be used instead.

## Layout

Apps should be wrapped in the new `Layout` component, that provides a simple centering / breakpoints mechanism.

## Viewport breakpoints

small: 540 => 52 GU
medium: 768 => 96 GU
large: 1170 => 138 GU

## BreakPoint has been removed

The ViewPort component should be used instead.

## GRID / grid() have been removed
