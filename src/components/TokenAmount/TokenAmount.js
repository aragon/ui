import React from 'react'
import PropTypes from 'prop-types'
import { useToken, UseTokenProvider } from 'use-token'
import TokenAmount from 'token-amount'
import { ImageExists } from '../../hooks'
import { GU, textStyle } from '../../style'
import { isAddress, warn } from '../../utils'
import { useTheme } from '../../theme'

const TokenAmountComponent = React.memo(function TokenAmountComponent({
  address,
  amount,
  className,
  decimals,
  digits,
  networkType,
  size,
  style,
  symbol,
}) {
  const isValidAddress = isAddress(address)
  if (!isValidAddress) {
    warn(`TokenAmount: provided invalid address (${address})`)
  }

  return (
    <UseTokenProvider>
      <div
        className={className}
        css={`
          display: flex;
          align-items: center;
        `}
        style={style}
      >
        <Logo address={address} size={size} />
        {amount && (
          <span
            css={`
              padding-right: ${size === 'large' ? 0.5 * GU : 0.25 * GU}px;
              ${size === 'large' ? textStyle('title2') : textStyle('body2')};
              line-height: 1;
            `}
          >
            {new TokenAmount(amount, decimals).format({ digits: digits })}
          </span>
        )}
        <Symbol address={address} size={size} symbol={symbol} />
      </div>
    </UseTokenProvider>
  )
})

const Logo = React.memo(function Logo({ address, size }) {
  const token = useToken(address)
  return (
    <ImageExists src={token.iconUrl}>
      {({ exists }) =>
        exists && (
          <img
            alt={token.symbol}
            css={`
              height: ${3 * GU}px;
              padding-right: ${size === 'large' ? 1 * GU : 0.5 * GU}px;
            `}
            src={token.iconUrl}
          />
        )
      }
    </ImageExists>
  )
})

const Symbol = React.memo(function Symbol({ address, size, symbol }) {
  const token = useToken(address)
  const theme = useTheme()

  return (
    <span
      css={`
        color: ${theme.surfaceContentSecondary};
        ${textStyle('body2')};
        line-height: 1;
        ${size === 'large' && `align-self: flex-end;`}
      `}
    >
      {symbol || token.symbol}
    </span>
  )
})

Logo.propTypes = {
  address: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Symbol.propTypes = {
  address: PropTypes.string.isRequired,
  size: PropTypes.string,
  symbol: PropTypes.string,
}

TokenAmountComponent.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.any,
  className: PropTypes.string,
  decimals: PropTypes.number,
  digits: PropTypes.number,
  networkType: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string,
}

TokenAmountComponent.defaultProps = {
  address: '',
  decimals: 18,
  digits: 2,
  networkType: 'main',
  size: 'medium',
}

export default TokenAmountComponent
