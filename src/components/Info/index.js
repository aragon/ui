import { Info } from './Info'

// Backward compatibility
Info.Action = Info
Info.Permissions = Info
Info.Alert = props => <Info mode="warning" {...props} />

export { Info }
