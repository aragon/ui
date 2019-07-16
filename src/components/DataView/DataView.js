import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { noop } from '../../utils'
import { useTheme } from '../../theme'
import { Box } from '../../components/Box/Box'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLayout } from '../../components/Layout/Layout'
import { TableView } from './TableView'
import { ListView } from './ListView'

function prepareEntries(entries, from, to) {
  return entries.slice(from, to).map((entry, index) => {
    const entryIndex = from + index

    if (Array.isArray(entry)) {
      return { values: entry, index: entryIndex }
    }

    if (entry && Array.isArray(entry.values)) {
      return { ...entry, values: entry.values, index: entryIndex }
    }

    return { values: [], index: entryIndex }
  })
}

function renderFields(fields) {
  const renderedFields = fields.map((fieldFromProps, index, fields) => {
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

  return renderedFields
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
    const { values, index, ...extraData } = entry

    let renderedValues = renderEntry(values, index, extraData)

    if (!Array.isArray(renderedValues)) {
      renderedValues = []
    }

    while (renderedValues.length < fields.length) {
      renderedValues.push(null)
    }

    return {
      index,
      values: renderedValues,
      actions: renderEntryActions
        ? renderEntryActions(values, index, extraData)
        : null,
      children: entryChildrenFromChild(
        renderEntryChild ? renderEntryChild(values, index, extraData) : null
      ),
    }
  })
}

const DataView = React.memo(function DataView({
  alignChildOnField,
  currentPage,
  entries,
  entriesPerPage,
  fields,
  heading,
  onPageChange,
  renderEntry,
  renderEntryActions,
  renderEntryChild,
  tableRowHeight,
}) {
  const theme = useTheme()
  const { name: layoutName } = useLayout()

  const hasAnyActions = Boolean(renderEntryActions)
  const hasAnyChild = Boolean(renderEntryChild)

  const pages = Math.ceil(entries.length / entriesPerPage)

  const displayFrom = entriesPerPage * currentPage
  const displayTo = displayFrom + entriesPerPage
  const displayedEntries = prepareEntries(entries, displayFrom, displayTo)

  const renderedFields = renderFields(fields)
  const renderedEntries = renderEntries(displayedEntries, {
    fields,
    renderEntry,
    renderEntryActions,
    renderEntryChild,
  })

  return (
    <Box padding={false}>
      {heading && (
        <h1
          css={`
            font-size: 16px;
            font-weight: 400;
            margin-bottom: ${2 * GU}px;
          `}
        >
          {heading}
        </h1>
      )}

      {layoutName === 'small' ? (
        <ListView
          entries={renderedEntries}
          fields={renderedFields}
          hasAnyChild={hasAnyChild}
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
          rowHeight={tableRowHeight}
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
  onPageChange: PropTypes.func,
  renderEntry: PropTypes.func.isRequired,
  renderEntryActions: PropTypes.func,
  renderEntryChild: PropTypes.func,
  tableRowHeight: PropTypes.number,
}

DataView.defaultProps = {
  alignChildOnField: -1,
  currentPage: 0,
  entriesPerPage: 10,
  tableRowHeight: 8 * GU,
  onPageChange: noop,
}

export { DataView }
