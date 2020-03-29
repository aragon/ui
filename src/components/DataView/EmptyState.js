import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'
import { usePublicUrl } from '../../providers/PublicUrl'
import LoadingRing from '../LoadingRing/LoadingRing'
import Link from '../Link/Link'

import illustrationRedImage from './assets/empty-state-illustration-red.png'
import illustrationBlueImage from './assets/empty-state-illustration-blue.png'

function useEmptyStateParts(status, configurator, functionMode) {
  const publicUrl = usePublicUrl()

  const defaultConfigurator = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    const Illustration = ({ path }) => (
      <img src={publicUrl + path} alt="" height={20 * GU} />
    )
    return {
      default: {
        clearLabel: 'Clear filters',
        displayLoader: false,
        illustration: <Illustration path={illustrationBlueImage} />,
        subtitle: null,
        title: 'No data available.',
      },
      loading: {
        clearLabel: 'Clear filters',
        displayLoader: true,
        illustration: <Illustration path={illustrationBlueImage} />,
        subtitle: null,
        title: 'Loading data…',
      },
      'empty-filters': {
        clearLabel: 'Clear filters',
        displayLoader: false,
        illustration: <Illustration path={illustrationRedImage} />,
        subtitle: 'We can’t find any item matching your filter selection.',
        title: 'No results found.',
      },
      'empty-search': {
        clearLabel: 'Clear filters',
        displayLoader: false,
        illustration: <Illustration path={illustrationRedImage} />,
        subtitle: 'We can’t find any item matching your search query.',
        title: 'No results found.',
      },
    }
  }, [publicUrl])

  const parts = functionMode ? {} : configurator[status]

  return {
    ...defaultConfigurator[status],
    ...parts,
  }
}

function EmptyState({ status, configurator, onStatusEmptyClear }) {
  const theme = useTheme()

  const functionMode = typeof configurator === 'function'
  const emptyState = useEmptyStateParts(status, configurator, functionMode)
  const emptyStateOverride = functionMode ? configurator(status) : null

  // Returning an element from the function mode overrides everything.
  // If `null` or a non-element is returned, the default state is used instead.
  if (React.isValidElement(emptyStateOverride)) {
    return emptyStateOverride
  }

  return (
    <section
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={`
          width: ${31 * GU}px;
          padding: ${8 * GU}px 0;
          text-align: center;
        `}
      >
        {emptyState.illustration && (
          <div
            css={`
              padding-bottom: ${2 * GU}px;
            `}
          >
            {emptyState.illustration}
          </div>
        )}

        {emptyState.title && (
          <h1
            css={`
              ${textStyle('title2')};
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            {emptyState.displayLoader && (
              <LoadingRing
                css={`
                  margin-right: ${1 * GU}px;
                `}
              />
            )}
            {emptyState.title}
          </h1>
        )}

        {emptyState.subtitle && (
          <div
            css={`
              color: ${theme.surfaceContentSecondary};
            `}
          >
            {emptyState.subtitle}{' '}
            {emptyState.clearLabel && (
              <Link onClick={onStatusEmptyClear}>{emptyState.clearLabel}</Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

EmptyState.propTypes = {
  status: PropTypes.oneOf([
    'default',
    'empty-filters',
    'empty-search',
    'loading',
  ]),
  configurator: PropTypes.object,
  onStatusEmptyClear: PropTypes.func,
}

export default EmptyState
