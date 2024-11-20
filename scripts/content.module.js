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






function useEmoji() {
    const [year, setYear] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().getFullYear());
    const [percentLoaded, setPercentLoaded] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.Initial);
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
        const nonAliasedEmoji = updatedEmojis.filter(({ alias_for }) => !alias_for);
        // Fetch the emoji stats, reading from the cache if possible.
        const updatedStats = !forced && stats && stats.length > 0 ? stats : [];
        try {
            if (updatedStats.length === 0) {
                setState(_types_app_state__WEBPACK_IMPORTED_MODULE_5__.State.LoadingStats);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksYUFBYTtBQUN0RDs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDTztBQUNQLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUE87QUFDUDtBQUNBLGdCQUFnQiwwQ0FBMEM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQyxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTs7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUNPO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLDhDQUFNLENBQUMsZ0RBQUksS0FBSyxnREFBRyxFQUFFO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9ub2RlX21vZHVsZXMvaHRtL2Rpc3QvaHRtLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL2h0bS9wcmVhY3QvaW5kZXgubW9kdWxlLmpzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2NvbXBvbmVudHMvQXBwLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0Vtb2ppLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9FbW9qaXMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0VtcHR5U3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0Vycm9yU3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL0xvYWRlZFN0YXRlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Vc2VyLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29tcG9uZW50cy9Vc2Vycy50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL2hvb2tzL3VzZS1jYWNoZWQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy9ob29rcy91c2UtZW1vamkudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9hcGktdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9hcHAtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy90eXBlcy9jYWNoZS10eXBlcy50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9BUEkudHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvQXN5bmNTdG9yYWdlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL0NhY2hlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL2Rvd25sb2FkLWpzb24udHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC8uL3NyYy91dGlsaXRpZXMvZm9ybWF0LXRpbWUtZGlmZmVyZW5jZS50cyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkLy4vc3JjL3V0aWxpdGllcy9zaHVmZmxlLnRzIiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvdXRpbGl0aWVzL3ZhbGlkYXRlLXN0YXRzLWpzb24udHMiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbW9qaS13cmFwcGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZW1vamktd3JhcHBlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Vtb2ppLXdyYXBwZWQvLi9zcmMvY29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbj1mdW5jdGlvbih0LHMscixlKXt2YXIgdTtzWzBdPTA7Zm9yKHZhciBoPTE7aDxzLmxlbmd0aDtoKyspe3ZhciBwPXNbaCsrXSxhPXNbaF0/KHNbMF18PXA/MToyLHJbc1toKytdXSk6c1srK2hdOzM9PT1wP2VbMF09YTo0PT09cD9lWzFdPU9iamVjdC5hc3NpZ24oZVsxXXx8e30sYSk6NT09PXA/KGVbMV09ZVsxXXx8e30pW3NbKytoXV09YTo2PT09cD9lWzFdW3NbKytoXV0rPWErXCJcIjpwPyh1PXQuYXBwbHkoYSxuKHQsYSxyLFtcIlwiLG51bGxdKSksZS5wdXNoKHUpLGFbMF0/c1swXXw9Mjooc1toLTJdPTAsc1toXT11KSk6ZS5wdXNoKGEpfXJldHVybiBlfSx0PW5ldyBNYXA7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocyl7dmFyIHI9dC5nZXQodGhpcyk7cmV0dXJuIHJ8fChyPW5ldyBNYXAsdC5zZXQodGhpcyxyKSksKHI9bih0aGlzLHIuZ2V0KHMpfHwoci5zZXQocyxyPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxzLHI9MSxlPVwiXCIsdT1cIlwiLGg9WzBdLHA9ZnVuY3Rpb24obil7MT09PXImJihufHwoZT1lLnJlcGxhY2UoL15cXHMqXFxuXFxzKnxcXHMqXFxuXFxzKiQvZyxcIlwiKSkpP2gucHVzaCgwLG4sZSk6Mz09PXImJihufHxlKT8oaC5wdXNoKDMsbixlKSxyPTIpOjI9PT1yJiZcIi4uLlwiPT09ZSYmbj9oLnB1c2goNCxuLDApOjI9PT1yJiZlJiYhbj9oLnB1c2goNSwwLCEwLGUpOnI+PTUmJigoZXx8IW4mJjU9PT1yKSYmKGgucHVzaChyLDAsZSxzKSxyPTYpLG4mJihoLnB1c2gocixuLDAscykscj02KSksZT1cIlwifSxhPTA7YTxuLmxlbmd0aDthKyspe2EmJigxPT09ciYmcCgpLHAoYSkpO2Zvcih2YXIgbD0wO2w8blthXS5sZW5ndGg7bCsrKXQ9blthXVtsXSwxPT09cj9cIjxcIj09PXQ/KHAoKSxoPVtoXSxyPTMpOmUrPXQ6ND09PXI/XCItLVwiPT09ZSYmXCI+XCI9PT10PyhyPTEsZT1cIlwiKTplPXQrZVswXTp1P3Q9PT11P3U9XCJcIjplKz10OidcIic9PT10fHxcIidcIj09PXQ/dT10OlwiPlwiPT09dD8ocCgpLHI9MSk6ciYmKFwiPVwiPT09dD8ocj01LHM9ZSxlPVwiXCIpOlwiL1wiPT09dCYmKHI8NXx8XCI+XCI9PT1uW2FdW2wrMV0pPyhwKCksMz09PXImJihoPWhbMF0pLHI9aCwoaD1oWzBdKS5wdXNoKDIsMCxyKSxyPTApOlwiIFwiPT09dHx8XCJcXHRcIj09PXR8fFwiXFxuXCI9PT10fHxcIlxcclwiPT09dD8ocCgpLHI9Mik6ZSs9dCksMz09PXImJlwiIS0tXCI9PT1lJiYocj00LGg9aFswXSl9cmV0dXJuIHAoKSxofShzKSksciksYXJndW1lbnRzLFtdKSkubGVuZ3RoPjE/cjpyWzBdfVxuIiwiaW1wb3J0e2ggYXMgcixDb21wb25lbnQgYXMgbyxyZW5kZXIgYXMgdH1mcm9tXCJwcmVhY3RcIjtleHBvcnR7aCxyZW5kZXIsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2ltcG9ydCBlIGZyb21cImh0bVwiO3ZhciBtPWUuYmluZChyKTtleHBvcnR7bSBhcyBodG1sfTtcbiIsInZhciBuLGwsdSx0LGksbyxyLGYsZSxjLHMsYSxoPXt9LHY9W10scD0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLHk9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiBkKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIHcobil7biYmbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gXyhsLHUsdCl7dmFyIGksbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP2k9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIGcobCxmLGksbyxudWxsKX1mdW5jdGlvbiBnKG4sdCxpLG8scil7dmFyIGY9e3R5cGU6bixwcm9wczp0LGtleTppLHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnIsX19pOi0xLF9fdTowfTtyZXR1cm4gbnVsbD09ciYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIG0oKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBiKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIGsobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24geChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/eChuLl9fLG4uX19pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/eChuKTpudWxsfWZ1bmN0aW9uIEMobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBDKG4pfX1mdW5jdGlvbiBTKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJmkucHVzaChuKSYmIU0uX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxyKShNKX1mdW5jdGlvbiBNKCl7dmFyIG4sdSx0LG8scixlLGMscztmb3IoaS5zb3J0KGYpO249aS5zaGlmdCgpOyluLl9fZCYmKHU9aS5sZW5ndGgsbz12b2lkIDAsZT0ocj0odD1uKS5fX3YpLl9fZSxjPVtdLHM9W10sdC5fX1AmJigobz1kKHt9LHIpKS5fX3Y9ci5fX3YrMSxsLnZub2RlJiZsLnZub2RlKG8pLE8odC5fX1AsbyxyLHQuX19uLHQuX19QLm5hbWVzcGFjZVVSSSwzMiZyLl9fdT9bZV06bnVsbCxjLG51bGw9PWU/eChyKTplLCEhKDMyJnIuX191KSxzKSxvLl9fdj1yLl9fdixvLl9fLl9fa1tvLl9faV09byxqKGMsbyxzKSxvLl9fZSE9ZSYmQyhvKSksaS5sZW5ndGg+dSYmaS5zb3J0KGYpKTtNLl9fcj0wfWZ1bmN0aW9uIFAobixsLHUsdCxpLG8scixmLGUsYyxzKXt2YXIgYSxwLHksZCx3LF89dCYmdC5fX2t8fHYsZz1sLmxlbmd0aDtmb3IodS5fX2Q9ZSwkKHUsbCxfKSxlPXUuX19kLGE9MDthPGc7YSsrKW51bGwhPSh5PXUuX19rW2FdKSYmKHA9LTE9PT15Ll9faT9oOl9beS5fX2ldfHxoLHkuX19pPWEsTyhuLHkscCxpLG8scixmLGUsYyxzKSxkPXkuX19lLHkucmVmJiZwLnJlZiE9eS5yZWYmJihwLnJlZiYmTihwLnJlZixudWxsLHkpLHMucHVzaCh5LnJlZix5Ll9fY3x8ZCx5KSksbnVsbD09dyYmbnVsbCE9ZCYmKHc9ZCksNjU1MzYmeS5fX3V8fHAuX19rPT09eS5fX2s/ZT1JKHksZSxuKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB5LnR5cGUmJnZvaWQgMCE9PXkuX19kP2U9eS5fX2Q6ZCYmKGU9ZC5uZXh0U2libGluZykseS5fX2Q9dm9pZCAwLHkuX191Jj0tMTk2NjA5KTt1Ll9fZD1lLHUuX19lPXd9ZnVuY3Rpb24gJChuLGwsdSl7dmFyIHQsaSxvLHIsZixlPWwubGVuZ3RoLGM9dS5sZW5ndGgscz1jLGE9MDtmb3Iobi5fX2s9W10sdD0wO3Q8ZTt0KyspbnVsbCE9KGk9bFt0XSkmJlwiYm9vbGVhblwiIT10eXBlb2YgaSYmXCJmdW5jdGlvblwiIT10eXBlb2YgaT8ocj10K2EsKGk9bi5fX2tbdF09XCJzdHJpbmdcIj09dHlwZW9mIGl8fFwibnVtYmVyXCI9PXR5cGVvZiBpfHxcImJpZ2ludFwiPT10eXBlb2YgaXx8aS5jb25zdHJ1Y3Rvcj09U3RyaW5nP2cobnVsbCxpLG51bGwsbnVsbCxudWxsKTp5KGkpP2coYix7Y2hpbGRyZW46aX0sbnVsbCxudWxsLG51bGwpOnZvaWQgMD09PWkuY29uc3RydWN0b3ImJmkuX19iPjA/ZyhpLnR5cGUsaS5wcm9wcyxpLmtleSxpLnJlZj9pLnJlZjpudWxsLGkuX192KTppKS5fXz1uLGkuX19iPW4uX19iKzEsbz1udWxsLC0xIT09KGY9aS5fX2k9TChpLHUscixzKSkmJihzLS0sKG89dVtmXSkmJihvLl9fdXw9MTMxMDcyKSksbnVsbD09b3x8bnVsbD09PW8uX192PygtMT09ZiYmYS0tLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkudHlwZSYmKGkuX191fD02NTUzNikpOmYhPT1yJiYoZj09ci0xP2EtLTpmPT1yKzE/YSsrOihmPnI/YS0tOmErKyxpLl9fdXw9NjU1MzYpKSk6aT1uLl9fa1t0XT1udWxsO2lmKHMpZm9yKHQ9MDt0PGM7dCsrKW51bGwhPShvPXVbdF0pJiYwPT0oMTMxMDcyJm8uX191KSYmKG8uX19lPT1uLl9fZCYmKG4uX19kPXgobykpLFYobyxvKSl9ZnVuY3Rpb24gSShuLGwsdSl7dmFyIHQsaTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGUpe2Zvcih0PW4uX19rLGk9MDt0JiZpPHQubGVuZ3RoO2krKyl0W2ldJiYodFtpXS5fXz1uLGw9SSh0W2ldLGwsdSkpO3JldHVybiBsfW4uX19lIT1sJiYobCYmbi50eXBlJiYhdS5jb250YWlucyhsKSYmKGw9eChuKSksdS5pbnNlcnRCZWZvcmUobi5fX2UsbHx8bnVsbCksbD1uLl9fZSk7ZG97bD1sJiZsLm5leHRTaWJsaW5nfXdoaWxlKG51bGwhPWwmJjg9PT1sLm5vZGVUeXBlKTtyZXR1cm4gbH1mdW5jdGlvbiBIKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoeShuKT9uLnNvbWUoZnVuY3Rpb24obil7SChuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIEwobixsLHUsdCl7dmFyIGk9bi5rZXksbz1uLnR5cGUscj11LTEsZj11KzEsZT1sW3VdO2lmKG51bGw9PT1lfHxlJiZpPT1lLmtleSYmbz09PWUudHlwZSYmMD09KDEzMTA3MiZlLl9fdSkpcmV0dXJuIHU7aWYodD4obnVsbCE9ZSYmMD09KDEzMTA3MiZlLl9fdSk/MTowKSlmb3IoO3I+PTB8fGY8bC5sZW5ndGg7KXtpZihyPj0wKXtpZigoZT1sW3JdKSYmMD09KDEzMTA3MiZlLl9fdSkmJmk9PWUua2V5JiZvPT09ZS50eXBlKXJldHVybiByO3ItLX1pZihmPGwubGVuZ3RoKXtpZigoZT1sW2ZdKSYmMD09KDEzMTA3MiZlLl9fdSkmJmk9PWUua2V5JiZvPT09ZS50eXBlKXJldHVybiBmO2YrK319cmV0dXJuLTF9ZnVuY3Rpb24gVChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCxudWxsPT11P1wiXCI6dSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHAudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEEobixsLHUsdCxpKXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG4uc3R5bGUuY3NzVGV4dD10PVwiXCIpLHQpZm9yKGwgaW4gdCl1JiZsIGluIHV8fFQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSl0JiZ1W2xdPT09dFtsXXx8VChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2ksXCIkMVwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBufHxcIm9uRm9jdXNPdXRcIj09PWx8fFwib25Gb2N1c0luXCI9PT1sP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P3Q/dS51PXQudToodS51PWUsbi5hZGRFdmVudExpc3RlbmVyKGwsbz9zOmMsbykpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/czpjLG8pO2Vsc2V7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT1pKWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJ3aWR0aFwiIT1sJiZcImhlaWdodFwiIT1sJiZcImhyZWZcIiE9bCYmXCJsaXN0XCIhPWwmJlwiZm9ybVwiIT1sJiZcInRhYkluZGV4XCIhPWwmJlwiZG93bmxvYWRcIiE9bCYmXCJyb3dTcGFuXCIhPWwmJlwiY29sU3BhblwiIT1sJiZcInJvbGVcIiE9bCYmXCJwb3BvdmVyXCIhPWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbD09dXx8ITE9PT11JiZcIi1cIiE9PWxbNF0/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCxcInBvcG92ZXJcIj09bCYmMT09dT9cIlwiOnUpKX19ZnVuY3Rpb24gRihuKXtyZXR1cm4gZnVuY3Rpb24odSl7aWYodGhpcy5sKXt2YXIgdD10aGlzLmxbdS50eXBlK25dO2lmKG51bGw9PXUudCl1LnQ9ZSsrO2Vsc2UgaWYodS50PHQudSlyZXR1cm47cmV0dXJuIHQobC5ldmVudD9sLmV2ZW50KHUpOnUpfX19ZnVuY3Rpb24gTyhuLHUsdCxpLG8scixmLGUsYyxzKXt2YXIgYSxoLHYscCx3LF8sZyxtLHgsQyxTLE0sJCxJLEgsTCxUPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOzEyOCZ0Ll9fdSYmKGM9ISEoMzImdC5fX3UpLHI9W2U9dS5fX2U9dC5fX2VdKSwoYT1sLl9fYikmJmEodSk7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBUKXRyeXtpZihtPXUucHJvcHMseD1cInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyLEM9KGE9VC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLFM9YT9DP0MucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP2c9KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOih4P3UuX19jPWg9bmV3IFQobSxTKToodS5fX2M9aD1uZXcgayhtLFMpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1xKSxDJiZDLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD1TLGguX19uPWksdj1oLl9fZD0hMCxoLl9faD1bXSxoLl9zYj1bXSkseCYmbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSx4JiZudWxsIT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9ZCh7fSxoLl9fcykpLGQoaC5fX3MsVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSxwPWgucHJvcHMsdz1oLnN0YXRlLGguX192PXUsdil4JiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCkseCYmbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKHgmJm51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09cCYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSxTKSwhaC5fX2UmJihudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLFMpfHx1Ll9fdj09PXQuX192KSl7Zm9yKHUuX192IT09dC5fX3YmJihoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSksdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssdS5fX2suc29tZShmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLE09MDtNPGguX3NiLmxlbmd0aDtNKyspaC5fX2gucHVzaChoLl9zYltNXSk7aC5fc2I9W10saC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLFMpLHgmJm51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUocCx3LF8pfSl9aWYoaC5jb250ZXh0PVMsaC5wcm9wcz1tLGguX19QPW4saC5fX2U9ITEsJD1sLl9fcixJPTAseCl7Zm9yKGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsJCYmJCh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLEg9MDtIPGguX3NiLmxlbmd0aDtIKyspaC5fX2gucHVzaChoLl9zYltIXSk7aC5fc2I9W119ZWxzZSBkb3toLl9fZD0hMSwkJiYkKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKytJPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYoaT1kKGQoe30saSksaC5nZXRDaGlsZENvbnRleHQoKSkpLHgmJiF2JiZudWxsIT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoXz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAsdykpLFAobix5KEw9bnVsbCE9YSYmYS50eXBlPT09YiYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphKT9MOltMXSx1LHQsaSxvLHIsZixlLGMscyksaC5iYXNlPXUuX19lLHUuX191Jj0tMTYxLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGcmJihoLl9fRT1oLl9fPW51bGwpfWNhdGNoKG4pe2lmKHUuX192PW51bGwsY3x8bnVsbCE9cil7Zm9yKHUuX191fD1jPzE2MDoxMjg7ZSYmOD09PWUubm9kZVR5cGUmJmUubmV4dFNpYmxpbmc7KWU9ZS5uZXh0U2libGluZztyW3IuaW5kZXhPZihlKV09bnVsbCx1Ll9fZT1lfWVsc2UgdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2s7bC5fX2Uobix1LHQpfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT10Ll9fdj8odS5fX2s9dC5fX2ssdS5fX2U9dC5fX2UpOnUuX19lPXoodC5fX2UsdSx0LGksbyxyLGYsYyxzKTsoYT1sLmRpZmZlZCkmJmEodSl9ZnVuY3Rpb24gaihuLHUsdCl7dS5fX2Q9dm9pZCAwO2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKU4odFtpXSx0WysraV0sdFsrK2ldKTtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIHoodSx0LGksbyxyLGYsZSxjLHMpe3ZhciBhLHYscCxkLF8sZyxtLGI9aS5wcm9wcyxrPXQucHJvcHMsQz10LnR5cGU7aWYoXCJzdmdcIj09PUM/cj1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI6XCJtYXRoXCI9PT1DP3I9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI6cnx8KHI9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLG51bGwhPWYpZm9yKGE9MDthPGYubGVuZ3RoO2ErKylpZigoXz1mW2FdKSYmXCJzZXRBdHRyaWJ1dGVcImluIF89PSEhQyYmKEM/Xy5sb2NhbE5hbWU9PT1DOjM9PT1fLm5vZGVUeXBlKSl7dT1fLGZbYV09bnVsbDticmVha31pZihudWxsPT11KXtpZihudWxsPT09QylyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoayk7dT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMocixDLGsuaXMmJmspLGMmJihsLl9fbSYmbC5fX20odCxmKSxjPSExKSxmPW51bGx9aWYobnVsbD09PUMpYj09PWt8fGMmJnUuZGF0YT09PWt8fCh1LmRhdGE9ayk7ZWxzZXtpZihmPWYmJm4uY2FsbCh1LmNoaWxkTm9kZXMpLGI9aS5wcm9wc3x8aCwhYyYmbnVsbCE9Zilmb3IoYj17fSxhPTA7YTx1LmF0dHJpYnV0ZXMubGVuZ3RoO2ErKyliWyhfPXUuYXR0cmlidXRlc1thXSkubmFtZV09Xy52YWx1ZTtmb3IoYSBpbiBiKWlmKF89YlthXSxcImNoaWxkcmVuXCI9PWEpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hKXA9XztlbHNlIGlmKCEoYSBpbiBrKSl7aWYoXCJ2YWx1ZVwiPT1hJiZcImRlZmF1bHRWYWx1ZVwiaW4ga3x8XCJjaGVja2VkXCI9PWEmJlwiZGVmYXVsdENoZWNrZWRcImluIGspY29udGludWU7QSh1LGEsbnVsbCxfLHIpfWZvcihhIGluIGspXz1rW2FdLFwiY2hpbGRyZW5cIj09YT9kPV86XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hP3Y9XzpcInZhbHVlXCI9PWE/Zz1fOlwiY2hlY2tlZFwiPT1hP209XzpjJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBffHxiW2FdPT09X3x8QSh1LGEsXyxiW2FdLHIpO2lmKHYpY3x8cCYmKHYuX19odG1sPT09cC5fX2h0bWx8fHYuX19odG1sPT09dS5pbm5lckhUTUwpfHwodS5pbm5lckhUTUw9di5fX2h0bWwpLHQuX19rPVtdO2Vsc2UgaWYocCYmKHUuaW5uZXJIVE1MPVwiXCIpLFAodSx5KGQpP2Q6W2RdLHQsaSxvLFwiZm9yZWlnbk9iamVjdFwiPT09Qz9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjpyLGYsZSxmP2ZbMF06aS5fX2smJngoaSwwKSxjLHMpLG51bGwhPWYpZm9yKGE9Zi5sZW5ndGg7YS0tOyl3KGZbYV0pO2N8fChhPVwidmFsdWVcIixcInByb2dyZXNzXCI9PT1DJiZudWxsPT1nP3UucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik6dm9pZCAwIT09ZyYmKGchPT11W2FdfHxcInByb2dyZXNzXCI9PT1DJiYhZ3x8XCJvcHRpb25cIj09PUMmJmchPT1iW2FdKSYmQSh1LGEsZyxiW2FdLHIpLGE9XCJjaGVja2VkXCIsdm9pZCAwIT09bSYmbSE9PXVbYV0mJkEodSxhLG0sYlthXSxyKSl9cmV0dXJuIHV9ZnVuY3Rpb24gTihuLHUsdCl7dHJ5e2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX191O2kmJm4uX191KCksaSYmbnVsbD09dXx8KG4uX191PW4odSkpfWVsc2Ugbi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2Uobix0KX19ZnVuY3Rpb24gVihuLHUsdCl7dmFyIGksbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwoaT1uLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9PW4uX19lfHxOKGksbnVsbCx1KSksbnVsbCE9KGk9bi5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPW4uX19rKWZvcihvPTA7bzxpLmxlbmd0aDtvKyspaVtvXSYmVihpW29dLHUsdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTt0fHx3KG4uX19lKSxuLl9fYz1uLl9fPW4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBxKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEIodSx0LGkpe3ZhciBvLHIsZixlO2wuX18mJmwuX18odSx0KSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHQuX19rLGY9W10sZT1bXSxPKHQsdT0oIW8mJml8fHQpLl9faz1fKGIsbnVsbCxbdV0pLHJ8fGgsaCx0Lm5hbWVzcGFjZVVSSSwhbyYmaT9baV06cj9udWxsOnQuZmlyc3RDaGlsZD9uLmNhbGwodC5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJmk/aTpyP3IuX19lOnQuZmlyc3RDaGlsZCxvLGUpLGooZix1LGUpfWZ1bmN0aW9uIEQobixsKXtCKG4sbCxEKX1mdW5jdGlvbiBFKGwsdSx0KXt2YXIgaSxvLHIsZixlPWQoe30sbC5wcm9wcyk7Zm9yKHIgaW4gbC50eXBlJiZsLnR5cGUuZGVmYXVsdFByb3BzJiYoZj1sLnR5cGUuZGVmYXVsdFByb3BzKSx1KVwia2V5XCI9PXI/aT11W3JdOlwicmVmXCI9PXI/bz11W3JdOmVbcl09dm9pZCAwPT09dVtyXSYmdm9pZCAwIT09Zj9mW3JdOnVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGUuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksZyhsLnR5cGUsZSxpfHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBHKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2ErKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LHQ7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1uZXcgU2V0LCh0PXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1PW51bGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LmZvckVhY2goZnVuY3Rpb24obil7bi5fX2U9ITAsUyhuKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LmFkZChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1JiZ1LmRlbGV0ZShuKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPXYuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LHQpe2Zvcih2YXIgaSxvLHI7bD1sLl9fOylpZigoaT1sLl9fYykmJiFpLl9fKXRyeXtpZigobz1pLmNvbnN0cnVjdG9yKSYmbnVsbCE9by5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihpLnNldFN0YXRlKG8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxyPWkuX19kKSxudWxsIT1pLmNvbXBvbmVudERpZENhdGNoJiYoaS5jb21wb25lbnREaWRDYXRjaChuLHR8fHt9KSxyPWkuX19kKSxyKXJldHVybiBpLl9fRT1pfWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLHQ9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJm51bGw9PW4uY29uc3RydWN0b3J9LGsucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWQoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihkKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZkKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9zYi5wdXNoKGwpLFModGhpcykpfSxrLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksUyh0aGlzKSl9LGsucHJvdG90eXBlLnJlbmRlcj1iLGk9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxmPWZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9LE0uX19yPTAsZT0wLGM9RighMSkscz1GKCEwKSxhPTA7ZXhwb3J0e2sgYXMgQ29tcG9uZW50LGIgYXMgRnJhZ21lbnQsRSBhcyBjbG9uZUVsZW1lbnQsRyBhcyBjcmVhdGVDb250ZXh0LF8gYXMgY3JlYXRlRWxlbWVudCxtIGFzIGNyZWF0ZVJlZixfIGFzIGgsRCBhcyBoeWRyYXRlLHQgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLEIgYXMgcmVuZGVyLEggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9bixlPWMuX19iLGE9Yy5fX3Isdj1jLmRpZmZlZCxsPWMuX19jLG09Yy51bm1vdW50LHM9Yy5fXztmdW5jdGlvbiBkKG4sdCl7Yy5fX2gmJmMuX19oKHIsbixvfHx0KSxvPTA7dmFyIHU9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIG4+PXUuX18ubGVuZ3RoJiZ1Ll9fLnB1c2goe30pLHUuX19bbl19ZnVuY3Rpb24gaChuKXtyZXR1cm4gbz0xLHAoRCxuKX1mdW5jdGlvbiBwKG4sdSxpKXt2YXIgbz1kKHQrKywyKTtpZihvLnQ9biwhby5fX2MmJihvLl9fPVtpP2kodSk6RCh2b2lkIDAsdSksZnVuY3Rpb24obil7dmFyIHQ9by5fX04/by5fX05bMF06by5fX1swXSxyPW8udCh0LG4pO3QhPT1yJiYoby5fX049W3Isby5fX1sxXV0sby5fX2Muc2V0U3RhdGUoe30pKX1dLG8uX19jPXIsIXIudSkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuISFuLl9fY30pO2lmKHUuZXZlcnkoZnVuY3Rpb24obil7cmV0dXJuIW4uX19OfSkpcmV0dXJuIWN8fGMuY2FsbCh0aGlzLG4sdCxyKTt2YXIgaT0hMTtyZXR1cm4gdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe2lmKG4uX19OKXt2YXIgdD1uLl9fWzBdO24uX189bi5fX04sbi5fX049dm9pZCAwLHQhPT1uLl9fWzBdJiYoaT0hMCl9fSksISghaSYmby5fX2MucHJvcHM9PT1uKSYmKCFjfHxjLmNhbGwodGhpcyxuLHQscikpfTtyLnU9ITA7dmFyIGM9ci5zaG91bGRDb21wb25lbnRVcGRhdGUsZT1yLmNvbXBvbmVudFdpbGxVcGRhdGU7ci5jb21wb25lbnRXaWxsVXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZih0aGlzLl9fZSl7dmFyIHU9YztjPXZvaWQgMCxmKG4sdCxyKSxjPXV9ZSYmZS5jYWxsKHRoaXMsbix0LHIpfSxyLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mfXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiB5KG4sdSl7dmFyIGk9ZCh0KyssMyk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkuaT11LHIuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBfKG4sdSl7dmFyIGk9ZCh0KyssNCk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkuaT11LHIuX19oLnB1c2goaSkpfWZ1bmN0aW9uIEEobil7cmV0dXJuIG89NSxUKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBGKG4sdCxyKXtvPTYsXyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBUKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIEModS5fX0gscikmJih1Ll9fPW4oKSx1Ll9fSD1yLHUuX19oPW4pLHUuX199ZnVuY3Rpb24gcShuLHQpe3JldHVybiBvPTgsVChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB4KG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1kKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gUChuLHQpe2MudXNlRGVidWdWYWx1ZSYmYy51c2VEZWJ1Z1ZhbHVlKHQ/dChuKTpuKX1mdW5jdGlvbiBiKG4pe3ZhciB1PWQodCsrLDEwKSxpPWgoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIGcoKXt2YXIgbj1kKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gaigpe2Zvcih2YXIgbjtuPWYuc2hpZnQoKTspaWYobi5fX1AmJm4uX19IKXRyeXtuLl9fSC5fX2guZm9yRWFjaCh6KSxuLl9fSC5fX2guZm9yRWFjaChCKSxuLl9fSC5fX2g9W119Y2F0Y2godCl7bi5fX0guX19oPVtdLGMuX19lKHQsbi5fX3YpfX1jLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sYy5fXz1mdW5jdGlvbihuLHQpe24mJnQuX19rJiZ0Ll9fay5fX20mJihuLl9fbT10Ll9fay5fX20pLHMmJnMobix0KX0sYy5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uaT1uLl9fTj12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goeiksaS5fX2guZm9yRWFjaChCKSxpLl9faD1bXSx0PTApKSx1PXJ9LGMuZGlmZmVkPWZ1bmN0aW9uKG4pe3YmJnYobik7dmFyIHQ9bi5fX2M7dCYmdC5fX0gmJih0Ll9fSC5fX2gubGVuZ3RoJiYoMSE9PWYucHVzaCh0KSYmaT09PWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKGk9Yy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHx3KShqKSksdC5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLmkmJihuLl9fSD1uLmkpLG4uaT12b2lkIDB9KSksdT1yPW51bGx9LGMuX19jPWZ1bmN0aW9uKG4sdCl7dC5zb21lKGZ1bmN0aW9uKG4pe3RyeXtuLl9faC5mb3JFYWNoKHopLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8QihuKX0pfWNhdGNoKHIpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHQ9W10sYy5fX2UocixuLl9fdil9fSksbCYmbChuLHQpfSxjLnVubW91bnQ9ZnVuY3Rpb24obil7bSYmbShuKTt2YXIgdCxyPW4uX19jO3ImJnIuX19IJiYoci5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7eihuKX1jYXRjaChuKXt0PW59fSksci5fX0g9dm9pZCAwLHQmJmMuX19lKHQsci5fX3YpKX07dmFyIGs9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIHcobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxrJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2smJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24geihuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiBCKG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiBDKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEQobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7cSBhcyB1c2VDYWxsYmFjayx4IGFzIHVzZUNvbnRleHQsUCBhcyB1c2VEZWJ1Z1ZhbHVlLHkgYXMgdXNlRWZmZWN0LGIgYXMgdXNlRXJyb3JCb3VuZGFyeSxnIGFzIHVzZUlkLEYgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxfIGFzIHVzZUxheW91dEVmZmVjdCxUIGFzIHVzZU1lbW8scCBhcyB1c2VSZWR1Y2VyLEEgYXMgdXNlUmVmLGggYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFbW9qaSB9IGZyb20gXCIuLi9ob29rcy91c2UtZW1vamlcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL0xvYWRlclwiO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSB9IGZyb20gXCIuL0VtcHR5U3RhdGVcIjtcbmltcG9ydCB7IEVycm9yU3RhdGUgfSBmcm9tIFwiLi9FcnJvclN0YXRlXCI7XG5pbXBvcnQgeyBMb2FkZWRTdGF0ZSB9IGZyb20gXCIuL0xvYWRlZFN0YXRlXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi90eXBlcy9hcHAtc3RhdGVcIjtcbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB5ZWFyLCBlbW9qaXMsIHN0YXRzLCB1c2Vycywgc3RhdGUsIHBlcmNlbnRMb2FkZWQsIHN0YXJ0VGltZSwgZW5kVGltZSwgbG9hZFN0YXRzLCBpbXBvcnRTdGF0cywgfSA9IHVzZUVtb2ppKCk7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwiYXBwLXRpdGxlXCI+RW1vamkgV3JhcHBlZCDinKg8L2gyPlxuXHRcdFx0JHtzdGF0ZSA9PT0gU3RhdGUuSW5pdGlhbCAmJiBodG1sIGA8JHtMb2FkZXJ9IC8+YH1cblx0XHRcdCR7W1N0YXRlLkVtcHR5LCBTdGF0ZS5Mb2FkaW5nU3RhdHMsIFN0YXRlLkxvYWRpbmdFbW9qaV0uaW5jbHVkZXMoc3RhdGUpICYmXG4gICAgICAgIGh0bWwgYDwke0VtcHR5U3RhdGV9XG5cdFx0XHRcdHN0YXRlPSR7c3RhdGV9XG5cdFx0XHRcdHBlcmNlbnRMb2FkZWQ9JHtwZXJjZW50TG9hZGVkfVxuXHRcdFx0XHRsb2FkU3RhdHM9JHtsb2FkU3RhdHN9XG5cdFx0XHRcdGltcG9ydFN0YXRzPSR7aW1wb3J0U3RhdHN9XG5cdFx0XHQvPmB9XG5cdFx0XHQke3N0YXRlID09PSBTdGF0ZS5FcnJvciAmJiBodG1sIGA8JHtFcnJvclN0YXRlfSAvPmB9XG5cdFx0XHQke3N0YXRlID09PSBTdGF0ZS5Mb2FkZWQgJiZcbiAgICAgICAgaHRtbCBgPCR7TG9hZGVkU3RhdGV9XG5cdFx0XHRcdHllYXI9JHt5ZWFyfVxuXHRcdFx0XHRlbW9qaXM9JHtlbW9qaXN9XG5cdFx0XHRcdHN0YXRzPSR7c3RhdHN9XG5cdFx0XHRcdHVzZXJzPSR7dXNlcnN9XG5cdFx0XHRcdHN0YXJ0VGltZT0ke3N0YXJ0VGltZX1cblx0XHRcdFx0ZW5kVGltZT0ke2VuZFRpbWV9XG5cdFx0XHRcdHJlbG9hZFN0YXRzPSR7KCkgPT4gbG9hZFN0YXRzKHRydWUpfVxuXHRcdFx0XHRpbXBvcnRTdGF0cz0ke2ltcG9ydFN0YXRzfVxuXHRcdFx0Lz5gfVxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLy8gQnV0dG9uIHR5cGVzLlxuZXhwb3J0IHZhciBCdXR0b25UeXBlO1xuKGZ1bmN0aW9uIChCdXR0b25UeXBlKSB7XG4gICAgQnV0dG9uVHlwZVtcIlByaW1hcnlcIl0gPSBcInByaW1hcnlcIjtcbiAgICBCdXR0b25UeXBlW1wiT3V0bGluZVwiXSA9IFwib3V0bGluZVwiO1xufSkoQnV0dG9uVHlwZSB8fCAoQnV0dG9uVHlwZSA9IHt9KSk7XG4vLyBCdXR0b24gc2l6ZXMuXG5leHBvcnQgdmFyIEJ1dHRvblNpemU7XG4oZnVuY3Rpb24gKEJ1dHRvblNpemUpIHtcbiAgICBCdXR0b25TaXplW1wiU21hbGxcIl0gPSBcInNtYWxsXCI7XG4gICAgQnV0dG9uU2l6ZVtcIk1lZGl1bVwiXSA9IFwibWVkaXVtXCI7XG4gICAgQnV0dG9uU2l6ZVtcIkxhcmdlXCJdID0gXCJsYXJnZVwiO1xufSkoQnV0dG9uU2l6ZSB8fCAoQnV0dG9uU2l6ZSA9IHt9KSk7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgdHlwZSA9IEJ1dHRvblR5cGUuUHJpbWFyeSwgc2l6ZSA9IEJ1dHRvblNpemUuTWVkaXVtLCBjbGFzc05hbWUgPSBcIlwiLCBjaGlsZHJlbiwgb25DbGljaywgb25GaWxlVXBsb2FkLCBkaXNhYmxlZCwgfSkgPT4ge1xuICAgIGNvbnN0IGZpbGVVcGxvYWRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb25DbGlja0ZpbGVVcGxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gZmlsZVVwbG9hZFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xpY2soKTtcbiAgICB9O1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9XCJjLWJ1dHRvbiBjLWJ1dHRvbi0tJHt0eXBlfSBjLWJ1dHRvbi0tJHtzaXplfSAke2Rpc2FibGVkXG4gICAgICAgID8gXCJjLWJ1dHRvbi0tZGlzYWJsZWRcIlxuICAgICAgICA6IFwiXCJ9ICR7Y2xhc3NOYW1lfVwiXG5cdFx0XHRvbkNsaWNrPSR7b25GaWxlVXBsb2FkID8gb25DbGlja0ZpbGVVcGxvYWQgOiBvbkNsaWNrfVxuXHRcdFx0ZGlzYWJsZWQ9JHtkaXNhYmxlZH1cblx0XHQ+XG5cdFx0XHQke2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHRcdCR7b25GaWxlVXBsb2FkICYmXG4gICAgICAgIGh0bWwgYFxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHJlZj0keyhyZWYpID0+IHtcbiAgICAgICAgICAgIGZpbGVVcGxvYWRSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgICAgfX1cblx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRoaWRkZW5cblx0XHRcdFx0b25DaGFuZ2U9JHtvbkZpbGVVcGxvYWR9XG5cdFx0XHQvPlxuXHRcdGB9XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5leHBvcnQgY29uc3QgRW1vamkgPSAoeyBuYW1lLCB1cmwsIGNvdW50IH0pID0+IHtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJlbW9qaVwiPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZW1vamktbmFtZVwiPjoke25hbWV9Ojwvc3Bhbj5cblx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZW1vamktaW1nXCIgc3JjPSR7dXJsfSAvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZW1vamktZm9vdGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppLWNvdW50XCI+JHtjb3VudH08L3NwYW4+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQke2NvdW50ID09PSAxID8gXCJ0aW1lXCIgOiBcInRpbWVzXCJ9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBFbW9qaSB9IGZyb20gXCIuL0Vtb2ppXCI7XG5leHBvcnQgY29uc3QgRW1vamlzID0gKHsgZW1vamlzIH0pID0+IHtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJlbW9qaXNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1vamlzLXNjcm9sbC13cmFwcGVyXCI+XG5cdFx0XHRcdCR7ZW1vamlzLm1hcCgoZW1vamkpID0+IGh0bWwgYDwke0Vtb2ppfSBrZXk9JHtlbW9qaS5uYW1lfSAuLi4ke2Vtb2ppfSAvPmApfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblR5cGUgfSBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL0xvYWRlclwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvYXBwLXN0YXRlXCI7XG5leHBvcnQgY29uc3QgRW1wdHlTdGF0ZSA9ICh7IHN0YXRlLCBwZXJjZW50TG9hZGVkLCBsb2FkU3RhdHMsIGltcG9ydFN0YXRzLCB9KSA9PiB7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdGUgPT09IFN0YXRlLkxvYWRpbmdFbW9qaSB8fCBzdGF0ZSA9PT0gU3RhdGUuTG9hZGluZ1N0YXRzO1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcC1lbXB0eS1zdGF0ZVwiPlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwiYXBwLWRlc2NyaXB0aW9uXCI+VmlldyBhIHJlcG9ydCBvZiB5b3VyIHRvcCB1c2VkIGVtb2ppLjwvcD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJ1dHRvbnNcIj5cblx0XHRcdFx0PCR7QnV0dG9ufVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcC1idXR0b25cIlxuXHRcdFx0XHRcdG9uQ2xpY2s9JHsoKSA9PiBsb2FkU3RhdHMoKX1cblx0XHRcdFx0XHRkaXNhYmxlZD0ke2lzTG9hZGluZ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdCR7aXNMb2FkaW5nID8gXCJMb2FkaW5nXCIgOiBcIkdlbmVyYXRlXCJ9XG5cdFx0XHRcdFx0JHtpc0xvYWRpbmcgJiYgaHRtbCBgPCR7TG9hZGVyfSBzaXplPVwic21hbGxcIiAvPmB9XG5cdFx0XHRcdDwvLz5cblx0XHRcdFx0PCR7QnV0dG9ufVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFwcC1idXR0b25cIlxuXHRcdFx0XHRcdHR5cGU9JHtCdXR0b25UeXBlLk91dGxpbmV9XG5cdFx0XHRcdFx0b25GaWxlVXBsb2FkPSR7aW1wb3J0U3RhdHN9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRJbXBvcnQgSlNPTlxuXHRcdFx0XHQ8Ly8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1mb290ZXJcIj5cblx0XHRcdFx0JHtpc0xvYWRpbmcgJiZcbiAgICAgICAgaHRtbCBgPCR7UHJvZ3Jlc3NCYXJ9XG5cdFx0XHRcdFx0dGl0bGU9JHtzdGF0ZSA9PT0gU3RhdGUuTG9hZGluZ0Vtb2ppXG4gICAgICAgICAgICA/IFwiKDEvMikgTG9hZGluZyBlbW9qaS4uLlwiXG4gICAgICAgICAgICA6IFwiKDIvMikgTG9hZGluZyBzdGF0cy4uLlwifVxuXHRcdFx0XHRcdHBlcmNlbnQ9JHtwZXJjZW50TG9hZGVkfVxuXHRcdFx0XHQvPmB9XG5cdFx0XHRcdDxpPiBUaGlzIG1heSB0YWtlIGEgd2hpbGUgZm9yIHdvcmtzcGFjZXMgd2l0aCBtYW55IGVtb2ppLiA8L2k+XG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5leHBvcnQgY29uc3QgRXJyb3JTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZXJyb3Itc3RhdGVcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1lcnJvclwiPkZhaWxlZCB0byBsb2FkIGVtb2ppIHN0YXRzIPCfpbo8L3A+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBFbW9qaXMgfSBmcm9tIFwiLi9FbW9qaXNcIjtcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4vVXNlcnNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVHlwZSB9IGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHsgZG93bmxvYWRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb3dubG9hZC1qc29uXCI7XG5pbXBvcnQgeyBmb3JtYXRUaW1lRGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZm9ybWF0LXRpbWUtZGlmZmVyZW5jZVwiO1xuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc2h1ZmZsZVwiO1xuZXhwb3J0IGNvbnN0IExvYWRlZFN0YXRlID0gKHsgeWVhciwgZW1vamlzLCBzdGF0cywgdXNlcnMsIHN0YXJ0VGltZSwgZW5kVGltZSwgcmVsb2FkU3RhdHMsIGltcG9ydFN0YXRzLCB9KSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0aXRsZSA9IHllYXIgPT09IGN1cnJlbnRZZWFyID8gXCJUaGlzIHllYXJcIiA6IGBJbiAke3llYXIgIT09IG51bGwgJiYgeWVhciAhPT0gdm9pZCAwID8geWVhciA6IGN1cnJlbnRZZWFyfWA7XG4gICAgY29uc3QgcmFyZXN0Q291bnQgPSAoX2IgPSAoX2EgPSBzdGF0cy5zbGljZSgtMSlbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb3VudCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMTtcbiAgICBjb25zdCByYXJlc3RFbW9qaSA9IHNodWZmbGUoc3RhdHMuZmlsdGVyKCh7IGNvdW50IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvdW50ID09PSByYXJlc3RDb3VudDtcbiAgICB9KSk7XG4gICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAzKTtcbiAgICBjb25zdCB0b3BVc2Vyc0Vtb2ppID0gdG9wVXNlcnMuZmxhdE1hcCgoeyBlbW9qaSB9KSA9PiBlbW9qaSk7XG4gICAgY29uc3QgdG9wVXNlckVtb2ppcyA9IE9iamVjdC52YWx1ZXModG9wVXNlcnNFbW9qaS5yZWR1Y2UoKGFjYywgZW1vamlOYW1lKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGlmICghYWNjW2Vtb2ppTmFtZV0pIHtcbiAgICAgICAgICAgIGFjY1tlbW9qaU5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGVtb2ppTmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IChfYiA9IChfYSA9IHN0YXRzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSBlbW9qaU5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXJsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogKF9kID0gKF9jID0gc3RhdHMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGVtb2ppTmFtZSkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jcmVhdGVkQXQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDAsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvdW50OiAoX2UgPSB0b3BVc2Vyc0Vtb2ppLmZpbHRlcigoZSkgPT4gZSA9PT0gZW1vamlOYW1lKS5sZW5ndGgpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pKS5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG4gICAgY29uc3QgZW1vamlUaGlzWWVhciA9IHN0YXRzLmZpbHRlcigoeyBjcmVhdGVkQXQgPSAwIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGNyZWF0ZWRBdCkuZ2V0RnVsbFllYXIoKSA9PT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uUmVsb2FkU3RhdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbG9hZCB5b3VyIEVtb2ppIFdyYXBwZWQgcmVwb3J0PyBZb3UnbGwgbG9zZSB5b3VyIHByZXZpb3VzIHJlcG9ydCwgYW5kIGl0IG1heSB0YWtlIGEgd2hpbGUgdG8gcHVsbCBmcmVzaCBkYXRhLlwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWxvYWRTdGF0cygpO1xuICAgIH07XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxvYWRlZC1zdGF0ZVwiPlxuXHRcdFx0PGg1IGNsYXNzTmFtZT1cImFwcC1zdWJ0aXRsZVwiPiR7dGl0bGV9LCB5b3UgdXNlZC4uLjwvaDU+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhcHAtZW1vamktY291bnRcIj5cblx0XHRcdFx0PGgxPiR7c3RhdHMubGVuZ3RofTwvaDE+XG5cdFx0XHRcdDxpPmRpZmZlcmVudCBTbGFjayBlbW9qaSE8L2k+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+XG5cdFx0XHRcdFNvbWUgb2YgeW91ciDirZDvuI/irZDvuI/irZDvuI/irZDvuI/irZDvuI8gZmF2b3JpdGVzIHdlcmUuLi5cblx0XHRcdDwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3N0YXRzLnNsaWNlKDAsIDEwMCl9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+WW91ciBtb3N0IHJhcmVseSB1c2VkIGVtb2ppIPCflI48L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtyYXJlc3RFbW9qaX0gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5UaGUgcGVvcGxlIHlvdSBtb3N0IG9mdGVuIHJlYWN0ZWQgdG8g8J+RrzwvaDU+XG5cdFx0XHQ8JHtVc2Vyc30gdXNlcnM9JHt0b3BVc2Vyc30gLz5cblx0XHRcdDxoNSBjbGFzc05hbWU9XCJhcHAtc3VidGl0bGVcIj5Zb3VyIPCflJ0gcmVhY3Rpb25zIHRvIHRoZW0gd2VyZS4uLjwvaDU+XG5cdFx0XHQ8JHtFbW9qaXN9IGVtb2ppcz0ke3RvcFVzZXJFbW9qaXN9IC8+XG5cdFx0XHQ8aDUgY2xhc3NOYW1lPVwiYXBwLXN1YnRpdGxlXCI+VGhlc2UgbmV3IGVtb2ppIGNhdWdodCB5b3VyIPCfkYA8L2g1PlxuXHRcdFx0PCR7RW1vamlzfSBlbW9qaXM9JHtlbW9qaVRoaXNZZWFyLnNsaWNlKDAsIDUpfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFwcC1mb290ZXItdGV4dFwiPlxuXHRcdFx0XHRcdEVsYXBzZWQgdGltZTogJHtmb3JtYXRUaW1lRGlmZmVyZW5jZShzdGFydFRpbWUsIGVuZFRpbWUpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJ1dHRvbnNcIj5cblx0XHRcdFx0XHQ8JHtCdXR0b259IG9uQ2xpY2s9JHtvblJlbG9hZFN0YXRzfT4gUmVsb2FkIDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259XG5cdFx0XHRcdFx0XHR0eXBlPSR7QnV0dG9uVHlwZS5PdXRsaW5lfVxuXHRcdFx0XHRcdFx0b25DbGljaz0keygpID0+IGRvd25sb2FkSlNPTih7IGVtb2ppcywgc3RhdHMsIHN0YXJ0VGltZSwgZW5kVGltZSwgeWVhciB9LCBcImVtb2ppLXdyYXBwZWQuanNvblwiKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRFeHBvcnQgSlNPTlxuXHRcdFx0XHRcdDwvLz5cblx0XHRcdFx0XHQ8JHtCdXR0b259IHR5cGU9JHtCdXR0b25UeXBlLk91dGxpbmV9IG9uRmlsZVVwbG9hZD0ke2ltcG9ydFN0YXRzfT5cblx0XHRcdFx0XHRcdEltcG9ydCBKU09OXG5cdFx0XHRcdFx0PC8vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuZXhwb3J0IHZhciBMb2FkZXJTaXplO1xuKGZ1bmN0aW9uIChMb2FkZXJTaXplKSB7XG4gICAgTG9hZGVyU2l6ZVtcIlNtYWxsXCJdID0gXCJzbWFsbFwiO1xuICAgIExvYWRlclNpemVbXCJNZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIExvYWRlclNpemVbXCJMYXJnZVwiXSA9IFwibGFyZ2VcIjtcbn0pKExvYWRlclNpemUgfHwgKExvYWRlclNpemUgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IExvYWRlciA9ICh7IHNpemUgPSBMb2FkZXJTaXplLk1lZGl1bSB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3M9XCJpbmZpbml0ZV9zcGlubmVyIGluZmluaXRlX3NwaW5uZXJfJHtzaXplfVwiPlxuXHRcdFx0PHN2ZyBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cblx0XHRcdFx0PGNpcmNsZSBjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfYmdcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjM1XCI+PC9jaXJjbGU+XG5cdFx0XHRcdDxjaXJjbGVcblx0XHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfcGF0aCBpbmZpbml0ZV9zcGlubmVyX2JsdWVcIlxuXHRcdFx0XHRcdGN4PVwiNTAlXCJcblx0XHRcdFx0XHRjeT1cIjUwJVwiXG5cdFx0XHRcdFx0cj1cIjM1XCJcblx0XHRcdFx0PjwvY2lyY2xlPjwvc3ZnXG5cdFx0XHQ+PHN2Z1xuXHRcdFx0XHRjbGFzcz1cImluZmluaXRlX3NwaW5uZXJfc3Bpbm5lciBpbmZpbml0ZV9zcGlubmVyX3RhaWwgXCJcblx0XHRcdFx0dmlld0JveD1cIjAgMCAxMDAgMTAwXCJcblx0XHRcdD5cblx0XHRcdFx0PGNpcmNsZVxuXHRcdFx0XHRcdGNsYXNzPVwiaW5maW5pdGVfc3Bpbm5lcl9wYXRoIGluZmluaXRlX3NwaW5uZXJfYmx1ZVwiXG5cdFx0XHRcdFx0Y3g9XCI1MCVcIlxuXHRcdFx0XHRcdGN5PVwiNTAlXCJcblx0XHRcdFx0XHRyPVwiMzVcIlxuXHRcdFx0XHQ+PC9jaXJjbGU+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImh0bS9wcmVhY3RcIjtcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9ICh7IHRpdGxlLCBwZXJjZW50LCB9KSA9PiB7XG4gICAgcmV0dXJuIGh0bWwgYFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cblx0XHRcdDxwcm9ncmVzcyBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiB2YWx1ZT0ke3BlcmNlbnQgKiAxMDB9IG1heD1cIjEwMFwiPlxuXHRcdFx0XHQke3BlcmNlbnQgKiAxMDB9XG5cdFx0XHQ8L3Byb2dyZXNzPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJvZ3Jlc3MtdGl0bGVcIj4ke3RpdGxlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0YDtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQVBJXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmV4cG9ydCBjb25zdCBVc2VyID0gKHsgdXNlcm5hbWUsIGVtb2ppIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9maWxlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHlpZWxkIEFQSS5mZXRjaFByb2ZpbGUoeyB1c2VybmFtZSB9KTtcbiAgICAgICAgICAgIHNldFVybCgoX2IgPSAoX2EgPSB1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIucHJvZmlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmltYWdlX29yaWdpbmFsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZldGNoUHJvZmlsZSgpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gaHRtbCBgXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0JHt1cmwgJiYgaHRtbCBgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWltZ1wiIHNyYz0ke3VybH0gLz5gfVxuXHRcdFx0XHQkeyF1cmwgJiYgaHRtbCBgPCR7TG9hZGVyfSAvPmB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItZm9vdGVyXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXItY291bnRcIj4ke2Vtb2ppLmxlbmd0aH08L3NwYW4+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQke2Vtb2ppLmxlbmd0aCA9PT0gMSA/IFwicmVhY3Rpb25cIiA6IFwicmVhY3Rpb25zXCJ9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdGA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJodG0vcHJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuZXhwb3J0IGNvbnN0IFVzZXJzID0gKHsgdXNlcnMgfSkgPT4ge1xuICAgIHJldHVybiBodG1sIGBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJzXCI+XG5cdFx0XHQke3VzZXJzLm1hcCgodXNlcikgPT4gaHRtbCBgPCR7VXNlcn0ga2V5PSR7dXNlci51c2VybmFtZX0gLi4uJHt1c2VyfSAvPmApfVxuXHRcdDwvZGl2PlxuXHRgO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ2FjaGVcIjtcbi8vIEN1c3RvbSBob29rIHRvIHVzZSBzdGF0ZSB3aXRoIGNhY2hpbmcuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FjaGVkU3RhdGUoa2V5UGF0aCwgZGVmYXVsdFZhbHVlLCBvbkxvYWRGcm9tQ2FjaGUpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFN0YXRlID0geWllbGQgQ2FjaGUuZ2V0KGtleVBhdGgpO1xuICAgICAgICAgICAgaWYgKGNhY2hlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoY2FjaGVkU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uTG9hZEZyb21DYWNoZSkge1xuICAgICAgICAgICAgICAgIG9uTG9hZEZyb21DYWNoZShjYWNoZWRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZXRDYWNoZWRTdGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgICAgICBDYWNoZS5zZXQoa2V5UGF0aCwgdmFsdWUpO1xuICAgICAgICBzZXRTdGF0ZSh2YWx1ZSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldENhY2hlZFN0YXRlXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQ2FjaGVkU3RhdGUgfSBmcm9tIFwiLi91c2UtY2FjaGVkLXN0YXRlXCI7XG5pbXBvcnQgeyBDYWNoZUtleSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ2FjaGVcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQVBJXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVN0YXRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGUtc3RhdHMtanNvblwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXMvYXBwLXN0YXRlXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlRW1vamkoKSB7XG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcbiAgICBjb25zdCBbcGVyY2VudExvYWRlZCwgc2V0UGVyY2VudExvYWRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFN0YXRlLkluaXRpYWwpO1xuICAgIGNvbnN0IFtlbW9qaXMsIHNldEVtb2ppc10gPSB1c2VDYWNoZWRTdGF0ZShDYWNoZUtleS5FbW9qaSwgW10pO1xuICAgIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlQ2FjaGVkU3RhdGUoQ2FjaGVLZXkuU3RhdHMsIFtdLCAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0U3RhdGUodmFsdWUgPyBTdGF0ZS5Mb2FkZWQgOiBTdGF0ZS5FbXB0eSk7XG4gICAgfSk7XG4gICAgY29uc3QgW3N0YXJ0VGltZSwgc2V0U3RhcnRUaW1lXSA9IHVzZUNhY2hlZFN0YXRlKENhY2hlS2V5LlN0YXJ0VGltZSwgMCk7XG4gICAgY29uc3QgW2VuZFRpbWUsIHNldEVuZFRpbWVdID0gdXNlQ2FjaGVkU3RhdGUoQ2FjaGVLZXkuRW5kVGltZSwgMCk7XG4gICAgY29uc3QgdXNlcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBzdGF0cy5mb3JFYWNoKCh7IG5hbWUsIGl0ZW1zID0gW10gfSkgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoeyBtZXNzYWdlcyA9IFtdIH0pID0+IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKCh7IHVzZXIsIHVzZXJuYW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzU29GYXIgPSAoX2EgPSBtYXAuZ2V0KHVzZXJuYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQodXNlcm5hbWUsIFsuLi5yZXN1bHRzU29GYXIsIG5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFt1c2VybmFtZSwgZW1vamldKSA9PiAoeyB1c2VybmFtZSwgZW1vamkgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5lbW9qaS5sZW5ndGggLSBhLmVtb2ppLmxlbmd0aCk7XG4gICAgfSwgW3N0YXRzXSk7XG4gICAgY29uc3QgbG9hZFN0YXRzID0gdXNlQ2FsbGJhY2soKGZvcmNlZCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIEdldCByZWFkeSB0byBsb2FkIHRoZSBlbW9qaS4uLlxuICAgICAgICBzZXRQZXJjZW50TG9hZGVkKDApO1xuICAgICAgICBzZXRTdGFydFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRpbmdFbW9qaSk7XG4gICAgICAgIC8vIEZldGNoIHRoZSBlbW9qaSBsaXN0LCByZWFkaW5nIGZyb20gdGhlIGNhY2hlIGlmIHBvc3NpYmxlLlxuICAgICAgICBjb25zdCB1cGRhdGVkRW1vamlzID0gIWZvcmNlZCAmJiBlbW9qaXMgJiYgZW1vamlzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZW1vamlzXG4gICAgICAgICAgICA6IHlpZWxkIEFQSS5mZXRjaEVtb2ppTGlzdCh7IHNldFBlcmNlbnRMb2FkZWQgfSk7XG4gICAgICAgIGlmIChmb3JjZWQgfHwgIWVtb2ppcylcbiAgICAgICAgICAgIHNldEVtb2ppcyh1cGRhdGVkRW1vamlzKTtcbiAgICAgICAgc2V0UGVyY2VudExvYWRlZCgxKTtcbiAgICAgICAgY29uc3Qgbm9uQWxpYXNlZEVtb2ppID0gdXBkYXRlZEVtb2ppcy5maWx0ZXIoKHsgYWxpYXNfZm9yIH0pID0+ICFhbGlhc19mb3IpO1xuICAgICAgICAvLyBGZXRjaCB0aGUgZW1vamkgc3RhdHMsIHJlYWRpbmcgZnJvbSB0aGUgY2FjaGUgaWYgcG9zc2libGUuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdGF0cyA9ICFmb3JjZWQgJiYgc3RhdHMgJiYgc3RhdHMubGVuZ3RoID4gMCA/IHN0YXRzIDogW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0YXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRpbmdTdGF0cyk7XG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCgwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVtb2ppIG9mIG5vbkFsaWFzZWRFbW9qaSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG5vbkFsaWFzZWRFbW9qaS5maW5kSW5kZXgoKGUpID0+IGUgPT09IGVtb2ppKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb3VudCwgaXRlbXMgfSA9IHlpZWxkIEFQSS5mZXRjaEVtb2ppVXNhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtb2ppOiBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZCgoaW5kZXggKyAxKSAvIG5vbkFsaWFzZWRFbW9qaS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU3RhdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGVtb2ppLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICgoX2EgPSBlbW9qaS5jcmVhdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwKSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFVzogRmFpbGVkIHRvIGxvYWQgYWxsIHN0YXRzXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFBlcmNlbnRMb2FkZWQoMSk7XG4gICAgICAgICAgICBzZXRTdGF0cyh1cGRhdGVkU3RhdHMuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpKTtcbiAgICAgICAgICAgIHNldEVuZFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IFN0YXRlLkVycm9yKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRlZCk7XG4gICAgICAgIH1cbiAgICB9KSwgW3N0YXRzXSk7XG4gICAgY29uc3QgaW1wb3J0U3RhdHMgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgW2ZpbGVdID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uRGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSB2YWxpZGF0ZVN0YXRzSlNPTihqc29uRGF0YSk7XG4gICAgICAgICAgICBpZiAoIWpzb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2V0WWVhcihqc29uLnllYXIpO1xuICAgICAgICAgICAgc2V0RW1vamlzKGpzb24uZW1vamlzKTtcbiAgICAgICAgICAgIHNldFN0YXRzKGpzb24uc3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RhcnRUaW1lKGpzb24uc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIHNldEVuZFRpbWUoanNvbi5lbmRUaW1lKTtcbiAgICAgICAgICAgIHNldFN0YXRlKFN0YXRlLkxvYWRlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyLFxuICAgICAgICBlbW9qaXMsXG4gICAgICAgIHN0YXRzLFxuICAgICAgICB1c2VycyxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHBlcmNlbnRMb2FkZWQsXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgZW5kVGltZSxcbiAgICAgICAgbG9hZFN0YXRzLFxuICAgICAgICBpbXBvcnRTdGF0cyxcbiAgICB9O1xufVxuIiwiZXhwb3J0IHZhciBBUElFbmRwb2ludDtcbihmdW5jdGlvbiAoQVBJRW5kcG9pbnQpIHtcbiAgICBBUElFbmRwb2ludFtcIkVtb2ppTGlzdFwiXSA9IFwiZW1vamkuYWRtaW5MaXN0XCI7XG4gICAgQVBJRW5kcG9pbnRbXCJFbW9qaVVzYWdlXCJdID0gXCJzZWFyY2gubW9kdWxlcy5tZXNzYWdlc1wiO1xuICAgIEFQSUVuZHBvaW50W1wiUHJvZmlsZVwiXSA9IFwiX19wcm9maWxlX3BsYWNlaG9sZGVyX19cIjtcbn0pKEFQSUVuZHBvaW50IHx8IChBUElFbmRwb2ludCA9IHt9KSk7XG4iLCIvLyBBcHAgc3RhdGVzLlxuZXhwb3J0IHZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtcIkluaXRpYWxcIl0gPSBcImluaXRpYWxcIjtcbiAgICBTdGF0ZVtcIkVtcHR5XCJdID0gXCJlbXB0eVwiO1xuICAgIFN0YXRlW1wiTG9hZGluZ0Vtb2ppXCJdID0gXCJsb2FkaW5nLWVtb2ppXCI7XG4gICAgU3RhdGVbXCJMb2FkaW5nU3RhdHNcIl0gPSBcImxvYWRpbmctc3RhdHNcIjtcbiAgICBTdGF0ZVtcIkxvYWRlZFwiXSA9IFwibG9hZGVkXCI7XG4gICAgU3RhdGVbXCJFcnJvclwiXSA9IFwiZXJyb3JcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENhY2hlS2V5O1xuKGZ1bmN0aW9uIChDYWNoZUtleSkge1xuICAgIENhY2hlS2V5W1wiRW1vamlcIl0gPSBcImVtb2ppQ2FjaGUyXCI7XG4gICAgQ2FjaGVLZXlbXCJTdGF0c1wiXSA9IFwic3RhdHNDYWNoZTJcIjtcbiAgICBDYWNoZUtleVtcIlN0YXJ0VGltZVwiXSA9IFwic3RhcnRUaW1lMlwiO1xuICAgIENhY2hlS2V5W1wiRW5kVGltZVwiXSA9IFwiZW5kVGltZTJcIjtcbn0pKENhY2hlS2V5IHx8IChDYWNoZUtleSA9IHt9KSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9hLCBfQVBJX3NsZWVwLCBfQVBJX2dldEFwaVRva2VuLCBfQVBJX2dldEVudGVycHJpc2VUb2tlbiwgX0FQSV9nZXRUZWFtSUQsIF9BUElfZ2V0RW50ZXJwcmlzZUlELCBfQVBJX2NyZWF0ZUZvcm1EYXRhLCBfQVBJX3Bvc3Q7XG5pbXBvcnQgeyBBUElFbmRwb2ludCB9IGZyb20gXCIuLi90eXBlcy9hcGktdHlwZXNcIjtcbi8vIEFQSSBjbGFzcyB0byBmZXRjaCBkYXRhIGZyb20gU2xhY2suXG5leHBvcnQgY2xhc3MgQVBJIHtcbiAgICAvLyBSZWN1cnNpdmVseSBmZXRjaGVzIHRoZSBsaXN0IG9mIGVtb2ppIGZyb20gdGhlIFNsYWNrIEFQSS5cbiAgICBzdGF0aWMgZmV0Y2hFbW9qaUxpc3QoX2IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qICh7IHBhZ2VTaXplID0gMTAwMCwgcGFnZSA9IDEsIGF0dGVtcHQgPSAwLCBzZXRQZXJjZW50TG9hZGVkLCB9KSB7XG4gICAgICAgICAgICB2YXIgX2MsIF9kO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtb2ppLCBwYWdpbmc6IHsgcGFnZXMgPSAxIH0gPSB7fSwgZXJyb3IsIH0gPSAoX2QgPSAoeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfcG9zdCkuY2FsbCh0aGlzLCBBUElFbmRwb2ludC5FbW9qaUxpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfY3JlYXRlRm9ybURhdGEpLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IChfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX2dldEFwaVRva2VuKS5jYWxsKHRoaXMpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSkpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5nOiB7IHBhZ2VzOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIk5vIHJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudExvYWRlZChwYWdlIC8gcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlID09PSBwYWdlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbW9qaS5jb25jYXQoeWllbGQgdGhpcy5mZXRjaEVtb2ppTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRMb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlICsgMSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBlbW9qaSBsaXN0XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfc2xlZXApLmNhbGwodGhpcywgNTAwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEVtb2ppTGlzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQZXJjZW50TG9hZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdDogYXR0ZW1wdCArIDEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBmZXRjaGVzIHRoZSB1c2FnZSBzdGF0cyBmb3IgYSBnaXZlbiBlbW9qaSBmcm9tIHRoZSBTbGFjayBBUEkuXG4gICAgc3RhdGljIGZldGNoRW1vamlVc2FnZShfYikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHsgeWVhciwgZW1vamksIGF0dGVtcHQgPSAwLCB9KSB7XG4gICAgICAgICAgICB2YXIgX2MsIF9kO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCBwYWdpbmF0aW9uOiB7IHRvdGFsX2NvdW50LCBwYWdlcyB9ID0ge30sIGVycm9yLCB9ID0gKF9kID0gKHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3Bvc3QpLmNhbGwodGhpcywgQVBJRW5kcG9pbnQuRW1vamlVc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcIm1cIiwgX0FQSV9jcmVhdGVGb3JtRGF0YSkuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfYSwgXCJtXCIsIF9BUElfZ2V0QXBpVG9rZW4pLmNhbGwodGhpcykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBoYXNteTo6JHtlbW9qaX06YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYWZ0ZXI6JHt5ZWFyfS0wMS0wMWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJlZm9yZToke3llYXIgKyAxfS0wMS0wMWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBub191c2VyX3Byb2ZpbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYV9tZXNzYWdlX2RhdGE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heF9leHRyYWN0X2xlbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlfcmVmaW5lbWVudF9zdWdnZXN0aW9uc192ZXJzaW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRzX3Jlc3VsdF9jb3VudDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9vbmx5X3RlYW06IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfb25seV9teV9jaGFubmVsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfZXhjbHVkZV9ib3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9jb250ZXh0OiBcImRlc2t0b3BfbWVzc2FnZXNfdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlX2ZpbGVzX3NoYXJlczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5X3Jld3JpdGVfZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV90aXRsZV9vbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsX2NvcnJlY3Rpb246IFwiRlVaWllfTUFUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF90YWJfZmlsdGVyOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfdGFiX3NvcnQ6IFwidGltZXN0YW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBcInRpbWVzdGFtcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydF9kaXI6IFwiZGVzY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4X2ZpbHRlcl9zdWdnZXN0aW9uczogMTAsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHsgdG90YWxfY291bnQ6IDAsIHBhZ2VzOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIk5vIHJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbF9jb3VudCAhPT0gbnVsbCAmJiB0b3RhbF9jb3VudCAhPT0gdm9pZCAwID8gdG90YWxfY291bnQgOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBzdGF0c1wiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3NsZWVwKS5jYWxsKHRoaXMsIDUwMDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hFbW9qaVVzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHQ6IGF0dGVtcHQgKyAxLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaXRlbXM6IFtdLCBjb3VudDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gRmV0Y2hlcyB0aGUgcHJvZmlsZSBvZiBhIGdpdmVuIHVzZXIgZnJvbSB0aGUgU2xhY2sgQVBJLlxuICAgIHN0YXRpYyBmZXRjaFByb2ZpbGUoX2IpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qICh7IHVzZXJuYW1lLCBhdHRlbXB0ID0gMCwgfSkge1xuICAgICAgICAgICAgdmFyIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG9iamVjdHMsIGVycm9yIH0gPSAoX2UgPSAoeWllbGQgKChfZCA9IChfYyA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm1lbWJlcnMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mZXRjaEFuZFVwc2VydE1lbWJlcnNXaXRoUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgfSkpKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDoge307XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoX2YgPSBvYmplY3RzID09PSBudWxsIHx8IG9iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9iamVjdHMuZmluZCgodXNlcikgPT4gdXNlci5uYW1lID09PSB1c2VybmFtZSkpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVc6IEZhaWxlZCB0byBmZXRjaCBwcm9maWxlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwibVwiLCBfQVBJX3NsZWVwKS5jYWxsKHRoaXMsIDUwMDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hQcm9maWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdDogYXR0ZW1wdCArIDEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2EgPSBBUEksIF9BUElfc2xlZXAgPSBmdW5jdGlvbiBfQVBJX3NsZWVwKHRpbWVvdXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB0aW1lb3V0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59LCBfQVBJX2dldEFwaVRva2VuID0gZnVuY3Rpb24gX0FQSV9nZXRBcGlUb2tlbigpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hcGlfdG9rZW47XG59LCBfQVBJX2dldEVudGVycHJpc2VUb2tlbiA9IGZ1bmN0aW9uIF9BUElfZ2V0RW50ZXJwcmlzZVRva2VuKCkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IHdpbmRvdy5UUykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJvb3RfZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmVudGVycHJpc2VfYXBpX3Rva2VuO1xufSwgX0FQSV9nZXRUZWFtSUQgPSBmdW5jdGlvbiBfQVBJX2dldFRlYW1JRCgpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZWFtX2lkO1xufSwgX0FQSV9nZXRFbnRlcnByaXNlSUQgPSBmdW5jdGlvbiBfQVBJX2dldEVudGVycHJpc2VJRCgpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSB3aW5kb3cuVFMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ib290X2RhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5lbnRlcnByaXNlX2lkO1xufSwgX0FQSV9jcmVhdGVGb3JtRGF0YSA9IGZ1bmN0aW9uIF9BUElfY3JlYXRlRm9ybURhdGEocGFyYW1zKSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGRhdGEuYXBwZW5kKGtleSwgYCR7dmFsdWV9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59LCBfQVBJX3Bvc3QgPSBmdW5jdGlvbiBfQVBJX3Bvc3QoZW5kcG9pbnQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3Qgb3JnID0gKF9kID0gKF9jID0gKF9iID0gd2luZG93LlRTKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubW9kZWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZWFtKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZG9tYWluO1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vJHtvcmd9LnNsYWNrLmNvbS9hcGkvJHtlbmRwb2ludH1gLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG1ldGhvZDogXCJQT1NUXCIgfSkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IEFQSUVuZHBvaW50IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgX0FzeW5jU3RvcmFnZV9kYk5hbWUsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZSwgX0FzeW5jU3RvcmFnZV9pbml0REIsIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlO1xuLy8gSW5kZXhlZERCIHdyYXBwZXIgdG8gc3RvcmUgYW5kIHJldHJpZXZlIGRhdGEuXG5leHBvcnQgY2xhc3MgQXN5bmNTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSBcIkFzeW5jU3RvcmFnZURCXCIsIHN0b3JlTmFtZSA9IFwiQXN5bmNTdG9yYWdlU3RvcmVcIikge1xuICAgICAgICBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Bc3luY1N0b3JhZ2VfZGJOYW1lLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0FzeW5jU3RvcmFnZV9kYlByb21pc2Uuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FzeW5jU3RvcmFnZV9kYk5hbWUsIGRiTmFtZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBzdG9yZU5hbWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiUHJvbWlzZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgXCJtXCIsIF9Bc3luY1N0b3JhZ2VfaW5pdERCKS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2luc3RhbmNlcywgXCJtXCIsIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlKS5jYWxsKHRoaXMsIFwicmVhZHdyaXRlXCIsIChzdG9yZSkgPT4gc3RvcmUucHV0KHZhbHVlLCBrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkb25seVwiLCAoc3RvcmUpID0+IHN0b3JlLmdldChrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiBzdG9yZS5kZWxldGUoa2V5KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2VfaW5zdGFuY2VzLCBcIm1cIiwgX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUpLmNhbGwodGhpcywgXCJyZWFkd3JpdGVcIiwgKHN0b3JlKSA9PiBzdG9yZS5jbGVhcigpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FzeW5jU3RvcmFnZV9kYk5hbWUgPSBuZXcgV2Vha01hcCgpLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSA9IG5ldyBXZWFrTWFwKCksIF9Bc3luY1N0b3JhZ2VfZGJQcm9taXNlID0gbmV3IFdlYWtNYXAoKSwgX0FzeW5jU3RvcmFnZV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQXN5bmNTdG9yYWdlX2luaXREQiA9IGZ1bmN0aW9uIF9Bc3luY1N0b3JhZ2VfaW5pdERCKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX2RiTmFtZSwgXCJmXCIpLCAxKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gKF9hID0gZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Bc3luY1N0b3JhZ2Vfc3RvcmVOYW1lLCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4geyB2YXIgX2E7IHJldHVybiByZXNvbHZlKChfYSA9IGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXN1bHQpOyB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7IHZhciBfYTsgcmV0dXJuIHJlamVjdCgoX2EgPSBldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXJyb3IpOyB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0sIF9Bc3luY1N0b3JhZ2Vfd2l0aFN0b3JlID0gZnVuY3Rpb24gX0FzeW5jU3RvcmFnZV93aXRoU3RvcmUodHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBkYiA9IHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FzeW5jU3RvcmFnZV9kYlByb21pc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpLCB0eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQXN5bmNTdG9yYWdlX3N0b3JlTmFtZSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBjYWxsYmFjayhzdG9yZSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfYSwgX0NhY2hlX1N0b3JhZ2U7XG5pbXBvcnQgeyBBc3luY1N0b3JhZ2UgfSBmcm9tIFwiLi9Bc3luY1N0b3JhZ2VcIjtcbmltcG9ydCB7IENhY2hlS2V5IH0gZnJvbSBcIi4uL3R5cGVzL2NhY2hlLXR5cGVzXCI7XG4vLyBDYWNoZSBjbGFzcyB0byBzdG9yZSBhbmQgcmV0cmlldmUgZGF0YS5cbmV4cG9ydCBjbGFzcyBDYWNoZSB7XG4gICAgc3RhdGljIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2EsIFwiZlwiLCBfQ2FjaGVfU3RvcmFnZSkuZ2V0KGtleSk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9hLCBcImZcIiwgX0NhY2hlX1N0b3JhZ2UpLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG59XG5fYSA9IENhY2hlO1xuX0NhY2hlX1N0b3JhZ2UgPSB7IHZhbHVlOiBuZXcgQXN5bmNTdG9yYWdlKCkgfTtcbmV4cG9ydCB7IENhY2hlS2V5IH07XG4iLCIvLyBEb3dubG9hZHMgYSBKU09OIGZpbGUuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRKU09OKGRhdGEsIGZpbGVuYW1lKSB7XG4gICAgLy8gQ3JlYXRpbmcgYSBibG9iIG9iamVjdCBmcm9tIG5vbi1ibG9iIGRhdGEgdXNpbmcgdGhlIEJsb2IgY29uc3RydWN0b3JcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIFwiXFx0XCIpXSwge1xuICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIC8vIENyZWF0ZSBhIG5ldyBhbmNob3IgZWxlbWVudFxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lIHx8IFwiZG93bmxvYWRcIjtcbiAgICBhLmNsaWNrKCk7XG4gICAgYS5yZW1vdmUoKTtcbn1cbiIsIi8vIEZvcm1hdHMgdGhlIHRpbWUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byB0aW1lc3RhbXBzLlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWVEaWZmZXJlbmNlKHN0YXJ0VGltZSwgZW5kVGltZSkge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhlbmRUaW1lIC0gc3RhcnRUaW1lKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gYCR7aG91cnN9aCAke21pbnV0ZXMgJSA2MH1tICR7c2Vjb25kcyAlIDYwfXNgO1xufVxuIiwiLy8gU2h1ZmZsZXMgdGhlIGdpdmVuIGFycmF5LCByZXR1cm5pbmcgYSBuZXcgYXJyYXkuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTsgLy8gU3dhcCBlbGVtZW50c1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdGF0c0pTT04oanNvbkRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHllYXIsIGVtb2ppcywgc3RhdHMsIHN0YXJ0VGltZSwgZW5kVGltZSB9ID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgeWVhciAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB5ZWFyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbW9qaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVtb2ppcyBkYXRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbW9qaXMuc29tZSgoeyBuYW1lLCB1cmwsIGNyZWF0ZWQsIGFsaWFzX2ZvciB9KSA9PiB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNyZWF0ZWQgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBhbGlhc19mb3IgIT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVtb2ppIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN0YXRzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdGF0cyBkYXRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0cy5zb21lKCh7IG5hbWUsIHVybCwgY3JlYXRlZEF0LCBpdGVtcywgY291bnQgfSkgPT4gdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjcmVhdGVkQXQgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICFBcnJheS5pc0FycmF5KGl0ZW1zKSB8fFxuICAgICAgICAgICAgaXRlbXMuc29tZSgoeyBtZXNzYWdlcyB9KSA9PiAhQXJyYXkuaXNBcnJheShtZXNzYWdlcykgfHxcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5zb21lKCh7IHVzZXIsIHVzZXJuYW1lIH0pID0+IHR5cGVvZiB1c2VyICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIikpIHx8XG4gICAgICAgICAgICB0eXBlb2YgY291bnQgIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXQgZGF0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHN0YXJ0VGltZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdGFydCB0aW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZW5kVGltZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbmQgdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgIGVtb2ppcyxcbiAgICAgICAgICAgIHN0YXRzLFxuICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KGBJbnZhbGlkIEpTT04gZGF0YTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiaHRtL3ByZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbigoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVuZGVyKGh0bWwgYDwke0FwcH0gLz5gLCByb290KTtcbiAgICBjb25zdCBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0X2Vtb2ppX3NlY3Rpb25cIik7XG4gICAgaWYgKCFhbmNob3JFbGVtZW50KVxuICAgICAgICByZXR1cm47XG4gICAgYW5jaG9yRWxlbWVudC5pbnNlcnRCZWZvcmUocm9vdCwgYW5jaG9yRWxlbWVudC5maXJzdENoaWxkKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=