import 'react';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import { useFocusLeave } from './useFocusLeave.js';

function useOnBlur() {
  warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave.apply(void 0, arguments);
}

export { useOnBlur };
//# sourceMappingURL=useOnBlur.js.map
