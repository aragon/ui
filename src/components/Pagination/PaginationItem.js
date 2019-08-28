import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { useTheme } from '../../theme'
import ButtonBase from '../ButtonBase/ButtonBase'
import { GU, RADIUS } from '../../style'

function PaginationItem({ touchMode, selected, index, onChange }) {
  const theme = useTheme()

  const handleClick = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <div>
      <ButtonBase
        onClick={handleClick}
        focusRingRadius={RADIUS}
        disabled={selected}
        css={`
          width: ${(touchMode ? 4 : 3) * GU}px;
          height: ${(touchMode ? 4 : 3) * GU}px;
          color: ${theme.surfaceContent};
          border-radius: ${RADIUS}px;
          &:active {
            background: ${theme.surfacePressed};
          }

          ${selected &&
            css`
              && {
                background: ${theme.accent};
                color: ${theme.accentContent};
              }
            `};
        `}
      >
        <span
          css={`
            position: relative;
            top: 1px;
          `}
        >
          {index + 1}
        </span>
      </ButtonBase>
    </div>
  )
}

PaginationItem.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  touchMode: PropTypes.bool.isRequired,
}

export { PaginationItem }
