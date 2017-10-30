import { injectGlobal } from 'styled-components'
import { theme } from '@aragon/ui'

const globalStyles = `
  body {
    background: linear-gradient(
      130deg,
      ${theme.mainBgGradientStart},
      ${theme.mainBgGradientEnd}
    );
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: hsl(194, 56%, 98%);
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    background: hsl(194, 7%, 25%);
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: hsl(193, 80%, 45%);
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag {
    color: hsl(43, 96%, 85%);
  }
  .token.boolean,
  .token.number {
    color: hsl(43, 100%, 96%);
  }
  .token.keyword,
  .token.selector,
  .token.attr-name {
    color: hsl(0, 94%, 80%);
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.string {
    color: hsl(167, 72%, 60%);
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important {
    font-weight: bold;
  }
  .token.entity {
    cursor: help;
  }
`

export default () => {
  injectGlobal`${globalStyles}`
}
