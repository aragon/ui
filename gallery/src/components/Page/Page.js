import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTheme, RADIUS, GU, textStyle } from '@tecommons/ui'
import color from 'ui-src/utils/color'
import renderReadme from 'src/render-readme'
import MarkdownContent from './MarkdownContent'
import Frame from './Frame'
import Resizable from './Resizable'

function Page({ title, readme, children }) {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const [{ intro, doc }, setReadmeData] = useState({ intro: '', doc: '' })

  useEffect(() => {
    let loadingDelay

    const load = async () => {
      // Wait 50ms before displaying the loader
      loadingDelay = setTimeout(() => {
        setLoading(true)
      }, 50)

      setReadmeData(await renderReadme(readme))
      clearTimeout(loadingDelay)
      setLoading(false)
    }

    load()

    return () => clearTimeout(loadingDelay)
  }, [])

  return (
    <section
      css={`
        width: 100%;
        max-width: 900px;
        padding: ${5 * GU}px;

        pre {
          margin-bottom: ${4.5 * GU}px;
        }
        code {
          font-family: 'Source Code Pro', monospace;
        }

        > h1 {
          margin-bottom: ${5 * GU}px;
          font-weight: 600;
          font-size: 24px;
        }
        h2 {
          font-weight: 600;
          margin-top: ${7.5 * GU}px;
          margin-bottom: ${4 * GU}px;
          font-weight: 600;
          font-size: 18px;
        }
        h3 {
          position: relative;
          margin-top: ${5 * GU}px;
          margin-bottom: ${3 * GU}px;
          padding: ${1 * GU}px 0;
          font-weight: 600;
          font-size: 16px;
        }
        p,
        ul,
        figure {
          list-style-position: inside;
          margin: 0 0 ${4 * GU}px;
          line-height: 1.8;
        }
        .deprecated {
          color: ${theme.negativeContent};
          padding: ${0.5 * GU}px ${1 * GU}px;
          background: ${color(theme.negative).alpha(0.8)};
        }
      `}
    >
      <h1>{title}</h1>
      {loading && <p>Loading…</p>}
      {!readme || intro ? (
        <div>
          <MarkdownContent content={intro} />
          {children}
          <MarkdownContent content={doc} />
        </div>
      ) : null}
    </section>
  )
}

function PageDemo({ opaque, height, children, container = true }) {
  return (
    <div>
      <h2>Demonstration</h2>
      {container ? (
        <Resizable>
          <Frame opaque={opaque} height={height}>
            {children}
          </Frame>
        </Resizable>
      ) : (
        children
      )}
    </div>
  )
}

Page.Demo = PageDemo
export default Page
