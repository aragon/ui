'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
var ReactDOM = _interopDefault(require('react-dom'));
var Root = require('./Root-fd39454b.js');

var RootPortal = function RootPortal(props) {
  return /*#__PURE__*/React__default.createElement(Root.Root, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return /*#__PURE__*/ReactDOM.createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: index.propTypes.node.isRequired
};

exports.default = RootPortal;
//# sourceMappingURL=RootPortal.js.map
