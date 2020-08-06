import { warnOnce } from '../utils/environment.js';
import { useFocusLeave as useFocusLeave$1 } from './useFocusLeave.js';

function useOnBlur() {
  warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave$1.apply(void 0, arguments);
}

export { useOnBlur };
//# sourceMappingURL=useOnBlur.js.map
