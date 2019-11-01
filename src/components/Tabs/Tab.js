import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useInside } from '../../utils'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import ButtonBase from '../ButtonBase/ButtonBase'

function Tab({ index, item, selected, onChange }) {
  const theme = useTheme()
  const [insideSidePanel] = useInside('SidePanel')

  const handleClick = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <li css="list-style: none">
      <ButtonBase
        focusRingRadius={RADIUS}
        onClick={handleClick}
        css={`
          ${textStyle('body2')};
          border-radius: 0;
          transition: background 50ms ease-in-out;
          &:active {
            background: ${theme.surfacePressed};
          }
        `}
      >
        <span
          css={`
            display: flex;
            position: relative;
            align-items: center;
            height: ${8 * GU - (insideSidePanel ? 1 : 2)}px;
            padding: 0 ${3 * GU}px;
            white-space: nowrap;
            color: ${selected
              ? theme.surfaceContent
              : theme.surfaceContentSecondary};
          `}
        >
          {item}
          <span
            css={`
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${theme.selected};
              height: 2px;
              opacity: ${Number(selected)};
              transition-property: transform, opacity;
              transition-duration: 150ms;
              transition-timing-function: ease-in-out;
              transform: scale3d(1, ${Number(selected)}, 1);
              transform-origin: 0 100%;
            `}
          />
        </span>
      </ButtonBase>
    </li>
  )
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default Tab
