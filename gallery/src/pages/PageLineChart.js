import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/LineChart/README.md'
import { LineChart } from '@aragon/ui'
import { config } from 'react-spring'

const values = [0.28, 0.35, 0.41, 0.48, 0.59, 0.73, 0.86, 0.999]
const labels = ['Jan', 'Feb', 'Mar', 'May', 'Abr', 'Jun', 'Jul', 'Aug']

const PageLineChart = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <div style={{ height: '300px' }}>
        <LineChart
          lines={[values]}
          springConfig={{ mass: 1, tension: 120, friction: 80 }}
          label={index => labels[index]}
          height={90}
          color={() => `#21aae7`}
        />
      </div>
    </Page.Demo>
  </Page>
)

export default PageLineChart
