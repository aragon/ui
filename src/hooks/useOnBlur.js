import { useFocusLeave } from './useFocusLeave'
import { warnOnce } from '../utils/environment'

export function useOnBlur(...params) {
  warnOnce(
    'useOnBlur',
    'useOnBlur() is deprecated, please use useFocusLeave() instead.'
  )
  return useFocusLeave(...params)
}
