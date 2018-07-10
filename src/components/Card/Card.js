import styled from 'styled-components'

import { theme } from '../..'

const StyledCard = styled.div`
  width: ${({ width }) => width || '282px'};
  height: ${({ height }) => height || '322px'};
  background: ${theme.contentBackground};
  border: 1px solid ${theme.contentBorder};
  border-radius: 3px;
`

export default StyledCard
