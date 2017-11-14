/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'

import { Section, theme, themeDark } from '../..'

const StyledIllustratedSection = styled(Section)`
  padding: 235px 0 140px;
  .main {
    display: flex;
    align-items: center;
  }
`

const StyledIllustration = styled.div`
  flex-shrink: 0;
  width: calc(40% + 100px);
  margin-left: 50px;
  margin-right: -100px;
  &:first-child {
    margin-left: -100px;
    margin-right: 80px;
  }
  img {
    width: 100%;
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
  border-left: 4px solid ${theme.accent};
  color: ${({ dark }) => (dark ? 'white' : 'black')};
`

const StyledContent = styled.div`
  font-size: 18px;
  color: ${({ dark }) => (dark ? themeDark.textSecondary : 'black')};
  p {
    margin-bottom: 1em;
  }
`

type Props = {
  className: string,
  dark: boolean,
  children: Node,
}

const DefaultProps = {
  dark: false,
}

const IllustrationSection = ({ className, dark, children }: Props) => {
  return (
    <StyledIllustratedSection className={className}>
      <div className="main">{children}</div>
    </StyledIllustratedSection>
  )
}

IllustrationSection.defaultProps = DefaultProps

IllustrationSection.Illustration = StyledIllustration
IllustrationSection.Title = StyledTitle
IllustrationSection.Subtitle = StyledSubtitle
IllustrationSection.Emphasis = StyledEmphasis
IllustrationSection.Content = StyledContent

export default IllustrationSection
