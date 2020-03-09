import React from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'

function EmptyState({ status, emptyState }) {
  if (React.isValidElement(emptyState)) {
    return emptyState
  }

  return (
    <div
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={`
          width: ${31 * GU}px;
          text-align: center;
          padding: ${8 * GU}px 0;
        `}
      >
        {(() => {
          // Empty state: illustration part
          if (React.isValidElement(emptyState.illustration)) {
            return emptyState.illustration
          }
          return (
            <img
              src={emptyState.illustration}
              alt=""
              height={20 * GU}
              css={`
                margin-bottom: ${2 * GU}px;
              `}
            />
          )
        })()}

        {(() => {
          // Empty state: content part
          if (status === 'empty-filters' || status === 'empty-search') {
            return (
              <>
                <p
                  css={`
                    ${textStyle('title2')};
                    margin-top: ${2 * GU}px;
                  `}
                >
                  No results found.
                </p>
                {emptyState.description}
              </>
            )
          }
          return emptyState.description
        })()}
      </div>
    </div>
  )
}

EmptyState.propTypes = {
  status: PropTypes.oneOf([
    'default',
    'loading',
    'empty-filters',
    'empty-search',
  ]),
  emptyState: PropTypes.object,
}

export default EmptyState
