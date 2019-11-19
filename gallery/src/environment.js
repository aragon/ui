// See webpack.config.js to see how webpack injects these constants
export default function env() {
  return {
    aragonUiPath: ARAGON_UI_PATH,
    publicPath: PUBLIC_PATH,
    aragonUiVersion: ARAGON_UI_VERSION,
  }
}
