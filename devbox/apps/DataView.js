import React, { useEffect, useState } from 'react'
import {
  Bar,
  Button,
  ContextMenu,
  ContextMenuItem,
  DataView,
  Header,
  IconTrash,
  IconDownload,
  IdentityBadge,
  Layout,
  Main,
  Tabs,
  useTheme,
} from '@aragon/ui'
import { createAddress } from '../create-address'
import { seedShuffleArray, multiplyArray } from '../utils'

const addr = createAddress()

const DEMOS = new Map([
  [
    'Simple',
    props => (
      <DataView
        {...props}
        fields={['Account', 'Amount']}
        entries={[
          [addr(), '-7.900,33 ANT'],
          [addr(), '-8.760,90 ANT'],
          [addr(), '+5.321 ANT'],
          [addr(), '-328,65 ANT'],
          [addr(), '+3.321 ANT'],
          [addr(), '-328,65 ANT'],
        ]}
        renderEntry={([address, amount]) => [
          <IdentityBadge entity={address} />,
          <Amount>{amount}</Amount>,
        ]}
      />
    ),
  ],

  [
    'Actions',
    props => (
      <DataView
        {...props}
        fields={[
          { label: 'Date', priority: 1 },
          { label: 'Account', priority: 4 },
          { label: 'Reference', priority: 2 },
          { label: 'Amount', priority: 3 },
        ]}
        entries={multiplyArray(
          [
            [
              '04/20/19',
              addr(),
              'Fees: Accountant and Law firm',
              '-7.900,33 ANT',
            ],
            [
              '04/18/19',
              addr(),
              'Yearly bonus for 2018 (#BEAS)',
              '-8.760,90 ANT',
            ],
            ['04/16/19', addr(), 'Team salary: April', '+5.321 ANT'],
            [
              '04/12/19',
              addr(),
              'Fees: Accountant and Law firm',
              '-328,65 ANT',
            ],
            ['04/08/19', addr(), 'Team salay: January', '+3.321 ANT'],
            ['03/24/19', addr(), 'Employee vesting', '-328,65 ANT'],
          ],
          10
        )}
        renderEntry={([date, address, reference, amount]) => [
          <div>{date}</div>,
          <div>
            <IdentityBadge entity={address} />
          </div>,
          <div>{reference}</div>,
          <Amount>{amount}</Amount>,
        ]}
        renderEntryActions={entry => (
          <ContextMenu>
            <ContextMenuItem>Open on Etherscan</ContextMenuItem>
          </ContextMenu>
        )}
      />
    ),
  ],

  [
    'Children',
    props => (
      <DataView
        {...props}
        fields={[
          { label: 'Action', priority: 1 },
          { label: 'Assigned to entity', priority: 4 },
          { label: 'Managed by', priority: 2 },
        ]}
        alignChildOnField={1}
        entries={seedShuffleArray(
          multiplyArray(
            [
              ['Modify quorum', [], addr()],
              ['Vote', [addr()], addr()],
              ['Create new votes', [addr(), addr()], addr()],
              ['Change budget', [addr()], addr()],
              ['Create payments', [addr(), addr(), addr()], addr()],
            ],
            10
          )
        ).map(entry => [
          entry[0],
          entry[1].map(() => addr()),
          entry[2] ? addr() : entry[2],
        ])}
        renderEntry={([action, entities, manager], index) => [
          <div>{action}</div>,
          <div
            css={`
              display: flex;
            `}
          >
            {entities.length === 1 ? (
              <IdentityBadge key={entities[0]} entity={entities[0]} />
            ) : entities.length === 0 ? (
              'None'
            ) : (
              `${entities.length} entities`
            )}
          </div>,
          <div>
            <IdentityBadge entity={manager} />
          </div>,
        ]}
        renderEntryActions={() => (
          <ContextMenu>
            <ContextMenuItem>Open on Etherscan</ContextMenuItem>
          </ContextMenu>
        )}
        renderEntryChild={([_, entities]) => {
          if (entities.length < 2) {
            return null
          }
          return entities.map(address => (
            <div
              key={address}
              css={`
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <IdentityBadge entity={address} />
              <DeleteButton />
            </div>
          ))
        }}
      />
    ),
  ],

  [
    'Table',
    props => (
      <DataView
        {...props}
        mode="table"
        fields={['Account', 'Amount']}
        entries={[
          [addr(), '-7.900,33 ANT'],
          [addr(), '-8.760,90 ANT'],
          [addr(), '+5.321 ANT'],
          [addr(), '-328,65 ANT'],
          [addr(), '+3.321 ANT'],
          [addr(), '-328,65 ANT'],
        ]}
        renderEntry={([address, amount]) => [
          <IdentityBadge entity={address} />,
          <Amount>{amount}</Amount>,
        ]}
      />
    ),
  ],

  [
    'List',
    props => (
      <DataView
        {...props}
        mode="list"
        fields={['Account', 'Amount']}
        entries={[
          [addr(), '-7.900,33 ANT'],
          [addr(), '-8.760,90 ANT'],
          [addr(), '+5.321 ANT'],
          [addr(), '-328,65 ANT'],
          [addr(), '+3.321 ANT'],
          [addr(), '-328,65 ANT'],
        ]}
        renderEntry={([address, amount]) => [
          <IdentityBadge entity={address} />,
          <Amount>{amount}</Amount>,
        ]}
      />
    ),
  ],

  [
    'Select',
    props => (
      <DataView
        {...props}
        fields={['Account', 'Amount']}
        entries={multiplyArray(
          [
            [addr(), '-7.900,33 ANT'],
            [addr(), '-8.760,90 ANT'],
            [addr(), '+5.321 ANT'],
            [addr(), '-328,65 ANT'],
            [addr(), '+3.321 ANT'],
            [addr(), '-328,65 ANT'],
          ],
          10
        )}
        renderEntry={([address, amount]) => [
          <IdentityBadge entity={address} />,
          <Amount>{amount}</Amount>,
        ]}
        renderSelectionCount={count =>
          `${count} account${count !== 1 ? 's' : ''} selected`
        }
        onSelectEntries={(entries, indexes) => {
          console.log('Selected entries', entries, indexes)
        }}
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
    ),
  ],
])

function App() {
  const [demo, setDemo] = useState(0)
  const [page, setPage] = useState(0)

  const demoNames = [...DEMOS.keys()]
  const DataViewDemo = DEMOS.get(demoNames[demo])

  useEffect(() => {
    setPage(0)
  }, [demo])

  return (
    <div>
      <Header primary="DataView" />
      <Bar>
        <Tabs items={demoNames} selected={demo} onChange={setDemo} />
      </Bar>
      <DataViewDemo currentPage={page} onPageChange={setPage} />
    </div>
  )
}

function DeleteButton() {
  const theme = useTheme()
  return (
    <Button
      css={`
        width: 46px;
        height: 32px;
        min-width: 0;
        padding: 0;
        color: ${theme.red};
      `}
    >
      <IconTrash />
    </Button>
  )
}

function Amount({ children }) {
  const theme = useTheme()
  return (
    <div
      css={`
        color: ${children.startsWith('+') ? theme.success : 'inherit'};
      `}
    >
      {children}
    </div>
  )
}

export default App
