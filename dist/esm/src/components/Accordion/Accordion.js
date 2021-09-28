import React, { useMemo, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import DataView from '../DataView/DataView.js';

const Accordion = /*#__PURE__*/React.memo(function Accordion({
  items,
  className,
  style,
  mode
}) {
  const fields = useMemo(() => [null], []);
  const renderEntry = useCallback(([row]) => [row], []);
  const renderEntryExpansion = useCallback(([_, expansion]) => /*#__PURE__*/React.createElement(React.Fragment, null, expansion), []);
  return /*#__PURE__*/React.createElement(DataView, {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style,
    mode: mode
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  style: PropTypes.object,
  mode: PropTypes.oneOf(['adaptive', 'table', 'list'])
};

export { Accordion as default };
//# sourceMappingURL=Accordion.js.map
