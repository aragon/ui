import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link, useTheme, textStyle, GU } from '@tecommons/ui'

function MenuItem({ active, path, name, onOpen }) {
  const theme = useTheme()

  const handleClick = useCallback(
    event => {
      event.preventDefault()
      onOpen(path)
    },
    [onOpen, path]
  )

  return (
    <li
      title={name}
      css={`
        position: relative;
        margin: ${1 * GU}px 0;
        list-style: none;
      `}
    >
      <Link
        external={false}
        href={path}
        onClick={handleClick}
        css={`
          color: ${theme.surfaceContent};
          ${textStyle('body1')};
          font-weight: ${active ? '600' : '400'};
          white-space: nowrap;
        `}
      >
        {name}
      </Link>
    </li>
  )
}

export default MenuItem
