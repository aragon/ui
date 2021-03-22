import React from 'react'
import {
  ContextMenu,
  ContextMenuItem,
  Button,
  IdentityBadge,
  IconTrash,
  DataView,
  useTheme,
} from '@tecommons/ui'
import { createAddress } from '../../create-address'
import { multiplyArray, seedShuffleArray } from '../../utils'

const addr = createAddress()

function DataViewExpansion(props) {
  const theme = useTheme()
  return (
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
          </div>
        ))
      }}
    />
  )
}

export default DataViewExpansion
