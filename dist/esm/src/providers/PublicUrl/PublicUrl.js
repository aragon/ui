import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React, { useContext } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import getDisplayName from '../../../node_modules/react-display-name/lib/getDisplayName.js';
import { prefixUrl } from '../../utils/url.js';

const PublicUrlContext = /*#__PURE__*/React.createContext('');
const {
  Provider,
  Consumer
} = PublicUrlContext;

class PublicUrlProvider extends React.PureComponent {
  render() {
    const {
      url,
      children
    } = this.props;
    return /*#__PURE__*/React.createElement(Provider, {
      value: url
    }, children);
  }

} // HOC wrapper


_defineProperty(PublicUrlProvider, "propTypes", {
  url: PropTypes.string.isRequired,
  children: PropTypes.node
});

const hocWrap = Component => {
  const HOC = props => /*#__PURE__*/React.createElement(Consumer, null, url => /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    publicUrl: url
  })));

  HOC.displayName = `PublicUrlProvider(${getDisplayName(Component)})`;
  return HOC;
}; // styled-components utility for URLs


const styledUrl = url => ({
  publicUrl
}) => prefixUrl(url, publicUrl);

const PublicUrl = props => /*#__PURE__*/React.createElement(Consumer, props);

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return useContext(PublicUrlContext);
}

export { Provider, PublicUrl, PublicUrl as default, hocWrap, styledUrl, usePublicUrl };
//# sourceMappingURL=PublicUrl.js.map
