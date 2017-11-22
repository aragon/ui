/* @flow */
import React from 'react'
import styled, { css } from 'styled-components'
import { Section, Button, grid, colors, themeDark, breakpoint } from '../..'
import getPublicUrl, { styledPublicUrl as asset } from '../../public-url'

import logo from './assets/logo.svg'
import bgLandscape from './assets/bg-landscape.svg'
import bgPortrait from './assets/bg-portrait.svg'

const large = css => breakpoint('large', css)

const Main = getPublicUrl(styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.Rain.Shark};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${asset(bgPortrait)});
  ${large(
    css`
      background-image: url(${asset(bgLandscape)});
    `
  )};
`)

const Container = getPublicUrl(styled(Section).attrs({ visual: true })`
  position: relative;
  z-index: 2;
  padding: 0 20px;
  color: ${themeDark.textTertiary};

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: url(${asset(logo)}) no-repeat 50% 50%;
    background-size: 140px;
    ${large(`background-size: 200px;`)};
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: ${grid(4)}px;
    min-height: 400px;
    height: 50%;
    text-align: center;
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
  .desc:last-child {
    margin-bottom: 0;
  }
  .desc a {
    color: ${themeDark.textSecondary};
  }
  .email input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border: 0;
    border-radius: 3px;
    background: #fff;
  }
  button {
    font-size: 15px;
  }

  ${large(`
    padding-top: 140px;
    padding-bottom: 140px;

    .main {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .section {
      min-height: 0;
      width: ${grid(4) + 'px'};
      justify-content: flex-start;
      text-align: left;
      padding-top: 0;
    }
    .section + .section {
      text-align: right;
      padding-bottom: 0;
    }
  `)};
`)

const PreFooter = () => (
  <Main>
    <Container>
      <div className="main">
        <section className="section">
          <h1 className="title">Join the community</h1>
          <p className="desc">
            Be part of the conversation. Create value without borders or
            intermediaries
          </p>
          <p className="email">
            <input type="email" placeholder="Enter your email" />
          </p>
        </section>
        <section className="section">
          <h1 className="title">Try Aragon now</h1>
          <p className="desc">
            Download Aragon Core<br /> or try the{' '}
            <a href="https://alpha.aragon.one">web version</a>.<br />
            <i>Outdated release, brand new one coming out Q1 2018</i>
          </p>
          <Button mode="strong">Download Aragon Core 0.3</Button>
        </section>
      </div>
    </Container>
  </Main>
)

export default PreFooter
