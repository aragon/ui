import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import { IconQuestion } from '../../icons'
import { DiscButton } from '../DiscButton/DiscButton'
import Popover from '../Popover/Popover'

function Help({ hint, children }) {
  const theme = useTheme()
  const buttonElement = useRef()
  const [visible, setVisible] = useState(false)
  const open = useCallback(() => setVisible(true), [])
  const close = useCallback(() => setVisible(false), [])
  const [insideBoxHeading] = useInside('Box:heading')
  const [insideFieldLabel] = useInside('Field:label')
  return (
    <React.Fragment>
      <DiscButton
        ref={buttonElement}
        description={hint}
        onClick={open}
        size={2 * GU}
        css={`
          margin-top: ${insideFieldLabel ? -3 : 0}px;
          margin-left: ${insideBoxHeading || insideFieldLabel ? 1 * GU : 0}px;
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
          {children}
        </div>
      </Popover>
    </React.Fragment>
  )
}

Help.propTypes = {
  hint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Help
