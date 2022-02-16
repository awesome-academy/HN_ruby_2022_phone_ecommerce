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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss":
/*!***********************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./brands.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.eot":
/*!*********************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.eot ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/vendor/fontawesome-free/webfonts/fa-brands-400-89a52ae1d02b86d6143987c865471c24.eot";

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.svg":
/*!*********************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.svg ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/vendor/fontawesome-free/webfonts/fa-brands-400-216edb96b562c79adc09e2d3c63db7c0.svg";

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.ttf":
/*!*********************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.ttf ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/vendor/fontawesome-free/webfonts/fa-brands-400-9e138496e8f1719c6ebf0abe50563635.ttf";

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff":
/*!**********************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/vendor/fontawesome-free/webfonts/fa-brands-400-329a95a9172fdb2cccb4f9347ed55233.woff";

/***/ }),

/***/ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff2":
/*!***********************************************************************************!*\
  !*** ./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff2 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/packs/vendor/fontawesome-free/webfonts/fa-brands-400-c1210e5ebe4344da508396540be7f52c.woff2";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/packs/vendor/fontawesome-free/scss/brands.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../webfonts/fa-brands-400.woff2 */ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../webfonts/fa-brands-400.woff */ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../webfonts/fa-brands-400.ttf */ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../webfonts/fa-brands-400.svg */ "./app/javascript/packs/vendor/fontawesome-free/webfonts/fa-brands-400.svg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#fontawesome" });
// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: \"Font Awesome 5 Brands\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");\n}\n.fab {\n  font-family: \"Font Awesome 5 Brands\";\n  font-weight: 400;\n}", "",{"version":3,"sources":["/home/lmcuong/Documents/Tech/Ruby on Rails/HN_ruby_2022_phone_ecommerce/app/javascript/packs/vendor/fontawesome-free/scss/brands.scss","/home/lmcuong/Documents/Tech/Ruby on Rails/HN_ruby_2022_phone_ecommerce/app/javascript/packs/vendor/fontawesome-free/scss/_variables.scss","brands.scss"],"names":[],"mappings":"AAAA;;;EAAA;AAMA;EACE,oCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBCLqB;EDMrB,4CAAA;EACA,4SAAA;AEDF;AFQA;EACE,oCAAA;EACA,gBAAA;AENF","file":"brands.scss","sourcesContent":["/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@import 'variables';\n\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: 400;\n  font-display: $fa-font-display;\n  src: url('#{$fa-font-path}/fa-brands-400.eot');\n  src: url('#{$fa-font-path}/fa-brands-400.eot?#iefix') format('embedded-opentype'),\n  url('#{$fa-font-path}/fa-brands-400.woff2') format('woff2'),\n  url('#{$fa-font-path}/fa-brands-400.woff') format('woff'),\n  url('#{$fa-font-path}/fa-brands-400.ttf') format('truetype'),\n  url('#{$fa-font-path}/fa-brands-400.svg#fontawesome') format('svg');\n}\n\n.fab {\n  font-family: 'Font Awesome 5 Brands';\n  font-weight: 400;\n}\n","// Variables\n// --------------------------\n\n$fa-font-path:         \"../webfonts\" !default;\n$fa-font-size-base:    16px !default;\n$fa-font-display:      block !default;\n$fa-css-prefix:        fa !default;\n$fa-version:           \"5.15.3\" !default;\n$fa-border-color:      #eee !default;\n$fa-inverse:           #fff !default;\n$fa-li-width:          2em !default;\n$fa-fw-width:          (20em / 16);\n$fa-primary-opacity:   1 !default;\n$fa-secondary-opacity: .4 !default;\n\n// Convenience function used to set content property\n@function fa-content($fa-var) {\n  @return unquote(\"\\\"#{ $fa-var }\\\"\");\n}\n\n$fa-var-500px: \\f26e;\n$fa-var-accessible-icon: \\f368;\n$fa-var-accusoft: \\f369;\n$fa-var-acquisitions-incorporated: \\f6af;\n$fa-var-ad: \\f641;\n$fa-var-address-book: \\f2b9;\n$fa-var-address-card: \\f2bb;\n$fa-var-adjust: \\f042;\n$fa-var-adn: \\f170;\n$fa-var-adversal: \\f36a;\n$fa-var-affiliatetheme: \\f36b;\n$fa-var-air-freshener: \\f5d0;\n$fa-var-airbnb: \\f834;\n$fa-var-algolia: \\f36c;\n$fa-var-align-center: \\f037;\n$fa-var-align-justify: \\f039;\n$fa-var-align-left: \\f036;\n$fa-var-align-right: \\f038;\n$fa-var-alipay: \\f642;\n$fa-var-allergies: \\f461;\n$fa-var-amazon: \\f270;\n$fa-var-amazon-pay: \\f42c;\n$fa-var-ambulance: \\f0f9;\n$fa-var-american-sign-language-interpreting: \\f2a3;\n$fa-var-amilia: \\f36d;\n$fa-var-anchor: \\f13d;\n$fa-var-android: \\f17b;\n$fa-var-angellist: \\f209;\n$fa-var-angle-double-down: \\f103;\n$fa-var-angle-double-left: \\f100;\n$fa-var-angle-double-right: \\f101;\n$fa-var-angle-double-up: \\f102;\n$fa-var-angle-down: \\f107;\n$fa-var-angle-left: \\f104;\n$fa-var-angle-right: \\f105;\n$fa-var-angle-up: \\f106;\n$fa-var-angry: \\f556;\n$fa-var-angrycreative: \\f36e;\n$fa-var-angular: \\f420;\n$fa-var-ankh: \\f644;\n$fa-var-app-store: \\f36f;\n$fa-var-app-store-ios: \\f370;\n$fa-var-apper: \\f371;\n$fa-var-apple: \\f179;\n$fa-var-apple-alt: \\f5d1;\n$fa-var-apple-pay: \\f415;\n$fa-var-archive: \\f187;\n$fa-var-archway: \\f557;\n$fa-var-arrow-alt-circle-down: \\f358;\n$fa-var-arrow-alt-circle-left: \\f359;\n$fa-var-arrow-alt-circle-right: \\f35a;\n$fa-var-arrow-alt-circle-up: \\f35b;\n$fa-var-arrow-circle-down: \\f0ab;\n$fa-var-arrow-circle-left: \\f0a8;\n$fa-var-arrow-circle-right: \\f0a9;\n$fa-var-arrow-circle-up: \\f0aa;\n$fa-var-arrow-down: \\f063;\n$fa-var-arrow-left: \\f060;\n$fa-var-arrow-right: \\f061;\n$fa-var-arrow-up: \\f062;\n$fa-var-arrows-alt: \\f0b2;\n$fa-var-arrows-alt-h: \\f337;\n$fa-var-arrows-alt-v: \\f338;\n$fa-var-artstation: \\f77a;\n$fa-var-assistive-listening-systems: \\f2a2;\n$fa-var-asterisk: \\f069;\n$fa-var-asymmetrik: \\f372;\n$fa-var-at: \\f1fa;\n$fa-var-atlas: \\f558;\n$fa-var-atlassian: \\f77b;\n$fa-var-atom: \\f5d2;\n$fa-var-audible: \\f373;\n$fa-var-audio-description: \\f29e;\n$fa-var-autoprefixer: \\f41c;\n$fa-var-avianex: \\f374;\n$fa-var-aviato: \\f421;\n$fa-var-award: \\f559;\n$fa-var-aws: \\f375;\n$fa-var-baby: \\f77c;\n$fa-var-baby-carriage: \\f77d;\n$fa-var-backspace: \\f55a;\n$fa-var-backward: \\f04a;\n$fa-var-bacon: \\f7e5;\n$fa-var-bacteria: \\e059;\n$fa-var-bacterium: \\e05a;\n$fa-var-bahai: \\f666;\n$fa-var-balance-scale: \\f24e;\n$fa-var-balance-scale-left: \\f515;\n$fa-var-balance-scale-right: \\f516;\n$fa-var-ban: \\f05e;\n$fa-var-band-aid: \\f462;\n$fa-var-bandcamp: \\f2d5;\n$fa-var-barcode: \\f02a;\n$fa-var-bars: \\f0c9;\n$fa-var-baseball-ball: \\f433;\n$fa-var-basketball-ball: \\f434;\n$fa-var-bath: \\f2cd;\n$fa-var-battery-empty: \\f244;\n$fa-var-battery-full: \\f240;\n$fa-var-battery-half: \\f242;\n$fa-var-battery-quarter: \\f243;\n$fa-var-battery-three-quarters: \\f241;\n$fa-var-battle-net: \\f835;\n$fa-var-bed: \\f236;\n$fa-var-beer: \\f0fc;\n$fa-var-behance: \\f1b4;\n$fa-var-behance-square: \\f1b5;\n$fa-var-bell: \\f0f3;\n$fa-var-bell-slash: \\f1f6;\n$fa-var-bezier-curve: \\f55b;\n$fa-var-bible: \\f647;\n$fa-var-bicycle: \\f206;\n$fa-var-biking: \\f84a;\n$fa-var-bimobject: \\f378;\n$fa-var-binoculars: \\f1e5;\n$fa-var-biohazard: \\f780;\n$fa-var-birthday-cake: \\f1fd;\n$fa-var-bitbucket: \\f171;\n$fa-var-bitcoin: \\f379;\n$fa-var-bity: \\f37a;\n$fa-var-black-tie: \\f27e;\n$fa-var-blackberry: \\f37b;\n$fa-var-blender: \\f517;\n$fa-var-blender-phone: \\f6b6;\n$fa-var-blind: \\f29d;\n$fa-var-blog: \\f781;\n$fa-var-blogger: \\f37c;\n$fa-var-blogger-b: \\f37d;\n$fa-var-bluetooth: \\f293;\n$fa-var-bluetooth-b: \\f294;\n$fa-var-bold: \\f032;\n$fa-var-bolt: \\f0e7;\n$fa-var-bomb: \\f1e2;\n$fa-var-bone: \\f5d7;\n$fa-var-bong: \\f55c;\n$fa-var-book: \\f02d;\n$fa-var-book-dead: \\f6b7;\n$fa-var-book-medical: \\f7e6;\n$fa-var-book-open: \\f518;\n$fa-var-book-reader: \\f5da;\n$fa-var-bookmark: \\f02e;\n$fa-var-bootstrap: \\f836;\n$fa-var-border-all: \\f84c;\n$fa-var-border-none: \\f850;\n$fa-var-border-style: \\f853;\n$fa-var-bowling-ball: \\f436;\n$fa-var-box: \\f466;\n$fa-var-box-open: \\f49e;\n$fa-var-box-tissue: \\e05b;\n$fa-var-boxes: \\f468;\n$fa-var-braille: \\f2a1;\n$fa-var-brain: \\f5dc;\n$fa-var-bread-slice: \\f7ec;\n$fa-var-briefcase: \\f0b1;\n$fa-var-briefcase-medical: \\f469;\n$fa-var-broadcast-tower: \\f519;\n$fa-var-broom: \\f51a;\n$fa-var-brush: \\f55d;\n$fa-var-btc: \\f15a;\n$fa-var-buffer: \\f837;\n$fa-var-bug: \\f188;\n$fa-var-building: \\f1ad;\n$fa-var-bullhorn: \\f0a1;\n$fa-var-bullseye: \\f140;\n$fa-var-burn: \\f46a;\n$fa-var-buromobelexperte: \\f37f;\n$fa-var-bus: \\f207;\n$fa-var-bus-alt: \\f55e;\n$fa-var-business-time: \\f64a;\n$fa-var-buy-n-large: \\f8a6;\n$fa-var-buysellads: \\f20d;\n$fa-var-calculator: \\f1ec;\n$fa-var-calendar: \\f133;\n$fa-var-calendar-alt: \\f073;\n$fa-var-calendar-check: \\f274;\n$fa-var-calendar-day: \\f783;\n$fa-var-calendar-minus: \\f272;\n$fa-var-calendar-plus: \\f271;\n$fa-var-calendar-times: \\f273;\n$fa-var-calendar-week: \\f784;\n$fa-var-camera: \\f030;\n$fa-var-camera-retro: \\f083;\n$fa-var-campground: \\f6bb;\n$fa-var-canadian-maple-leaf: \\f785;\n$fa-var-candy-cane: \\f786;\n$fa-var-cannabis: \\f55f;\n$fa-var-capsules: \\f46b;\n$fa-var-car: \\f1b9;\n$fa-var-car-alt: \\f5de;\n$fa-var-car-battery: \\f5df;\n$fa-var-car-crash: \\f5e1;\n$fa-var-car-side: \\f5e4;\n$fa-var-caravan: \\f8ff;\n$fa-var-caret-down: \\f0d7;\n$fa-var-caret-left: \\f0d9;\n$fa-var-caret-right: \\f0da;\n$fa-var-caret-square-down: \\f150;\n$fa-var-caret-square-left: \\f191;\n$fa-var-caret-square-right: \\f152;\n$fa-var-caret-square-up: \\f151;\n$fa-var-caret-up: \\f0d8;\n$fa-var-carrot: \\f787;\n$fa-var-cart-arrow-down: \\f218;\n$fa-var-cart-plus: \\f217;\n$fa-var-cash-register: \\f788;\n$fa-var-cat: \\f6be;\n$fa-var-cc-amazon-pay: \\f42d;\n$fa-var-cc-amex: \\f1f3;\n$fa-var-cc-apple-pay: \\f416;\n$fa-var-cc-diners-club: \\f24c;\n$fa-var-cc-discover: \\f1f2;\n$fa-var-cc-jcb: \\f24b;\n$fa-var-cc-mastercard: \\f1f1;\n$fa-var-cc-paypal: \\f1f4;\n$fa-var-cc-stripe: \\f1f5;\n$fa-var-cc-visa: \\f1f0;\n$fa-var-centercode: \\f380;\n$fa-var-centos: \\f789;\n$fa-var-certificate: \\f0a3;\n$fa-var-chair: \\f6c0;\n$fa-var-chalkboard: \\f51b;\n$fa-var-chalkboard-teacher: \\f51c;\n$fa-var-charging-station: \\f5e7;\n$fa-var-chart-area: \\f1fe;\n$fa-var-chart-bar: \\f080;\n$fa-var-chart-line: \\f201;\n$fa-var-chart-pie: \\f200;\n$fa-var-check: \\f00c;\n$fa-var-check-circle: \\f058;\n$fa-var-check-double: \\f560;\n$fa-var-check-square: \\f14a;\n$fa-var-cheese: \\f7ef;\n$fa-var-chess: \\f439;\n$fa-var-chess-bishop: \\f43a;\n$fa-var-chess-board: \\f43c;\n$fa-var-chess-king: \\f43f;\n$fa-var-chess-knight: \\f441;\n$fa-var-chess-pawn: \\f443;\n$fa-var-chess-queen: \\f445;\n$fa-var-chess-rook: \\f447;\n$fa-var-chevron-circle-down: \\f13a;\n$fa-var-chevron-circle-left: \\f137;\n$fa-var-chevron-circle-right: \\f138;\n$fa-var-chevron-circle-up: \\f139;\n$fa-var-chevron-down: \\f078;\n$fa-var-chevron-left: \\f053;\n$fa-var-chevron-right: \\f054;\n$fa-var-chevron-up: \\f077;\n$fa-var-child: \\f1ae;\n$fa-var-chrome: \\f268;\n$fa-var-chromecast: \\f838;\n$fa-var-church: \\f51d;\n$fa-var-circle: \\f111;\n$fa-var-circle-notch: \\f1ce;\n$fa-var-city: \\f64f;\n$fa-var-clinic-medical: \\f7f2;\n$fa-var-clipboard: \\f328;\n$fa-var-clipboard-check: \\f46c;\n$fa-var-clipboard-list: \\f46d;\n$fa-var-clock: \\f017;\n$fa-var-clone: \\f24d;\n$fa-var-closed-captioning: \\f20a;\n$fa-var-cloud: \\f0c2;\n$fa-var-cloud-download-alt: \\f381;\n$fa-var-cloud-meatball: \\f73b;\n$fa-var-cloud-moon: \\f6c3;\n$fa-var-cloud-moon-rain: \\f73c;\n$fa-var-cloud-rain: \\f73d;\n$fa-var-cloud-showers-heavy: \\f740;\n$fa-var-cloud-sun: \\f6c4;\n$fa-var-cloud-sun-rain: \\f743;\n$fa-var-cloud-upload-alt: \\f382;\n$fa-var-cloudflare: \\e07d;\n$fa-var-cloudscale: \\f383;\n$fa-var-cloudsmith: \\f384;\n$fa-var-cloudversify: \\f385;\n$fa-var-cocktail: \\f561;\n$fa-var-code: \\f121;\n$fa-var-code-branch: \\f126;\n$fa-var-codepen: \\f1cb;\n$fa-var-codiepie: \\f284;\n$fa-var-coffee: \\f0f4;\n$fa-var-cog: \\f013;\n$fa-var-cogs: \\f085;\n$fa-var-coins: \\f51e;\n$fa-var-columns: \\f0db;\n$fa-var-comment: \\f075;\n$fa-var-comment-alt: \\f27a;\n$fa-var-comment-dollar: \\f651;\n$fa-var-comment-dots: \\f4ad;\n$fa-var-comment-medical: \\f7f5;\n$fa-var-comment-slash: \\f4b3;\n$fa-var-comments: \\f086;\n$fa-var-comments-dollar: \\f653;\n$fa-var-compact-disc: \\f51f;\n$fa-var-compass: \\f14e;\n$fa-var-compress: \\f066;\n$fa-var-compress-alt: \\f422;\n$fa-var-compress-arrows-alt: \\f78c;\n$fa-var-concierge-bell: \\f562;\n$fa-var-confluence: \\f78d;\n$fa-var-connectdevelop: \\f20e;\n$fa-var-contao: \\f26d;\n$fa-var-cookie: \\f563;\n$fa-var-cookie-bite: \\f564;\n$fa-var-copy: \\f0c5;\n$fa-var-copyright: \\f1f9;\n$fa-var-cotton-bureau: \\f89e;\n$fa-var-couch: \\f4b8;\n$fa-var-cpanel: \\f388;\n$fa-var-creative-commons: \\f25e;\n$fa-var-creative-commons-by: \\f4e7;\n$fa-var-creative-commons-nc: \\f4e8;\n$fa-var-creative-commons-nc-eu: \\f4e9;\n$fa-var-creative-commons-nc-jp: \\f4ea;\n$fa-var-creative-commons-nd: \\f4eb;\n$fa-var-creative-commons-pd: \\f4ec;\n$fa-var-creative-commons-pd-alt: \\f4ed;\n$fa-var-creative-commons-remix: \\f4ee;\n$fa-var-creative-commons-sa: \\f4ef;\n$fa-var-creative-commons-sampling: \\f4f0;\n$fa-var-creative-commons-sampling-plus: \\f4f1;\n$fa-var-creative-commons-share: \\f4f2;\n$fa-var-creative-commons-zero: \\f4f3;\n$fa-var-credit-card: \\f09d;\n$fa-var-critical-role: \\f6c9;\n$fa-var-crop: \\f125;\n$fa-var-crop-alt: \\f565;\n$fa-var-cross: \\f654;\n$fa-var-crosshairs: \\f05b;\n$fa-var-crow: \\f520;\n$fa-var-crown: \\f521;\n$fa-var-crutch: \\f7f7;\n$fa-var-css3: \\f13c;\n$fa-var-css3-alt: \\f38b;\n$fa-var-cube: \\f1b2;\n$fa-var-cubes: \\f1b3;\n$fa-var-cut: \\f0c4;\n$fa-var-cuttlefish: \\f38c;\n$fa-var-d-and-d: \\f38d;\n$fa-var-d-and-d-beyond: \\f6ca;\n$fa-var-dailymotion: \\e052;\n$fa-var-dashcube: \\f210;\n$fa-var-database: \\f1c0;\n$fa-var-deaf: \\f2a4;\n$fa-var-deezer: \\e077;\n$fa-var-delicious: \\f1a5;\n$fa-var-democrat: \\f747;\n$fa-var-deploydog: \\f38e;\n$fa-var-deskpro: \\f38f;\n$fa-var-desktop: \\f108;\n$fa-var-dev: \\f6cc;\n$fa-var-deviantart: \\f1bd;\n$fa-var-dharmachakra: \\f655;\n$fa-var-dhl: \\f790;\n$fa-var-diagnoses: \\f470;\n$fa-var-diaspora: \\f791;\n$fa-var-dice: \\f522;\n$fa-var-dice-d20: \\f6cf;\n$fa-var-dice-d6: \\f6d1;\n$fa-var-dice-five: \\f523;\n$fa-var-dice-four: \\f524;\n$fa-var-dice-one: \\f525;\n$fa-var-dice-six: \\f526;\n$fa-var-dice-three: \\f527;\n$fa-var-dice-two: \\f528;\n$fa-var-digg: \\f1a6;\n$fa-var-digital-ocean: \\f391;\n$fa-var-digital-tachograph: \\f566;\n$fa-var-directions: \\f5eb;\n$fa-var-discord: \\f392;\n$fa-var-discourse: \\f393;\n$fa-var-disease: \\f7fa;\n$fa-var-divide: \\f529;\n$fa-var-dizzy: \\f567;\n$fa-var-dna: \\f471;\n$fa-var-dochub: \\f394;\n$fa-var-docker: \\f395;\n$fa-var-dog: \\f6d3;\n$fa-var-dollar-sign: \\f155;\n$fa-var-dolly: \\f472;\n$fa-var-dolly-flatbed: \\f474;\n$fa-var-donate: \\f4b9;\n$fa-var-door-closed: \\f52a;\n$fa-var-door-open: \\f52b;\n$fa-var-dot-circle: \\f192;\n$fa-var-dove: \\f4ba;\n$fa-var-download: \\f019;\n$fa-var-draft2digital: \\f396;\n$fa-var-drafting-compass: \\f568;\n$fa-var-dragon: \\f6d5;\n$fa-var-draw-polygon: \\f5ee;\n$fa-var-dribbble: \\f17d;\n$fa-var-dribbble-square: \\f397;\n$fa-var-dropbox: \\f16b;\n$fa-var-drum: \\f569;\n$fa-var-drum-steelpan: \\f56a;\n$fa-var-drumstick-bite: \\f6d7;\n$fa-var-drupal: \\f1a9;\n$fa-var-dumbbell: \\f44b;\n$fa-var-dumpster: \\f793;\n$fa-var-dumpster-fire: \\f794;\n$fa-var-dungeon: \\f6d9;\n$fa-var-dyalog: \\f399;\n$fa-var-earlybirds: \\f39a;\n$fa-var-ebay: \\f4f4;\n$fa-var-edge: \\f282;\n$fa-var-edge-legacy: \\e078;\n$fa-var-edit: \\f044;\n$fa-var-egg: \\f7fb;\n$fa-var-eject: \\f052;\n$fa-var-elementor: \\f430;\n$fa-var-ellipsis-h: \\f141;\n$fa-var-ellipsis-v: \\f142;\n$fa-var-ello: \\f5f1;\n$fa-var-ember: \\f423;\n$fa-var-empire: \\f1d1;\n$fa-var-envelope: \\f0e0;\n$fa-var-envelope-open: \\f2b6;\n$fa-var-envelope-open-text: \\f658;\n$fa-var-envelope-square: \\f199;\n$fa-var-envira: \\f299;\n$fa-var-equals: \\f52c;\n$fa-var-eraser: \\f12d;\n$fa-var-erlang: \\f39d;\n$fa-var-ethereum: \\f42e;\n$fa-var-ethernet: \\f796;\n$fa-var-etsy: \\f2d7;\n$fa-var-euro-sign: \\f153;\n$fa-var-evernote: \\f839;\n$fa-var-exchange-alt: \\f362;\n$fa-var-exclamation: \\f12a;\n$fa-var-exclamation-circle: \\f06a;\n$fa-var-exclamation-triangle: \\f071;\n$fa-var-expand: \\f065;\n$fa-var-expand-alt: \\f424;\n$fa-var-expand-arrows-alt: \\f31e;\n$fa-var-expeditedssl: \\f23e;\n$fa-var-external-link-alt: \\f35d;\n$fa-var-external-link-square-alt: \\f360;\n$fa-var-eye: \\f06e;\n$fa-var-eye-dropper: \\f1fb;\n$fa-var-eye-slash: \\f070;\n$fa-var-facebook: \\f09a;\n$fa-var-facebook-f: \\f39e;\n$fa-var-facebook-messenger: \\f39f;\n$fa-var-facebook-square: \\f082;\n$fa-var-fan: \\f863;\n$fa-var-fantasy-flight-games: \\f6dc;\n$fa-var-fast-backward: \\f049;\n$fa-var-fast-forward: \\f050;\n$fa-var-faucet: \\e005;\n$fa-var-fax: \\f1ac;\n$fa-var-feather: \\f52d;\n$fa-var-feather-alt: \\f56b;\n$fa-var-fedex: \\f797;\n$fa-var-fedora: \\f798;\n$fa-var-female: \\f182;\n$fa-var-fighter-jet: \\f0fb;\n$fa-var-figma: \\f799;\n$fa-var-file: \\f15b;\n$fa-var-file-alt: \\f15c;\n$fa-var-file-archive: \\f1c6;\n$fa-var-file-audio: \\f1c7;\n$fa-var-file-code: \\f1c9;\n$fa-var-file-contract: \\f56c;\n$fa-var-file-csv: \\f6dd;\n$fa-var-file-download: \\f56d;\n$fa-var-file-excel: \\f1c3;\n$fa-var-file-export: \\f56e;\n$fa-var-file-image: \\f1c5;\n$fa-var-file-import: \\f56f;\n$fa-var-file-invoice: \\f570;\n$fa-var-file-invoice-dollar: \\f571;\n$fa-var-file-medical: \\f477;\n$fa-var-file-medical-alt: \\f478;\n$fa-var-file-pdf: \\f1c1;\n$fa-var-file-powerpoint: \\f1c4;\n$fa-var-file-prescription: \\f572;\n$fa-var-file-signature: \\f573;\n$fa-var-file-upload: \\f574;\n$fa-var-file-video: \\f1c8;\n$fa-var-file-word: \\f1c2;\n$fa-var-fill: \\f575;\n$fa-var-fill-drip: \\f576;\n$fa-var-film: \\f008;\n$fa-var-filter: \\f0b0;\n$fa-var-fingerprint: \\f577;\n$fa-var-fire: \\f06d;\n$fa-var-fire-alt: \\f7e4;\n$fa-var-fire-extinguisher: \\f134;\n$fa-var-firefox: \\f269;\n$fa-var-firefox-browser: \\e007;\n$fa-var-first-aid: \\f479;\n$fa-var-first-order: \\f2b0;\n$fa-var-first-order-alt: \\f50a;\n$fa-var-firstdraft: \\f3a1;\n$fa-var-fish: \\f578;\n$fa-var-fist-raised: \\f6de;\n$fa-var-flag: \\f024;\n$fa-var-flag-checkered: \\f11e;\n$fa-var-flag-usa: \\f74d;\n$fa-var-flask: \\f0c3;\n$fa-var-flickr: \\f16e;\n$fa-var-flipboard: \\f44d;\n$fa-var-flushed: \\f579;\n$fa-var-fly: \\f417;\n$fa-var-folder: \\f07b;\n$fa-var-folder-minus: \\f65d;\n$fa-var-folder-open: \\f07c;\n$fa-var-folder-plus: \\f65e;\n$fa-var-font: \\f031;\n$fa-var-font-awesome: \\f2b4;\n$fa-var-font-awesome-alt: \\f35c;\n$fa-var-font-awesome-flag: \\f425;\n$fa-var-font-awesome-logo-full: \\f4e6;\n$fa-var-fonticons: \\f280;\n$fa-var-fonticons-fi: \\f3a2;\n$fa-var-football-ball: \\f44e;\n$fa-var-fort-awesome: \\f286;\n$fa-var-fort-awesome-alt: \\f3a3;\n$fa-var-forumbee: \\f211;\n$fa-var-forward: \\f04e;\n$fa-var-foursquare: \\f180;\n$fa-var-free-code-camp: \\f2c5;\n$fa-var-freebsd: \\f3a4;\n$fa-var-frog: \\f52e;\n$fa-var-frown: \\f119;\n$fa-var-frown-open: \\f57a;\n$fa-var-fulcrum: \\f50b;\n$fa-var-funnel-dollar: \\f662;\n$fa-var-futbol: \\f1e3;\n$fa-var-galactic-republic: \\f50c;\n$fa-var-galactic-senate: \\f50d;\n$fa-var-gamepad: \\f11b;\n$fa-var-gas-pump: \\f52f;\n$fa-var-gavel: \\f0e3;\n$fa-var-gem: \\f3a5;\n$fa-var-genderless: \\f22d;\n$fa-var-get-pocket: \\f265;\n$fa-var-gg: \\f260;\n$fa-var-gg-circle: \\f261;\n$fa-var-ghost: \\f6e2;\n$fa-var-gift: \\f06b;\n$fa-var-gifts: \\f79c;\n$fa-var-git: \\f1d3;\n$fa-var-git-alt: \\f841;\n$fa-var-git-square: \\f1d2;\n$fa-var-github: \\f09b;\n$fa-var-github-alt: \\f113;\n$fa-var-github-square: \\f092;\n$fa-var-gitkraken: \\f3a6;\n$fa-var-gitlab: \\f296;\n$fa-var-gitter: \\f426;\n$fa-var-glass-cheers: \\f79f;\n$fa-var-glass-martini: \\f000;\n$fa-var-glass-martini-alt: \\f57b;\n$fa-var-glass-whiskey: \\f7a0;\n$fa-var-glasses: \\f530;\n$fa-var-glide: \\f2a5;\n$fa-var-glide-g: \\f2a6;\n$fa-var-globe: \\f0ac;\n$fa-var-globe-africa: \\f57c;\n$fa-var-globe-americas: \\f57d;\n$fa-var-globe-asia: \\f57e;\n$fa-var-globe-europe: \\f7a2;\n$fa-var-gofore: \\f3a7;\n$fa-var-golf-ball: \\f450;\n$fa-var-goodreads: \\f3a8;\n$fa-var-goodreads-g: \\f3a9;\n$fa-var-google: \\f1a0;\n$fa-var-google-drive: \\f3aa;\n$fa-var-google-pay: \\e079;\n$fa-var-google-play: \\f3ab;\n$fa-var-google-plus: \\f2b3;\n$fa-var-google-plus-g: \\f0d5;\n$fa-var-google-plus-square: \\f0d4;\n$fa-var-google-wallet: \\f1ee;\n$fa-var-gopuram: \\f664;\n$fa-var-graduation-cap: \\f19d;\n$fa-var-gratipay: \\f184;\n$fa-var-grav: \\f2d6;\n$fa-var-greater-than: \\f531;\n$fa-var-greater-than-equal: \\f532;\n$fa-var-grimace: \\f57f;\n$fa-var-grin: \\f580;\n$fa-var-grin-alt: \\f581;\n$fa-var-grin-beam: \\f582;\n$fa-var-grin-beam-sweat: \\f583;\n$fa-var-grin-hearts: \\f584;\n$fa-var-grin-squint: \\f585;\n$fa-var-grin-squint-tears: \\f586;\n$fa-var-grin-stars: \\f587;\n$fa-var-grin-tears: \\f588;\n$fa-var-grin-tongue: \\f589;\n$fa-var-grin-tongue-squint: \\f58a;\n$fa-var-grin-tongue-wink: \\f58b;\n$fa-var-grin-wink: \\f58c;\n$fa-var-grip-horizontal: \\f58d;\n$fa-var-grip-lines: \\f7a4;\n$fa-var-grip-lines-vertical: \\f7a5;\n$fa-var-grip-vertical: \\f58e;\n$fa-var-gripfire: \\f3ac;\n$fa-var-grunt: \\f3ad;\n$fa-var-guilded: \\e07e;\n$fa-var-guitar: \\f7a6;\n$fa-var-gulp: \\f3ae;\n$fa-var-h-square: \\f0fd;\n$fa-var-hacker-news: \\f1d4;\n$fa-var-hacker-news-square: \\f3af;\n$fa-var-hackerrank: \\f5f7;\n$fa-var-hamburger: \\f805;\n$fa-var-hammer: \\f6e3;\n$fa-var-hamsa: \\f665;\n$fa-var-hand-holding: \\f4bd;\n$fa-var-hand-holding-heart: \\f4be;\n$fa-var-hand-holding-medical: \\e05c;\n$fa-var-hand-holding-usd: \\f4c0;\n$fa-var-hand-holding-water: \\f4c1;\n$fa-var-hand-lizard: \\f258;\n$fa-var-hand-middle-finger: \\f806;\n$fa-var-hand-paper: \\f256;\n$fa-var-hand-peace: \\f25b;\n$fa-var-hand-point-down: \\f0a7;\n$fa-var-hand-point-left: \\f0a5;\n$fa-var-hand-point-right: \\f0a4;\n$fa-var-hand-point-up: \\f0a6;\n$fa-var-hand-pointer: \\f25a;\n$fa-var-hand-rock: \\f255;\n$fa-var-hand-scissors: \\f257;\n$fa-var-hand-sparkles: \\e05d;\n$fa-var-hand-spock: \\f259;\n$fa-var-hands: \\f4c2;\n$fa-var-hands-helping: \\f4c4;\n$fa-var-hands-wash: \\e05e;\n$fa-var-handshake: \\f2b5;\n$fa-var-handshake-alt-slash: \\e05f;\n$fa-var-handshake-slash: \\e060;\n$fa-var-hanukiah: \\f6e6;\n$fa-var-hard-hat: \\f807;\n$fa-var-hashtag: \\f292;\n$fa-var-hat-cowboy: \\f8c0;\n$fa-var-hat-cowboy-side: \\f8c1;\n$fa-var-hat-wizard: \\f6e8;\n$fa-var-hdd: \\f0a0;\n$fa-var-head-side-cough: \\e061;\n$fa-var-head-side-cough-slash: \\e062;\n$fa-var-head-side-mask: \\e063;\n$fa-var-head-side-virus: \\e064;\n$fa-var-heading: \\f1dc;\n$fa-var-headphones: \\f025;\n$fa-var-headphones-alt: \\f58f;\n$fa-var-headset: \\f590;\n$fa-var-heart: \\f004;\n$fa-var-heart-broken: \\f7a9;\n$fa-var-heartbeat: \\f21e;\n$fa-var-helicopter: \\f533;\n$fa-var-highlighter: \\f591;\n$fa-var-hiking: \\f6ec;\n$fa-var-hippo: \\f6ed;\n$fa-var-hips: \\f452;\n$fa-var-hire-a-helper: \\f3b0;\n$fa-var-history: \\f1da;\n$fa-var-hive: \\e07f;\n$fa-var-hockey-puck: \\f453;\n$fa-var-holly-berry: \\f7aa;\n$fa-var-home: \\f015;\n$fa-var-hooli: \\f427;\n$fa-var-hornbill: \\f592;\n$fa-var-horse: \\f6f0;\n$fa-var-horse-head: \\f7ab;\n$fa-var-hospital: \\f0f8;\n$fa-var-hospital-alt: \\f47d;\n$fa-var-hospital-symbol: \\f47e;\n$fa-var-hospital-user: \\f80d;\n$fa-var-hot-tub: \\f593;\n$fa-var-hotdog: \\f80f;\n$fa-var-hotel: \\f594;\n$fa-var-hotjar: \\f3b1;\n$fa-var-hourglass: \\f254;\n$fa-var-hourglass-end: \\f253;\n$fa-var-hourglass-half: \\f252;\n$fa-var-hourglass-start: \\f251;\n$fa-var-house-damage: \\f6f1;\n$fa-var-house-user: \\e065;\n$fa-var-houzz: \\f27c;\n$fa-var-hryvnia: \\f6f2;\n$fa-var-html5: \\f13b;\n$fa-var-hubspot: \\f3b2;\n$fa-var-i-cursor: \\f246;\n$fa-var-ice-cream: \\f810;\n$fa-var-icicles: \\f7ad;\n$fa-var-icons: \\f86d;\n$fa-var-id-badge: \\f2c1;\n$fa-var-id-card: \\f2c2;\n$fa-var-id-card-alt: \\f47f;\n$fa-var-ideal: \\e013;\n$fa-var-igloo: \\f7ae;\n$fa-var-image: \\f03e;\n$fa-var-images: \\f302;\n$fa-var-imdb: \\f2d8;\n$fa-var-inbox: \\f01c;\n$fa-var-indent: \\f03c;\n$fa-var-industry: \\f275;\n$fa-var-infinity: \\f534;\n$fa-var-info: \\f129;\n$fa-var-info-circle: \\f05a;\n$fa-var-innosoft: \\e080;\n$fa-var-instagram: \\f16d;\n$fa-var-instagram-square: \\e055;\n$fa-var-instalod: \\e081;\n$fa-var-intercom: \\f7af;\n$fa-var-internet-explorer: \\f26b;\n$fa-var-invision: \\f7b0;\n$fa-var-ioxhost: \\f208;\n$fa-var-italic: \\f033;\n$fa-var-itch-io: \\f83a;\n$fa-var-itunes: \\f3b4;\n$fa-var-itunes-note: \\f3b5;\n$fa-var-java: \\f4e4;\n$fa-var-jedi: \\f669;\n$fa-var-jedi-order: \\f50e;\n$fa-var-jenkins: \\f3b6;\n$fa-var-jira: \\f7b1;\n$fa-var-joget: \\f3b7;\n$fa-var-joint: \\f595;\n$fa-var-joomla: \\f1aa;\n$fa-var-journal-whills: \\f66a;\n$fa-var-js: \\f3b8;\n$fa-var-js-square: \\f3b9;\n$fa-var-jsfiddle: \\f1cc;\n$fa-var-kaaba: \\f66b;\n$fa-var-kaggle: \\f5fa;\n$fa-var-key: \\f084;\n$fa-var-keybase: \\f4f5;\n$fa-var-keyboard: \\f11c;\n$fa-var-keycdn: \\f3ba;\n$fa-var-khanda: \\f66d;\n$fa-var-kickstarter: \\f3bb;\n$fa-var-kickstarter-k: \\f3bc;\n$fa-var-kiss: \\f596;\n$fa-var-kiss-beam: \\f597;\n$fa-var-kiss-wink-heart: \\f598;\n$fa-var-kiwi-bird: \\f535;\n$fa-var-korvue: \\f42f;\n$fa-var-landmark: \\f66f;\n$fa-var-language: \\f1ab;\n$fa-var-laptop: \\f109;\n$fa-var-laptop-code: \\f5fc;\n$fa-var-laptop-house: \\e066;\n$fa-var-laptop-medical: \\f812;\n$fa-var-laravel: \\f3bd;\n$fa-var-lastfm: \\f202;\n$fa-var-lastfm-square: \\f203;\n$fa-var-laugh: \\f599;\n$fa-var-laugh-beam: \\f59a;\n$fa-var-laugh-squint: \\f59b;\n$fa-var-laugh-wink: \\f59c;\n$fa-var-layer-group: \\f5fd;\n$fa-var-leaf: \\f06c;\n$fa-var-leanpub: \\f212;\n$fa-var-lemon: \\f094;\n$fa-var-less: \\f41d;\n$fa-var-less-than: \\f536;\n$fa-var-less-than-equal: \\f537;\n$fa-var-level-down-alt: \\f3be;\n$fa-var-level-up-alt: \\f3bf;\n$fa-var-life-ring: \\f1cd;\n$fa-var-lightbulb: \\f0eb;\n$fa-var-line: \\f3c0;\n$fa-var-link: \\f0c1;\n$fa-var-linkedin: \\f08c;\n$fa-var-linkedin-in: \\f0e1;\n$fa-var-linode: \\f2b8;\n$fa-var-linux: \\f17c;\n$fa-var-lira-sign: \\f195;\n$fa-var-list: \\f03a;\n$fa-var-list-alt: \\f022;\n$fa-var-list-ol: \\f0cb;\n$fa-var-list-ul: \\f0ca;\n$fa-var-location-arrow: \\f124;\n$fa-var-lock: \\f023;\n$fa-var-lock-open: \\f3c1;\n$fa-var-long-arrow-alt-down: \\f309;\n$fa-var-long-arrow-alt-left: \\f30a;\n$fa-var-long-arrow-alt-right: \\f30b;\n$fa-var-long-arrow-alt-up: \\f30c;\n$fa-var-low-vision: \\f2a8;\n$fa-var-luggage-cart: \\f59d;\n$fa-var-lungs: \\f604;\n$fa-var-lungs-virus: \\e067;\n$fa-var-lyft: \\f3c3;\n$fa-var-magento: \\f3c4;\n$fa-var-magic: \\f0d0;\n$fa-var-magnet: \\f076;\n$fa-var-mail-bulk: \\f674;\n$fa-var-mailchimp: \\f59e;\n$fa-var-male: \\f183;\n$fa-var-mandalorian: \\f50f;\n$fa-var-map: \\f279;\n$fa-var-map-marked: \\f59f;\n$fa-var-map-marked-alt: \\f5a0;\n$fa-var-map-marker: \\f041;\n$fa-var-map-marker-alt: \\f3c5;\n$fa-var-map-pin: \\f276;\n$fa-var-map-signs: \\f277;\n$fa-var-markdown: \\f60f;\n$fa-var-marker: \\f5a1;\n$fa-var-mars: \\f222;\n$fa-var-mars-double: \\f227;\n$fa-var-mars-stroke: \\f229;\n$fa-var-mars-stroke-h: \\f22b;\n$fa-var-mars-stroke-v: \\f22a;\n$fa-var-mask: \\f6fa;\n$fa-var-mastodon: \\f4f6;\n$fa-var-maxcdn: \\f136;\n$fa-var-mdb: \\f8ca;\n$fa-var-medal: \\f5a2;\n$fa-var-medapps: \\f3c6;\n$fa-var-medium: \\f23a;\n$fa-var-medium-m: \\f3c7;\n$fa-var-medkit: \\f0fa;\n$fa-var-medrt: \\f3c8;\n$fa-var-meetup: \\f2e0;\n$fa-var-megaport: \\f5a3;\n$fa-var-meh: \\f11a;\n$fa-var-meh-blank: \\f5a4;\n$fa-var-meh-rolling-eyes: \\f5a5;\n$fa-var-memory: \\f538;\n$fa-var-mendeley: \\f7b3;\n$fa-var-menorah: \\f676;\n$fa-var-mercury: \\f223;\n$fa-var-meteor: \\f753;\n$fa-var-microblog: \\e01a;\n$fa-var-microchip: \\f2db;\n$fa-var-microphone: \\f130;\n$fa-var-microphone-alt: \\f3c9;\n$fa-var-microphone-alt-slash: \\f539;\n$fa-var-microphone-slash: \\f131;\n$fa-var-microscope: \\f610;\n$fa-var-microsoft: \\f3ca;\n$fa-var-minus: \\f068;\n$fa-var-minus-circle: \\f056;\n$fa-var-minus-square: \\f146;\n$fa-var-mitten: \\f7b5;\n$fa-var-mix: \\f3cb;\n$fa-var-mixcloud: \\f289;\n$fa-var-mixer: \\e056;\n$fa-var-mizuni: \\f3cc;\n$fa-var-mobile: \\f10b;\n$fa-var-mobile-alt: \\f3cd;\n$fa-var-modx: \\f285;\n$fa-var-monero: \\f3d0;\n$fa-var-money-bill: \\f0d6;\n$fa-var-money-bill-alt: \\f3d1;\n$fa-var-money-bill-wave: \\f53a;\n$fa-var-money-bill-wave-alt: \\f53b;\n$fa-var-money-check: \\f53c;\n$fa-var-money-check-alt: \\f53d;\n$fa-var-monument: \\f5a6;\n$fa-var-moon: \\f186;\n$fa-var-mortar-pestle: \\f5a7;\n$fa-var-mosque: \\f678;\n$fa-var-motorcycle: \\f21c;\n$fa-var-mountain: \\f6fc;\n$fa-var-mouse: \\f8cc;\n$fa-var-mouse-pointer: \\f245;\n$fa-var-mug-hot: \\f7b6;\n$fa-var-music: \\f001;\n$fa-var-napster: \\f3d2;\n$fa-var-neos: \\f612;\n$fa-var-network-wired: \\f6ff;\n$fa-var-neuter: \\f22c;\n$fa-var-newspaper: \\f1ea;\n$fa-var-nimblr: \\f5a8;\n$fa-var-node: \\f419;\n$fa-var-node-js: \\f3d3;\n$fa-var-not-equal: \\f53e;\n$fa-var-notes-medical: \\f481;\n$fa-var-npm: \\f3d4;\n$fa-var-ns8: \\f3d5;\n$fa-var-nutritionix: \\f3d6;\n$fa-var-object-group: \\f247;\n$fa-var-object-ungroup: \\f248;\n$fa-var-octopus-deploy: \\e082;\n$fa-var-odnoklassniki: \\f263;\n$fa-var-odnoklassniki-square: \\f264;\n$fa-var-oil-can: \\f613;\n$fa-var-old-republic: \\f510;\n$fa-var-om: \\f679;\n$fa-var-opencart: \\f23d;\n$fa-var-openid: \\f19b;\n$fa-var-opera: \\f26a;\n$fa-var-optin-monster: \\f23c;\n$fa-var-orcid: \\f8d2;\n$fa-var-osi: \\f41a;\n$fa-var-otter: \\f700;\n$fa-var-outdent: \\f03b;\n$fa-var-page4: \\f3d7;\n$fa-var-pagelines: \\f18c;\n$fa-var-pager: \\f815;\n$fa-var-paint-brush: \\f1fc;\n$fa-var-paint-roller: \\f5aa;\n$fa-var-palette: \\f53f;\n$fa-var-palfed: \\f3d8;\n$fa-var-pallet: \\f482;\n$fa-var-paper-plane: \\f1d8;\n$fa-var-paperclip: \\f0c6;\n$fa-var-parachute-box: \\f4cd;\n$fa-var-paragraph: \\f1dd;\n$fa-var-parking: \\f540;\n$fa-var-passport: \\f5ab;\n$fa-var-pastafarianism: \\f67b;\n$fa-var-paste: \\f0ea;\n$fa-var-patreon: \\f3d9;\n$fa-var-pause: \\f04c;\n$fa-var-pause-circle: \\f28b;\n$fa-var-paw: \\f1b0;\n$fa-var-paypal: \\f1ed;\n$fa-var-peace: \\f67c;\n$fa-var-pen: \\f304;\n$fa-var-pen-alt: \\f305;\n$fa-var-pen-fancy: \\f5ac;\n$fa-var-pen-nib: \\f5ad;\n$fa-var-pen-square: \\f14b;\n$fa-var-pencil-alt: \\f303;\n$fa-var-pencil-ruler: \\f5ae;\n$fa-var-penny-arcade: \\f704;\n$fa-var-people-arrows: \\e068;\n$fa-var-people-carry: \\f4ce;\n$fa-var-pepper-hot: \\f816;\n$fa-var-perbyte: \\e083;\n$fa-var-percent: \\f295;\n$fa-var-percentage: \\f541;\n$fa-var-periscope: \\f3da;\n$fa-var-person-booth: \\f756;\n$fa-var-phabricator: \\f3db;\n$fa-var-phoenix-framework: \\f3dc;\n$fa-var-phoenix-squadron: \\f511;\n$fa-var-phone: \\f095;\n$fa-var-phone-alt: \\f879;\n$fa-var-phone-slash: \\f3dd;\n$fa-var-phone-square: \\f098;\n$fa-var-phone-square-alt: \\f87b;\n$fa-var-phone-volume: \\f2a0;\n$fa-var-photo-video: \\f87c;\n$fa-var-php: \\f457;\n$fa-var-pied-piper: \\f2ae;\n$fa-var-pied-piper-alt: \\f1a8;\n$fa-var-pied-piper-hat: \\f4e5;\n$fa-var-pied-piper-pp: \\f1a7;\n$fa-var-pied-piper-square: \\e01e;\n$fa-var-piggy-bank: \\f4d3;\n$fa-var-pills: \\f484;\n$fa-var-pinterest: \\f0d2;\n$fa-var-pinterest-p: \\f231;\n$fa-var-pinterest-square: \\f0d3;\n$fa-var-pizza-slice: \\f818;\n$fa-var-place-of-worship: \\f67f;\n$fa-var-plane: \\f072;\n$fa-var-plane-arrival: \\f5af;\n$fa-var-plane-departure: \\f5b0;\n$fa-var-plane-slash: \\e069;\n$fa-var-play: \\f04b;\n$fa-var-play-circle: \\f144;\n$fa-var-playstation: \\f3df;\n$fa-var-plug: \\f1e6;\n$fa-var-plus: \\f067;\n$fa-var-plus-circle: \\f055;\n$fa-var-plus-square: \\f0fe;\n$fa-var-podcast: \\f2ce;\n$fa-var-poll: \\f681;\n$fa-var-poll-h: \\f682;\n$fa-var-poo: \\f2fe;\n$fa-var-poo-storm: \\f75a;\n$fa-var-poop: \\f619;\n$fa-var-portrait: \\f3e0;\n$fa-var-pound-sign: \\f154;\n$fa-var-power-off: \\f011;\n$fa-var-pray: \\f683;\n$fa-var-praying-hands: \\f684;\n$fa-var-prescription: \\f5b1;\n$fa-var-prescription-bottle: \\f485;\n$fa-var-prescription-bottle-alt: \\f486;\n$fa-var-print: \\f02f;\n$fa-var-procedures: \\f487;\n$fa-var-product-hunt: \\f288;\n$fa-var-project-diagram: \\f542;\n$fa-var-pump-medical: \\e06a;\n$fa-var-pump-soap: \\e06b;\n$fa-var-pushed: \\f3e1;\n$fa-var-puzzle-piece: \\f12e;\n$fa-var-python: \\f3e2;\n$fa-var-qq: \\f1d6;\n$fa-var-qrcode: \\f029;\n$fa-var-question: \\f128;\n$fa-var-question-circle: \\f059;\n$fa-var-quidditch: \\f458;\n$fa-var-quinscape: \\f459;\n$fa-var-quora: \\f2c4;\n$fa-var-quote-left: \\f10d;\n$fa-var-quote-right: \\f10e;\n$fa-var-quran: \\f687;\n$fa-var-r-project: \\f4f7;\n$fa-var-radiation: \\f7b9;\n$fa-var-radiation-alt: \\f7ba;\n$fa-var-rainbow: \\f75b;\n$fa-var-random: \\f074;\n$fa-var-raspberry-pi: \\f7bb;\n$fa-var-ravelry: \\f2d9;\n$fa-var-react: \\f41b;\n$fa-var-reacteurope: \\f75d;\n$fa-var-readme: \\f4d5;\n$fa-var-rebel: \\f1d0;\n$fa-var-receipt: \\f543;\n$fa-var-record-vinyl: \\f8d9;\n$fa-var-recycle: \\f1b8;\n$fa-var-red-river: \\f3e3;\n$fa-var-reddit: \\f1a1;\n$fa-var-reddit-alien: \\f281;\n$fa-var-reddit-square: \\f1a2;\n$fa-var-redhat: \\f7bc;\n$fa-var-redo: \\f01e;\n$fa-var-redo-alt: \\f2f9;\n$fa-var-registered: \\f25d;\n$fa-var-remove-format: \\f87d;\n$fa-var-renren: \\f18b;\n$fa-var-reply: \\f3e5;\n$fa-var-reply-all: \\f122;\n$fa-var-replyd: \\f3e6;\n$fa-var-republican: \\f75e;\n$fa-var-researchgate: \\f4f8;\n$fa-var-resolving: \\f3e7;\n$fa-var-restroom: \\f7bd;\n$fa-var-retweet: \\f079;\n$fa-var-rev: \\f5b2;\n$fa-var-ribbon: \\f4d6;\n$fa-var-ring: \\f70b;\n$fa-var-road: \\f018;\n$fa-var-robot: \\f544;\n$fa-var-rocket: \\f135;\n$fa-var-rocketchat: \\f3e8;\n$fa-var-rockrms: \\f3e9;\n$fa-var-route: \\f4d7;\n$fa-var-rss: \\f09e;\n$fa-var-rss-square: \\f143;\n$fa-var-ruble-sign: \\f158;\n$fa-var-ruler: \\f545;\n$fa-var-ruler-combined: \\f546;\n$fa-var-ruler-horizontal: \\f547;\n$fa-var-ruler-vertical: \\f548;\n$fa-var-running: \\f70c;\n$fa-var-rupee-sign: \\f156;\n$fa-var-rust: \\e07a;\n$fa-var-sad-cry: \\f5b3;\n$fa-var-sad-tear: \\f5b4;\n$fa-var-safari: \\f267;\n$fa-var-salesforce: \\f83b;\n$fa-var-sass: \\f41e;\n$fa-var-satellite: \\f7bf;\n$fa-var-satellite-dish: \\f7c0;\n$fa-var-save: \\f0c7;\n$fa-var-schlix: \\f3ea;\n$fa-var-school: \\f549;\n$fa-var-screwdriver: \\f54a;\n$fa-var-scribd: \\f28a;\n$fa-var-scroll: \\f70e;\n$fa-var-sd-card: \\f7c2;\n$fa-var-search: \\f002;\n$fa-var-search-dollar: \\f688;\n$fa-var-search-location: \\f689;\n$fa-var-search-minus: \\f010;\n$fa-var-search-plus: \\f00e;\n$fa-var-searchengin: \\f3eb;\n$fa-var-seedling: \\f4d8;\n$fa-var-sellcast: \\f2da;\n$fa-var-sellsy: \\f213;\n$fa-var-server: \\f233;\n$fa-var-servicestack: \\f3ec;\n$fa-var-shapes: \\f61f;\n$fa-var-share: \\f064;\n$fa-var-share-alt: \\f1e0;\n$fa-var-share-alt-square: \\f1e1;\n$fa-var-share-square: \\f14d;\n$fa-var-shekel-sign: \\f20b;\n$fa-var-shield-alt: \\f3ed;\n$fa-var-shield-virus: \\e06c;\n$fa-var-ship: \\f21a;\n$fa-var-shipping-fast: \\f48b;\n$fa-var-shirtsinbulk: \\f214;\n$fa-var-shoe-prints: \\f54b;\n$fa-var-shopify: \\e057;\n$fa-var-shopping-bag: \\f290;\n$fa-var-shopping-basket: \\f291;\n$fa-var-shopping-cart: \\f07a;\n$fa-var-shopware: \\f5b5;\n$fa-var-shower: \\f2cc;\n$fa-var-shuttle-van: \\f5b6;\n$fa-var-sign: \\f4d9;\n$fa-var-sign-in-alt: \\f2f6;\n$fa-var-sign-language: \\f2a7;\n$fa-var-sign-out-alt: \\f2f5;\n$fa-var-signal: \\f012;\n$fa-var-signature: \\f5b7;\n$fa-var-sim-card: \\f7c4;\n$fa-var-simplybuilt: \\f215;\n$fa-var-sink: \\e06d;\n$fa-var-sistrix: \\f3ee;\n$fa-var-sitemap: \\f0e8;\n$fa-var-sith: \\f512;\n$fa-var-skating: \\f7c5;\n$fa-var-sketch: \\f7c6;\n$fa-var-skiing: \\f7c9;\n$fa-var-skiing-nordic: \\f7ca;\n$fa-var-skull: \\f54c;\n$fa-var-skull-crossbones: \\f714;\n$fa-var-skyatlas: \\f216;\n$fa-var-skype: \\f17e;\n$fa-var-slack: \\f198;\n$fa-var-slack-hash: \\f3ef;\n$fa-var-slash: \\f715;\n$fa-var-sleigh: \\f7cc;\n$fa-var-sliders-h: \\f1de;\n$fa-var-slideshare: \\f1e7;\n$fa-var-smile: \\f118;\n$fa-var-smile-beam: \\f5b8;\n$fa-var-smile-wink: \\f4da;\n$fa-var-smog: \\f75f;\n$fa-var-smoking: \\f48d;\n$fa-var-smoking-ban: \\f54d;\n$fa-var-sms: \\f7cd;\n$fa-var-snapchat: \\f2ab;\n$fa-var-snapchat-ghost: \\f2ac;\n$fa-var-snapchat-square: \\f2ad;\n$fa-var-snowboarding: \\f7ce;\n$fa-var-snowflake: \\f2dc;\n$fa-var-snowman: \\f7d0;\n$fa-var-snowplow: \\f7d2;\n$fa-var-soap: \\e06e;\n$fa-var-socks: \\f696;\n$fa-var-solar-panel: \\f5ba;\n$fa-var-sort: \\f0dc;\n$fa-var-sort-alpha-down: \\f15d;\n$fa-var-sort-alpha-down-alt: \\f881;\n$fa-var-sort-alpha-up: \\f15e;\n$fa-var-sort-alpha-up-alt: \\f882;\n$fa-var-sort-amount-down: \\f160;\n$fa-var-sort-amount-down-alt: \\f884;\n$fa-var-sort-amount-up: \\f161;\n$fa-var-sort-amount-up-alt: \\f885;\n$fa-var-sort-down: \\f0dd;\n$fa-var-sort-numeric-down: \\f162;\n$fa-var-sort-numeric-down-alt: \\f886;\n$fa-var-sort-numeric-up: \\f163;\n$fa-var-sort-numeric-up-alt: \\f887;\n$fa-var-sort-up: \\f0de;\n$fa-var-soundcloud: \\f1be;\n$fa-var-sourcetree: \\f7d3;\n$fa-var-spa: \\f5bb;\n$fa-var-space-shuttle: \\f197;\n$fa-var-speakap: \\f3f3;\n$fa-var-speaker-deck: \\f83c;\n$fa-var-spell-check: \\f891;\n$fa-var-spider: \\f717;\n$fa-var-spinner: \\f110;\n$fa-var-splotch: \\f5bc;\n$fa-var-spotify: \\f1bc;\n$fa-var-spray-can: \\f5bd;\n$fa-var-square: \\f0c8;\n$fa-var-square-full: \\f45c;\n$fa-var-square-root-alt: \\f698;\n$fa-var-squarespace: \\f5be;\n$fa-var-stack-exchange: \\f18d;\n$fa-var-stack-overflow: \\f16c;\n$fa-var-stackpath: \\f842;\n$fa-var-stamp: \\f5bf;\n$fa-var-star: \\f005;\n$fa-var-star-and-crescent: \\f699;\n$fa-var-star-half: \\f089;\n$fa-var-star-half-alt: \\f5c0;\n$fa-var-star-of-david: \\f69a;\n$fa-var-star-of-life: \\f621;\n$fa-var-staylinked: \\f3f5;\n$fa-var-steam: \\f1b6;\n$fa-var-steam-square: \\f1b7;\n$fa-var-steam-symbol: \\f3f6;\n$fa-var-step-backward: \\f048;\n$fa-var-step-forward: \\f051;\n$fa-var-stethoscope: \\f0f1;\n$fa-var-sticker-mule: \\f3f7;\n$fa-var-sticky-note: \\f249;\n$fa-var-stop: \\f04d;\n$fa-var-stop-circle: \\f28d;\n$fa-var-stopwatch: \\f2f2;\n$fa-var-stopwatch-20: \\e06f;\n$fa-var-store: \\f54e;\n$fa-var-store-alt: \\f54f;\n$fa-var-store-alt-slash: \\e070;\n$fa-var-store-slash: \\e071;\n$fa-var-strava: \\f428;\n$fa-var-stream: \\f550;\n$fa-var-street-view: \\f21d;\n$fa-var-strikethrough: \\f0cc;\n$fa-var-stripe: \\f429;\n$fa-var-stripe-s: \\f42a;\n$fa-var-stroopwafel: \\f551;\n$fa-var-studiovinari: \\f3f8;\n$fa-var-stumbleupon: \\f1a4;\n$fa-var-stumbleupon-circle: \\f1a3;\n$fa-var-subscript: \\f12c;\n$fa-var-subway: \\f239;\n$fa-var-suitcase: \\f0f2;\n$fa-var-suitcase-rolling: \\f5c1;\n$fa-var-sun: \\f185;\n$fa-var-superpowers: \\f2dd;\n$fa-var-superscript: \\f12b;\n$fa-var-supple: \\f3f9;\n$fa-var-surprise: \\f5c2;\n$fa-var-suse: \\f7d6;\n$fa-var-swatchbook: \\f5c3;\n$fa-var-swift: \\f8e1;\n$fa-var-swimmer: \\f5c4;\n$fa-var-swimming-pool: \\f5c5;\n$fa-var-symfony: \\f83d;\n$fa-var-synagogue: \\f69b;\n$fa-var-sync: \\f021;\n$fa-var-sync-alt: \\f2f1;\n$fa-var-syringe: \\f48e;\n$fa-var-table: \\f0ce;\n$fa-var-table-tennis: \\f45d;\n$fa-var-tablet: \\f10a;\n$fa-var-tablet-alt: \\f3fa;\n$fa-var-tablets: \\f490;\n$fa-var-tachometer-alt: \\f3fd;\n$fa-var-tag: \\f02b;\n$fa-var-tags: \\f02c;\n$fa-var-tape: \\f4db;\n$fa-var-tasks: \\f0ae;\n$fa-var-taxi: \\f1ba;\n$fa-var-teamspeak: \\f4f9;\n$fa-var-teeth: \\f62e;\n$fa-var-teeth-open: \\f62f;\n$fa-var-telegram: \\f2c6;\n$fa-var-telegram-plane: \\f3fe;\n$fa-var-temperature-high: \\f769;\n$fa-var-temperature-low: \\f76b;\n$fa-var-tencent-weibo: \\f1d5;\n$fa-var-tenge: \\f7d7;\n$fa-var-terminal: \\f120;\n$fa-var-text-height: \\f034;\n$fa-var-text-width: \\f035;\n$fa-var-th: \\f00a;\n$fa-var-th-large: \\f009;\n$fa-var-th-list: \\f00b;\n$fa-var-the-red-yeti: \\f69d;\n$fa-var-theater-masks: \\f630;\n$fa-var-themeco: \\f5c6;\n$fa-var-themeisle: \\f2b2;\n$fa-var-thermometer: \\f491;\n$fa-var-thermometer-empty: \\f2cb;\n$fa-var-thermometer-full: \\f2c7;\n$fa-var-thermometer-half: \\f2c9;\n$fa-var-thermometer-quarter: \\f2ca;\n$fa-var-thermometer-three-quarters: \\f2c8;\n$fa-var-think-peaks: \\f731;\n$fa-var-thumbs-down: \\f165;\n$fa-var-thumbs-up: \\f164;\n$fa-var-thumbtack: \\f08d;\n$fa-var-ticket-alt: \\f3ff;\n$fa-var-tiktok: \\e07b;\n$fa-var-times: \\f00d;\n$fa-var-times-circle: \\f057;\n$fa-var-tint: \\f043;\n$fa-var-tint-slash: \\f5c7;\n$fa-var-tired: \\f5c8;\n$fa-var-toggle-off: \\f204;\n$fa-var-toggle-on: \\f205;\n$fa-var-toilet: \\f7d8;\n$fa-var-toilet-paper: \\f71e;\n$fa-var-toilet-paper-slash: \\e072;\n$fa-var-toolbox: \\f552;\n$fa-var-tools: \\f7d9;\n$fa-var-tooth: \\f5c9;\n$fa-var-torah: \\f6a0;\n$fa-var-torii-gate: \\f6a1;\n$fa-var-tractor: \\f722;\n$fa-var-trade-federation: \\f513;\n$fa-var-trademark: \\f25c;\n$fa-var-traffic-light: \\f637;\n$fa-var-trailer: \\e041;\n$fa-var-train: \\f238;\n$fa-var-tram: \\f7da;\n$fa-var-transgender: \\f224;\n$fa-var-transgender-alt: \\f225;\n$fa-var-trash: \\f1f8;\n$fa-var-trash-alt: \\f2ed;\n$fa-var-trash-restore: \\f829;\n$fa-var-trash-restore-alt: \\f82a;\n$fa-var-tree: \\f1bb;\n$fa-var-trello: \\f181;\n$fa-var-tripadvisor: \\f262;\n$fa-var-trophy: \\f091;\n$fa-var-truck: \\f0d1;\n$fa-var-truck-loading: \\f4de;\n$fa-var-truck-monster: \\f63b;\n$fa-var-truck-moving: \\f4df;\n$fa-var-truck-pickup: \\f63c;\n$fa-var-tshirt: \\f553;\n$fa-var-tty: \\f1e4;\n$fa-var-tumblr: \\f173;\n$fa-var-tumblr-square: \\f174;\n$fa-var-tv: \\f26c;\n$fa-var-twitch: \\f1e8;\n$fa-var-twitter: \\f099;\n$fa-var-twitter-square: \\f081;\n$fa-var-typo3: \\f42b;\n$fa-var-uber: \\f402;\n$fa-var-ubuntu: \\f7df;\n$fa-var-uikit: \\f403;\n$fa-var-umbraco: \\f8e8;\n$fa-var-umbrella: \\f0e9;\n$fa-var-umbrella-beach: \\f5ca;\n$fa-var-uncharted: \\e084;\n$fa-var-underline: \\f0cd;\n$fa-var-undo: \\f0e2;\n$fa-var-undo-alt: \\f2ea;\n$fa-var-uniregistry: \\f404;\n$fa-var-unity: \\e049;\n$fa-var-universal-access: \\f29a;\n$fa-var-university: \\f19c;\n$fa-var-unlink: \\f127;\n$fa-var-unlock: \\f09c;\n$fa-var-unlock-alt: \\f13e;\n$fa-var-unsplash: \\e07c;\n$fa-var-untappd: \\f405;\n$fa-var-upload: \\f093;\n$fa-var-ups: \\f7e0;\n$fa-var-usb: \\f287;\n$fa-var-user: \\f007;\n$fa-var-user-alt: \\f406;\n$fa-var-user-alt-slash: \\f4fa;\n$fa-var-user-astronaut: \\f4fb;\n$fa-var-user-check: \\f4fc;\n$fa-var-user-circle: \\f2bd;\n$fa-var-user-clock: \\f4fd;\n$fa-var-user-cog: \\f4fe;\n$fa-var-user-edit: \\f4ff;\n$fa-var-user-friends: \\f500;\n$fa-var-user-graduate: \\f501;\n$fa-var-user-injured: \\f728;\n$fa-var-user-lock: \\f502;\n$fa-var-user-md: \\f0f0;\n$fa-var-user-minus: \\f503;\n$fa-var-user-ninja: \\f504;\n$fa-var-user-nurse: \\f82f;\n$fa-var-user-plus: \\f234;\n$fa-var-user-secret: \\f21b;\n$fa-var-user-shield: \\f505;\n$fa-var-user-slash: \\f506;\n$fa-var-user-tag: \\f507;\n$fa-var-user-tie: \\f508;\n$fa-var-user-times: \\f235;\n$fa-var-users: \\f0c0;\n$fa-var-users-cog: \\f509;\n$fa-var-users-slash: \\e073;\n$fa-var-usps: \\f7e1;\n$fa-var-ussunnah: \\f407;\n$fa-var-utensil-spoon: \\f2e5;\n$fa-var-utensils: \\f2e7;\n$fa-var-vaadin: \\f408;\n$fa-var-vector-square: \\f5cb;\n$fa-var-venus: \\f221;\n$fa-var-venus-double: \\f226;\n$fa-var-venus-mars: \\f228;\n$fa-var-vest: \\e085;\n$fa-var-vest-patches: \\e086;\n$fa-var-viacoin: \\f237;\n$fa-var-viadeo: \\f2a9;\n$fa-var-viadeo-square: \\f2aa;\n$fa-var-vial: \\f492;\n$fa-var-vials: \\f493;\n$fa-var-viber: \\f409;\n$fa-var-video: \\f03d;\n$fa-var-video-slash: \\f4e2;\n$fa-var-vihara: \\f6a7;\n$fa-var-vimeo: \\f40a;\n$fa-var-vimeo-square: \\f194;\n$fa-var-vimeo-v: \\f27d;\n$fa-var-vine: \\f1ca;\n$fa-var-virus: \\e074;\n$fa-var-virus-slash: \\e075;\n$fa-var-viruses: \\e076;\n$fa-var-vk: \\f189;\n$fa-var-vnv: \\f40b;\n$fa-var-voicemail: \\f897;\n$fa-var-volleyball-ball: \\f45f;\n$fa-var-volume-down: \\f027;\n$fa-var-volume-mute: \\f6a9;\n$fa-var-volume-off: \\f026;\n$fa-var-volume-up: \\f028;\n$fa-var-vote-yea: \\f772;\n$fa-var-vr-cardboard: \\f729;\n$fa-var-vuejs: \\f41f;\n$fa-var-walking: \\f554;\n$fa-var-wallet: \\f555;\n$fa-var-warehouse: \\f494;\n$fa-var-watchman-monitoring: \\e087;\n$fa-var-water: \\f773;\n$fa-var-wave-square: \\f83e;\n$fa-var-waze: \\f83f;\n$fa-var-weebly: \\f5cc;\n$fa-var-weibo: \\f18a;\n$fa-var-weight: \\f496;\n$fa-var-weight-hanging: \\f5cd;\n$fa-var-weixin: \\f1d7;\n$fa-var-whatsapp: \\f232;\n$fa-var-whatsapp-square: \\f40c;\n$fa-var-wheelchair: \\f193;\n$fa-var-whmcs: \\f40d;\n$fa-var-wifi: \\f1eb;\n$fa-var-wikipedia-w: \\f266;\n$fa-var-wind: \\f72e;\n$fa-var-window-close: \\f410;\n$fa-var-window-maximize: \\f2d0;\n$fa-var-window-minimize: \\f2d1;\n$fa-var-window-restore: \\f2d2;\n$fa-var-windows: \\f17a;\n$fa-var-wine-bottle: \\f72f;\n$fa-var-wine-glass: \\f4e3;\n$fa-var-wine-glass-alt: \\f5ce;\n$fa-var-wix: \\f5cf;\n$fa-var-wizards-of-the-coast: \\f730;\n$fa-var-wodu: \\e088;\n$fa-var-wolf-pack-battalion: \\f514;\n$fa-var-won-sign: \\f159;\n$fa-var-wordpress: \\f19a;\n$fa-var-wordpress-simple: \\f411;\n$fa-var-wpbeginner: \\f297;\n$fa-var-wpexplorer: \\f2de;\n$fa-var-wpforms: \\f298;\n$fa-var-wpressr: \\f3e4;\n$fa-var-wrench: \\f0ad;\n$fa-var-x-ray: \\f497;\n$fa-var-xbox: \\f412;\n$fa-var-xing: \\f168;\n$fa-var-xing-square: \\f169;\n$fa-var-y-combinator: \\f23b;\n$fa-var-yahoo: \\f19e;\n$fa-var-yammer: \\f840;\n$fa-var-yandex: \\f413;\n$fa-var-yandex-international: \\f414;\n$fa-var-yarn: \\f7e3;\n$fa-var-yelp: \\f1e9;\n$fa-var-yen-sign: \\f157;\n$fa-var-yin-yang: \\f6ad;\n$fa-var-yoast: \\f2b1;\n$fa-var-youtube: \\f167;\n$fa-var-youtube-square: \\f431;\n$fa-var-zhihu: \\f63f;\n","/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: \"Font Awesome 5 Brands\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"../webfonts/fa-brands-400.eot\");\n  src: url(\"../webfonts/fa-brands-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.woff\") format(\"woff\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\"), url(\"../webfonts/fa-brands-400.svg#fontawesome\") format(\"svg\");\n}\n.fab {\n  font-family: \"Font Awesome 5 Brands\";\n  font-weight: 400;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=brands-dec6806d6d91e4028983.js.map