import sha3 from 'js-sha3'
import { warn, warnOnce } from './environment'

const { keccak_256: keccak256 } = sha3

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000'
const TRANSACTION_REGEX = /^0x[A-Fa-f0-9]{64}$/
const ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/

const TRUST_WALLET_BASE_URL =
  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/'

const TRUST_WALLET_NETWORKS = new Map([
  // [chainId, path]
  [1, 'ethereum'],
  [100, 'xdai'],
])

const BLOCKSCOUT_NETWORKS = new Map([
  // [chainId, path]
  [6, 'etc/kotti'],
  [61, 'etc/mainnet'],
  [63, 'etc/mordor'],
  [77, 'poa/sokol'],
  [99, 'poa/core'],
  [100, 'poa/xdai'],
])
const BLOCKSCOUT_TYPES = new Map([
  ['block', 'blocks'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'tokens'],
])

const ETHERSCAN_NETWORKS = new Map([
  // [chainId, subdomain]
  [1, ''],
  [3, 'ropsten.'],
  [4, 'rinkeby.'],
  [42, 'kovan.'],
  [5, 'goerli.'],
])
const ETHERSCAN_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])

const BLOCK_EXPLORERS = {
  blockscout: {
    name: 'Blockscout',
    url: ({ chainId, type, value }) => {
      if (!BLOCKSCOUT_NETWORKS.has(chainId)) {
        throw new Error(`BlockscoutUrl chainId '${chainId}' not supported.`)
      }
      if (!BLOCKSCOUT_TYPES.has(type)) {
        throw new Error(`BlockscoutUrl type '${type}' not supported.`)
      }

      const path = BLOCKSCOUT_NETWORKS.get(chainId)
      const typePart = BLOCKSCOUT_TYPES.get(type)
      return `https://blockscout.com/${path}/${typePart}/${value}`
    },
  },
  etherscan: {
    name: 'Etherscan',
    url: ({ chainId, type, value }) => {
      if (!ETHERSCAN_NETWORKS.has(chainId)) {
        throw new Error(`EtherscanUrl chainId '${chainId}' not supported.`)
      }
      if (!ETHERSCAN_TYPES.has(type)) {
        throw new Error(`EtherscanUrl type '${type}' not supported.`)
      }

      const subdomain = ETHERSCAN_NETWORKS.get(chainId)
      const typePart = ETHERSCAN_TYPES.get(type)
      return `https://${subdomain}etherscan.io/${typePart}/${value}`
    },
  },
}

// Shim mapping of web3.js' network type to chain ID.
// This is mostly a convenience fallback for old users who may still be
// specifying their desired network through a network type
const NETWORK_TYPES_TO_CHAIN_ID = new Map([
  ['main', 1],
  ['ropsten', 3],
  ['rinkeby', 4],
  ['kovan', 42],
  ['goerli', 5],

  // Note that xDai is technically considered a "private" chain for web3.js,
  // but we use "xdai" here to provide network detection
  ['xdai', 100],
])

/**
 * Converts to a checksum address
 *
 * This function is taken from web3-utils:
 * https://github.com/ethereum/web3.js/blob/22df832303e349f8ae02f0392e56abe10e1dfaac/packages/web3-utils/src/index.js#L287-L315
 * And was adapted to use js-sha3 rather than soliditySha3.js from web3.js, in
 * order to avoid adding the BN.js and underscore dependencies.
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @returns {String}
 */
function toChecksumAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    throw new Error(
      'Given address "' + address + '" is not a valid Ethereum address.'
    )
  }

  address = address.toLowerCase().replace(/^0x/i, '')

  const addressHash = keccak256(address).replace(/^0x/i, '')
  let checksumAddress = '0x'

  for (let i = 0; i < address.length; i++) {
    // If ith character is 9 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase()
    } else {
      checksumAddress += address[i]
    }
  }

  return checksumAddress
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
 * @returns {boolean}
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
 * @returns {boolean}
 */
export function isTransaction(transaction) {
  return TRANSACTION_REGEX.test(transaction)
}

/**
 * Get the name of a block explorer
 *
 * @param {string} provider the explorer provider (e.g. etherscan).
 * @returns {string} The explorer's name, if any.
 */
export function blockExplorerName(provider) {
  const explorer = BLOCK_EXPLORERS[provider]

  if (!explorer) {
    warn(`blockExplorerUrl(): provider '${provider}' not supported.`)
    return ''
  }

  return explorer.name
}

/**
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.chainId The EVM chain ID (https://chainid.network/).
 * @param {string} options.provider The explorer provider (e.g. etherscan).
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function blockExplorerUrl(type, value, options = {}) {
  const { provider = 'etherscan' } = options

  const explorer = BLOCK_EXPLORERS[provider]

  if (!explorer) {
    warn(`blockExplorerUrl(): provider '${provider}' not supported.`)
    return ''
  }

  let { chainId = 1 } = options
  if (!options.chainId && options.networkType) {
    if (!NETWORK_TYPES_TO_CHAIN_ID.has(options.networkType)) {
      warnOnce(
        'blockExplorerUrl():validNetworkType',
        'blockExplorerUrl() was used with a network type. It is recommended to use chainId instead.'
      )
      chainId = NETWORK_TYPES_TO_CHAIN_ID.get(options.networkType)
    } else {
      warn(
        'blockExplorerUrl() was used with an invalid network type. It is recommended to use chainId instead.'
      )

      return ''
    }
  }

  try {
    return explorer.url({ chainId, type, value })
  } catch (err) {
    warn(`blockExplorerUrl(): ${err.message}`)
    return ''
  }
}

/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @param {object} options The optional parameters.
 * @param {string} options.chainId The EVM chain ID (https://chainid.network/).
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function tokenIconUrl(address = '', { chainId = 1 } = {}) {
  if (!TRUST_WALLET_NETWORKS.has(chainId)) {
    warn(`tokenIconUrl(): invalid chainId '${chainId}'`)
    return ''
  }
  const baseUrl = `${TRUST_WALLET_BASE_URL}/${TRUST_WALLET_NETWORKS.get(
    chainId
  )}`

  try {
    address = toChecksumAddress(address.trim())
  } catch (err) {
    return ''
  }

  if (address === EMPTY_ADDRESS) {
    return `${baseUrl}/info/logo.png`
  }

  return `${baseUrl}/assets/${address}/logo.png`
}
