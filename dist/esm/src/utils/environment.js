import { noop } from './miscellaneous.js';

function devOnly(cb) {
  return process.env.NODE_ENV === 'development' ? cb : noop;
} // Log in dev mode only

const log = devOnly((...params) => {
  console.log(...params);
}); // Warn in dev mode only

const warn = devOnly((...params) => {
  console.warn(...params);
}); // Like warn(), but only once

const Warned = new Map();
const warnOnce = devOnly((domain, ...params) => {
  if (!Warned.get(domain)) {
    console.warn(...params);
    Warned.set(domain, true);
  }
});

export { devOnly, log, warn, warnOnce };
//# sourceMappingURL=environment.js.map
