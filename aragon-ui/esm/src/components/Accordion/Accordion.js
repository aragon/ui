import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useMemo, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import DataView from '../DataView/DataView.js';

var Accordion = /*#__PURE__*/React$1.memo(function Accordion(_ref) {
  var items = _ref.items,
      className = _ref.className,
      style = _ref.style;
  var fields = useMemo(function () {
    return [null];
  }, []);
  var renderEntry = useCallback(function (_ref2) {
    var _ref3 = slicedToArray$1(_ref2, 1),
        row = _ref3[0];

    return [row];
  }, []);
  var renderEntryExpansion = useCallback(function (_ref4) {
    var _ref5 = slicedToArray$1(_ref4, 2),
        _ = _ref5[0],
        expansion = _ref5[1];

    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, expansion);
  }, []);
  return /*#__PURE__*/React$1.createElement(DataView, {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: propTypes.string,
  items: propTypes.arrayOf(propTypes.arrayOf(propTypes.node)).isRequired,
  style: propTypes.object
};

export default Accordion;
//# sourceMappingURL=Accordion.js.map
