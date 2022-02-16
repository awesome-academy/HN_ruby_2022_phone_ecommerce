/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.js":
/*!************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'far': 'regular',
    'fal': 'light',
    'fad': 'duotone',
    'fab': 'brands',
    'fak': 'kit',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  };
  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));
  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;
  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];
  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';

  var NOOP = function NOOP() {};

  var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var asyncQueue = [];
  var asyncTimer;

  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    } // reset async asyncQueue


    asyncQueue = [];
    asyncTimer = false;
  }

  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);

    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }

  function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
      resolve(promise, value);
    }

    function rejectPromise(reason) {
      reject(promise, reason);
    }

    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }

  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;

    if (typeof callback === 'function') {
      settled = FULFILLED;

      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }

    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }

      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }

  function handleThenable(promise, value) {
    var resolved;

    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }

      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;

        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;

              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }

      return true;
    }

    return false;
  }

  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }

  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }

  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }

  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }

  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);

    if (!promise._handled && isNode) {
      global.process.emit('unhandledRejection', promise._data, promise);
    }
  }

  function notifyRejectionHandled(promise) {
    global.process.emit('rejectionHandled', promise);
  }
  /**
   * @class
   */


  function P(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    if (this instanceof P === false) {
      throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
    }

    this._then = [];
    invokeResolver(resolver, this);
  }

  P.prototype = {
    constructor: P,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function then(onFulfillment, onRejection) {
      var subscriber = {
        owner: this,
        then: new this.constructor(NOOP),
        fulfilled: onFulfillment,
        rejected: onRejection
      };

      if ((onRejection || onFulfillment) && !this._handled) {
        this._handled = true;

        if (this._state === REJECTED && isNode) {
          asyncCall(notifyRejectionHandled, this);
        }
      }

      if (this._state === FULFILLED || this._state === REJECTED) {
        // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
      } else {
        // subscribe
        this._then.push(subscriber);
      }

      return subscriber.then;
    },
    "catch": function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };

  P.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.all().');
    }

    return new P(function (resolve, reject) {
      var results = [];
      var remaining = 0;

      function resolver(index) {
        remaining++;
        return function (value) {
          results[index] = value;

          if (! --remaining) {
            resolve(results);
          }
        };
      }

      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolver(i), reject);
        } else {
          results[i] = promise;
        }
      }

      if (!remaining) {
        resolve(results);
      }
    });
  };

  P.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.race().');
    }

    return new P(function (resolve, reject) {
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];

        if (promise && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    });
  };

  P.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === P) {
      return value;
    }

    return new P(function (resolve) {
      resolve(value);
    });
  };

  P.reject = function (reason) {
    return new P(function (resolve, reject) {
      reject(reason);
    });
  };

  var picked = typeof Promise === 'function' ? Promise : P;
  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }

  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }

  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }

  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }

  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }

  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }

  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }

  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }

  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }

  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(_abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (_abstract.attributes && (_abstract.attributes.fill || force)) {
      _abstract.attributes.fill = 'black';
    }

    return _abstract;
  }

  function deGroup(_abstract2) {
    if (_abstract2.tag === 'g') {
      return _abstract2.children;
    } else {
      return [_abstract2];
    }
  }

  function makeIconMasking(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        explicitMaskId = _ref.maskId,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
    var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: deGroup(maskPath)
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon(_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol(_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }

  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          "class": 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread({}, extra.attributes, title ? {
      'title': title
    } : {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          "class": 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"5.15.3\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };
  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };
  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function toHex(unicode) {
    var result = '';

    for (var i = 0; i < unicode.length; i++) {
      var hex = unicode.charCodeAt(i).toString(16);
      result += ('000' + hex).slice(-4);
    }

    return result;
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};

  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = ('far' in styles);
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };

  build();

  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }

  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }

  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }

  var styles$1 = namespace.styles;

  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };

  function getCanonicalIcon(values) {
    return values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles$1[cls]) {
        acc.prefix = cls;
      } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
        acc.prefix = cls;
      } else if (iconName) {
        var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
        acc.iconName = shim.iconName || iconName;
        acc.prefix = shim.prefix || acc.prefix;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      return acc;
    }, emptyCanonicalIcon());
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var _abstract3 = mutation[1];

      var newOuterHTML = _abstract3.map(function (a) {
        return toHtml(a);
      }).join('\n');

      if (node.parentNode && node.outerHTML) {
        node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
      } else if (node.parentNode) {
        var newNode = document.createElement('span');
        node.parentNode.replaceChild(newNode, node);
        newNode.outerHTML = newOuterHTML;
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var _abstract4 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete _abstract4[0].attributes.style;
      delete _abstract4[0].attributes.id;

      var splitClasses = _abstract4[0].attributes["class"].split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract4[0].attributes["class"] = splitClasses.toSvg.join(' ');

      var newInnerHTML = _abstract4.map(function (a) {
        return toHtml(a);
      }).join('\n');

      node.setAttribute('class', splitClasses.toNode.join(' '));
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }

  var disabled = false;

  function disableObservation() {
    disabled = true;
  }

  function enableObservation() {
    disabled = false;
  }

  var mo = null;

  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var treeCallback = options.treeCallback,
        nodeCallback = options.nodeCallback,
        pseudoElementsCallback = options.pseudoElementsCallback,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class') {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
            if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
          } else {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }

  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser(node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser(node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;

          case 'shrink':
            acc.size = acc.size - rest;
            break;

          case 'left':
            acc.x = acc.x - rest;
            break;

          case 'right':
            acc.x = acc.x + rest;
            break;

          case 'up':
            acc.y = acc.y - rest;
            break;

          case 'down':
            acc.y = acc.y + rest;
            break;

          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };

  function transformParser(node) {
    return parseTransformString(node.getAttribute('data-fa-transform'));
  }

  function symbolParser(node) {
    var symbol = node.getAttribute('data-fa-symbol');
    return symbol === null ? false : symbol === '' ? true : symbol;
  }

  function attributesParser(node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function maskParser(node) {
    var mask = node.getAttribute('data-fa-mask');

    if (!mask) {
      return emptyCanonicalIcon();
    } else {
      return getCanonicalIcon(mask.split(' ').map(function (i) {
        return i.trim();
      }));
    }
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: null,
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }

  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var transform = transformParser(node);
    var symbol = symbolParser(node);
    var extraAttributes = attributesParser(node);
    var mask = maskParser(node);
    return {
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: transform,
      symbol: symbol,
      mask: mask,
      maskId: node.getAttribute('data-fa-mask-id'),
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    };
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }

  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;
  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  var DOT = {
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  };
  var missing = {
    tag: 'g',
    children: [RING, DOT, QUESTION, EXCLAMATION]
  };
  var styles$2 = namespace.styles;

  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }

  function findIcon(iconName, prefix) {
    return new picked(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: missing
      };

      if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
        var icon = styles$2[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      if (iconName && prefix && !config.showMissingIcons) {
        reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
      } else {
        resolve(val);
      }
    });
  }

  var styles$3 = namespace.styles;

  function generateSvgReplacementMutation(node, nodeMeta) {
    var iconName = nodeMeta.iconName,
        title = nodeMeta.title,
        titleId = nodeMeta.titleId,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        symbol = nodeMeta.symbol,
        mask = nodeMeta.mask,
        maskId = nodeMeta.maskId,
        extra = nodeMeta.extra;
    return new picked(function (resolve, reject) {
      picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            main = _ref2[0],
            mask = _ref2[1];

        resolve([node, makeInlineSvgAbstract({
          icons: {
            main: main,
            mask: mask
          },
          prefix: prefix,
          iconName: iconName,
          transform: transform,
          symbol: symbol,
          mask: mask,
          maskId: maskId,
          title: title,
          titleId: titleId,
          extra: extra,
          watchable: true
        })]);
      });
    });
  }

  function generateLayersText(node, nodeMeta) {
    var title = nodeMeta.title,
        transform = nodeMeta.transform,
        extra = nodeMeta.extra;
    var width = null;
    var height = null;

    if (IS_IE) {
      var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
      var boundingClientRect = node.getBoundingClientRect();
      width = boundingClientRect.width / computedFontSize;
      height = boundingClientRect.height / computedFontSize;
    }

    if (config.autoA11y && !title) {
      extra.attributes['aria-hidden'] = 'true';
    }

    return picked.resolve([node, makeLayersTextAbstract({
      content: node.innerHTML,
      width: width,
      height: height,
      transform: transform,
      title: title,
      extra: extra,
      watchable: true
    })]);
  }

  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return generateLayersText(node, nodeMeta);
    } else {
      return generateSvgReplacementMutation(node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return;
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return;
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return;
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e instanceof MissingIcon) {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new picked(function (resolve, reject) {
      picked.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      })["catch"](function () {
        mark();
        reject();
      });
    });
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new picked(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
        var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
        // already done so with the same prefix and iconName

        if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var _abstract5 = makeInlineSvgAbstract(_objectSpread({}, meta, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));

            var element = DOCUMENT.createElement('svg');

            if (position === ':before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = _abstract5.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          })["catch"](reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new picked(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      picked.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      })["catch"](function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

  function css() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val["abstract"].map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();

  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    disconnect();
  };

  var _cssInserted = false;
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        ensureCss();
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }

        return onTree(node, callback);
      } else {
        return picked.reject('Operation requires a DOM of some kind.');
      }
    },
    css: css,
    insertCss: function insertCss$$1() {
      if (!_cssInserted) {
        insertCss(css());
        _cssInserted = true;
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
          observeMutationsRoot = params.observeMutationsRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements,
          observeMutationsRoot: observeMutationsRoot
        });
      });
    }
  };
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });

  var text = function text(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform2 = params.transform,
        transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
        _params$title2 = params.title,
        title = _params$title2 === void 0 ? null : _params$title2,
        _params$classes2 = params.classes,
        classes = _params$classes2 === void 0 ? [] : _params$classes2,
        _params$attributes2 = params.attributes,
        attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
        _params$styles2 = params.styles,
        styles = _params$styles2 === void 0 ? {} : _params$styles2;
    return apiObject({
      type: 'text',
      content: content
    }, function () {
      ensureCss();
      return makeLayersTextAbstract({
        content: content,
        transform: _objectSpread({}, meaninglessTransform, transform),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
        }
      });
    });
  };

  var counter = function counter(content) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$title3 = params.title,
        title = _params$title3 === void 0 ? null : _params$title3,
        _params$classes3 = params.classes,
        classes = _params$classes3 === void 0 ? [] : _params$classes3,
        _params$attributes3 = params.attributes,
        attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
        _params$styles3 = params.styles,
        styles = _params$styles3 === void 0 ? {} : _params$styles3;
    return apiObject({
      type: 'counter',
      content: content
    }, function () {
      ensureCss();
      return makeLayersCounterAbstract({
        content: content.toString(),
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
        }
      });
    });
  };

  var layer = function layer(assembler) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$classes4 = params.classes,
        classes = _params$classes4 === void 0 ? [] : _params$classes4;
    return apiObject({
      type: 'layer'
    }, function () {
      ensureCss();
      var children = [];
      assembler(function (args) {
        Array.isArray(args) ? args.map(function (a) {
          children = children.concat(a["abstract"]);
        }) : children = children.concat(args["abstract"]);
      });
      return [{
        tag: 'span',
        attributes: {
          "class": ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
        },
        children: children
      }];
    });
  };

  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    library: library,
    parse: parse,
    findIconDefinition: findIconDefinition,
    icon: icon,
    text: text,
    counter: counter,
    layer: layer,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap() {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      });
    }

    namespace.hooks = _objectSpread({}, namespace.hooks, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, icons);
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  bunker(bootstrap);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../node_modules/node-libs-browser/node_modules/timers-browserify/main.js */ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.min.js":
/*!****************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function () {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }

  function $(r) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(i).filter(function (t) {
        return Object.getOwnPropertyDescriptor(i, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, a;
        e = r, a = i[n = t], n in e ? Object.defineProperty(e, n, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = a;
      });
    }

    return r;
  }

  function p(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = [],
          a = !0,
          r = !1,
          i = void 0;

      try {
        for (var o, c = t[Symbol.iterator](); !(a = (o = c.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0) {
          ;
        }
      } catch (t) {
        r = !0, i = t;
      } finally {
        try {
          a || null == c["return"] || c["return"]();
        } finally {
          if (r) throw i;
        }
      }

      return n;
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  function d(t) {
    return function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    }(t) || function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  var t = function t() {},
      e = {},
      n = {},
      a = null,
      o = {
    mark: t,
    measure: t
  };

  try {
    "undefined" != typeof window && (e = window), "undefined" != typeof document && (n = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (o = performance);
  } catch (t) {}

  var c = (e.navigator || {}).userAgent,
      s = void 0 === c ? "" : c,
      v = e,
      b = n,
      l = a,
      f = o,
      u = !!v.document,
      m = !!b.documentElement && !!b.head && "function" == typeof b.addEventListener && "function" == typeof b.createElement,
      k = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
      h = "___FONT_AWESOME___",
      A = 16,
      g = "fa",
      y = "svg-inline--fa",
      tt = "data-fa-i2svg",
      w = "data-fa-pseudo-element",
      x = "data-fa-pseudo-element-pending",
      C = "data-prefix",
      O = "data-icon",
      P = "fontawesome-i2svg",
      S = "async",
      N = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      M = function () {
    try {
      return !0;
    } catch (t) {
      return !1;
    }
  }(),
      z = {
    fas: "solid",
    far: "regular",
    fal: "light",
    fad: "duotone",
    fab: "brands",
    fak: "kit",
    fa: "solid"
  },
      E = {
    solid: "fas",
    regular: "far",
    light: "fal",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
  },
      j = "fa-layers-text",
      L = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/,
      R = {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
      I = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      _ = I.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      T = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
      Y = {
    GROUP: "group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
      H = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", Y.GROUP, Y.SWAP_OPACITY, Y.PRIMARY, Y.SECONDARY].concat(I.map(function (t) {
    return "".concat(t, "x");
  })).concat(_.map(function (t) {
    return "w-".concat(t);
  })),
      F = v.FontAwesomeConfig || {};

  if (b && "function" == typeof b.querySelector) {
    [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (t) {
      var e,
          n = p(t, 2),
          a = n[0],
          r = n[1],
          i = "" === (e = function (t) {
        var e = b.querySelector("script[" + t + "]");
        if (e) return e.getAttribute(t);
      }(a)) || "false" !== e && ("true" === e || e);

      null != i && (F[r] = i);
    });
  }

  var D = $({}, {
    familyPrefix: g,
    replacementClass: y,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  }, F);
  D.autoReplaceSvg || (D.observeMutations = !1);
  var et = $({}, D);
  v.FontAwesomeConfig = et;
  var U = v || {};
  U[h] || (U[h] = {}), U[h].styles || (U[h].styles = {}), U[h].hooks || (U[h].hooks = {}), U[h].shims || (U[h].shims = []);
  var W = U[h],
      q = [],
      V = !1;

  function X(t) {
    m && (V ? setTimeout(t, 0) : q.push(t));
  }

  m && ((V = (b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(b.readyState)) || b.addEventListener("DOMContentLoaded", function t() {
    b.removeEventListener("DOMContentLoaded", t), V = 1, q.map(function (t) {
      return t();
    });
  }));

  var B,
      G = "pending",
      K = "settled",
      J = "fulfilled",
      Q = "rejected",
      Z = function Z() {},
      nt = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
      at = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
      rt = [];

  function it() {
    for (var t = 0; t < rt.length; t++) {
      rt[t][0](rt[t][1]);
    }

    B = !(rt = []);
  }

  function ot(t, e) {
    rt.push([t, e]), B || (B = !0, at(it, 0));
  }

  function ct(t) {
    var e = t.owner,
        n = e._state,
        a = e._data,
        r = t[n],
        i = t.then;

    if ("function" == typeof r) {
      n = J;

      try {
        a = r(a);
      } catch (t) {
        ut(i, t);
      }
    }

    st(i, a) || (n === J && lt(i, a), n === Q && ut(i, a));
  }

  function st(e, n) {
    var a;

    try {
      if (e === n) throw new TypeError("A promises callback cannot return that same promise.");

      if (n && ("function" == typeof n || "object" === r(n))) {
        var t = n.then;
        if ("function" == typeof t) return t.call(n, function (t) {
          a || (a = !0, n === t ? ft(e, t) : lt(e, t));
        }, function (t) {
          a || (a = !0, ut(e, t));
        }), !0;
      }
    } catch (t) {
      return a || ut(e, t), !0;
    }

    return !1;
  }

  function lt(t, e) {
    t !== e && st(t, e) || ft(t, e);
  }

  function ft(t, e) {
    t._state === G && (t._state = K, t._data = e, ot(mt, t));
  }

  function ut(t, e) {
    t._state === G && (t._state = K, t._data = e, ot(pt, t));
  }

  function dt(t) {
    t._then = t._then.forEach(ct);
  }

  function mt(t) {
    t._state = J, dt(t);
  }

  function pt(t) {
    t._state = Q, dt(t), !t._handled && nt && global.process.emit("unhandledRejection", t._data, t);
  }

  function ht(t) {
    global.process.emit("rejectionHandled", t);
  }

  function gt(t) {
    if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
    if (this instanceof gt == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this._then = [], function (t, e) {
      function n(t) {
        ut(e, t);
      }

      try {
        t(function (t) {
          lt(e, t);
        }, n);
      } catch (t) {
        n(t);
      }
    }(t, this);
  }

  gt.prototype = {
    constructor: gt,
    _state: G,
    _then: null,
    _data: void 0,
    _handled: !1,
    then: function then(t, e) {
      var n = {
        owner: this,
        then: new this.constructor(Z),
        fulfilled: t,
        rejected: e
      };
      return !e && !t || this._handled || (this._handled = !0, this._state === Q && nt && ot(ht, this)), this._state === J || this._state === Q ? ot(ct, n) : this._then.push(n), n.then;
    },
    "catch": function _catch(t) {
      return this.then(null, t);
    }
  }, gt.all = function (c) {
    if (!Array.isArray(c)) throw new TypeError("You must pass an array to Promise.all().");
    return new gt(function (n, t) {
      var a = [],
          r = 0;

      function e(e) {
        return r++, function (t) {
          a[e] = t, --r || n(a);
        };
      }

      for (var i, o = 0; o < c.length; o++) {
        (i = c[o]) && "function" == typeof i.then ? i.then(e(o), t) : a[o] = i;
      }

      r || n(a);
    });
  }, gt.race = function (r) {
    if (!Array.isArray(r)) throw new TypeError("You must pass an array to Promise.race().");
    return new gt(function (t, e) {
      for (var n, a = 0; a < r.length; a++) {
        (n = r[a]) && "function" == typeof n.then ? n.then(t, e) : t(n);
      }
    });
  }, gt.resolve = function (e) {
    return e && "object" === r(e) && e.constructor === gt ? e : new gt(function (t) {
      t(e);
    });
  }, gt.reject = function (n) {
    return new gt(function (t, e) {
      e(n);
    });
  };
  var vt = "function" == typeof Promise ? Promise : gt,
      bt = A,
      yt = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
  };

  function wt(t) {
    if (t && m) {
      var e = b.createElement("style");
      e.setAttribute("type", "text/css"), e.innerHTML = t;

      for (var n = b.head.childNodes, a = null, r = n.length - 1; -1 < r; r--) {
        var i = n[r],
            o = (i.tagName || "").toUpperCase();
        -1 < ["STYLE", "LINK"].indexOf(o) && (a = i);
      }

      return b.head.insertBefore(e, a), t;
    }
  }

  var xt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function kt() {
    for (var t = 12, e = ""; 0 < t--;) {
      e += xt[62 * Math.random() | 0];
    }

    return e;
  }

  function At(t) {
    for (var e = [], n = (t || []).length >>> 0; n--;) {
      e[n] = t[n];
    }

    return e;
  }

  function Ct(t) {
    return t.classList ? At(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
      return t;
    });
  }

  function Ot(t, e) {
    var n,
        a = e.split("-"),
        r = a[0],
        i = a.slice(1).join("-");
    return r !== t || "" === i || (n = i, ~H.indexOf(n)) ? null : i;
  }

  function Pt(t) {
    return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function St(n) {
    return Object.keys(n || {}).reduce(function (t, e) {
      return t + "".concat(e, ": ").concat(n[e], ";");
    }, "");
  }

  function Nt(t) {
    return t.size !== yt.size || t.x !== yt.x || t.y !== yt.y || t.rotate !== yt.rotate || t.flipX || t.flipY;
  }

  function Mt(t) {
    var e = t.transform,
        n = t.containerWidth,
        a = t.iconWidth,
        r = {
      transform: "translate(".concat(n / 2, " 256)")
    },
        i = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
        o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
        c = "rotate(".concat(e.rotate, " 0 0)");
    return {
      outer: r,
      inner: {
        transform: "".concat(i, " ").concat(o, " ").concat(c)
      },
      path: {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }
    };
  }

  var zt = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };

  function Et(t) {
    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
    return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
  }

  function jt(t) {
    var e = t.icons,
        n = e.main,
        a = e.mask,
        r = t.prefix,
        i = t.iconName,
        o = t.transform,
        c = t.symbol,
        s = t.title,
        l = t.maskId,
        f = t.titleId,
        u = t.extra,
        d = t.watchable,
        m = void 0 !== d && d,
        p = a.found ? a : n,
        h = p.width,
        g = p.height,
        v = "fak" === r,
        b = v ? "" : "fa-w-".concat(Math.ceil(h / g * 16)),
        y = [et.replacementClass, i ? "".concat(et.familyPrefix, "-").concat(i) : "", b].filter(function (t) {
      return -1 === u.classes.indexOf(t);
    }).filter(function (t) {
      return "" !== t || !!t;
    }).concat(u.classes).join(" "),
        w = {
      children: [],
      attributes: $({}, u.attributes, {
        "data-prefix": r,
        "data-icon": i,
        "class": y,
        role: u.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(h, " ").concat(g)
      })
    },
        x = v && !~u.classes.indexOf("fa-fw") ? {
      width: "".concat(h / g * 16 * .0625, "em")
    } : {};
    m && (w.attributes[tt] = ""), s && w.children.push({
      tag: "title",
      attributes: {
        id: w.attributes["aria-labelledby"] || "title-".concat(f || kt())
      },
      children: [s]
    });

    var k,
        A,
        C,
        O,
        P,
        S,
        N,
        M,
        z,
        E,
        j,
        L,
        R,
        I,
        _,
        T,
        Y,
        H,
        F,
        D,
        U,
        W,
        q,
        V,
        X,
        B,
        G,
        K = $({}, w, {
      prefix: r,
      iconName: i,
      main: n,
      mask: a,
      maskId: l,
      transform: o,
      symbol: c,
      styles: $({}, x, u.styles)
    }),
        J = a.found && n.found ? (C = (k = K).children, O = k.attributes, P = k.main, S = k.mask, N = k.maskId, M = k.transform, z = P.width, E = P.icon, j = S.width, L = S.icon, R = Mt({
      transform: M,
      containerWidth: j,
      iconWidth: z
    }), I = {
      tag: "rect",
      attributes: $({}, zt, {
        fill: "white"
      })
    }, _ = E.children ? {
      children: E.children.map(Et)
    } : {}, T = {
      tag: "g",
      attributes: $({}, R.inner),
      children: [Et($({
        tag: E.tag,
        attributes: $({}, E.attributes, R.path)
      }, _))]
    }, Y = {
      tag: "g",
      attributes: $({}, R.outer),
      children: [T]
    }, H = "mask-".concat(N || kt()), F = "clip-".concat(N || kt()), D = {
      tag: "mask",
      attributes: $({}, zt, {
        id: H,
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse"
      }),
      children: [I, Y]
    }, U = {
      tag: "defs",
      children: [{
        tag: "clipPath",
        attributes: {
          id: F
        },
        children: (A = L, "g" === A.tag ? A.children : [A])
      }, D]
    }, C.push(U, {
      tag: "rect",
      attributes: $({
        fill: "currentColor",
        "clip-path": "url(#".concat(F, ")"),
        mask: "url(#".concat(H, ")")
      }, zt)
    }), {
      children: C,
      attributes: O
    }) : function (t) {
      var e = t.children,
          n = t.attributes,
          a = t.main,
          r = t.transform,
          i = St(t.styles);

      if (0 < i.length && (n.style = i), Nt(r)) {
        var o = Mt({
          transform: r,
          containerWidth: a.width,
          iconWidth: a.width
        });
        e.push({
          tag: "g",
          attributes: $({}, o.outer),
          children: [{
            tag: "g",
            attributes: $({}, o.inner),
            children: [{
              tag: a.icon.tag,
              children: a.icon.children,
              attributes: $({}, a.icon.attributes, o.path)
            }]
          }]
        });
      } else e.push(a.icon);

      return {
        children: e,
        attributes: n
      };
    }(K),
        Q = J.children,
        Z = J.attributes;

    return K.children = Q, K.attributes = Z, c ? (q = (W = K).prefix, V = W.iconName, X = W.children, B = W.attributes, G = W.symbol, [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: $({}, B, {
          id: !0 === G ? "".concat(q, "-").concat(et.familyPrefix, "-").concat(V) : G
        }),
        children: X
      }]
    }]) : function (t) {
      var e = t.children,
          n = t.main,
          a = t.mask,
          r = t.attributes,
          i = t.styles,
          o = t.transform;

      if (Nt(o) && n.found && !a.found) {
        var c = n.width / n.height / 2,
            s = .5;
        r.style = St($({}, i, {
          "transform-origin": "".concat(c + o.x / 16, "em ").concat(s + o.y / 16, "em")
        }));
      }

      return [{
        tag: "svg",
        attributes: r,
        children: e
      }];
    }(K);
  }

  function Lt(t) {
    var e = t.content,
        n = t.width,
        a = t.height,
        r = t.transform,
        i = t.title,
        o = t.extra,
        c = t.watchable,
        s = void 0 !== c && c,
        l = $({}, o.attributes, i ? {
      title: i
    } : {}, {
      "class": o.classes.join(" ")
    });
    s && (l[tt] = "");
    var f,
        u,
        d,
        m,
        p,
        h,
        g,
        v,
        b,
        y = $({}, o.styles);
    Nt(r) && (y.transform = (u = (f = {
      transform: r,
      startCentered: !0,
      width: n,
      height: a
    }).transform, d = f.width, m = void 0 === d ? A : d, p = f.height, h = void 0 === p ? A : p, g = f.startCentered, b = "", b += (v = void 0 !== g && g) && k ? "translate(".concat(u.x / bt - m / 2, "em, ").concat(u.y / bt - h / 2, "em) ") : v ? "translate(calc(-50% + ".concat(u.x / bt, "em), calc(-50% + ").concat(u.y / bt, "em)) ") : "translate(".concat(u.x / bt, "em, ").concat(u.y / bt, "em) "), b += "scale(".concat(u.size / bt * (u.flipX ? -1 : 1), ", ").concat(u.size / bt * (u.flipY ? -1 : 1), ") "), b += "rotate(".concat(u.rotate, "deg) ")), y["-webkit-transform"] = y.transform);
    var w = St(y);
    0 < w.length && (l.style = w);
    var x = [];
    return x.push({
      tag: "span",
      attributes: l,
      children: [e]
    }), i && x.push({
      tag: "span",
      attributes: {
        "class": "sr-only"
      },
      children: [i]
    }), x;
  }

  var Rt = function Rt() {},
      It = et.measurePerformance && f && f.mark && f.measure ? f : {
    mark: Rt,
    measure: Rt
  },
      _t = 'FA "5.15.3"',
      Tt = function Tt(t) {
    It.mark("".concat(_t, " ").concat(t, " ends")), It.measure("".concat(_t, " ").concat(t), "".concat(_t, " ").concat(t, " begins"), "".concat(_t, " ").concat(t, " ends"));
  },
      Yt = {
    begin: function begin(t) {
      return It.mark("".concat(_t, " ").concat(t, " begins")), function () {
        return Tt(t);
      };
    },
    end: Tt
  },
      Ht = function Ht(t, e, n, a) {
    var r,
        i,
        o,
        c,
        s,
        l = Object.keys(t),
        f = l.length,
        u = void 0 !== a ? (c = e, s = a, function (t, e, n, a) {
      return c.call(s, t, e, n, a);
    }) : e;

    for (o = void 0 === n ? (r = 1, t[l[0]]) : (r = 0, n); r < f; r++) {
      o = u(o, t[i = l[r]], i, t);
    }

    return o;
  };

  function Ft(t) {
    for (var e = "", n = 0; n < t.length; n++) {
      e += ("000" + t.charCodeAt(n).toString(16)).slice(-4);
    }

    return e;
  }

  var Dt = W.styles,
      Ut = W.shims,
      Wt = {},
      qt = {},
      Vt = {},
      Xt = function Xt() {
    var t = function t(a) {
      return Ht(Dt, function (t, e, n) {
        return t[n] = Ht(e, a, {}), t;
      }, {});
    };

    Wt = t(function (t, e, n) {
      return e[3] && (t[e[3]] = n), t;
    }), qt = t(function (e, t, n) {
      var a = t[2];
      return e[n] = n, a.forEach(function (t) {
        e[t] = n;
      }), e;
    });
    var i = ("far" in Dt);
    Vt = Ht(Ut, function (t, e) {
      var n = e[0],
          a = e[1],
          r = e[2];
      return "far" !== a || i || (a = "fas"), t[n] = {
        prefix: a,
        iconName: r
      }, t;
    }, {});
  };

  function Bt(t, e) {
    return (Wt[t] || {})[e];
  }

  Xt();

  var Gt = W.styles,
      Kt = function Kt() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };

  function Jt(t) {
    return t.reduce(function (t, e) {
      var n = Ot(et.familyPrefix, e);
      if (Gt[e]) t.prefix = e;else if (et.autoFetchSvg && -1 < Object.keys(z).indexOf(e)) t.prefix = e;else if (n) {
        var a = "fa" === t.prefix ? Vt[n] || {
          prefix: null,
          iconName: null
        } : {};
        t.iconName = a.iconName || n, t.prefix = a.prefix || t.prefix;
      } else e !== et.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
      return t;
    }, Kt());
  }

  function Qt(t, e, n) {
    if (t && t[e] && t[e][n]) return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
  }

  function Zt(t) {
    var n,
        e = t.tag,
        a = t.attributes,
        r = void 0 === a ? {} : a,
        i = t.children,
        o = void 0 === i ? [] : i;
    return "string" == typeof t ? Pt(t) : "<".concat(e, " ").concat((n = r, Object.keys(n || {}).reduce(function (t, e) {
      return t + "".concat(e, '="').concat(Pt(n[e]), '" ');
    }, "").trim()), ">").concat(o.map(Zt).join(""), "</").concat(e, ">");
  }

  var $t = function $t() {};

  function te(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(tt) : null);
  }

  var ee = {
    replace: function replace(t) {
      var e = t[0],
          n = t[1].map(function (t) {
        return Zt(t);
      }).join("\n");
      if (e.parentNode && e.outerHTML) e.outerHTML = n + (et.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- ".concat(e.outerHTML, " Font Awesome fontawesome.com --\x3e") : "");else if (e.parentNode) {
        var a = document.createElement("span");
        e.parentNode.replaceChild(a, e), a.outerHTML = n;
      }
    },
    nest: function nest(t) {
      var e = t[0],
          n = t[1];
      if (~Ct(e).indexOf(et.replacementClass)) return ee.replace(t);
      var a = new RegExp("".concat(et.familyPrefix, "-.*"));
      delete n[0].attributes.style, delete n[0].attributes.id;
      var r = n[0].attributes["class"].split(" ").reduce(function (t, e) {
        return e === et.replacementClass || e.match(a) ? t.toSvg.push(e) : t.toNode.push(e), t;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes["class"] = r.toSvg.join(" ");
      var i = n.map(function (t) {
        return Zt(t);
      }).join("\n");
      e.setAttribute("class", r.toNode.join(" ")), e.setAttribute(tt, ""), e.innerHTML = i;
    }
  };

  function ne(t) {
    t();
  }

  function ae(n, t) {
    var a = "function" == typeof t ? t : $t;
    if (0 === n.length) a();else {
      var e = ne;
      et.mutateApproach === S && (e = v.requestAnimationFrame || ne), e(function () {
        var t = !0 === et.autoReplaceSvg ? ee.replace : ee[et.autoReplaceSvg] || ee.replace,
            e = Yt.begin("mutate");
        n.map(t), e(), a();
      });
    }
  }

  var re = !1;

  function ie() {
    re = !1;
  }

  var oe = null;

  function ce(t) {
    if (l && et.observeMutations) {
      var r = t.treeCallback,
          i = t.nodeCallback,
          o = t.pseudoElementsCallback,
          e = t.observeMutationsRoot,
          n = void 0 === e ? b : e;
      oe = new l(function (t) {
        re || At(t).forEach(function (t) {
          if ("childList" === t.type && 0 < t.addedNodes.length && !te(t.addedNodes[0]) && (et.searchPseudoElements && o(t.target), r(t.target)), "attributes" === t.type && t.target.parentNode && et.searchPseudoElements && o(t.target.parentNode), "attributes" === t.type && te(t.target) && ~T.indexOf(t.attributeName)) if ("class" === t.attributeName) {
            var e = Jt(Ct(t.target)),
                n = e.prefix,
                a = e.iconName;
            n && t.target.setAttribute("data-prefix", n), a && t.target.setAttribute("data-icon", a);
          } else i(t.target);
        });
      }), m && oe.observe(n, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      });
    }
  }

  function se(t) {
    var e,
        n,
        a = t.getAttribute("data-prefix"),
        r = t.getAttribute("data-icon"),
        i = void 0 !== t.innerText ? t.innerText.trim() : "",
        o = Jt(Ct(t));
    return a && r && (o.prefix = a, o.iconName = r), o.prefix && 1 < i.length ? o.iconName = (e = o.prefix, n = t.innerText, (qt[e] || {})[n]) : o.prefix && 1 === i.length && (o.iconName = Bt(o.prefix, Ft(t.innerText))), o;
  }

  var le = function le(t) {
    var e = {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
    };
    return t ? t.toLowerCase().split(" ").reduce(function (t, e) {
      var n = e.toLowerCase().split("-"),
          a = n[0],
          r = n.slice(1).join("-");
      if (a && "h" === r) return t.flipX = !0, t;
      if (a && "v" === r) return t.flipY = !0, t;
      if (r = parseFloat(r), isNaN(r)) return t;

      switch (a) {
        case "grow":
          t.size = t.size + r;
          break;

        case "shrink":
          t.size = t.size - r;
          break;

        case "left":
          t.x = t.x - r;
          break;

        case "right":
          t.x = t.x + r;
          break;

        case "up":
          t.y = t.y - r;
          break;

        case "down":
          t.y = t.y + r;
          break;

        case "rotate":
          t.rotate = t.rotate + r;
      }

      return t;
    }, e) : e;
  };

  function fe(t) {
    var e,
        n,
        a,
        r,
        i,
        o,
        c,
        s,
        l = se(t),
        f = l.iconName,
        u = l.prefix,
        d = l.rest,
        m = (e = t.getAttribute("style"), n = [], e && (n = e.split(";").reduce(function (t, e) {
      var n = e.split(":"),
          a = n[0],
          r = n.slice(1);
      return a && 0 < r.length && (t[a] = r.join(":").trim()), t;
    }, {})), n),
        p = le(t.getAttribute("data-fa-transform")),
        h = null !== (a = t.getAttribute("data-fa-symbol")) && ("" === a || a),
        g = (i = At((r = t).attributes).reduce(function (t, e) {
      return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t;
    }, {}), o = r.getAttribute("title"), c = r.getAttribute("data-fa-title-id"), et.autoA11y && (o ? i["aria-labelledby"] = "".concat(et.replacementClass, "-title-").concat(c || kt()) : (i["aria-hidden"] = "true", i.focusable = "false")), i),
        v = (s = t.getAttribute("data-fa-mask")) ? Jt(s.split(" ").map(function (t) {
      return t.trim();
    })) : Kt();
    return {
      iconName: f,
      title: t.getAttribute("title"),
      titleId: t.getAttribute("data-fa-title-id"),
      prefix: u,
      transform: p,
      symbol: h,
      mask: v,
      maskId: t.getAttribute("data-fa-mask-id"),
      extra: {
        classes: d,
        styles: m,
        attributes: g
      }
    };
  }

  function ue(t) {
    this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = new Error().stack;
  }

  (ue.prototype = Object.create(Error.prototype)).constructor = ue;
  var de = {
    fill: "currentColor"
  },
      me = {
    attributeType: "XML",
    repeatCount: "indefinite",
    dur: "2s"
  },
      pe = {
    tag: "path",
    attributes: $({}, de, {
      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
    })
  },
      he = $({}, me, {
    attributeName: "opacity"
  }),
      ge = {
    tag: "g",
    children: [pe, {
      tag: "circle",
      attributes: $({}, de, {
        cx: "256",
        cy: "364",
        r: "28"
      }),
      children: [{
        tag: "animate",
        attributes: $({}, me, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: $({}, he, {
          values: "1;0;1;1;0;1;"
        })
      }]
    }, {
      tag: "path",
      attributes: $({}, de, {
        opacity: "1",
        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
      }),
      children: [{
        tag: "animate",
        attributes: $({}, he, {
          values: "1;0;0;0;0;1;"
        })
      }]
    }, {
      tag: "path",
      attributes: $({}, de, {
        opacity: "0",
        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
      }),
      children: [{
        tag: "animate",
        attributes: $({}, he, {
          values: "0;0;1;1;0;0;"
        })
      }]
    }]
  },
      ve = W.styles;

  function be(t) {
    var e = t[0],
        n = t[1],
        a = p(t.slice(4), 1)[0];
    return {
      found: !0,
      width: e,
      height: n,
      icon: Array.isArray(a) ? {
        tag: "g",
        attributes: {
          "class": "".concat(et.familyPrefix, "-").concat(Y.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            "class": "".concat(et.familyPrefix, "-").concat(Y.SECONDARY),
            fill: "currentColor",
            d: a[0]
          }
        }, {
          tag: "path",
          attributes: {
            "class": "".concat(et.familyPrefix, "-").concat(Y.PRIMARY),
            fill: "currentColor",
            d: a[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: a
        }
      }
    };
  }

  function ye(a, r) {
    return new vt(function (t, e) {
      var n = {
        found: !1,
        width: 512,
        height: 512,
        icon: ge
      };
      if (a && r && ve[r] && ve[r][a]) return t(be(ve[r][a]));
      a && r && !et.showMissingIcons ? e(new ue("Icon is missing for prefix ".concat(r, " with icon name ").concat(a))) : t(n);
    });
  }

  var we = W.styles;

  function xe(t) {
    var i,
        e,
        o,
        c,
        s,
        l,
        f,
        u,
        n,
        d,
        m,
        a = fe(t);
    return ~a.extra.classes.indexOf(j) ? function (t, e) {
      var n = e.title,
          a = e.transform,
          r = e.extra,
          i = null,
          o = null;

      if (k) {
        var c = parseInt(getComputedStyle(t).fontSize, 10),
            s = t.getBoundingClientRect();
        i = s.width / c, o = s.height / c;
      }

      return et.autoA11y && !n && (r.attributes["aria-hidden"] = "true"), vt.resolve([t, Lt({
        content: t.innerHTML,
        width: i,
        height: o,
        transform: a,
        title: n,
        extra: r,
        watchable: !0
      })]);
    }(t, a) : (i = t, o = (e = a).iconName, c = e.title, s = e.titleId, l = e.prefix, f = e.transform, u = e.symbol, n = e.mask, d = e.maskId, m = e.extra, new vt(function (r, t) {
      vt.all([ye(o, l), ye(n.iconName, n.prefix)]).then(function (t) {
        var e = p(t, 2),
            n = e[0],
            a = e[1];
        r([i, jt({
          icons: {
            main: n,
            mask: a
          },
          prefix: l,
          iconName: o,
          transform: f,
          symbol: u,
          mask: a,
          maskId: d,
          title: c,
          titleId: s,
          extra: m,
          watchable: !0
        })]);
      });
    }));
  }

  function ke(t) {
    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;

    if (m) {
      var e = b.documentElement.classList,
          a = function a(t) {
        return e.add("".concat(P, "-").concat(t));
      },
          r = function r(t) {
        return e.remove("".concat(P, "-").concat(t));
      },
          i = et.autoFetchSvg ? Object.keys(z) : Object.keys(we),
          o = [".".concat(j, ":not([").concat(tt, "])")].concat(i.map(function (t) {
        return ".".concat(t, ":not([").concat(tt, "])");
      })).join(", ");

      if (0 !== o.length) {
        var c = [];

        try {
          c = At(t.querySelectorAll(o));
        } catch (t) {}

        if (0 < c.length) {
          a("pending"), r("complete");
          var s = Yt.begin("onTree"),
              l = c.reduce(function (t, e) {
            try {
              var n = xe(e);
              n && t.push(n);
            } catch (t) {
              M || t instanceof ue && console.error(t);
            }

            return t;
          }, []);
          return new vt(function (e, t) {
            vt.all(l).then(function (t) {
              ae(t, function () {
                a("active"), a("complete"), r("pending"), "function" == typeof n && n(), s(), e();
              });
            })["catch"](function () {
              s(), t();
            });
          });
        }
      }
    }
  }

  function Ae(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    xe(t).then(function (t) {
      t && ae([t], e);
    });
  }

  function Ce(p, h) {
    var g = "".concat(x).concat(h.replace(":", "-"));
    return new vt(function (a, t) {
      if (null !== p.getAttribute(g)) return a();
      var e = At(p.children).filter(function (t) {
        return t.getAttribute(w) === h;
      })[0],
          n = v.getComputedStyle(p, h),
          r = n.getPropertyValue("font-family").match(L),
          i = n.getPropertyValue("font-weight"),
          o = n.getPropertyValue("content");
      if (e && !r) return p.removeChild(e), a();

      if (r && "none" !== o && "" !== o) {
        var c = n.getPropertyValue("content"),
            s = ~["Solid", "Regular", "Light", "Duotone", "Brands", "Kit"].indexOf(r[2]) ? E[r[2].toLowerCase()] : R[i],
            l = Ft(3 === c.length ? c.substr(1, 1) : c),
            f = Bt(s, l),
            u = f;
        if (!f || e && e.getAttribute(C) === s && e.getAttribute(O) === u) a();else {
          p.setAttribute(g, u), e && p.removeChild(e);
          var d = {
            iconName: null,
            title: null,
            titleId: null,
            prefix: null,
            transform: yt,
            symbol: !1,
            mask: null,
            maskId: null,
            extra: {
              classes: [],
              styles: {},
              attributes: {}
            }
          },
              m = d.extra;
          m.attributes[w] = h, ye(f, s).then(function (t) {
            var e = jt($({}, d, {
              icons: {
                main: t,
                mask: Kt()
              },
              prefix: s,
              iconName: u,
              extra: m,
              watchable: !0
            })),
                n = b.createElement("svg");
            ":before" === h ? p.insertBefore(n, p.firstChild) : p.appendChild(n), n.outerHTML = e.map(function (t) {
              return Zt(t);
            }).join("\n"), p.removeAttribute(g), a();
          })["catch"](t);
        }
      } else a();
    });
  }

  function Oe(t) {
    return vt.all([Ce(t, ":before"), Ce(t, ":after")]);
  }

  function Pe(t) {
    return !(t.parentNode === document.head || ~N.indexOf(t.tagName.toUpperCase()) || t.getAttribute(w) || t.parentNode && "svg" === t.parentNode.tagName);
  }

  function Se(r) {
    if (m) return new vt(function (t, e) {
      var n = At(r.querySelectorAll("*")).filter(Pe).map(Oe),
          a = Yt.begin("searchPseudoElements");
      re = !0, vt.all(n).then(function () {
        a(), ie(), t();
      })["catch"](function () {
        a(), ie(), e();
      });
    });
  }

  var Ne = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

  function Me() {
    var t = g,
        e = y,
        n = et.familyPrefix,
        a = et.replacementClass,
        r = Ne;

    if (n !== t || a !== e) {
      var i = new RegExp("\\.".concat(t, "\\-"), "g"),
          o = new RegExp("\\--".concat(t, "\\-"), "g"),
          c = new RegExp("\\.".concat(e), "g");
      r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(c, ".".concat(a));
    }

    return r;
  }

  function ze() {
    et.autoAddCss && !Ie && (wt(Me()), Ie = !0);
  }

  function Ee(e, t) {
    return Object.defineProperty(e, "abstract", {
      get: t
    }), Object.defineProperty(e, "html", {
      get: function get() {
        return e["abstract"].map(function (t) {
          return Zt(t);
        });
      }
    }), Object.defineProperty(e, "node", {
      get: function get() {
        if (m) {
          var t = b.createElement("div");
          return t.innerHTML = e.html, t.children;
        }
      }
    }), e;
  }

  function je(t) {
    var e = t.prefix,
        n = void 0 === e ? "fa" : e,
        a = t.iconName;
    if (a) return Qt(Re.definitions, n, a) || Qt(W.styles, n, a);
  }

  var Le,
      Re = new (function () {
    function t() {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.definitions = {};
    }

    var e, n, a;
    return e = t, (n = [{
      key: "add",
      value: function value() {
        for (var e = this, t = arguments.length, n = new Array(t), a = 0; a < t; a++) {
          n[a] = arguments[a];
        }

        var r = n.reduce(this._pullDefinitions, {});
        Object.keys(r).forEach(function (t) {
          e.definitions[t] = $({}, e.definitions[t] || {}, r[t]), function t(e, a) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                r = void 0 !== n && n,
                i = Object.keys(a).reduce(function (t, e) {
              var n = a[e];
              return n.icon ? t[n.iconName] = n.icon : t[e] = n, t;
            }, {});
            "function" != typeof W.hooks.addPack || r ? W.styles[e] = $({}, W.styles[e] || {}, i) : W.hooks.addPack(e, i), "fas" === e && t("fa", a);
          }(t, r[t]), Xt();
        });
      }
    }, {
      key: "reset",
      value: function value() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function value(i, t) {
        var o = t.prefix && t.iconName && t.icon ? {
          0: t
        } : t;
        return Object.keys(o).map(function (t) {
          var e = o[t],
              n = e.prefix,
              a = e.iconName,
              r = e.icon;
          i[n] || (i[n] = {}), i[n][a] = r;
        }), i;
      }
    }]) && i(e.prototype, n), a && i(e, a), t;
  }())(),
      Ie = !1,
      _e = {
    i2svg: function i2svg() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};

      if (m) {
        ze();
        var e = t.node,
            n = void 0 === e ? b : e,
            a = t.callback,
            r = void 0 === a ? function () {} : a;
        return et.searchPseudoElements && Se(n), ke(n, r);
      }

      return vt.reject("Operation requires a DOM of some kind.");
    },
    css: Me,
    insertCss: function insertCss() {
      Ie || (wt(Me()), Ie = !0);
    },
    watch: function watch() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.autoReplaceSvgRoot,
          n = t.observeMutationsRoot;
      !1 === et.autoReplaceSvg && (et.autoReplaceSvg = !0), et.observeMutations = !0, X(function () {
        He({
          autoReplaceSvgRoot: e
        }), ce({
          treeCallback: ke,
          nodeCallback: Ae,
          pseudoElementsCallback: Se,
          observeMutationsRoot: n
        });
      });
    }
  },
      Te = (Le = function Le(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.transform,
        a = void 0 === n ? yt : n,
        r = e.symbol,
        i = void 0 !== r && r,
        o = e.mask,
        c = void 0 === o ? null : o,
        s = e.maskId,
        l = void 0 === s ? null : s,
        f = e.title,
        u = void 0 === f ? null : f,
        d = e.titleId,
        m = void 0 === d ? null : d,
        p = e.classes,
        h = void 0 === p ? [] : p,
        g = e.attributes,
        v = void 0 === g ? {} : g,
        b = e.styles,
        y = void 0 === b ? {} : b;

    if (t) {
      var w = t.prefix,
          x = t.iconName,
          k = t.icon;
      return Ee($({
        type: "icon"
      }, t), function () {
        return ze(), et.autoA11y && (u ? v["aria-labelledby"] = "".concat(et.replacementClass, "-title-").concat(m || kt()) : (v["aria-hidden"] = "true", v.focusable = "false")), jt({
          icons: {
            main: be(k),
            mask: c ? be(c.icon) : {
              found: !1,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: w,
          iconName: x,
          transform: $({}, yt, a),
          symbol: i,
          title: u,
          maskId: l,
          titleId: m,
          extra: {
            attributes: v,
            styles: y,
            classes: h
          }
        });
      });
    }
  }, function (t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        n = (t || {}).icon ? t : je(t || {}),
        a = e.mask;
    return a && (a = (a || {}).icon ? a : je(a || {})), Le(n, $({}, e, {
      mask: a
    }));
  }),
      Ye = {
    noAuto: function noAuto() {
      et.autoReplaceSvg = !1, et.observeMutations = !1, oe && oe.disconnect();
    },
    config: et,
    dom: _e,
    library: Re,
    parse: {
      transform: function transform(t) {
        return le(t);
      }
    },
    findIconDefinition: je,
    icon: Te,
    text: function text(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.transform,
          a = void 0 === n ? yt : n,
          r = e.title,
          i = void 0 === r ? null : r,
          o = e.classes,
          c = void 0 === o ? [] : o,
          s = e.attributes,
          l = void 0 === s ? {} : s,
          f = e.styles,
          u = void 0 === f ? {} : f;
      return Ee({
        type: "text",
        content: t
      }, function () {
        return ze(), Lt({
          content: t,
          transform: $({}, yt, a),
          title: i,
          extra: {
            attributes: l,
            styles: u,
            classes: ["".concat(et.familyPrefix, "-layers-text")].concat(d(c))
          }
        });
      });
    },
    counter: function counter(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.title,
          a = void 0 === n ? null : n,
          r = e.classes,
          i = void 0 === r ? [] : r,
          o = e.attributes,
          c = void 0 === o ? {} : o,
          s = e.styles,
          l = void 0 === s ? {} : s;
      return Ee({
        type: "counter",
        content: t
      }, function () {
        return ze(), function (t) {
          var e = t.content,
              n = t.title,
              a = t.extra,
              r = $({}, a.attributes, n ? {
            title: n
          } : {}, {
            "class": a.classes.join(" ")
          }),
              i = St(a.styles);
          0 < i.length && (r.style = i);
          var o = [];
          return o.push({
            tag: "span",
            attributes: r,
            children: [e]
          }), n && o.push({
            tag: "span",
            attributes: {
              "class": "sr-only"
            },
            children: [n]
          }), o;
        }({
          content: t.toString(),
          title: a,
          extra: {
            attributes: c,
            styles: l,
            classes: ["".concat(et.familyPrefix, "-layers-counter")].concat(d(i))
          }
        });
      });
    },
    layer: function layer(t) {
      var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
          n = void 0 === e ? [] : e;
      return Ee({
        type: "layer"
      }, function () {
        ze();
        var e = [];
        return t(function (t) {
          Array.isArray(t) ? t.map(function (t) {
            e = e.concat(t["abstract"]);
          }) : e = e.concat(t["abstract"]);
        }), [{
          tag: "span",
          attributes: {
            "class": ["".concat(et.familyPrefix, "-layers")].concat(d(n)).join(" ")
          },
          children: e
        }];
      });
    },
    toHtml: Zt
  },
      He = function He() {
    var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
        e = void 0 === t ? b : t;
    (0 < Object.keys(W.styles).length || et.autoFetchSvg) && m && et.autoReplaceSvg && Ye.dom.i2svg({
      node: e
    });
  };

  !function (t) {
    try {
      t();
    } catch (t) {
      if (!M) throw t;
    }
  }(function () {
    u && (v.FontAwesome || (v.FontAwesome = Ye), X(function () {
      He(), ce({
        treeCallback: ke,
        nodeCallback: Ae,
        pseudoElementsCallback: Se
      });
    })), W.hooks = $({}, W.hooks, {
      addPack: function addPack(t, e) {
        W.styles[t] = $({}, W.styles[t] || {}, e), Xt(), He();
      },
      addShims: function addShims(t) {
        var e;
        (e = W.shims).push.apply(e, d(t)), Xt(), He();
      }
    });
  });
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../node_modules/node-libs-browser/node_modules/timers-browserify/main.js */ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/timers-browserify/main.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ 13:
/*!***************************************************************************************************************************************************!*\
  !*** multi ./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.js ./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.min.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/lmcuong/Documents/Tech/Ruby on Rails/HN_ruby_2022_phone_ecommerce/app/javascript/packs/vendor/fontawesome-free/js/fontawesome.js */"./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.js");
module.exports = __webpack_require__(/*! /home/lmcuong/Documents/Tech/Ruby on Rails/HN_ruby_2022_phone_ecommerce/app/javascript/packs/vendor/fontawesome-free/js/fontawesome.min.js */"./app/javascript/packs/vendor/fontawesome-free/js/fontawesome.min.js");


/***/ })

/******/ });
//# sourceMappingURL=fontawesome-50096d178a3740d65f04.js.map