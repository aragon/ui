const ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/
const ETHERSCAN_NETWORKS = ['mainnet', 'kovan', 'rinkeby', 'ropsten']
const ETHERSCAN_TYPES = ['block', 'transaction', 'address', 'token']

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
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.networkType The Ethereum network type (mainnet, kovan, rinkeby or ropsten).
 * @param {string} options.provider The explorer provider (e.g. etherscan).
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function blockExplorerUrl(
  type,
  value,
  { network = 'mainnet', provider = 'etherscan' } = {}
) {
  // Only Etherscan is supported for now.
  if (provider !== 'etherscan') {
    return ''
  }

  if (!ETHERSCAN_NETWORKS.includes(network)) {
    return ''
  }

  if (!ETHERSCAN_TYPES.includes(type)) {
    return ''
  }

  const subdomain = network === 'mainnet' ? '' : `${network}.`

  return `https://${subdomain}etherscan.io/${type}/${value}`
}
