## Theming

A new hook, `useTheme()`, should now be used to get the theme object. This
change was necessary to allow swapping the theme on the fly.

Importing the `colors` or the `theme` objects still works but is deprecated.

## Button

The `secondary` mode doesn’t exist anymore. Setting it will display the button in normal mode (the default).

## Springs

The `spring()` function has been removed. The `springs` object should be used instead.
