# Upgrade to aragonUI 1.0

### Theming

Theming is now done using a hook rather than statically. This change was necessary to allow the theme to change at run time. The hook `useTheme()` should now get used to fetch the theme object.

Using the `colors`, `theme`, `themeDark`, or `brand` objects is deprecated and will get removed in the next version.

For more information, please consult [the documentation page for colors](https://ui.aragon.org/colors/).

### AragonApp

This component was already deprecated, and has now been removed. If you were still using it, please use the [`Main`](https://ui.aragon.org/main/) component instead.

### AppView

`AppView` is deprecated and will get removed in the next version. The layout of an app is now implicitely handled by [`Main`](https://ui.aragon.org/main/), and [`Header`](https://ui.aragon.org/header/) should be used for the top part of an app.

Note: if you really have to keep using the `AppView` component, you can set set `layout={false}` on `Main`.

### Button

The `secondary` and `outline` modes doesn’t exist anymore. Setting them will display the button in normal mode (the default).

The `text` mode doesn’t exist anymore, and has been replaced by the `ButtonText` component.

The `emphasis` prop doesn’t exist anymore. `positive` and `negative` are now modes that can be set directly.

See the [`Button` documentation page](https://ui.aragon.org/button/) for more details.

### Springs

The `spring()` function has been removed. If you were using it, please use the `springs` (with an s) object instead.

### BreakPoint

[`useViewport()`](https://ui.aragon.org/viewport/) should be used instead.

### GRID and grid()

Responsiveness is now handled in a different way, and nothing replaces `GRID` / `grid()`.

### AppBar and NavigationBar

For the title and the main action of an app, [`Header`](http://ui.aragon.org/header/) should get used instead. For tabs, use the `Tabs` component. For `NavigationBar`, this is now generally achieved by using [`BackButton`](http://ui.aragon.org/back-button/) inside a [`Bar`](http://ui.aragon.org/bar/).

### TabBar

`TabBar` has been renamed `Tabs`. `TabBar` will get removed in a future version.

The `onSelect` prop has been removed: please use `onChange` instead.

### Text and font()

Both the `Text` component and the `font()` utility are deprecated and will get removed in a future version.

Please use [`textStyle()`](https://ui.aragon.org/text-styles/) directly on your components instead.

### Badge

If you were using the `Badge` component and/or its variants (`Badge.Info`, `Badge.Identity`, `Badge.App`, `Badge.Notification`, `BadgeNumber`), you might want to switch as follows:

- `Badge` => `<Tag />`.
- `Badge.Info` => `<Tag />`.
- `Badge.Identity` => `<IdentityBadge />`.
- `Badge.App` => `<Tag />`.
- `Badge.Notification` => `<Tag limitDigits />`.
- `BadgeNumber` => `<Tag limitDigits />`.

### Table

If you were using the `Table` component, you might want to have a look at the new [`DataView`](https://ui.aragon.org/data-view/) component. It does what `Table` was doing, and much more.
