import React, { useContext } from 'react';
import { P as PropTypes } from './index-097535f1.js';

const r=new Map;function a(t){return r.has(t)||r.set(t,React.createContext({inside:!1,data:null})),r.get(t)}function i({children:t,data:n,name:r}){const i=a(r);return React.createElement(i.Provider,{value:{inside:!0,data:n}},t)}function o(e){const{inside:n,data:r}=useContext(a(e));return [n,r]}i.propTypes={children:PropTypes.node,data:PropTypes.any,name:PropTypes.string.isRequired};

export { i, o };
//# sourceMappingURL=index-422d37c0.js.map
