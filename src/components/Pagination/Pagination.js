import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { noop } from '../../utils'
import { PaginationItem } from './PaginationItem'
import { PaginationSeparator } from './PaginationSeparator'

function paginationItems(pages, selected) {
  const all = [...Array(pages)].map((_, i) => i)

  if (all.length < 6) {
    return all
  }

  const first = 0
  const last = all.length - 1
  const prev = Math.min(all.length, Math.max(0, selected - 1))
  const next = Math.min(all.length, Math.max(0, selected + 1))

  const items = []

  // Selected item + previous + next
  items.push(...all.slice(prev, next + 1))

  // Display three items, even if the first / last one is selected
  if (selected === last) {
    items.unshift(last - 2)
  }
  if (selected === first) {
    items.push(first + 2)
  }

  // Ellipsises
  if (prev > first + 1) {
    items.unshift(-1)
  }
  if (next < last - 1) {
    items.push(-1)
  }

  // Always display the first & last items
  if (prev >= first + 1) {
    items.unshift(all[0])
  }
  if (next <= last - 1) {
    items.push(all[all.length - 1])
  }

  return items
}

const Pagination = React.memo(function Pagination({
  pages,
  selected,
  onChange,
  touchMode,
  ...props
}) {
  const items = paginationItems(pages, selected)
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${2 * GU}px 0;
        & > div + div {
          margin-left: ${1 * GU}px;
        }
      `}
      {...props}
    >
      {items.map((pageIndex, i) =>
        pageIndex === -1 ? (
          <PaginationSeparator key={`separator-${i}`} />
        ) : (
          <PaginationItem
            key={pageIndex}
            index={pageIndex}
            selected={selected === pageIndex}
            onChange={onChange}
            touchMode={touchMode}
          />
        )
      )}
    </div>
  )
})

Pagination.propTypes = {
  onChange: PropTypes.func,
  pages: PropTypes.number,
  selected: PropTypes.number,
  touchMode: PropTypes.bool,
}

Pagination.defaultProps = {
  onChange: noop,
  pages: 0,
  selected: 0,
  touchMode: false,
}

export default Pagination
