import React from 'react'
import PropTypes from '../../proptypes'
import { useToken, UseTokenProvider } from 'use-token'
import TokenAmountLib from 'token-amount'
import { useImageExists } from '../../hooks'
import { GU, textStyle } from '../../style'
import { isAddress } from '../../utils'
import { useTheme } from '../../theme'

const TokenAmount = React.memo(function TokenAmount({
  address,
  amount,
  chainId,
  decimals,
  digits,
  iconUrl,
  size,
  symbol,
  ...props
}) {
  const isValidAddress = isAddress(address)

  if (!isValidAddress && !symbol) {
    throw new Error(
      'TokenAmount: you need to provide a valid address or a symbol'
    )
  }

  return (
    <UseTokenProvider>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
        {...props}
      >
        <Icon
          address={address}
          chainId={chainId}
          iconUrl={iconUrl}
          size={size}
        />
        {amount && (
          <span
            css={`
              margin-right: ${size === 'large' ? 0.5 * GU : 0.25 * GU}px;
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

const Icon = function Icon({ address, chainId, iconUrl, size }) {
  const theme = useTheme()
  const token = useToken(chainId === 1 ? address : '')
  const { exists } = useImageExists(iconUrl || token.iconUrl)
  return (
    <div
      css={`
        display: flex;
        width: ${3 * GU}px;
        height: ${3 * GU}px;
        margin-right: ${size === 'large' ? 1 * GU : 0.75 * GU}px;
      `}
    >
      {exists ? (
        <img alt="" width="100%" src={iconUrl || token.iconUrl} />
      ) : (
        <div
          css={`
            flex: 1;
            border-radius: 100%;
            border: 2px solid ${theme.border};
          `}
        />
      )}
    </div>
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
        ${size === 'large' ? `transform: translateY(-1px);` : ''}
      `}
    >
      {symbol || token.symbol}
    </span>
  )
}

Icon.propTypes = {
  address: PropTypes.string,
  chainId: PropTypes.number,
  iconUrl: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
}

Symbol.propTypes = {
  address: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  symbol: PropTypes.string,
}

TokenAmount.propTypes = {
  address: PropTypes.string,
  amount: PropTypes._bigIntish.isRequired,
  chainId: PropTypes.number,
  decimals: PropTypes.number.isRequired,
  digits: PropTypes.number,
  iconUrl: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  symbol: PropTypes.string,
}

TokenAmount.defaultProps = {
  chainId: 1,
  digits: 2,
  size: 'medium',
}

export default TokenAmount
