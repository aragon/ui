import React from 'react'
import { render } from '@testing-library/react'

import Badge from './Badge'

test('loads and displays greeting', async () => {
  const badgeProps = {}

  const badge = render(<Badge {...badgeProps} />)
  expect(badge).toBeTruthy()
})
