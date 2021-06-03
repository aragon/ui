import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import DataView from '../DataView/DataView'

const Accordion = React.memo(function Accordion({
  items,
  className,
  style,
  mode,
}) {
  const fields = useMemo(() => [null], [])
  const renderEntry = useCallback(([row]) => [row], [])
  const renderEntryExpansion = useCallback(
    ([_, expansion]) => <>{expansion}</>,
    []
  )

  return (
    <DataView
      className={className}
      entries={items}
      entriesPerPage={-1}
      fields={fields}
      renderEntry={renderEntry}
      renderEntryExpansion={renderEntryExpansion}
      style={style}
      mode={mode}
    />
  )
})

// className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.
Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  style: PropTypes.object,
}

export default Accordion
