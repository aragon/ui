import React from 'react'
import { Info } from './Info'

function Warning(props) {
  return <Info mode="warning" {...props} />
}

// Backward compatibility
Info.Action = Info
Info.Permissions = Warning
Info.Alert = Warning

export { Info }
