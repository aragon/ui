import React, { useState, useCallback } from 'react'
import { Button, Popover, Root, useTheme } from '@tecommons/ui'

const POSITIONS = [
  ['flex-start', 'flex-start'],
  ['center', 'flex-start'],
  ['flex-end', 'flex-start'],
  ['flex-start', 'center'],
  ['center', 'center'],
  ['flex-end', 'center'],
  ['flex-start', 'flex-end'],
  ['center', 'flex-end'],
  ['flex-end', 'flex-end'],
]

function App() {
  const theme = useTheme()

  const [show, setShow] = useState(false)
  const [opener, setOpener] = useState(null)
  const [position, setPosition] = useState(4)

  const handleOpenerRef = useCallback(node => {
    setOpener(node)
  }, [])

  return (
    <Root.Provider>
      <div
        css={`
          display: grid;
          height: calc(100vh - 40px);
          margin: 20px;
          border: 2px solid ${theme.border};
          justify-content: ${POSITIONS[position][0]};
          align-items: ${POSITIONS[position][1]};
        `}
      >
        <div>
          <div
            css={`
              position: absolute;
              top: ${position === 4 ? 'calc(50% - 150px)' : 'calc(50% - 50px)'};
              left: calc(50% - 50px);
              display: grid;
              width: 100px;
              height: 100px;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 1fr 1fr 1fr;
              grid-gap: 5px;
              div {
                border-radius: 3px;
                border: 2px solid hsl(200, 70%, 70%);
                cursor: pointer;
                &:active {
                  background: hsl(200, 70%, 70%);
                }
                &.active {
                  background: hsl(200, 70%, 70%);
                }
              }
            `}
            onClick={e => {
              const index = Number(e.target.dataset.index)
              if (!isNaN(index)) {
                setPosition(index)
              }
            }}
          >
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                data-index={i}
                className={i === position ? 'active' : ''}
              />
            ))}
          </div>
          <Button
            ref={handleOpenerRef}
            onClick={() => setShow(true)}
            size="small"
            mode="strong"
          >
            Open
          </Button>
          <Popover
            opener={opener}
            visible={show}
            onClose={() => setShow(false)}
          >
            <div css="padding: 50px">
              <span>hello </span>
              <Button mode="secondary" size="mini">
                focus me
              </Button>
            </div>
          </Popover>
        </div>
      </div>
    </Root.Provider>
  )
}

export default App
