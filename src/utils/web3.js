import { warn } from './environment'

const TRANSACTION_REGEX = /^0x[A-Fa-f0-9]{64}$/
const ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/

const ETHERSCAN_NETWORK_TYPES = new Map([
  ['main', ''],
  ['kovan', 'kovan.'],
  ['rinkeby', 'rinkeby.'],
  ['ropsten', 'ropsten.'],
  ['goerli', 'goerli.'],
])
const ETHERSCAN_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])

const BLOCK_EXPLORERS = {
  etherscan: ({ type, value, networkType }) => {
    if (networkType === 'private') {
      return ''
    }

    if (!ETHERSCAN_NETWORK_TYPES.has(networkType)) {
      throw new Error('provider not supported.')
    }
    if (!ETHERSCAN_TYPES.has(type)) {
      throw new Error('type not supported.')
    }

    const subdomain = ETHERSCAN_NETWORK_TYPES.get(networkType)
    const typePart = ETHERSCAN_TYPES.get(type)
    return `https://${subdomain}etherscan.io/${typePart}/${value}`
  },
}

/**
 * Check address equality without checksums
 * @param {string} first First address
 * @param {string} second Second address
 * @returns {boolean} Address equality
 */
export function addressesEqual(first, second) {
  first = first && first.toLowerCase()
  second = second && second.toLowerCase()
  return first === second
}

/**
 * Shorten an Ethereum address. `charsLength` allows to change the number of
 * characters on both sides of the ellipsis.
 *
 * Examples:
 *   shortenAddress('0x19731977931271')    // 0x1973…1271
 *   shortenAddress('0x19731977931271', 2) // 0x19…71
 *   shortenAddress('0x197319')            // 0x197319 (already short enough)
 *
 * @param {string} address The address to shorten
 * @param {number} [charsLength=4] The number of characters to change on both sides of the ellipsis
 * @returns {string} The shortened address
 */
export function shortenAddress(address, charsLength = 4) {
  const prefixLength = 2 // "0x"
  if (!address) {
    return ''
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address
  }
  return (
    address.slice(0, charsLength + prefixLength) +
    '…' +
    address.slice(-charsLength)
  )
}

/**
 * Alias for shortenAddress (to generalize its use)
 */
export const shortenTransaction = shortenAddress

/**
 *
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {string} address the given HEX address
 * @return {boolean}
 */
export function isAddress(address) {
  return ADDRESS_REGEX.test(address)
}

/**
 *
 * Checks if the given string is a transaction
 *
 * @method isTransaction
 * @param {string} address the given HEX address
 * @return {boolean}
 */
export function isTransaction(transaction) {
  return TRANSACTION_REGEX.test(transaction)
}

/**
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.networkType The Ethereum network type (main, kovan, rinkeby, ropsten, goerli, or private).
 * @param {string} options.provider The explorer provider (e.g. etherscan).
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function blockExplorerUrl(
  type,
  value,
  { networkType = 'main', provider = 'etherscan' } = {}
) {
  const explorer = BLOCK_EXPLORERS[provider]

  if (!explorer) {
    warn('blockExplorerUrl(): provider not supported.')
    return ''
  }

  try {
    return explorer({ type, value, networkType })
  } catch (err) {
    warn(`blockExplorerUrl(): ${err.message}`)
    return ''
  }
}

/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token.
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function tokenIconUrl(address = '') {
  address = address.trim()
  return address
    ? `https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/${address}.png`
    : ''
}
