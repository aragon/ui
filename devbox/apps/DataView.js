import React, { useEffect, useState } from 'react'
import {
  Bar,
  Button,
  ContextMenu,
  ContextMenuItem,
  DataView,
  Header,
  IconTrash,
  IdentityBadge,
  Layout,
  Main,
  TabBar,
  useTheme,
} from '@aragon/ui'
import { createAddress } from '../create-address'
import { seedShuffleArray, multiplyArray } from '../utils'

const addr = createAddress()

const DEMOS = [
  {
    demoName: 'Simple',

    fields: ['Account', 'Amount'],
    entries: [
      [addr(), '-7.900,33 ANT'],
      [addr(), '-8.760,90 ANT'],
      [addr(), '+5.321 ANT'],
      [addr(), '-328,65 ANT'],
      [addr(), '+3.321 ANT'],
      [addr(), '-328,65 ANT'],
    ],
    renderEntry([address, amount]) {
      return [<IdentityBadge entity={address} />, <Amount>{amount}</Amount>]
    },
  },

  {
    demoName: 'Actions',

    fields: [
      { label: 'Date', priority: 1 },
      { label: 'Account', priority: 4 },
      { label: 'Reference', priority: 2 },
      { label: 'Amount', priority: 3 },
    ],

    entries: multiplyArray(
      [
        ['04/20/19', addr(), 'Fees: Accountant and Law firm', '-7.900,33 ANT'],
        ['04/18/19', addr(), 'Yearly bonus for 2018 (#BEAS)', '-8.760,90 ANT'],
        ['04/16/19', addr(), 'Team salary: April', '+5.321 ANT'],
        ['04/12/19', addr(), 'Fees: Accountant and Law firm', '-328,65 ANT'],
        ['04/08/19', addr(), 'Team salay: January', '+3.321 ANT'],
        ['03/24/19', addr(), 'Employee vesting', '-328,65 ANT'],
      ],
      10
    ),

    renderEntry([date, address, reference, amount]) {
      return [
        <div>{date}</div>,
        <div>
          <IdentityBadge entity={address} />
        </div>,
        <div>{reference}</div>,
        <Amount>{amount}</Amount>,
      ]
    },

    renderEntryActions(entry) {
      return (
        <ContextMenu>
          <ContextMenuItem>Open on Etherscan</ContextMenuItem>
        </ContextMenu>
      )
    },
  },

  {
    demoName: 'Child content',

    fields: [
      { label: 'Action', priority: 1 },
      { label: 'Assigned to entity', priority: 4 },
      { label: 'Managed by', priority: 2 },
    ],

    alignChildOnField: 1,

    entries: seedShuffleArray(
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
    ]),

    renderEntry([action, entities, manager], index) {
      return [
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
      ]
    },

    renderEntryActions() {
      return (
        <ContextMenu>
          <ContextMenuItem>Open on Etherscan</ContextMenuItem>
        </ContextMenu>
      )
    },

    renderEntryChild([_, entities]) {
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
    },
  },
  {
    demoName: 'Selection',

    fields: ['Account', 'Amount'],
    entries: [
      [addr(), '-7.900,33 ANT'],
      [addr(), '-8.760,90 ANT'],
      [addr(), '+5.321 ANT'],
      [addr(), '-328,65 ANT'],
      [addr(), '+3.321 ANT'],
      [addr(), '-328,65 ANT'],
    ],
    renderEntry([address, amount]) {
      return [<IdentityBadge entity={address} />, <Amount>{amount}</Amount>]
    },
  },
]

function App() {
  const [demo, setDemo] = useState(2)
  const [page, setPage] = useState(0)

  const demoNames = DEMOS.map(({ demoName }) => demoName)
  const { fields, entries, renderEntry, renderEntryActions } = DEMOS[demo]
  const { demoName, ...dataViewProps } = DEMOS[demo]

  useEffect(() => {
    setPage(0)
  }, [demo])

  return (
    <div>
      <Header primary="DataView" />
      <Bar>
        <TabBar items={demoNames} selected={demo} onChange={setDemo} />
      </Bar>
      <DataView currentPage={page} onPageChange={setPage} {...dataViewProps} />
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
