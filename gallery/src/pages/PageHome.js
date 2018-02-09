import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'
import Page from 'comps/Page/Page'

import illustration1 from '../home-illustrations/1.png'
import illustration2 from '../home-illustrations/2.png'
import illustration3 from '../home-illustrations/3.png'
import illustration4 from '../home-illustrations/4.png'

const illustrations = [
  illustration1,
  illustration4,
  illustration2,
  illustration3,
]

const positions = [0, 0.5, 0.85, 1]

const PageHome = () => (
  <Page title="Aragon UI">
    <div>
      <p>
        Aragon UI allows you to develop apps that look and feel like Aragon
        apps.
      </p>
      <Illustrations>
        {illustrations.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            width="450"
            height="880"
            style={{
              zIndex: illustrations.length - i,
              left: `calc((100% - 450px) * ${positions[i]})`,
            }}
          />
        ))}
      </Illustrations>
    </div>
  </Page>
)

const Illustrations = styled.div`
  position: relative;
  max-width: calc(450px * 3);
  min-width: 450px;
  flex-shrink: 0;
  height: 880px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);
  }
`

const Illustration = styled.img`
  max-width: 80%;
  height: auto;
  border: 1px solid ${theme.accent};
  border-radius: 3px;
`

export default PageHome
