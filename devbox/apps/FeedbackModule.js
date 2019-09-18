import React, { useState } from 'react'
import {
  _FeedbackModule as FeedbackModule,
  _FeedbackIndicator as FeedbackIndicator,
  _FEEDBACK_STATUS as FEEDBACK_STATUS,
  Info,
  Button,
  Link,
} from '@aragon/ui'

function App() {
  const [enabled, setEnabled] = useState(true)
  return (
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        margin: 10px auto;
      `}
    >
      <div
        css={`
          background: white;
          padding: 10px;
          margin-bottom: 10px;
          width: 100%;
        `}
      >
        <h2>Feedback indicators:</h2>
        <div
          css={`
            margin-top: 10px;
            display: inline-grid;
            grid-template-columns: auto auto auto;
            grid-gap: 10px;
          `}
        >
          <FeedbackIndicator status={FEEDBACK_STATUS.SUCCESS} />
          <FeedbackIndicator status={FEEDBACK_STATUS.PENDING} />
          <FeedbackIndicator status={FEEDBACK_STATUS.ERROR} />
        </div>
      </div>
      <div
        css={`
          background: white;
          padding: 10px;
        `}
      >
        <h2>Feedback modules:</h2>
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
          `}
        >
          <FeedbackModule
            css="margin-bottom: 10px;"
            title={<strong>Vote success</strong>}
            description={
              <React.Fragment>
                You voted <strong>YES</strong> with <strong>100 TOKEN</strong>
              </React.Fragment>
            }
            footing={
              <Info>
                <div>
                  Success! Your action has been sent to the network processing.
                </div>
                <Link onClick={() => console.log('action taken')}>
                  You can take action based on succes
                </Link>
              </Info>
            }
            status={FEEDBACK_STATUS.SUCCESS}
          />
          <FeedbackModule
            css="margin: 0 10px;"
            title={<strong>Action failed!</strong>}
            footing={
              <Info>
                <div>
                  Your transaction has failed, you can repeat the process again.
                </div>
                <Link onClick={() => console.log('action taken')}>
                  You can take action based on the error
                </Link>
              </Info>
            }
            status={FEEDBACK_STATUS.ERROR}
          />
          <FeedbackModule
            title={'Waiting for signature…'}
            status={FEEDBACK_STATUS.PENDING}
          />
        </div>
      </div>
    </div>
  )
}

export default App
