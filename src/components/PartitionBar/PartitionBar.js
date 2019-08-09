import React from 'react'
import PropTypes from 'prop-types'
import { warnOnce } from '../../utils'
import Distribution from '../Distribution/Distribution'

function PartitionBar({ data, caption, colors }) {
  warnOnce(
    'PartitionBar',
    'PartitionBar is deprecated. Please use the Distribution component instead.'
  )

  // name => item (renderFullLegendItem)
  const renderFullLegendItem = caption
    ? ({ item, ...props }) => caption({ name: item, ...props })
    : undefined

  // name => item (items)
  const items = data.map(({ name, percentage }) => ({ item: name, percentage }))

  return (
    <Distribution
      items={items}
      renderFullLegendItem={renderFullLegendItem}
      colors={colors}
    />
  )
}

PartitionBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.func,
}

export default PartitionBar
