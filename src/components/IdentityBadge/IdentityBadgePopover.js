import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { IconClose } from '../../icons'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { blockExplorerUrl, noop } from '../../utils'
import AddressField from '../AddressField/AddressField'
import { Button } from '../Button/Button'
import { ButtonIcon } from '../Button/ButtonIcon'
import Link from '../Link/Link'
import Popover from '../Popover/Popover'
import { Tag } from '../Tag/Tag'
import PopoverActionType from './PopoverActionType'

const IdentityBadgePopover = React.memo(function IdentityBadgePopover({
  address,
  connectedAccount,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible,
}) {
  const theme = useTheme()
  const handlePopoverActionClick = useCallback(() => {
    onClose()
    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick()
    }
  }, [onClose, popoverAction])

  const etherscanUrl = blockExplorerUrl('address', address, { networkType })

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
          {connectedAccount && (
            <Tag
              css={`
                margin-left: ${1.5 * GU}px;
                max-width: ${15 * GU}px;
              `}
              size="small"
              title="This is your Ethereum address"
            >
              you
            </Tag>
          )}
        </header>
        <div
          css={`
            padding: ${2 * GU}px;
          `}
        >
          <AddressField
            address={address}
            css={`
              margin-bottom: ${2 * GU}px;
            `}
          />
          <div
            css={`
              display: flex;
              flex-direction: row-reverse;
              justify-content: space-between;
            `}
          >
            <p
              css={`
                ${textStyle('body3')};
              `}
            >
              {etherscanUrl && (
                <Link href={etherscanUrl}>See on Etherscan</Link>
              )}
            </p>
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
IdentityBadgePopover.propTypes = {
  address: PropTypes.string,
  connectedAccount: PropTypes.bool,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes.instanceOf(Element),
  popoverAction: PopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool,
}
IdentityBadgePopover.defaultProps = {
  title: 'Address',
  onClose: noop,
}

export default IdentityBadgePopover
