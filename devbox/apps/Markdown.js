import React from 'react'
import styled from 'styled-components'
import { Markdown } from '@aragon/ui'

// In practice, would read from an HTML or .md file
const codeBlock =
  '```javascript\n\nvar s = "hello world";\n\nconsole.log(s);\n\n```'

const example = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

Italicized text is the *cat's meow*. We can even __emphasize__ the text and ~~reconsider~~ what we type:
___

Lists:
* [I'm an inline-style link](https://www.google.com)
* ![alt text](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown logo")
- [ ] Here is a checklist
- [x] Item completed
1. There are ordered lists as well!!
2. What's next?

---

Here is a code example:
${codeBlock}

***

> Look at this blockquote
> They are in the same block

But we can break it here...

> And start again later!

Tables
======

This | Pretty | Table
--- | --- | ---
*Still* | renders | **nicely**
1 | 2 | 3
`

class App extends React.Component {
  render() {
    return (
      <Main>
        <Markdown content={example} />
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`

export default App
