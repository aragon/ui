// ETHERSCAN - Mainnet, Rinkeby, etc
export const ETHERSCAN_NETWORK_TYPES = new Map([
  ['main', ''],
  ['kovan', 'kovan.'],
  ['rinkeby', 'rinkeby.'],
  ['ropsten', 'ropsten.'],
  ['goerli', 'goerli.'],
])
export const ETHERSCAN_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])

// BLOCKSCOUT - xDai
export const BLOCKSCOUT_NETWORK_TYPES = new Map([
  ['xdai', 'xdai'],
  ['sokol', 'sokol'],
])
export const BLOCKSCOUT_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])

// POLYGONSCAN - Polygon
export const POLYGONSCAN_NETWORK_TYPES = new Map([
  ['polygon', ''],
  ['mumbai', 'mumbai.'],
])
export const POLYGONSCAN_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])

// ARBISCAN - Arbitrum
export const ARBISCAN_NETWORK_TYPES = new Map([
  ['arbitrum', ''],
  ['arbtest', 'testnet.'],
])
export const ARBISCAN_TYPES = new Map([
  ['block', 'block'],
  ['transaction', 'tx'],
  ['address', 'address'],
  ['token', 'token'],
])
