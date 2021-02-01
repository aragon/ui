import React from 'react'
import styled from 'styled-components'
import { ButtonBase, GU, Link, textStyle, useTheme } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import env from '../environment'

function PageHome() {
  return (
    <div
      css={`
        display: grid;
        height: 100vh;
        min-height: 400px;
        max-height: 1000px;
        align-items: center;
        text-align: center;
      `}
    >
      <div>
        <Hero />
        <Badges />
      </div>
    </div>
  )
}

function Hero() {
  const theme = useTheme()
  return (
    <div
      css={`
        margin-top: -${12 * GU}px;
      `}
    >
      <div
        css={`
          margin: 0 auto;
          max-width: 800px;
          min-width: 600px;
        `}
      >
        <div
          css={`
            padding-top: 40%;
            background-blend-mode: multiply;
            background-image: url(https://user-images.githubusercontent.com/36158/68255527-bea16d00-002d-11ea-9ad7-7dc0eebd55d2.png);
            background-position: 0 0;
            background-repeat: no-repeat;
            background-size: contain;
            background-color: ${theme.background};
          `}
        />
      </div>
      <p
        css={`
          margin: calc(${-3 * GU}px - 1vw) 0 ${6 * GU}px;
          ${textStyle('title4')};
        `}
      >
        Plug and play UI elements for Aragon apps.
      </p>
    </div>
  )
}

function Badges() {
  const theme = useTheme()
  const { aragonUiVersion } = env()
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <p
        css={`
          display: grid;
          align-items: center;
          grid-auto-flow: column;
          grid-gap: ${1 * GU}px;
        `}
      >
        <Link
          href="https://github.com/aragon/aragon-ui/"
          css="text-decoration: none"
        >
          GitHub
        </Link>
        −
        <ButtonBase
          href="https://www.npmjs.com/package/@tecommons/ui"
          css="display: flex; align-items: center"
        >
          <img
            src={`https://img.shields.io/static/v1?label=npm&message=v${aragonUiVersion}&color=blue`}
            alt={`npm version: v${aragonUiVersion}`}
          />
        </ButtonBase>
        −
        <ButtonBase
          href="https://github.com/aragon/aragon-ui/"
          css="display: flex; align-items: center"
        >
          <img
            src="https://img.shields.io/github/stars/aragon/aragon-ui?label=Star&style=social"
            alt=""
          />
        </ButtonBase>
      </p>
      <p
        css={`
          margin-top: ${6 * GU}px;
        `}
      >
        <Link
          external={false}
          href="/getting-started/"
          css={`
            ${textStyle('body1')};
          `}
        >
          Get Started
        </Link>
      </p>
    </div>
  )
}

export default PageHome
