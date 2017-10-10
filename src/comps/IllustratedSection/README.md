# Illustrated section

## Usage

Renders a section with different slots and an illustration.

Example:

```html
<illustrated-section>
  <h1 slot="title">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
  </h1>
  <p slot="subtitle">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
  </p>
  <p slot="emphasis">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
  </p>
  <p slot="content">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
  </p>
  <img slot="illustration" src="./assets/illustration.svg" alt="" />
</illustrated-section>
```

### `dark` property

Use this property if you want to set a dark background, so that the colors of the text can adapt to it.

```html
<illustrated-section dark>
  …
</illustrated-section>
```

### `illustrationBefore` property

Use this property to position the illustration before the content (on the left).

```html
<ag-section illustrationBefore>
  …
</ag-section>
```

### Background / styling

To set a background on the main container, use the `style` and/or `class` properties.
