import React from 'react'
import { Box, Split, Header, Help, GU, Link } from '@tecommons/ui'

function App() {
  return (
    <div
      css={`
        padding-bottom: ${5 * GU}px;
      `}
    >
      <Header primary="Help" />

      <Split
        primary={<Box>test</Box>}
        secondary={
          <Box
            heading={
              <>
                Title <Help hint="Something">Test</Help>
              </>
            }
          >
            test
          </Box>
        }
      />

      <Help hint="Something">
        The <Link>Minimum Approval</Link> refers to the percentage of the
        minimum amount of tokens that need to vote YES for a vote to pass.
      </Help>
    </div>
  )
}

export default App
