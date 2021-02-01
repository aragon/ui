import React, { useEffect, useState } from 'react'
import { Pagination, Header, Box, Layout, GU } from '../../'
import { Center } from '../components/Center'

function PaginationDemo({ title, initial = 0, pages, ...props }) {
  const [selected, setSelected] = useState(initial)

  return (
    <Box heading={title}>
      <Pagination
        pages={pages}
        selected={selected}
        onChange={setSelected}
        {...props}
      />
    </Box>
  )
}

export default () => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        padding-bottom: ${3 * GU}px;
      `}
    >
      <Header primary="Pagination" />

      <PaginationDemo pages={10} initial={5} title="Normal" />
      <PaginationDemo pages={10} initial={5} touchMode title="Touch mode" />
      <PaginationDemo pages={1} initial={0} />
      <PaginationDemo pages={2} initial={0} />
      <PaginationDemo pages={3} initial={0} />
      <PaginationDemo pages={4} initial={0} />
      <PaginationDemo pages={5} initial={0} />
      <PaginationDemo pages={6} initial={0} />
      <PaginationDemo pages={7} initial={0} />
    </div>
  )
}
