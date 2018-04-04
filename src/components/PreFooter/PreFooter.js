/* @flow */
import type { Node } from 'react'
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

const emailFormDefault = () => (
  <div>
    <h1 className="title">Aragon Newsletter</h1>
    <p className="desc">
      Follow the progress of Aragon by subscribing to our monthly newsletter
    </p>
    <p className="email">
      <input type="email" placeholder="Enter your email" />
    </p>
  </div>
)

type Props = {
  emailForm: Node,
}

const DefaultProps = {
  emailForm: emailFormDefault,
}

const PreFooter = ({ emailForm }: Props) => (
  <Main>
    <Container>
      <div className="main">
        <section className="section">{emailForm}</section>
        <section className="section">
          <h1 className="title">Aragon Core Beta</h1>
          <p className="desc">
            Try the completely updated<br /> Aragon Core v0.5 Beta
          </p>
          <a href="https://app.aragon.one/" target="_blank">
            <Button mode="strong" wide>
              Try Aragon Core 0.5
            </Button>
          </a>
        </section>
      </div>
    </Container>
  </Main>
)

PreFooter.defaultProps = DefaultProps

export default PreFooter
