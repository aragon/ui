import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/LineChart/README.md'
import { LineChart, springs } from '@tecommons/ui'
import { config } from 'react-spring'
import Container from '../components/Page/DemoContainer'

const values = [0.28, 0.35, 0.41, 0.48, 0.59, 0.73, 0.86]
const labels = ['Jan', 'Feb', 'Mar', 'May', 'Abr', 'Jun', 'Jul', 'Aug']

const PageLineChart = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container centered>
        <LineChart
          lines={[values]}
          total={values.length + 1}
          springConfig={springs.slow}
          label={index => labels[index]}
          color={() => `#21aae7`}
        />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageLineChart
