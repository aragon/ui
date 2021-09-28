import { useFocusLeave } from './useFocusLeave.js';
import { warnOnce } from '../utils/environment.js';

function useOnBlur(...params) {
  warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave(...params);
}

export { useOnBlur };
//# sourceMappingURL=useOnBlur.js.map
