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
      displayLoader: false,
      title: statusEmpty || 'No data available.',
      subtitle: null,
      illustration: publicUrl + illustrationBlueImage,
      clearLabel: null,
    },
    loading: {
      displayLoader: true,
      title: statusLoading || 'Loading data…',
      subtitle: null,
      illustration: publicUrl + illustrationBlueImage,
      clearLabel: null,
    },
    'empty-filters': {
      displayLoader: false,
      title: 'No results found.',
      subtitle:
        statusEmptyFilters ||
        'We can’t find any item matching your filter selection. ',
      illustration: publicUrl + illustrationRedImage,
      clearLabel: 'Clear filters',
    },
    'empty-search': {
      displayLoader: false,
      title: 'No results found.',
      subtitle:
        statusEmptySearch ||
        'We can’t find any item matching your search query. ',
      illustration: publicUrl + illustrationRedImage,
      clearLabel: 'Clear filters',
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

  // override all (illustration and text) with function mode
  if (
    React.isValidElement(customEmptyState) ||
    typeof customEmptyState === 'string'
  ) {
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

  if (React.isValidElement(emptyState) || typeof emptyState === 'string') {
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
          if (status === 'loading') {
            return (
              <p
                css={`
                  ${textStyle('title2')};
                  display: flex;
                  align-items: center;
                `}
              >
                {emptyState.displayLoader && (
                  <LoadingRing
                    css={`
                      margin-right: ${2 * GU}px;
                    `}
                  />
                )}
                {emptyState.title}
              </p>
            )
          }

          return (
            <>
              <p
                css={`
                  ${textStyle('title2')};
                  margin-top: ${status === 'default' ? 0 : 2 * GU}px;
                `}
              >
                {emptyState.title}
              </p>

              <p
                css={`
                  color: ${theme.surfaceContentSecondary};
                `}
              >
                {emptyState.subtitle}
                {emptyState.clearLabel && (
                  <Link onClick={onStatusEmptyClear}>
                    {emptyState.clearLabel}
                  </Link>
                )}
              </p>
            </>
          )
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
