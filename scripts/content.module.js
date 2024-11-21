/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}


/***/ }),

/***/ "./node_modules/htm/preact/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/htm/preact/index.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   h: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   html: () => (/* binding */ m),
/* harmony export */   render: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
var m=htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ k),
/* harmony export */   Fragment: () => (/* binding */ b),
/* harmony export */   cloneElement: () => (/* binding */ E),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ _),
/* harmony export */   createRef: () => (/* binding */ m),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   hydrate: () => (/* binding */ D),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ B),
/* harmony export */   toChildArray: () => (/* binding */ H)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c,s,a,h={},v=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function b(n){return n.children}function k(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function S(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!M.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(M)}function M(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));M.__r=0}function P(n,l,u,t,i,o,r,f,e,c,s){var a,p,y,d,w,_=t&&t.__k||v,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&(p=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,p,i,o,r,f,e,c,s),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||p.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=l[t])&&"boolean"!=typeof i&&"function"!=typeof i?(r=t+a,(i=n.__k[t]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(b,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(f=i.__i=L(i,u,r,s))&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:(f>r?a--:a++,i.__u|=65536))):i=n.__k[t]=null;if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,v,p,w,_,g,m,x,C,S,M,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],S=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,S):(u.__c=h=new k(m,S),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=S,h.__n=i,v=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),p=h.props,w=h.state,h.__v=u,v)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,S),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,S)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,S),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,w,_)})}if(h.context=S,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!v&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(p,w)),P(n,y(L=null!=a&&a.type===b&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:128;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e}else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(u,t,i,o,r,f,e,c,s){var a,v,p,d,_,g,m,b=i.props,k=t.props,C=t.type;if("svg"===C?r="http://www.w3.org/2000/svg":"math"===C?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=f)for(a=0;a<f.length;a++)if((_=f[a])&&"setAttribute"in _==!!C&&(C?_.localName===C:3===_.nodeType)){u=_,f[a]=null;break}if(null==u){if(null===C)return document.createTextNode(k);u=document.createElementNS(r,C,k.is&&k),c&&(l.__m&&l.__m(t,f),c=!1),f=null}if(null===C)b===k||c&&u.data===k||(u.data=k);else{if(f=f&&n.call(u.childNodes),b=i.props||h,!c&&null!=f)for(b={},a=0;a<u.attributes.length;a++)b[(_=u.attributes[a]).name]=_.value;for(a in b)if(_=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=_;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;A(u,a,null,_,r)}for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?m=_:c&&"function"!=typeof _||b[a]===_||A(u,a,_,b[a],r);if(v)c||p&&(v.__html===p.__html||v.__html===u.innerHTML)||(u.innerHTML=v.__html),t.__k=[];else if(p&&(u.innerHTML=""),P(u,y(d)?d:[d],t,i,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":r,f,e,f?f[0]:i.__k&&x(i,0),c,s),null!=f)for(a=f.length;a--;)w(f[a]);c||(a="value","progress"===C&&null==g?u.removeAttribute("value"):void 0!==g&&(g!==u[a]||"progress"===C&&!g||"option"===C&&g!==b[a])&&A(u,a,g,b[a],r),a="checked",void 0!==m&&m!==u[a]&&A(u,a,m,b[a],r))}return u}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(b,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,S(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=v.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),S(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),S(this))},k.prototype.render=b,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},M.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ q),
/* harmony export */   useContext: () => (/* binding */ x),
/* harmony export */   useDebugValue: () => (/* binding */ P),
/* harmony export */   useEffect: () => (/* binding */ y),
/* harmony export */   useErrorBoundary: () => (/* binding */ b),
/* harmony export */   useId: () => (/* binding */ g),
/* harmony export */   useImperativeHandle: () => (/* binding */ F),
/* harmony export */   useLayoutEffect: () => (/* binding */ _),
/* harmony export */   useMemo: () => (/* binding */ T),
/* harmony export */   useReducer: () => (/* binding */ p),
/* harmony export */   useRef: () => (/* binding */ A),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i))}function _(n,u){var i=d(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i))}function A(n){return o=5,T(function(){return{current:n}},[])}function F(n,t,r){o=6,_(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c.useDebugValue&&c.useDebugValue(t?t(n):n)}function b(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],c.__e(t,n.__v)}}c.__b=function(n){r=null,e&&e(n)},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t)},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),u=r=null},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],c.__e(r,n.__v)}}),l&&l(n,t)},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&c.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./src/components/App.ts":
/*!*******************************!*\
  !*** ./src/components/App.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _hooks_use_emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-emoji */ "./src/hooks/use-emoji.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.ts");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyState */ "./src/components/EmptyState.ts");
/* harmony import */ var _ErrorState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorState */ "./src/components/ErrorState.ts");
/* harmony import */ var _LoadedState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadedState */ "./src/components/LoadedState.ts");
/* harmony import */ var _types_app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/app-state */ "./src/types/app-state.ts");







const App = () => {
    const { year, emojis, stats, users, state, percentLoaded, eta, startTime, endTime, loadStats, importStats, } = (0,_hooks_use_emoji__WEBPACK_IMPORTED_MODULE_1__.useEmoji)();
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="app">
			<h2 className="app-title">Emoji Wrapped ✨</h2>
			${state === _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Initial && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader} />`}
			${[_types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Empty, _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.LoadingStats, _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.LoadingEmoji].includes(state) &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState}
				state=${state}
				percentLoaded=${percentLoaded}
				eta=${eta}
				loadStats=${loadStats}
				importStats=${importStats}
			/>`}
			${state === _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Error && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_ErrorState__WEBPACK_IMPORTED_MODULE_4__.ErrorState} />`}
			${state === _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Loaded &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_LoadedState__WEBPACK_IMPORTED_MODULE_5__.LoadedState}
				year=${year}
				emojis=${emojis}
				stats=${stats}
				users=${users}
				startTime=${startTime}
				endTime=${endTime}
				reloadStats=${() => loadStats(true)}
				importStats=${importStats}
			/>`}
		</div>
	`;
};


/***/ }),

/***/ "./src/components/Button.ts":
/*!**********************************!*\
  !*** ./src/components/Button.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonSize: () => (/* binding */ ButtonSize),
/* harmony export */   ButtonType: () => (/* binding */ ButtonType)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");


// Button types.
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Outline"] = "outline";
})(ButtonType || (ButtonType = {}));
// Button sizes.
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Small"] = "small";
    ButtonSize["Medium"] = "medium";
    ButtonSize["Large"] = "large";
})(ButtonSize || (ButtonSize = {}));
const Button = ({ type = ButtonType.Primary, size = ButtonSize.Medium, className = "", children, onClick, onFileUpload, disabled, }) => {
    const fileUploadRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onClickFileUpload = () => {
        var _a;
        (_a = fileUploadRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<button
			className="c-button c-button--${type} c-button--${size} ${disabled
        ? "c-button--disabled"
        : ""} ${className}"
			onClick=${onFileUpload ? onClickFileUpload : onClick}
			disabled=${disabled}
		>
			${children}
		</button>
		${onFileUpload &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
			<input
				ref=${(ref) => {
            fileUploadRef.current = ref;
        }}
				type="file"
				hidden
				onChange=${onFileUpload}
			/>
		`}
	`;
};


/***/ }),

/***/ "./src/components/Emoji.ts":
/*!*********************************!*\
  !*** ./src/components/Emoji.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Emoji: () => (/* binding */ Emoji)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

const Emoji = ({ name, url, count }) => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="emoji">
			<span className="emoji-name">:${name}:</span>
			<img className="emoji-img" src=${url} />
			<span className="emoji-footer">
				<span className="emoji-count">${count}</span>
				<br />
				${count === 1 ? "time" : "times"}
			</span>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/Emojis.ts":
/*!**********************************!*\
  !*** ./src/components/Emojis.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Emojis: () => (/* binding */ Emojis)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji */ "./src/components/Emoji.ts");


const Emojis = ({ emojis }) => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="emojis">
			<div className="emojis-scroll-wrapper">
				${emojis.map((emoji) => (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Emoji__WEBPACK_IMPORTED_MODULE_1__.Emoji} key=${emoji.name} ...${emoji} />`)}
			</div>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/EmptyState.ts":
/*!**************************************!*\
  !*** ./src/components/EmptyState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyState: () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.ts");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar */ "./src/components/ProgressBar.ts");
/* harmony import */ var _types_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/app-state */ "./src/types/app-state.ts");





const EmptyState = ({ state, percentLoaded, eta, loadStats, importStats, }) => {
    const isLoading = state === _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingEmoji || state === _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingStats;
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="app-empty-state">
			<p className="app-description">View a report of your top used emoji.</p>
			<div className="app-buttons">
				<${_Button__WEBPACK_IMPORTED_MODULE_1__.Button}
					className="app-button"
					onClick=${() => loadStats()}
					disabled=${isLoading}
				>
					${isLoading ? "Loading" : "Generate"}
					${isLoading && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader} size="small" />`}
				<//>
				${!isLoading &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Button__WEBPACK_IMPORTED_MODULE_1__.Button}
					className="app-button"
					type=${_Button__WEBPACK_IMPORTED_MODULE_1__.ButtonType.Outline}
					onFileUpload=${importStats}
				>
					Import JSON
				<//>`}
			</div>
			<p className="app-footer">
				${isLoading &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_ProgressBar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar}
					title=${state === _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingEmoji
            ? "(1/2) Loading emoji..."
            : "(2/2) Loading stats..."}
					percent=${percentLoaded}
				/>`}
				<i>
					This may take a while for workspaces with many emoji.
					${eta ? (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<b> ETA: ${eta}</b>` : ""}
				</i>
			</p>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/ErrorState.ts":
/*!**************************************!*\
  !*** ./src/components/ErrorState.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorState: () => (/* binding */ ErrorState)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

const ErrorState = () => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="app-error-state">
			<p className="app-error">Failed to load emoji stats 🥺</p>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/LoadedState.ts":
/*!***************************************!*\
  !*** ./src/components/LoadedState.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadedState: () => (/* binding */ LoadedState)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _Emojis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emojis */ "./src/components/Emojis.ts");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ "./src/components/Users.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.ts");
/* harmony import */ var _utilities_download_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/download-json */ "./src/utilities/download-json.ts");
/* harmony import */ var _utilities_format_time_difference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/format-time-difference */ "./src/utilities/format-time-difference.ts");
/* harmony import */ var _utilities_shuffle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/shuffle */ "./src/utilities/shuffle.ts");







const LoadedState = ({ year, emojis, stats, users, startTime, endTime, reloadStats, importStats, }) => {
    var _a, _b;
    const currentYear = new Date().getFullYear();
    const title = year === currentYear ? "This year" : `In ${year !== null && year !== void 0 ? year : currentYear}`;
    const rarestCount = (_b = (_a = stats.slice(-1)[0]) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 1;
    const rarestEmoji = (0,_utilities_shuffle__WEBPACK_IMPORTED_MODULE_6__.shuffle)(stats.filter(({ count }) => {
        return count === rarestCount;
    }));
    const topUsers = users.slice(0, 3);
    const topUsersEmoji = topUsers.flatMap(({ emoji }) => emoji);
    const topUserEmojis = Object.values(topUsersEmoji.reduce((acc, emojiName) => {
        var _a, _b, _c, _d, _e;
        if (!acc[emojiName]) {
            acc[emojiName] = {
                name: emojiName,
                url: (_b = (_a = stats.find(({ name }) => name === emojiName)) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : "",
                createdAt: (_d = (_c = stats.find(({ name }) => name === emojiName)) === null || _c === void 0 ? void 0 : _c.createdAt) !== null && _d !== void 0 ? _d : 0,
                items: [],
                count: (_e = topUsersEmoji.filter((e) => e === emojiName).length) !== null && _e !== void 0 ? _e : 0,
            };
        }
        return acc;
    }, {})).sort((a, b) => b.count - a.count);
    const emojiThisYear = stats.filter(({ createdAt = 0 }) => {
        return new Date(createdAt).getFullYear() === new Date().getFullYear();
    });
    const onReloadStats = () => {
        if (confirm("Are you sure you want to reload your Emoji Wrapped report? You'll lose your previous report, and it may take a while to pull fresh data.") === false) {
            return;
        }
        reloadStats();
    };
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="app-loaded-state">
			<h5 className="app-subtitle">${title}, you used...</h5>
			<span className="app-emoji-count">
				<h1>${stats.length}</h1>
				<i>different Slack emoji!</i>
			</span>
			<h5 className="app-subtitle">
				Some of your ⭐️⭐️⭐️⭐️⭐️ favorites were...
			</h5>
			<${_Emojis__WEBPACK_IMPORTED_MODULE_1__.Emojis} emojis=${stats.slice(0, 100)} />
			<h5 className="app-subtitle">Your most rarely used emoji 🔎</h5>
			<${_Emojis__WEBPACK_IMPORTED_MODULE_1__.Emojis} emojis=${rarestEmoji} />
			<h5 className="app-subtitle">The people you most often reacted to 👯</h5>
			<${_Users__WEBPACK_IMPORTED_MODULE_2__.Users} users=${topUsers} />
			<h5 className="app-subtitle">Your 🔝 reactions to them were...</h5>
			<${_Emojis__WEBPACK_IMPORTED_MODULE_1__.Emojis} emojis=${topUserEmojis} />
			<h5 className="app-subtitle">These new emoji caught your 👀</h5>
			<${_Emojis__WEBPACK_IMPORTED_MODULE_1__.Emojis} emojis=${emojiThisYear.slice(0, 5)} />
			<div className="app-footer">
				<p className="app-footer-text">
					Elapsed time: ${(0,_utilities_format_time_difference__WEBPACK_IMPORTED_MODULE_5__.formatTimeDifference)(startTime, endTime)}
				</p>
				<div className="app-buttons">
					<${_Button__WEBPACK_IMPORTED_MODULE_3__.Button} onClick=${onReloadStats}> Reload <//>
					<${_Button__WEBPACK_IMPORTED_MODULE_3__.Button}
						type=${_Button__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Outline}
						onClick=${() => (0,_utilities_download_json__WEBPACK_IMPORTED_MODULE_4__.downloadJSON)({ emojis, stats, startTime, endTime, year }, "emoji-wrapped.json")}
					>
						Export JSON
					<//>
					<${_Button__WEBPACK_IMPORTED_MODULE_3__.Button} type=${_Button__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Outline} onFileUpload=${importStats}>
						Import JSON
					<//>
				</div>
			</div>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/Loader.ts":
/*!**********************************!*\
  !*** ./src/components/Loader.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader),
/* harmony export */   LoaderSize: () => (/* binding */ LoaderSize)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

var LoaderSize;
(function (LoaderSize) {
    LoaderSize["Small"] = "small";
    LoaderSize["Medium"] = "medium";
    LoaderSize["Large"] = "large";
})(LoaderSize || (LoaderSize = {}));
const Loader = ({ size = LoaderSize.Medium }) => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div class="infinite_spinner infinite_spinner_${size}">
			<svg class="infinite_spinner_spinner " viewBox="0 0 100 100">
				<circle class="infinite_spinner_bg" cx="50%" cy="50%" r="35"></circle>
				<circle
					class="infinite_spinner_path infinite_spinner_blue"
					cx="50%"
					cy="50%"
					r="35"
				></circle></svg
			><svg
				class="infinite_spinner_spinner infinite_spinner_tail "
				viewBox="0 0 100 100"
			>
				<circle
					class="infinite_spinner_path infinite_spinner_blue"
					cx="50%"
					cy="50%"
					r="35"
				></circle>
			</svg>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/ProgressBar.ts":
/*!***************************************!*\
  !*** ./src/components/ProgressBar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

const ProgressBar = ({ title, percent, }) => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="progress">
			<progress className="progress-bar" value=${percent * 100} max="100">
				${percent * 100}
			</progress>
			<span className="progress-title">${title}</span>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/User.ts":
/*!********************************!*\
  !*** ./src/components/User.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _utilities_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/API */ "./src/utilities/API.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const User = ({ username, emoji }) => {
    const [url, setUrl] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const fetchProfile = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const user = yield _utilities_API__WEBPACK_IMPORTED_MODULE_2__.API.fetchProfile({ username });
            setUrl((_b = (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.image_original) !== null && _b !== void 0 ? _b : "");
        });
        fetchProfile();
    }, []);
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="user">
			<div className="user-img-wrapper">
				${url && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<img className="user-img" src=${url} />`}
				${!url && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Loader__WEBPACK_IMPORTED_MODULE_3__.Loader} />`}
			</div>
			<span className="user-footer">
				<span className="user-count">${emoji.length}</span>
				<br />
				${emoji.length === 1 ? "reaction" : "reactions"}
			</span>
		</div>
	`;
};


/***/ }),

/***/ "./src/components/Users.ts":
/*!*********************************!*\
  !*** ./src/components/Users.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Users: () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/components/User.ts");


const Users = ({ users }) => {
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="users">
			${users.map((user) => (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_User__WEBPACK_IMPORTED_MODULE_1__.User} key=${user.username} ...${user} />`)}
		</div>
	`;
};


/***/ }),

/***/ "./src/hooks/use-cached-state.ts":
/*!***************************************!*\
  !*** ./src/hooks/use-cached-state.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCachedState: () => (/* binding */ useCachedState)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _utilities_Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/Cache */ "./src/utilities/Cache.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// Custom hook to use state with caching.
function useCachedState(keyPath, defaultValue, onLoadFromCache) {
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const cachedState = yield _utilities_Cache__WEBPACK_IMPORTED_MODULE_1__.Cache.get(keyPath);
            if (cachedState) {
                setState(cachedState);
            }
            if (onLoadFromCache) {
                onLoadFromCache(cachedState);
            }
        }))();
    }, []);
    const setCachedState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        _utilities_Cache__WEBPACK_IMPORTED_MODULE_1__.Cache.set(keyPath, value);
        setState(value);
    }, []);
    return [state, setCachedState];
}


/***/ }),

/***/ "./src/hooks/use-emoji.ts":
/*!********************************!*\
  !*** ./src/hooks/use-emoji.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEmoji: () => (/* binding */ useEmoji)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _use_cached_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-cached-state */ "./src/hooks/use-cached-state.ts");
/* harmony import */ var _utilities_Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/Cache */ "./src/utilities/Cache.ts");
/* harmony import */ var _utilities_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/API */ "./src/utilities/API.ts");
/* harmony import */ var _utilities_validate_stats_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/validate-stats-json */ "./src/utilities/validate-stats-json.ts");
/* harmony import */ var _types_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/app-state */ "./src/types/app-state.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function useETA(state, defaultValue) {
    const [rate, setRate] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    const calculateETA = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((emojiRemaining) => {
        if (state !== _types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.LoadingStats)
            return undefined;
        const eta = Math.round(emojiRemaining * rate);
        const hours = Math.floor(eta / (60 * 60));
        const minutes = Math.floor((eta % (60 * 60)) / 60);
        const seconds = eta % 60;
        if (hours > 0)
            return `${hours}h ${minutes}m ${seconds}s`;
        if (minutes > 0)
            return `${minutes}m ${seconds}s`;
        return `${seconds}s`;
    }, [rate, state]);
    return [calculateETA, setRate];
}
function useEmoji() {
    const [year, setYear] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getFullYear());
    const [percentLoaded, setPercentLoaded] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Initial);
    const [calculateETA, setRate] = useETA(state, 1);
    const [emojis, setEmojis] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.Emoji, []);
    const [stats, setStats] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.Stats, [], (value) => {
        setState(value ? _types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Loaded : _types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Empty);
    });
    const [startTime, setStartTime] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.StartTime, 0);
    const [endTime, setEndTime] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.EndTime, 0);
    const users = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const map = new Map();
        stats.forEach(({ name, items = [] }) => {
            items.forEach(({ messages = [] }) => {
                messages.forEach(({ user, username }) => {
                    var _a;
                    const resultsSoFar = (_a = map.get(username)) !== null && _a !== void 0 ? _a : [];
                    map.set(username, [...resultsSoFar, name]);
                });
            });
        });
        return Array.from(map.entries())
            .map(([username, emoji]) => ({ username, emoji }))
            .sort((a, b) => b.emoji.length - a.emoji.length);
    }, [stats]);
    const loadStats = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((forced) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Get ready to load the emoji...
        setPercentLoaded(0);
        setStartTime(Date.now());
        setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.LoadingEmoji);
        // Fetch the emoji list, reading from the cache if possible.
        const updatedEmojis = !forced && emojis && emojis.length > 0
            ? emojis
            : yield _utilities_API__WEBPACK_IMPORTED_MODULE_3__.API.fetchEmojiList({ setPercentLoaded });
        if (forced || !emojis)
            setEmojis(updatedEmojis);
        setPercentLoaded(1);
        // Fetch the emoji stats, reading from the cache if possible.
        const updatedStats = !forced && stats && stats.length > 0 ? stats : [];
        try {
            if (updatedStats.length === 0) {
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.LoadingStats);
                setPercentLoaded(0);
                for (const emoji of updatedEmojis) {
                    const index = updatedEmojis.findIndex((e) => e === emoji);
                    const { count, items } = yield _utilities_API__WEBPACK_IMPORTED_MODULE_3__.API.fetchEmojiUsage({
                        year,
                        emoji: emoji.name,
                    });
                    setPercentLoaded((index + 1) / updatedEmojis.length);
                    if (count > 0) {
                        // If the emoji has an alias then we need to find the original emoji
                        const originalEmojiIndex = updatedStats.findIndex((e) => emoji.alias_for && e.name === emoji.alias_for);
                        if (originalEmojiIndex >= 0) {
                            updatedStats[originalEmojiIndex] = Object.assign(Object.assign({}, updatedStats[originalEmojiIndex]), { items: [...updatedStats[originalEmojiIndex].items, ...items], count: updatedStats[originalEmojiIndex].count + count });
                        }
                        // Default case, just add the emoji stats to the list.
                        else {
                            updatedStats.push({
                                name: emoji.name,
                                url: emoji.url,
                                createdAt: ((_a = emoji.created) !== null && _a !== void 0 ? _a : 0) * 1000,
                                items,
                                count,
                            });
                        }
                    }
                }
            }
        }
        catch (error) {
            console.error("EW: Failed to load all stats", error);
            setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Error);
        }
        finally {
            setPercentLoaded(1);
            setStats(updatedStats.sort((a, b) => b.count - a.count));
            setEndTime(Date.now());
            if (state !== _types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Error)
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Loaded);
        }
    }), [stats]);
    const importStats = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        const [file] = Array.from(event.target.files);
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = e.target.result;
            if (typeof jsonData !== "string") {
                return;
            }
            const json = (0,_utilities_validate_stats_json__WEBPACK_IMPORTED_MODULE_4__.validateStatsJSON)(jsonData);
            if (!json)
                return;
            setYear(json.year);
            setEmojis(json.emojis);
            setStats(json.stats);
            setStartTime(json.startTime);
            setEndTime(json.endTime);
            setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Loaded);
        };
        reader.readAsText(file);
    }, []);
    const eta = calculateETA(emojis.length - percentLoaded * emojis.length);
    const ref = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (state !== _types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.LoadingStats) {
            return setRate(1);
        }
        const percent = Math.floor(percentLoaded * 100);
        if (percent === 0) {
            return setRate(1);
        }
        // Approximate running every 1% of the way through the loading process.
        // Due to the large numbers we won't ever hit a perfect 1% so we'll just
        // approximate the increment.
        const percentageSet = ref.current;
        if (percentageSet.has(percent)) {
            return;
        }
        else {
            percentageSet.add(percent);
        }
        const now = Date.now();
        const secondsElapsed = (now - startTime) / 1000;
        const rate = secondsElapsed / (percentLoaded * emojis.length);
        setRate((currentRate) => (currentRate * (percent * 100) + rate) / (percent * 100 + 1));
    }, [percentLoaded, startTime, state]);
    return {
        year,
        emojis,
        stats,
        users,
        state,
        percentLoaded,
        startTime,
        endTime,
        eta,
        loadStats,
        importStats,
    };
}


/***/ }),

/***/ "./src/types/api-types.ts":
/*!********************************!*\
  !*** ./src/types/api-types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIEndpoint: () => (/* binding */ APIEndpoint)
/* harmony export */ });
var APIEndpoint;
(function (APIEndpoint) {
    APIEndpoint["EmojiList"] = "emoji.adminList";
    APIEndpoint["EmojiUsage"] = "search.modules.messages";
    APIEndpoint["Profile"] = "__profile_placeholder__";
})(APIEndpoint || (APIEndpoint = {}));


/***/ }),

/***/ "./src/types/app-state.ts":
/*!********************************!*\
  !*** ./src/types/app-state.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
// App states.
var State;
(function (State) {
    State["Initial"] = "initial";
    State["Empty"] = "empty";
    State["LoadingEmoji"] = "loading-emoji";
    State["LoadingStats"] = "loading-stats";
    State["Loaded"] = "loaded";
    State["Error"] = "error";
})(State || (State = {}));


/***/ }),

/***/ "./src/types/cache-types.ts":
/*!**********************************!*\
  !*** ./src/types/cache-types.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheKey: () => (/* binding */ CacheKey)
/* harmony export */ });
var CacheKey;
(function (CacheKey) {
    CacheKey["Emoji"] = "emojiCache2";
    CacheKey["Stats"] = "statsCache2";
    CacheKey["StartTime"] = "startTime2";
    CacheKey["EndTime"] = "endTime2";
})(CacheKey || (CacheKey = {}));


/***/ }),

/***/ "./src/utilities/API.ts":
/*!******************************!*\
  !*** ./src/utilities/API.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API: () => (/* binding */ API),
/* harmony export */   APIEndpoint: () => (/* reexport safe */ _types_api_types__WEBPACK_IMPORTED_MODULE_0__.APIEndpoint)
/* harmony export */ });
/* harmony import */ var _types_api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/api-types */ "./src/types/api-types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _API_sleep, _API_getApiToken, _API_getEnterpriseToken, _API_getTeamID, _API_getEnterpriseID, _API_createFormData, _API_post;

// API class to fetch data from Slack.
class API {
    // Recursively fetches the list of emoji from the Slack API.
    static fetchEmojiList(_b) {
        return __awaiter(this, arguments, void 0, function* ({ pageSize = 1000, page = 1, attempt = 0, setPercentLoaded, }) {
            var _c, _d;
            try {
                const { emoji, paging: { pages = 1 } = {}, error, } = (_d = (yield __classPrivateFieldGet(this, _a, "m", _API_post).call(this, _types_api_types__WEBPACK_IMPORTED_MODULE_0__.APIEndpoint.EmojiList, {
                    body: __classPrivateFieldGet(this, _a, "m", _API_createFormData).call(this, {
                        token: (_c = __classPrivateFieldGet(this, _a, "m", _API_getApiToken).call(this)) !== null && _c !== void 0 ? _c : "",
                        page,
                        count: pageSize,
                    }),
                }))) !== null && _d !== void 0 ? _d : {
                    emoji: [],
                    paging: { pages: 0 },
                    error: "No response",
                };
                if (error) {
                    throw new Error(error);
                }
                setPercentLoaded(page / pages);
                if (page === pages) {
                    return emoji;
                }
                return emoji.concat(yield this.fetchEmojiList({
                    setPercentLoaded,
                    pageSize,
                    page: page + 1,
                }));
            }
            catch (error) {
                console.error("EW: Failed to fetch emoji list", error);
                if (attempt < 3) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchEmojiList({
                        setPercentLoaded,
                        pageSize,
                        page,
                        attempt: attempt + 1,
                    });
                }
                return [];
            }
        });
    }
    // Recursively fetches the usage stats for a given emoji from the Slack API.
    static fetchEmojiUsage(_b) {
        return __awaiter(this, arguments, void 0, function* ({ year, emoji, attempt = 0, }) {
            var _c, _d;
            try {
                const { items, pagination: { total_count, pages } = {}, error, } = (_d = (yield __classPrivateFieldGet(this, _a, "m", _API_post).call(this, _types_api_types__WEBPACK_IMPORTED_MODULE_0__.APIEndpoint.EmojiUsage, {
                    body: __classPrivateFieldGet(this, _a, "m", _API_createFormData).call(this, {
                        token: (_c = __classPrivateFieldGet(this, _a, "m", _API_getApiToken).call(this)) !== null && _c !== void 0 ? _c : "",
                        query: [
                            `hasmy::${emoji}:`,
                            `after:${year}-01-01`,
                            `before:${year + 1}-01-01`,
                        ].join(" "),
                        module: "messages",
                        page: 1,
                        count: 1000,
                        no_user_profile: 1,
                        extra_message_data: 1,
                        extracts: 1,
                        max_extract_len: 200,
                        highlight: 1,
                        query_refinement_suggestions_version: 1,
                        facets_result_count: 5,
                        search_only_team: "",
                        search_only_my_channels: false,
                        search_exclude_bots: false,
                        search_context: "desktop_messages_tab",
                        include_files_shares: 1,
                        query_rewrite_disabled: false,
                        file_title_only: false,
                        spell_correction: "FUZZY_MATCH",
                        search_tab_filter: "messages",
                        search_tab_sort: "timestamp",
                        sort: "timestamp",
                        sort_dir: "desc",
                        max_filter_suggestions: 10,
                    }),
                }))) !== null && _d !== void 0 ? _d : {
                    items: [],
                    pagination: { total_count: 0, pages: 0 },
                    error: "No response",
                };
                if (error) {
                    throw new Error(error);
                }
                return {
                    items,
                    count: total_count !== null && total_count !== void 0 ? total_count : 0,
                };
            }
            catch (error) {
                console.error("EW: Failed to fetch stats", error);
                if (attempt < 3) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchEmojiUsage({
                        year,
                        emoji,
                        attempt: attempt + 1,
                    });
                }
                return { items: [], count: 0 };
            }
        });
    }
    // Fetches the profile of a given user from the Slack API.
    static fetchProfile(_b) {
        return __awaiter(this, arguments, void 0, function* ({ username, attempt = 0, }) {
            var _c, _d, _e, _f;
            try {
                const { objects, error } = (_e = (yield ((_d = (_c = window.TS) === null || _c === void 0 ? void 0 : _c.members) === null || _d === void 0 ? void 0 : _d.fetchAndUpsertMembersWithQuery({
                    query: username,
                })))) !== null && _e !== void 0 ? _e : {};
                if (error) {
                    throw new Error(error);
                }
                return (_f = objects === null || objects === void 0 ? void 0 : objects.find((user) => user.name === username)) !== null && _f !== void 0 ? _f : null;
            }
            catch (error) {
                console.error("EW: Failed to fetch profile", error);
                if (attempt < 10) {
                    yield __classPrivateFieldGet(this, _a, "m", _API_sleep).call(this, 5000 * (attempt + 1));
                    return this.fetchProfile({
                        username,
                        attempt: attempt + 1,
                    });
                }
                return null;
            }
        });
    }
}
_a = API, _API_sleep = function _API_sleep(timeout) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), timeout);
        });
    });
}, _API_getApiToken = function _API_getApiToken() {
    var _b, _c;
    return (_c = (_b = window.TS) === null || _b === void 0 ? void 0 : _b.boot_data) === null || _c === void 0 ? void 0 : _c.api_token;
}, _API_getEnterpriseToken = function _API_getEnterpriseToken() {
    var _b, _c;
    return (_c = (_b = window.TS) === null || _b === void 0 ? void 0 : _b.boot_data) === null || _c === void 0 ? void 0 : _c.enterprise_api_token;
}, _API_getTeamID = function _API_getTeamID() {
    var _b, _c;
    return (_c = (_b = window.TS) === null || _b === void 0 ? void 0 : _b.boot_data) === null || _c === void 0 ? void 0 : _c.team_id;
}, _API_getEnterpriseID = function _API_getEnterpriseID() {
    var _b, _c;
    return (_c = (_b = window.TS) === null || _b === void 0 ? void 0 : _b.boot_data) === null || _c === void 0 ? void 0 : _c.enterprise_id;
}, _API_createFormData = function _API_createFormData(params) {
    const data = new FormData();
    Object.entries(params).forEach(([key, value]) => {
        data.append(key, `${value}`);
    });
    return data;
}, _API_post = function _API_post(endpoint, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _b, _c, _d;
        const org = (_d = (_c = (_b = window.TS) === null || _b === void 0 ? void 0 : _b.model) === null || _c === void 0 ? void 0 : _c.team) === null || _d === void 0 ? void 0 : _d.domain;
        return fetch(`https://${org}.slack.com/api/${endpoint}`, Object.assign(Object.assign({}, options), { method: "POST" })).then((response) => response.json());
    });
};



/***/ }),

/***/ "./src/utilities/AsyncStorage.ts":
/*!***************************************!*\
  !*** ./src/utilities/AsyncStorage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncStorage: () => (/* binding */ AsyncStorage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AsyncStorage_instances, _AsyncStorage_dbName, _AsyncStorage_storeName, _AsyncStorage_dbPromise, _AsyncStorage_initDB, _AsyncStorage_withStore;
// IndexedDB wrapper to store and retrieve data.
class AsyncStorage {
    constructor(dbName = "AsyncStorageDB", storeName = "AsyncStorageStore") {
        _AsyncStorage_instances.add(this);
        _AsyncStorage_dbName.set(this, void 0);
        _AsyncStorage_storeName.set(this, void 0);
        _AsyncStorage_dbPromise.set(this, void 0);
        __classPrivateFieldSet(this, _AsyncStorage_dbName, dbName, "f");
        __classPrivateFieldSet(this, _AsyncStorage_storeName, storeName, "f");
        __classPrivateFieldSet(this, _AsyncStorage_dbPromise, __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_initDB).call(this), "f");
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.put(value, key));
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readonly", (store) => store.get(key));
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.delete(key));
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _AsyncStorage_instances, "m", _AsyncStorage_withStore).call(this, "readwrite", (store) => store.clear());
        });
    }
}
_AsyncStorage_dbName = new WeakMap(), _AsyncStorage_storeName = new WeakMap(), _AsyncStorage_dbPromise = new WeakMap(), _AsyncStorage_instances = new WeakSet(), _AsyncStorage_initDB = function _AsyncStorage_initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(__classPrivateFieldGet(this, _AsyncStorage_dbName, "f"), 1);
            request.onupgradeneeded = (event) => {
                var _a;
                const db = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result;
                if (!db.objectStoreNames.contains(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"))) {
                    db.createObjectStore(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"));
                }
            };
            request.onsuccess = (event) => { var _a; return resolve((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.result); };
            request.onerror = (event) => { var _a; return reject((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.error); };
        });
    });
}, _AsyncStorage_withStore = function _AsyncStorage_withStore(type, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield __classPrivateFieldGet(this, _AsyncStorage_dbPromise, "f");
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"), type);
            const store = transaction.objectStore(__classPrivateFieldGet(this, _AsyncStorage_storeName, "f"));
            const request = callback(store);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
};


/***/ }),

/***/ "./src/utilities/Cache.ts":
/*!********************************!*\
  !*** ./src/utilities/Cache.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cache: () => (/* binding */ Cache),
/* harmony export */   CacheKey: () => (/* reexport safe */ _types_cache_types__WEBPACK_IMPORTED_MODULE_1__.CacheKey)
/* harmony export */ });
/* harmony import */ var _AsyncStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncStorage */ "./src/utilities/AsyncStorage.ts");
/* harmony import */ var _types_cache_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/cache-types */ "./src/types/cache-types.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Cache_Storage;


// Cache class to store and retrieve data.
class Cache {
    static get(key) {
        return __classPrivateFieldGet(this, _a, "f", _Cache_Storage).get(key);
    }
    static set(key, value) {
        __classPrivateFieldGet(this, _a, "f", _Cache_Storage).set(key, value);
    }
}
_a = Cache;
_Cache_Storage = { value: new _AsyncStorage__WEBPACK_IMPORTED_MODULE_0__.AsyncStorage() };



/***/ }),

/***/ "./src/utilities/download-json.ts":
/*!****************************************!*\
  !*** ./src/utilities/download-json.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadJSON: () => (/* binding */ downloadJSON)
/* harmony export */ });
// Downloads a JSON file.
function downloadJSON(data, filename) {
    // Creating a blob object from non-blob data using the Blob constructor
    const blob = new Blob([JSON.stringify(data, null, "\t")], {
        type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    // Create a new anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    a.click();
    a.remove();
}


/***/ }),

/***/ "./src/utilities/format-time-difference.ts":
/*!*************************************************!*\
  !*** ./src/utilities/format-time-difference.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTimeDifference: () => (/* binding */ formatTimeDifference)
/* harmony export */ });
// Formats the time difference between two timestamps.
function formatTimeDifference(startTime, endTime) {
    const diff = Math.abs(endTime - startTime);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}


/***/ }),

/***/ "./src/utilities/shuffle.ts":
/*!**********************************!*\
  !*** ./src/utilities/shuffle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shuffle: () => (/* binding */ shuffle)
/* harmony export */ });
// Shuffles the given array, returning a new array.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


/***/ }),

/***/ "./src/utilities/validate-stats-json.ts":
/*!**********************************************!*\
  !*** ./src/utilities/validate-stats-json.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateStatsJSON: () => (/* binding */ validateStatsJSON)
/* harmony export */ });
function validateStatsJSON(jsonData) {
    try {
        const { year, emojis, stats, startTime, endTime } = JSON.parse(jsonData);
        if (typeof year !== "number") {
            throw new Error("Invalid year");
        }
        if (!Array.isArray(emojis)) {
            throw new Error("Invalid emojis data");
        }
        if (emojis.some(({ name, url, created, alias_for }) => typeof name !== "string" ||
            typeof url !== "string" ||
            typeof created !== "number" ||
            typeof alias_for !== "string")) {
            throw new Error("Invalid emoji data");
        }
        if (!Array.isArray(stats)) {
            throw new Error("Invalid stats data");
        }
        if (stats.some(({ name, url, createdAt, items, count }) => typeof name !== "string" ||
            typeof url !== "string" ||
            typeof createdAt !== "number" ||
            !Array.isArray(items) ||
            items.some(({ messages }) => !Array.isArray(messages) ||
                messages.some(({ user, username }) => typeof user !== "string" || typeof username !== "string")) ||
            typeof count !== "number")) {
            throw new Error("Invalid stat data");
        }
        if (typeof startTime !== "number") {
            throw new Error("Invalid start time");
        }
        if (typeof endTime !== "number") {
            throw new Error("Invalid end time");
        }
        return {
            year,
            emojis,
            stats,
            startTime,
            endTime,
        };
    }
    catch (error) {
        alert(`Invalid JSON data: ${error.message}`);
        return null;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.ts");



(() => {
    const root = document.createElement("div");
    (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_components_App__WEBPACK_IMPORTED_MODULE_2__.App} />`, root);
    const anchorElement = document.getElementById("list_emoji_section");
    if (!anchorElement)
        return;
    anchorElement.insertBefore(root, anchorElement.firstChild);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYztBQUNsRDtBQUNBO0FBQ0E7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFDTztBQUN2QztBQUNBO0FBQ0EsSUFBSSw4Q0FBTSxDQUFDLGdEQUFJLEtBQUssZ0RBQUcsRUFBRTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL25vZGVfbW9kdWxlcy9odG0vcHJlYWN0L2luZGV4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0FwcC50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvRW1vamlzLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9FbXB0eVN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9FcnJvclN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Mb2FkZWRTdGF0ZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvVXNlci50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvVXNlcnMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9ob29rcy91c2UtY2FjaGVkLXN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvaG9va3MvdXNlLWVtb2ppLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdHlwZXMvYXBpLXR5cGVzLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdHlwZXMvYXBwLXN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdHlwZXMvY2FjaGUtdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvQVBJLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL0FzeW5jU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9DYWNoZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9kb3dubG9hZC1qc29uLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL2Zvcm1hdC10aW1lLWRpZmZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvc2h1ZmZsZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy92YWxpZGF0ZS1zdGF0cy1qc29uLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsImltcG9ydHtoIGFzIHIsQ29tcG9uZW50IGFzIG8scmVuZGVyIGFzIHR9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2gscmVuZGVyLENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtpbXBvcnQgZSBmcm9tXCJodG1cIjt2YXIgbT1lLmJpbmQocik7ZXhwb3J0e20gYXMgaHRtbH07XG4iLCJ2YXIgbixsLHUsdCxpLG8scixmLGUsYyxzLGEsaD17fSx2PVtdLHA9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaSx5PUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gZChuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiB3KG4pe24mJm4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIF8obCx1LHQpe3ZhciBpLG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj9pPXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiBnKGwsZixpLG8sbnVsbCl9ZnVuY3Rpb24gZyhuLHQsaSxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6dCxrZXk6aSxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PXImJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBtKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gYihuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBrKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIHgobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP3gobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP3gobik6bnVsbH1mdW5jdGlvbiBDKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gQyhuKX19ZnVuY3Rpb24gUyhuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZpLnB1c2gobikmJiFNLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoTSl9ZnVuY3Rpb24gTSgpe3ZhciBuLHUsdCxvLHIsZSxjLHM7Zm9yKGkuc29ydChmKTtuPWkuc2hpZnQoKTspbi5fX2QmJih1PWkubGVuZ3RoLG89dm9pZCAwLGU9KHI9KHQ9bikuX192KS5fX2UsYz1bXSxzPVtdLHQuX19QJiYoKG89ZCh7fSxyKSkuX192PXIuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSxPKHQuX19QLG8scix0Ll9fbix0Ll9fUC5uYW1lc3BhY2VVUkksMzImci5fX3U/W2VdOm51bGwsYyxudWxsPT1lP3gocik6ZSwhISgzMiZyLl9fdSkscyksby5fX3Y9ci5fX3Ysby5fXy5fX2tbby5fX2ldPW8saihjLG8scyksby5fX2UhPWUmJkMobykpLGkubGVuZ3RoPnUmJmkuc29ydChmKSk7TS5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEscCx5LGQsdyxfPXQmJnQuX19rfHx2LGc9bC5sZW5ndGg7Zm9yKHUuX19kPWUsJCh1LGwsXyksZT11Ll9fZCxhPTA7YTxnO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihwPS0xPT09eS5fX2k/aDpfW3kuX19pXXx8aCx5Ll9faT1hLE8obix5LHAsaSxvLHIsZixlLGMscyksZD15Ll9fZSx5LnJlZiYmcC5yZWYhPXkucmVmJiYocC5yZWYmJk4ocC5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLDY1NTM2JnkuX191fHxwLl9faz09PXkuX19rP2U9SSh5LGUsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT15Ll9fZD9lPXkuX19kOmQmJihlPWQubmV4dFNpYmxpbmcpLHkuX19kPXZvaWQgMCx5Ll9fdSY9LTE5NjYwOSk7dS5fX2Q9ZSx1Ll9fZT13fWZ1bmN0aW9uICQobixsLHUpe3ZhciB0LGksbyxyLGYsZT1sLmxlbmd0aCxjPXUubGVuZ3RoLHM9YyxhPTA7Zm9yKG4uX19rPVtdLHQ9MDt0PGU7dCsrKW51bGwhPShpPWxbdF0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIGkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGk/KHI9dCthLChpPW4uX19rW3RdPVwic3RyaW5nXCI9PXR5cGVvZiBpfHxcIm51bWJlclwiPT10eXBlb2YgaXx8XCJiaWdpbnRcIj09dHlwZW9mIGl8fGkuY29uc3RydWN0b3I9PVN0cmluZz9nKG51bGwsaSxudWxsLG51bGwsbnVsbCk6eShpKT9nKGIse2NoaWxkcmVuOml9LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1pLmNvbnN0cnVjdG9yJiZpLl9fYj4wP2coaS50eXBlLGkucHJvcHMsaS5rZXksaS5yZWY/aS5yZWY6bnVsbCxpLl9fdik6aSkuX189bixpLl9fYj1uLl9fYisxLG89bnVsbCwtMSE9PShmPWkuX19pPUwoaSx1LHIscykpJiYocy0tLChvPXVbZl0pJiYoby5fX3V8PTEzMTA3MikpLG51bGw9PW98fG51bGw9PT1vLl9fdj8oLTE9PWYmJmEtLSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLnR5cGUmJihpLl9fdXw9NjU1MzYpKTpmIT09ciYmKGY9PXItMT9hLS06Zj09cisxP2ErKzooZj5yP2EtLTphKyssaS5fX3V8PTY1NTM2KSkpOmk9bi5fX2tbdF09bnVsbDtpZihzKWZvcih0PTA7dDxjO3QrKyludWxsIT0obz11W3RdKSYmMD09KDEzMTA3MiZvLl9fdSkmJihvLl9fZT09bi5fX2QmJihuLl9fZD14KG8pKSxWKG8sbykpfWZ1bmN0aW9uIEkobixsLHUpe3ZhciB0LGk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlKXtmb3IodD1uLl9fayxpPTA7dCYmaTx0Lmxlbmd0aDtpKyspdFtpXSYmKHRbaV0uX189bixsPUkodFtpXSxsLHUpKTtyZXR1cm4gbH1uLl9fZSE9bCYmKGwmJm4udHlwZSYmIXUuY29udGFpbnMobCkmJihsPXgobikpLHUuaW5zZXJ0QmVmb3JlKG4uX19lLGx8fG51bGwpLGw9bi5fX2UpO2Rve2w9bCYmbC5uZXh0U2libGluZ313aGlsZShudWxsIT1sJiY4PT09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gSChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KHkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBMKG4sbCx1LHQpe3ZhciBpPW4ua2V5LG89bi50eXBlLHI9dS0xLGY9dSsxLGU9bFt1XTtpZihudWxsPT09ZXx8ZSYmaT09ZS5rZXkmJm89PT1lLnR5cGUmJjA9PSgxMzEwNzImZS5fX3UpKXJldHVybiB1O2lmKHQ+KG51bGwhPWUmJjA9PSgxMzEwNzImZS5fX3UpPzE6MCkpZm9yKDtyPj0wfHxmPGwubGVuZ3RoOyl7aWYocj49MCl7aWYoKGU9bFtyXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gcjtyLS19aWYoZjxsLmxlbmd0aCl7aWYoKGU9bFtmXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gZjtmKyt9fXJldHVybi0xfWZ1bmN0aW9uIFQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxwLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBBKG4sbCx1LHQsaSl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlLmNzc1RleHQ9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxUKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09PXRbbF18fFQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLFwiJDFcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbnx8XCJvbkZvY3VzT3V0XCI9PT1sfHxcIm9uRm9jdXNJblwiPT09bD9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT90P3UudT10LnU6KHUudT1lLG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/czpjLG8pKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP3M6YyxvKTtlbHNle2lmKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09aSlsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwid2lkdGhcIiE9bCYmXCJoZWlnaHRcIiE9bCYmXCJocmVmXCIhPWwmJlwibGlzdFwiIT1sJiZcImZvcm1cIiE9bCYmXCJ0YWJJbmRleFwiIT1sJiZcImRvd25sb2FkXCIhPWwmJlwicm93U3BhblwiIT1sJiZcImNvbFNwYW5cIiE9bCYmXCJyb2xlXCIhPWwmJlwicG9wb3ZlclwiIT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmXCItXCIhPT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsXCJwb3BvdmVyXCI9PWwmJjE9PXU/XCJcIjp1KSl9fWZ1bmN0aW9uIEYobil7cmV0dXJuIGZ1bmN0aW9uKHUpe2lmKHRoaXMubCl7dmFyIHQ9dGhpcy5sW3UudHlwZStuXTtpZihudWxsPT11LnQpdS50PWUrKztlbHNlIGlmKHUudDx0LnUpcmV0dXJuO3JldHVybiB0KGwuZXZlbnQ/bC5ldmVudCh1KTp1KX19fWZ1bmN0aW9uIE8obix1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEsaCx2LHAsdyxfLGcsbSx4LEMsUyxNLCQsSSxILEwsVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsxMjgmdC5fX3UmJihjPSEhKDMyJnQuX191KSxyPVtlPXUuX19lPXQuX19lXSksKGE9bC5fX2IpJiZhKHUpO246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl0cnl7aWYobT11LnByb3BzLHg9XCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcixDPShhPVQuY29udGV4dFR5cGUpJiZpW2EuX19jXSxTPWE/Qz9DLnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9nPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooeD91Ll9fYz1oPW5ldyBUKG0sUyk6KHUuX19jPWg9bmV3IGsobSxTKSxoLmNvbnN0cnVjdG9yPVQsaC5yZW5kZXI9cSksQyYmQy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9UyxoLl9fbj1pLHY9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLHgmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSkseCYmbnVsbCE9VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWQoe30saC5fX3MpKSxkKGguX19zLFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkscD1oLnByb3BzLHc9aC5zdGF0ZSxoLl9fdj11LHYpeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLHgmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZih4JiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXAmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0sUyksIWguX19lJiYobnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyxTKXx8dS5fX3Y9PT10Ll9fdikpe2Zvcih1Ll9fdiE9PXQuX192JiYoaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEpLHUuX19lPXQuX19lLHUuX19rPXQuX19rLHUuX19rLnNvbWUoZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxNPTA7TTxoLl9zYi5sZW5ndGg7TSsrKWguX19oLnB1c2goaC5fc2JbTV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyxTKSx4JiZudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHAsdyxfKX0pfWlmKGguY29udGV4dD1TLGgucHJvcHM9bSxoLl9fUD1uLGguX19lPSExLCQ9bC5fX3IsST0wLHgpe2ZvcihoLnN0YXRlPWguX19zLGguX19kPSExLCQmJiQodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxIPTA7SDxoLl9zYi5sZW5ndGg7SCsrKWguX19oLnB1c2goaC5fc2JbSF0pO2guX3NiPVtdfWVsc2UgZG97aC5fX2Q9ITEsJCYmJCh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrSTwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9ZChkKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx4JiYhdiYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKF89aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwLHcpKSxQKG4seShMPW51bGwhPWEmJmEudHlwZT09PWImJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSk/TDpbTF0sdSx0LGksbyxyLGYsZSxjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxnJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPXIpe2Zvcih1Ll9fdXw9Yz8xNjA6MTI4O2UmJjg9PT1lLm5vZGVUeXBlJiZlLm5leHRTaWJsaW5nOyllPWUubmV4dFNpYmxpbmc7cltyLmluZGV4T2YoZSldPW51bGwsdS5fX2U9ZX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PXImJnUuX192PT09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTp1Ll9fZT16KHQuX19lLHUsdCxpLG8scixmLGMscyk7KGE9bC5kaWZmZWQpJiZhKHUpfWZ1bmN0aW9uIGoobix1LHQpe3UuX19kPXZvaWQgMDtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylOKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiB6KHUsdCxpLG8scixmLGUsYyxzKXt2YXIgYSx2LHAsZCxfLGcsbSxiPWkucHJvcHMsaz10LnByb3BzLEM9dC50eXBlO2lmKFwic3ZnXCI9PT1DP3I9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT09Qz9yPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOnJ8fChyPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1mKWZvcihhPTA7YTxmLmxlbmd0aDthKyspaWYoKF89ZlthXSkmJlwic2V0QXR0cmlidXRlXCJpbiBfPT0hIUMmJihDP18ubG9jYWxOYW1lPT09QzozPT09Xy5ub2RlVHlwZSkpe3U9XyxmW2FdPW51bGw7YnJlYWt9aWYobnVsbD09dSl7aWYobnVsbD09PUMpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO3U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHIsQyxrLmlzJiZrKSxjJiYobC5fX20mJmwuX19tKHQsZiksYz0hMSksZj1udWxsfWlmKG51bGw9PT1DKWI9PT1rfHxjJiZ1LmRhdGE9PT1rfHwodS5kYXRhPWspO2Vsc2V7aWYoZj1mJiZuLmNhbGwodS5jaGlsZE5vZGVzKSxiPWkucHJvcHN8fGgsIWMmJm51bGwhPWYpZm9yKGI9e30sYT0wO2E8dS5hdHRyaWJ1dGVzLmxlbmd0aDthKyspYlsoXz11LmF0dHJpYnV0ZXNbYV0pLm5hbWVdPV8udmFsdWU7Zm9yKGEgaW4gYilpZihfPWJbYV0sXCJjaGlsZHJlblwiPT1hKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YSlwPV87ZWxzZSBpZighKGEgaW4gaykpe2lmKFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrKWNvbnRpbnVlO0EodSxhLG51bGwsXyxyKX1mb3IoYSBpbiBrKV89a1thXSxcImNoaWxkcmVuXCI9PWE/ZD1fOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT92PV86XCJ2YWx1ZVwiPT1hP2c9XzpcImNoZWNrZWRcIj09YT9tPV86YyYmXCJmdW5jdGlvblwiIT10eXBlb2YgX3x8YlthXT09PV98fEEodSxhLF8sYlthXSxyKTtpZih2KWN8fHAmJih2Ll9faHRtbD09PXAuX19odG1sfHx2Ll9faHRtbD09PXUuaW5uZXJIVE1MKXx8KHUuaW5uZXJIVE1MPXYuX19odG1sKSx0Ll9faz1bXTtlbHNlIGlmKHAmJih1LmlubmVySFRNTD1cIlwiKSxQKHUseShkKT9kOltkXSx0LGksbyxcImZvcmVpZ25PYmplY3RcIj09PUM/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6cixmLGUsZj9mWzBdOmkuX19rJiZ4KGksMCksYyxzKSxudWxsIT1mKWZvcihhPWYubGVuZ3RoO2EtLTspdyhmW2FdKTtjfHwoYT1cInZhbHVlXCIsXCJwcm9ncmVzc1wiPT09QyYmbnVsbD09Zz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOnZvaWQgMCE9PWcmJihnIT09dVthXXx8XCJwcm9ncmVzc1wiPT09QyYmIWd8fFwib3B0aW9uXCI9PT1DJiZnIT09YlthXSkmJkEodSxhLGcsYlthXSxyKSxhPVwiY2hlY2tlZFwiLHZvaWQgMCE9PW0mJm0hPT11W2FdJiZBKHUsYSxtLGJbYV0scikpfXJldHVybiB1fWZ1bmN0aW9uIE4obix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIFYobix1LHQpe3ZhciBpLG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPT1uLl9fZXx8TihpLG51bGwsdSkpLG51bGwhPShpPW4uX19jKSl7aWYoaS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7aS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9aS5iYXNlPWkuX19QPW51bGx9aWYoaT1uLl9faylmb3Iobz0wO288aS5sZW5ndGg7bysrKWlbb10mJlYoaVtvXSx1LHR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7dHx8dyhuLl9fZSksbi5fX2M9bi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gcShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBCKHUsdCxpKXt2YXIgbyxyLGYsZTtsLl9fJiZsLl9fKHUsdCkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx0Ll9fayxmPVtdLGU9W10sTyh0LHU9KCFvJiZpfHx0KS5fX2s9XyhiLG51bGwsW3VdKSxyfHxoLGgsdC5uYW1lc3BhY2VVUkksIW8mJmk/W2ldOnI/bnVsbDp0LmZpcnN0Q2hpbGQ/bi5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZpP2k6cj9yLl9fZTp0LmZpcnN0Q2hpbGQsbyxlKSxqKGYsdSxlKX1mdW5jdGlvbiBEKG4sbCl7QihuLGwsRCl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGksbyxyLGYsZT1kKHt9LGwucHJvcHMpO2ZvcihyIGluIGwudHlwZSYmbC50eXBlLmRlZmF1bHRQcm9wcyYmKGY9bC50eXBlLmRlZmF1bHRQcm9wcyksdSlcImtleVwiPT1yP2k9dVtyXTpcInJlZlwiPT1yP289dVtyXTplW3JdPXZvaWQgMD09PXVbcl0mJnZvaWQgMCE9PWY/ZltyXTp1W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLGcobC50eXBlLGUsaXx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIithKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9bmV3IFNldCwodD17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dT1udWxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19lPSEwLFMobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5hZGQobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSYmdS5kZWxldGUobiksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj12LnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSx0KXtmb3IodmFyIGksbyxyO2w9bC5fXzspaWYoKGk9bC5fX2MpJiYhaS5fXyl0cnl7aWYoKG89aS5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaS5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj1pLl9fZCksbnVsbCE9aS5jb21wb25lbnREaWRDYXRjaCYmKGkuY29tcG9uZW50RGlkQ2F0Y2gobix0fHx7fSkscj1pLl9fZCkscilyZXR1cm4gaS5fX0U9aX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCx0PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZudWxsPT1uLmNvbnN0cnVjdG9yfSxrLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1kKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oZCh7fSx1KSx0aGlzLnByb3BzKSksbiYmZCh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxTKHRoaXMpKX0say5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLFModGhpcykpfSxrLnByb3RvdHlwZS5yZW5kZXI9YixpPVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZj1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxNLl9fcj0wLGU9MCxjPUYoITEpLHM9RighMCksYT0wO2V4cG9ydHtrIGFzIENvbXBvbmVudCxiIGFzIEZyYWdtZW50LEUgYXMgY2xvbmVFbGVtZW50LEcgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsbSBhcyBjcmVhdGVSZWYsXyBhcyBoLEQgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxCIGFzIHJlbmRlcixIIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCxyLHUsaSxvPTAsZj1bXSxjPW4sZT1jLl9fYixhPWMuX19yLHY9Yy5kaWZmZWQsbD1jLl9fYyxtPWMudW5tb3VudCxzPWMuX187ZnVuY3Rpb24gZChuLHQpe2MuX19oJiZjLl9faChyLG4sb3x8dCksbz0wO3ZhciB1PXIuX19IfHwoci5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiBuPj11Ll9fLmxlbmd0aCYmdS5fXy5wdXNoKHt9KSx1Ll9fW25dfWZ1bmN0aW9uIGgobil7cmV0dXJuIG89MSxwKEQsbil9ZnVuY3Rpb24gcChuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkQodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7aWYoIW8uX19jLl9fSClyZXR1cm4hMDt2YXIgdT1vLl9fYy5fX0guX18uZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiEhbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighY3x8Yy5jYWxsKHRoaXMsbix0LHIpKX07ci51PSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24geShuLHUpe3ZhciBpPWQodCsrLDMpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gXyhuLHUpe3ZhciBpPWQodCsrLDQpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9faC5wdXNoKGkpKX1mdW5jdGlvbiBBKG4pe3JldHVybiBvPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7bz02LF8oZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhuKHQoKSksZnVuY3Rpb24oKXtyZXR1cm4gbihudWxsKX0pOm4/KG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9KTp2b2lkIDB9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gVChuLHIpe3ZhciB1PWQodCsrLDcpO3JldHVybiBDKHUuX19ILHIpJiYodS5fXz1uKCksdS5fX0g9cix1Ll9faD1uKSx1Ll9ffWZ1bmN0aW9uIHEobix0KXtyZXR1cm4gbz04LFQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24geChuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFAobix0KXtjLnVzZURlYnVnVmFsdWUmJmMudXNlRGVidWdWYWx1ZSh0P3Qobik6bil9ZnVuY3Rpb24gYihuKXt2YXIgdT1kKHQrKywxMCksaT1oKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBnKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGooKXtmb3IodmFyIG47bj1mLnNoaWZ0KCk7KWlmKG4uX19QJiZuLl9fSCl0cnl7bi5fX0guX19oLmZvckVhY2goeiksbi5fX0guX19oLmZvckVhY2goQiksbi5fX0guX19oPVtdfWNhdGNoKHQpe24uX19ILl9faD1bXSxjLl9fZSh0LG4uX192KX19Yy5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LGMuX189ZnVuY3Rpb24obix0KXtuJiZ0Ll9fayYmdC5fX2suX19tJiYobi5fX209dC5fX2suX19tKSxzJiZzKG4sdCl9LGMuX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLmk9bi5fX049dm9pZCAwfSkpOihpLl9faC5mb3JFYWNoKHopLGkuX19oLmZvckVhY2goQiksaS5fX2g9W10sdD0wKSksdT1yfSxjLmRpZmZlZD1mdW5jdGlvbihuKXt2JiZ2KG4pO3ZhciB0PW4uX19jO3QmJnQuX19IJiYodC5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2godCkmJmk9PT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8dykoaikpLHQuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLmk9dm9pZCAwfSkpLHU9cj1udWxsfSxjLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXt0cnl7bi5fX2guZm9yRWFjaCh6KSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fEIobil9KX1jYXRjaChyKXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx0PVtdLGMuX19lKHIsbi5fX3YpfX0pLGwmJmwobix0KX0sYy51bm1vdW50PWZ1bmN0aW9uKG4pe20mJm0obik7dmFyIHQscj1uLl9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e3oobil9Y2F0Y2gobil7dD1ufX0pLHIuX19IPXZvaWQgMCx0JiZjLl9fZSh0LHIuX192KSl9O3ZhciBrPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiB3KG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksayYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtrJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIHoobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gQihuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24gQyhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBEKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e3EgYXMgdXNlQ2FsbGJhY2sseCBhcyB1c2VDb250ZXh0LFAgYXMgdXNlRGVidWdWYWx1ZSx5IGFzIHVzZUVmZmVjdCxiIGFzIHVzZUVycm9yQm91bmRhcnksZyBhcyB1c2VJZCxGIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsXyBhcyB1c2VMYXlvdXRFZmZlY3QsVCBhcyB1c2VNZW1vLHAgYXMgdXNlUmVkdWNlcixBIGFzIHVzZVJlZixoIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW1vamkgfSBmcm9tIFwiLi4vaG9va3MvdXNlLWVtb2ppXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7IEVtcHR5U3RhdGUgfSBmcm9tIFwiLi9FbXB0eVN0YXRlXCI7XG5pbXBvcnQgeyBFcnJvclN0YXRlIH0gZnJvbSBcIi4vRXJyb3JTdGF0ZVwiO1xuaW1wb3J0IHsgTG9hZGVkU3RhdGUgfSBmcm9tIFwiLi9Mb2FkZWRTdGF0ZVwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvYXBwLXN0YXRlXCI7XG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgeWVhciwgZW1vamlzLCBzdGF0cywgdXNlcnMsIHN0YXRlLCBwZXJjZW50TG9hZGVkLCBldGEsIHN0YXJ0VGltZSwgZW5kVGltZSwgbG9hZFN0YXRzLCBpbXBvcnRTdGF0cywgfSA9IHVzZUVtb2ppKCk7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwiYXBwLXRpdGxlXCI+RW1vamkgV3JhcHBlZCDinKg8L2gyPlxuXHRcdFx0JHtzdGF0ZSA9PT0gU3RhdGUuSW5pdGlhbCAmJiBodG1sIGA8JHtMb2FkZXJ9IC8+YH1cblx0XHRcdCR7W1N0YXRlLkVtcHR5LCBTdGF0ZS5Mb2FkaW5nU3RhdHMsIFN0YXRlLkxvYWRpbmdFbW9qaV0uaW5jbHVkZXMoc3RhdGUpICYmXG4gICAgICAgIGh0bWwgYDwke0VtcHR5U3RhdGV9XG5cdFx0XHRcdHN0YXRlPSR7c3RhdGV9XG5cdFx0XHRcdHBlcmNlbnRMb2FkZWQ9JHtwZXJjZW50TG9hZGVkfVxuXHRcdFx0XHRldGE9JHtldGF9XG5cdFx0XHRcdGxvYWRTdGF0cz0ke2xvYWRTdGF0c31cblx0XHRcdFx0aW1wb3J0U3RhdHM9JHtpbXBvcnRTdGF0c31cblx0XHRcdC8+YH1cblx0XHRcdCR7c3RhdGUgPT09IFN0YXRlLkVycm9yICYmIGh0bWwgYDwke0Vycm9yU3RhdGV9IC8+YH1cblx0XHRcdCR7c3RhdGUgPT09IFN0YXRlLkxvYWRlZCAmJlxuICAgICAgICBodG1sIGA8JHtMb2FkZWRTdGF0ZX1cblx0XHRcdFx0eWVhcj0ke3llYXJ9XG5cdFx0XHRcdGVtb2ppcz0ke2Vtb2ppc31cblx0XHRcdFx0c3RhdHM9JHtzdGF0c31cblx0XHRcdFx0dXNlcnM9JHt1c2Vyc31cblx0XHRcdFx0c3RhcnRUaW1lPSR7c3RhcnRUaW1lfVxuXHRcdFx0XHRlbmRUaW1lPSR7ZW5kVGltZX1cblx0XHRcdFx0cmVsb2FkU3RhdHM9JHsoKSA9PiBsb2FkU3RhdHModHJ1ZSl9XG5cdFx0XHRcdGltcG9ydFN0YXRzPSR7aW1wb3J0U3RhdHN9XG5cdFx0XHQvPmB9XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vLyBCdXR0b24gdHlwZXMuXG5leHBvcnQgdmFyIEJ1dHRvblR5cGU7XG4oZnVuY3Rpb24gKEJ1dHRvblR5cGUpIHtcbiAgICBCdXR0b25UeXBlW1wiUHJpbWFyeVwiXSA9IFwicHJpbWFyeVwiO1xuICAgIEJ1dHRvblR5cGVbXCJPdXRsaW5lXCJdID0gXCJvdXRsaW5lXCI7XG59KShCdXR0b25UeXBlIHx8IChCdXR0b25UeXBlID0ge30pKTtcbi8vIEJ1dHRvbiBzaXplcy5cbmV4cG9ydCB2YXIgQnV0dG9uU2l6ZTtcbihmdW5jdGlvbiAoQnV0dG9uU2l6ZSkge1xuICAgIEJ1dHRvblNpemVbXCJTbWFsbFwiXSA9IFwic21hbGxcIjtcbiAgICBCdXR0b25TaXplW1wiTWVkaXVtXCJdID0gXCJtZWRpdW1cIjtcbiAgICBCdXR0b25TaXplW1wiTGFyZ2VcIl0gPSBcImxhcmdlXCI7XG59KShCdXR0b25TaXplIHx8IChCdXR0b25TaXplID0ge30pKTtcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyB0eXBlID0gQnV0dG9uVHlwZS5QcmltYXJ5LCBzaXplID0gQnV0dG9uU2l6ZS5NZWRpdW0sIGNsYXNzTmFtZSA9IFwiXCIsIGNoaWxkcmVuLCBvbkNsaWNrLCBvbkZpbGVVcGxvYWQsIGRpc2FibGVkLCB9KSA9PiB7XG4gICAgY29uc3QgZmlsZVVwbG9hZFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvbkNsaWNrRmlsZVVwbG9hZCA9ICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSBmaWxlVXBsb2FkUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGljaygpO1xuICAgIH07XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT1cImMtYnV0dG9uIGMtYnV0dG9uLS0ke3R5cGV9IGMtYnV0dG9uLS0ke3NpemV9ICR7ZGlzYWJsZWRcbiAgICAgICAgPyBcImMtYnV0dG9uLS1kaXNhYmxlZFwiXG4gICAgICAgIDogXCJcIn0gJHtjbGFzc05hbWV9XCJcblx0XHRcdG9uQ2xpY2s9JHtvbkZpbGVVcGxvYWQgPyBvbkNsaWNrRmlsZVVwbG9hZCA6IG9uQ2xpY2t9XG5cdFx0XHRkaXNhYmxlZD0ke2Rpc2FibGVkfVxuXHRcdD5cblx0XHRcdCR7Y2hpbGRyZW59XG5cdFx0PC9idXR0b24+XG5cdFx0JHtvbkZpbGVVcGxvYWQgJiZcbiAgICAgICAgaHRtbCBgXG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0cmVmPSR7KHJlZikgPT4ge1xuICAgICAgICAgICAgZmlsZVVwbG9hZFJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICB9fVxuXHRcdFx0XHR0eXBlPVwiZmlsZVwiXG5cdFx0XHRcdGhpZGRlblxuXHRcdFx0XHRvbkNoYW5nZT0ke29uRmlsZVVwbG9hZH1cblx0XHRcdC8+XG5cdFx0YH1cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmV4cG9ydCBjb25zdCBFbW9qaSA9ICh7IG5hbWUsIHVybCwgY291bnQgfSkgPT4ge1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtb2ppXCI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlbW9qaS1uYW1lXCI+OiR7bmFtZX06PC9zcGFuPlxuXHRcdFx0PGltZyBjbGFzc05hbWU9XCJlbW9qaS1pbWdcIiBzcmM9JHt1cmx9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlbW9qaS1mb290ZXJcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZW1vamktY291bnRcIj4ke2NvdW50fTwvc3Bhbj5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdCR7Y291bnQgPT09IDEgPyBcInRpbWVcIiA6IFwidGltZXNcIn1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmltcG9ydCB7IEVtb2ppIH0gZnJvbSBcIi4vRW1vamlcIjtcbmV4cG9ydCBjb25zdCBFbW9qaXMgPSAoeyBlbW9qaXMgfSkgPT4ge1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtb2ppc1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbW9qaXMtc2Nyb2xsLXdyYXBwZXJcIj5cblx0XHRcdFx0JHtlbW9qaXMubWFwKChlbW9qaSkgPT4gaHRtbCBgPCR7RW1vaml9IGtleT0ke2Vtb2ppLm5hbWV9IC4uLiR7ZW1vaml9IC8+YCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVHlwZSB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vTG9hZGVyXCI7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9hcHAtc3RhdGVcIjtcbmV4cG9ydCBjb25zdCBFbXB0eVN0YXRlID0gKHsgc3RhdGUsIHBlcmNlbnRMb2FkZWQsIGV0YSwgbG9hZFN0YXRzLCBpbXBvcnRTdGF0cywgfSkgPT4ge1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHN0YXRlID09PSBTdGF0ZS5Mb2FkaW5nRW1vamkgfHwgc3RhdGUgPT09IFN0YXRlLkxvYWRpbmdTdGF0cztcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZW1wdHktc3RhdGVcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1kZXNjcmlwdGlvblwiPlZpZXcgYSByZXBvcnQgb2YgeW91ciB0b3AgdXNlZCBlbW9qaS48L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcC1idXR0b25zXCI+XG5cdFx0XHRcdDwke0J1dHRvbn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHAtYnV0dG9uXCJcblx0XHRcdFx0XHRvbkNsaWNrPSR7KCkgPT4gbG9hZFN0YXRzKCl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9JHtpc0xvYWRpbmd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQke2lzTG9hZGluZyA/IFwiTG9hZGluZ1wiIDogXCJHZW5lcmF0ZVwifVxuXHRcdFx0XHRcdCR7aXNMb2FkaW5nICYmIGh0bWwgYDwke0xvYWRlcn0gc2l6ZT1cInNtYWxsXCIgLz5gfVxuXHRcdFx0XHQ8Ly8+XG5cdFx0XHRcdCR7IWlzTG9hZGluZyAmJlxuICAgICAgICBodG1sIGA8JHtCdXR0b259XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXBwLWJ1dHRvblwiXG5cdFx0XHRcdFx0dHlwZT0ke0J1dHRvblR5cGUuT3V0bGluZX1cblx0XHRcdFx0XHRvbkZpbGVVcGxvYWQ9JHtpbXBvcnRTdGF0c31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdEltcG9ydCBKU09OXG5cdFx0XHRcdDwvLz5gfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XG5cdFx0XHRcdCR7aXNMb2FkaW5nICYmXG4gICAgICAgIGh0bWwgYDwke1Byb2dyZXNzQmFyfVxuXHRcdFx0XHRcdHRpdGxlPSR7c3RhdGUgPT09IFN0YXRlLkxvYWRpbmdFbW9qaVxuICAgICAgICAgICAgPyBcIigxLzIpIExvYWRpbmcgZW1vamkuLi5cIlxuICAgICAgICAgICAgOiBcIigyLzIpIExvYWRpbmcgc3RhdHMuLi5cIn1cblx0XHRcdFx0XHRwZXJjZW50PSR7cGVyY2VudExvYWRlZH1cblx0XHRcdFx0Lz5gfVxuXHRcdFx0XHQ8aT5cblx0XHRcdFx0XHRUaGlzIG1heSB0YWtlIGEgd2hpbGUgZm9yIHdvcmtzcGFjZXMgd2l0aCBtYW55IGVtb2ppLlxuXHRcdFx0XHRcdCR7ZXRhID8gaHRtbCBgPGI+IEVUQTogJHtldGF9PC9iPmAgOiBcIlwifVxuXHRcdFx0XHQ8L2k+XG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5leHBvcnQgY29uc3QgRXJyb3JTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZXJyb3Itc3RhdGVcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1lcnJvclwiPkZhaWxlZCB0byBsb2FkIGVtb2ppIHN0YXRzIPCfpbo8L3A+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBFbW9qaXMgfSBmcm9tIFwiLi9FbW9qaXNcIjtcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4vVXNlcnNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVHlwZSB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgZG93bmxvYWRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb3dubG9hZC1qc29uXCI7XG5pbXBvcnQgeyBmb3JtYXRUaW1lRGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZm9ybWF0LXRpbWUtZGlmZmVyZW5jZVwiO1xuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc2h1ZmZsZVwiO1xuZXhwb3J0IGNvbnN0IExvYWRlZFN0YXRlID0gKHsgeWVhciwgZW1vamlzLCBzdGF0cywgdXNlcnMsIHN0YXJ0VGltZSwgZW5kVGltZSwgcmVsb2FkU3RhdHMsIGltcG9ydFN0YXRzLCB9KSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0aXRsZSA9IHllYXIgPT09IGN1cnJlbnRZZWFyID8gXCJUaGlzIHllYXJcIiA6IGBJbiAke3llYXIgIT09IG51bGwgJiYgeWVhciAhPT0gdm9pZCAwID8geWVhciA6IGN1cnJlbnRZZWFyfWA7XG4gICAgY29uc3QgcmFyZXN0Q291bnQgPSAoX2IgPSAoX2EgPSBzdGF0cy5zbGljZSgtMSlbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb3VudCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMTtcbiAgICBjb25zdCByYXJlc3RFbW9qaSA9IHNodWZmbGUoc3RhdHMuZmlsdGVyKCh7IGNvdW50IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvdW50ID09PSByYXJlc3RDb3VudDtcbiAgICB9KSk7XG4gICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAzKTtcbiAgICBjb25zdCB0b3BVc2Vyc0Vtb2ppID0gdG9wVXNlcnMuZmxhdE1hcCgoeyBlbW9qaSB9KSA9PiBlbW9qaSk7XG4gICAgY29uc3QgdG9wVXNlckVtb2ppcyA9IE9iamVjdC52YWx1ZXModG9wVXNlcnNFbW9qaS5yZWR1Y2UoKGFjYywgZW1vamlOYW1lKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGlmICghYWNjW2Vtb2ppTmFtZV0pIHtcbiAgICAgICAgICAgIGFjY1tlbW9qaU5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGVtb2ppTmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IChfYiA9IChfYSA9IHN0YXRzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBlbW9qaU5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXJsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogKF9kID0gKF9jID0gc3RhdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGVtb2ppTmFtZSkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jcmVhdGVkQXQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDAsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvdW50OiAoX2UgPSB0b3BVc2Vyc0Vtb2ppLmZpbHRlcigoZSkgPT4gZSA9PT0gZW1vamlOYW1lKS5sZW5ndGgpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pKS5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG4gICAgY29uc3QgZW1vamlUaGlzWWVhciA9IHN0YXRzLmZpbHRlcigoeyBjcmVhdGVkQXQgPSAwIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGNyZWF0ZWRBdCkuZ2V0RnVsbFllYXIoKSA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uUmVsb2FkU3RhdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbG9hZCB5b3VyIEVtb2ppIFdyYXBwZWQgcmVwb3J0PyBZb3UnbGwgbG9zZSB5b3VyIHByZXZpb3VzIHJlcG9ydCwgYW5kIGl0IG1heSB0YWtlIGEgd2hpbGUgdG8gcHVsbCBmcmVzaCBkYXRhLlwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWxvYWRTdGF0cygpO1xuICAgIH07XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxvYWRlZC1zdGF0ZVwiPlxuXHRcdFx0PGg1IGNsYXNzTmFtZT1cImFwcC1zdWJ0aXRsZVwiPiR7dGl0bGV9LCB5b3UgdXNlZC4uLjwvaDU+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhcHAtZW1vamktY291bnRcIj5cblx0XHRcdFx0PGgxPiR7c3RhdHMubGVuZ3RofTwvaDE+XG5cdFx0XHRcdDxpPmRpZmZlcmVudCBTbGFjayBlbW9qaSE8L2k+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+XG5cdFx0XHRcdFNvbWUgb2YgeW91ciDirZDvuI/irZDvuI/irZDvuI/irZDvuI/irZDvuI8gZmF2b3JpdGVzIHdlcmUuLi5cblx0XHRcdDwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3N0YXRzLnNsaWNlKDAsIDEwMCl9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+WW91ciBtb3N0IHJhcmVseSB1c2VkIGVtb2ppIPCflI48L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtyYXJlc3RFbW9qaX0gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5UaGUgcGVvcGxlIHlvdSBtb3N0IG9mdGVuIHJlYWN0ZWQgdG8g8J+RrzwvaDU+XG5cdFx0XHQ8JHtVc2Vyc30gdXNlcnM9JHt0b3BVc2Vyc30gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5Zb3VyIPCflJ0gcmVhY3Rpb25zIHRvIHRoZW0gd2VyZS4uLjwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3RvcFVzZXJFbW9qaXN9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+VGhlc2UgbmV3IGVtb2ppIGNhdWdodCB5b3VyIPCfkYA8L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtlbW9qaVRoaXNZZWFyLnNsaWNlKDAsIDUpfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1mb290ZXItdGV4dFwiPlxuXHRcdFx0XHRcdEVsYXBzZWQgdGltZTogJHtmb3JtYXRUaW1lRGlmZmVyZW5jZShzdGFydFRpbWUsIGVuZFRpbWUpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJ1dHRvbnNcIj5cblx0XHRcdFx0XHQ8JHtCdXR0b259IG9uQ2xpY2s9JHtvblJlbG9hZFN0YXRzfT4gUmVsb2FkIDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259XG5cdFx0XHRcdFx0XHR0eXBlPSR7QnV0dG9uVHlwZS5PdXRsaW5lfVxuXHRcdFx0XHRcdFx0b25DbGljaz0keygpID0+IGRvd25sb2FkSlNPTih7IGVtb2ppcywgc3RhdHMsIHN0YXJ0VGltZSwgZW5kVGltZSwgeWVhciB9LCBcImVtb2ppLXdyYXBwZWQuanNvblwiKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRFeHBvcnQgSlNPTlxuXHRcdFx0XHRcdDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259IHR5cGU9JHtCdXR0b25UeXBlLk91dGxpbmV9IG9uRmlsZVVwbG9hZD0ke2ltcG9ydFN0YXRzfT5cblx0XHRcdFx0XHRcdEltcG9ydCBKU09OXG5cdFx0XHRcdFx0PC8vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuZXhwb3J0IHZhciBMb2FkZXJTaXplO1xuKGZ1bmN0aW9uIChMb2FkZXJTaXplKSB7XG4gICAgTG9hZGVyU2l6ZVtcIlNtYWxsXCJdID0gXCJzbWFsbFwiO1xuICAgIExvYWRlclNpemVbXCJNZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIExvYWRlclNpemVbXCJMYXJnZVwiXSA9IFwibGFyZ2VcIjtcbn0pKExvYWRlclNpemUgfHwgKExvYWRlclNpemUgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IExvYWRlciA9ICh7IHNpemUgPSBMb2FkZXJTaXplLk1lZGl1bSB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3M9XCJpbmZpbml0ZV9zcGlubmVyIGluZmluaXRlX3NwaW5uZXJfJHtzaXplfVwiPlxuXHRcdFx0PHN2ZyBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cblx0XHRcdFx0PGNpcmNsZSBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfYmdcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjM1XCI+PC9jaXJjbGU+XG5cdFx0XHRcdDxjaXJjbGVcblx0XHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfcGF0aCBpbmZpbml0ZV9zcGlubmVyX2JsdWVcIlxuXHRcdFx0XHRcdGN4PVwiNTAlXCJcblx0XHRcdFx0XHRjeT1cIjUwJVwiXG5cdFx0XHRcdFx0cj1cIjM1XCJcblx0XHRcdFx0PjwvY2lyY2xlPjwvc3ZnXG5cdFx0XHQ+PHN2Z1xuXHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBpbmZpbml0ZV9zcGlubmVyX3RhaWwgXCJcblx0XHRcdFx0dmlld0JveD1cIjAgMCAxMDAgMTAwXCJcblx0XHRcdD5cblx0XHRcdFx0PGNpcmNsZVxuXHRcdFx0XHRcdGNsYXNzPVwiaW5maW5pdGVfc3Bpbm5lcl9wYXRoIGluZmluaXRlX3NwaW5uZXJfYmx1ZVwiXG5cdFx0XHRcdFx0Y3g9XCI1MCVcIlxuXHRcdFx0XHRcdGN5PVwiNTAlXCJcblx0XHRcdFx0XHRyPVwiMzVcIlxuXHRcdFx0XHQ+PC9jaXJjbGU+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9ICh7IHRpdGxlLCBwZXJjZW50LCB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cblx0XHRcdDxwcm9ncmVzcyBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiB2YWx1ZT0ke3BlcmNlbnQgKiAxMDB9IG1heD1cIjEwMFwiPlxuXHRcdFx0XHQke3BlcmNlbnQgKiAxMDB9XG5cdFx0XHQ8L3Byb2dyZXNzPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJvZ3Jlc3MtdGl0bGVcIj4ke3RpdGxlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQVBJXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmV4cG9ydCBjb25zdCBVc2VyID0gKHsgdXNlcm5hbWUsIGVtb2ppIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9maWxlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHlpZWxkIEFQSS5mZXRjaFByb2ZpbGUoeyB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgIHNldFVybCgoX2IgPSAoX2EgPSB1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmltYWdlX29yaWdpbmFsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZldGNoUHJvZmlsZSgpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0JHt1cmwgJiYgaHRtbCBgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWltZ1wiIHNyYz0ke3VybH0gLz5gfVxuXHRcdFx0XHQkeyF1cmwgJiYgaHRtbCBgPCR7TG9hZGVyfSAvPmB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZm9vdGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItY291bnRcIj4ke2Vtb2ppLmxlbmd0aH08L3NwYW4+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQke2Vtb2ppLmxlbmd0aCA9PT0gMSA/IFwicmVhY3Rpb25cIiA6IFwicmVhY3Rpb25zXCJ9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuZXhwb3J0IGNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJzXCI+XG5cdFx0XHQke3VzZXJzLm1hcCgodXNlcikgPT4gaHRtbCBgPCR7VXNlcn0ga2V5PSR7dXNlci51c2VybmFtZX0gLi4uJHt1c2VyfSAvPmApfVxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ2FjaGVcIjtcbi8vIEN1c3RvbSBob29rIHRvIHVzZSBzdGF0ZSB3aXRoIGNhY2hpbmcuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FjaGVkU3RhdGUoa2V5UGF0aCwgZGVmYXVsdFZhbHVlLCBvbkxvYWRGcm9tQ2FjaGUpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFN0YXRlID0geWllbGQgQ2FjaGUuZ2V0KGtleVBhdGgpO1xuICAgICAgICAgICAgaWYgKGNhY2hlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoY2FjaGVkU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uTG9hZEZyb21DYWNoZSkge1xuICAgICAgICAgICAgICAgIG9uTG9hZEZyb21DYWNoZShjYWNoZWRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZXRDYWNoZWRTdGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgICAgICBDYWNoZS5zZXQoa2V5UGF0aCwgdmFsdWUpO1xuICAgICAgICBzZXRTdGF0ZSh2YWx1ZSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldENhY2hlZFN0YXRlXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VDYWNoZWRTdGF0ZSB9IGZyb20gXCIuL3VzZS1jYWNoZWQtc3RhdGVcIjtcbmltcG9ydCB7IENhY2hlS2V5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9DYWNoZVwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9BUElcIjtcbmltcG9ydCB7IHZhbGlkYXRlU3RhdHNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0ZS1zdGF0cy1qc29uXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9hcHAtc3RhdGVcIjtcbmZ1bmN0aW9uIHVzZUVUQShzdGF0ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcbiAgICBjb25zdCBjYWxjdWxhdGVFVEEgPSB1c2VDYWxsYmFjaygoZW1vamlSZW1haW5pbmcpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlICE9PSBTdGF0ZS5Mb2FkaW5nU3RhdHMpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBldGEgPSBNYXRoLnJvdW5kKGVtb2ppUmVtYWluaW5nICogcmF0ZSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihldGEgLyAoNjAgKiA2MCkpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZXRhICUgKDYwICogNjApKSAvIDYwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGV0YSAlIDYwO1xuICAgICAgICBpZiAoaG91cnMgPiAwKVxuICAgICAgICAgICAgcmV0dXJuIGAke2hvdXJzfWggJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgO1xuICAgICAgICBpZiAobWludXRlcyA+IDApXG4gICAgICAgICAgICByZXR1cm4gYCR7bWludXRlc31tICR7c2Vjb25kc31zYDtcbiAgICAgICAgcmV0dXJuIGAke3NlY29uZHN9c2A7XG4gICAgfSwgW3JhdGUsIHN0YXRlXSk7XG4gICAgcmV0dXJuIFtjYWxjdWxhdGVFVEEsIHNldFJhdGVdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVtb2ppKCkge1xuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XG4gICAgY29uc3QgW3BlcmNlbnRMb2FkZWQsIHNldFBlcmNlbnRMb2FkZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShTdGF0ZS5Jbml0aWFsKTtcbiAgICBjb25zdCBbY2FsY3VsYXRlRVRBLCBzZXRSYXRlXSA9IHVzZUVUQShzdGF0ZSwgMSk7XG4gICAgY29uc3QgW2Vtb2ppcywgc2V0RW1vamlzXSA9IHVzZUNhY2hlZFN0YXRlKENhY2hlS2V5LkVtb2ppLCBbXSk7XG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VDYWNoZWRTdGF0ZShDYWNoZUtleS5TdGF0cywgW10sICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh2YWx1ZSA/IFN0YXRlLkxvYWRlZCA6IFN0YXRlLkVtcHR5KTtcbiAgICB9KTtcbiAgICBjb25zdCBbc3RhcnRUaW1lLCBzZXRTdGFydFRpbWVdID0gdXNlQ2FjaGVkU3RhdGUoQ2FjaGVLZXkuU3RhcnRUaW1lLCAwKTtcbiAgICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VDYWNoZWRTdGF0ZShDYWNoZUtleS5FbmRUaW1lLCAwKTtcbiAgICBjb25zdCB1c2VycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHN0YXRzLmZvckVhY2goKHsgbmFtZSwgaXRlbXMgPSBbXSB9KSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh7IG1lc3NhZ2VzID0gW10gfSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKHsgdXNlciwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHNTb0ZhciA9IChfYSA9IG1hcC5nZXQodXNlcm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldCh1c2VybmFtZSwgWy4uLnJlc3VsdHNTb0ZhciwgbmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW3VzZXJuYW1lLCBlbW9qaV0pID0+ICh7IHVzZXJuYW1lLCBlbW9qaSB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmVtb2ppLmxlbmd0aCAtIGEuZW1vamkubGVuZ3RoKTtcbiAgICB9LCBbc3RhdHNdKTtcbiAgICBjb25zdCBsb2FkU3RhdHMgPSB1c2VDYWxsYmFjaygoZm9yY2VkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gR2V0IHJlYWR5IHRvIGxvYWQgdGhlIGVtb2ppLi4uXG4gICAgICAgIHNldFBlcmNlbnRMb2FkZWQoMCk7XG4gICAgICAgIHNldFN0YXJ0VGltZShEYXRlLm5vdygpKTtcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUuTG9hZGluZ0Vtb2ppKTtcbiAgICAgICAgLy8gRmV0Y2ggdGhlIGVtb2ppIGxpc3QsIHJlYWRpbmcgZnJvbSB0aGUgY2FjaGUgaWYgcG9zc2libGUuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRFbW9qaXMgPSAhZm9yY2VkICYmIGVtb2ppcyAmJiBlbW9qaXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBlbW9qaXNcbiAgICAgICAgICAgIDogeWllbGQgQVBJLmZldGNoRW1vamlMaXN0KHsgc2V0UGVyY2VudExvYWRlZCB9KTtcbiAgICAgICAgaWYgKGZvcmNlZCB8fCAhZW1vamlzKVxuICAgICAgICAgICAgc2V0RW1vamlzKHVwZGF0ZWRFbW9qaXMpO1xuICAgICAgICBzZXRQZXJjZW50TG9hZGVkKDEpO1xuICAgICAgICAvLyBGZXRjaCB0aGUgZW1vamkgc3RhdHMsIHJlYWRpbmcgZnJvbSB0aGUgY2FjaGUgaWYgcG9zc2libGUuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdGF0cyA9ICFmb3JjZWQgJiYgc3RhdHMgJiYgc3RhdHMubGVuZ3RoID4gMCA/IHN0YXRzIDogW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0YXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRpbmdTdGF0cyk7XG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCgwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVtb2ppIG9mIHVwZGF0ZWRFbW9qaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1cGRhdGVkRW1vamlzLmZpbmRJbmRleCgoZSkgPT4gZSA9PT0gZW1vamkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNvdW50LCBpdGVtcyB9ID0geWllbGQgQVBJLmZldGNoRW1vamlVc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1vamk6IGVtb2ppLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRQZXJjZW50TG9hZGVkKChpbmRleCArIDEpIC8gdXBkYXRlZEVtb2ppcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZW1vamkgaGFzIGFuIGFsaWFzIHRoZW4gd2UgbmVlZCB0byBmaW5kIHRoZSBvcmlnaW5hbCBlbW9qaVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxFbW9qaUluZGV4ID0gdXBkYXRlZFN0YXRzLmZpbmRJbmRleCgoZSkgPT4gZW1vamkuYWxpYXNfZm9yICYmIGUubmFtZSA9PT0gZW1vamkuYWxpYXNfZm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEVtb2ppSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRTdGF0c1tvcmlnaW5hbEVtb2ppSW5kZXhdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1cGRhdGVkU3RhdHNbb3JpZ2luYWxFbW9qaUluZGV4XSksIHsgaXRlbXM6IFsuLi51cGRhdGVkU3RhdHNbb3JpZ2luYWxFbW9qaUluZGV4XS5pdGVtcywgLi4uaXRlbXNdLCBjb3VudDogdXBkYXRlZFN0YXRzW29yaWdpbmFsRW1vamlJbmRleF0uY291bnQgKyBjb3VudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgY2FzZSwganVzdCBhZGQgdGhlIGVtb2ppIHN0YXRzIHRvIHRoZSBsaXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFN0YXRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGVtb2ppLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAoKF9hID0gZW1vamkuY3JlYXRlZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCkgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBsb2FkIGFsbCBzdGF0c1wiLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRQZXJjZW50TG9hZGVkKDEpO1xuICAgICAgICAgICAgc2V0U3RhdHModXBkYXRlZFN0YXRzLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KSk7XG4gICAgICAgICAgICBzZXRFbmRUaW1lKERhdGUubm93KCkpO1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBTdGF0ZS5FcnJvcilcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5Mb2FkZWQpO1xuICAgICAgICB9XG4gICAgfSksIFtzdGF0c10pO1xuICAgIGNvbnN0IGltcG9ydFN0YXRzID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaWxlXSA9IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvbkRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBqc29uID0gdmFsaWRhdGVTdGF0c0pTT04oanNvbkRhdGEpO1xuICAgICAgICAgICAgaWYgKCFqc29uKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNldFllYXIoanNvbi55ZWFyKTtcbiAgICAgICAgICAgIHNldEVtb2ppcyhqc29uLmVtb2ppcyk7XG4gICAgICAgICAgICBzZXRTdGF0cyhqc29uLnN0YXRzKTtcbiAgICAgICAgICAgIHNldFN0YXJ0VGltZShqc29uLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICBzZXRFbmRUaW1lKGpzb24uZW5kVGltZSk7XG4gICAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5Mb2FkZWQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZXRhID0gY2FsY3VsYXRlRVRBKGVtb2ppcy5sZW5ndGggLSBwZXJjZW50TG9hZGVkICogZW1vamlzLmxlbmd0aCk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlICE9PSBTdGF0ZS5Mb2FkaW5nU3RhdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRSYXRlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHBlcmNlbnRMb2FkZWQgKiAxMDApO1xuICAgICAgICBpZiAocGVyY2VudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldFJhdGUoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwcm94aW1hdGUgcnVubmluZyBldmVyeSAxJSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGxvYWRpbmcgcHJvY2Vzcy5cbiAgICAgICAgLy8gRHVlIHRvIHRoZSBsYXJnZSBudW1iZXJzIHdlIHdvbid0IGV2ZXIgaGl0IGEgcGVyZmVjdCAxJSBzbyB3ZSdsbCBqdXN0XG4gICAgICAgIC8vIGFwcHJveGltYXRlIHRoZSBpbmNyZW1lbnQuXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VTZXQgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHBlcmNlbnRhZ2VTZXQuaGFzKHBlcmNlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlU2V0LmFkZChwZXJjZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBzZWNvbmRzRWxhcHNlZCA9IChub3cgLSBzdGFydFRpbWUpIC8gMTAwMDtcbiAgICAgICAgY29uc3QgcmF0ZSA9IHNlY29uZHNFbGFwc2VkIC8gKHBlcmNlbnRMb2FkZWQgKiBlbW9qaXMubGVuZ3RoKTtcbiAgICAgICAgc2V0UmF0ZSgoY3VycmVudFJhdGUpID0+IChjdXJyZW50UmF0ZSAqIChwZXJjZW50ICogMTAwKSArIHJhdGUpIC8gKHBlcmNlbnQgKiAxMDAgKyAxKSk7XG4gICAgfSwgW3BlcmNlbnRMb2FkZWQsIHN0YXJ0VGltZSwgc3RhdGVdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyLFxuICAgICAgICBlbW9qaXMsXG4gICAgICAgIHN0YXRzLFxuICAgICAgICB1c2VycyxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBlcmNlbnRMb2FkZWQsXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgZW5kVGltZSxcbiAgICAgICAgZXRhLFxuICAgICAgICBsb2FkU3RhdHMsXG4gICAgICAgIGltcG9ydFN0YXRzLFxuICAgIH07XG59XG4iLCJleHBvcnQgdmFyIEFQSUVuZHBvaW50O1xuKGZ1bmN0aW9uIChBUElFbmRwb2ludCkge1xuICAgIEFQSUVuZHBvaW50W1wiRW1vamlMaXN0XCJdID0gXCJlbW9qaS5hZG1pbkxpc3RcIjtcbiAgICBBUElFbmRwb2ludFtcIkVtb2ppVXNhZ2VcIl0gPSBcInNlYXJjaC5tb2R1bGVzLm1lc3NhZ2VzXCI7XG4gICAgQVBJRW5kcG9pbnRbXCJQcm9maWxlXCJdID0gXCJfX3Byb2ZpbGVfcGxhY2Vob2xkZXJfX1wiO1xufSkoQVBJRW5kcG9pbnQgfHwgKEFQSUVuZHBvaW50ID0ge30pKTtcbiIsIi8vIEFwcCBzdGF0ZXMuXG5leHBvcnQgdmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1wiSW5pdGlhbFwiXSA9IFwiaW5pdGlhbFwiO1xuICAgIFN0YXRlW1wiRW1wdHlcIl0gPSBcImVtcHR5XCI7XG4gICAgU3RhdGVbXCJMb2FkaW5nRW1vamlcIl0gPSBcImxvYWRpbmctZW1vamlcIjtcbiAgICBTdGF0ZVtcIkxvYWRpbmdTdGF0c1wiXSA9IFwibG9hZGluZy1zdGF0c1wiO1xuICAgIFN0YXRlW1wiTG9hZGVkXCJdID0gXCJsb2FkZWRcIjtcbiAgICBTdGF0ZVtcIkVycm9yXCJdID0gXCJlcnJvclwiO1xufSkoU3RhdGUgfHwgKFN0YXRlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ2FjaGVLZXk7XG4oZnVuY3Rpb24gKENhY2hlS2V5KSB7XG4gICAgQ2FjaGVLZXlbXCJFbW9qaVwiXSA9IFwiZW1vamlDYWNoZTJcIjtcbiAgICBDYWNoZUtleVtcIlN0YXRzXCJdID0gXCJzdGF0c0NhY2hlMlwiO1xuICAgIENhY2hlS2V5W1wiU3RhcnRUaW1lXCJdID0gXCJzdGFydFRpbWUyXCI7XG4gICAgQ2FjaGVLZXlbXCJFbmRUaW1lXCJdID0gXCJlbmRUaW1lMlwiO1xufSkoQ2FjaGVLZXkgfHwgKENhY2hlS2V5ID0ge30pKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX2EsIF9BUElfc2xlZXAsIF9BUElfZ2V0QXBpVG9rZW4sIF9BUElfZ2V0RW50ZXJwcmlzZVRva2VuLCBfQVBJX2dldFRlYW1JRCwgX0FQSV9nZXRFbnRlcnByaXNlSUQsIF9BUElfY3JlYXRlRm9ybURhdGEsIF9BUElfcG9zdDtcbmltcG9ydCB7IEFQSUVuZHBvaW50IH0gZnJvbSBcIi4uL3R5cGVzL2FwaS10eXBlc1wiO1xuLy8gQVBJIGNsYXNzIHRvIGZldGNoIGRhdGEgZnJvbSBTbGFjay5cbmV4cG9ydCBjbGFzcyBBUEkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGZldGNoZXMgdGhlIGxpc3Qgb2YgZW1vamkgZnJvbSB0aGUgU2xhY2sgQVBJLlxuICAgIHN0YXRpYyBmZXRjaEVtb2ppTGlzdChfYikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHsgcGFnZVNpemUgPSAxMDAwLCBwYWdlID0gMSwgYXR0ZW1wdCA9IDAsIHNldFBlcmNlbnRMb2FkZWQsIH0pIHtcbiAgICAgICAgICAgIHZhciBfYywgX2Q7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZW1vamksIHBhZ2luZzogeyBwYWdlcyA9IDEgfSA9IHt9LCBlcnJvciwgfSA9IChfZCA9ICh5aWVsZCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9wb3N0KS5jYWxsKHRoaXMsIEFQSUVuZHBvaW50LkVtb2ppTGlzdCwge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9jcmVhdGVGb3JtRGF0YSkuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfZ2V0QXBpVG9rZW4pLmNhbGwodGhpcykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBhZ2VTaXplLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9KSkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1vamk6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmc6IHsgcGFnZXM6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiTm8gcmVzcG9uc2VcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQZXJjZW50TG9hZGVkKHBhZ2UgLyBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UgPT09IHBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbW9qaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtb2ppLmNvbmNhdCh5aWVsZCB0aGlzLmZldGNoRW1vamlMaXN0KHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UgKyAxLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIGZldGNoIGVtb2ppIGxpc3RcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgMykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9zbGVlcCkuY2FsbCh0aGlzLCA1MDAwICogKGF0dGVtcHQgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoRW1vamlMaXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRMb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0OiBhdHRlbXB0ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGZldGNoZXMgdGhlIHVzYWdlIHN0YXRzIGZvciBhIGdpdmVuIGVtb2ppIGZyb20gdGhlIFNsYWNrIEFQSS5cbiAgICBzdGF0aWMgZmV0Y2hFbW9qaVVzYWdlKF9iKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoeyB5ZWFyLCBlbW9qaSwgYXR0ZW1wdCA9IDAsIH0pIHtcbiAgICAgICAgICAgIHZhciBfYywgX2Q7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHBhZ2luYXRpb246IHsgdG90YWxfY291bnQsIHBhZ2VzIH0gPSB7fSwgZXJyb3IsIH0gPSAoX2QgPSAoeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfcG9zdCkuY2FsbCh0aGlzLCBBUElFbmRwb2ludC5FbW9qaVVzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX2NyZWF0ZUZvcm1EYXRhKS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAoX2MgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9nZXRBcGlUb2tlbikuY2FsbCh0aGlzKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGhhc215Ojoke2Vtb2ppfTpgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBhZnRlcjoke3llYXJ9LTAxLTAxYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmVmb3JlOiR7eWVhciArIDF9LTAxLTAxYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vX3VzZXJfcHJvZmlsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhX21lc3NhZ2VfZGF0YTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4X2V4dHJhY3RfbGVuOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeV9yZWZpbmVtZW50X3N1Z2dlc3Rpb25zX3ZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldHNfcmVzdWx0X2NvdW50OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX29ubHlfdGVhbTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9vbmx5X215X2NoYW5uZWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9leGNsdWRlX2JvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2NvbnRleHQ6IFwiZGVza3RvcF9tZXNzYWdlc190YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVfZmlsZXNfc2hhcmVzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlfcmV3cml0ZV9kaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlX3RpdGxlX29ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxfY29ycmVjdGlvbjogXCJGVVpaWV9NQVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX3RhYl9maWx0ZXI6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF90YWJfc29ydDogXCJ0aW1lc3RhbXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IFwidGltZXN0YW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0X2RpcjogXCJkZXNjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhfZmlsdGVyX3N1Z2dlc3Rpb25zOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSkpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogeyB0b3RhbF9jb3VudDogMCwgcGFnZXM6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiTm8gcmVzcG9uc2VcIixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsX2NvdW50ICE9PSBudWxsICYmIHRvdGFsX2NvdW50ICE9PSB2b2lkIDAgPyB0b3RhbF9jb3VudCA6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIGZldGNoIHN0YXRzXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfc2xlZXApLmNhbGwodGhpcywgNTAwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEVtb2ppVXNhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdDogYXR0ZW1wdCArIDEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBpdGVtczogW10sIGNvdW50OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBGZXRjaGVzIHRoZSBwcm9maWxlIG9mIGEgZ2l2ZW4gdXNlciBmcm9tIHRoZSBTbGFjayBBUEkuXG4gICAgc3RhdGljIGZldGNoUHJvZmlsZShfYikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHsgdXNlcm5hbWUsIGF0dGVtcHQgPSAwLCB9KSB7XG4gICAgICAgICAgICB2YXIgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgb2JqZWN0cywgZXJyb3IgfSA9IChfZSA9ICh5aWVsZCAoKF9kID0gKF9jID0gd2luZG93LlRTKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubWVtYmVycykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZldGNoQW5kVXBzZXJ0TWVtYmVyc1dpdGhRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICB9KSkpKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiB7fTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfZiA9IG9iamVjdHMgPT09IG51bGwgfHwgb2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqZWN0cy5maW5kKCh1c2VyKSA9PiB1c2VyLm5hbWUgPT09IHVzZXJuYW1lKSkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIGZldGNoIHByb2ZpbGVcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfc2xlZXApLmNhbGwodGhpcywgNTAwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFByb2ZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0OiBhdHRlbXB0ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5fYSA9IEFQSSwgX0FQSV9zbGVlcCA9IGZ1bmN0aW9uIF9BUElfc2xlZXAodGltZW91dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0sIF9BUElfZ2V0QXBpVG9rZW4gPSBmdW5jdGlvbiBfQVBJX2dldEFwaVRva2VuKCkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvb3RfZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFwaV90b2tlbjtcbn0sIF9BUElfZ2V0RW50ZXJwcmlzZVRva2VuID0gZnVuY3Rpb24gX0FQSV9nZXRFbnRlcnByaXNlVG9rZW4oKSB7XG4gICAgdmFyIF9iLCBfYztcbiAgICByZXR1cm4gKF9jID0gKF9iID0gd2luZG93LlRTKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYm9vdF9kYXRhKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZW50ZXJwcmlzZV9hcGlfdG9rZW47XG59LCBfQVBJX2dldFRlYW1JRCA9IGZ1bmN0aW9uIF9BUElfZ2V0VGVhbUlEKCkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvb3RfZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRlYW1faWQ7XG59LCBfQVBJX2dldEVudGVycHJpc2VJRCA9IGZ1bmN0aW9uIF9BUElfZ2V0RW50ZXJwcmlzZUlEKCkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvb3RfZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmVudGVycHJpc2VfaWQ7XG59LCBfQVBJX2NyZWF0ZUZvcm1EYXRhID0gZnVuY3Rpb24gX0FQSV9jcmVhdGVGb3JtRGF0YShwYXJhbXMpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCBgJHt2YWx1ZX1gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn0sIF9BUElfcG9zdCA9IGZ1bmN0aW9uIF9BUElfcG9zdChlbmRwb2ludCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYiwgX2MsIF9kO1xuICAgICAgICBjb25zdCBvcmcgPSAoX2QgPSAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tb2RlbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRlYW0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5kb21haW47XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly8ke29yZ30uc2xhY2suY29tL2FwaS8ke2VuZHBvaW50fWAsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHsgbWV0aG9kOiBcIlBPU1RcIiB9KSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgQVBJRW5kcG9pbnQgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBfQXN5bmNTdG9yYWdlX2RiTmFtZSwgX0FzeW5jU3RvcmFnZV9zdG9yZU5hbWUsIF9Bc3luY1N0b3JhZ2VfZGJQcm9taXNlLCBfQXN5bmNTdG9yYWdlX2luaXREQiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmU7XG4vLyBJbmRleGVkREIgd3JhcHBlciB0byBzdG9yZSBhbmQgcmV0cmlldmUgZGF0YS5cbmV4cG9ydCBjbGFzcyBBc3luY1N0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9IFwiQXN5bmNTdG9yYWdlREJcIiwgc3RvcmVOYW1lID0gXCJBc3luY1N0b3JhZ2VTdG9yZVwiKSB7XG4gICAgICAgIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0FzeW5jU3RvcmFnZV9kYk5hbWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiTmFtZSwgZGJOYW1lLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FzeW5jU3RvcmFnZV9zdG9yZU5hbWUsIHN0b3JlTmFtZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfZGJQcm9taXNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV9pbml0REIpLmNhbGwodGhpcyksIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiBzdG9yZS5wdXQodmFsdWUsIGtleSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9pbnN0YW5jZXMsIFwibVwiLCBfQXN5bmNTdG9yYWdlX3dpdGhTdG9yZSkuY2FsbCh0aGlzLCBcInJlYWRvbmx5XCIsIChzdG9yZSkgPT4gc3RvcmUuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9pbnN0YW5jZXMsIFwibVwiLCBfQXN5bmNTdG9yYWdlX3dpdGhTdG9yZSkuY2FsbCh0aGlzLCBcInJlYWR3cml0ZVwiLCAoc3RvcmUpID0+IHN0b3JlLmRlbGV0ZShrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9pbnN0YW5jZXMsIFwibVwiLCBfQXN5bmNTdG9yYWdlX3dpdGhTdG9yZSkuY2FsbCh0aGlzLCBcInJlYWR3cml0ZVwiLCAoc3RvcmUpID0+IHN0b3JlLmNsZWFyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fQXN5bmNTdG9yYWdlX2RiTmFtZSA9IG5ldyBXZWFrTWFwKCksIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lID0gbmV3IFdlYWtNYXAoKSwgX0FzeW5jU3RvcmFnZV9kYlByb21pc2UgPSBuZXcgV2Vha01hcCgpLCBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Bc3luY1N0b3JhZ2VfaW5pdERCID0gZnVuY3Rpb24gX0FzeW5jU3RvcmFnZV9pbml0REIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfZGJOYW1lLCBcImZcIiksIDEpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSAoX2EgPSBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBcImZcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9zdG9yZU5hbWUsIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7IHZhciBfYTsgcmV0dXJuIHJlc29sdmUoKF9hID0gZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc3VsdCk7IH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHsgdmFyIF9hOyByZXR1cm4gcmVqZWN0KChfYSA9IGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcik7IH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUgPSBmdW5jdGlvbiBfQXN5bmNTdG9yYWdlX3dpdGhTdG9yZSh0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGRiID0geWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBcImZcIiksIHR5cGUpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBcImZcIikpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGNhbGxiYWNrKHN0b3JlKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9hLCBfQ2FjaGVfU3RvcmFnZTtcbmltcG9ydCB7IEFzeW5jU3RvcmFnZSB9IGZyb20gXCIuL0FzeW5jU3RvcmFnZVwiO1xuaW1wb3J0IHsgQ2FjaGVLZXkgfSBmcm9tIFwiLi4vdHlwZXMvY2FjaGUtdHlwZXNcIjtcbi8vIENhY2hlIGNsYXNzIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBkYXRhLlxuZXhwb3J0IGNsYXNzIENhY2hlIHtcbiAgICBzdGF0aWMgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJmXCIsIF9DYWNoZV9TdG9yYWdlKS5nZXQoa2V5KTtcbiAgICB9XG4gICAgc3RhdGljIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwiZlwiLCBfQ2FjaGVfU3RvcmFnZSkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbn1cbl9hID0gQ2FjaGU7XG5fQ2FjaGVfU3RvcmFnZSA9IHsgdmFsdWU6IG5ldyBBc3luY1N0b3JhZ2UoKSB9O1xuZXhwb3J0IHsgQ2FjaGVLZXkgfTtcbiIsIi8vIERvd25sb2FkcyBhIEpTT04gZmlsZS5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEpTT04oZGF0YSwgZmlsZW5hbWUpIHtcbiAgICAvLyBDcmVhdGluZyBhIGJsb2Igb2JqZWN0IGZyb20gbm9uLWJsb2IgZGF0YSB1c2luZyB0aGUgQmxvYiBjb25zdHJ1Y3RvclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgXCJcXHRcIildLCB7XG4gICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGFuY2hvciBlbGVtZW50XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLmRvd25sb2FkID0gZmlsZW5hbWUgfHwgXCJkb3dubG9hZFwiO1xuICAgIGEuY2xpY2soKTtcbiAgICBhLnJlbW92ZSgpO1xufVxuIiwiLy8gRm9ybWF0cyB0aGUgdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIHRpbWVzdGFtcHMuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZURpZmZlcmVuY2Uoc3RhcnRUaW1lLCBlbmRUaW1lKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGVuZFRpbWUgLSBzdGFydFRpbWUpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBgJHtob3Vyc31oICR7bWludXRlcyAlIDYwfW0gJHtzZWNvbmRzICUgNjB9c2A7XG59XG4iLCIvLyBTaHVmZmxlcyB0aGUgZ2l2ZW4gYXJyYXksIHJldHVybmluZyBhIG5ldyBhcnJheS5cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dOyAvLyBTd2FwIGVsZW1lbnRzXG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0YXRzSlNPTihqc29uRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgeWVhciwgZW1vamlzLCBzdGF0cywgc3RhcnRUaW1lLCBlbmRUaW1lIH0gPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB5ZWFyICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHllYXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVtb2ppcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW1vamlzIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVtb2ppcy5zb21lKCh7IG5hbWUsIHVybCwgY3JlYXRlZCwgYWxpYXNfZm9yIH0pID0+IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY3JlYXRlZCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGFsaWFzX2ZvciAhPT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW1vamkgZGF0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RhdHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXRzIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRzLnNvbWUoKHsgbmFtZSwgdXJsLCBjcmVhdGVkQXQsIGl0ZW1zLCBjb3VudCB9KSA9PiB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNyZWF0ZWRBdCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkoaXRlbXMpIHx8XG4gICAgICAgICAgICBpdGVtcy5zb21lKCh7IG1lc3NhZ2VzIH0pID0+ICFBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSB8fFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnNvbWUoKHsgdXNlciwgdXNlcm5hbWUgfSkgPT4gdHlwZW9mIHVzZXIgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiKSkgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjb3VudCAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhdCBkYXRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhcnRUaW1lICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXJ0IHRpbWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlbmRUaW1lICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVuZCB0aW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgZW1vamlzLFxuICAgICAgICAgICAgc3RhdHMsXG4gICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoYEludmFsaWQgSlNPTiBkYXRhOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuKCgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZW5kZXIoaHRtbCBgPCR7QXBwfSAvPmAsIHJvb3QpO1xuICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RfZW1vamlfc2VjdGlvblwiKTtcbiAgICBpZiAoIWFuY2hvckVsZW1lbnQpXG4gICAgICAgIHJldHVybjtcbiAgICBhbmNob3JFbGVtZW50Lmluc2VydEJlZm9yZShyb290LCBhbmNob3JFbGVtZW50LmZpcnN0Q2hpbGQpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==