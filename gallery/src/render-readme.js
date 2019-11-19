import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItLinkAttrs from 'markdown-it-link-attributes'

import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-javascript'

// MarkdownIt plugin inspired by Joshua Gleitze’s project:
// https://github.com/jGleitz/markdown-it-prism
function MarkdownItPrism(markdownit) {
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

  const children = [...container.childNodes].map(node => {
    // deprecated notices
    if (node.innerHTML && node.innerHTML.startsWith('deprecated: ')) {
      node.innerHTML = node.innerHTML.replace(/^deprecated: /, '')
      node.className = 'deprecated'
    }

    return node
  })

  const docIndex = children.findIndex(
    elt =>
      elt.tagName === 'H2' &&
      (elt.textContent === 'Properties' ||
        elt.textContent === 'Props' ||
        elt.textContent === 'Signature')
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

const md = new MarkdownIt({ html: true })
md.use(MarkdownItPrism)
md.use(MarkdownItAnchor, { level: [2, 3] })
md.use(MarkdownItLinkAttrs, {
  pattern: /^https?:/,
  attrs: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
})

export default async url => {
  const result = await fetch(url)
  const content = await result.text()
  const html = md.render(content)
  return splitIntro(html)
}
