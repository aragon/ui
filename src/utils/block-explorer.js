import { NETWORK_TYPES_TO_CHAIN_ID } from '../lib/web3'
import { warn, warnOnce } from './environment'

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

/**
 * Get the name of a block explorer
 *
 * @param {string} provider the explorer's identifier (e.g. etherscan).
 * @param {object} options.providerConfig Configuration mapping of available block explorers
 * @returns {string} The explorer's name, if any.
 */
export function blockExplorerName(provider, providerConfig = BLOCK_EXPLORERS) {
  if (!providerConfig || !providerConfig[provider]) {
    warn(
      `blockExplorerName(): provider '${provider}' not supported in provided configuration.`
    )
    return ''
  }

  return providerConfig[provider].name
}

/**
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.chainId The EVM chain ID (https://chainid.network/).
 * @param {string} options.provider The explorer's identifier (e.g. etherscan).
 * @param {object} options.providerConfig Configuration mapping of available block explorers
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function blockExplorerUrl(type, value, options = {}) {
  const { provider = 'etherscan', providerConfig = BLOCK_EXPLORERS } = options

  if (!providerConfig || !providerConfig[provider]) {
    warn(
      `blockExplorerUrl(): provider '${provider}' not supported in provided configuration.`
    )
    return ''
  }
  const explorer = providerConfig[provider]

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
