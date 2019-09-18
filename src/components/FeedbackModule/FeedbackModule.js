import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, RADIUS, textStyle } from '../../style'
import { IconCheck, IconCross } from '../../icons'

const FEEDBACK_STATUS = {
  SUCCESS: Symbol('success'),
  PENDING: Symbol('pending'),
  ERROR: Symbol('error'),
}

const FeedbackModule = React.memo(function FeedbackModule({
  title,
  description,
  footing,
  status,
  ...props
}) {
  const theme = useTheme()

  return (
    <div
      css={`
        width: 360px;
      `}
      {...props}
    >
      <div
        css={`
          height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: ${theme.feedbackContent};
          background: ${theme.feedbackSurface};
          border-radius: ${RADIUS}px;
        `}
      >
        <FeedbackIndicator status={status} />
        <h1
          css={`
            margin-top: ${3.5 * GU}px;
            color: ${theme.feedbackSurfaceContent};
            ${textStyle('body2')};
          `}
        >
          {title}
        </h1>
        <p
          css={`
            margin-top: ${2 * GU}px;
            ${textStyle('body2')};
            color: ${theme.feedbackSurfaceContent};
          `}
        >
          {description}
        </p>
      </div>
      {footing && (
        <div
          css={`
            margin-top: ${3 * GU}px;
          `}
        >
          {footing}
        </div>
      )}
    </div>
  )
})

FeedbackModule.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  footing: PropTypes.node,
  status: PropTypes.oneOf(Object.values(FEEDBACK_STATUS)).isRequired,
}

const FeedbackIndicator = React.memo(function FeedbackIndicator({
  status,
  ...props
}) {
  const theme = useTheme()
  const color =
    status === FEEDBACK_STATUS.SUCCESS
      ? theme.positive
      : status === FEEDBACK_STATUS.ERROR
      ? theme.negative
      : theme.hint

  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border: 2px solid ${color};
        border-radius: 50%;
        transition: border-color 150ms ease-in-out;
      `}
      {...props}
    >
      {status === FEEDBACK_STATUS.ERROR ? (
        <IconCross
          size="medium"
          css={`
            color: ${color};
            transition: color 150ms ease-in-out;
          `}
        />
      ) : (
        <IconCheck
          size="medium"
          css={`
            color: ${color};
            transition: color 150ms ease-in-out;
          `}
        />
      )}
    </div>
  )
})

FeedbackIndicator.propTypes = {
  status: PropTypes.oneOf(Object.values(FEEDBACK_STATUS)).isRequired,
}

export { FeedbackIndicator, FeedbackModule, FEEDBACK_STATUS }
