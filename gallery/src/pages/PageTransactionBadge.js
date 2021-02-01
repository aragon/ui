import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/TransactionBadge/README.md'
import { TransactionBadge } from '@tecommons/ui'

const PageTransactionBadge = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <div style={{ padding: '30px' }}>
        <TransactionBadge transaction="0x281c36aee917b24d8e5f59481f6639d81e4cf7125b09fb93a2b43c31ef3fc115" />
      </div>
      <div style={{ padding: '30px' }}>
        <TransactionBadge transaction="0x281c36aee917b24d8e5f59481f6639d81e4cf7125b09fb93a2b43c31ef3fc115" />
      </div>
      <div style={{ padding: '30px' }}>
        <TransactionBadge
          transaction="0x281c36aee917b24d8e5f59481f6639d81e4cf7125b09fb93a2b43c31ef3fc115"
          shorten={false}
        />
      </div>
      <div style={{ padding: '30px' }}>
        <TransactionBadge transaction="xxxx" />
      </div>
    </Page.Demo>
  </Page>
)

export default PageTransactionBadge
