/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'

import { Section, theme } from '../..'

const StyledIllustratedSection = Section.StyledSectionDiv.extend`
  padding: 235px 0 140px;
  .main {
    display: flex;
    align-items: center;
  }
`

const StyledIllustration = styled.div`
  width: 450px;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
    margin-right: 60px;
  }
`

const StyledTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${theme.accent};
`

const StyledSubtitle = styled.div`
  font-size: 37px;
  font-weight: 200;
  line-height: 1.3;
  color: ${({ dark }) => (dark ? 'white' : 'black')};
`

const StyledEmphasis = styled.div`
  margin: 40px 0;
  padding-left: 30px;
  font-size: 19px;
  border-left: 4px solid var(--aragonAlt);
  color: ${({ dark }) => (dark ? 'white' : 'black')};
`

const StyledContent = styled.div`
  font-size: 18px;
  p {
    margin-bottom: 1em;
  }
`

type Props = {
  dark: boolean,
  children: Node,
}

const IllustrationSection = ({ dark, children }: Props) => {
  return (
    <Section StyledComponent={StyledIllustratedSection} dark={dark}>
      <div className="main">{children}</div>
    </Section>
  )
}

IllustrationSection.defaultProps = {
  dark: false,
}

IllustrationSection.Illustration = StyledIllustration
IllustrationSection.Title = StyledTitle
IllustrationSection.Subtitle = StyledSubtitle
IllustrationSection.Emphasis = StyledEmphasis
IllustrationSection.Content = StyledContent

export default IllustrationSection
