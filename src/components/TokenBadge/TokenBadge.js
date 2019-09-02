import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageExists } from '../../hooks'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { isAddress, tokenIconUrl } from '../../utils/web3'
import ButtonBase from '../ButtonBase/ButtonBase'
import TokenBadgePopover from './TokenBadgePopover'

const TokenBadge = React.memo(function TokenBadge({
  address,
  className,
  name,
  networkType,
  style,
  symbol,
}) {
  const theme = useTheme()
  const elementRef = useRef(null)

  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])
  const handleOpen = useCallback(() => {
    setOpened(true)
  }, [])

  const isValidAddress = isAddress(address)
  const iconUrl =
    isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null
  const label = name && symbol ? `${name} (${symbol})` : symbol

  return (
    <React.Fragment>
      <ButtonBase
        ref={elementRef}
        title={`${label} − ${address || 'No address'}`}
        onClick={isValidAddress ? handleOpen : null}
        focusRingRadius={RADIUS}
        css={`
          display: inline-flex;
          overflow: hidden;
          color: ${theme.textPrimary};
          height: ${3 * GU}px;
        `}
      >
        <div
          css={`
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 0 ${1 * GU}px;
            background: ${theme.badge};
            border-radius: ${RADIUS}px;
            text-decoration: none;
          `}
          className={className}
          style={style}
        >
          <ImageExists src={iconUrl}>
            {({ exists }) => exists && <Icon src={iconUrl} />}
          </ImageExists>
          <div
            css={`
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            `}
          >
            <span
              css={`
                position: relative;
                top: 1px;
                display: flex;
                flex-shrink: 1;
                min-width: 0;
                ${textStyle('body2')}
              `}
            >
              {name && <Name>{name}</Name>}
              <Symbol>{name ? `(${symbol})` : symbol}</Symbol>
            </span>
          </div>
        </div>
      </ButtonBase>
      {address && (
        <TokenBadgePopover
          address={address}
          iconUrl={iconUrl}
          label={label}
          networkType={networkType}
          onClose={handleClose}
          opener={elementRef.current}
          visible={opened}
        />
      )}
    </React.Fragment>
  )
})
TokenBadge.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  networkType: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string.isRequired,
}
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main',
}

const Icon = styled.span`
  flex-shrink: 0;
  display: block;
  width: 18px;
  height: 18px;
  margin-right: ${1 * GU}px;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${p => p.src});
`

const Name = styled.span`
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 20%;
  margin-right: ${0.5 * GU}px;
`

const Symbol = styled.span`
  flex-shrink: 0;
`

export default TokenBadge
