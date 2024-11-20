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
    const { year, emojis, stats, users, state, percentLoaded, startTime, endTime, loadStats, importStats, } = (0,_hooks_use_emoji__WEBPACK_IMPORTED_MODULE_1__.useEmoji)();
    return (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `
		<div className="app">
			<h2 className="app-title">Emoji Wrapped ✨</h2>
			${state === _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Initial && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader} />`}
			${[_types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.Empty, _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.LoadingStats, _types_app_state__WEBPACK_IMPORTED_MODULE_6__.State.LoadingEmoji].includes(state) &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState}
				state=${state}
				percentLoaded=${percentLoaded}
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





const EmptyState = ({ state, percentLoaded, loadStats, importStats, }) => {
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
				<${_Button__WEBPACK_IMPORTED_MODULE_1__.Button}
					className="app-button"
					type=${_Button__WEBPACK_IMPORTED_MODULE_1__.ButtonType.Outline}
					onFileUpload=${importStats}
				>
					Import JSON
				<//>
			</div>
			<p className="app-footer">
				${isLoading &&
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.html) `<${_ProgressBar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar}
					title=${state === _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingEmoji
            ? "(1/2) Loading emoji..."
            : "(2/2) Loading stats..."}
					percent=${percentLoaded}
				/>`}
				<i> This may take a while for workspaces with many emoji. </i>
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
    const title = year === currentYear ? "This year" : `In ${year}`;
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
						onClick=${() => (0,_utilities_download_json__WEBPACK_IMPORTED_MODULE_4__.downloadJSON)({ emojis, stats, startTime, endTime }, "emoji-wrapped.json")}
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
/* harmony import */ var _types_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/app-state */ "./src/types/app-state.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function useEmoji() {
    const [year, setYear] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getFullYear());
    const [percentLoaded, setPercentLoaded] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Initial);
    const [emojis, setEmojis] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.Emoji, []);
    const [stats, setStats] = (0,_use_cached_state__WEBPACK_IMPORTED_MODULE_1__.useCachedState)(_utilities_Cache__WEBPACK_IMPORTED_MODULE_2__.CacheKey.Stats, [], (value) => {
        setState(value ? _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Loaded : _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Empty);
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
        setState(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingEmoji);
        // Fetch the emoji list, reading from the cache if possible.
        const updatedEmojis = !forced && emojis
            ? emojis
            : yield _utilities_API__WEBPACK_IMPORTED_MODULE_3__.API.fetchEmojiList({ setPercentLoaded });
        if (forced || !emojis)
            setEmojis(updatedEmojis);
        setPercentLoaded(1);
        const nonAliasedEmoji = updatedEmojis.filter(({ alias_for }) => !alias_for);
        // Fetch the emoji stats, reading from the cache if possible.
        const updatedStats = !forced && stats ? stats : [];
        try {
            if (updatedStats.length === 0) {
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.LoadingStats);
                setPercentLoaded(0);
                for (const emoji of nonAliasedEmoji) {
                    const index = nonAliasedEmoji.findIndex((e) => e === emoji);
                    const { count, items } = yield _utilities_API__WEBPACK_IMPORTED_MODULE_3__.API.fetchEmojiUsage({
                        year,
                        emoji: emoji.name,
                    });
                    setPercentLoaded((index + 1) / nonAliasedEmoji.length);
                    if (count > 0) {
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
        catch (error) {
            console.error("EW: Failed to load all stats", error);
            setState(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Error);
        }
        finally {
            setPercentLoaded(1);
            setStats(updatedStats.sort((a, b) => b.count - a.count));
            setEndTime(Date.now());
            if (state !== _types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Error)
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Loaded);
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
            try {
                const { year, emojis, stats, startTime, endTime } = JSON.parse(jsonData);
                setYear(year);
                setEmojis(emojis);
                setStats(stats);
                setStartTime(startTime);
                setEndTime(endTime);
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_4__.State.Loaded);
            }
            catch (_a) {
                console.error("EW: Failed to parse uploaded report");
                return;
            }
        };
        reader.readAsText(file);
    }, []);
    return {
        year,
        emojis,
        stats,
        users,
        state,
        percentLoaded,
        startTime,
        endTime,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksYUFBYSxJQUFJLGFBQWE7QUFDdEQ7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ087QUFDUCxtQ0FBbUMsT0FBTztBQUMxQztBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUNPO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLDhDQUFNLENBQUMsZ0RBQUksS0FBSyxnREFBRyxFQUFFO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9ub2RlX21vZHVsZXMvaHRtL2Rpc3QvaHRtLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL2h0bS9wcmVhY3QvaW5kZXgubW9kdWxlLmpzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvQXBwLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9FbW9qaXMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0VtcHR5U3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0Vycm9yU3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0xvYWRlZFN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Vc2VyLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Vc2Vycy50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2hvb2tzL3VzZS1jYWNoZWQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9ob29rcy91c2UtZW1vamkudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9hcGktdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9hcHAtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9jYWNoZS10eXBlcy50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9BUEkudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvQXN5bmNTdG9yYWdlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL0NhY2hlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL2Rvd25sb2FkLWpzb24udHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvZm9ybWF0LXRpbWUtZGlmZmVyZW5jZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9zaHVmZmxlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsImltcG9ydHtoIGFzIHIsQ29tcG9uZW50IGFzIG8scmVuZGVyIGFzIHR9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2gscmVuZGVyLENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtpbXBvcnQgZSBmcm9tXCJodG1cIjt2YXIgbT1lLmJpbmQocik7ZXhwb3J0e20gYXMgaHRtbH07XG4iLCJ2YXIgbixsLHUsdCxpLG8scixmLGUsYyxzLGEsaD17fSx2PVtdLHA9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaSx5PUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gZChuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiB3KG4pe24mJm4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIF8obCx1LHQpe3ZhciBpLG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj9pPXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiBnKGwsZixpLG8sbnVsbCl9ZnVuY3Rpb24gZyhuLHQsaSxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6dCxrZXk6aSxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PXImJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBtKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gYihuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBrKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIHgobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP3gobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP3gobik6bnVsbH1mdW5jdGlvbiBDKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gQyhuKX19ZnVuY3Rpb24gUyhuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZpLnB1c2gobikmJiFNLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoTSl9ZnVuY3Rpb24gTSgpe3ZhciBuLHUsdCxvLHIsZSxjLHM7Zm9yKGkuc29ydChmKTtuPWkuc2hpZnQoKTspbi5fX2QmJih1PWkubGVuZ3RoLG89dm9pZCAwLGU9KHI9KHQ9bikuX192KS5fX2UsYz1bXSxzPVtdLHQuX19QJiYoKG89ZCh7fSxyKSkuX192PXIuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSxPKHQuX19QLG8scix0Ll9fbix0Ll9fUC5uYW1lc3BhY2VVUkksMzImci5fX3U/W2VdOm51bGwsYyxudWxsPT1lP3gocik6ZSwhISgzMiZyLl9fdSkscyksby5fX3Y9ci5fX3Ysby5fXy5fX2tbby5fX2ldPW8saihjLG8scyksby5fX2UhPWUmJkMobykpLGkubGVuZ3RoPnUmJmkuc29ydChmKSk7TS5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEscCx5LGQsdyxfPXQmJnQuX19rfHx2LGc9bC5sZW5ndGg7Zm9yKHUuX19kPWUsJCh1LGwsXyksZT11Ll9fZCxhPTA7YTxnO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihwPS0xPT09eS5fX2k/aDpfW3kuX19pXXx8aCx5Ll9faT1hLE8obix5LHAsaSxvLHIsZixlLGMscyksZD15Ll9fZSx5LnJlZiYmcC5yZWYhPXkucmVmJiYocC5yZWYmJk4ocC5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLDY1NTM2JnkuX191fHxwLl9faz09PXkuX19rP2U9SSh5LGUsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT15Ll9fZD9lPXkuX19kOmQmJihlPWQubmV4dFNpYmxpbmcpLHkuX19kPXZvaWQgMCx5Ll9fdSY9LTE5NjYwOSk7dS5fX2Q9ZSx1Ll9fZT13fWZ1bmN0aW9uICQobixsLHUpe3ZhciB0LGksbyxyLGYsZT1sLmxlbmd0aCxjPXUubGVuZ3RoLHM9YyxhPTA7Zm9yKG4uX19rPVtdLHQ9MDt0PGU7dCsrKW51bGwhPShpPWxbdF0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIGkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGk/KHI9dCthLChpPW4uX19rW3RdPVwic3RyaW5nXCI9PXR5cGVvZiBpfHxcIm51bWJlclwiPT10eXBlb2YgaXx8XCJiaWdpbnRcIj09dHlwZW9mIGl8fGkuY29uc3RydWN0b3I9PVN0cmluZz9nKG51bGwsaSxudWxsLG51bGwsbnVsbCk6eShpKT9nKGIse2NoaWxkcmVuOml9LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1pLmNvbnN0cnVjdG9yJiZpLl9fYj4wP2coaS50eXBlLGkucHJvcHMsaS5rZXksaS5yZWY/aS5yZWY6bnVsbCxpLl9fdik6aSkuX189bixpLl9fYj1uLl9fYisxLG89bnVsbCwtMSE9PShmPWkuX19pPUwoaSx1LHIscykpJiYocy0tLChvPXVbZl0pJiYoby5fX3V8PTEzMTA3MikpLG51bGw9PW98fG51bGw9PT1vLl9fdj8oLTE9PWYmJmEtLSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLnR5cGUmJihpLl9fdXw9NjU1MzYpKTpmIT09ciYmKGY9PXItMT9hLS06Zj09cisxP2ErKzooZj5yP2EtLTphKyssaS5fX3V8PTY1NTM2KSkpOmk9bi5fX2tbdF09bnVsbDtpZihzKWZvcih0PTA7dDxjO3QrKyludWxsIT0obz11W3RdKSYmMD09KDEzMTA3MiZvLl9fdSkmJihvLl9fZT09bi5fX2QmJihuLl9fZD14KG8pKSxWKG8sbykpfWZ1bmN0aW9uIEkobixsLHUpe3ZhciB0LGk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlKXtmb3IodD1uLl9fayxpPTA7dCYmaTx0Lmxlbmd0aDtpKyspdFtpXSYmKHRbaV0uX189bixsPUkodFtpXSxsLHUpKTtyZXR1cm4gbH1uLl9fZSE9bCYmKGwmJm4udHlwZSYmIXUuY29udGFpbnMobCkmJihsPXgobikpLHUuaW5zZXJ0QmVmb3JlKG4uX19lLGx8fG51bGwpLGw9bi5fX2UpO2Rve2w9bCYmbC5uZXh0U2libGluZ313aGlsZShudWxsIT1sJiY4PT09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gSChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KHkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBMKG4sbCx1LHQpe3ZhciBpPW4ua2V5LG89bi50eXBlLHI9dS0xLGY9dSsxLGU9bFt1XTtpZihudWxsPT09ZXx8ZSYmaT09ZS5rZXkmJm89PT1lLnR5cGUmJjA9PSgxMzEwNzImZS5fX3UpKXJldHVybiB1O2lmKHQ+KG51bGwhPWUmJjA9PSgxMzEwNzImZS5fX3UpPzE6MCkpZm9yKDtyPj0wfHxmPGwubGVuZ3RoOyl7aWYocj49MCl7aWYoKGU9bFtyXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gcjtyLS19aWYoZjxsLmxlbmd0aCl7aWYoKGU9bFtmXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gZjtmKyt9fXJldHVybi0xfWZ1bmN0aW9uIFQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxwLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBBKG4sbCx1LHQsaSl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlLmNzc1RleHQ9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxUKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09PXRbbF18fFQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLFwiJDFcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbnx8XCJvbkZvY3VzT3V0XCI9PT1sfHxcIm9uRm9jdXNJblwiPT09bD9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT90P3UudT10LnU6KHUudT1lLG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/czpjLG8pKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP3M6YyxvKTtlbHNle2lmKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09aSlsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwid2lkdGhcIiE9bCYmXCJoZWlnaHRcIiE9bCYmXCJocmVmXCIhPWwmJlwibGlzdFwiIT1sJiZcImZvcm1cIiE9bCYmXCJ0YWJJbmRleFwiIT1sJiZcImRvd25sb2FkXCIhPWwmJlwicm93U3BhblwiIT1sJiZcImNvbFNwYW5cIiE9bCYmXCJyb2xlXCIhPWwmJlwicG9wb3ZlclwiIT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmXCItXCIhPT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsXCJwb3BvdmVyXCI9PWwmJjE9PXU/XCJcIjp1KSl9fWZ1bmN0aW9uIEYobil7cmV0dXJuIGZ1bmN0aW9uKHUpe2lmKHRoaXMubCl7dmFyIHQ9dGhpcy5sW3UudHlwZStuXTtpZihudWxsPT11LnQpdS50PWUrKztlbHNlIGlmKHUudDx0LnUpcmV0dXJuO3JldHVybiB0KGwuZXZlbnQ/bC5ldmVudCh1KTp1KX19fWZ1bmN0aW9uIE8obix1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEsaCx2LHAsdyxfLGcsbSx4LEMsUyxNLCQsSSxILEwsVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsxMjgmdC5fX3UmJihjPSEhKDMyJnQuX191KSxyPVtlPXUuX19lPXQuX19lXSksKGE9bC5fX2IpJiZhKHUpO246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl0cnl7aWYobT11LnByb3BzLHg9XCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcixDPShhPVQuY29udGV4dFR5cGUpJiZpW2EuX19jXSxTPWE/Qz9DLnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9nPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooeD91Ll9fYz1oPW5ldyBUKG0sUyk6KHUuX19jPWg9bmV3IGsobSxTKSxoLmNvbnN0cnVjdG9yPVQsaC5yZW5kZXI9cSksQyYmQy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9UyxoLl9fbj1pLHY9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLHgmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSkseCYmbnVsbCE9VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWQoe30saC5fX3MpKSxkKGguX19zLFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkscD1oLnByb3BzLHc9aC5zdGF0ZSxoLl9fdj11LHYpeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLHgmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZih4JiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXAmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0sUyksIWguX19lJiYobnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyxTKXx8dS5fX3Y9PT10Ll9fdikpe2Zvcih1Ll9fdiE9PXQuX192JiYoaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEpLHUuX19lPXQuX19lLHUuX19rPXQuX19rLHUuX19rLnNvbWUoZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxNPTA7TTxoLl9zYi5sZW5ndGg7TSsrKWguX19oLnB1c2goaC5fc2JbTV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyxTKSx4JiZudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHAsdyxfKX0pfWlmKGguY29udGV4dD1TLGgucHJvcHM9bSxoLl9fUD1uLGguX19lPSExLCQ9bC5fX3IsST0wLHgpe2ZvcihoLnN0YXRlPWguX19zLGguX19kPSExLCQmJiQodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxIPTA7SDxoLl9zYi5sZW5ndGg7SCsrKWguX19oLnB1c2goaC5fc2JbSF0pO2guX3NiPVtdfWVsc2UgZG97aC5fX2Q9ITEsJCYmJCh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrSTwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9ZChkKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx4JiYhdiYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKF89aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwLHcpKSxQKG4seShMPW51bGwhPWEmJmEudHlwZT09PWImJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSk/TDpbTF0sdSx0LGksbyxyLGYsZSxjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxnJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPXIpe2Zvcih1Ll9fdXw9Yz8xNjA6MTI4O2UmJjg9PT1lLm5vZGVUeXBlJiZlLm5leHRTaWJsaW5nOyllPWUubmV4dFNpYmxpbmc7cltyLmluZGV4T2YoZSldPW51bGwsdS5fX2U9ZX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PXImJnUuX192PT09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTp1Ll9fZT16KHQuX19lLHUsdCxpLG8scixmLGMscyk7KGE9bC5kaWZmZWQpJiZhKHUpfWZ1bmN0aW9uIGoobix1LHQpe3UuX19kPXZvaWQgMDtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylOKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiB6KHUsdCxpLG8scixmLGUsYyxzKXt2YXIgYSx2LHAsZCxfLGcsbSxiPWkucHJvcHMsaz10LnByb3BzLEM9dC50eXBlO2lmKFwic3ZnXCI9PT1DP3I9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT09Qz9yPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOnJ8fChyPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1mKWZvcihhPTA7YTxmLmxlbmd0aDthKyspaWYoKF89ZlthXSkmJlwic2V0QXR0cmlidXRlXCJpbiBfPT0hIUMmJihDP18ubG9jYWxOYW1lPT09QzozPT09Xy5ub2RlVHlwZSkpe3U9XyxmW2FdPW51bGw7YnJlYWt9aWYobnVsbD09dSl7aWYobnVsbD09PUMpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO3U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHIsQyxrLmlzJiZrKSxjJiYobC5fX20mJmwuX19tKHQsZiksYz0hMSksZj1udWxsfWlmKG51bGw9PT1DKWI9PT1rfHxjJiZ1LmRhdGE9PT1rfHwodS5kYXRhPWspO2Vsc2V7aWYoZj1mJiZuLmNhbGwodS5jaGlsZE5vZGVzKSxiPWkucHJvcHN8fGgsIWMmJm51bGwhPWYpZm9yKGI9e30sYT0wO2E8dS5hdHRyaWJ1dGVzLmxlbmd0aDthKyspYlsoXz11LmF0dHJpYnV0ZXNbYV0pLm5hbWVdPV8udmFsdWU7Zm9yKGEgaW4gYilpZihfPWJbYV0sXCJjaGlsZHJlblwiPT1hKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YSlwPV87ZWxzZSBpZighKGEgaW4gaykpe2lmKFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrKWNvbnRpbnVlO0EodSxhLG51bGwsXyxyKX1mb3IoYSBpbiBrKV89a1thXSxcImNoaWxkcmVuXCI9PWE/ZD1fOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT92PV86XCJ2YWx1ZVwiPT1hP2c9XzpcImNoZWNrZWRcIj09YT9tPV86YyYmXCJmdW5jdGlvblwiIT10eXBlb2YgX3x8YlthXT09PV98fEEodSxhLF8sYlthXSxyKTtpZih2KWN8fHAmJih2Ll9faHRtbD09PXAuX19odG1sfHx2Ll9faHRtbD09PXUuaW5uZXJIVE1MKXx8KHUuaW5uZXJIVE1MPXYuX19odG1sKSx0Ll9faz1bXTtlbHNlIGlmKHAmJih1LmlubmVySFRNTD1cIlwiKSxQKHUseShkKT9kOltkXSx0LGksbyxcImZvcmVpZ25PYmplY3RcIj09PUM/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6cixmLGUsZj9mWzBdOmkuX19rJiZ4KGksMCksYyxzKSxudWxsIT1mKWZvcihhPWYubGVuZ3RoO2EtLTspdyhmW2FdKTtjfHwoYT1cInZhbHVlXCIsXCJwcm9ncmVzc1wiPT09QyYmbnVsbD09Zz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOnZvaWQgMCE9PWcmJihnIT09dVthXXx8XCJwcm9ncmVzc1wiPT09QyYmIWd8fFwib3B0aW9uXCI9PT1DJiZnIT09YlthXSkmJkEodSxhLGcsYlthXSxyKSxhPVwiY2hlY2tlZFwiLHZvaWQgMCE9PW0mJm0hPT11W2FdJiZBKHUsYSxtLGJbYV0scikpfXJldHVybiB1fWZ1bmN0aW9uIE4obix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIFYobix1LHQpe3ZhciBpLG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPT1uLl9fZXx8TihpLG51bGwsdSkpLG51bGwhPShpPW4uX19jKSl7aWYoaS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7aS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9aS5iYXNlPWkuX19QPW51bGx9aWYoaT1uLl9faylmb3Iobz0wO288aS5sZW5ndGg7bysrKWlbb10mJlYoaVtvXSx1LHR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7dHx8dyhuLl9fZSksbi5fX2M9bi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gcShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBCKHUsdCxpKXt2YXIgbyxyLGYsZTtsLl9fJiZsLl9fKHUsdCkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx0Ll9fayxmPVtdLGU9W10sTyh0LHU9KCFvJiZpfHx0KS5fX2s9XyhiLG51bGwsW3VdKSxyfHxoLGgsdC5uYW1lc3BhY2VVUkksIW8mJmk/W2ldOnI/bnVsbDp0LmZpcnN0Q2hpbGQ/bi5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZpP2k6cj9yLl9fZTp0LmZpcnN0Q2hpbGQsbyxlKSxqKGYsdSxlKX1mdW5jdGlvbiBEKG4sbCl7QihuLGwsRCl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGksbyxyLGYsZT1kKHt9LGwucHJvcHMpO2ZvcihyIGluIGwudHlwZSYmbC50eXBlLmRlZmF1bHRQcm9wcyYmKGY9bC50eXBlLmRlZmF1bHRQcm9wcyksdSlcImtleVwiPT1yP2k9dVtyXTpcInJlZlwiPT1yP289dVtyXTplW3JdPXZvaWQgMD09PXVbcl0mJnZvaWQgMCE9PWY/ZltyXTp1W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLGcobC50eXBlLGUsaXx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIithKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9bmV3IFNldCwodD17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dT1udWxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19lPSEwLFMobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5hZGQobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSYmdS5kZWxldGUobiksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj12LnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSx0KXtmb3IodmFyIGksbyxyO2w9bC5fXzspaWYoKGk9bC5fX2MpJiYhaS5fXyl0cnl7aWYoKG89aS5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaS5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj1pLl9fZCksbnVsbCE9aS5jb21wb25lbnREaWRDYXRjaCYmKGkuY29tcG9uZW50RGlkQ2F0Y2gobix0fHx7fSkscj1pLl9fZCkscilyZXR1cm4gaS5fX0U9aX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCx0PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZudWxsPT1uLmNvbnN0cnVjdG9yfSxrLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1kKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oZCh7fSx1KSx0aGlzLnByb3BzKSksbiYmZCh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxTKHRoaXMpKX0say5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLFModGhpcykpfSxrLnByb3RvdHlwZS5yZW5kZXI9YixpPVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZj1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxNLl9fcj0wLGU9MCxjPUYoITEpLHM9RighMCksYT0wO2V4cG9ydHtrIGFzIENvbXBvbmVudCxiIGFzIEZyYWdtZW50LEUgYXMgY2xvbmVFbGVtZW50LEcgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsbSBhcyBjcmVhdGVSZWYsXyBhcyBoLEQgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxCIGFzIHJlbmRlcixIIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCxyLHUsaSxvPTAsZj1bXSxjPW4sZT1jLl9fYixhPWMuX19yLHY9Yy5kaWZmZWQsbD1jLl9fYyxtPWMudW5tb3VudCxzPWMuX187ZnVuY3Rpb24gZChuLHQpe2MuX19oJiZjLl9faChyLG4sb3x8dCksbz0wO3ZhciB1PXIuX19IfHwoci5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiBuPj11Ll9fLmxlbmd0aCYmdS5fXy5wdXNoKHt9KSx1Ll9fW25dfWZ1bmN0aW9uIGgobil7cmV0dXJuIG89MSxwKEQsbil9ZnVuY3Rpb24gcChuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkQodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7aWYoIW8uX19jLl9fSClyZXR1cm4hMDt2YXIgdT1vLl9fYy5fX0guX18uZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiEhbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighY3x8Yy5jYWxsKHRoaXMsbix0LHIpKX07ci51PSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24geShuLHUpe3ZhciBpPWQodCsrLDMpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gXyhuLHUpe3ZhciBpPWQodCsrLDQpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9faC5wdXNoKGkpKX1mdW5jdGlvbiBBKG4pe3JldHVybiBvPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7bz02LF8oZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhuKHQoKSksZnVuY3Rpb24oKXtyZXR1cm4gbihudWxsKX0pOm4/KG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9KTp2b2lkIDB9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gVChuLHIpe3ZhciB1PWQodCsrLDcpO3JldHVybiBDKHUuX19ILHIpJiYodS5fXz1uKCksdS5fX0g9cix1Ll9faD1uKSx1Ll9ffWZ1bmN0aW9uIHEobix0KXtyZXR1cm4gbz04LFQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24geChuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFAobix0KXtjLnVzZURlYnVnVmFsdWUmJmMudXNlRGVidWdWYWx1ZSh0P3Qobik6bil9ZnVuY3Rpb24gYihuKXt2YXIgdT1kKHQrKywxMCksaT1oKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBnKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGooKXtmb3IodmFyIG47bj1mLnNoaWZ0KCk7KWlmKG4uX19QJiZuLl9fSCl0cnl7bi5fX0guX19oLmZvckVhY2goeiksbi5fX0guX19oLmZvckVhY2goQiksbi5fX0guX19oPVtdfWNhdGNoKHQpe24uX19ILl9faD1bXSxjLl9fZSh0LG4uX192KX19Yy5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LGMuX189ZnVuY3Rpb24obix0KXtuJiZ0Ll9fayYmdC5fX2suX19tJiYobi5fX209dC5fX2suX19tKSxzJiZzKG4sdCl9LGMuX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLmk9bi5fX049dm9pZCAwfSkpOihpLl9faC5mb3JFYWNoKHopLGkuX19oLmZvckVhY2goQiksaS5fX2g9W10sdD0wKSksdT1yfSxjLmRpZmZlZD1mdW5jdGlvbihuKXt2JiZ2KG4pO3ZhciB0PW4uX19jO3QmJnQuX19IJiYodC5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2godCkmJmk9PT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8dykoaikpLHQuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLmk9dm9pZCAwfSkpLHU9cj1udWxsfSxjLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXt0cnl7bi5fX2guZm9yRWFjaCh6KSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fEIobil9KX1jYXRjaChyKXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx0PVtdLGMuX19lKHIsbi5fX3YpfX0pLGwmJmwobix0KX0sYy51bm1vdW50PWZ1bmN0aW9uKG4pe20mJm0obik7dmFyIHQscj1uLl9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e3oobil9Y2F0Y2gobil7dD1ufX0pLHIuX19IPXZvaWQgMCx0JiZjLl9fZSh0LHIuX192KSl9O3ZhciBrPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiB3KG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksayYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtrJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIHoobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gQihuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24gQyhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBEKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e3EgYXMgdXNlQ2FsbGJhY2sseCBhcyB1c2VDb250ZXh0LFAgYXMgdXNlRGVidWdWYWx1ZSx5IGFzIHVzZUVmZmVjdCxiIGFzIHVzZUVycm9yQm91bmRhcnksZyBhcyB1c2VJZCxGIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsXyBhcyB1c2VMYXlvdXRFZmZlY3QsVCBhcyB1c2VNZW1vLHAgYXMgdXNlUmVkdWNlcixBIGFzIHVzZVJlZixoIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW1vamkgfSBmcm9tIFwiLi4vaG9va3MvdXNlLWVtb2ppXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7IEVtcHR5U3RhdGUgfSBmcm9tIFwiLi9FbXB0eVN0YXRlXCI7XG5pbXBvcnQgeyBFcnJvclN0YXRlIH0gZnJvbSBcIi4vRXJyb3JTdGF0ZVwiO1xuaW1wb3J0IHsgTG9hZGVkU3RhdGUgfSBmcm9tIFwiLi9Mb2FkZWRTdGF0ZVwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvYXBwLXN0YXRlXCI7XG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgeWVhciwgZW1vamlzLCBzdGF0cywgdXNlcnMsIHN0YXRlLCBwZXJjZW50TG9hZGVkLCBzdGFydFRpbWUsIGVuZFRpbWUsIGxvYWRTdGF0cywgaW1wb3J0U3RhdHMsIH0gPSB1c2VFbW9qaSgpO1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0PGgyIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPkVtb2ppIFdyYXBwZWQg4pyoPC9oMj5cblx0XHRcdCR7c3RhdGUgPT09IFN0YXRlLkluaXRpYWwgJiYgaHRtbCBgPCR7TG9hZGVyfSAvPmB9XG5cdFx0XHQke1tTdGF0ZS5FbXB0eSwgU3RhdGUuTG9hZGluZ1N0YXRzLCBTdGF0ZS5Mb2FkaW5nRW1vamldLmluY2x1ZGVzKHN0YXRlKSAmJlxuICAgICAgICBodG1sIGA8JHtFbXB0eVN0YXRlfVxuXHRcdFx0XHRzdGF0ZT0ke3N0YXRlfVxuXHRcdFx0XHRwZXJjZW50TG9hZGVkPSR7cGVyY2VudExvYWRlZH1cblx0XHRcdFx0bG9hZFN0YXRzPSR7bG9hZFN0YXRzfVxuXHRcdFx0XHRpbXBvcnRTdGF0cz0ke2ltcG9ydFN0YXRzfVxuXHRcdFx0Lz5gfVxuXHRcdFx0JHtzdGF0ZSA9PT0gU3RhdGUuRXJyb3IgJiYgaHRtbCBgPCR7RXJyb3JTdGF0ZX0gLz5gfVxuXHRcdFx0JHtzdGF0ZSA9PT0gU3RhdGUuTG9hZGVkICYmXG4gICAgICAgIGh0bWwgYDwke0xvYWRlZFN0YXRlfVxuXHRcdFx0XHR5ZWFyPSR7eWVhcn1cblx0XHRcdFx0ZW1vamlzPSR7ZW1vamlzfVxuXHRcdFx0XHRzdGF0cz0ke3N0YXRzfVxuXHRcdFx0XHR1c2Vycz0ke3VzZXJzfVxuXHRcdFx0XHRzdGFydFRpbWU9JHtzdGFydFRpbWV9XG5cdFx0XHRcdGVuZFRpbWU9JHtlbmRUaW1lfVxuXHRcdFx0XHRyZWxvYWRTdGF0cz0keygpID0+IGxvYWRTdGF0cyh0cnVlKX1cblx0XHRcdFx0aW1wb3J0U3RhdHM9JHtpbXBvcnRTdGF0c31cblx0XHRcdC8+YH1cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8vIEJ1dHRvbiB0eXBlcy5cbmV4cG9ydCB2YXIgQnV0dG9uVHlwZTtcbihmdW5jdGlvbiAoQnV0dG9uVHlwZSkge1xuICAgIEJ1dHRvblR5cGVbXCJQcmltYXJ5XCJdID0gXCJwcmltYXJ5XCI7XG4gICAgQnV0dG9uVHlwZVtcIk91dGxpbmVcIl0gPSBcIm91dGxpbmVcIjtcbn0pKEJ1dHRvblR5cGUgfHwgKEJ1dHRvblR5cGUgPSB7fSkpO1xuLy8gQnV0dG9uIHNpemVzLlxuZXhwb3J0IHZhciBCdXR0b25TaXplO1xuKGZ1bmN0aW9uIChCdXR0b25TaXplKSB7XG4gICAgQnV0dG9uU2l6ZVtcIlNtYWxsXCJdID0gXCJzbWFsbFwiO1xuICAgIEJ1dHRvblNpemVbXCJNZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIEJ1dHRvblNpemVbXCJMYXJnZVwiXSA9IFwibGFyZ2VcIjtcbn0pKEJ1dHRvblNpemUgfHwgKEJ1dHRvblNpemUgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHR5cGUgPSBCdXR0b25UeXBlLlByaW1hcnksIHNpemUgPSBCdXR0b25TaXplLk1lZGl1bSwgY2xhc3NOYW1lID0gXCJcIiwgY2hpbGRyZW4sIG9uQ2xpY2ssIG9uRmlsZVVwbG9hZCwgZGlzYWJsZWQsIH0pID0+IHtcbiAgICBjb25zdCBmaWxlVXBsb2FkUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG9uQ2xpY2tGaWxlVXBsb2FkID0gKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IGZpbGVVcGxvYWRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsaWNrKCk7XG4gICAgfTtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPVwiYy1idXR0b24gYy1idXR0b24tLSR7dHlwZX0gYy1idXR0b24tLSR7c2l6ZX0gJHtkaXNhYmxlZFxuICAgICAgICA/IFwiYy1idXR0b24tLWRpc2FibGVkXCJcbiAgICAgICAgOiBcIlwifSAke2NsYXNzTmFtZX1cIlxuXHRcdFx0b25DbGljaz0ke29uRmlsZVVwbG9hZCA/IG9uQ2xpY2tGaWxlVXBsb2FkIDogb25DbGlja31cblx0XHRcdGRpc2FibGVkPSR7ZGlzYWJsZWR9XG5cdFx0PlxuXHRcdFx0JHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0XHQke29uRmlsZVVwbG9hZCAmJlxuICAgICAgICBodG1sIGBcblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRyZWY9JHsocmVmKSA9PiB7XG4gICAgICAgICAgICBmaWxlVXBsb2FkUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICAgIH19XG5cdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0aGlkZGVuXG5cdFx0XHRcdG9uQ2hhbmdlPSR7b25GaWxlVXBsb2FkfVxuXHRcdFx0Lz5cblx0XHRgfVxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuZXhwb3J0IGNvbnN0IEVtb2ppID0gKHsgbmFtZSwgdXJsLCBjb3VudCB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1vamlcIj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppLW5hbWVcIj46JHtuYW1lfTo8L3NwYW4+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImVtb2ppLWltZ1wiIHNyYz0ke3VybH0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppLWZvb3RlclwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlbW9qaS1jb3VudFwiPiR7Y291bnR9PC9zcGFuPlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0JHtjb3VudCA9PT0gMSA/IFwidGltZVwiIDogXCJ0aW1lc1wifVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgRW1vamkgfSBmcm9tIFwiLi9FbW9qaVwiO1xuZXhwb3J0IGNvbnN0IEVtb2ppcyA9ICh7IGVtb2ppcyB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1vamlzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtb2ppcy1zY3JvbGwtd3JhcHBlclwiPlxuXHRcdFx0XHQke2Vtb2ppcy5tYXAoKGVtb2ppKSA9PiBodG1sIGA8JHtFbW9qaX0ga2V5PSR7ZW1vamkubmFtZX0gLi4uJHtlbW9qaX0gLz5gKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25UeXBlIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3R5cGVzL2FwcC1zdGF0ZVwiO1xuZXhwb3J0IGNvbnN0IEVtcHR5U3RhdGUgPSAoeyBzdGF0ZSwgcGVyY2VudExvYWRlZCwgbG9hZFN0YXRzLCBpbXBvcnRTdGF0cywgfSkgPT4ge1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHN0YXRlID09PSBTdGF0ZS5Mb2FkaW5nRW1vamkgfHwgc3RhdGUgPT09IFN0YXRlLkxvYWRpbmdTdGF0cztcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZW1wdHktc3RhdGVcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1kZXNjcmlwdGlvblwiPlZpZXcgYSByZXBvcnQgb2YgeW91ciB0b3AgdXNlZCBlbW9qaS48L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcC1idXR0b25zXCI+XG5cdFx0XHRcdDwke0J1dHRvbn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHAtYnV0dG9uXCJcblx0XHRcdFx0XHRvbkNsaWNrPSR7KCkgPT4gbG9hZFN0YXRzKCl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9JHtpc0xvYWRpbmd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQke2lzTG9hZGluZyA/IFwiTG9hZGluZ1wiIDogXCJHZW5lcmF0ZVwifVxuXHRcdFx0XHRcdCR7aXNMb2FkaW5nICYmIGh0bWwgYDwke0xvYWRlcn0gc2l6ZT1cInNtYWxsXCIgLz5gfVxuXHRcdFx0XHQ8Ly8+XG5cdFx0XHRcdDwke0J1dHRvbn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhcHAtYnV0dG9uXCJcblx0XHRcdFx0XHR0eXBlPSR7QnV0dG9uVHlwZS5PdXRsaW5lfVxuXHRcdFx0XHRcdG9uRmlsZVVwbG9hZD0ke2ltcG9ydFN0YXRzfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0SW1wb3J0IEpTT05cblx0XHRcdFx0PC8vPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XG5cdFx0XHRcdCR7aXNMb2FkaW5nICYmXG4gICAgICAgIGh0bWwgYDwke1Byb2dyZXNzQmFyfVxuXHRcdFx0XHRcdHRpdGxlPSR7c3RhdGUgPT09IFN0YXRlLkxvYWRpbmdFbW9qaVxuICAgICAgICAgICAgPyBcIigxLzIpIExvYWRpbmcgZW1vamkuLi5cIlxuICAgICAgICAgICAgOiBcIigyLzIpIExvYWRpbmcgc3RhdHMuLi5cIn1cblx0XHRcdFx0XHRwZXJjZW50PSR7cGVyY2VudExvYWRlZH1cblx0XHRcdFx0Lz5gfVxuXHRcdFx0XHQ8aT4gVGhpcyBtYXkgdGFrZSBhIHdoaWxlIGZvciB3b3Jrc3BhY2VzIHdpdGggbWFueSBlbW9qaS4gPC9pPlxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuZXhwb3J0IGNvbnN0IEVycm9yU3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWVycm9yLXN0YXRlXCI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJhcHAtZXJyb3JcIj5GYWlsZWQgdG8gbG9hZCBlbW9qaSBzdGF0cyDwn6W6PC9wPlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgRW1vamlzIH0gZnJvbSBcIi4vRW1vamlzXCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblR5cGUgfSBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IGRvd25sb2FkSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZG93bmxvYWQtanNvblwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZURpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Zvcm1hdC10aW1lLWRpZmZlcmVuY2VcIjtcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3NodWZmbGVcIjtcbmV4cG9ydCBjb25zdCBMb2FkZWRTdGF0ZSA9ICh7IHllYXIsIGVtb2ppcywgc3RhdHMsIHVzZXJzLCBzdGFydFRpbWUsIGVuZFRpbWUsIHJlbG9hZFN0YXRzLCBpbXBvcnRTdGF0cywgfSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdGl0bGUgPSB5ZWFyID09PSBjdXJyZW50WWVhciA/IFwiVGhpcyB5ZWFyXCIgOiBgSW4gJHt5ZWFyfWA7XG4gICAgY29uc3QgcmFyZXN0Q291bnQgPSAoX2IgPSAoX2EgPSBzdGF0cy5zbGljZSgtMSlbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb3VudCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMTtcbiAgICBjb25zdCByYXJlc3RFbW9qaSA9IHNodWZmbGUoc3RhdHMuZmlsdGVyKCh7IGNvdW50IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvdW50ID09PSByYXJlc3RDb3VudDtcbiAgICB9KSk7XG4gICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAzKTtcbiAgICBjb25zdCB0b3BVc2Vyc0Vtb2ppID0gdG9wVXNlcnMuZmxhdE1hcCgoeyBlbW9qaSB9KSA9PiBlbW9qaSk7XG4gICAgY29uc3QgdG9wVXNlckVtb2ppcyA9IE9iamVjdC52YWx1ZXModG9wVXNlcnNFbW9qaS5yZWR1Y2UoKGFjYywgZW1vamlOYW1lKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGlmICghYWNjW2Vtb2ppTmFtZV0pIHtcbiAgICAgICAgICAgIGFjY1tlbW9qaU5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGVtb2ppTmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IChfYiA9IChfYSA9IHN0YXRzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBlbW9qaU5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXJsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogKF9kID0gKF9jID0gc3RhdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGVtb2ppTmFtZSkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jcmVhdGVkQXQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDAsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvdW50OiAoX2UgPSB0b3BVc2Vyc0Vtb2ppLmZpbHRlcigoZSkgPT4gZSA9PT0gZW1vamlOYW1lKS5sZW5ndGgpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pKS5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG4gICAgY29uc3QgZW1vamlUaGlzWWVhciA9IHN0YXRzLmZpbHRlcigoeyBjcmVhdGVkQXQgPSAwIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGNyZWF0ZWRBdCkuZ2V0RnVsbFllYXIoKSA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uUmVsb2FkU3RhdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbG9hZCB5b3VyIEVtb2ppIFdyYXBwZWQgcmVwb3J0PyBZb3UnbGwgbG9zZSB5b3VyIHByZXZpb3VzIHJlcG9ydCwgYW5kIGl0IG1heSB0YWtlIGEgd2hpbGUgdG8gcHVsbCBmcmVzaCBkYXRhLlwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWxvYWRTdGF0cygpO1xuICAgIH07XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxvYWRlZC1zdGF0ZVwiPlxuXHRcdFx0PGg1IGNsYXNzTmFtZT1cImFwcC1zdWJ0aXRsZVwiPiR7dGl0bGV9LCB5b3UgdXNlZC4uLjwvaDU+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhcHAtZW1vamktY291bnRcIj5cblx0XHRcdFx0PGgxPiR7c3RhdHMubGVuZ3RofTwvaDE+XG5cdFx0XHRcdDxpPmRpZmZlcmVudCBTbGFjayBlbW9qaSE8L2k+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+XG5cdFx0XHRcdFNvbWUgb2YgeW91ciDirZDvuI/irZDvuI/irZDvuI/irZDvuI/irZDvuI8gZmF2b3JpdGVzIHdlcmUuLi5cblx0XHRcdDwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3N0YXRzLnNsaWNlKDAsIDEwMCl9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+WW91ciBtb3N0IHJhcmVseSB1c2VkIGVtb2ppIPCflI48L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtyYXJlc3RFbW9qaX0gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5UaGUgcGVvcGxlIHlvdSBtb3N0IG9mdGVuIHJlYWN0ZWQgdG8g8J+RrzwvaDU+XG5cdFx0XHQ8JHtVc2Vyc30gdXNlcnM9JHt0b3BVc2Vyc30gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5Zb3VyIPCflJ0gcmVhY3Rpb25zIHRvIHRoZW0gd2VyZS4uLjwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3RvcFVzZXJFbW9qaXN9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+VGhlc2UgbmV3IGVtb2ppIGNhdWdodCB5b3VyIPCfkYA8L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtlbW9qaVRoaXNZZWFyLnNsaWNlKDAsIDUpfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1mb290ZXItdGV4dFwiPlxuXHRcdFx0XHRcdEVsYXBzZWQgdGltZTogJHtmb3JtYXRUaW1lRGlmZmVyZW5jZShzdGFydFRpbWUsIGVuZFRpbWUpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJ1dHRvbnNcIj5cblx0XHRcdFx0XHQ8JHtCdXR0b259IG9uQ2xpY2s9JHtvblJlbG9hZFN0YXRzfT4gUmVsb2FkIDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259XG5cdFx0XHRcdFx0XHR0eXBlPSR7QnV0dG9uVHlwZS5PdXRsaW5lfVxuXHRcdFx0XHRcdFx0b25DbGljaz0keygpID0+IGRvd25sb2FkSlNPTih7IGVtb2ppcywgc3RhdHMsIHN0YXJ0VGltZSwgZW5kVGltZSB9LCBcImVtb2ppLXdyYXBwZWQuanNvblwiKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRFeHBvcnQgSlNPTlxuXHRcdFx0XHRcdDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259IHR5cGU9JHtCdXR0b25UeXBlLk91dGxpbmV9IG9uRmlsZVVwbG9hZD0ke2ltcG9ydFN0YXRzfT5cblx0XHRcdFx0XHRcdEltcG9ydCBKU09OXG5cdFx0XHRcdFx0PC8vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuZXhwb3J0IHZhciBMb2FkZXJTaXplO1xuKGZ1bmN0aW9uIChMb2FkZXJTaXplKSB7XG4gICAgTG9hZGVyU2l6ZVtcIlNtYWxsXCJdID0gXCJzbWFsbFwiO1xuICAgIExvYWRlclNpemVbXCJNZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIExvYWRlclNpemVbXCJMYXJnZVwiXSA9IFwibGFyZ2VcIjtcbn0pKExvYWRlclNpemUgfHwgKExvYWRlclNpemUgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IExvYWRlciA9ICh7IHNpemUgPSBMb2FkZXJTaXplLk1lZGl1bSB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3M9XCJpbmZpbml0ZV9zcGlubmVyIGluZmluaXRlX3NwaW5uZXJfJHtzaXplfVwiPlxuXHRcdFx0PHN2ZyBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cblx0XHRcdFx0PGNpcmNsZSBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfYmdcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjM1XCI+PC9jaXJjbGU+XG5cdFx0XHRcdDxjaXJjbGVcblx0XHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfcGF0aCBpbmZpbml0ZV9zcGlubmVyX2JsdWVcIlxuXHRcdFx0XHRcdGN4PVwiNTAlXCJcblx0XHRcdFx0XHRjeT1cIjUwJVwiXG5cdFx0XHRcdFx0cj1cIjM1XCJcblx0XHRcdFx0PjwvY2lyY2xlPjwvc3ZnXG5cdFx0XHQ+PHN2Z1xuXHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBpbmZpbml0ZV9zcGlubmVyX3RhaWwgXCJcblx0XHRcdFx0dmlld0JveD1cIjAgMCAxMDAgMTAwXCJcblx0XHRcdD5cblx0XHRcdFx0PGNpcmNsZVxuXHRcdFx0XHRcdGNsYXNzPVwiaW5maW5pdGVfc3Bpbm5lcl9wYXRoIGluZmluaXRlX3NwaW5uZXJfYmx1ZVwiXG5cdFx0XHRcdFx0Y3g9XCI1MCVcIlxuXHRcdFx0XHRcdGN5PVwiNTAlXCJcblx0XHRcdFx0XHRyPVwiMzVcIlxuXHRcdFx0XHQ+PC9jaXJjbGU+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9ICh7IHRpdGxlLCBwZXJjZW50LCB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cblx0XHRcdDxwcm9ncmVzcyBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiB2YWx1ZT0ke3BlcmNlbnQgKiAxMDB9IG1heD1cIjEwMFwiPlxuXHRcdFx0XHQke3BlcmNlbnQgKiAxMDB9XG5cdFx0XHQ8L3Byb2dyZXNzPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJvZ3Jlc3MtdGl0bGVcIj4ke3RpdGxlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQVBJXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmV4cG9ydCBjb25zdCBVc2VyID0gKHsgdXNlcm5hbWUsIGVtb2ppIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9maWxlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHlpZWxkIEFQSS5mZXRjaFByb2ZpbGUoeyB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgIHNldFVybCgoX2IgPSAoX2EgPSB1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmltYWdlX29yaWdpbmFsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZldGNoUHJvZmlsZSgpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0JHt1cmwgJiYgaHRtbCBgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWltZ1wiIHNyYz0ke3VybH0gLz5gfVxuXHRcdFx0XHQkeyF1cmwgJiYgaHRtbCBgPCR7TG9hZGVyfSAvPmB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZm9vdGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItY291bnRcIj4ke2Vtb2ppLmxlbmd0aH08L3NwYW4+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQke2Vtb2ppLmxlbmd0aCA9PT0gMSA/IFwicmVhY3Rpb25cIiA6IFwicmVhY3Rpb25zXCJ9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuZXhwb3J0IGNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJzXCI+XG5cdFx0XHQke3VzZXJzLm1hcCgodXNlcikgPT4gaHRtbCBgPCR7VXNlcn0ga2V5PSR7dXNlci51c2VybmFtZX0gLi4uJHt1c2VyfSAvPmApfVxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ2FjaGVcIjtcbi8vIEN1c3RvbSBob29rIHRvIHVzZSBzdGF0ZSB3aXRoIGNhY2hpbmcuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FjaGVkU3RhdGUoa2V5UGF0aCwgZGVmYXVsdFZhbHVlLCBvbkxvYWRGcm9tQ2FjaGUpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFN0YXRlID0geWllbGQgQ2FjaGUuZ2V0KGtleVBhdGgpO1xuICAgICAgICAgICAgaWYgKGNhY2hlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoY2FjaGVkU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uTG9hZEZyb21DYWNoZSkge1xuICAgICAgICAgICAgICAgIG9uTG9hZEZyb21DYWNoZShjYWNoZWRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZXRDYWNoZWRTdGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgICAgICBDYWNoZS5zZXQoa2V5UGF0aCwgdmFsdWUpO1xuICAgICAgICBzZXRTdGF0ZSh2YWx1ZSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldENhY2hlZFN0YXRlXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQ2FjaGVkU3RhdGUgfSBmcm9tIFwiLi91c2UtY2FjaGVkLXN0YXRlXCI7XG5pbXBvcnQgeyBDYWNoZUtleSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ2FjaGVcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQVBJXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9hcHAtc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbW9qaSgpIHtcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpO1xuICAgIGNvbnN0IFtwZXJjZW50TG9hZGVkLCBzZXRQZXJjZW50TG9hZGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoU3RhdGUuSW5pdGlhbCk7XG4gICAgY29uc3QgW2Vtb2ppcywgc2V0RW1vamlzXSA9IHVzZUNhY2hlZFN0YXRlKENhY2hlS2V5LkVtb2ppLCBbXSk7XG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VDYWNoZWRTdGF0ZShDYWNoZUtleS5TdGF0cywgW10sICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh2YWx1ZSA/IFN0YXRlLkxvYWRlZCA6IFN0YXRlLkVtcHR5KTtcbiAgICB9KTtcbiAgICBjb25zdCBbc3RhcnRUaW1lLCBzZXRTdGFydFRpbWVdID0gdXNlQ2FjaGVkU3RhdGUoQ2FjaGVLZXkuU3RhcnRUaW1lLCAwKTtcbiAgICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VDYWNoZWRTdGF0ZShDYWNoZUtleS5FbmRUaW1lLCAwKTtcbiAgICBjb25zdCB1c2VycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHN0YXRzLmZvckVhY2goKHsgbmFtZSwgaXRlbXMgPSBbXSB9KSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh7IG1lc3NhZ2VzID0gW10gfSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKHsgdXNlciwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHNTb0ZhciA9IChfYSA9IG1hcC5nZXQodXNlcm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldCh1c2VybmFtZSwgWy4uLnJlc3VsdHNTb0ZhciwgbmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW3VzZXJuYW1lLCBlbW9qaV0pID0+ICh7IHVzZXJuYW1lLCBlbW9qaSB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmVtb2ppLmxlbmd0aCAtIGEuZW1vamkubGVuZ3RoKTtcbiAgICB9LCBbc3RhdHNdKTtcbiAgICBjb25zdCBsb2FkU3RhdHMgPSB1c2VDYWxsYmFjaygoZm9yY2VkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gR2V0IHJlYWR5IHRvIGxvYWQgdGhlIGVtb2ppLi4uXG4gICAgICAgIHNldFBlcmNlbnRMb2FkZWQoMCk7XG4gICAgICAgIHNldFN0YXJ0VGltZShEYXRlLm5vdygpKTtcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUuTG9hZGluZ0Vtb2ppKTtcbiAgICAgICAgLy8gRmV0Y2ggdGhlIGVtb2ppIGxpc3QsIHJlYWRpbmcgZnJvbSB0aGUgY2FjaGUgaWYgcG9zc2libGUuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRFbW9qaXMgPSAhZm9yY2VkICYmIGVtb2ppc1xuICAgICAgICAgICAgPyBlbW9qaXNcbiAgICAgICAgICAgIDogeWllbGQgQVBJLmZldGNoRW1vamlMaXN0KHsgc2V0UGVyY2VudExvYWRlZCB9KTtcbiAgICAgICAgaWYgKGZvcmNlZCB8fCAhZW1vamlzKVxuICAgICAgICAgICAgc2V0RW1vamlzKHVwZGF0ZWRFbW9qaXMpO1xuICAgICAgICBzZXRQZXJjZW50TG9hZGVkKDEpO1xuICAgICAgICBjb25zdCBub25BbGlhc2VkRW1vamkgPSB1cGRhdGVkRW1vamlzLmZpbHRlcigoeyBhbGlhc19mb3IgfSkgPT4gIWFsaWFzX2Zvcik7XG4gICAgICAgIC8vIEZldGNoIHRoZSBlbW9qaSBzdGF0cywgcmVhZGluZyBmcm9tIHRoZSBjYWNoZSBpZiBwb3NzaWJsZS5cbiAgICAgICAgY29uc3QgdXBkYXRlZFN0YXRzID0gIWZvcmNlZCAmJiBzdGF0cyA/IHN0YXRzIDogW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0YXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRpbmdTdGF0cyk7XG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCgwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVtb2ppIG9mIG5vbkFsaWFzZWRFbW9qaSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG5vbkFsaWFzZWRFbW9qaS5maW5kSW5kZXgoKGUpID0+IGUgPT09IGVtb2ppKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb3VudCwgaXRlbXMgfSA9IHlpZWxkIEFQSS5mZXRjaEVtb2ppVXNhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCgoaW5kZXggKyAxKSAvIG5vbkFsaWFzZWRFbW9qaS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU3RhdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGVtb2ppLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICgoX2EgPSBlbW9qaS5jcmVhdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwKSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIGxvYWQgYWxsIHN0YXRzXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFBlcmNlbnRMb2FkZWQoMSk7XG4gICAgICAgICAgICBzZXRTdGF0cyh1cGRhdGVkU3RhdHMuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpKTtcbiAgICAgICAgICAgIHNldEVuZFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IFN0YXRlLkVycm9yKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRlZCk7XG4gICAgICAgIH1cbiAgICB9KSwgW3N0YXRzXSk7XG4gICAgY29uc3QgaW1wb3J0U3RhdHMgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgW2ZpbGVdID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uRGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB5ZWFyLCBlbW9qaXMsIHN0YXRzLCBzdGFydFRpbWUsIGVuZFRpbWUgfSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuICAgICAgICAgICAgICAgIHNldFllYXIoeWVhcik7XG4gICAgICAgICAgICAgICAgc2V0RW1vamlzKGVtb2ppcyk7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHMoc3RhdHMpO1xuICAgICAgICAgICAgICAgIHNldFN0YXJ0VGltZShzdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIHNldEVuZFRpbWUoZW5kVGltZSk7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoU3RhdGUuTG9hZGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIHBhcnNlIHVwbG9hZGVkIHJlcG9ydFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyLFxuICAgICAgICBlbW9qaXMsXG4gICAgICAgIHN0YXRzLFxuICAgICAgICB1c2VycyxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBlcmNlbnRMb2FkZWQsXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgZW5kVGltZSxcbiAgICAgICAgbG9hZFN0YXRzLFxuICAgICAgICBpbXBvcnRTdGF0cyxcbiAgICB9O1xufVxuIiwiZXhwb3J0IHZhciBBUElFbmRwb2ludDtcbihmdW5jdGlvbiAoQVBJRW5kcG9pbnQpIHtcbiAgICBBUElFbmRwb2ludFtcIkVtb2ppTGlzdFwiXSA9IFwiZW1vamkuYWRtaW5MaXN0XCI7XG4gICAgQVBJRW5kcG9pbnRbXCJFbW9qaVVzYWdlXCJdID0gXCJzZWFyY2gubW9kdWxlcy5tZXNzYWdlc1wiO1xuICAgIEFQSUVuZHBvaW50W1wiUHJvZmlsZVwiXSA9IFwiX19wcm9maWxlX3BsYWNlaG9sZGVyX19cIjtcbn0pKEFQSUVuZHBvaW50IHx8IChBUElFbmRwb2ludCA9IHt9KSk7XG4iLCIvLyBBcHAgc3RhdGVzLlxuZXhwb3J0IHZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtcIkluaXRpYWxcIl0gPSBcImluaXRpYWxcIjtcbiAgICBTdGF0ZVtcIkVtcHR5XCJdID0gXCJlbXB0eVwiO1xuICAgIFN0YXRlW1wiTG9hZGluZ0Vtb2ppXCJdID0gXCJsb2FkaW5nLWVtb2ppXCI7XG4gICAgU3RhdGVbXCJMb2FkaW5nU3RhdHNcIl0gPSBcImxvYWRpbmctc3RhdHNcIjtcbiAgICBTdGF0ZVtcIkxvYWRlZFwiXSA9IFwibG9hZGVkXCI7XG4gICAgU3RhdGVbXCJFcnJvclwiXSA9IFwiZXJyb3JcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENhY2hlS2V5O1xuKGZ1bmN0aW9uIChDYWNoZUtleSkge1xuICAgIENhY2hlS2V5W1wiRW1vamlcIl0gPSBcImVtb2ppQ2FjaGUyXCI7XG4gICAgQ2FjaGVLZXlbXCJTdGF0c1wiXSA9IFwic3RhdHNDYWNoZTJcIjtcbiAgICBDYWNoZUtleVtcIlN0YXJ0VGltZVwiXSA9IFwic3RhcnRUaW1lMlwiO1xuICAgIENhY2hlS2V5W1wiRW5kVGltZVwiXSA9IFwiZW5kVGltZTJcIjtcbn0pKENhY2hlS2V5IHx8IChDYWNoZUtleSA9IHt9KSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9hLCBfQVBJX3NsZWVwLCBfQVBJX2dldEFwaVRva2VuLCBfQVBJX2dldEVudGVycHJpc2VUb2tlbiwgX0FQSV9nZXRUZWFtSUQsIF9BUElfZ2V0RW50ZXJwcmlzZUlELCBfQVBJX2NyZWF0ZUZvcm1EYXRhLCBfQVBJX3Bvc3Q7XG5pbXBvcnQgeyBBUElFbmRwb2ludCB9IGZyb20gXCIuLi90eXBlcy9hcGktdHlwZXNcIjtcbi8vIEFQSSBjbGFzcyB0byBmZXRjaCBkYXRhIGZyb20gU2xhY2suXG5leHBvcnQgY2xhc3MgQVBJIHtcbiAgICAvLyBSZWN1cnNpdmVseSBmZXRjaGVzIHRoZSBsaXN0IG9mIGVtb2ppIGZyb20gdGhlIFNsYWNrIEFQSS5cbiAgICBzdGF0aWMgZmV0Y2hFbW9qaUxpc3QoX2IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qICh7IHBhZ2VTaXplID0gMTAwMCwgcGFnZSA9IDEsIGF0dGVtcHQgPSAwLCBzZXRQZXJjZW50TG9hZGVkLCB9KSB7XG4gICAgICAgICAgICB2YXIgX2MsIF9kO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtb2ppLCBwYWdpbmc6IHsgcGFnZXMgPSAxIH0gPSB7fSwgZXJyb3IsIH0gPSAoX2QgPSAoeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfcG9zdCkuY2FsbCh0aGlzLCBBUElFbmRwb2ludC5FbW9qaUxpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfY3JlYXRlRm9ybURhdGEpLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IChfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX2dldEFwaVRva2VuKS5jYWxsKHRoaXMpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSkpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5nOiB7IHBhZ2VzOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIk5vIHJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZChwYWdlIC8gcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlID09PSBwYWdlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbW9qaS5jb25jYXQoeWllbGQgdGhpcy5mZXRjaEVtb2ppTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRMb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlICsgMSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBlbW9qaSBsaXN0XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfc2xlZXApLmNhbGwodGhpcywgNTAwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEVtb2ppTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQZXJjZW50TG9hZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdDogYXR0ZW1wdCArIDEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBmZXRjaGVzIHRoZSB1c2FnZSBzdGF0cyBmb3IgYSBnaXZlbiBlbW9qaSBmcm9tIHRoZSBTbGFjayBBUEkuXG4gICAgc3RhdGljIGZldGNoRW1vamlVc2FnZShfYikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHsgeWVhciwgZW1vamksIGF0dGVtcHQgPSAwLCB9KSB7XG4gICAgICAgICAgICB2YXIgX2MsIF9kO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCBwYWdpbmF0aW9uOiB7IHRvdGFsX2NvdW50LCBwYWdlcyB9ID0ge30sIGVycm9yLCB9ID0gKF9kID0gKHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3Bvc3QpLmNhbGwodGhpcywgQVBJRW5kcG9pbnQuRW1vamlVc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9jcmVhdGVGb3JtRGF0YSkuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfZ2V0QXBpVG9rZW4pLmNhbGwodGhpcykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBoYXNteTo6JHtlbW9qaX06YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYWZ0ZXI6JHt5ZWFyfS0wMS0wMWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJlZm9yZToke3llYXIgKyAxfS0wMS0wMWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBub191c2VyX3Byb2ZpbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYV9tZXNzYWdlX2RhdGE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heF9leHRyYWN0X2xlbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlfcmVmaW5lbWVudF9zdWdnZXN0aW9uc192ZXJzaW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRzX3Jlc3VsdF9jb3VudDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9vbmx5X3RlYW06IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfb25seV9teV9jaGFubmVsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfZXhjbHVkZV9ib3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9jb250ZXh0OiBcImRlc2t0b3BfbWVzc2FnZXNfdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlX2ZpbGVzX3NoYXJlczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5X3Jld3JpdGVfZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV90aXRsZV9vbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsX2NvcnJlY3Rpb246IFwiRlVaWllfTUFUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF90YWJfZmlsdGVyOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfdGFiX3NvcnQ6IFwidGltZXN0YW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBcInRpbWVzdGFtcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydF9kaXI6IFwiZGVzY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4X2ZpbHRlcl9zdWdnZXN0aW9uczogMTAsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHsgdG90YWxfY291bnQ6IDAsIHBhZ2VzOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIk5vIHJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbF9jb3VudCAhPT0gbnVsbCAmJiB0b3RhbF9jb3VudCAhPT0gdm9pZCAwID8gdG90YWxfY291bnQgOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBzdGF0c1wiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3NsZWVwKS5jYWxsKHRoaXMsIDUwMDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hFbW9qaVVzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQ6IGF0dGVtcHQgKyAxLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaXRlbXM6IFtdLCBjb3VudDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gRmV0Y2hlcyB0aGUgcHJvZmlsZSBvZiBhIGdpdmVuIHVzZXIgZnJvbSB0aGUgU2xhY2sgQVBJLlxuICAgIHN0YXRpYyBmZXRjaFByb2ZpbGUoX2IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qICh7IHVzZXJuYW1lLCBhdHRlbXB0ID0gMCwgfSkge1xuICAgICAgICAgICAgdmFyIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG9iamVjdHMsIGVycm9yIH0gPSAoX2UgPSAoeWllbGQgKChfZCA9IChfYyA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm1lbWJlcnMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mZXRjaEFuZFVwc2VydE1lbWJlcnNXaXRoUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgfSkpKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDoge307XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoX2YgPSBvYmplY3RzID09PSBudWxsIHx8IG9iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9iamVjdHMuZmluZCgodXNlcikgPT4gdXNlci5uYW1lID09PSB1c2VybmFtZSkpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBwcm9maWxlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3NsZWVwKS5jYWxsKHRoaXMsIDUwMDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hQcm9maWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdDogYXR0ZW1wdCArIDEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2EgPSBBUEksIF9BUElfc2xlZXAgPSBmdW5jdGlvbiBfQVBJX3NsZWVwKHRpbWVvdXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59LCBfQVBJX2dldEFwaVRva2VuID0gZnVuY3Rpb24gX0FQSV9nZXRBcGlUb2tlbigpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hcGlfdG9rZW47XG59LCBfQVBJX2dldEVudGVycHJpc2VUb2tlbiA9IGZ1bmN0aW9uIF9BUElfZ2V0RW50ZXJwcmlzZVRva2VuKCkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvb3RfZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmVudGVycHJpc2VfYXBpX3Rva2VuO1xufSwgX0FQSV9nZXRUZWFtSUQgPSBmdW5jdGlvbiBfQVBJX2dldFRlYW1JRCgpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZWFtX2lkO1xufSwgX0FQSV9nZXRFbnRlcnByaXNlSUQgPSBmdW5jdGlvbiBfQVBJX2dldEVudGVycHJpc2VJRCgpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5lbnRlcnByaXNlX2lkO1xufSwgX0FQSV9jcmVhdGVGb3JtRGF0YSA9IGZ1bmN0aW9uIF9BUElfY3JlYXRlRm9ybURhdGEocGFyYW1zKSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGRhdGEuYXBwZW5kKGtleSwgYCR7dmFsdWV9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59LCBfQVBJX3Bvc3QgPSBmdW5jdGlvbiBfQVBJX3Bvc3QoZW5kcG9pbnQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3Qgb3JnID0gKF9kID0gKF9jID0gKF9iID0gd2luZG93LlRTKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubW9kZWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZWFtKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZG9tYWluO1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vJHtvcmd9LnNsYWNrLmNvbS9hcGkvJHtlbmRwb2ludH1gLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG1ldGhvZDogXCJQT1NUXCIgfSkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IEFQSUVuZHBvaW50IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgX0FzeW5jU3RvcmFnZV9kYk5hbWUsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZSwgX0FzeW5jU3RvcmFnZV9pbml0REIsIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlO1xuLy8gSW5kZXhlZERCIHdyYXBwZXIgdG8gc3RvcmUgYW5kIHJldHJpZXZlIGRhdGEuXG5leHBvcnQgY2xhc3MgQXN5bmNTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSBcIkFzeW5jU3RvcmFnZURCXCIsIHN0b3JlTmFtZSA9IFwiQXN5bmNTdG9yYWdlU3RvcmVcIikge1xuICAgICAgICBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Bc3luY1N0b3JhZ2VfZGJOYW1lLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0FzeW5jU3RvcmFnZV9kYlByb21pc2Uuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FzeW5jU3RvcmFnZV9kYk5hbWUsIGRiTmFtZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBzdG9yZU5hbWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgXCJtXCIsIF9Bc3luY1N0b3JhZ2VfaW5pdERCKS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgXCJtXCIsIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlKS5jYWxsKHRoaXMsIFwicmVhZHdyaXRlXCIsIChzdG9yZSkgPT4gc3RvcmUucHV0KHZhbHVlLCBrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkb25seVwiLCAoc3RvcmUpID0+IHN0b3JlLmdldChrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiBzdG9yZS5kZWxldGUoa2V5KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiBzdG9yZS5jbGVhcigpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FzeW5jU3RvcmFnZV9kYk5hbWUgPSBuZXcgV2Vha01hcCgpLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSA9IG5ldyBXZWFrTWFwKCksIF9Bc3luY1N0b3JhZ2VfZGJQcm9taXNlID0gbmV3IFdlYWtNYXAoKSwgX0FzeW5jU3RvcmFnZV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQXN5bmNTdG9yYWdlX2luaXREQiA9IGZ1bmN0aW9uIF9Bc3luY1N0b3JhZ2VfaW5pdERCKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiTmFtZSwgXCJmXCIpLCAxKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gKF9hID0gZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4geyB2YXIgX2E7IHJldHVybiByZXNvbHZlKChfYSA9IGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXN1bHQpOyB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7IHZhciBfYTsgcmV0dXJuIHJlamVjdCgoX2EgPSBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3IpOyB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0sIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlID0gZnVuY3Rpb24gX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUodHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBkYiA9IHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9kYlByb21pc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpLCB0eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBjYWxsYmFjayhzdG9yZSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfYSwgX0NhY2hlX1N0b3JhZ2U7XG5pbXBvcnQgeyBBc3luY1N0b3JhZ2UgfSBmcm9tIFwiLi9Bc3luY1N0b3JhZ2VcIjtcbmltcG9ydCB7IENhY2hlS2V5IH0gZnJvbSBcIi4uL3R5cGVzL2NhY2hlLXR5cGVzXCI7XG4vLyBDYWNoZSBjbGFzcyB0byBzdG9yZSBhbmQgcmV0cmlldmUgZGF0YS5cbmV4cG9ydCBjbGFzcyBDYWNoZSB7XG4gICAgc3RhdGljIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwiZlwiLCBfQ2FjaGVfU3RvcmFnZSkuZ2V0KGtleSk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcImZcIiwgX0NhY2hlX1N0b3JhZ2UpLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG59XG5fYSA9IENhY2hlO1xuX0NhY2hlX1N0b3JhZ2UgPSB7IHZhbHVlOiBuZXcgQXN5bmNTdG9yYWdlKCkgfTtcbmV4cG9ydCB7IENhY2hlS2V5IH07XG4iLCIvLyBEb3dubG9hZHMgYSBKU09OIGZpbGUuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRKU09OKGRhdGEsIGZpbGVuYW1lKSB7XG4gICAgLy8gQ3JlYXRpbmcgYSBibG9iIG9iamVjdCBmcm9tIG5vbi1ibG9iIGRhdGEgdXNpbmcgdGhlIEJsb2IgY29uc3RydWN0b3JcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIFwiXFx0XCIpXSwge1xuICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIC8vIENyZWF0ZSBhIG5ldyBhbmNob3IgZWxlbWVudFxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lIHx8IFwiZG93bmxvYWRcIjtcbiAgICBhLmNsaWNrKCk7XG4gICAgYS5yZW1vdmUoKTtcbn1cbiIsIi8vIEZvcm1hdHMgdGhlIHRpbWUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byB0aW1lc3RhbXBzLlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWVEaWZmZXJlbmNlKHN0YXJ0VGltZSwgZW5kVGltZSkge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhlbmRUaW1lIC0gc3RhcnRUaW1lKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gYCR7aG91cnN9aCAke21pbnV0ZXMgJSA2MH1tICR7c2Vjb25kcyAlIDYwfXNgO1xufVxuIiwiLy8gU2h1ZmZsZXMgdGhlIGdpdmVuIGFycmF5LCByZXR1cm5pbmcgYSBuZXcgYXJyYXkuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTsgLy8gU3dhcCBlbGVtZW50c1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbigoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVuZGVyKGh0bWwgYDwke0FwcH0gLz5gLCByb290KTtcbiAgICBjb25zdCBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0X2Vtb2ppX3NlY3Rpb25cIik7XG4gICAgaWYgKCFhbmNob3JFbGVtZW50KVxuICAgICAgICByZXR1cm47XG4gICAgYW5jaG9yRWxlbWVudC5pbnNlcnRCZWZvcmUocm9vdCwgYW5jaG9yRWxlbWVudC5maXJzdENoaWxkKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=