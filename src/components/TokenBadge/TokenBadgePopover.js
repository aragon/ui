import React from 'react'
import PropTypes from 'prop-types'
import { IconClose } from '../../icons'
import { ImageExists } from '../../hooks'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { blockExplorerUrl } from '../../utils'
import AddressField from '../AddressField/AddressField'
import { ButtonIcon } from '../Button/ButtonIcon'
import Link from '../Link/Link'
import Popover from '../Popover/Popover'

const TokenBadgePopover = React.memo(function TokenBadgePopover({
  address,
  iconUrl,
  networkType,
  label,
  onClose,
  opener,
  visible,
}) {
  const theme = useTheme()
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
            {label}
          </h1>
        </header>
        <div
          css={`
            padding: ${2 * GU}px;
          `}
        >
          {iconUrl ? (
            <ImageExists src={iconUrl}>
              {({ exists }) => (
                <AddressField
                  address={address}
                  icon={exists ? <Icon src={iconUrl} /> : null}
                />
              )}
            </ImageExists>
          ) : (
            <AddressField address={address} />
          )}
          <div
            css={`
              display: flex;
              justify-content: flex-end;
              margin-top: ${2 * GU}px;
            `}
          >
            <p
              css={`
                ${textStyle('body3')};
              `}
            >
              <Link href={blockExplorerUrl('token', address, { networkType })}>
                See on Etherscan
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Popover>
  )
})
TokenBadgePopover.propTypes = {
  address: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  opener: PropTypes.instanceOf(Element),
  onClose: PropTypes.func,
  networkType: PropTypes.string,
}

const Icon = ({ src }) => (
  <div
    css={`
      flex-shrink: 0;
      display: flex;
      width: 38px;
      height: 38px;
      align-items: center;
      justify-content: center;
    `}
  >
    <div
      css={`
        width: 26px;
        height: 26px;
        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(${src});
      `}
    />
  </div>
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default TokenBadgePopover
