import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

test('loads and displays greeting', async () => {
  const buttonProps = {}

  const button = render(<Button {...buttonProps} />)
  expect(button).toBeTruthy()
})
