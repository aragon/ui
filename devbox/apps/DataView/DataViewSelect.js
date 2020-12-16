import React, { useState, useMemo } from 'react'
import { IdentityBadge, DataView, useTheme } from '@tecommons/ui'
import { createAddress } from '../../create-address'
import { multiplyArray } from '../../utils'

const addr = createAddress()

function DataViewSelect(props) {
  const theme = useTheme()
  const [selection, setSelection] = useState([])

  const entries = useMemo(
    () =>
      multiplyArray(
        [
          [addr(), '-7.900,33 ANT'],
          [addr(), '-8.760,90 ANT'],
          [addr(), '+5.321 ANT'],
          [addr(), '-328,65 ANT'],
          [addr(), '+3.321 ANT'],
          [addr(), '-328,65 ANT'],
        ],
        10
      ),
    []
  )

  return (
    <DataView
      {...props}
      fields={['Account', 'Amount']}
      entries={entries}
      renderEntry={([address, amount]) => [
        <IdentityBadge entity={address} />,
        <div
          css={`
            color: ${amount.startsWith('+') ? theme.success : 'inherit'};
          `}
        >
          {amount}
        </div>,
      ]}
      renderSelectionCount={count =>
        `${count} account${count !== 1 ? 's' : ''} selected`
      }
      onSelectEntries={(entries, indexes) => {
        console.log('Selected entries', entries, indexes)
        setSelection(indexes)
      }}
      selection={selection}
      heading={
        null && (
          <div
            css={`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <Button label="Import" icon={<IconDownload />} />
          </div>
        )
      }
    />
  )
}

export default DataViewSelect
