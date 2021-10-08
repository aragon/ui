import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React, { useMemo, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import DataView from '../DataView/DataView.js';

var Accordion = /*#__PURE__*/React.memo(function Accordion(_ref) {
  var items = _ref.items,
      className = _ref.className,
      style = _ref.style,
      mode = _ref.mode;
  var fields = useMemo(function () {
    return [null];
  }, []);
  var renderEntry = useCallback(function (_ref2) {
    var _ref3 = slicedToArray(_ref2, 1),
        row = _ref3[0];

    return [row];
  }, []);
  var renderEntryExpansion = useCallback(function (_ref4) {
    var _ref5 = slicedToArray(_ref4, 2);
        _ref5[0];
        var expansion = _ref5[1];

    return /*#__PURE__*/React.createElement(React.Fragment, null, expansion);
  }, []);
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
  className: propTypes.string,
  items: propTypes.arrayOf(propTypes.arrayOf(propTypes.node)).isRequired,
  style: propTypes.object,
  mode: propTypes.oneOf(['adaptive', 'table', 'list'])
};

export default Accordion;
//# sourceMappingURL=Accordion.js.map
