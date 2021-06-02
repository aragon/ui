import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import Checkbox from '../Input/Checkbox'
import { ToggleButton } from './ToggleButton'
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder'

function ListView({
  allSelected,
  entries,
  fields,
  hasAnyExpansion,
  onSelect,
  onSelectAll,
  renderSelectionCount,
  selectable,
  rowHeight,
}) {
  const theme = useTheme()

  const [opened, setOpened] = useState(-1)

  const toggleEntry = useCallback(index => {
    setOpened(opened => (opened === index ? -1 : index))
  }, [])

  const sideSpace = selectable || hasAnyExpansion

  return (
    <React.Fragment>
      {entries.map((entry, index) => {
        const hasExpansion = entry.expansion.content.length > 0
        return (
          <div
            key={index}
            css={`
              position: relative;
              padding: 0;
              padding-right: ${3 * GU}px;
              padding-left: ${(sideSpace ? 6.5 : 3) * GU}px;
              border-bottom: ${Number(index !== entries.length - 1)}px solid
                ${theme.border};
              transition: background 150ms ease-in-out;
              background: ${entry.selected ? theme.surfaceSelected : 'none'};
            `}
          >
            <OpenedSurfaceBorder opened={entry.index === opened} />
            {sideSpace && (
              <div
                css={`
                  position: absolute;
                  top: ${1.5 * GU}px;
                  left: 0;
                  display: flex;
                  justify-content: center;
                  width: ${6.5 * GU}px;
                `}
              >
                {selectable && (
                  <Select
                    index={entry.index}
                    selected={entry.selected}
                    onSelect={onSelect}
                  />
                )}
                {!selectable && hasExpansion && (
                  <ToggleButton
                    opened={entry.index === opened}
                    onClick={() => toggleEntry(entry.index)}
                  />
                )}
              </div>
            )}
            {entry.actions && (
              <div
                css={`
                  position: absolute;
                  top: ${2 * GU}px;
                  right: ${3 * GU}px;
                `}
              >
                {entry.actions}
              </div>
            )}
            <div>
              {entry.entryNodes
                .map((content, index) => [
                  // field content
                  content,
                  // field label
                  fields[index].label,
                  // priority number
                  (fields[index].priority && fields[index].priority) || 0,
                ])
                // sort by priority
                .sort((a, b) => b[2] - a[2])
                .map(([content, label], index, entryNodes) => (
                  <div
                    key={index}
                    css={`
                      display: flex;
                      flex-direction: column;
                      padding-bottom: ${index === entryNodes.length - 1
                        ? 2 * GU
                        : 0}px;
                    `}
                  >
                    <div
                      css={`
                        display: flex;
                        align-items: center;
                        margin: ${2 * GU}px 0 ${1 * GU}px;
                        color: ${theme.surfaceContentSecondary};
                        ${textStyle('label2')};
                      `}
                    >
                      {label}
                    </div>

                    <div>{content}</div>
                  </div>
                ))}
            </div>
            {hasExpansion && (
              <EntryExpansion
                expansion={entry.expansion}
                opened={opened === entry.index}
                rowHeight={rowHeight}
              />
            )}
          </div>
        )
      })}
    </React.Fragment>
  )
}

ListView.propTypes = {
  allSelected: PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyExpansion: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  renderSelectionCount: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  selectable: PropTypes.bool.isRequired,
}

// Disable prop types check for internal components
/* eslint-disable react/prop-types */

function EntryExpansion({ expansion, opened, rowHeight }) {
  const theme = useTheme()

  // Handles the height of the expansion in free layout mode
  const [freeLayoutContentHeight, setFreeLayoutContentHeight] = useState(0)

  const handleFreeLayoutContentRef = element => {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height)
    }
  }

  const height = expansion.freeLayout
    ? freeLayoutContentHeight
    : rowHeight * expansion.content.length

  return (
    <Transition
      native
      items={opened}
      from={{ height: 0 }}
      enter={{ height }}
      update={{ height }}
      leave={{ height: 0 }}
      config={{ ...springs.smooth, precision: 0.1 }}
    >
      {show =>
        show &&
        (({ height }) => (
          <animated.div
            css={`
              overflow: hidden;
              background: ${theme.surfaceUnder};
              margin-left: ${-6.5 * GU}px;
              margin-right: ${-3 * GU}px;
              padding-left: ${6.5 * GU}px;
              box-shadow: inset 0 6px 4px -4px rgba(0, 0, 0, 0.16);
            `}
            style={{
              height: height.interpolate(v => `${v}px`),
            }}
          >
            {expansion.content.map((child, i) => (
              <div
                key={i}
                ref={expansion.freeLayout ? handleFreeLayoutContentRef : null}
                css={`
                  display: flex;
                  align-items: center;
                  height: ${expansion.freeLayout ? 'auto' : `${rowHeight}px`};
                  padding-right: ${3 * GU}px;
                `}
              >
                {child}
              </div>
            ))}
          </animated.div>
        ))
      }
    </Transition>
  )
}

function Select({ index, selected, onSelect }) {
  const change = useCallback(
    check => {
      onSelect(index, check)
    },
    [index, onSelect]
  )

  return <Checkbox onChange={change} checked={selected} />
}

/* eslint-enable react/prop-types */

export { ListView }
