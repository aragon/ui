import React from 'react'
import PropTypes from 'prop-types'
import { useToken, UseTokenProvider } from 'use-token'
import { TokenAmount as TokenAmountLib } from 'token-amount'
import { useImageExists } from '../../hooks'
import { GU, textStyle } from '../../style'
import { isAddress, warn } from '../../utils'
import { useTheme } from '../../theme'

const TokenAmount = React.memo(function TokenAmount({
  address,
  amount,
  decimals,
  digits,
  networkType,
  size,
  style,
  symbol,
  ...props
}) {
  const isValidAddress = isAddress(address)
  if (!isValidAddress) {
    warn(`TokenAmount: provided address is invalid (${address})`)
  }

  return (
    <UseTokenProvider>
      <div
        style={style}
        css={`
          display: flex;
          align-items: center;
        `}
        {...props}
      >
        <Icon address={address} size={size} />
        {amount && (
          <span
            css={`
              padding-right: ${size === 'large' ? 0.5 * GU : 0.25 * GU}px;
              ${textStyle(size === 'large' ? 'title2' : 'body2')};
              line-height: 1;
            `}
          >
            {TokenAmountLib.format(amount, decimals, { digits: digits })}
          </span>
        )}
        <Symbol address={address} size={size} symbol={symbol} />
      </div>
    </UseTokenProvider>
  )
})

const Icon = function Icon({ address, size }) {
  const token = useToken(address)
  const { exists } = useImageExists(token.iconUrl)
  return (
    exists && (
      <img
        alt=""
        height={3 * GU}
        src={token.iconUrl}
        css={`
          padding-right: ${size === 'large' ? 1 * GU : 0.5 * GU}px;
        `}
      />
    )
  )
}

const Symbol = function Symbol({ address, size, symbol }) {
  const token = useToken(address)
  const theme = useTheme()

  return (
    <span
      css={`
        color: ${theme.surfaceContentSecondary};
        ${textStyle('body2')};
        line-height: 1;
        ${size === 'large' ? `align-self: flex-end;` : ''}
      `}
    >
      {symbol || token.symbol}
    </span>
  )
}

Icon.propTypes = {
  address: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Symbol.propTypes = {
  address: PropTypes.string.isRequired,
  size: PropTypes.string,
  symbol: PropTypes.string,
}

TokenAmount.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.any,
  decimals: PropTypes.number,
  digits: PropTypes.number,
  networkType: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string,
}

TokenAmount.defaultProps = {
  address: '',
  decimals: 18,
  digits: 2,
  networkType: 'main',
  size: 'medium',
}

export default TokenAmount
