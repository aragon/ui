import React, { useEffect, useState } from 'react'
import { Pagination, Header, Box, Layout, GU } from '../../'
import { Center } from '../components/Center'

function PaginationDemo({ initial = 0, pages }) {
  const [selected, setSelected] = useState(initial)

  return (
    <Box>
      <Pagination pages={pages} selected={selected} onChange={setSelected} />
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

      <PaginationDemo pages={10} initial={5} />
      <PaginationDemo pages={1} initial={0} />
      <PaginationDemo pages={2} initial={0} />
      <PaginationDemo pages={3} initial={0} />
      <PaginationDemo pages={4} initial={0} />
      <PaginationDemo pages={5} initial={0} />
      <PaginationDemo pages={6} initial={0} />
    </div>
  )
}
