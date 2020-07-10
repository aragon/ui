export const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000'

// Shim mapping of web3.js' network type to chain ID.
// This is mostly a convenience fallback for old users who may still be
// specifying their desired network through a network type
export const NETWORK_TYPES_TO_CHAIN_ID = new Map([
  ['main', 1],
  ['ropsten', 3],
  ['rinkeby', 4],
  ['kovan', 42],
  ['goerli', 5],

  // Note that xDai is technically considered a "private" chain for web3.js,
  // but we use "xdai" here to provide network detection
  ['xdai', 100],
])
