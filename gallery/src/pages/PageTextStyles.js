import React from 'react'
import {
  Box,
  DataView,
  GU,
  TEXT_STYLES,
  textStyle,
  useLayout,
  TextCopy,
} from '@tecommons/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-docs/TextStyles.md'

function aragonDsName(name) {
  return name[0].toUpperCase() + name.slice(1, -1) + ' ' + name.slice(-1)
}

function PageTextStyles({ title }) {
  const { layoutName } = useLayout()
  return (
    <Page title={title} readme={readme}>
      <h2
        css={`
          font-size: 40px;
          margin-bottom: ${4 * GU}px;
        `}
      >
        Available text styles
      </h2>
      <DataView
        entries={Object.keys(TEXT_STYLES)}
        fields={['Name', 'Code']}
        renderEntry={name => [
          <span
            css={`
              ${textStyle(name)};
            `}
          >
            {aragonDsName(name)}
          </span>,
          <TextCopy
            value={`textStyle("${name}")`}
            css={`
              width: ${30 * GU}px;
            `}
          />,
        ]}
        entriesPerPage={-1}
      />
    </Page>
  )
}

export default PageTextStyles
