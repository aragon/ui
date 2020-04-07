import React, { useState } from 'react'
import { Details, GU, Info, SidePanel } from '@aragon/ui'

function App() {
  return (
    <SidePanel title="Details demo">
      <div
        css={`
          height: ${3 * GU}px;
        `}
      />
      <Info>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Info>
      <Details label="More details">
        <Info mode="warning">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Info>
      </Details>
    </SidePanel>
  )
}

export default App
