import React from 'react'
import styled from 'styled-components'
import { gridWidth } from '../../shares-styles'

const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ large }) => gridWidth(large ? 12 : 10)};
`

const StyledSectionDiv = StyledSection.withComponent('div')

const Section = ({ large = false, visual = false, ...props }) => {
  const SectionComp = visual ? StyledSectionDiv : StyledSection

  return (
    <SectionComp>
      <div>
        <div {...props} />
      </div>
    </SectionComp>
  )
}
