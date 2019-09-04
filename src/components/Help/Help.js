import React, { useCallback, useRef, useState } from 'react'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { Inside, useInside } from '../../utils'
import { IconQuestion } from '../../icons'
import DiscButton from '../DiscButton/DiscButton'
import Popover from '../Popover/Popover'

function Help({ hint, children }) {
  const theme = useTheme()
  const buttonElement = useRef()
  const [visible, setVisible] = useState(false)
  const open = useCallback(() => setVisible(true), [])
  const close = useCallback(() => setVisible(true), [])
  const [insideBoxHeading] = useInside('Box:heading')
  return (
    <React.Fragment>
      <DiscButton
        ref={buttonElement}
        description={hint}
        onClick={open}
        size={2 * GU}
        css={`
          margin-left: ${insideBoxHeading ? 1 * GU : 0}px;
        `}
      >
        <IconQuestion size="tiny" />
      </DiscButton>
      <Popover
        opener={buttonElement.current}
        visible={visible}
        onClose={close}
        css={`
          border: 0;
          overflow: hidden;
          ${textStyle('body3')};
        `}
      >
        <div
          css={`
            position: relative;
            max-width: ${48 * GU}px;
            min-width: ${20 * GU}px;
            padding: ${3 * GU}px;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              width: ${0.5 * GU}px;
              background: ${theme.help};
            }
          `}
        >
          <Inside name="Help">{children}</Inside>
        </div>
      </Popover>
    </React.Fragment>
  )
}

export default Help
