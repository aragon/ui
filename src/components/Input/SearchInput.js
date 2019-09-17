import React, { useRef, useState, useCallback, useMemo } from 'react'
import ButtonIcon from '../Button/ButtonIcon'
import TextInput from './TextInput'
import { IconSearch, IconCross } from '../../icons'
import { useTheme } from '../../theme'

const EMPTY = ''

const SearchInput = React.forwardRef(({ onChange, ...props }, ref) => {
  const theme = useTheme()
  const localRef = ref || useRef()
  const [value, setValue] = useState(EMPTY)
  const handleChange = useCallback(
    ev => {
      setValue(ev.currentTarget.value)
      onChange(ev)
    },
    [onChange, value]
  )
  const clear = useCallback(() => {
    // https://github.com/facebook/react/issues/11488
    // simulate an input change event onChange handler works as if
    // user had clear with keyboard
    const input = localRef.current
    input.value = EMPTY
    const event = new Event('input', { bubbles: true })
    let tracker = input._valueTracker
    if (tracker) {
      tracker.setValue(value)
    }
    input.dispatchEvent(event)
  }, [onChange, value, localRef])

  return (
    <TextInput
      ref={localRef}
      {...props}
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
})

export { SearchInput }
