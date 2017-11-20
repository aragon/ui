/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'

import { BreakPoint, breakpoint, Section, theme, themeDark } from '../..'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledIllustratedSection = styled(Section)`
  padding: 120px 15px 120px;
  .main {
    display: block;
    align-items: center;
    ${large('display: flex')};
  }
  .text {
    margin-top: 20px;
    ${medium(`
      display: flex;
      margin-top: 40px;
    `)};
    ${large(`
      display: block;
      margin-top: 0;
    `)};
  }
`

const StyledIllustration = styled.div`
  margin-top: 40px;
  img {
    display: block;
    margin: 0 auto;
    max-width: calc(100% - 30px);
  }
  ${large(`
    flex-shrink: 0;
    width: calc(40% + 150px);
    margin-left: 50px;
    margin-right: -100px;
    margin-top: 0;
    padding: 0 70px;
    &:first-child {
      margin-left: -100px;
      margin-right: 50px;
    }
    img {
      width: 100%;
      margin: 0;
    }
  `)};
`

const StyledTitle = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.accent};
  ${medium(`
    font-size: 18px;
  `)};
  ${large(`
    text-align: left;
  `)};
`

const StyledSubtitle = styled.div`
  font-size: 25px;
  font-weight: 200;
  line-height: 1.3;
  text-align: center;
  color: ${({ dark }) => (dark ? 'white' : 'black')};
  ${medium(`
    font-size: 37px;
  `)};
  ${large(`
    text-align: left;
  `)};
`

const StyledEmphasis = styled.div`
  margin: 0 0 30px;
  padding-left: 30px;
  font-size: 18px;
  border-left: 4px solid ${theme.accent};
  color: ${({ dark }) => (dark ? 'white' : 'black')};
  ${medium(`
    margin: 0 30px 40px 0;
    font-size: 19px;
  `)};
  ${large(`
    margin: 40px 0;
  `)};
`

const StyledContent = styled.div`
  font-size: 17px;
  color: ${({ dark }) => (dark ? themeDark.textSecondary : 'black')};
  ${medium(`
    font-size: 18px;
  `)};
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

const childrenComponents = {
  Illustration: StyledIllustration,
  Title: StyledTitle,
  Subtitle: StyledSubtitle,
  Emphasis: StyledEmphasis,
  Content: StyledContent,
}

const IllustrationSection = ({ className, dark, children }: Props) => {
  // Collect the elements
  const elts = React.Children.toArray(children).reduce(
    // Fill the .elt property for existing children
    (elts, elt, i) => {
      const name = elt.type.___typeName
      if (!elts[name]) return elts
      elts[name].elt = elt
      if (name === 'Illustration') {
        elts[name].first = i === 0
      }
      return elts
    },

    // Fill the initial elts object with { elt: null } entries
    Object.keys(childrenComponents).reduce((elts, name) => {
      elts[name] = { elt: null }
      return elts
    }, {})
  )

  const {
    Illustration: illustration,
    Title: title,
    Subtitle: subtitle,
    Emphasis: emphasis,
    Content: content,
  } = elts

  return (
    <StyledIllustratedSection className={className}>
      <BreakPoint to="large">
        <div className="main">
          {title.elt}
          {subtitle.elt}
          {illustration.elt}
          <div className="text">
            {emphasis.elt}
            {content.elt}
          </div>
        </div>
      </BreakPoint>
      <BreakPoint from="large">
        <div className="main">
          {illustration.first && illustration.elt}
          <div className="text">
            {title.elt}
            {subtitle.elt}
            {emphasis.elt}
            {content.elt}
          </div>
          {!illustration.first && illustration.elt}
        </div>
      </BreakPoint>
    </StyledIllustratedSection>
  )
}

IllustrationSection.defaultProps = DefaultProps

Object.entries(childrenComponents).forEach(([name, comp]) => {
  // Expose the child component
  IllustrationSection[name] = comp

  // It is the simplest way to circumvent the react-hot-loader proxy wrapper.
  // See https://github.com/gaearon/react-hot-loader/issues/304
  comp.___typeName = name
})

export default IllustrationSection
