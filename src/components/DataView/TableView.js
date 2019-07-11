import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { ToggleButton } from './ToggleButton'
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder'

// Table head row
function cellsFromFields(fields, { hasAnyChild, hasAnyActions }) {
  const cells = fields.map((field, index) => [
    field.label,
    field.align === 'end' ? 'right' : 'left',
  ])

  if (hasAnyChild) {
    cells.unshift([null, 'left'])
  }

  if (hasAnyActions) {
    if (cells[cells.length - 1]) {
      cells[cells.length - 1][1] = 'left'
    }
    cells.push([null, 'left'])
  }

  return cells
}

// Table content row
function rowFromEntry(
  entry,
  { fields, hasAnyActions, hasAnyChild, opened, toggleChildContent }
) {
  const hasChildren = entry.children.length > 0

  const cells = entry.values.map((content, index) => [
    content,
    fields[index].align,
    false,
  ])

  if (hasAnyChild) {
    cells.unshift([hasChildren && toggleChildContent, 'start', true])
  }

  if (hasAnyActions) {
    if (cells[cells.length - 1]) {
      cells[cells.length - 1][1] = 'start'
    }
    cells.push([entry.actions, 'end', true])
  }

  return {
    cells,
    entry,
    hasChildren,
    opened,
  }
}

function TableView({
  alignChildOnField,
  rowHeight,
  hasAnyActions,
  hasAnyChild,
  fields,
  entries,
}) {
  const [opened, setOpened] = useState(-1)

  const toggleEntry = useCallback(index => {
    setOpened(opened => (opened === index ? -1 : index))
  }, [])

  const headCells = useMemo(
    () => cellsFromFields(fields, { hasAnyChild, hasAnyActions }),
    [fields, hasAnyChild, hasAnyActions]
  )

  useEffect(() => {
    setOpened(false)
  }, [entries, fields])

  const entryRows = useMemo(
    () =>
      entries.map(entry => {
        const rowOpened = opened === entry.index
        return rowFromEntry(entry, {
          fields,
          hasAnyActions,
          hasAnyChild,
          opened: rowOpened,
          toggleChildContent: (
            <ToggleCell
              index={entry.index}
              opened={rowOpened}
              onToggle={toggleEntry}
            />
          ),
        })
      }),
    [opened, entries, hasAnyChild, hasAnyActions, toggleEntry]
  )

  return (
    <table
      css={`
        width: 100%;
        border-spacing: 0;
        border-collapse: separate;
      `}
    >
      <thead>
        <HeadRow cells={headCells} />
      </thead>
      <tbody>
        {entryRows.map(({ cells, entry, hasChildren, opened }, index) => (
          <React.Fragment key={index}>
            <EntryRow cells={cells} rowHeight={rowHeight} />
            {hasChildren && (
              <EntryChildren
                alignChildonCell={alignChildOnField + 1}
                cellsCount={cells.length}
                entry={entry}
                opened={opened}
                rowHeight={rowHeight}
              />
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

TableView.propTypes = {
  alignChildOnField: PropTypes.number.isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyActions: PropTypes.bool.isRequired,
  hasAnyChild: PropTypes.bool.isRequired,
  rowHeight: PropTypes.number.isRequired,
}

// Disable prop types check for internal components
/* eslint-disable react/prop-types */
function HeadRow({ cells }) {
  const theme = useTheme()
  return (
    <tr>
      {cells.map((cell, index) => (
        <th
          key={index}
          css={`
            height: ${4 * GU}px;
            padding: 0;
            padding-left: ${index === 0 ? 3 * GU : 0}px;
            padding-right: ${index === cells.length - 1 ? 3 * GU : 0}px;
            text-align: ${cell[1]};
            ${textStyle('label2')};
            color: ${theme.surfaceContentSecondary};
          `}
        >
          {cell[0]}
        </th>
      ))}
    </tr>
  )
}

function EntryRow({ cells, rowHeight }) {
  const theme = useTheme()
  return (
    <tr>
      {cells.map(([content, align, compact], index, cells) => {
        const first = index === 0
        const last = index === cells.length - 1
        return (
          <td
            key={index}
            css={`
              position: relative;
              width: ${compact ? 0 : 'auto'};
              height: ${rowHeight}px;
              padding-top: 0;
              padding-bottom: 0;
              padding-left: ${first || compact ? 3 * GU : 0}px;
              padding-right: ${last || compact ? 3 * GU : 0}px;
              border-top: 1px solid ${theme.border};
            `}
          >
            <div
              css={`
                display: flex;
                justify-content: ${`flex-${align}`};
              `}
            >
              <div css="display: flex">{content}</div>
            </div>
          </td>
        )
      })}
    </tr>
  )
}

function EntryChildren({
  alignChildonCell,
  cellsCount,
  entry,
  opened,
  rowHeight,
}) {
  const theme = useTheme()
  return (
    <Transition
      native
      items={opened}
      from={{ totalHeight: 0 }}
      enter={{ totalHeight: rowHeight * entry.children.length }}
      leave={{ totalHeight: 0 }}
      config={{ ...springs.smooth, precision: 0.1 }}
    >
      {show =>
        show &&
        (({ totalHeight }) => (
          <tr
            css={`
              td {
                position: relative;
                padding: 0;
                box-shadow: inset 0 6px 4px -4px rgba(0, 0, 0, 0.16);
                background: ${theme.surfaceUnder};
              }
            `}
          >
            {alignChildonCell > 0 && (
              <td colSpan={alignChildonCell}>
                <OpenedSurfaceBorder opened={opened} />
                <animated.div
                  css={`
                    overflow: hidden;
                    will-change: height;
                  `}
                  style={{
                    height: totalHeight.interpolate(v => `${v}px`),
                  }}
                >
                  {entry.children.map((child, i) => (
                    <div
                      key={i}
                      css={`
                        height: ${rowHeight}px;
                        border-top: 1px solid ${theme.border};
                      `}
                    />
                  ))}
                </animated.div>
              </td>
            )}
            <td
              colSpan={
                alignChildonCell === -1
                  ? cellsCount
                  : cellsCount - alignChildonCell
              }
            >
              <animated.div
                css={`
                  overflow: hidden;
                  will-change: height;
                `}
                style={{
                  height: totalHeight.interpolate(v => `${v}px`),
                }}
              >
                {entry.children.map((child, i) => (
                  <div
                    key={i}
                    css={`
                      display: flex;
                      align-items: center;
                      height: ${rowHeight}px;
                      padding-left: ${alignChildonCell < 1 ? 3 * GU : 0}px;
                      padding-right: ${3 * GU}px;
                      border-top: 1px solid ${theme.border};
                    `}
                  >
                    {child}
                  </div>
                ))}
              </animated.div>
            </td>
          </tr>
        ))
      }
    </Transition>
  )
}

function ToggleCell({ index, opened, onToggle }) {
  const toggle = useCallback(() => {
    onToggle(index)
  }, [index, onToggle])

  return (
    <div
      css={`
        width: 100%;
        height: 100%;
      `}
    >
      <OpenedSurfaceBorder opened={opened} />
      <ToggleButton opened={opened} onClick={toggle} />
    </div>
  )
}
/* eslint-enable react/prop-types */

export { TableView }
