import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { identity, noop } from '../../utils'
import { theme } from '../../theme-legacy'
import ButtonBase from '../ButtonBase/ButtonBase'
import AutoComplete from './AutoComplete'

function AutoCompleteSelected({
  forwardedRef,
  itemButtonStyles,
  items,
  onChange,
  onSelect,
  onSelectedClick = noop,
  placeholder,
  renderItem,
  required,
  renderSelected = identity,
  selected,
  selectedButtonStyles = '',
  value,
  wide,
}) {
  const ref = forwardedRef
  const selectedRef = useRef()

  const handleSelect = useCallback(
    selected => {
      onSelect(selected)
      setTimeout(() => {
        selectedRef.current.focus()
      }, 0)
    },
    [onSelect]
  )
  const handleSelectedClick = useCallback(() => {
    onSelectedClick()
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.select()
        ref.current.focus()
      }
    }, 0)
  }, [ref, onSelectedClick])

  if (selected) {
    return (
      <ButtonBase
        onClick={handleSelectedClick}
        ref={selectedRef}
        css={`
          height: 40px;
          width: 100%;
          text-align: left;
          background: #fff;
          cursor: pointer;
          border: 1px solid ${theme.contentBorder};
          border-radius: 3px;
          padding: 4px 8px;
          &:hover,
          &:focus {
            outline: none;
            border: 1px solid ${theme.accent};
            border-radius: 3px;
          }
          ${selectedButtonStyles};
        `}
      >
        {renderSelected(selected)}
      </ButtonBase>
    )
  }

  return (
    <AutoComplete
      items={items}
      onChange={onChange}
      onSelect={handleSelect}
      placeholder={placeholder}
      ref={ref}
      renderItem={renderItem}
      required={required}
      value={value}
      wide={wide}
    />
  )
}

AutoCompleteSelected.propTypes = {
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectedClick: PropTypes.func,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  renderSelected: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.object,
  selectedButtonStyles: PropTypes.string,
  value: PropTypes.string,
  wide: PropTypes.bool,
}

const AutoCompleteSelectedMemo = React.memo(AutoCompleteSelected)

export default React.forwardRef((props, ref) => (
  <AutoCompleteSelectedMemo {...props} forwardedRef={ref} />
))
