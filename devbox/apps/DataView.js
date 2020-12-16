import React, { useMemo, useCallback, useEffect, useState } from 'react'
import {
  Bar,
  Button,
  ButtonBase,
  ContextMenu,
  ContextMenuItem,
  DataView,
  DropDown,
  GU,
  Header,
  IconDown,
  IconDownload,
  IconTrash,
  IconUp,
  IdentityBadge,
  useTheme,
  noop,
} from '@tecommons/ui'
import { createAddress } from '../create-address'
import { createRandomInt, multiplyArray, seedShuffleArray } from '../utils'

const DEMO_DEFAULT = 0

const addr = createAddress()
const randomInt = createRandomInt()

const SORTING_ENTRIES = [
  { name: 'Strawberry', account: addr() },
  { name: 'Banana', account: addr() },
  { name: 'Apple', account: addr() },
  { name: 'Cherry', account: addr() },
  { name: 'Strawberry', account: addr() },
  { name: 'Banana', account: addr() },
  { name: 'Apple', account: addr() },
  { name: 'Cherry', account: addr() },
]

function SortHeader({ onClick, label, sortBy = 0, rightAligned = false }) {
  return (
    <ButtonBase
      onClick={onClick}
      css={`
        display: inline-flex;
        align-items: center;
        flex-direction: ${rightAligned ? 'row-reverse' : 'row'};
      `}
    >
      <span css="margin-top: 2px">{label}</span>

      <span css="width: 5px" />

      {sortBy === 1 && <IconDown size="tiny" />}
      {sortBy === -1 && <IconUp size="tiny" />}
    </ButtonBase>
  )
}

function SortingDemo(props) {
  const [sortBy, setSortBy] = useState(['name', 0])

  const rotateSortBy = useCallback(name => {
    setSortBy(sortBy => [
      name,
      sortBy[0] === name ? ((sortBy[1] + 2) % 3) - 1 : 1,
    ])
  }, [])

  const rotateSortByName = useCallback(() => {
    rotateSortBy('name')
  }, [rotateSortBy])

  const rotateSortByAccount = useCallback(() => {
    rotateSortBy('account')
  }, [rotateSortBy])

  const sortedEntries = useMemo(
    () =>
      [...SORTING_ENTRIES].sort((a, b) => {
        if (sortBy[1] === 0) {
          return 0
        }
        if (sortBy[0] === 'name' && a.name !== b.name) {
          return a.name < b.name ? sortBy[1] * -1 : sortBy[1]
        }
        if (sortBy[0] === 'account' && a.account !== b.account) {
          return a.account < b.account ? sortBy[1] * -1 : sortBy[1]
        }
        return 0
      }),
    [sortBy]
  )

  return (
    <DataView
      {...props}
      fields={[
        <SortHeader
          label="Name"
          onClick={rotateSortByName}
          sortBy={sortBy[0] === 'name' ? sortBy[1] : 'none'}
        />,
        <SortHeader
          label="Account"
          onClick={rotateSortByAccount}
          sortBy={sortBy[0] === 'account' ? sortBy[1] : 'none'}
          rightAligned={true}
        />,
      ]}
      entries={sortedEntries}
      renderEntry={({ name, account }) => [
        name,
        <IdentityBadge entity={account} />,
      ]}
    />
  )
}

const DEMOS = new Map([
  ['Default empty state', props => <DataView {...props} />],
  ['Loading empty state', props => <DataView {...props} status="loading" />],
  [
    'Filters empty state',
    props => <DataView {...props} status="empty-filters" />,
  ],
  [
    'Search empty state',
    props => <DataView {...props} status="empty-search" />,
  ],
  [
    'Custom empty state',
    props => (
      <DataView
        {...props}
        status="default"
        emptyState={{
          default: {
            displayLoader: true,
            title: 'Custom title',
            subtitle: 'Custom subtitle.',
            clearLabel: 'Custom clear',
          },
        }}
      />
    ),
  ],
  ['Sorting', SortingDemo],
  [
    'One column',
    props => (
      <DataView
        {...props}
        fields={['Account']}
        entries={[
          { account: addr() },
          { account: addr() },
          { account: addr() },
          { account: addr() },
          { account: addr() },
          { account: addr() },
        ]}
        renderEntry={({ account, amount }) => {
          return [<IdentityBadge entity={account} />]
        }}
      />
    ),
  ],
  [
    'Simple',
    props => (
      <DataView
        {...props}
        fields={['Account', 'Amount']}
        entries={[
          { account: addr(), amount: '-7.900,33 ANT' },
          { account: addr(), amount: '-8.760,90 ANT' },
          { account: addr(), amount: '+5.321 ANT' },
          { account: addr(), amount: '-328,65 ANT' },
          { account: addr(), amount: '+3.321 ANT' },
          { account: addr(), amount: '-328,65 ANT' },
        ]}
        renderEntry={({ account, amount }) => {
          return [<IdentityBadge entity={account} />, <Amount>{amount}</Amount>]
        }}
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
    'Expansion',
    props => (
      <DataView
        {...props}
        fields={[
          { label: 'Action', priority: 1 },
          { label: 'Assigned to entity', priority: 4, childStart: true },
          { label: 'Managed by', priority: 2 },
        ]}
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
        renderEntryExpansion={([_, entities]) => {
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
    'Expansion (free layout)',
    props => (
      <DataView
        {...props}
        fields={[
          { label: 'Action', priority: 1 },
          { label: 'Assigned to entity', priority: 4 },
          { label: 'Managed by', priority: 2 },
        ]}
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
          randomInt(100, 400),
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
        renderEntryExpansion={([action, entities, manager, height]) => (
          <div
            css={`
              height: ${height}px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            variable height ({height}px)
          </div>
        )}
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
    props => {
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
            <Amount>{amount}</Amount>,
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
    },
  ],
])

function App() {
  const [demo, setDemo] = useState(DEMO_DEFAULT)
  const [page, setPage] = useState(0)

  const demoNames = [...DEMOS.keys()]
  const DataViewDemo = DEMOS.get(demoNames[demo])

  useEffect(() => {
    setPage(0)
  }, [demo])

  return (
    <div>
      <Header primary="DataView" />
      <Bar
        primary={
          <label>
            <span
              css={`
                margin-right: ${1 * GU}px;
              `}
            >
              Current demo:
            </span>
            <DropDown items={demoNames} selected={demo} onChange={setDemo} />
          </label>
        }
      />
      <DataViewDemo
        entries={[]}
        fields={[]}
        onPageChange={setPage}
        page={page}
        renderEntry={noop}
      />
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
