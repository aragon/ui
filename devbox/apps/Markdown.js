import React from 'react'
import styled from 'styled-components'
import { Box, GU, Markdown } from '@tecommons/ui'

const EXAMPLE = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Italicized text is the *cat’s meow*. We can even __emphasize__ the text and ~~reconsider what we type~~.

___

Lists:

* [I’m an inline-style link](https://www.google.com)
* ![alt text](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown logo")

Checklists

- [ ] Item to complete
- [x] Item completed

There are ordered lists as well!

1. First item
2. Second

---

Here is a \`code\` example:

\`\`\`javascript
function hello(name) {
  console.log(\`Hello \${name}\`)
}

hello('World')
\`\`\`

***

> Look at this blockquote
> They are in the same block

But we can break it here…

> And start again later!

Tables
======

This    | Pretty  | Table
--------|---------|-----------
*Still* | renders | **nicely**
1       | 2       | 3
`

function App() {
  return (
    <Box>
      <Markdown content={EXAMPLE} />
    </Box>
  )
}

export default App
