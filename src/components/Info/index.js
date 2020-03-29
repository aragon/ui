import React from 'react'
import Info from './Info'

// Backward compatibility
function Warning(props) {
  return <Info mode="warning" {...props} />
}
Info.Action = Info
Info.Permissions = Warning
Info.Alert = Warning

export { Info }
