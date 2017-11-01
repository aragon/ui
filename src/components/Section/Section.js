import React from 'react'
import styled from 'styled-components'
import { gridWidth } from '../../shared-styles'

const StyledSection = styled.section``
const StyledSectionDiv = StyledSection.withComponent('div')
const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ large }) => gridWidth(large ? 12 : 10)}px;
`

const Section = ({
  large = false,
  visual = false,
  StyledComponent = null, // Allow to override the styled component
  ...props
}) => {
  const SectionComp =
    StyledComponent || (visual ? StyledSectionDiv : StyledSection)

  return (
    <SectionComp>
      <StyledContent>
        <div {...props} />
      </StyledContent>
    </SectionComp>
  )
}

Section.StyledSection = StyledSection
Section.StyledSectionDiv = StyledSectionDiv
export default Section
