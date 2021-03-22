import React from 'react'
import styled from 'styled-components'
import { GU, textStyle, useTheme } from '@tecommons/ui'
import MenuItem from './MenuItem'

function Sidebar({ title, root, pages, activePage, groups, onOpen }) {
  const theme = useTheme()
  return (
    <div
      css={`
        width: ${30 * GU}px;
        flex-shrink: 0;
        background: ${theme.surface};
        border-right: 1px solid ${theme.border};
        box-shadow: 2px 0 3px rgba(0, 0, 0, 0.05);
      `}
    >
      <section
        css={`
          padding: ${5 * GU}px;
          li {
            list-style: none;
          }
        `}
      >
        <h1
          css={`
            margin-bottom: 30px;
            font-size: 18px;
            font-weight: 600;
            white-space: nowrap;
            a {
              text-decoration: none;
            }
          `}
        >
          <a
            href={root}
            onClick={event => {
              event.preventDefault()
              onOpen(root)
            }}
          >
            {title}
          </a>
        </h1>
        <nav>
          <ul>
            {groups.map(({ name, pages }) => (
              <li key={name}>
                <h2
                  css={`
                    margin-top: ${4 * GU}px;
                    margin-bottom: ${2 * GU}px;
                  `}
                >
                  <span
                    css={`
                      color: ${theme.surfaceContentSecondary};
                      ${textStyle('label2')};
                    `}
                  >
                    {name}
                  </span>
                </h2>
                <ul>
                  {pages.map((page, i) => (
                    <MenuItem
                      key={page.path}
                      active={page === activePage}
                      path={page.path}
                      name={page.name}
                      onOpen={onOpen}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Sidebar
