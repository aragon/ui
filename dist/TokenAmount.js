'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-2243b0d5.js');
var web3 = require('./web3-e13b67d7.js');
var Theme = require('./Theme.js');
var useImageExists = require('./useImageExists.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
const TRUST_WALLET_BASE_URL = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum';
const ETHEREUM_DATA = {
    name: 'Ethereum',
    symbol: 'ETH'
};
function tokenDataUrl(address) {
    return `https://raw.githubusercontent.com/ethereum-lists/tokens/master/tokens/eth/${address}.json`;
}
async function fetchTokenData(address) {
    if (address === EMPTY_ADDRESS) {
        return ETHEREUM_DATA;
    }
    try {
        address = toChecksumAddress(address.trim());
    } catch (err) {
        throw new Error(`Invalid address: ${address}`);
    }
    try {
        const response = await fetch(tokenDataUrl(address));
        if (!response.ok) {
            throw new Error('Wrong HTTP status');
        }
        return response.json();
    } catch (err) {
        throw err;
    }
}
/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @return {string|null} The generated URL, or null if the address is invalid.
 */
function tokenIconUrl(address = '') {
    try {
        address = toChecksumAddress(address.trim());
    } catch (err) {
        return null;
    }
    if (address === EMPTY_ADDRESS) {
        return `${TRUST_WALLET_BASE_URL}/info/logo.png`;
    }
    return `${TRUST_WALLET_BASE_URL}/assets/${address}/logo.png`;
}
/**
 * Converts to a checksum address
 *
 * This function is taken from web3-utils:
 * https://github.com/ethereum/web3.js/blob/22df832303e349f8ae02f0392e56abe10e1dfaac/packages/web3-utils/src/index.js#L287-L315
 * And was adapted to use js-sha3 rather than soliditySha3.js from web3.js, in
 * order to avoid adding the BN.js and underscore dependencies.
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */
function toChecksumAddress(address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        throw new Error('Given address "' + address + '" is not a valid Ethereum address.');
    }
    address = address.toLowerCase().replace(/^0x/i, '');
    const addressHash = web3.sha3.keccak_256(address).replace(/^0x/i, '');
    let checksumAddress = '0x';
    for(let i = 0; i < address.length; i++){
        // If ith character is 9 to f then make it uppercase
        if (parseInt(addressHash[i], 16) > 7) {
            checksumAddress += address[i].toUpperCase();
        } else {
            checksumAddress += address[i];
        }
    }
    return checksumAddress;
}

const UseTokenContext = React__default["default"].createContext(null);
function useToken(address = '') {
    const tokenContext = React.useContext(UseTokenContext);
    const [tokenData, setTokenData] = React.useState(null);
    if (tokenContext === null) {
        throw new Error('useToken() can only be used inside of <UseTokenProvider />, ' + 'please declare it at a higher level.');
    }
    React.useEffect(()=>{
        let cancelled = false;
        const update = async ()=>{
            const data = await tokenContext.fetchTokenData(address);
            if (!cancelled) {
                setTokenData(data);
            }
        };
        update();
        return ()=>{
            cancelled = true;
        };
    }, [address]);
    return {
        iconUrl: tokenIconUrl(address),
        symbol: tokenData && tokenData.symbol,
        name: tokenData && tokenData.name
    };
}
function UseTokenProvider({ children  }) {
    const tokens = React.useRef(new Map());
    const fetchAndCacheTokenData = React.useCallback(async (address)=>{
        if (tokens.current.has(address)) {
            return tokens.current.get(address);
        }
        try {
            const tokenData = await fetchTokenData(address);
            tokens.current.set(address, tokenData);
            return tokenData;
        } catch (err) {
            console.log('ar', err);
        }
    }, []);
    return React__default["default"].createElement(UseTokenContext.Provider, {
        value: {
            fetchTokenData: fetchAndCacheTokenData
        }
    }, children);
}

function t(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}function e(t,e,i){var n=e.get(t);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(t,i);else {if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=i;}return i}class i extends Array{constructor(t,e){if(t>i.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");super(t),this.sign=e;}static BigInt(t){var e=Math.floor,n=Number.isFinite;if("number"==typeof t){if(0===t)return i.__zero();if((0|t)===t)return 0>t?i.__oneDigit(-t,!0):i.__oneDigit(t,!1);if(!n(t)||e(t)!==t)throw new RangeError("The number "+t+" cannot be converted to BigInt because it is not an integer");return i.__fromDouble(t)}if("string"==typeof t){const e=i.__fromString(t);if(null===e)throw new SyntaxError("Cannot convert "+t+" to a BigInt");return e}if("boolean"==typeof t)return !0===t?i.__oneDigit(1,!1):i.__zero();if("object"==typeof t){if(t.constructor===i)return t;const e=i.__toPrimitive(t);return i.BigInt(e)}throw new TypeError("Cannot convert "+t+" to a BigInt")}toDebugString(){const t=["BigInt["];for(const e of this)t.push((e?(e>>>0).toString(16):e)+", ");return t.push("]"),t.join("")}toString(t=10){if(2>t||36<t)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(t&t-1)?i.__toStringBasePowerOfTwo(this,t):i.__toStringGeneric(this,t,!1)}static toNumber(t){var e=Math.clz32;const n=t.length;if(0===n)return 0;if(1===n){const e=t.__unsignedDigit(0);return t.sign?-e:e}const r=t.__digit(n-1),_=e(r),o=32*n-_;if(1024<o)return t.sign?-1/0:1/0;let s=o-1,l=r,g=n-1;const u=_+1;let a=32===u?0:l<<u;a>>>=12;const f=u-12;let c=12<=u?0:l<<20+u,h=20+u;0<f&&0<g&&(g--,l=t.__digit(g),a|=l>>>32-f,c=l<<f,h=f),0<h&&0<g&&(g--,l=t.__digit(g),c|=l>>>32-h,h-=32);const d=i.__decideRounding(t,h,g,l);if((1===d||0===d&&1==(1&c))&&(c=c+1>>>0,0===c&&(a++,0!=a>>>20&&(a=0,s++,1023<s))))return t.sign?-1/0:1/0;const b=t.sign?-2147483648:0;return s=s+1023<<20,i.__kBitConversionInts[1]=b|s|a,i.__kBitConversionInts[0]=c,i.__kBitConversionDouble[0]}static unaryMinus(t){if(0===t.length)return t;const e=t.__copy();return e.sign=!t.sign,e}static bitwiseNot(t){return t.sign?i.__absoluteSubOne(t).__trim():i.__absoluteAddOne(t,!0)}static exponentiate(t,e){if(e.sign)throw new RangeError("Exponent must be positive");if(0===e.length)return i.__oneDigit(1,!1);if(0===t.length)return t;if(1===t.length&&1===t.__digit(0))return t.sign&&0==(1&e.__digit(0))?i.unaryMinus(t):t;if(1<e.length)throw new RangeError("BigInt too big");let n=e.__unsignedDigit(0);if(1===n)return t;if(n>=i.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===t.length&&2===t.__digit(0)){const e=1+(n>>>5),r=t.sign&&0!=(1&n),_=new i(e,r);_.__initializeDigits();const o=1<<(31&n);return _.__setDigit(e-1,o),_}let r=null,_=t;for(0!=(1&n)&&(r=t),n>>=1;0!==n;n>>=1)_=i.multiply(_,_),0!=(1&n)&&(r=null===r?_:i.multiply(r,_));return r}static multiply(t,e){if(0===t.length)return t;if(0===e.length)return e;let n=t.length+e.length;32<=t.__clzmsd()+e.__clzmsd()&&n--;const r=new i(n,t.sign!==e.sign);r.__initializeDigits();for(let n=0;n<t.length;n++)i.__multiplyAccumulate(e,t.__digit(n),r,n);return r.__trim()}static divide(t,e){if(0===e.length)throw new RangeError("Division by zero");if(0>i.__absoluteCompare(t,e))return i.__zero();const n=t.sign!==e.sign,r=e.__unsignedDigit(0);let _;if(1===e.length&&65535>=r){if(1===r)return n===t.sign?t:i.unaryMinus(t);_=i.__absoluteDivSmall(t,r,null);}else _=i.__absoluteDivLarge(t,e,!0,!1);return _.sign=n,_.__trim()}static remainder(t,e){if(0===e.length)throw new RangeError("Division by zero");if(0>i.__absoluteCompare(t,e))return t;const n=e.__unsignedDigit(0);if(1===e.length&&65535>=n){if(1===n)return i.__zero();const e=i.__absoluteModSmall(t,n);return 0===e?i.__zero():i.__oneDigit(e,t.sign)}const r=i.__absoluteDivLarge(t,e,!1,!0);return r.sign=t.sign,r.__trim()}static add(t,e){const n=t.sign;return n===e.sign?i.__absoluteAdd(t,e,n):0<=i.__absoluteCompare(t,e)?i.__absoluteSub(t,e,n):i.__absoluteSub(e,t,!n)}static subtract(t,e){const n=t.sign;return n===e.sign?0<=i.__absoluteCompare(t,e)?i.__absoluteSub(t,e,n):i.__absoluteSub(e,t,!n):i.__absoluteAdd(t,e,n)}static leftShift(t,e){return 0===e.length||0===t.length?t:e.sign?i.__rightShiftByAbsolute(t,e):i.__leftShiftByAbsolute(t,e)}static signedRightShift(t,e){return 0===e.length||0===t.length?t:e.sign?i.__leftShiftByAbsolute(t,e):i.__rightShiftByAbsolute(t,e)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(t,e){return 0>i.__compareToBigInt(t,e)}static lessThanOrEqual(t,e){return 0>=i.__compareToBigInt(t,e)}static greaterThan(t,e){return 0<i.__compareToBigInt(t,e)}static greaterThanOrEqual(t,e){return 0<=i.__compareToBigInt(t,e)}static equal(t,e){if(t.sign!==e.sign)return !1;if(t.length!==e.length)return !1;for(let i=0;i<t.length;i++)if(t.__digit(i)!==e.__digit(i))return !1;return !0}static notEqual(t,e){return !i.equal(t,e)}static bitwiseAnd(t,e){var n=Math.max;if(!t.sign&&!e.sign)return i.__absoluteAnd(t,e).__trim();if(t.sign&&e.sign){const r=n(t.length,e.length)+1;let _=i.__absoluteSubOne(t,r);const o=i.__absoluteSubOne(e);return _=i.__absoluteOr(_,o,_),i.__absoluteAddOne(_,!0,_).__trim()}return t.sign&&([t,e]=[e,t]),i.__absoluteAndNot(t,i.__absoluteSubOne(e)).__trim()}static bitwiseXor(t,e){var n=Math.max;if(!t.sign&&!e.sign)return i.__absoluteXor(t,e).__trim();if(t.sign&&e.sign){const r=n(t.length,e.length),_=i.__absoluteSubOne(t,r),o=i.__absoluteSubOne(e);return i.__absoluteXor(_,o,_).__trim()}const r=n(t.length,e.length)+1;t.sign&&([t,e]=[e,t]);let _=i.__absoluteSubOne(e,r);return _=i.__absoluteXor(_,t,_),i.__absoluteAddOne(_,!0,_).__trim()}static bitwiseOr(t,e){const n=(0, Math.max)(t.length,e.length);if(!t.sign&&!e.sign)return i.__absoluteOr(t,e).__trim();if(t.sign&&e.sign){let r=i.__absoluteSubOne(t,n);const _=i.__absoluteSubOne(e);return r=i.__absoluteAnd(r,_,r),i.__absoluteAddOne(r,!0,r).__trim()}t.sign&&([t,e]=[e,t]);let r=i.__absoluteSubOne(e,n);return r=i.__absoluteAndNot(r,t,r),i.__absoluteAddOne(r,!0,r).__trim()}static asIntN(t,e){if(0===e.length)return e;if(0===t)return i.__zero();if(t>=i.__kMaxLengthBits)return e;const n=t+31>>>5;if(e.length<n)return e;const r=e.__unsignedDigit(n-1),_=1<<(31&t-1);if(e.length===n&&r<_)return e;if((r&_)!==_)return i.__truncateToNBits(t,e);if(!e.sign)return i.__truncateAndSubFromPowerOfTwo(t,e,!0);if(0==(r&_-1)){for(let r=n-2;0<=r;r--)if(0!==e.__digit(r))return i.__truncateAndSubFromPowerOfTwo(t,e,!1);return e.length===n&&r===_?e:i.__truncateToNBits(t,e)}return i.__truncateAndSubFromPowerOfTwo(t,e,!1)}static asUintN(t,e){if(0===e.length)return e;if(0===t)return i.__zero();if(e.sign){if(t>i.__kMaxLengthBits)throw new RangeError("BigInt too big");return i.__truncateAndSubFromPowerOfTwo(t,e,!1)}if(t>=i.__kMaxLengthBits)return e;const n=t+31>>>5;if(e.length<n)return e;const r=31&t;if(e.length==n){if(0===r)return e;if(0==e.__digit(n-1)>>>r)return e}return i.__truncateToNBits(t,e)}static ADD(t,e){if(t=i.__toPrimitive(t),e=i.__toPrimitive(e),"string"==typeof t)return "string"!=typeof e&&(e=e.toString()),t+e;if("string"==typeof e)return t.toString()+e;if(t=i.__toNumeric(t),e=i.__toNumeric(e),i.__isBigInt(t)&&i.__isBigInt(e))return i.add(t,e);if("number"==typeof t&&"number"==typeof e)return t+e;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(t,e){return i.__compare(t,e,0)}static LE(t,e){return i.__compare(t,e,1)}static GT(t,e){return i.__compare(t,e,2)}static GE(t,e){return i.__compare(t,e,3)}static EQ(t,e){for(;;){if(i.__isBigInt(t))return i.__isBigInt(e)?i.equal(t,e):i.EQ(e,t);if("number"==typeof t){if(i.__isBigInt(e))return i.__equalToNumber(e,t);if("object"!=typeof e)return t==e;e=i.__toPrimitive(e);}else if("string"==typeof t){if(i.__isBigInt(e))return null!==(t=i.__fromString(t))&&i.equal(t,e);if("object"!=typeof e)return t==e;e=i.__toPrimitive(e);}else if("boolean"==typeof t){if(i.__isBigInt(e))return i.__equalToNumber(e,+t);if("object"!=typeof e)return t==e;e=i.__toPrimitive(e);}else if("symbol"==typeof t){if(i.__isBigInt(e))return !1;if("object"!=typeof e)return t==e;e=i.__toPrimitive(e);}else {if("object"!=typeof t)return t==e;if("object"==typeof e&&e.constructor!==i)return t==e;t=i.__toPrimitive(t);}}}static NE(t,e){return !i.EQ(t,e)}static __zero(){return new i(0,!1)}static __oneDigit(t,e){const n=new i(1,e);return n.__setDigit(0,t),n}__copy(){const t=new i(this.length,this.sign);for(let e=0;e<this.length;e++)t[e]=this[e];return t}__trim(){let t=this.length,e=this[t-1];for(;0===e;)t--,e=this[t-1],this.pop();return 0===t&&(this.sign=!1),this}__initializeDigits(){for(let t=0;t<this.length;t++)this[t]=0;}static __decideRounding(t,e,i,n){if(0<e)return -1;let r;if(0>e)r=-e-1;else {if(0===i)return -1;i--,n=t.__digit(i),r=31;}let _=1<<r;if(0==(n&_))return -1;if(_-=1,0!=(n&_))return 1;for(;0<i;)if(i--,0!==t.__digit(i))return 1;return 0}static __fromDouble(t){i.__kBitConversionDouble[0]=t;const e=(2047&i.__kBitConversionInts[1]>>>20)-1023,n=1+(e>>>5),r=new i(n,0>t);let _=1048575&i.__kBitConversionInts[1]|1048576,o=i.__kBitConversionInts[0];const s=31&e;let l,g=0;if(s<20){const t=20-s;g=t+32,l=_>>>t,_=_<<32-t|o>>>t,o<<=32-t;}else if(20===s)g=32,l=_,_=o;else {const t=s-20;g=32-t,l=_<<t|o>>>32-t,_=o<<t;}r.__setDigit(n-1,l);for(let t=n-2;0<=t;t--)0<g?(g-=32,l=_,_=o):l=0,r.__setDigit(t,l);return r.__trim()}static __isWhitespace(t){return !!(13>=t&&9<=t)||(159>=t?32==t:131071>=t?160==t||5760==t:196607>=t?10>=(t&=131071)||40==t||41==t||47==t||95==t||4096==t:65279==t)}static __fromString(t,e=0){let n=0;const r=t.length;let _=0;if(_===r)return i.__zero();let o=t.charCodeAt(_);for(;i.__isWhitespace(o);){if(++_===r)return i.__zero();o=t.charCodeAt(_);}if(43===o){if(++_===r)return null;o=t.charCodeAt(_),n=1;}else if(45===o){if(++_===r)return null;o=t.charCodeAt(_),n=-1;}if(0===e){if(e=10,48===o){if(++_===r)return i.__zero();if(o=t.charCodeAt(_),88===o||120===o){if(e=16,++_===r)return null;o=t.charCodeAt(_);}else if(79===o||111===o){if(e=8,++_===r)return null;o=t.charCodeAt(_);}else if(66===o||98===o){if(e=2,++_===r)return null;o=t.charCodeAt(_);}}}else if(16===e&&48===o){if(++_===r)return i.__zero();if(o=t.charCodeAt(_),88===o||120===o){if(++_===r)return null;o=t.charCodeAt(_);}}for(;48===o;){if(++_===r)return i.__zero();o=t.charCodeAt(_);}const s=r-_;let l=i.__kMaxBitsPerChar[e],g=i.__kBitsPerCharTableMultiplier-1;if(s>1073741824/l)return null;const u=l*s+g>>>i.__kBitsPerCharTableShift,a=new i(u+31>>>5,!1),f=10>e?e:10,c=10<e?e-10:0;if(0==(e&e-1)){l>>=i.__kBitsPerCharTableShift;const e=[],n=[];let s=!1;do{let i=0,g=0;for(;;){let e;if(o-48>>>0<f)e=o-48;else {if(!((32|o)-97>>>0<c)){s=!0;break}e=(32|o)-87;}if(g+=l,i=i<<l|e,++_===r){s=!0;break}if(o=t.charCodeAt(_),32<g+l)break}e.push(i),n.push(g);}while(!s);i.__fillFromParts(a,e,n);}else {a.__initializeDigits();let n=!1,s=0;do{let u=0,h=1;for(;;){let i;if(o-48>>>0<f)i=o-48;else {if(!((32|o)-97>>>0<c)){n=!0;break}i=(32|o)-87;}const l=h*e;if(4294967295<l)break;if(h=l,u=u*e+i,s++,++_===r){n=!0;break}o=t.charCodeAt(_);}g=32*i.__kBitsPerCharTableMultiplier-1;const d=l*s+g>>>i.__kBitsPerCharTableShift+5;a.__inplaceMultiplyAdd(h,u,d);}while(!n)}if(_!==r){if(!i.__isWhitespace(o))return null;for(_++;_<r;_++)if(o=t.charCodeAt(_),!i.__isWhitespace(o))return null}return 0!=n&&10!==e?null:(a.sign=-1==n,a.__trim())}static __fillFromParts(t,e,i){let n=0,r=0,_=0;for(let o=e.length-1;0<=o;o--){const s=e[o],l=i[o];r|=s<<_,_+=l,32===_?(t.__setDigit(n++,r),_=0,r=0):32<_&&(t.__setDigit(n++,r),_-=32,r=s>>>l-_);}if(0!==r){if(n>=t.length)throw new Error("implementation bug");t.__setDigit(n++,r);}for(;n<t.length;n++)t.__setDigit(n,0);}static __toStringBasePowerOfTwo(t,e){var n=Math.clz32;const r=t.length;let _=e-1;_=(85&_>>>1)+(85&_),_=(51&_>>>2)+(51&_),_=(15&_>>>4)+(15&_);const o=_,s=e-1,l=t.__digit(r-1);let g=0|(32*r-n(l)+o-1)/o;if(t.sign&&g++,268435456<g)throw new Error("string too long");const u=Array(g);let a=g-1,f=0,c=0;for(let e=0;e<r-1;e++){const n=t.__digit(e),r=(f|n<<c)&s;u[a--]=i.__kConversionChars[r];const _=o-c;for(f=n>>>_,c=32-_;c>=o;)u[a--]=i.__kConversionChars[f&s],f>>>=o,c-=o;}const h=(f|l<<c)&s;for(u[a--]=i.__kConversionChars[h],f=l>>>o-c;0!==f;)u[a--]=i.__kConversionChars[f&s],f>>>=o;if(t.sign&&(u[a--]="-"),-1!=a)throw new Error("implementation bug");return u.join("")}static __toStringGeneric(t,e,n){var r=Math.clz32;const _=t.length;if(0===_)return "";if(1===_){let i=t.__unsignedDigit(0).toString(e);return !1===n&&t.sign&&(i="-"+i),i}const o=32*_-r(t.__digit(_-1)),s=i.__kMaxBitsPerChar[e]-1;let l=o*i.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;const g=l+1>>1,u=i.exponentiate(i.__oneDigit(e,!1),i.__oneDigit(g,!1));let a,f;const c=u.__unsignedDigit(0);if(1===u.length&&65535>=c){a=new i(t.length,!1),a.__initializeDigits();let n=0;for(let e=2*t.length-1;0<=e;e--){const i=n<<16|t.__halfDigit(e);a.__setHalfDigit(e,0|i/c),n=0|i%c;}f=n.toString(e);}else {const n=i.__absoluteDivLarge(t,u,!0,!0);a=n.quotient;const r=n.remainder.__trim();f=i.__toStringGeneric(r,e,!0);}a.__trim();let h=i.__toStringGeneric(a,e,!0);for(;f.length<g;)f="0"+f;return !1===n&&t.sign&&(h="-"+h),h+f}static __unequalSign(t){return t?-1:1}static __absoluteGreater(t){return t?-1:1}static __absoluteLess(t){return t?1:-1}static __compareToBigInt(t,e){const n=t.sign;if(n!==e.sign)return i.__unequalSign(n);const r=i.__absoluteCompare(t,e);return 0<r?i.__absoluteGreater(n):0>r?i.__absoluteLess(n):0}static __compareToNumber(t,e){if(!0|e){const n=t.sign,r=0>e;if(n!==r)return i.__unequalSign(n);if(0===t.length){if(r)throw new Error("implementation bug");return 0===e?0:-1}if(1<t.length)return i.__absoluteGreater(n);const _=Math.abs(e),o=t.__unsignedDigit(0);return o>_?i.__absoluteGreater(n):o<_?i.__absoluteLess(n):0}return i.__compareToDouble(t,e)}static __compareToDouble(t,e){var n=Math.clz32;if(e!=e)return e;if(e===1/0)return -1;if(e===-1/0)return 1;const r=t.sign;if(r!==0>e)return i.__unequalSign(r);if(0===e)throw new Error("implementation bug: should be handled elsewhere");if(0===t.length)return -1;i.__kBitConversionDouble[0]=e;const _=2047&i.__kBitConversionInts[1]>>>20;if(2047==_)throw new Error("implementation bug: handled elsewhere");const o=_-1023;if(0>o)return i.__absoluteGreater(r);const s=t.length;let l=t.__digit(s-1);const g=n(l),u=32*s-g,a=o+1;if(u<a)return i.__absoluteLess(r);if(u>a)return i.__absoluteGreater(r);let f=1048576|1048575&i.__kBitConversionInts[1],c=i.__kBitConversionInts[0];const h=31-g;if(h!==(u-1)%31)throw new Error("implementation bug");let d,b=0;if(20>h){const t=20-h;b=t+32,d=f>>>t,f=f<<32-t|c>>>t,c<<=32-t;}else if(20===h)b=32,d=f,f=c;else {const t=h-20;b=32-t,d=f<<t|c>>>32-t,f=c<<t;}if(l>>>=0,d>>>=0,l>d)return i.__absoluteGreater(r);if(l<d)return i.__absoluteLess(r);for(let e=s-2;0<=e;e--){0<b?(b-=32,d=f>>>0,f=c,c=0):d=0;const n=t.__unsignedDigit(e);if(n>d)return i.__absoluteGreater(r);if(n<d)return i.__absoluteLess(r)}if(0!==f||0!==c){if(0===b)throw new Error("implementation bug");return i.__absoluteLess(r)}return 0}static __equalToNumber(t,e){var n=Math.abs;return e|0===e?0===e?0===t.length:1===t.length&&t.sign===0>e&&t.__unsignedDigit(0)===n(e):0===i.__compareToDouble(t,e)}static __comparisonResultToBool(t,e){switch(e){case 0:return 0>t;case 1:return 0>=t;case 2:return 0<t;case 3:return 0<=t}throw new Error("unreachable")}static __compare(t,e,n){if(t=i.__toPrimitive(t),e=i.__toPrimitive(e),"string"==typeof t&&"string"==typeof e)switch(n){case 0:return t<e;case 1:return t<=e;case 2:return t>e;case 3:return t>=e}if(i.__isBigInt(t)&&"string"==typeof e)return null!==(e=i.__fromString(e))&&i.__comparisonResultToBool(i.__compareToBigInt(t,e),n);if("string"==typeof t&&i.__isBigInt(e))return null!==(t=i.__fromString(t))&&i.__comparisonResultToBool(i.__compareToBigInt(t,e),n);if(t=i.__toNumeric(t),e=i.__toNumeric(e),i.__isBigInt(t)){if(i.__isBigInt(e))return i.__comparisonResultToBool(i.__compareToBigInt(t,e),n);if("number"!=typeof e)throw new Error("implementation bug");return i.__comparisonResultToBool(i.__compareToNumber(t,e),n)}if("number"!=typeof t)throw new Error("implementation bug");if(i.__isBigInt(e))return i.__comparisonResultToBool(i.__compareToNumber(e,t),2^n);if("number"!=typeof e)throw new Error("implementation bug");return 0===n?t<e:1===n?t<=e:2===n?t>e:3===n?t>=e:void 0}__clzmsd(){return Math.clz32(this[this.length-1])}static __absoluteAdd(t,e,n){if(t.length<e.length)return i.__absoluteAdd(e,t,n);if(0===t.length)return t;if(0===e.length)return t.sign===n?t:i.unaryMinus(t);let r=t.length;(0===t.__clzmsd()||e.length===t.length&&0===e.__clzmsd())&&r++;const _=new i(r,n);let o=0,s=0;for(;s<e.length;s++){const i=e.__digit(s),n=t.__digit(s),r=(65535&n)+(65535&i)+o,l=(n>>>16)+(i>>>16)+(r>>>16);o=l>>>16,_.__setDigit(s,65535&r|l<<16);}for(;s<t.length;s++){const e=t.__digit(s),i=(65535&e)+o,n=(e>>>16)+(i>>>16);o=n>>>16,_.__setDigit(s,65535&i|n<<16);}return s<_.length&&_.__setDigit(s,o),_.__trim()}static __absoluteSub(t,e,n){if(0===t.length)return t;if(0===e.length)return t.sign===n?t:i.unaryMinus(t);const r=new i(t.length,n);let _=0,o=0;for(;o<e.length;o++){const i=t.__digit(o),n=e.__digit(o),s=(65535&i)-(65535&n)-_;_=1&s>>>16;const l=(i>>>16)-(n>>>16)-_;_=1&l>>>16,r.__setDigit(o,65535&s|l<<16);}for(;o<t.length;o++){const e=t.__digit(o),i=(65535&e)-_;_=1&i>>>16;const n=(e>>>16)-_;_=1&n>>>16,r.__setDigit(o,65535&i|n<<16);}return r.__trim()}static __absoluteAddOne(t,e,n=null){const r=t.length;null===n?n=new i(r,e):n.sign=e;let _=!0;for(let e,i=0;i<r;i++){if(e=t.__digit(i),_){const t=-1===e;e=0|e+1,_=t;}n.__setDigit(i,e);}return _&&n.__setDigitGrow(r,1),n}static __absoluteSubOne(t,e){const n=t.length,r=new i(e=e||n,!1);let _=!0;for(let e,i=0;i<n;i++){if(e=t.__digit(i),_){const t=0===e;e=0|e-1,_=t;}r.__setDigit(i,e);}if(_)throw new Error("implementation bug");for(let t=n;t<e;t++)r.__setDigit(t,0);return r}static __absoluteAnd(t,e,n=null){let r=t.length,_=e.length,o=_;if(r<_){o=r;const i=t,n=r;t=e,r=_,e=i,_=n;}let s=o;null===n?n=new i(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.__digit(l)&e.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteAndNot(t,e,n=null){const r=t.length,_=e.length;let o=_;r<_&&(o=r);let s=r;null===n?n=new i(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.__digit(l)&~e.__digit(l));for(;l<r;l++)n.__setDigit(l,t.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteOr(t,e,n=null){let r=t.length,_=e.length,o=_;if(r<_){o=r;const i=t,n=r;t=e,r=_,e=i,_=n;}let s=r;null===n?n=new i(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.__digit(l)|e.__digit(l));for(;l<r;l++)n.__setDigit(l,t.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteXor(t,e,n=null){let r=t.length,_=e.length,o=_;if(r<_){o=r;const i=t,n=r;t=e,r=_,e=i,_=n;}let s=r;null===n?n=new i(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.__digit(l)^e.__digit(l));for(;l<r;l++)n.__setDigit(l,t.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteCompare(t,e){const i=t.length-e.length;if(0!=i)return i;let n=t.length-1;for(;0<=n&&t.__digit(n)===e.__digit(n);)n--;return 0>n?0:t.__unsignedDigit(n)>e.__unsignedDigit(n)?1:-1}static __multiplyAccumulate(t,e,i,n){var r=Math.imul;if(0===e)return;const _=65535&e,o=e>>>16;let s=0,l=0,g=0;for(let e=0;e<t.length;e++,n++){let u=i.__digit(n),a=65535&u,f=u>>>16;const c=t.__digit(e),h=65535&c,d=c>>>16,b=r(h,_),m=r(h,o),p=r(d,_),w=r(d,o);a+=l+(65535&b),f+=g+s+(a>>>16)+(b>>>16)+(65535&m)+(65535&p),s=f>>>16,l=(m>>>16)+(p>>>16)+(65535&w)+s,s=l>>>16,l&=65535,g=w>>>16,u=65535&a|f<<16,i.__setDigit(n,u);}for(;0!=s||0!==l||0!==g;n++){let t=i.__digit(n);const e=(65535&t)+l,r=(t>>>16)+(e>>>16)+g+s;l=0,g=0,s=r>>>16,t=65535&e|r<<16,i.__setDigit(n,t);}}static __internalMultiplyAdd(t,e,i,n,r){var _=Math.imul;let o=i,s=0;for(let i=0;i<n;i++){const n=t.__digit(i),l=_(65535&n,e),g=(65535&l)+s+o;o=g>>>16;const u=_(n>>>16,e),a=(65535&u)+(l>>>16)+o;o=a>>>16,s=u>>>16,r.__setDigit(i,a<<16|65535&g);}if(r.length>n)for(r.__setDigit(n++,o+s);n<r.length;)r.__setDigit(n++,0);else if(0!==o+s)throw new Error("implementation bug")}__inplaceMultiplyAdd(t,e,i){var n=Math.imul;i>this.length&&(i=this.length);const r=65535&t,_=t>>>16;let o=0,s=65535&e,l=e>>>16;for(let t=0;t<i;t++){const e=this.__digit(t),i=65535&e,g=e>>>16,u=n(i,r),a=n(i,_),f=n(g,r),c=n(g,_),h=s+(65535&u),d=l+o+(h>>>16)+(u>>>16)+(65535&a)+(65535&f);s=(a>>>16)+(f>>>16)+(65535&c)+(d>>>16),o=s>>>16,s&=65535,l=c>>>16,this.__setDigit(t,65535&h|d<<16);}if(0!=o||0!==s||0!==l)throw new Error("implementation bug")}static __absoluteDivSmall(t,e,n){null===n&&(n=new i(t.length,!1));let r=0;for(let i,_=2*t.length-1;0<=_;_-=2){i=(r<<16|t.__halfDigit(_))>>>0;const o=0|i/e;r=0|i%e,i=(r<<16|t.__halfDigit(_-1))>>>0;const s=0|i/e;r=0|i%e,n.__setDigit(_>>>1,o<<16|s);}return n}static __absoluteModSmall(t,e){let i=0;for(let n=2*t.length-1;0<=n;n--){i=0|((i<<16|t.__halfDigit(n))>>>0)%e;}return i}static __absoluteDivLarge(t,e,n,r){var _=Math.imul;const o=e.__halfDigitLength(),s=e.length,l=t.__halfDigitLength()-o;let g=null;n&&(g=new i(l+2>>>1,!1),g.__initializeDigits());const u=new i(o+2>>>1,!1);u.__initializeDigits();const a=i.__clz16(e.__halfDigit(o-1));0<a&&(e=i.__specialLeftShift(e,a,0));const f=i.__specialLeftShift(t,a,1),c=e.__halfDigit(o-1);let h=0;for(let t,r=l;0<=r;r--){t=65535;const l=f.__halfDigit(r+o);if(l!==c){const i=(l<<16|f.__halfDigit(r+o-1))>>>0;t=0|i/c;let n=0|i%c;const s=e.__halfDigit(o-2),g=f.__halfDigit(r+o-2);for(;_(t,s)>>>0>(n<<16|g)>>>0&&(t--,n+=c,!(65535<n)););}i.__internalMultiplyAdd(e,t,0,s,u);let a=f.__inplaceSub(u,r,o+1);0!==a&&(a=f.__inplaceAdd(e,r,o),f.__setHalfDigit(r+o,f.__halfDigit(r+o)+a),t--),n&&(1&r?h=t<<16:g.__setDigit(r>>>1,h|t));}return r?(f.__inplaceRightShift(a),n?{quotient:g,remainder:f}:f):n?g:void 0}static __clz16(t){return Math.clz32(t)-16}__inplaceAdd(t,e,i){let n=0;for(let r=0;r<i;r++){const i=this.__halfDigit(e+r)+t.__halfDigit(r)+n;n=i>>>16,this.__setHalfDigit(e+r,i);}return n}__inplaceSub(t,e,i){let n=0;if(1&e){e>>=1;let r=this.__digit(e),_=65535&r,o=0;for(;o<i-1>>>1;o++){const i=t.__digit(o),s=(r>>>16)-(65535&i)-n;n=1&s>>>16,this.__setDigit(e+o,s<<16|65535&_),r=this.__digit(e+o+1),_=(65535&r)-(i>>>16)-n,n=1&_>>>16;}const s=t.__digit(o),l=(r>>>16)-(65535&s)-n;if(n=1&l>>>16,this.__setDigit(e+o,l<<16|65535&_),e+o+1>=this.length)throw new RangeError("out of bounds");0==(1&i)&&(r=this.__digit(e+o+1),_=(65535&r)-(s>>>16)-n,n=1&_>>>16,this.__setDigit(e+t.length,4294901760&r|65535&_));}else {e>>=1;let r=0;for(;r<t.length-1;r++){const i=this.__digit(e+r),_=t.__digit(r),o=(65535&i)-(65535&_)-n;n=1&o>>>16;const s=(i>>>16)-(_>>>16)-n;n=1&s>>>16,this.__setDigit(e+r,s<<16|65535&o);}const _=this.__digit(e+r),o=t.__digit(r),s=(65535&_)-(65535&o)-n;n=1&s>>>16;let l=0;0==(1&i)&&(l=(_>>>16)-(o>>>16)-n,n=1&l>>>16),this.__setDigit(e+r,l<<16|65535&s);}return n}__inplaceRightShift(t){if(0===t)return;let e=this.__digit(0)>>>t;const i=this.length-1;for(let n=0;n<i;n++){const i=this.__digit(n+1);this.__setDigit(n,i<<32-t|e),e=i>>>t;}this.__setDigit(i,e);}static __specialLeftShift(t,e,n){const r=t.length,_=new i(r+n,!1);if(0===e){for(let e=0;e<r;e++)_.__setDigit(e,t.__digit(e));return 0<n&&_.__setDigit(r,0),_}let o=0;for(let i=0;i<r;i++){const n=t.__digit(i);_.__setDigit(i,n<<e|o),o=n>>>32-e;}return 0<n&&_.__setDigit(r,o),_}static __leftShiftByAbsolute(t,e){const n=i.__toShiftAmount(e);if(0>n)throw new RangeError("BigInt too big");const r=n>>>5,_=31&n,o=t.length,s=0!==_&&0!=t.__digit(o-1)>>>32-_,l=o+r+(s?1:0),g=new i(l,t.sign);if(0===_){let e=0;for(;e<r;e++)g.__setDigit(e,0);for(;e<l;e++)g.__setDigit(e,t.__digit(e-r));}else {let e=0;for(let t=0;t<r;t++)g.__setDigit(t,0);for(let i=0;i<o;i++){const n=t.__digit(i);g.__setDigit(i+r,n<<_|e),e=n>>>32-_;}if(s)g.__setDigit(o+r,e);else if(0!==e)throw new Error("implementation bug")}return g.__trim()}static __rightShiftByAbsolute(t,e){const n=t.length,r=t.sign,_=i.__toShiftAmount(e);if(0>_)return i.__rightShiftByMaximum(r);const o=_>>>5,s=31&_;let l=n-o;if(0>=l)return i.__rightShiftByMaximum(r);let g=!1;if(r)if(0!=(t.__digit(o)&(1<<s)-1))g=!0;else for(let e=0;e<o;e++)if(0!==t.__digit(e)){g=!0;break}if(g&&0===s){0==~t.__digit(n-1)&&l++;}let u=new i(l,r);if(0===s)for(let e=o;e<n;e++)u.__setDigit(e-o,t.__digit(e));else {let e=t.__digit(o)>>>s;const i=n-o-1;for(let n=0;n<i;n++){const i=t.__digit(n+o+1);u.__setDigit(n,i<<32-s|e),e=i>>>s;}u.__setDigit(i,e);}return g&&(u=i.__absoluteAddOne(u,!0,u)),u.__trim()}static __rightShiftByMaximum(t){return t?i.__oneDigit(1,!0):i.__zero()}static __toShiftAmount(t){if(1<t.length)return -1;const e=t.__unsignedDigit(0);return e>i.__kMaxLengthBits?-1:e}static __toPrimitive(t,e="default"){if("object"!=typeof t)return t;if(t.constructor===i)return t;const n=t[Symbol.toPrimitive];if(n){const t=n(e);if("object"!=typeof t)return t;throw new TypeError("Cannot convert object to primitive value")}const r=t.valueOf;if(r){const e=r.call(t);if("object"!=typeof e)return e}const _=t.toString;if(_){const e=_.call(t);if("object"!=typeof e)return e}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(t){return i.__isBigInt(t)?t:+t}static __isBigInt(t){return "object"==typeof t&&t.constructor===i}static __truncateToNBits(t,e){const n=t+31>>>5,r=new i(n,e.sign),_=n-1;for(let t=0;t<_;t++)r.__setDigit(t,e.__digit(t));let o=e.__digit(_);if(0!=(31&t)){const e=32-(31&t);o=o<<e>>>e;}return r.__setDigit(_,o),r.__trim()}static __truncateAndSubFromPowerOfTwo(t,e,n){var r=Math.min;const _=t+31>>>5,o=new i(_,n);let s=0;const l=_-1;let g=0;for(const t=r(l,e.length);s<t;s++){const t=e.__digit(s),i=0-(65535&t)-g;g=1&i>>>16;const n=0-(t>>>16)-g;g=1&n>>>16,o.__setDigit(s,65535&i|n<<16);}for(;s<l;s++)o.__setDigit(s,0|-g);let u=l<e.length?e.__digit(l):0;const a=31&t;let f;if(0==a){const t=0-(65535&u)-g;g=1&t>>>16;f=65535&t|0-(u>>>16)-g<<16;}else {const t=32-a;u=u<<t>>>t;const e=1<<32-t,i=(65535&e)-(65535&u)-g;g=1&i>>>16;f=65535&i|(e>>>16)-(u>>>16)-g<<16,f&=e-1;}return o.__setDigit(l,f),o.__trim()}__digit(t){return this[t]}__unsignedDigit(t){return this[t]>>>0}__setDigit(t,e){this[t]=0|e;}__setDigitGrow(t,e){this[t]=0|e;}__halfDigitLength(){const t=this.length;return 65535>=this.__unsignedDigit(t-1)?2*t-1:2*t}__halfDigit(t){return 65535&this[t>>>1]>>>((1&t)<<4)}__setHalfDigit(t,e){const i=t>>>1,n=this.__digit(i),r=1&t?65535&n|e<<16:4294901760&n|65535&e;this.__setDigit(i,r);}static __digitPow(t,e){let i=1;for(;0<e;)1&e&&(i*=t),e>>>=1,t*=t;return i}}i.__kMaxLength=33554432,i.__kMaxLengthBits=i.__kMaxLength<<5,i.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],i.__kBitsPerCharTableShift=5,i.__kBitsPerCharTableMultiplier=1<<i.__kBitsPerCharTableShift,i.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],i.__kBitConversionBuffer=new ArrayBuffer(8),i.__kBitConversionDouble=new Float64Array(i.__kBitConversionBuffer),i.__kBitConversionInts=new Int32Array(i.__kBitConversionBuffer);function n(t,e,{digits:n=2,symbol:r="",displaySign:_=!1}={}){t=i.BigInt(String(t)),e=i.BigInt(String(e)),n=i.BigInt(String(n));const o=i.BigInt(0),s=i.BigInt(10);if(i.lessThan(e,o))throw new Error("formatTokenAmount(): decimals cannot be negative");if(i.lessThan(n,o))throw new Error("formatTokenAmount(): digits cannot be negative");i.lessThan(e,n)&&(n=e);const l=i.lessThan(t,o);l&&(t=i.unaryMinus(t));const g=i.equal(e,o)?t:i.BigInt((u=t,a=i.exponentiate(s,i.subtract(e,n)),u=i.BigInt(String(u)),a=i.BigInt(String(a)),i.divide(i.add(u,i.divide(a,i.BigInt(2))),a).toString()));var u,a;const f=function(t){const e=String(t),[i,n]=e.split(".");return [...i].reverse().reduce((t,e,i)=>e+(i>0&&i%3==0?",":"")+t,n?"."+n:"")}(i.divide(g,i.exponentiate(s,n))),c=String(i.remainder(g,i.exponentiate(s,n))).padStart(n,"0").replace(/0+$/,"");return [_?l?"-":"+":"",f,c?"."+c:"",r?" "+r:""].join("")}class r{constructor(t,n,{symbol:r=""}={}){l.set(this,{writable:!0,value:void 0}),g.set(this,{writable:!0,value:void 0}),u.set(this,{writable:!0,value:void 0}),e(this,l,i.BigInt(String(n))),e(this,g,i.BigInt(String(t))),e(this,u,r);}get decimals(){return i.toNumber(t(this,l))}get symbol(){return t(this,u)}get value(){return t(this,g).toString()}export(){const{decimals:t,symbol:e,value:i}=this,n={d:t,v:i};return e&&(n.s=e),JSON.stringify(n)}static import(t){let e;try{e=JSON.parse(t);}catch(t){throw new Error("TokenAmount.import(): couldn’t parse data.")}if(!e.d||!e.v)throw new Error("TokenAmount.import(): invalid data format provided.");return new r(e.v,e.d,{symbol:e.s})}format(e){return n(t(this,g),t(this,l),{symbol:t(this,u),...e})}toString(t){return this.format(t)}}var _,o,s,l=new WeakMap,g=new WeakMap,u=new WeakMap;s=n,(o="format")in(_=r)?Object.defineProperty(_,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):_[o]=s;var TokenAmountLib = r;

const TokenAmount = /*#__PURE__*/React__default["default"].memo(function TokenAmount({
  address,
  amount,
  chainId,
  decimals,
  digits,
  iconUrl,
  size,
  symbol,
  ...props
}) {
  const isValidAddress = web3.isAddress(address);

  if (!isValidAddress && !symbol) {
    throw new Error('TokenAmount: you need to provide a valid address or a symbol');
  }

  return /*#__PURE__*/React__default["default"].createElement(UseTokenProvider, null, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, props, /*#__PURE__*/React__default["default"].createElement(Icon, {
    address: address,
    chainId: chainId,
    iconUrl: iconUrl,
    size: size
  }), amount && /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css: size === 'large' ? 0.5 * constants.GU : 0.25 * constants.GU,
    $_css2: textStyles.textStyle(size === 'large' ? 'title2' : 'body2')
  }, TokenAmountLib.format(amount, decimals, {
    digits: digits
  })), /*#__PURE__*/React__default["default"].createElement(Symbol$1, {
    address: address,
    size: size,
    symbol: symbol
  })));
});

const Icon = function Icon({
  address,
  chainId,
  iconUrl,
  size
}) {
  const theme = Theme.useTheme();
  const token = useToken(chainId === 1 ? address : '');
  const {
    exists
  } = useImageExists.useImageExists(iconUrl || token.iconUrl);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css3: 3 * constants.GU,
    $_css4: 3 * constants.GU,
    $_css5: size === 'large' ? 1 * constants.GU : 0.75 * constants.GU
  }, exists ? /*#__PURE__*/React__default["default"].createElement("img", {
    alt: "",
    width: "100%",
    src: iconUrl || token.iconUrl
  }) : /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css6: theme.border
  }));
};

const Symbol$1 = function Symbol({
  address,
  size,
  symbol
}) {
  const token = useToken(address);
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css7: theme.surfaceContentSecondary,
    $_css8: textStyles.textStyle('body2'),
    $_css9: size === 'large' ? `align-self: flex-end;` : '',
    $_css10: size === 'large' ? `transform: translateY(-1px);` : ''
  }, symbol || token.symbol);
};

Icon.propTypes = {
  address: proptypes.PropTypes.string,
  chainId: proptypes.PropTypes.number,
  iconUrl: proptypes.PropTypes.string,
  size: proptypes.PropTypes.oneOf(['large', 'medium'])
};
Symbol$1.propTypes = {
  address: proptypes.PropTypes.string,
  size: proptypes.PropTypes.oneOf(['large', 'medium']),
  symbol: proptypes.PropTypes.string
};
TokenAmount.propTypes = {
  address: proptypes.PropTypes.string,
  amount: proptypes.PropTypes._bigIntish.isRequired,
  chainId: proptypes.PropTypes.number,
  decimals: proptypes.PropTypes.number.isRequired,
  digits: proptypes.PropTypes.number,
  iconUrl: proptypes.PropTypes.string,
  size: proptypes.PropTypes.oneOf(['large', 'medium']),
  symbol: proptypes.PropTypes.string
};
TokenAmount.defaultProps = {
  chainId: 1,
  digits: 2,
  size: 'medium'
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TokenAmount___StyledDiv",
  componentId: "sc-1ui2my8-0"
})(["display:flex;align-items:center;"]);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "TokenAmount___StyledSpan",
  componentId: "sc-1ui2my8-1"
})(["margin-right:", "px;", ";line-height:1;"], p => p.$_css, p => p.$_css2);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TokenAmount___StyledDiv2",
  componentId: "sc-1ui2my8-2"
})(["display:flex;width:", "px;height:", "px;margin-right:", "px;"], p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TokenAmount___StyledDiv3",
  componentId: "sc-1ui2my8-3"
})(["flex:1;border-radius:100%;border:2px solid ", ";"], p => p.$_css6);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "TokenAmount___StyledSpan2",
  componentId: "sc-1ui2my8-4"
})(["color:", ";", ";line-height:1;", " ", ""], p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10);

exports["default"] = TokenAmount;
//# sourceMappingURL=TokenAmount.js.map
