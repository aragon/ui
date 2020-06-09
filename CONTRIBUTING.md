# Contribute to aragonUI

## How to develop

The `devbox/` directory contains an app that can get used to develop components.

To develop using it, you have to link aragonUI first:

```console
cd aragon-ui/
yarn link
cd devbox/
yarn link @aragon/ui
```

Then rebuild aragonUI on changes:

```console
# shell session 1
yarn dev
```

And finally launch the development server:

```console
# shell session 2
yarn devbox
```

## Structure

```
src/
  components/  # The React components.
  icons/       # Contains the icon components exported by aragonUI.
  libs/        # Internal library. Can contain various utilities. Nothing here should be exported.
  style/       # Everything related to the styles: spring configs, text styles, etc.
  theme/       # The theming system.
  utils/       # Public utility library. Everything in there is exported and part of the public API.
  vendor/      # This is where external libraries can get exported as-is.
```
