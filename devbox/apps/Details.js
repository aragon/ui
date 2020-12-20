import React, { useState } from 'react'
import {
  Box,
  Button,
  Details,
  GU,
  Header,
  Info,
  SidePanel,
  Split,
  textStyle,
} from '@tecommons/ui'

function App() {
  const [panelOpened, setPanelOpened] = useState(false)
  return (
    <>
      <Header primary="Details" />
      <Split
        primary={
          <Box
            css={`
              display: flex;
              align-items: center;
              justify-content: center;
              height: ${50 * GU}px;
            `}
          >
            <Button
              label="Open SidePanel"
              mode="strong"
              onClick={() => setPanelOpened(true)}
            />
          </Box>
        }
        secondary={
          <Box heading="Details">
            <p
              css={`
                ${textStyle('body3')};
              `}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <Details
              label="More details"
              css={`
                margin-top: ${0 * GU}px;
              `}
            >
              <p
                css={`
                  ${textStyle('body3')};
                `}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </Details>
          </Box>
        }
      />
      <SidePanel
        title="Details demo"
        opened={panelOpened}
        onClose={() => setPanelOpened(false)}
      >
        <div
          css={`
            height: ${3 * GU}px;
          `}
        />
        <Info>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Info>
        <Details label="More details">
          <Info mode="warning">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Info>
        </Details>
      </SidePanel>
    </>
  )
}

export default App
