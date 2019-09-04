import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { IconClose } from '../../icons'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { noop } from '../../utils'
import { Button } from '../Button/Button'
import { ButtonIcon } from '../Button/ButtonIcon'
import Popover from '../Popover/Popover'
import BadgePopoverActionType from './BadgePopoverActionType'

const BadgePopoverBase = React.memo(function BadgePopoverBase({
  addressField,
  link,
  onClose,
  opener,
  popoverAction,
  title,
  titleTag,
  visible,
}) {
  const theme = useTheme()
  const handlePopoverActionClick = useCallback(() => {
    onClose()
    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick()
    }
  }, [onClose, popoverAction])

  return (
    <Popover visible={visible} opener={opener} onClose={onClose}>
      <section
        css={`
          position: relative;
          max-width: calc(100vw - 20px);
          min-width: 300px;
        `}
      >
        <ButtonIcon
          label="Close"
          onClick={onClose}
          css={`
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 0;
            color: ${theme.surfaceIcon};
          `}
        >
          <IconClose size="small" />
        </ButtonIcon>
        <header
          css={`
            display: flex;
            align-items: center;
            height: ${4 * GU}px;
            padding-left: ${2 * GU}px;
            border-bottom: 1px solid ${theme.border};
          `}
        >
          <h1
            css={`
              ${textStyle('label2')}
              font-weight: 400;
              color: ${theme.surfaceContentSecondary};
            `}
          >
            {title}
          </h1>
          {titleTag}
        </header>
        <div
          css={`
            padding: ${2 * GU}px;
          `}
        >
          {addressField}
          <div
            css={`
              display: flex;
              margin-top: ${2 * GU}px;
              ${link
                ? `
                  flex-direction: row-reverse;
                  justify-content: space-between;
                `
                : ''}
            `}
          >
            {link && (
              <p
                css={`
                  ${textStyle('body3')};
                `}
              >
                {link}
              </p>
            )}
            {popoverAction && (
              <Button
                size="medium"
                onClick={handlePopoverActionClick}
                css={`
                  color: ${theme.surfaceContentSecondary};
                `}
              >
                {popoverAction.label}
              </Button>
            )}
          </div>
        </div>
      </section>
    </Popover>
  )
})
BadgePopoverBase.propTypes = {
  addressField: PropTypes.node.isRequired,
  link: PropTypes.node,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node.isRequired,
  titleTag: PropTypes.node,
  visible: PropTypes.bool,
}
BadgePopoverBase.defaultProps = {
  onClose: noop,
}

export default BadgePopoverBase
