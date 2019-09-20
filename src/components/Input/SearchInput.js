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
  const clear = useCallback(
    ev => {
      onChange(EMPTY, { clearClickEvent: ev })
    },
    [onChange]
  )

  return (
    <TextInput
      {...props}
      ref={localRef}
      onChange={handleChange}
      adornment={
        (props.value || '').trim() === EMPTY ? (
          <IconSearch
            css={`
              color: ${theme.surfaceOpened};
            `}
          />
        ) : (
          <ButtonIcon
            onClick={clear}
            label="Clear search input"
            css={`
              color: ${theme.surfaceOpened};
            `}
          >
            <IconCross />
          </ButtonIcon>
        )
      }
      adornmentPosition="end"
    />
  )
})

SearchInput.propTypes = {
  ...TextInput.propTypes,
}

export { SearchInput }
