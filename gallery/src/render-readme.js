import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'

import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-javascript'

// MarkdownIt plugin inspired by Joshua Gleitze’s project:
// https://github.com/jGleitz/markdown-it-prism
const markdownItPrism = markdownit => {
  markdownit.options.highlight = (text, lang) => {
    const code = Prism.languages[lang]
      ? Prism.highlight(text, Prism.languages[lang])
      : markdownit.utils.escapeHtml(text)
    const classAttr = lang
      ? ` class="${markdownit.options.langPrefix}${lang}"`
      : ''
    return `<pre${classAttr}><code${classAttr}>${code}</code></pre>`
  }
}

const splitIntro = html => {
  const container = document.createElement('div')
  container.innerHTML = html

  const children = [...container.childNodes]
  const docIndex = children.findIndex(
    elt =>
      elt.tagName === 'H2' &&
      (elt.textContent === 'Properties' || elt.textContent === 'Signature')
  )

  if (children[0].tagName === 'H1') {
    children.shift()
  }

  const nodesToString = nodes =>
    nodes
      .map(node => (node.nodeName === '#text' ? node.data : node.outerHTML))
      .join('\n')

  // No doc part found
  if (docIndex === -1) {
    return { intro: nodesToString(children), doc: '' }
  }

  return {
    intro: nodesToString(children.slice(0, docIndex - 1)),
    doc: nodesToString(children.slice(docIndex - 1)),
  }
}

const md = new MarkdownIt()
md.use(markdownItPrism)
md.use(MarkdownItAnchor, {
  level: [2, 3],
})

export default async url => {
  const result = await fetch(url)
  const content = await result.text()
  const html = md.render(content)
  return splitIntro(html)
}
