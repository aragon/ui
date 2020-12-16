import React, { useState } from 'react'
import { Link } from '@tecommons/ui'
import { Center } from '../components/Center'

export default () => {
  const [clicks, setClicks] = useState(0)
  return (
    <Center>
      <div
        css={`
          width: 600px;
          & > div {
            margin-bottom: 16px;
          }
        `}
      >
        <div>
          <Link>Default link</Link>
        </div>
        <div>
          <Link href="http://example.com/">Using the href attribute</Link>
        </div>
        <div>
          <Link external>External</Link>
        </div>
        <div>
          <Link onClick={() => setClicks(v => v + 1)}>
            Using onClick ({clicks})
          </Link>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{' '}
            <Link>ullamco laboris</Link> nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </Center>
  )
}
