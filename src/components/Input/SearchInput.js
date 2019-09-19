import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ButtonIcon } from '../Button/ButtonIcon'
import TextInput from './TextInput'
import { IconSearch, IconCross } from '../../icons'
import { useTheme } from '../../theme'

const EMPTY = ''

const SearchInput = React.forwardRef(
  ({ onChange, value: propsValue, ...props }, ref) => {
    const theme = useTheme()
    const localRef = ref || useRef()
    const [value, setValue] = useState(propsValue || EMPTY)
    const handleChange = useCallback(
      ev => {
        const { value } = ev.currentTarget
        setValue(value)
        onChange(value, { inputChangeEvent: ev })
      },
      [onChange]
    )
    const clear = useCallback(
      ev => {
        setValue(EMPTY)
        onChange(EMPTY, { clearClickEvent: ev })
      },
      [onChange]
    )

    useEffect(() => {
      setValue(propsValue || EMPTY)
    }, [propsValue])

    return (
      <TextInput
        value={value}
        {...props}
        ref={localRef}
        onChange={handleChange}
        adornment={
          value.trim() === EMPTY ? (
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
  }
)

SearchInput.propTypes = {
  ...TextInput.propTypes,
}

export { SearchInput }
