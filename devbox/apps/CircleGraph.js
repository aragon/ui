import React, { useCallback, useState } from 'react'
import {
  Button,
  Card,
  Checkbox,
  CircleGraph,
  Field,
  GU,
  Slider,
  lerp,
} from '@tecommons/ui'
import { Center } from '../components/Center'

const VALUES = [0, 0.5, 10, 20, 30, 40, 50, 60, 70, 98, 99, 100]
const SIZES = [10, 200]

const COLOR_START = [8, 190, 229]
const COLOR_END = [44, 198, 143]

export default function App() {
  const [value, setValue] = useState(VALUES[6])
  const [size, setSize] = useState(0.5)
  const [displaySecondary, setDisplaySecondary] = useState(false)

  return (
    <Center>
      <div
        css={`
          padding: 40px;
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 400px;
          `}
        >
          <Card
            css={`
              width: 400px;
              height: 400px;
            `}
          >
            <CircleGraph
              value={value / 100}
              size={lerp(size, SIZES[0], SIZES[1])}
              color={value =>
                `rgb(
                  ${lerp(value, COLOR_START[0], COLOR_END[0])},
                  ${lerp(value, COLOR_START[1], COLOR_END[1])},
                  ${lerp(value, COLOR_START[2], COLOR_END[2])}
                )`
              }
              label={(animValue, value) => ({
                secondary: displaySecondary
                  ? `${Math.floor(value * 10)}/10`
                  : null,
              })}
            />
          </Card>
        </div>

        <div
          css={`
            height: 20px;
          `}
        />

        <Field label="Size">
          {() => <Slider value={size} onUpdate={setSize} />}
        </Field>

        <Field label="Value">
          {() => (
            <div
              css={`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 10px;
              `}
            >
              {VALUES.map(v => (
                <Button key={v} label={`${v}%`} onClick={() => setValue(v)} />
              ))}
            </div>
          )}
        </Field>

        <Field label="Secondary label">
          {() => (
            <label
              css={`
                display: flex;
                align-items: center;
              `}
            >
              <Checkbox
                onChange={setDisplaySecondary}
                checked={displaySecondary}
              />
              <div
                css={`
                  width: ${1 * GU}px;
                `}
              />
              <div>Display secondary label</div>
            </label>
          )}
        </Field>
      </div>
    </Center>
  )
}
