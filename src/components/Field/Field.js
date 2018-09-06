import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import { theme } from '../../theme'
import { unselectable } from '../../utils/styles'

const StyledField = styled.div`
  margin-bottom: 20px;
`

const StyledAsterisk = styled.span`
  color: ${theme.accent};
  float: right;
  padding-top: 3px;
  font-size: 12px;
`

const StyledTextBlock = styled(Text.Block)`
  ${unselectable()};
`

const Field = ({ children, label, ...props }) => {
  const isRequired = React.Children.toArray(children).some(
    ({ props }) => props && props.required
  )
  return (
    <StyledField {...props}>
      <label>
        <StyledTextBlock color={theme.textSecondary} smallcaps>
          {label}
          {isRequired && <StyledAsterisk title="Required">*</StyledAsterisk>}
        </StyledTextBlock>
        {children}
      </label>
    </StyledField>
  )
}

Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
}

export default Field
