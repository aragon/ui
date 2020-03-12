import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import { usePublicUrl } from '../../providers/PublicUrl'
import LoadingRing from '../LoadingRing/LoadingRing'
import Link from '../Link/Link'
import illustrationRedImage from './assets/empty-state-illustration-red.png'
import illustrationBlueImage from './assets/empty-state-illustration-blue.png'

function prepareDefaultStates(
  publicUrl,
  statusEmpty,
  statusLoading,
  statusEmptyFilters,
  statusEmptySearch
) {
  return {
    default: {
      illustration: publicUrl + illustrationBlueImage,
      description: statusEmpty || 'No data available.',
    },
    loading: {
      illustration: publicUrl + illustrationBlueImage,
      description: statusLoading || 'Loading data…',
    },
    'empty-filters': {
      illustration: publicUrl + illustrationRedImage,
      description:
        statusEmptyFilters ||
        'We can’t find any item matching your filter selection. ',
    },
    'empty-search': {
      illustration: publicUrl + illustrationRedImage,
      description:
        statusEmptySearch ||
        'We can’t find any item matching your search query. ',
    },
  }
}

function useEmptyStateValue(
  status,
  defaultEmptyStates,
  emptyStateConfigurator
) {
  if (!emptyStateConfigurator) {
    return defaultEmptyStates[status]
  }

  const functionMode = typeof emptyStateConfigurator === 'function'
  const customEmptyState = functionMode
    ? emptyStateConfigurator(status)
    : emptyStateConfigurator[status]

  // description shortcut for object mode with a node
  if (!functionMode && React.isValidElement(customEmptyState)) {
    return { ...defaultEmptyStates[status], description: customEmptyState }
  }

  // description shortcut for object mode with a string
  if (!functionMode && typeof customEmptyState === 'string') {
    return { ...defaultEmptyStates[status], description: customEmptyState }
  }

  // override all (illustration and text) with function mode
  if (React.isValidElement(customEmptyState)) {
    return customEmptyState
  }

  return {
    ...defaultEmptyStates[status],
    ...customEmptyState,
  }
}

function EmptyState({
  status,
  emptyStateConfigurator,
  statusEmpty,
  statusLoading,
  statusEmptyFilters,
  statusEmptySearch,
  onStatusEmptyClear,
}) {
  const publicUrl = usePublicUrl()
  const theme = useTheme()
  const defaultEmptyStates = useMemo(() => {
    return prepareDefaultStates(
      publicUrl,
      statusEmpty,
      statusLoading,
      statusEmptyFilters,
      statusEmptySearch
    )
  }, [
    publicUrl,
    statusEmpty,
    statusEmptyFilters,
    statusEmptySearch,
    statusLoading,
  ])

  const emptyState = useEmptyStateValue(
    status,
    defaultEmptyStates,
    emptyStateConfigurator
  )

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
          if (status === 'default') {
            return (
              <p
                css={`
                  ${textStyle('title2')};
                `}
              >
                {emptyState.description}
              </p>
            )
          }
          if (status === 'loading') {
            return (
              <p
                css={`
                  ${textStyle('title2')};
                  display: flex;
                  align-items: center;
                `}
              >
                <LoadingRing
                  css={`
                    margin-right: ${2 * GU}px;
                  `}
                />
                {emptyState.description}
              </p>
            )
          }
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

                <p
                  css={`
                    color: ${theme.surfaceContentSecondary};
                  `}
                >
                  {emptyState.description}
                  <Link onClick={onStatusEmptyClear}>Clear filters</Link>
                </p>
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
  emptyStateConfigurator: PropTypes.object,
  statusEmpty: PropTypes.node,
  statusLoading: PropTypes.node,
  statusEmptyFilters: PropTypes.node,
  statusEmptySearch: PropTypes.node,
  onStatusEmptyClear: PropTypes.func,
}

export default EmptyState
