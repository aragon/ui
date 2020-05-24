import React, { useRef, useCallback } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import TextInput from './TextInput'
import { IconSearch, IconCross } from '../../icons'
import { useTheme } from '../../theme'

const EMPTY = ''

const SearchInput = React.forwardRef(({ onChange, ...props }, ref) => {
  const theme = useTheme()
  const fallbackRef = useRef()
  const _ref = ref || fallbackRef

  const handleChange = useCallback(
    ev => {
      const { value } = ev.currentTarget
      onChange(value, { inputChangeEvent: ev })
    },
    [onChange]
  )

  const handleClearClick = useCallback(
    ev => {
      onChange(EMPTY, { clearClickEvent: ev })
      if (_ref.current) {
        _ref.current.focus()
      }
    },
    [onChange, _ref]
  )

  return (
    <TextInput
      ref={_ref}
      adornment={{
        end:
          (props.value || '') === EMPTY ? (
            <IconSearch
              css={`
                color: ${theme.surfaceIcon};
              `}
            />
          ) : (
            <ButtonIcon
              onClick={handleClearClick}
              label="Clear search input"
              css={`
                color: ${theme.surfaceIcon};
              `}
            >
              <IconCross />
            </ButtonIcon>
          ),
      }}
      onChange={handleChange}
      {...props}
    />
  )
})

SearchInput.propTypes = {
  ...TextInput.propTypes,
}

export default SearchInput
