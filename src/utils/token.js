import { EMPTY_ADDRESS } from '../lib/web3'
import { warn } from './environment'
import { toChecksumAddress } from './web3'

const TRUST_WALLET_BASE_URL =
  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/'

const TRUST_WALLET_NETWORKS = new Map([
  // [chainId, path]
  [1, 'ethereum'],
  [100, 'xdai'],
])

/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @param {object} options The optional parameters.
 * @param {string} options.chainId The EVM chain ID (https://chainid.network/).
 * @param {object} options.providerConfig Configuration mapping of available token icon providers
 * @returns {string} The generated URL, or an empty string if the parameters are invalid.
 */
export function tokenIconUrl(address = '', { chainId = 1, providerConfig } = {}) {
  // FIXME: use providerConfig
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
