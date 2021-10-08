import { useFocusLeave } from './useFocusLeave.js';
import { warnOnce } from '../utils/environment.js';

function useOnBlur() {
  warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave.apply(void 0, arguments);
}

export { useOnBlur };
//# sourceMappingURL=useOnBlur.js.map
