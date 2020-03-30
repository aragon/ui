import React, { useEffect, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { noop, warnOnce } from '../../utils'
import { textStyle, GU } from '../../style'
import { useTheme } from '../../theme'
import Box from '../../components/Box/Box'
import Pagination from '../../components/Pagination/Pagination'
import { useLayout } from '../../components/Layout/Layout'
import { TableView } from './TableView'
import { ListView } from './ListView'
import EmptyState from './EmptyState'

function prepareEntries(entries, from, to, selectedIndexes) {
  return entries.slice(from, to).map((entry, index) => {
    const entryIndex = from + index
    const selected = selectedIndexes.includes(entryIndex)
    return { value: entry || null, index: entryIndex, selected }
  })
}

function prepareFields(fields) {
  return fields.map((fieldFromProps, index, fields) => {
    // Convert non-object fields (e.g. a simple string) into objects
    const field =
      fieldFromProps && fieldFromProps.label
        ? fieldFromProps
        : { label: fieldFromProps }

    // Auto align the last column to the end (right)
    if (!field.align) {
      field.align =
        index === fields.length - 1 && fields.length > 1 ? 'end' : 'start'
    }

    return field
  })
}

function entryExpansion(content) {
  // Rows
  if (Array.isArray(content) && content.length > 0) {
    return {
      content,
      freeLayout: false,
    }
  }
  // Free layout
  if (content && !Array.isArray(content)) {
    return {
      content: [content],
      freeLayout: true,
    }
  }
  // No expansion
  return {
    content: [],
    freeLayout: false,
  }
}

function renderEntries(
  entries,
  { fields, renderEntry, renderEntryActions, renderEntryExpansion, mode }
) {
  return entries.map(entry => {
    const { value, index, selected } = entry

    let entryNodes = renderEntry(value, index, { selected, mode })

    if (!Array.isArray(entryNodes)) {
      entryNodes = []
    }

    // Create undefined cells too
    while (entryNodes.length < fields.length) {
      entryNodes.push(null)
    }

    const expansion = entryExpansion(
      renderEntryExpansion
        ? renderEntryExpansion(value, index, { selected, mode })
        : null
    )

    const actions = renderEntryActions
      ? renderEntryActions(value, index, { selected, mode })
      : null

    return {
      actions,
      entryNodes,
      expansion,
      index,
      selected,
    }
  })
}

function useSelection(entries, selection, onSelectEntries) {
  // Only used if `selection` is not passed via props. The selection supports
  // both a managed and a controlled mode, to provide a better developer
  // experience out of the box.
  const [selectionManaged, setSelectionManaged] = useState([])

  const currentSelection =
    selection === undefined ? selectionManaged : selection

  const updateSelection = useCallback(
    newSelection => {
      // Managed state
      if (selection === undefined) {
        setSelectionManaged(newSelection)
      }

      // Useful to notify, even in managed mode
      onSelectEntries(
        [...newSelection].sort().map(index => entries[index]),
        newSelection
      )
    },
    [selection, onSelectEntries, entries]
  )

  const allSelected = useMemo(() => {
    // none selected
    if (currentSelection.length === 0) {
      return -1
    }
    // all selected
    if (currentSelection.length === entries.length) {
      return 1
    }
    // some selected
    return 0
  }, [entries, currentSelection])

  const toggleEntrySelect = useCallback(
    entryIndex => {
      updateSelection(
        currentSelection.includes(entryIndex)
          ? currentSelection.filter(index => index !== entryIndex)
          : [...currentSelection, entryIndex]
      )
    },
    [updateSelection, currentSelection]
  )

  const selectAll = useCallback(() => {
    updateSelection(
      currentSelection.length === 0 ? entries.map((_, index) => index) : []
    )
  }, [entries, currentSelection, updateSelection])

  return {
    allSelected,
    selectAll,
    toggleEntrySelect,
    selectedIndexes: currentSelection,
  }
}

function deprecatedEmptyStatePropsCompat({
  emptyState,
  statusEmpty,
  statusLoading,
  statusEmptyFilters,
  statusEmptySearch,
}) {
  for (const [propName, propValue, emptyStateName, partName] of [
    ['statusEmpty', statusEmpty, 'default', 'title'],
    ['statusEmptyFilters', statusEmptyFilters, 'empty-filters', 'subtitle'],
    ['statusEmptySearch', statusEmptySearch, 'empty-search', 'subtitle'],
    ['statusLoading', statusLoading, 'loading', 'title'],
  ]) {
    if (!propValue) {
      continue
    }

    warnOnce(
      `DataView:${propName}`,
      `DataView: the ${propName} prop is now deprecated, please use emptyState instead.`
    )

    // Only set the default state title if not set already
    if (!emptyState[emptyStateName] || !emptyState[emptyStateName][partName]) {
      emptyState[emptyStateName] = {
        ...emptyState[emptyStateName],
        [partName]: propValue,
      }
    }
  }

  return emptyState
}

const DataView = React.memo(function DataView({
  emptyState,
  entries,
  entriesPerPage,
  fields,
  heading,
  mode,
  onPageChange,
  onSelectEntries,
  onStatusEmptyClear,
  page,
  renderEntry,
  renderEntryActions,
  renderEntryExpansion,
  renderSelectionCount,
  selection,
  status,
  tableRowHeight,

  // deprecated
  renderEntryChild,
  statusEmpty,
  statusEmptyFilters,
  statusEmptySearch,
  statusLoading,
}) {
  if (renderEntryChild && !renderEntryExpansion) {
    warnOnce(
      'DataView:renderEntryChild',
      'DataView: the renderEntryChild prop has been renamed ' +
        'renderEntryExpansion and will be removed in a future version. ' +
        'Please use the new name.'
    )
    renderEntryExpansion = renderEntryChild
  }

  if (renderEntryExpansion && onSelectEntries) {
    warnOnce(
      'DataView: renderEntryExpansion + onSelectEntries',
      'A DataView cannot be made selectable with some of its entries ' +
        'expandable. Please use only one of renderEntryExpansion or ' +
        'onSelectEntries at a time. Ignoring renderEntryExpansion.'
    )
    renderEntryExpansion = undefined
  }

  emptyState = deprecatedEmptyStatePropsCompat({
    emptyState,
    statusEmpty,
    statusEmptyFilters,
    statusEmptySearch,
    statusLoading,
  })

  // Only used if `page` is not passed. The pagination supports both a
  // managed and a controlled mode, to provide a better developer experience
  // out of the box.
  const [pageManaged, setPageManaged] = useState(0)

  const handlePageChange = useCallback(
    newPage => {
      // Managed state
      if (page === undefined) {
        setPageManaged(newPage)
      }

      // Useful to notify, even in managed mode
      onPageChange(newPage)
    },
    [onPageChange, page]
  )

  // Reset managed pagination if the entries or the pagination changes.
  useEffect(() => {
    setPageManaged(0)
  }, [entries])

  const selectedPage = page === undefined ? pageManaged : page

  const theme = useTheme()
  const { layoutName } = useLayout()

  const listMode =
    mode === 'list' || (mode !== 'table' && layoutName === 'small')

  const {
    allSelected,
    selectAll,
    toggleEntrySelect,
    selectedIndexes,
  } = useSelection(entries, selection, onSelectEntries)

  const hasAnyActions = Boolean(renderEntryActions)
  const hasAnyExpansion = Boolean(renderEntryExpansion)
  const canSelect = Boolean(onSelectEntries)

  // If entriesPerPage is -1 (or 0): no pagination
  if (entriesPerPage < 1) {
    entriesPerPage = entries.length
  }

  const pages = Math.ceil(entries.length / entriesPerPage)

  const displayFrom = entriesPerPage * selectedPage
  const displayTo = displayFrom + entriesPerPage
  const displayedEntries = prepareEntries(
    entries,
    displayFrom,
    displayTo,
    selectedIndexes
  )

  const preparedFields = prepareFields(fields)
  const renderedEntries = renderEntries(displayedEntries, {
    fields,
    renderEntry,
    renderEntryActions,
    renderEntryExpansion,
    mode: listMode ? 'list' : 'table',
  })

  const alignChildOnField = fields.findIndex(field => field && field.childStart)

  const emptyEntries = renderedEntries.length === 0

  return (
    <Box padding={0}>
      {heading && (
        <div
          css={`
            padding: ${2 * GU}px ${layoutName === 'small' ? 2 * GU : 3 * GU}px;
          `}
        >
          {typeof heading === 'string' ? (
            <h1
              css={`
                margin-bottom: ${2 * GU}px;
                ${textStyle('body2')};
              `}
            >
              {heading}
            </h1>
          ) : (
            heading
          )}
        </div>
      )}

      {!emptyEntries &&
        (listMode ? (
          <ListView
            allSelected={allSelected}
            entries={renderedEntries}
            fields={preparedFields}
            hasAnyExpansion={hasAnyExpansion}
            onSelect={toggleEntrySelect}
            onSelectAll={selectAll}
            renderSelectionCount={renderSelectionCount}
            rowHeight={tableRowHeight}
            selectable={canSelect}
          />
        ) : (
          <TableView
            alignChildOnField={Math.min(
              Math.max(-1, alignChildOnField),
              fields.length - 1
            )}
            allSelected={allSelected}
            entries={renderedEntries}
            fields={preparedFields}
            hasAnyActions={hasAnyActions}
            hasAnyExpansion={hasAnyExpansion}
            onSelect={toggleEntrySelect}
            onSelectAll={selectAll}
            renderSelectionCount={renderSelectionCount}
            rowHeight={tableRowHeight}
            selectable={canSelect}
            selectedCount={selectedIndexes.length}
          />
        ))}

      {emptyEntries && (
        <EmptyState
          status={status}
          configurator={emptyState}
          onStatusEmptyClear={onStatusEmptyClear}
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
            selected={selectedPage}
            onChange={handlePageChange}
            touchMode={layoutName === 'small'}
          />
        </div>
      )}
    </Box>
  )
})

DataView.propTypes = {
  page: PropTypes.number,
  entries: PropTypes.array.isRequired,
  entriesPerPage: PropTypes.number,
  fields: PropTypes.array.isRequired,
  heading: PropTypes.node,
  mode: PropTypes.oneOf(['adaptive', 'table', 'list']),
  onPageChange: PropTypes.func,
  onSelectEntries: PropTypes.func,
  renderEntry: PropTypes.func.isRequired,
  renderEntryActions: PropTypes.func,
  renderEntryExpansion: PropTypes.func,
  renderSelectionCount: PropTypes.func,
  selection: PropTypes.array,
  tableRowHeight: PropTypes.number,
  status: PropTypes.oneOf([
    'default',
    'empty-filters',
    'empty-search',
    'loading',
  ]),
  onStatusEmptyClear: PropTypes.func,
  emptyState: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  // deprecated
  renderEntryChild: PropTypes.func,
  statusEmpty: PropTypes.node,
  statusLoading: PropTypes.node,
  statusEmptyFilters: PropTypes.node,
  statusEmptySearch: PropTypes.node,
}

DataView.defaultProps = {
  emptyState: {},
  entriesPerPage: 10,
  mode: 'adaptive',
  onPageChange: noop,
  renderSelectionCount: count => `${count} items selected`,
  status: 'default',
  tableRowHeight: 8 * GU,
}

export default DataView
