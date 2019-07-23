import React, { useEffect, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { noop } from '../../utils'
import { useTheme } from '../../theme'
import { Box } from '../../components/Box/Box'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLayout } from '../../components/Layout/Layout'
import { TableView } from './TableView'
import { ListView } from './ListView'

function prepareEntries(entries, from, to, selectedIndexes) {
  return entries.slice(from, to).map((entry, index) => {
    const entryIndex = from + index
    const selected = selectedIndexes.includes(entryIndex)
    return { value: entry || null, index: entryIndex, selected }
  })
}

function renderFields(fields) {
  return fields.map((fieldFromProps, index, fields) => {
    // Convert non-object fields (e.g. a simple string) into objects
    const field =
      fieldFromProps && fieldFromProps.label
        ? fieldFromProps
        : { label: fieldFromProps }

    // Auto align the last column to the end (right)
    if (!field.align) {
      field.align = index === fields.length - 1 ? 'end' : 'start'
    }

    return field
  })
}

function entryChildrenFromChild(child) {
  if (!child) {
    return []
  }
  return Array.isArray(child) ? child : [child]
}

function renderEntries(
  entries,
  { fields, renderEntry, renderEntryActions, renderEntryChild }
) {
  return entries.map(entry => {
    const { value, index, selected } = entry

    let entryNodes = renderEntry(value, index, { selected })

    if (!Array.isArray(entryNodes)) {
      entryNodes = []
    }

    // Create undefined cells too
    while (entryNodes.length < fields.length) {
      entryNodes.push(null)
    }

    return {
      index,
      entryNodes,
      actions: renderEntryActions
        ? renderEntryActions(value, index, { selected })
        : null,
      children: entryChildrenFromChild(
        renderEntryChild ? renderEntryChild(value, index, { selected }) : null
      ),
      selected,
    }
  })
}

function useSelection(entries, onSelectEntries) {
  const [selectedIndexes, setSelectedIndexes] = useState([])

  const allSelected = useMemo(() => {
    // none selected
    if (selectedIndexes.length === 0) {
      return -1
    }
    // all selected
    if (selectedIndexes.length === entries.length) {
      return 1
    }
    // some selected
    return 0
  }, [entries, selectedIndexes])

  const toggleEntry = useCallback(entryIndex => {
    setSelectedIndexes(selectedIndexes => {
      const checked = selectedIndexes.includes(entryIndex)
      if (!checked) {
        return [...selectedIndexes, entryIndex]
      }
      return selectedIndexes.filter(index => index !== entryIndex)
    })
  }, [])

  const selectAll = useCallback(() => {
    setSelectedIndexes(
      selectedIndexes.length === 0 ? entries.map((_, index) => index) : []
    )
  }, [entries, selectedIndexes])

  useEffect(() => {
    if (onSelectEntries) {
      onSelectEntries(
        entries.filter((entry, index) => selectedIndexes.includes(index)),
        selectedIndexes
      )
    }
  }, [onSelectEntries, selectedIndexes])

  return {
    allSelected,
    selectAll,
    toggleEntry,
    selectedIndexes,
  }
}

const DataView = React.memo(function DataView({
  alignChildOnField,
  currentPage,
  entries,
  entriesPerPage,
  fields,
  heading,
  onPageChange,
  onSelectEntries,
  renderEntry,
  renderEntryActions,
  renderEntryChild,
  renderSelectionCount,
  mode,
  tableRowHeight,
}) {
  if (renderEntryChild && onSelectEntries) {
    throw new Error(
      'A DataView cannot be made selectable if it has entry children. ' +
        'Please use either renderEntryChild or onSelectEntries.'
    )
  }

  const theme = useTheme()
  const { name: layoutName } = useLayout()
  const { allSelected, selectAll, toggleEntry, selectedIndexes } = useSelection(
    entries,
    onSelectEntries
  )

  const hasAnyActions = Boolean(renderEntryActions)
  const hasAnyChild = Boolean(renderEntryChild)
  const canSelect = Boolean(onSelectEntries)

  const pages = Math.ceil(entries.length / entriesPerPage)

  const displayFrom = entriesPerPage * currentPage
  const displayTo = displayFrom + entriesPerPage
  const displayedEntries = prepareEntries(
    entries,
    displayFrom,
    displayTo,
    selectedIndexes
  )

  const renderedFields = renderFields(fields)
  const renderedEntries = renderEntries(displayedEntries, {
    fields,
    renderEntry,
    renderEntryActions,
    renderEntryChild,
  })

  const listMode =
    mode === 'list' || (mode !== 'table' && layoutName === 'small')

  return (
    <Box padding={false} css="overflow: hidden">
      {heading && (
        <div
          css={`
            padding: ${1.5 * GU}px ${3 * GU}px;
          `}
        >
          {typeof heading === 'string' ? (
            <h1
              css={`
                font-size: 16px;
                font-weight: 400;
                margin-bottom: ${2 * GU}px;
              `}
            >
              {heading}
            </h1>
          ) : (
            heading
          )}
        </div>
      )}

      {listMode ? (
        <ListView
          allSelected={allSelected}
          entries={renderedEntries}
          fields={renderedFields}
          hasAnyChild={hasAnyChild}
          onSelect={toggleEntry}
          onSelectAll={selectAll}
          selectable={canSelect}
          selectedCount={selectedIndexes.length}
        />
      ) : (
        <TableView
          alignChildOnField={Math.min(
            Math.max(-1, alignChildOnField),
            fields.length - 1
          )}
          entries={renderedEntries}
          fields={renderedFields}
          hasAnyActions={hasAnyActions}
          hasAnyChild={hasAnyChild}
          onSelect={toggleEntry}
          onSelectAll={selectAll}
          rowHeight={tableRowHeight}
          selectable={canSelect}
          allSelected={allSelected}
          selectedCount={selectedIndexes.length}
          renderSelectionCount={renderSelectionCount}
        />
      )}

      {pages > 1 && (
        <div
          css={`
            border-top: 1px solid ${theme.border};
          `}
        >
          <Pagination
            pages={pages}
            selected={currentPage}
            onChange={onPageChange}
            touchMode={layoutName === 'small'}
          />
        </div>
      )}
    </Box>
  )
})

DataView.propTypes = {
  alignChildOnField: PropTypes.number,
  currentPage: PropTypes.number,
  entries: PropTypes.array.isRequired,
  entriesPerPage: PropTypes.number,
  fields: PropTypes.array,
  heading: PropTypes.node,
  mode: PropTypes.oneOf(['adaptive', 'table', 'list']),
  onPageChange: PropTypes.func,
  onSelectEntries: PropTypes.func,
  renderEntry: PropTypes.func.isRequired,
  renderEntryActions: PropTypes.func,
  renderEntryChild: PropTypes.func,
  renderSelectionCount: PropTypes.func,
  tableRowHeight: PropTypes.number,
}

DataView.defaultProps = {
  alignChildOnField: -1,
  currentPage: 0,
  entriesPerPage: 10,
  mode: 'adaptive',
  onPageChange: noop,
  renderSelectionCount: count => `${count} items selected`,
  tableRowHeight: 8 * GU,
}

export { DataView }
