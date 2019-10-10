import React, { useRef, useCallback } from 'react'
import { ButtonIcon } from '../Button/ButtonIcon'
import TextInput from './TextInput'
import { IconSearch, IconCross } from '../../icons'
import { useTheme } from '../../theme'

const EMPTY = ''

const SearchInput = React.forwardRef(({ onChange, ...props }, ref) => {
  const theme = useTheme()
  const localRef = ref || useRef()

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
      if (localRef.current) {
        localRef.current.focus()
      }
    },
    [onChange, localRef]
  )

  return (
    <TextInput
      ref={localRef}
      adornment={
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
        )
      }
      adornmentPosition="end"
      onChange={handleChange}
      {...props}
    />
  )
})

SearchInput.propTypes = {
  ...TextInput.propTypes,
}

export { SearchInput }
