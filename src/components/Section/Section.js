/* @flow */
import type { ReactComponentStyled } from 'styled-components'

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

type Props = {
  large: boolean,
  visual: boolean,
  StyledComponent: ReactComponentStyled<*>, // Allow to override the styled component
}

const Section = ({
  large,
  visual,
  StyledComponent, // Allow to override the styled component
  ...props
}: Props) => {
  const SectionComp =
    StyledComponent || (visual ? StyledSectionDiv : StyledSection)

  return (
    <SectionComp>
      <StyledContent large={large}>
        <div {...props} />
      </StyledContent>
    </SectionComp>
  )
}

Section.defaultProps = {
  large: false,
  visual: false,
}

Section.StyledSection = StyledSection
Section.StyledSectionDiv = StyledSectionDiv
export default Section
