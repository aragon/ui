import React from 'react'
import styled from 'styled-components'
import { Section, Button, colors, themeDark } from '../..'

import preFooterBackground from './assets/background.svg'

const StyledPreFooterSection = Section.StyledSectionDiv.extend`
  padding: 140px 20px;
  color: ${themeDark.textTertiary};
  background:
    ${colors.Rain.Shark} url(${preFooterBackground}) no-repeat 50% 50%;

  .main {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .section {
    width: 360px;
  }
  .section + .section {
    text-align: right;
  }
  .title {
    margin-bottom: 30px;
    color: ${themeDark.textPrimary};
    font-size: 27px;
  }
  .desc {
    font-size: 18px;
    margin-bottom: 30px;
  }
  .desc a {
    color: ${themeDark.textSecondary};
  }
`

const PreFooter = () => (
  <Section StyledComponent={StyledPreFooterSection} visual>
    <div className="main">
      <section className="section">
        <h1 className="title">Join the community</h1>
        <p className="desc">
          Be part of the conversation. Create value without borders or
          intermediaries.
        </p>
      </section>
      <section className="section">
        <h1 className="title">Try Aragon now</h1>
        <p className="desc">
          Download Aragon Alpha for macOS<br /> or try the{' '}
          <a href="">web version</a>.
        </p>
        <Button mode="strong">Download Aragon Alpha for macOS</Button>
      </section>
    </div>
  </Section>
)

export default PreFooter
