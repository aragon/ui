# Illustrated section

## Usage

Renders a section with different sub components and an illustration.

Example:

```jsx
import { IllustratedSection } from '@aragon/ui'

const {
  Title,
  Subtitle,
  Emphasis,
  Content,
  Illustration
} = IllustratedSection

const App = () => (
  <IllustratedSection>

    <Title>
      <h1>Lorem ipsum dolor sit amet</h1>
    </Title>

    <Subtitle>
      <p>Lorem ipsum dolor sit amet</p>
    </Subtitle>

    <Emphasis>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </Emphasis>

    <Content>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </Content>

    <Illustration>
      <img src="illustration.svg" alt="" />
    </Illustration>

  </IllustratedSection>
)
```

## Properties

### `dark`

Use this property if you want to set a dark background, so that the colors of the text can adapt to it.

```jsx
<IllustratedSection dark>
  <Title>
    <h1>Lorem ipsum dolor sit amet</h1>
  </Title>
</IllustratedSection>
```
