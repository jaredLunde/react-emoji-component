module.exports =
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ 147);
} else {}


/***/ }),
/* 1 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 63)('wks');
var uid = __webpack_require__(/*! ./_uid */ 64);
var Symbol = __webpack_require__(/*! ./_global */ 1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 1);
var core = __webpack_require__(/*! ./_core */ 2);
var ctx = __webpack_require__(/*! ./_ctx */ 21);
var hide = __webpack_require__(/*! ./_hide */ 10);
var has = __webpack_require__(/*! ./_has */ 24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 8 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 27);
var createDesc = __webpack_require__(/*! ./_property-desc */ 46);
module.exports = __webpack_require__(/*! ./_descriptors */ 18) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 55)('wks');
var uid = __webpack_require__(/*! ./_uid */ 31);
var Symbol = __webpack_require__(/*! ./_global */ 6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 23);
var createDesc = __webpack_require__(/*! ./_property-desc */ 60);
module.exports = __webpack_require__(/*! ./_descriptors */ 13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ 161);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 34)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/*!*************************************************************************!*\
  !*** ./node_modules/react-emoji-component/node_modules/empty/object.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

if (false) {}


/***/ }),
/* 17 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 5);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 100);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 101);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 24 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 25 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 6);
var core = __webpack_require__(/*! ./_core */ 26);
var hide = __webpack_require__(/*! ./_hide */ 8);
var redefine = __webpack_require__(/*! ./_redefine */ 30);
var ctx = __webpack_require__(/*! ./_ctx */ 47);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 26 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 27 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 28);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 90);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 91);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 29 */
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 6);
var hide = __webpack_require__(/*! ./_hide */ 8);
var has = __webpack_require__(/*! ./_has */ 19);
var SRC = __webpack_require__(/*! ./_uid */ 31)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ 26).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 31 */
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 35 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 12);
var document = __webpack_require__(/*! ./_global */ 1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 36 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 107);
var defined = __webpack_require__(/*! ./_defined */ 20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 37 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 63)('keys');
var uid = __webpack_require__(/*! ./_uid */ 64);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 23).f;
var has = __webpack_require__(/*! ./_has */ 24);
var TAG = __webpack_require__(/*! ./_wks */ 3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ 22);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 40 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 41 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 49);
var defined = __webpack_require__(/*! ./_defined */ 52);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 42 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 55)('keys');
var uid = __webpack_require__(/*! ./_uid */ 31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 43 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 88);


/***/ }),
/* 44 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 45 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 17);
var document = __webpack_require__(/*! ./_global */ 6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 47 */
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 92);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 48 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ 47);
var IObject = __webpack_require__(/*! ./_iobject */ 49);
var toObject = __webpack_require__(/*! ./_to-object */ 51);
var toLength = __webpack_require__(/*! ./_to-length */ 53);
var asc = __webpack_require__(/*! ./_array-species-create */ 93);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 49 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 50);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 51 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 52);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 52 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 53 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 54);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 55 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 26);
var global = __webpack_require__(/*! ./_global */ 6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 56) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 57 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ 29);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 58 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 99)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 59)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 33);
var $export = __webpack_require__(/*! ./_export */ 4);
var redefine = __webpack_require__(/*! ./_redefine */ 102);
var hide = __webpack_require__(/*! ./_hide */ 10);
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 103);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 110);
var ITERATOR = __webpack_require__(/*! ./_wks */ 3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 60 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 61 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 5);
var dPs = __webpack_require__(/*! ./_object-dps */ 104);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 65);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 35)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 66).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 62 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 63 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 2);
var global = __webpack_require__(/*! ./_global */ 1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 33) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 64 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 65 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 66 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 112);
var global = __webpack_require__(/*! ./_global */ 1);
var hide = __webpack_require__(/*! ./_hide */ 10);
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 68 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 15);
var TAG = __webpack_require__(/*! ./_wks */ 3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 69 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 68);
var ITERATOR = __webpack_require__(/*! ./_wks */ 3)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
module.exports = __webpack_require__(/*! ./_core */ 2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 70 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ 5);
var aFunction = __webpack_require__(/*! ./_a-function */ 22);
var SPECIES = __webpack_require__(/*! ./_wks */ 3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 71 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ 21);
var invoke = __webpack_require__(/*! ./_invoke */ 120);
var html = __webpack_require__(/*! ./_html */ 66);
var cel = __webpack_require__(/*! ./_dom-create */ 35);
var global = __webpack_require__(/*! ./_global */ 1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ 15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 73 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 5);
var isObject = __webpack_require__(/*! ./_is-object */ 12);
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ 39);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 74 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 136);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 75);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 75 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 76 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 27).f;
var has = __webpack_require__(/*! ./_has */ 19);
var TAG = __webpack_require__(/*! ./_wks */ 9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 77 */
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 78 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 79 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 159)();
}


/***/ }),
/* 80 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ 96);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 81 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ 142);

/***/ }),
/* 82 */
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ 144);

/***/ }),
/* 83 */
/*!******************************************!*\
  !*** ./node_modules/react-dom/server.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./server.node */ 148);


/***/ }),
/* 84 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 85 */
/*!*******************************************************************************!*\
  !*** /Users/jaredlunde/pkg/react-emoji-component/node_modules/empty/array.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [];

if (false) {}


/***/ }),
/* 86 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ 152);

/***/ }),
/* 87 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inheritsLoose.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ 156);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 88 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 44);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 89 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 25);
var $map = __webpack_require__(/*! ./_array-methods */ 48)(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 57)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 90 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 18) && !__webpack_require__(/*! ./_fails */ 29)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 91 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 92 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 93 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 94);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 94 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 17);
var isArray = __webpack_require__(/*! ./_is-array */ 95);
var SPECIES = __webpack_require__(/*! ./_wks */ 9)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 95 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 50);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 96 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ 97);

/***/ }),
/* 97 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ 98);
__webpack_require__(/*! ../modules/es6.string.iterator */ 58);
__webpack_require__(/*! ../modules/web.dom.iterable */ 67);
__webpack_require__(/*! ../modules/es6.promise */ 115);
__webpack_require__(/*! ../modules/es7.promise.finally */ 126);
__webpack_require__(/*! ../modules/es7.promise.try */ 127);
module.exports = __webpack_require__(/*! ../modules/_core */ 2).Promise;


/***/ }),
/* 98 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 99 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 32);
var defined = __webpack_require__(/*! ./_defined */ 20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 100 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 13) && !__webpack_require__(/*! ./_fails */ 34)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 101 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 102 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 10);


/***/ }),
/* 103 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 61);
var descriptor = __webpack_require__(/*! ./_property-desc */ 60);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 10)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 104 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 23);
var anObject = __webpack_require__(/*! ./_an-object */ 5);
var getKeys = __webpack_require__(/*! ./_object-keys */ 105);

module.exports = __webpack_require__(/*! ./_descriptors */ 13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 105 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 106);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 65);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 106 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 24);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 36);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 108)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 107 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 108 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 36);
var toLength = __webpack_require__(/*! ./_to-length */ 62);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 109);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 109 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 110 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 24);
var toObject = __webpack_require__(/*! ./_to-object */ 111);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 111 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 112 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 113);
var step = __webpack_require__(/*! ./_iter-step */ 114);
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 36);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 59)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 113 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 114 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 115 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 33);
var global = __webpack_require__(/*! ./_global */ 1);
var ctx = __webpack_require__(/*! ./_ctx */ 21);
var classof = __webpack_require__(/*! ./_classof */ 68);
var $export = __webpack_require__(/*! ./_export */ 4);
var isObject = __webpack_require__(/*! ./_is-object */ 12);
var aFunction = __webpack_require__(/*! ./_a-function */ 22);
var anInstance = __webpack_require__(/*! ./_an-instance */ 116);
var forOf = __webpack_require__(/*! ./_for-of */ 117);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 70);
var task = __webpack_require__(/*! ./_task */ 71).set;
var microtask = __webpack_require__(/*! ./_microtask */ 121)();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ 39);
var perform = __webpack_require__(/*! ./_perform */ 72);
var userAgent = __webpack_require__(/*! ./_user-agent */ 122);
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ 73);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 123)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ 38)($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ 124)(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ 2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 125)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 116 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 117 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ 21);
var call = __webpack_require__(/*! ./_iter-call */ 118);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 119);
var anObject = __webpack_require__(/*! ./_an-object */ 5);
var toLength = __webpack_require__(/*! ./_to-length */ 62);
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 69);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 118 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ 5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 119 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
var ITERATOR = __webpack_require__(/*! ./_wks */ 3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 120 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 1);
var macrotask = __webpack_require__(/*! ./_task */ 71).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ 15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 123 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ 10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 124 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ 1);
var core = __webpack_require__(/*! ./_core */ 2);
var dP = __webpack_require__(/*! ./_object-dp */ 23);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13);
var SPECIES = __webpack_require__(/*! ./_wks */ 3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 125 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ 3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 126 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ 4);
var core = __webpack_require__(/*! ./_core */ 2);
var global = __webpack_require__(/*! ./_global */ 1);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 70);
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ 73);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 127 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ 4);
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ 39);
var perform = __webpack_require__(/*! ./_perform */ 72);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 128 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ 129);
var getKeys = __webpack_require__(/*! ./_object-keys */ 74);
var redefine = __webpack_require__(/*! ./_redefine */ 30);
var global = __webpack_require__(/*! ./_global */ 6);
var hide = __webpack_require__(/*! ./_hide */ 8);
var Iterators = __webpack_require__(/*! ./_iterators */ 40);
var wks = __webpack_require__(/*! ./_wks */ 9);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 129 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 130);
var step = __webpack_require__(/*! ./_iter-step */ 131);
var Iterators = __webpack_require__(/*! ./_iterators */ 40);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 41);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 132)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 130 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ 9)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ 8)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 131 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 132 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 56);
var $export = __webpack_require__(/*! ./_export */ 25);
var redefine = __webpack_require__(/*! ./_redefine */ 30);
var hide = __webpack_require__(/*! ./_hide */ 8);
var Iterators = __webpack_require__(/*! ./_iterators */ 40);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 133);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 76);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 140);
var ITERATOR = __webpack_require__(/*! ./_wks */ 9)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 133 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 134);
var descriptor = __webpack_require__(/*! ./_property-desc */ 46);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 76);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 8)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 134 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 28);
var dPs = __webpack_require__(/*! ./_object-dps */ 135);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 75);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 42)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 139).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 135 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 27);
var anObject = __webpack_require__(/*! ./_an-object */ 28);
var getKeys = __webpack_require__(/*! ./_object-keys */ 74);

module.exports = __webpack_require__(/*! ./_descriptors */ 18) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 136 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 19);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 41);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 137)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 42)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 137 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 41);
var toLength = __webpack_require__(/*! ./_to-length */ 53);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 138);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 138 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 54);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 139 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 140 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 19);
var toObject = __webpack_require__(/*! ./_to-object */ 51);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 42)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 141 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 25);
var $forEach = __webpack_require__(/*! ./_array-methods */ 48)(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ 57)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 142 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 67);
__webpack_require__(/*! ../modules/es6.string.iterator */ 58);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 143);


/***/ }),
/* 143 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 5);
var get = __webpack_require__(/*! ./core.get-iterator-method */ 69);
module.exports = __webpack_require__(/*! ./_core */ 2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 144 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ 145);
module.exports = __webpack_require__(/*! ../../modules/_core */ 2).Array.isArray;


/***/ }),
/* 145 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ 4);

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ 146) });


/***/ }),
/* 146 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 15);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 147 */
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(/*! object-assign */ 77),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 148 */
/*!***********************************************!*\
  !*** ./node_modules/react-dom/server.node.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.production.min.js */ 149);
} else {}


/***/ }),
/* 149 */
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.node.production.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var p=__webpack_require__(/*! object-assign */ 77),q=__webpack_require__(/*! react */ 0),aa=__webpack_require__(/*! stream */ 150);function ba(a,b,d,c,g,f,k,l){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var D=[d,c,g,f,k,l],z=0;a=Error(b.replace(/%s/g,function(){return D[z++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}
var x="function"===typeof Symbol&&Symbol.for,y=x?Symbol.for("react.portal"):60106,A=x?Symbol.for("react.fragment"):60107,B=x?Symbol.for("react.strict_mode"):60108,C=x?Symbol.for("react.profiler"):60114,E=x?Symbol.for("react.provider"):60109,F=x?Symbol.for("react.context"):60110,G=x?Symbol.for("react.async_mode"):60111,H=x?Symbol.for("react.forward_ref"):60112,ca=x?Symbol.for("react.placeholder"):60113;
function I(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case G:return"AsyncMode";case A:return"Fragment";case y:return"Portal";case C:return"Profiler";case B:return"StrictMode";case ca:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case F:return"Context.Consumer";case E:return"Context.Provider";case H:return a=a.render,a=a.displayName||a.name||"",""!==a?"ForwardRef("+a+")":"ForwardRef"}if("function"===
typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return I(a)}return null}var da=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J=Object.prototype.hasOwnProperty,K={},L={};
function M(a){if(J.call(L,a))return!0;if(J.call(K,a))return!1;if(da.test(a))return L[a]=!0;K[a]=!0;return!1}function ea(a,b,d,c){if(null!==d&&0===d.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(c)return!1;if(null!==d)return!d.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function fa(a,b,d,c){if(null===b||"undefined"===typeof b||ea(a,b,d,c))return!0;if(c)return!1;if(null!==d)switch(d.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function N(a,b,d,c,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=c;this.attributeNamespace=g;this.mustUseProperty=d;this.propertyName=a;this.type=b}var O={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){O[a]=new N(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];O[b]=new N(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){O[a]=new N(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){O[a]=new N(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){O[a]=new N(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){O[a]=new N(a,3,!0,a,null)});
["capture","download"].forEach(function(a){O[a]=new N(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){O[a]=new N(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){O[a]=new N(a,5,!1,a.toLowerCase(),null)});var P=/[\-:]([a-z])/g;function Q(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(P,
Q);O[b]=new N(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(P,Q);O[b]=new N(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(P,Q);O[b]=new N(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});O.tabIndex=new N("tabIndex",1,!1,"tabindex",null);var ha=/["'&<>]/;
function R(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ha.exec(a);if(b){var d="",c,g=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}g!==c&&(d+=a.substring(g,c));g=c+1;d+=b}a=g!==c?d+a.substring(g,c):d}return a}var S={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function T(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var U={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ia=p({menuitem:!0},U),V={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ja=["Webkit","ms","Moz","O"];Object.keys(V).forEach(function(a){ja.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);V[b]=V[a]})});
var ka=/([A-Z])/g,la=/^ms-/,W=q.Children.toArray,ma={listing:!0,pre:!0,textarea:!0},na=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,X={},Y={};function oa(a){if(void 0===a||null===a)return a;var b="";q.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var pa={};function qa(a,b){if(a=a.contextTypes){var d={},c;for(c in a)d[c]=b[c];b=d}else b=pa;return b}var ra=Object.prototype.hasOwnProperty,sa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};
function ta(a,b){void 0===a&&t("152",I(b)||"Component")}
function ua(a,b){function d(c,g){var d=qa(g,b),f=[],k=!1,h={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===f)return null},enqueueReplaceState:function(a,b){k=!0;f=[b]},enqueueSetState:function(a,b){if(null===f)return null;f.push(b)}},e=void 0;if(g.prototype&&g.prototype.isReactComponent){if(e=new g(c.props,d,h),"function"===typeof g.getDerivedStateFromProps){var v=g.getDerivedStateFromProps.call(null,c.props,e.state);null!=v&&(e.state=p({},e.state,v))}}else if(e=g(c.props,
d,h),null==e||null==e.render){a=e;ta(a,g);return}e.props=c.props;e.context=d;e.updater=h;h=e.state;void 0===h&&(e.state=h=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),f.length){h=f;var r=k;f=null;k=!1;if(r&&
1===h.length)e.state=h[0];else{v=r?h[0]:e.state;var m=!0;for(r=r?1:0;r<h.length;r++){var n=h[r];n="function"===typeof n?n.call(e,v,c.props,d):n;null!=n&&(m?(m=!1,v=p({},v,n)):p(v,n))}e.state=v}}else f=null;a=e.render();ta(a,g);c=void 0;if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){c=e.getChildContext();for(var w in c)w in d?void 0:t("108",I(g)||"Unknown",w)}c&&(b=p({},b,c))}for(;q.isValidElement(a);){var c=a,g=c.type;if("function"!==typeof g)break;d(c,g)}return{child:a,
context:b}}
var Z=function(){function a(b,d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");q.isValidElement(b)?b.type!==A?b=[b]:(b=b.props.children,b=q.isValidElement(b)?[b]:W(b)):b=W(b);this.stack=[{type:null,domNamespace:S.html,children:b,childIndex:0,context:pa,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=d;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}a.prototype.pushProvider=function(a){var b=
++this.contextIndex,c=a.type._context,g=c._currentValue;this.contextStack[b]=c;this.contextValueStack[b]=g;c._currentValue=a.props.value};a.prototype.popProvider=function(){var a=this.contextIndex,d=this.contextStack[a],c=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;d._currentValue=c};a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var c=this.stack[this.stack.length-
1];if(c.childIndex>=c.children.length){var g=c.footer;b+=g;""!==g&&(this.previousWasTextNode=!1);this.stack.pop();"select"===c.type?this.currentSelectValue=null:null!=c.type&&null!=c.type.type&&c.type.type.$$typeof===E&&this.popProvider(c.type)}else g=c.children[c.childIndex++],b+=this.render(g,c.context,c.domNamespace)}return b};a.prototype.render=function(a,d,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return R(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+
R(c);this.previousWasTextNode=!0;return R(c)}d=ua(a,d);a=d.child;d=d.context;if(null===a||!1===a)return"";if(!q.isValidElement(a)){if(null!=a&&null!=a.$$typeof){var b=a.$$typeof;b===y?t("257"):void 0;t("258",b.toString())}a=W(a);this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""});return""}b=a.type;if("string"===typeof b)return this.renderDOM(a,d,c);switch(b){case B:case G:case C:case A:return a=W(a.props.children),this.stack.push({type:null,domNamespace:c,children:a,
childIndex:0,context:d,footer:""}),""}if("object"===typeof b&&null!==b)switch(b.$$typeof){case H:return a=W(b.render(a.props,a.ref)),this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case E:return b=W(a.props.children),c={type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""},this.pushProvider(a),this.stack.push(c),"";case F:return b=W(a.props.children(a.type._currentValue)),this.stack.push({type:a,domNamespace:c,children:b,childIndex:0,context:d,
footer:""}),""}t("130",null==b?b:typeof b,"")};a.prototype.renderDOM=function(a,d,c){var b=a.type.toLowerCase();c===S.html&&T(b);X.hasOwnProperty(b)||(na.test(b)?void 0:t("65",b),X[b]=!0);var f=a.props;if("input"===b)f=p({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===b){var k=f.value;if(null==k){k=f.defaultValue;var l=f.children;null!=l&&(null!=k?t("92"):void 0,Array.isArray(l)&&
(1>=l.length?void 0:t("93"),l=l[0]),k=""+l);null==k&&(k="")}f=p({},f,{value:void 0,children:""+k})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=p({},f,{value:void 0});else if("option"===b){l=this.currentSelectValue;var D=oa(f.children);if(null!=l){var z=null!=f.value?f.value+"":D;k=!1;if(Array.isArray(l))for(var h=0;h<l.length;h++){if(""+l[h]===z){k=!0;break}}else k=""+l===z;f=p({selected:void 0,children:void 0},f,{selected:k,children:D})}}if(k=f)ia[b]&&(null!=
k.children||null!=k.dangerouslySetInnerHTML?t("137",b,""):void 0),null!=k.dangerouslySetInnerHTML&&(null!=k.children?t("60"):void 0,"object"===typeof k.dangerouslySetInnerHTML&&"__html"in k.dangerouslySetInnerHTML?void 0:t("61")),null!=k.style&&"object"!==typeof k.style?t("62",""):void 0;k=f;l=this.makeStaticMarkup;D=1===this.stack.length;z="<"+a.type;for(u in k)if(ra.call(k,u)){var e=k[u];if(null!=e){if("style"===u){h=void 0;var v="",r="";for(h in e)if(e.hasOwnProperty(h)){var m=0===h.indexOf("--"),
n=e[h];if(null!=n){var w=h;if(Y.hasOwnProperty(w))w=Y[w];else{var za=w.replace(ka,"-$1").toLowerCase().replace(la,"-ms-");w=Y[w]=za}v+=r+w+":";r=h;m=null==n||"boolean"===typeof n||""===n?"":m||"number"!==typeof n||0===n||V.hasOwnProperty(r)&&V[r]?(""+n).trim():n+"px";v+=m;r=";"}}e=v||null}h=null;b:if(m=b,n=k,-1===m.indexOf("-"))m="string"===typeof n.is;else switch(m){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":m=
!1;break b;default:m=!0}if(m)sa.hasOwnProperty(u)||(h=u,h=M(h)&&null!=e?h+"="+('"'+R(e)+'"'):"");else{m=u;h=e;e=O.hasOwnProperty(m)?O[m]:null;if(n="style"!==m)n=null!==e?0===e.type:!(2<m.length)||"o"!==m[0]&&"O"!==m[0]||"n"!==m[1]&&"N"!==m[1]?!1:!0;n||fa(m,h,e,!1)?h="":null!==e?(m=e.attributeName,e=e.type,h=3===e||4===e&&!0===h?m+'=""':m+"="+('"'+R(h)+'"')):h=M(m)?m+"="+('"'+R(h)+'"'):""}h&&(z+=" "+h)}}l||D&&(z+=' data-reactroot=""');var u=z;k="";U.hasOwnProperty(b)?u+="/>":(u+=">",k="</"+a.type+
">");a:{l=f.dangerouslySetInnerHTML;if(null!=l){if(null!=l.__html){l=l.__html;break a}}else if(l=f.children,"string"===typeof l||"number"===typeof l){l=R(l);break a}l=null}null!=l?(f=[],ma[b]&&"\n"===l.charAt(0)&&(u+="\n"),u+=l):f=W(f.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?T(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":c;this.stack.push({domNamespace:c,type:b,children:f,childIndex:0,context:d,footer:k});this.previousWasTextNode=
!1;return u};return a}();function va(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var wa=function(a){function b(d,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var g=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");g=!g||"object"!==typeof g&&"function"!==typeof g?this:g;g.partialRenderer=new Z(d,c);return g}va(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(aa.Readable),xa={renderToString:function(a){return(new Z(a,
!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Z(a,!0)).read(Infinity)},renderToNodeStream:function(a){return new wa(a,!1)},renderToStaticNodeStream:function(a){return new wa(a,!0)},version:"16.5.0"},ya={default:xa},Aa=ya&&xa||ya;module.exports=Aa.default||Aa;


/***/ }),
/* 150 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 151 */
/*!********************************************************************************!*\
  !*** /Users/jaredlunde/pkg/react-emoji-component/node_modules/empty/object.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

if (false) {}


/***/ }),
/* 152 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ 153);
module.exports = __webpack_require__(/*! ../modules/_core */ 2).parseInt;


/***/ }),
/* 153 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 4);
var $parseInt = __webpack_require__(/*! ./_parse-int */ 154);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 154 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ 1).parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ 155).trim;
var ws = __webpack_require__(/*! ./_string-ws */ 78);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 155 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 4);
var defined = __webpack_require__(/*! ./_defined */ 20);
var fails = __webpack_require__(/*! ./_fails */ 34);
var spaces = __webpack_require__(/*! ./_string-ws */ 78);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 156 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ 157);

/***/ }),
/* 157 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 158);
var $Object = __webpack_require__(/*! ../../modules/_core */ 2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 158 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 61) });


/***/ }),
/* 159 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 160);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 160 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 161 */
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 162 */
/*!*******************************************!*\
  !*** ./src/server/render.js + 14 modules ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/helpers/inheritsLoose.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime-corejs2/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/server.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-emoji-component/node_modules/empty/object.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with /Users/jaredlunde/pkg/react-emoji-component/node_modules/empty/array.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "express" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__(43);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(80);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__(81);
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__(82);
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/server.js
var server = __webpack_require__(83);
var server_default = /*#__PURE__*/__webpack_require__.n(server);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(84);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: /Users/jaredlunde/pkg/react-emoji-component/node_modules/empty/array.js
var array = __webpack_require__(85);
var array_default = /*#__PURE__*/__webpack_require__.n(array);

// EXTERNAL MODULE: /Users/jaredlunde/pkg/react-emoji-component/node_modules/empty/object.js
var object = __webpack_require__(151);

// CONCATENATED MODULE: ./webpack/createRenderer.js














function getEntryFiles(stats) {
  var files = [];

  for (var _iterator = stats.chunks, _isArray = is_array_default()(_iterator), _i = 0, _iterator = _isArray ? _iterator : get_iterator_default()(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var chunk = _ref;

    if (chunk.entry) {
      files = chunk.files.concat(files);
    } else {
      files = files.concat(chunk.files);
    }
  }

  return files;
}

function createRenderer(_ref2) {
  var _ref2$middleware = _ref2.middleware,
      middleware = _ref2$middleware === void 0 ? array_default.a : _ref2$middleware,
      clientStats = _ref2.clientStats,
      App = _ref2.App;
  var app = external_express_default()();
  middleware.forEach(function (mw) {
    return app.use(mw);
  });

  function _ref4(s, i) {
    return "<script\n              type='text/javascript'\n              src='" + clientStats.publicPath + s + "'\n              " + (i === 0 ? 'async' : 'defer') + "\n            ></script>";
  }

  function _callee2(req, res, next) {
    var app, page, scripts;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = react_default.a.createElement(App, {
              location: req.url
            });
            page = server_default.a.renderToString(app);
            scripts = getEntryFiles(clientStats);
            res.set('Content-Type', 'text/html');
            res.send("\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <title>Hello world app</title>\n          <meta charset=\"utf-8\">\n          <meta\n            name=\"viewport\"\n            content=\"width=device-width, user-scalable=yes, initial-scale=1.0\"\n          >\n          " + scripts.map(_ref4).join('') + "\n        </head>\n        <body>\n          <div id=\"\u269B\uFE0F\">" + page + "</div>\n        </body>\n        </html>\n      ");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee2, this);
  }

  app.get('*', function () {
    var _ref3 = asyncToGenerator_default()(regenerator_default.a.mark(_callee2));

    return function (_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  return app;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__(86);
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(87);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/react-emoji-component/node_modules/empty/object.js
var empty_object = __webpack_require__(16);
var empty_object_default = /*#__PURE__*/__webpack_require__.n(empty_object);

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/walk.js



const walk = (component, visitor, props) => {
  return react_default.a.Children.map(component, child => react_default.a.isValidElement(child) ? react_default.a.cloneElement(child, empty_object_default.a, walk(child.props.children, visitor, props)) : typeof child === 'string' ? visitor(child, props) : child);
};

/* harmony default export */ var es_walk = (walk);
// EXTERNAL MODULE: ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(11);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/emojiToCodePoints.js
const cache = {};
/* harmony default export */ var emojiToCodePoints = (uc => {
  if (cache[uc] === void 0) {
    const chars = Array.from(uc);
    const codePoints = [];

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const codePoint = char.codePointAt(0); // ignores empty joiners (0x200D) and variation selectors (0xFE0F)

      if (codePoint !== 0x200D && codePoint !== 0xFE0F) {
        codePoints.push(codePoint.toString(16).padStart(4, '0'));
      }
    }

    cache[uc] = codePoints.join('-');
  }

  return cache[uc];
});
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/isChrome.js
/* harmony default export */ var isChrome = (typeof navigator === 'undefined' || /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toImage.js
/* harmony default export */ var toImage = ((codePoint, {
  size = 16,
  hiDpi = false,
  publicPath = 'https://cdn.jsdelivr.net/emojione/assets/4.5/png/',
  extension = '.png'
}) => {
  size = parseInt(size);
  size = hiDpi ? size * 2 : size;
  size = size < 32 ? 32 : size <= 64 ? 64 : 128;
  return "" + publicPath + size + "/" + codePoint + extension;
});
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/Emoji.js






const defaultImgStyle = {
  contain: 'strict',
  verticalAlign: 'middle',
  imageRendering: isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges'
};
function Emoji(_ref) {
  let {
    emoji,
    codePoint,
    style,
    options
  } = _ref,
      props = objectWithoutProperties_default()(_ref, ["emoji", "codePoint", "style", "options"]);

  props.width = options.size;
  props.height = options.size;
  props.style = style === void 0 ? defaultImgStyle : extends_default()({}, defaultImgStyle, style);
  props.src = toImage(codePoint, options);
  props.alt = emoji;
  return react_default.a.createElement('img', props);
}

if (false) {}
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/data.js
// automatically generated, do not change manually
//
// {
//    codePoint: [
//      0: categoryID // categories[emojis[unicode][1]],
//      1: spriteColumnNumber,
//      2: spriteRowNumber,
//    ]
// }
const emojis = {
  '0023': [0, 2],
  '0023-20e3': [0, 1],
  '002a': [0, 4],
  '002a-20e3': [0, 3],
  '0030': [0, 6],
  '0030-20e3': [0, 5],
  '0031': [0, 8],
  '0031-20e3': [0, 7],
  '0032': [0, 10],
  '0032-20e3': [0, 9],
  '0033': [0, 12],
  '0033-20e3': [0, 11],
  '0034': [0, 14],
  '0034-20e3': [0, 13],
  '0035': [0, 16],
  '0035-20e3': [0, 15],
  '0036': [0, 18],
  '0036-20e3': [0, 17],
  '0037': [0, 20],
  '0037-20e3': [0, 19],
  '0038': [0, 22],
  '0038-20e3': [0, 21],
  '0039': [0, 24],
  '0039-20e3': [0, 23],
  '00a9': [0, 25],
  '00ae': [0, 26],
  '1f004': [0, 27],
  '1f0cf': [0, 28],
  '1f170': [0, 29],
  '1f171': [0, 30],
  '1f17e': [0, 31],
  '1f17f': [0, 32],
  '1f18e': [0, 33],
  '1f191': [0, 34],
  '1f192': [0, 35],
  '1f193': [0, 36],
  '1f194': [0, 37],
  '1f195': [0, 38],
  '1f196': [0, 39],
  '1f197': [0, 40],
  '1f198': [0, 41],
  '1f199': [0, 42],
  '1f19a': [0, 43],
  '1f1e6': [1, 0],
  '1f1e6-1f1e8': [2, 1],
  '1f1e6-1f1e9': [2, 2],
  '1f1e6-1f1ea': [2, 3],
  '1f1e6-1f1eb': [2, 4],
  '1f1e6-1f1ec': [2, 5],
  '1f1e6-1f1ee': [2, 6],
  '1f1e6-1f1f1': [2, 7],
  '1f1e6-1f1f2': [2, 8],
  '1f1e6-1f1f4': [2, 9],
  '1f1e6-1f1f6': [2, 10],
  '1f1e6-1f1f7': [2, 11],
  '1f1e6-1f1f8': [2, 12],
  '1f1e6-1f1f9': [2, 13],
  '1f1e6-1f1fa': [2, 14],
  '1f1e6-1f1fc': [2, 15],
  '1f1e6-1f1fd': [2, 16],
  '1f1e6-1f1ff': [2, 17],
  '1f1e7': [1, 1],
  '1f1e7-1f1e6': [2, 18],
  '1f1e7-1f1e7': [2, 19],
  '1f1e7-1f1e9': [2, 20],
  '1f1e7-1f1ea': [2, 21],
  '1f1e7-1f1eb': [2, 22],
  '1f1e7-1f1ec': [2, 23],
  '1f1e7-1f1ed': [2, 24],
  '1f1e7-1f1ee': [2, 25],
  '1f1e7-1f1ef': [2, 26],
  '1f1e7-1f1f1': [2, 27],
  '1f1e7-1f1f2': [2, 28],
  '1f1e7-1f1f3': [2, 29],
  '1f1e7-1f1f4': [2, 30],
  '1f1e7-1f1f6': [2, 31],
  '1f1e7-1f1f7': [2, 32],
  '1f1e7-1f1f8': [2, 33],
  '1f1e7-1f1f9': [2, 34],
  '1f1e7-1f1fb': [2, 35],
  '1f1e7-1f1fc': [2, 36],
  '1f1e7-1f1fe': [2, 37],
  '1f1e7-1f1ff': [2, 38],
  '1f1e8': [1, 2],
  '1f1e8-1f1e6': [2, 39],
  '1f1e8-1f1e8': [2, 40],
  '1f1e8-1f1e9': [2, 41],
  '1f1e8-1f1eb': [2, 42],
  '1f1e8-1f1ec': [2, 43],
  '1f1e8-1f1ed': [2, 44],
  '1f1e8-1f1ee': [2, 45],
  '1f1e8-1f1f0': [2, 46],
  '1f1e8-1f1f1': [2, 47],
  '1f1e8-1f1f2': [2, 48],
  '1f1e8-1f1f3': [2, 49],
  '1f1e8-1f1f4': [2, 50],
  '1f1e8-1f1f5': [2, 51],
  '1f1e8-1f1f7': [2, 52],
  '1f1e8-1f1fa': [2, 53],
  '1f1e8-1f1fb': [2, 54],
  '1f1e8-1f1fc': [2, 55],
  '1f1e8-1f1fd': [2, 56],
  '1f1e8-1f1fe': [2, 57],
  '1f1e8-1f1ff': [2, 58],
  '1f1e9': [1, 3],
  '1f1e9-1f1ea': [2, 59],
  '1f1e9-1f1ec': [2, 60],
  '1f1e9-1f1ef': [2, 61],
  '1f1e9-1f1f0': [2, 62],
  '1f1e9-1f1f2': [2, 63],
  '1f1e9-1f1f4': [2, 64],
  '1f1e9-1f1ff': [2, 65],
  '1f1ea': [1, 4],
  '1f1ea-1f1e6': [2, 66],
  '1f1ea-1f1e8': [2, 67],
  '1f1ea-1f1ea': [2, 68],
  '1f1ea-1f1ec': [2, 69],
  '1f1ea-1f1ed': [2, 70],
  '1f1ea-1f1f7': [2, 71],
  '1f1ea-1f1f8': [2, 72],
  '1f1ea-1f1f9': [2, 73],
  '1f1ea-1f1fa': [2, 74],
  '1f1eb': [1, 5],
  '1f1eb-1f1ee': [2, 75],
  '1f1eb-1f1ef': [2, 76],
  '1f1eb-1f1f0': [2, 77],
  '1f1eb-1f1f2': [2, 78],
  '1f1eb-1f1f4': [2, 79],
  '1f1eb-1f1f7': [2, 80],
  '1f1ec': [1, 6],
  '1f1ec-1f1e6': [2, 81],
  '1f1ec-1f1e7': [2, 82],
  '1f1ec-1f1e9': [2, 83],
  '1f1ec-1f1ea': [2, 84],
  '1f1ec-1f1eb': [2, 85],
  '1f1ec-1f1ec': [2, 86],
  '1f1ec-1f1ed': [2, 87],
  '1f1ec-1f1ee': [2, 88],
  '1f1ec-1f1f1': [2, 89],
  '1f1ec-1f1f2': [2, 90],
  '1f1ec-1f1f3': [2, 91],
  '1f1ec-1f1f5': [2, 92],
  '1f1ec-1f1f6': [2, 93],
  '1f1ec-1f1f7': [2, 94],
  '1f1ec-1f1f8': [2, 95],
  '1f1ec-1f1f9': [2, 96],
  '1f1ec-1f1fa': [2, 97],
  '1f1ec-1f1fc': [2, 98],
  '1f1ec-1f1fe': [2, 99],
  '1f1ed': [1, 7],
  '1f1ed-1f1f0': [2, 100],
  '1f1ed-1f1f2': [2, 101],
  '1f1ed-1f1f3': [2, 102],
  '1f1ed-1f1f7': [2, 103],
  '1f1ed-1f1f9': [2, 104],
  '1f1ed-1f1fa': [2, 105],
  '1f1ee': [1, 8],
  '1f1ee-1f1e8': [2, 106],
  '1f1ee-1f1e9': [2, 107],
  '1f1ee-1f1ea': [2, 108],
  '1f1ee-1f1f1': [2, 109],
  '1f1ee-1f1f2': [2, 110],
  '1f1ee-1f1f3': [2, 111],
  '1f1ee-1f1f4': [2, 112],
  '1f1ee-1f1f6': [2, 113],
  '1f1ee-1f1f7': [2, 114],
  '1f1ee-1f1f8': [2, 115],
  '1f1ee-1f1f9': [2, 116],
  '1f1ef': [1, 9],
  '1f1ef-1f1ea': [2, 117],
  '1f1ef-1f1f2': [2, 118],
  '1f1ef-1f1f4': [2, 119],
  '1f1ef-1f1f5': [2, 120],
  '1f1f0': [1, 10],
  '1f1f0-1f1ea': [2, 121],
  '1f1f0-1f1ec': [2, 122],
  '1f1f0-1f1ed': [2, 123],
  '1f1f0-1f1ee': [2, 124],
  '1f1f0-1f1f2': [2, 125],
  '1f1f0-1f1f3': [2, 126],
  '1f1f0-1f1f5': [2, 127],
  '1f1f0-1f1f7': [2, 128],
  '1f1f0-1f1fc': [2, 129],
  '1f1f0-1f1fe': [2, 130],
  '1f1f0-1f1ff': [2, 131],
  '1f1f1': [1, 11],
  '1f1f1-1f1e6': [2, 132],
  '1f1f1-1f1e7': [2, 133],
  '1f1f1-1f1e8': [2, 134],
  '1f1f1-1f1ee': [2, 135],
  '1f1f1-1f1f0': [2, 136],
  '1f1f1-1f1f7': [2, 137],
  '1f1f1-1f1f8': [2, 138],
  '1f1f1-1f1f9': [2, 139],
  '1f1f1-1f1fa': [2, 140],
  '1f1f1-1f1fb': [2, 141],
  '1f1f1-1f1fe': [2, 142],
  '1f1f2': [1, 12],
  '1f1f2-1f1e6': [2, 143],
  '1f1f2-1f1e8': [2, 144],
  '1f1f2-1f1e9': [2, 145],
  '1f1f2-1f1ea': [2, 146],
  '1f1f2-1f1eb': [2, 147],
  '1f1f2-1f1ec': [2, 148],
  '1f1f2-1f1ed': [2, 149],
  '1f1f2-1f1f0': [2, 150],
  '1f1f2-1f1f1': [2, 151],
  '1f1f2-1f1f2': [2, 152],
  '1f1f2-1f1f3': [2, 153],
  '1f1f2-1f1f4': [2, 154],
  '1f1f2-1f1f5': [2, 155],
  '1f1f2-1f1f6': [2, 156],
  '1f1f2-1f1f7': [2, 157],
  '1f1f2-1f1f8': [2, 158],
  '1f1f2-1f1f9': [2, 159],
  '1f1f2-1f1fa': [2, 160],
  '1f1f2-1f1fb': [2, 161],
  '1f1f2-1f1fc': [2, 162],
  '1f1f2-1f1fd': [2, 163],
  '1f1f2-1f1fe': [2, 164],
  '1f1f2-1f1ff': [2, 165],
  '1f1f3': [1, 13],
  '1f1f3-1f1e6': [2, 166],
  '1f1f3-1f1e8': [2, 167],
  '1f1f3-1f1ea': [2, 168],
  '1f1f3-1f1eb': [2, 169],
  '1f1f3-1f1ec': [2, 170],
  '1f1f3-1f1ee': [2, 171],
  '1f1f3-1f1f1': [2, 172],
  '1f1f3-1f1f4': [2, 173],
  '1f1f3-1f1f5': [2, 174],
  '1f1f3-1f1f7': [2, 175],
  '1f1f3-1f1fa': [2, 176],
  '1f1f3-1f1ff': [2, 177],
  '1f1f4': [1, 14],
  '1f1f4-1f1f2': [2, 178],
  '1f1f5': [1, 15],
  '1f1f5-1f1e6': [2, 179],
  '1f1f5-1f1ea': [2, 180],
  '1f1f5-1f1eb': [2, 181],
  '1f1f5-1f1ec': [2, 182],
  '1f1f5-1f1ed': [2, 183],
  '1f1f5-1f1f0': [2, 184],
  '1f1f5-1f1f1': [2, 185],
  '1f1f5-1f1f2': [2, 186],
  '1f1f5-1f1f3': [2, 187],
  '1f1f5-1f1f7': [2, 188],
  '1f1f5-1f1f8': [2, 189],
  '1f1f5-1f1f9': [2, 190],
  '1f1f5-1f1fc': [2, 191],
  '1f1f5-1f1fe': [2, 192],
  '1f1f6': [1, 16],
  '1f1f6-1f1e6': [2, 193],
  '1f1f7': [1, 17],
  '1f1f7-1f1ea': [2, 194],
  '1f1f7-1f1f4': [2, 195],
  '1f1f7-1f1f8': [2, 196],
  '1f1f7-1f1fa': [2, 197],
  '1f1f7-1f1fc': [2, 198],
  '1f1f8': [1, 18],
  '1f1f8-1f1e6': [2, 199],
  '1f1f8-1f1e7': [2, 200],
  '1f1f8-1f1e8': [2, 201],
  '1f1f8-1f1e9': [2, 202],
  '1f1f8-1f1ea': [2, 203],
  '1f1f8-1f1ec': [2, 204],
  '1f1f8-1f1ed': [2, 205],
  '1f1f8-1f1ee': [2, 206],
  '1f1f8-1f1ef': [2, 207],
  '1f1f8-1f1f0': [2, 208],
  '1f1f8-1f1f1': [2, 209],
  '1f1f8-1f1f2': [2, 210],
  '1f1f8-1f1f3': [2, 211],
  '1f1f8-1f1f4': [2, 212],
  '1f1f8-1f1f7': [2, 213],
  '1f1f8-1f1f8': [2, 214],
  '1f1f8-1f1f9': [2, 215],
  '1f1f8-1f1fb': [2, 216],
  '1f1f8-1f1fd': [2, 217],
  '1f1f8-1f1fe': [2, 218],
  '1f1f8-1f1ff': [2, 219],
  '1f1f9': [1, 19],
  '1f1f9-1f1e6': [2, 220],
  '1f1f9-1f1e8': [2, 221],
  '1f1f9-1f1e9': [2, 222],
  '1f1f9-1f1eb': [2, 223],
  '1f1f9-1f1ec': [2, 224],
  '1f1f9-1f1ed': [2, 225],
  '1f1f9-1f1ef': [2, 226],
  '1f1f9-1f1f0': [2, 227],
  '1f1f9-1f1f1': [2, 228],
  '1f1f9-1f1f2': [2, 229],
  '1f1f9-1f1f3': [2, 230],
  '1f1f9-1f1f4': [2, 231],
  '1f1f9-1f1f7': [2, 232],
  '1f1f9-1f1f9': [2, 233],
  '1f1f9-1f1fb': [2, 234],
  '1f1f9-1f1fc': [2, 235],
  '1f1f9-1f1ff': [2, 236],
  '1f1fa': [1, 20],
  '1f1fa-1f1e6': [2, 237],
  '1f1fa-1f1ec': [2, 238],
  '1f1fa-1f1f2': [2, 239],
  '1f1fa-1f1f3': [2, 240],
  '1f1fa-1f1f8': [2, 241],
  '1f1fa-1f1fe': [2, 242],
  '1f1fa-1f1ff': [2, 243],
  '1f1fb': [1, 21],
  '1f1fb-1f1e6': [2, 244],
  '1f1fb-1f1e8': [2, 245],
  '1f1fb-1f1ea': [2, 246],
  '1f1fb-1f1ec': [2, 247],
  '1f1fb-1f1ee': [2, 248],
  '1f1fb-1f1f3': [2, 249],
  '1f1fb-1f1fa': [2, 250],
  '1f1fc': [1, 22],
  '1f1fc-1f1eb': [2, 251],
  '1f1fc-1f1f8': [2, 252],
  '1f1fd': [1, 23],
  '1f1fd-1f1f0': [2, 253],
  '1f1fe': [1, 24],
  '1f1fe-1f1ea': [2, 254],
  '1f1fe-1f1f9': [2, 255],
  '1f1ff': [1, 25],
  '1f1ff-1f1e6': [2, 256],
  '1f1ff-1f1f2': [2, 257],
  '1f1ff-1f1fc': [2, 258],
  '1f201': [0, 44],
  '1f202': [0, 45],
  '1f21a': [0, 46],
  '1f22f': [0, 47],
  '1f232': [0, 48],
  '1f233': [0, 49],
  '1f234': [0, 50],
  '1f235': [0, 51],
  '1f236': [0, 52],
  '1f237': [0, 53],
  '1f238': [0, 54],
  '1f239': [0, 55],
  '1f23a': [0, 56],
  '1f250': [0, 57],
  '1f251': [0, 58],
  '1f300': [0, 59],
  '1f301': [3, 1],
  '1f302': [4, 1],
  '1f303': [3, 2],
  '1f304': [3, 3],
  '1f305': [3, 4],
  '1f306': [3, 5],
  '1f307': [3, 6],
  '1f308': [5, 1],
  '1f309': [3, 7],
  '1f30a': [5, 2],
  '1f30b': [3, 8],
  '1f30c': [3, 9],
  '1f30d': [5, 3],
  '1f30e': [5, 4],
  '1f30f': [5, 5],
  '1f310': [0, 60],
  '1f311': [5, 6],
  '1f312': [5, 7],
  '1f313': [5, 8],
  '1f314': [5, 9],
  '1f315': [5, 10],
  '1f316': [5, 11],
  '1f317': [5, 12],
  '1f318': [5, 13],
  '1f319': [5, 14],
  '1f31a': [5, 15],
  '1f31b': [5, 16],
  '1f31c': [5, 17],
  '1f31d': [5, 18],
  '1f31e': [5, 19],
  '1f31f': [5, 20],
  '1f320': [3, 10],
  '1f321': [6, 1],
  '1f324': [5, 21],
  '1f325': [5, 22],
  '1f326': [5, 23],
  '1f327': [5, 24],
  '1f328': [5, 25],
  '1f329': [5, 26],
  '1f32a': [5, 27],
  '1f32b': [5, 28],
  '1f32c': [5, 29],
  '1f32d': [7, 1],
  '1f32e': [7, 2],
  '1f32f': [7, 3],
  '1f330': [7, 4],
  '1f331': [5, 30],
  '1f332': [5, 31],
  '1f333': [5, 32],
  '1f334': [5, 33],
  '1f335': [5, 34],
  '1f336': [7, 5],
  '1f337': [5, 35],
  '1f338': [5, 36],
  '1f339': [5, 37],
  '1f33a': [5, 38],
  '1f33b': [5, 39],
  '1f33c': [5, 40],
  '1f33d': [7, 6],
  '1f33e': [5, 41],
  '1f33f': [5, 42],
  '1f340': [5, 43],
  '1f341': [5, 44],
  '1f342': [5, 45],
  '1f343': [5, 46],
  '1f344': [5, 47],
  '1f345': [7, 7],
  '1f346': [7, 8],
  '1f347': [7, 9],
  '1f348': [7, 10],
  '1f349': [7, 11],
  '1f34a': [7, 12],
  '1f34b': [7, 13],
  '1f34c': [7, 14],
  '1f34d': [7, 15],
  '1f34e': [7, 16],
  '1f34f': [7, 17],
  '1f350': [7, 18],
  '1f351': [7, 19],
  '1f352': [7, 20],
  '1f353': [7, 21],
  '1f354': [7, 22],
  '1f355': [7, 23],
  '1f356': [7, 24],
  '1f357': [7, 25],
  '1f358': [7, 26],
  '1f359': [7, 27],
  '1f35a': [7, 28],
  '1f35b': [7, 29],
  '1f35c': [7, 30],
  '1f35d': [7, 31],
  '1f35e': [7, 32],
  '1f35f': [7, 33],
  '1f360': [7, 34],
  '1f361': [7, 35],
  '1f362': [7, 36],
  '1f363': [7, 37],
  '1f364': [7, 38],
  '1f365': [7, 39],
  '1f366': [7, 40],
  '1f367': [7, 41],
  '1f368': [7, 42],
  '1f369': [7, 43],
  '1f36a': [7, 44],
  '1f36b': [7, 45],
  '1f36c': [7, 46],
  '1f36d': [7, 47],
  '1f36e': [7, 48],
  '1f36f': [7, 49],
  '1f370': [7, 50],
  '1f371': [7, 51],
  '1f372': [7, 52],
  '1f373': [7, 53],
  '1f374': [7, 54],
  '1f375': [7, 55],
  '1f376': [7, 56],
  '1f377': [7, 57],
  '1f378': [7, 58],
  '1f379': [7, 59],
  '1f37a': [7, 60],
  '1f37b': [7, 61],
  '1f37c': [7, 62],
  '1f37d': [7, 63],
  '1f37e': [7, 64],
  '1f37f': [7, 65],
  '1f380': [6, 2],
  '1f381': [6, 3],
  '1f382': [7, 66],
  '1f383': [4, 2],
  '1f384': [5, 48],
  '1f385': [4, 3],
  '1f385-1f3fb': [8, 1],
  '1f385-1f3fc': [8, 25, 3],
  '1f385-1f3fd': [8, 0, 1],
  '1f385-1f3fe': [8, 1, 1],
  '1f385-1f3ff': [8, 2],
  '1f386': [3, 11],
  '1f387': [3, 12],
  '1f388': [6, 4],
  '1f389': [6, 5],
  '1f38a': [6, 6],
  '1f38b': [5, 49],
  '1f38c': [2, 259],
  '1f38d': [5, 50],
  '1f38e': [6, 7],
  '1f38f': [6, 8],
  '1f390': [6, 9],
  '1f391': [3, 13],
  '1f392': [4, 4],
  '1f393': [4, 5],
  '1f396': [9, 1],
  '1f397': [9, 2],
  '1f399': [6, 10],
  '1f39a': [6, 11],
  '1f39b': [6, 12],
  '1f39e': [6, 13],
  '1f39f': [9, 3],
  '1f3a0': [3, 14],
  '1f3a1': [3, 15],
  '1f3a2': [3, 16],
  '1f3a3': [9, 4],
  '1f3a4': [9, 5],
  '1f3a5': [6, 14],
  '1f3a6': [0, 61],
  '1f3a7': [9, 6],
  '1f3a8': [9, 7],
  '1f3a9': [4, 6],
  '1f3aa': [9, 8],
  '1f3ab': [9, 9],
  '1f3ac': [9, 10],
  '1f3ad': [9, 11],
  '1f3ae': [9, 12],
  '1f3af': [9, 13],
  '1f3b0': [9, 14],
  '1f3b1': [9, 15],
  '1f3b2': [9, 16],
  '1f3b3': [9, 17],
  '1f3b4': [0, 62],
  '1f3b5': [0, 63],
  '1f3b6': [0, 64],
  '1f3b7': [9, 18],
  '1f3b8': [9, 19],
  '1f3b9': [9, 20],
  '1f3ba': [9, 21],
  '1f3bb': [9, 22],
  '1f3bc': [9, 23],
  '1f3bd': [9, 24],
  '1f3be': [9, 25],
  '1f3bf': [9, 26],
  '1f3c0': [9, 27],
  '1f3c1': [2, 260],
  '1f3c2': [9, 28],
  '1f3c2-1f3fb': [8, 2, 1],
  '1f3c2-1f3fc': [8, 0, 2],
  '1f3c2-1f3fd': [8, 1, 2],
  '1f3c2-1f3fe': [8, 2, 2],
  '1f3c2-1f3ff': [8, 3],
  '1f3c3': [4, 9],
  '1f3c3-1f3fb': [8, 0, 3],
  '1f3c3-1f3fb-2640': [8, 3, 1],
  '1f3c3-1f3fb-2642': [8, 3, 2],
  '1f3c3-1f3fc': [8, 3, 3],
  '1f3c3-1f3fc-2640': [8, 1, 3],
  '1f3c3-1f3fc-2642': [8, 2, 3],
  '1f3c3-1f3fd': [8, 4, 2],
  '1f3c3-1f3fd-2640': [8, 4],
  '1f3c3-1f3fd-2642': [8, 4, 1],
  '1f3c3-1f3fe': [8, 1, 4],
  '1f3c3-1f3fe-2640': [8, 4, 3],
  '1f3c3-1f3fe-2642': [8, 0, 4],
  '1f3c3-1f3ff': [8, 4, 4],
  '1f3c3-1f3ff-2640': [8, 2, 4],
  '1f3c3-1f3ff-2642': [8, 3, 4],
  '1f3c3-2640': [4, 7],
  '1f3c3-2642': [4, 8],
  '1f3c4': [9, 31],
  '1f3c4-1f3fb': [8, 5, 2],
  '1f3c4-1f3fb-2640': [8, 5],
  '1f3c4-1f3fb-2642': [8, 5, 1],
  '1f3c4-1f3fc': [8, 0, 5],
  '1f3c4-1f3fc-2640': [8, 5, 3],
  '1f3c4-1f3fc-2642': [8, 5, 4],
  '1f3c4-1f3fd': [8, 3, 5],
  '1f3c4-1f3fd-2640': [8, 1, 5],
  '1f3c4-1f3fd-2642': [8, 2, 5],
  '1f3c4-1f3fe': [8, 6],
  '1f3c4-1f3fe-2640': [8, 4, 5],
  '1f3c4-1f3fe-2642': [8, 5, 5],
  '1f3c4-1f3ff': [8, 6, 3],
  '1f3c4-1f3ff-2640': [8, 6, 1],
  '1f3c4-1f3ff-2642': [8, 6, 2],
  '1f3c4-2640': [9, 29],
  '1f3c4-2642': [9, 30],
  '1f3c5': [9, 32],
  '1f3c6': [9, 33],
  '1f3c7': [9, 34],
  '1f3c7-1f3fb': [8, 6, 4],
  '1f3c7-1f3fc': [8, 6, 5],
  '1f3c7-1f3fd': [8, 0, 6],
  '1f3c7-1f3fe': [8, 1, 6],
  '1f3c7-1f3ff': [8, 2, 6],
  '1f3c8': [9, 35],
  '1f3c9': [9, 36],
  '1f3ca': [9, 39],
  '1f3ca-1f3fb': [8, 5, 6],
  '1f3ca-1f3fb-2640': [8, 3, 6],
  '1f3ca-1f3fb-2642': [8, 4, 6],
  '1f3ca-1f3fc': [8, 7, 1],
  '1f3ca-1f3fc-2640': [8, 6, 6],
  '1f3ca-1f3fc-2642': [8, 7],
  '1f3ca-1f3fd': [8, 7, 4],
  '1f3ca-1f3fd-2640': [8, 7, 2],
  '1f3ca-1f3fd-2642': [8, 7, 3],
  '1f3ca-1f3fe': [8, 0, 7],
  '1f3ca-1f3fe-2640': [8, 7, 5],
  '1f3ca-1f3fe-2642': [8, 7, 6],
  '1f3ca-1f3ff': [8, 3, 7],
  '1f3ca-1f3ff-2640': [8, 1, 7],
  '1f3ca-1f3ff-2642': [8, 2, 7],
  '1f3ca-2640': [9, 37],
  '1f3ca-2642': [9, 38],
  '1f3cb': [9, 42],
  '1f3cb-1f3fb': [8, 6, 7],
  '1f3cb-1f3fb-2640': [8, 4, 7],
  '1f3cb-1f3fb-2642': [8, 5, 7],
  '1f3cb-1f3fc': [8, 8, 1],
  '1f3cb-1f3fc-2640': [8, 7, 7],
  '1f3cb-1f3fc-2642': [8, 8],
  '1f3cb-1f3fd': [8, 8, 4],
  '1f3cb-1f3fd-2640': [8, 8, 2],
  '1f3cb-1f3fd-2642': [8, 8, 3],
  '1f3cb-1f3fe': [8, 8, 7],
  '1f3cb-1f3fe-2640': [8, 8, 5],
  '1f3cb-1f3fe-2642': [8, 8, 6],
  '1f3cb-1f3ff': [8, 2, 8],
  '1f3cb-1f3ff-2640': [8, 0, 8],
  '1f3cb-1f3ff-2642': [8, 1, 8],
  '1f3cb-2640': [9, 40],
  '1f3cb-2642': [9, 41],
  '1f3cc': [9, 45],
  '1f3cc-1f3fb': [8, 5, 8],
  '1f3cc-1f3fb-2640': [8, 3, 8],
  '1f3cc-1f3fb-2642': [8, 4, 8],
  '1f3cc-1f3fc': [8, 8, 8],
  '1f3cc-1f3fc-2640': [8, 6, 8],
  '1f3cc-1f3fc-2642': [8, 7, 8],
  '1f3cc-1f3fd': [8, 9, 2],
  '1f3cc-1f3fd-2640': [8, 9],
  '1f3cc-1f3fd-2642': [8, 9, 1],
  '1f3cc-1f3fe': [8, 9, 5],
  '1f3cc-1f3fe-2640': [8, 9, 3],
  '1f3cc-1f3fe-2642': [8, 9, 4],
  '1f3cc-1f3ff': [8, 9, 8],
  '1f3cc-1f3ff-2640': [8, 9, 6],
  '1f3cc-1f3ff-2642': [8, 9, 7],
  '1f3cc-2640': [9, 43],
  '1f3cc-2642': [9, 44],
  '1f3cd': [3, 17],
  '1f3ce': [3, 18],
  '1f3cf': [9, 46],
  '1f3d0': [9, 47],
  '1f3d1': [9, 48],
  '1f3d2': [9, 49],
  '1f3d3': [9, 50],
  '1f3d4': [3, 19],
  '1f3d5': [3, 20],
  '1f3d6': [3, 21],
  '1f3d7': [3, 22],
  '1f3d8': [3, 23],
  '1f3d9': [3, 24],
  '1f3da': [3, 25],
  '1f3db': [3, 26],
  '1f3dc': [3, 27],
  '1f3dd': [3, 28],
  '1f3de': [3, 29],
  '1f3df': [3, 30],
  '1f3e0': [3, 31],
  '1f3e1': [3, 32],
  '1f3e2': [3, 33],
  '1f3e3': [3, 34],
  '1f3e4': [3, 35],
  '1f3e5': [3, 36],
  '1f3e6': [3, 37],
  '1f3e7': [0, 65],
  '1f3e8': [3, 38],
  '1f3e9': [3, 39],
  '1f3ea': [3, 40],
  '1f3eb': [3, 41],
  '1f3ec': [3, 42],
  '1f3ed': [3, 43],
  '1f3ee': [6, 15],
  '1f3ef': [3, 44],
  '1f3f0': [3, 45],
  '1f3f3': [2, 262],
  '1f3f3-1f308': [2, 261],
  '1f3f4': [2, 267],
  '1f3f4-2620': [2, 263],
  '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f': [2, 264],
  '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f': [2, 265],
  '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f': [2, 266],
  '1f3f5': [9, 51],
  '1f3f7': [6, 16],
  '1f3f8': [9, 52],
  '1f3f9': [9, 53],
  '1f3fa': [6, 17],
  '1f3fb': [8, 0, 9],
  '1f3fc': [8, 1, 9],
  '1f3fd': [8, 2, 9],
  '1f3fe': [8, 3, 9],
  '1f3ff': [8, 4, 9],
  '1f400': [5, 51],
  '1f401': [5, 52],
  '1f402': [5, 53],
  '1f403': [5, 54],
  '1f404': [5, 55],
  '1f405': [5, 56],
  '1f406': [5, 57],
  '1f407': [5, 58],
  '1f408': [5, 59],
  '1f409': [5, 60],
  '1f40a': [5, 61],
  '1f40b': [5, 62],
  '1f40c': [5, 63],
  '1f40d': [5, 64],
  '1f40e': [5, 65],
  '1f40f': [5, 66],
  '1f410': [5, 67],
  '1f411': [5, 68],
  '1f412': [5, 69],
  '1f413': [5, 70],
  '1f414': [5, 71],
  '1f415': [5, 72],
  '1f416': [5, 73],
  '1f417': [5, 74],
  '1f418': [5, 75],
  '1f419': [5, 76],
  '1f41a': [5, 77],
  '1f41b': [5, 78],
  '1f41c': [5, 79],
  '1f41d': [5, 80],
  '1f41e': [5, 81],
  '1f41f': [5, 82],
  '1f420': [5, 83],
  '1f421': [5, 84],
  '1f422': [5, 85],
  '1f423': [5, 86],
  '1f424': [5, 87],
  '1f425': [5, 88],
  '1f426': [5, 89],
  '1f427': [5, 90],
  '1f428': [5, 91],
  '1f429': [5, 92],
  '1f42a': [5, 93],
  '1f42b': [5, 94],
  '1f42c': [5, 95],
  '1f42d': [5, 96],
  '1f42e': [5, 97],
  '1f42f': [5, 98],
  '1f430': [5, 99],
  '1f431': [5, 100],
  '1f432': [5, 101],
  '1f433': [5, 102],
  '1f434': [5, 103],
  '1f435': [5, 104],
  '1f436': [5, 105],
  '1f437': [5, 106],
  '1f438': [5, 107],
  '1f439': [5, 108],
  '1f43a': [5, 109],
  '1f43b': [5, 110],
  '1f43c': [5, 111],
  '1f43d': [5, 112],
  '1f43e': [5, 113],
  '1f43f': [5, 114],
  '1f440': [4, 10],
  '1f441': [4, 11],
  '1f441-1f5e8': [0, 66],
  '1f442': [4, 12],
  '1f442-1f3fb': [8, 5, 9],
  '1f442-1f3fc': [8, 6, 9],
  '1f442-1f3fd': [8, 7, 9],
  '1f442-1f3fe': [8, 8, 9],
  '1f442-1f3ff': [8, 9, 9],
  '1f443': [4, 13],
  '1f443-1f3fb': [8, 10],
  '1f443-1f3fc': [8, 10, 1],
  '1f443-1f3fd': [8, 10, 2],
  '1f443-1f3fe': [8, 10, 3],
  '1f443-1f3ff': [8, 10, 4],
  '1f444': [4, 14],
  '1f445': [4, 15],
  '1f446': [4, 16],
  '1f446-1f3fb': [8, 10, 5],
  '1f446-1f3fc': [8, 10, 6],
  '1f446-1f3fd': [8, 10, 7],
  '1f446-1f3fe': [8, 10, 8],
  '1f446-1f3ff': [8, 10, 9],
  '1f447': [4, 17],
  '1f447-1f3fb': [8, 0, 10],
  '1f447-1f3fc': [8, 1, 10],
  '1f447-1f3fd': [8, 2, 10],
  '1f447-1f3fe': [8, 3, 10],
  '1f447-1f3ff': [8, 4, 10],
  '1f448': [4, 18],
  '1f448-1f3fb': [8, 5, 10],
  '1f448-1f3fc': [8, 6, 10],
  '1f448-1f3fd': [8, 7, 10],
  '1f448-1f3fe': [8, 8, 10],
  '1f448-1f3ff': [8, 9, 10],
  '1f449': [4, 19],
  '1f449-1f3fb': [8, 10, 10],
  '1f449-1f3fc': [8, 11],
  '1f449-1f3fd': [8, 11, 1],
  '1f449-1f3fe': [8, 11, 2],
  '1f449-1f3ff': [8, 11, 3],
  '1f44a': [4, 20],
  '1f44a-1f3fb': [8, 11, 4],
  '1f44a-1f3fc': [8, 11, 5],
  '1f44a-1f3fd': [8, 11, 6],
  '1f44a-1f3fe': [8, 11, 7],
  '1f44a-1f3ff': [8, 11, 8],
  '1f44b': [4, 21],
  '1f44b-1f3fb': [8, 11, 9],
  '1f44b-1f3fc': [8, 11, 10],
  '1f44b-1f3fd': [8, 0, 11],
  '1f44b-1f3fe': [8, 1, 11],
  '1f44b-1f3ff': [8, 2, 11],
  '1f44c': [4, 22],
  '1f44c-1f3fb': [8, 3, 11],
  '1f44c-1f3fc': [8, 4, 11],
  '1f44c-1f3fd': [8, 5, 11],
  '1f44c-1f3fe': [8, 6, 11],
  '1f44c-1f3ff': [8, 7, 11],
  '1f44d': [4, 23],
  '1f44d-1f3fb': [8, 8, 11],
  '1f44d-1f3fc': [8, 9, 11],
  '1f44d-1f3fd': [8, 10, 11],
  '1f44d-1f3fe': [8, 11, 11],
  '1f44d-1f3ff': [8, 12],
  '1f44e': [4, 24],
  '1f44e-1f3fb': [8, 12, 1],
  '1f44e-1f3fc': [8, 12, 2],
  '1f44e-1f3fd': [8, 12, 3],
  '1f44e-1f3fe': [8, 12, 4],
  '1f44e-1f3ff': [8, 12, 5],
  '1f44f': [4, 25],
  '1f44f-1f3fb': [8, 12, 6],
  '1f44f-1f3fc': [8, 12, 7],
  '1f44f-1f3fd': [8, 12, 8],
  '1f44f-1f3fe': [8, 12, 9],
  '1f44f-1f3ff': [8, 12, 10],
  '1f450': [4, 26],
  '1f450-1f3fb': [8, 12, 11],
  '1f450-1f3fc': [8, 0, 12],
  '1f450-1f3fd': [8, 1, 12],
  '1f450-1f3fe': [8, 2, 12],
  '1f450-1f3ff': [8, 3, 12],
  '1f451': [4, 27],
  '1f452': [4, 28],
  '1f453': [4, 29],
  '1f454': [4, 30],
  '1f455': [4, 31],
  '1f456': [4, 32],
  '1f457': [4, 33],
  '1f458': [4, 34],
  '1f459': [4, 35],
  '1f45a': [4, 36],
  '1f45b': [4, 37],
  '1f45c': [4, 38],
  '1f45d': [4, 39],
  '1f45e': [4, 40],
  '1f45f': [4, 41],
  '1f460': [4, 42],
  '1f461': [4, 43],
  '1f462': [4, 44],
  '1f463': [4, 45],
  '1f464': [4, 46],
  '1f465': [4, 47],
  '1f466': [4, 48],
  '1f466-1f3fb': [8, 4, 12],
  '1f466-1f3fc': [8, 5, 12],
  '1f466-1f3fd': [8, 6, 12],
  '1f466-1f3fe': [8, 7, 12],
  '1f466-1f3ff': [8, 8, 12],
  '1f467': [4, 49],
  '1f467-1f3fb': [8, 9, 12],
  '1f467-1f3fc': [8, 10, 12],
  '1f467-1f3fd': [8, 11, 12],
  '1f467-1f3fe': [8, 12, 12],
  '1f467-1f3ff': [8, 13],
  '1f468': [4, 87],
  '1f468-1f33e': [4, 50],
  '1f468-1f373': [4, 51],
  '1f468-1f393': [4, 52],
  '1f468-1f3a4': [4, 53],
  '1f468-1f3a8': [4, 54],
  '1f468-1f3eb': [4, 55],
  '1f468-1f3ed': [4, 56],
  '1f468-1f3fb': [8, 8, 13],
  '1f468-1f3fb-1f33e': [8, 13, 1],
  '1f468-1f3fb-1f373': [8, 13, 2],
  '1f468-1f3fb-1f393': [8, 13, 3],
  '1f468-1f3fb-1f3a4': [8, 13, 4],
  '1f468-1f3fb-1f3a8': [8, 13, 5],
  '1f468-1f3fb-1f3eb': [8, 13, 6],
  '1f468-1f3fb-1f3ed': [8, 13, 7],
  '1f468-1f3fb-1f4bb': [8, 13, 8],
  '1f468-1f3fb-1f4bc': [8, 13, 9],
  '1f468-1f3fb-1f527': [8, 13, 10],
  '1f468-1f3fb-1f52c': [8, 13, 11],
  '1f468-1f3fb-1f680': [8, 13, 12],
  '1f468-1f3fb-1f692': [8, 0, 13],
  '1f468-1f3fb-1f9b0': [8, 1, 13],
  '1f468-1f3fb-1f9b1': [8, 2, 13],
  '1f468-1f3fb-1f9b2': [8, 3, 13],
  '1f468-1f3fb-1f9b3': [8, 4, 13],
  '1f468-1f3fb-2695': [8, 5, 13],
  '1f468-1f3fb-2696': [8, 6, 13],
  '1f468-1f3fb-2708': [8, 7, 13],
  '1f468-1f3fc': [8, 1, 14],
  '1f468-1f3fc-1f33e': [8, 9, 13],
  '1f468-1f3fc-1f373': [8, 10, 13],
  '1f468-1f3fc-1f393': [8, 11, 13],
  '1f468-1f3fc-1f3a4': [8, 12, 13],
  '1f468-1f3fc-1f3a8': [8, 13, 13],
  '1f468-1f3fc-1f3eb': [8, 14],
  '1f468-1f3fc-1f3ed': [8, 14, 1],
  '1f468-1f3fc-1f4bb': [8, 14, 2],
  '1f468-1f3fc-1f4bc': [8, 14, 3],
  '1f468-1f3fc-1f527': [8, 14, 4],
  '1f468-1f3fc-1f52c': [8, 14, 5],
  '1f468-1f3fc-1f680': [8, 14, 6],
  '1f468-1f3fc-1f692': [8, 14, 7],
  '1f468-1f3fc-1f9b0': [8, 14, 8],
  '1f468-1f3fc-1f9b1': [8, 14, 9],
  '1f468-1f3fc-1f9b2': [8, 14, 10],
  '1f468-1f3fc-1f9b3': [8, 14, 11],
  '1f468-1f3fc-2695': [8, 14, 12],
  '1f468-1f3fc-2696': [8, 14, 13],
  '1f468-1f3fc-2708': [8, 0, 14],
  '1f468-1f3fd': [8, 15, 7],
  '1f468-1f3fd-1f33e': [8, 2, 14],
  '1f468-1f3fd-1f373': [8, 3, 14],
  '1f468-1f3fd-1f393': [8, 4, 14],
  '1f468-1f3fd-1f3a4': [8, 5, 14],
  '1f468-1f3fd-1f3a8': [8, 6, 14],
  '1f468-1f3fd-1f3eb': [8, 7, 14],
  '1f468-1f3fd-1f3ed': [8, 8, 14],
  '1f468-1f3fd-1f4bb': [8, 9, 14],
  '1f468-1f3fd-1f4bc': [8, 10, 14],
  '1f468-1f3fd-1f527': [8, 11, 14],
  '1f468-1f3fd-1f52c': [8, 12, 14],
  '1f468-1f3fd-1f680': [8, 13, 14],
  '1f468-1f3fd-1f692': [8, 14, 14],
  '1f468-1f3fd-1f9b0': [8, 15],
  '1f468-1f3fd-1f9b1': [8, 15, 1],
  '1f468-1f3fd-1f9b2': [8, 15, 2],
  '1f468-1f3fd-1f9b3': [8, 15, 3],
  '1f468-1f3fd-2695': [8, 15, 4],
  '1f468-1f3fd-2696': [8, 15, 5],
  '1f468-1f3fd-2708': [8, 15, 6],
  '1f468-1f3fe': [8, 13, 15],
  '1f468-1f3fe-1f33e': [8, 15, 8],
  '1f468-1f3fe-1f373': [8, 15, 9],
  '1f468-1f3fe-1f393': [8, 15, 10],
  '1f468-1f3fe-1f3a4': [8, 15, 11],
  '1f468-1f3fe-1f3a8': [8, 15, 12],
  '1f468-1f3fe-1f3eb': [8, 15, 13],
  '1f468-1f3fe-1f3ed': [8, 15, 14],
  '1f468-1f3fe-1f4bb': [8, 0, 15],
  '1f468-1f3fe-1f4bc': [8, 1, 15],
  '1f468-1f3fe-1f527': [8, 2, 15],
  '1f468-1f3fe-1f52c': [8, 3, 15],
  '1f468-1f3fe-1f680': [8, 4, 15],
  '1f468-1f3fe-1f692': [8, 5, 15],
  '1f468-1f3fe-1f9b0': [8, 6, 15],
  '1f468-1f3fe-1f9b1': [8, 7, 15],
  '1f468-1f3fe-1f9b2': [8, 8, 15],
  '1f468-1f3fe-1f9b3': [8, 9, 15],
  '1f468-1f3fe-2695': [8, 10, 15],
  '1f468-1f3fe-2696': [8, 11, 15],
  '1f468-1f3fe-2708': [8, 12, 15],
  '1f468-1f3ff': [8, 2, 16],
  '1f468-1f3ff-1f33e': [8, 14, 15],
  '1f468-1f3ff-1f373': [8, 15, 15],
  '1f468-1f3ff-1f393': [8, 16],
  '1f468-1f3ff-1f3a4': [8, 16, 1],
  '1f468-1f3ff-1f3a8': [8, 16, 2],
  '1f468-1f3ff-1f3eb': [8, 16, 3],
  '1f468-1f3ff-1f3ed': [8, 16, 4],
  '1f468-1f3ff-1f4bb': [8, 16, 5],
  '1f468-1f3ff-1f4bc': [8, 16, 6],
  '1f468-1f3ff-1f527': [8, 16, 7],
  '1f468-1f3ff-1f52c': [8, 16, 8],
  '1f468-1f3ff-1f680': [8, 16, 9],
  '1f468-1f3ff-1f692': [8, 16, 10],
  '1f468-1f3ff-1f9b0': [8, 16, 11],
  '1f468-1f3ff-1f9b1': [8, 16, 12],
  '1f468-1f3ff-1f9b2': [8, 16, 13],
  '1f468-1f3ff-1f9b3': [8, 16, 14],
  '1f468-1f3ff-2695': [8, 16, 15],
  '1f468-1f3ff-2696': [8, 0, 16],
  '1f468-1f3ff-2708': [8, 1, 16],
  '1f468-1f466': [4, 58],
  '1f468-1f466-1f466': [4, 57],
  '1f468-1f467': [4, 61],
  '1f468-1f467-1f466': [4, 59],
  '1f468-1f467-1f467': [4, 60],
  '1f468-1f468-1f466': [4, 63],
  '1f468-1f468-1f466-1f466': [4, 62],
  '1f468-1f468-1f467': [4, 66],
  '1f468-1f468-1f467-1f466': [4, 64],
  '1f468-1f468-1f467-1f467': [4, 65],
  '1f468-1f469-1f466': [4, 68],
  '1f468-1f469-1f466-1f466': [4, 67],
  '1f468-1f469-1f467': [4, 71],
  '1f468-1f469-1f467-1f466': [4, 69],
  '1f468-1f469-1f467-1f467': [4, 70],
  '1f468-1f4bb': [4, 72],
  '1f468-1f4bc': [4, 73],
  '1f468-1f527': [4, 74],
  '1f468-1f52c': [4, 75],
  '1f468-1f680': [4, 76],
  '1f468-1f692': [4, 77],
  '1f468-1f9b0': [4, 78],
  '1f468-1f9b1': [4, 79],
  '1f468-1f9b2': [4, 80],
  '1f468-1f9b3': [4, 81],
  '1f468-2695': [4, 82],
  '1f468-2696': [4, 83],
  '1f468-2708': [4, 84],
  '1f468-2764-1f468': [4, 85],
  '1f468-2764-1f48b-1f468': [4, 86],
  '1f469': [4, 122],
  '1f469-1f33e': [4, 88],
  '1f469-1f373': [4, 89],
  '1f469-1f393': [4, 90],
  '1f469-1f3a4': [4, 91],
  '1f469-1f3a8': [4, 92],
  '1f469-1f3eb': [4, 93],
  '1f469-1f3ed': [4, 94],
  '1f469-1f3fb': [8, 17, 6],
  '1f469-1f3fb-1f33e': [8, 3, 16],
  '1f469-1f3fb-1f373': [8, 4, 16],
  '1f469-1f3fb-1f393': [8, 5, 16],
  '1f469-1f3fb-1f3a4': [8, 6, 16],
  '1f469-1f3fb-1f3a8': [8, 7, 16],
  '1f469-1f3fb-1f3eb': [8, 8, 16],
  '1f469-1f3fb-1f3ed': [8, 9, 16],
  '1f469-1f3fb-1f4bb': [8, 10, 16],
  '1f469-1f3fb-1f4bc': [8, 11, 16],
  '1f469-1f3fb-1f527': [8, 12, 16],
  '1f469-1f3fb-1f52c': [8, 13, 16],
  '1f469-1f3fb-1f680': [8, 14, 16],
  '1f469-1f3fb-1f692': [8, 15, 16],
  '1f469-1f3fb-1f9b0': [8, 16, 16],
  '1f469-1f3fb-1f9b1': [8, 17],
  '1f469-1f3fb-1f9b2': [8, 17, 1],
  '1f469-1f3fb-1f9b3': [8, 17, 2],
  '1f469-1f3fb-2695': [8, 17, 3],
  '1f469-1f3fb-2696': [8, 17, 4],
  '1f469-1f3fb-2708': [8, 17, 5],
  '1f469-1f3fc': [8, 10, 17],
  '1f469-1f3fc-1f33e': [8, 17, 7],
  '1f469-1f3fc-1f373': [8, 17, 8],
  '1f469-1f3fc-1f393': [8, 17, 9],
  '1f469-1f3fc-1f3a4': [8, 17, 10],
  '1f469-1f3fc-1f3a8': [8, 17, 11],
  '1f469-1f3fc-1f3eb': [8, 17, 12],
  '1f469-1f3fc-1f3ed': [8, 17, 13],
  '1f469-1f3fc-1f4bb': [8, 17, 14],
  '1f469-1f3fc-1f4bc': [8, 17, 15],
  '1f469-1f3fc-1f527': [8, 17, 16],
  '1f469-1f3fc-1f52c': [8, 0, 17],
  '1f469-1f3fc-1f680': [8, 1, 17],
  '1f469-1f3fc-1f692': [8, 2, 17],
  '1f469-1f3fc-1f9b0': [8, 3, 17],
  '1f469-1f3fc-1f9b1': [8, 4, 17],
  '1f469-1f3fc-1f9b2': [8, 5, 17],
  '1f469-1f3fc-1f9b3': [8, 6, 17],
  '1f469-1f3fc-2695': [8, 7, 17],
  '1f469-1f3fc-2696': [8, 8, 17],
  '1f469-1f3fc-2708': [8, 9, 17],
  '1f469-1f3fd': [8, 18, 13],
  '1f469-1f3fd-1f33e': [8, 11, 17],
  '1f469-1f3fd-1f373': [8, 12, 17],
  '1f469-1f3fd-1f393': [8, 13, 17],
  '1f469-1f3fd-1f3a4': [8, 14, 17],
  '1f469-1f3fd-1f3a8': [8, 15, 17],
  '1f469-1f3fd-1f3eb': [8, 16, 17],
  '1f469-1f3fd-1f3ed': [8, 17, 17],
  '1f469-1f3fd-1f4bb': [8, 18],
  '1f469-1f3fd-1f4bc': [8, 18, 1],
  '1f469-1f3fd-1f527': [8, 18, 2],
  '1f469-1f3fd-1f52c': [8, 18, 3],
  '1f469-1f3fd-1f680': [8, 18, 4],
  '1f469-1f3fd-1f692': [8, 18, 5],
  '1f469-1f3fd-1f9b0': [8, 18, 6],
  '1f469-1f3fd-1f9b1': [8, 18, 7],
  '1f469-1f3fd-1f9b2': [8, 18, 8],
  '1f469-1f3fd-1f9b3': [8, 18, 9],
  '1f469-1f3fd-2695': [8, 18, 10],
  '1f469-1f3fd-2696': [8, 18, 11],
  '1f469-1f3fd-2708': [8, 18, 12],
  '1f469-1f3fe': [8, 16, 18],
  '1f469-1f3fe-1f33e': [8, 18, 14],
  '1f469-1f3fe-1f373': [8, 18, 15],
  '1f469-1f3fe-1f393': [8, 18, 16],
  '1f469-1f3fe-1f3a4': [8, 18, 17],
  '1f469-1f3fe-1f3a8': [8, 0, 18],
  '1f469-1f3fe-1f3eb': [8, 1, 18],
  '1f469-1f3fe-1f3ed': [8, 2, 18],
  '1f469-1f3fe-1f4bb': [8, 3, 18],
  '1f469-1f3fe-1f4bc': [8, 4, 18],
  '1f469-1f3fe-1f527': [8, 5, 18],
  '1f469-1f3fe-1f52c': [8, 6, 18],
  '1f469-1f3fe-1f680': [8, 7, 18],
  '1f469-1f3fe-1f692': [8, 8, 18],
  '1f469-1f3fe-1f9b0': [8, 9, 18],
  '1f469-1f3fe-1f9b1': [8, 10, 18],
  '1f469-1f3fe-1f9b2': [8, 11, 18],
  '1f469-1f3fe-1f9b3': [8, 12, 18],
  '1f469-1f3fe-2695': [8, 13, 18],
  '1f469-1f3fe-2696': [8, 14, 18],
  '1f469-1f3fe-2708': [8, 15, 18],
  '1f469-1f3ff': [8, 19, 18],
  '1f469-1f3ff-1f33e': [8, 17, 18],
  '1f469-1f3ff-1f373': [8, 18, 18],
  '1f469-1f3ff-1f393': [8, 19],
  '1f469-1f3ff-1f3a4': [8, 19, 1],
  '1f469-1f3ff-1f3a8': [8, 19, 2],
  '1f469-1f3ff-1f3eb': [8, 19, 3],
  '1f469-1f3ff-1f3ed': [8, 19, 4],
  '1f469-1f3ff-1f4bb': [8, 19, 5],
  '1f469-1f3ff-1f4bc': [8, 19, 6],
  '1f469-1f3ff-1f527': [8, 19, 7],
  '1f469-1f3ff-1f52c': [8, 19, 8],
  '1f469-1f3ff-1f680': [8, 19, 9],
  '1f469-1f3ff-1f692': [8, 19, 10],
  '1f469-1f3ff-1f9b0': [8, 19, 11],
  '1f469-1f3ff-1f9b1': [8, 19, 12],
  '1f469-1f3ff-1f9b2': [8, 19, 13],
  '1f469-1f3ff-1f9b3': [8, 19, 14],
  '1f469-1f3ff-2695': [8, 19, 15],
  '1f469-1f3ff-2696': [8, 19, 16],
  '1f469-1f3ff-2708': [8, 19, 17],
  '1f469-1f466': [4, 96],
  '1f469-1f466-1f466': [4, 95],
  '1f469-1f467': [4, 99],
  '1f469-1f467-1f466': [4, 97],
  '1f469-1f467-1f467': [4, 98],
  '1f469-1f469-1f466': [4, 101],
  '1f469-1f469-1f466-1f466': [4, 100],
  '1f469-1f469-1f467': [4, 104],
  '1f469-1f469-1f467-1f466': [4, 102],
  '1f469-1f469-1f467-1f467': [4, 103],
  '1f469-1f4bb': [4, 105],
  '1f469-1f4bc': [4, 106],
  '1f469-1f527': [4, 107],
  '1f469-1f52c': [4, 108],
  '1f469-1f680': [4, 109],
  '1f469-1f692': [4, 110],
  '1f469-1f9b0': [4, 111],
  '1f469-1f9b1': [4, 112],
  '1f469-1f9b2': [4, 113],
  '1f469-1f9b3': [4, 114],
  '1f469-2695': [4, 115],
  '1f469-2696': [4, 116],
  '1f469-2708': [4, 117],
  '1f469-2764-1f468': [4, 118],
  '1f469-2764-1f469': [4, 119],
  '1f469-2764-1f48b-1f468': [4, 120],
  '1f469-2764-1f48b-1f469': [4, 121],
  '1f46a': [4, 123],
  '1f46b': [4, 124],
  '1f46c': [4, 125],
  '1f46d': [4, 126],
  '1f46e': [4, 129],
  '1f46e-1f3fb': [8, 2, 19],
  '1f46e-1f3fb-2640': [8, 0, 19],
  '1f46e-1f3fb-2642': [8, 1, 19],
  '1f46e-1f3fc': [8, 5, 19],
  '1f46e-1f3fc-2640': [8, 3, 19],
  '1f46e-1f3fc-2642': [8, 4, 19],
  '1f46e-1f3fd': [8, 8, 19],
  '1f46e-1f3fd-2640': [8, 6, 19],
  '1f46e-1f3fd-2642': [8, 7, 19],
  '1f46e-1f3fe': [8, 11, 19],
  '1f46e-1f3fe-2640': [8, 9, 19],
  '1f46e-1f3fe-2642': [8, 10, 19],
  '1f46e-1f3ff': [8, 14, 19],
  '1f46e-1f3ff-2640': [8, 12, 19],
  '1f46e-1f3ff-2642': [8, 13, 19],
  '1f46e-2640': [4, 127],
  '1f46e-2642': [4, 128],
  '1f46f': [4, 132],
  '1f46f-2640': [4, 130],
  '1f46f-2642': [4, 131],
  '1f470': [4, 133],
  '1f470-1f3fb': [8, 15, 19],
  '1f470-1f3fc': [8, 16, 19],
  '1f470-1f3fd': [8, 17, 19],
  '1f470-1f3fe': [8, 18, 19],
  '1f470-1f3ff': [8, 19, 19],
  '1f471': [4, 136],
  '1f471-1f3fb': [8, 20, 2],
  '1f471-1f3fb-2640': [8, 20],
  '1f471-1f3fb-2642': [8, 20, 1],
  '1f471-1f3fc': [8, 20, 5],
  '1f471-1f3fc-2640': [8, 20, 3],
  '1f471-1f3fc-2642': [8, 20, 4],
  '1f471-1f3fd': [8, 20, 8],
  '1f471-1f3fd-2640': [8, 20, 6],
  '1f471-1f3fd-2642': [8, 20, 7],
  '1f471-1f3fe': [8, 20, 11],
  '1f471-1f3fe-2640': [8, 20, 9],
  '1f471-1f3fe-2642': [8, 20, 10],
  '1f471-1f3ff': [8, 20, 14],
  '1f471-1f3ff-2640': [8, 20, 12],
  '1f471-1f3ff-2642': [8, 20, 13],
  '1f471-2640': [4, 134],
  '1f471-2642': [4, 135],
  '1f472': [4, 137],
  '1f472-1f3fb': [8, 20, 15],
  '1f472-1f3fc': [8, 20, 16],
  '1f472-1f3fd': [8, 20, 17],
  '1f472-1f3fe': [8, 20, 18],
  '1f472-1f3ff': [8, 20, 19],
  '1f473': [4, 140],
  '1f473-1f3fb': [8, 2, 20],
  '1f473-1f3fb-2640': [8, 0, 20],
  '1f473-1f3fb-2642': [8, 1, 20],
  '1f473-1f3fc': [8, 5, 20],
  '1f473-1f3fc-2640': [8, 3, 20],
  '1f473-1f3fc-2642': [8, 4, 20],
  '1f473-1f3fd': [8, 8, 20],
  '1f473-1f3fd-2640': [8, 6, 20],
  '1f473-1f3fd-2642': [8, 7, 20],
  '1f473-1f3fe': [8, 11, 20],
  '1f473-1f3fe-2640': [8, 9, 20],
  '1f473-1f3fe-2642': [8, 10, 20],
  '1f473-1f3ff': [8, 14, 20],
  '1f473-1f3ff-2640': [8, 12, 20],
  '1f473-1f3ff-2642': [8, 13, 20],
  '1f473-2640': [4, 138],
  '1f473-2642': [4, 139],
  '1f474': [4, 141],
  '1f474-1f3fb': [8, 15, 20],
  '1f474-1f3fc': [8, 16, 20],
  '1f474-1f3fd': [8, 17, 20],
  '1f474-1f3fe': [8, 18, 20],
  '1f474-1f3ff': [8, 19, 20],
  '1f475': [4, 142],
  '1f475-1f3fb': [8, 20, 20],
  '1f475-1f3fc': [8, 21],
  '1f475-1f3fd': [8, 21, 1],
  '1f475-1f3fe': [8, 21, 2],
  '1f475-1f3ff': [8, 21, 3],
  '1f476': [4, 143],
  '1f476-1f3fb': [8, 21, 4],
  '1f476-1f3fc': [8, 21, 5],
  '1f476-1f3fd': [8, 21, 6],
  '1f476-1f3fe': [8, 21, 7],
  '1f476-1f3ff': [8, 21, 8],
  '1f477': [4, 146],
  '1f477-1f3fb': [8, 21, 11],
  '1f477-1f3fb-2640': [8, 21, 9],
  '1f477-1f3fb-2642': [8, 21, 10],
  '1f477-1f3fc': [8, 21, 14],
  '1f477-1f3fc-2640': [8, 21, 12],
  '1f477-1f3fc-2642': [8, 21, 13],
  '1f477-1f3fd': [8, 21, 17],
  '1f477-1f3fd-2640': [8, 21, 15],
  '1f477-1f3fd-2642': [8, 21, 16],
  '1f477-1f3fe': [8, 21, 20],
  '1f477-1f3fe-2640': [8, 21, 18],
  '1f477-1f3fe-2642': [8, 21, 19],
  '1f477-1f3ff': [8, 2, 21],
  '1f477-1f3ff-2640': [8, 0, 21],
  '1f477-1f3ff-2642': [8, 1, 21],
  '1f477-2640': [4, 144],
  '1f477-2642': [4, 145],
  '1f478': [4, 147],
  '1f478-1f3fb': [8, 3, 21],
  '1f478-1f3fc': [8, 4, 21],
  '1f478-1f3fd': [8, 5, 21],
  '1f478-1f3fe': [8, 6, 21],
  '1f478-1f3ff': [8, 7, 21],
  '1f479': [4, 148],
  '1f47a': [4, 149],
  '1f47b': [4, 150],
  '1f47c': [4, 151],
  '1f47c-1f3fb': [8, 8, 21],
  '1f47c-1f3fc': [8, 9, 21],
  '1f47c-1f3fd': [8, 10, 21],
  '1f47c-1f3fe': [8, 11, 21],
  '1f47c-1f3ff': [8, 12, 21],
  '1f47d': [4, 152],
  '1f47e': [4, 153],
  '1f47f': [4, 154],
  '1f480': [4, 155],
  '1f481': [4, 158],
  '1f481-1f3fb': [8, 15, 21],
  '1f481-1f3fb-2640': [8, 13, 21],
  '1f481-1f3fb-2642': [8, 14, 21],
  '1f481-1f3fc': [8, 18, 21],
  '1f481-1f3fc-2640': [8, 16, 21],
  '1f481-1f3fc-2642': [8, 17, 21],
  '1f481-1f3fd': [8, 21, 21],
  '1f481-1f3fd-2640': [8, 19, 21],
  '1f481-1f3fd-2642': [8, 20, 21],
  '1f481-1f3fe': [8, 22, 2],
  '1f481-1f3fe-2640': [8, 22],
  '1f481-1f3fe-2642': [8, 22, 1],
  '1f481-1f3ff': [8, 22, 5],
  '1f481-1f3ff-2640': [8, 22, 3],
  '1f481-1f3ff-2642': [8, 22, 4],
  '1f481-2640': [4, 156],
  '1f481-2642': [4, 157],
  '1f482': [4, 161],
  '1f482-1f3fb': [8, 22, 8],
  '1f482-1f3fb-2640': [8, 22, 6],
  '1f482-1f3fb-2642': [8, 22, 7],
  '1f482-1f3fc': [8, 22, 11],
  '1f482-1f3fc-2640': [8, 22, 9],
  '1f482-1f3fc-2642': [8, 22, 10],
  '1f482-1f3fd': [8, 22, 14],
  '1f482-1f3fd-2640': [8, 22, 12],
  '1f482-1f3fd-2642': [8, 22, 13],
  '1f482-1f3fe': [8, 22, 17],
  '1f482-1f3fe-2640': [8, 22, 15],
  '1f482-1f3fe-2642': [8, 22, 16],
  '1f482-1f3ff': [8, 22, 20],
  '1f482-1f3ff-2640': [8, 22, 18],
  '1f482-1f3ff-2642': [8, 22, 19],
  '1f482-2640': [4, 159],
  '1f482-2642': [4, 160],
  '1f483': [4, 162],
  '1f483-1f3fb': [8, 22, 21],
  '1f483-1f3fc': [8, 0, 22],
  '1f483-1f3fd': [8, 1, 22],
  '1f483-1f3fe': [8, 2, 22],
  '1f483-1f3ff': [8, 3, 22],
  '1f484': [4, 163],
  '1f485': [4, 164],
  '1f485-1f3fb': [8, 4, 22],
  '1f485-1f3fc': [8, 5, 22],
  '1f485-1f3fd': [8, 6, 22],
  '1f485-1f3fe': [8, 7, 22],
  '1f485-1f3ff': [8, 8, 22],
  '1f486': [4, 167],
  '1f486-1f3fb': [8, 11, 22],
  '1f486-1f3fb-2640': [8, 9, 22],
  '1f486-1f3fb-2642': [8, 10, 22],
  '1f486-1f3fc': [8, 14, 22],
  '1f486-1f3fc-2640': [8, 12, 22],
  '1f486-1f3fc-2642': [8, 13, 22],
  '1f486-1f3fd': [8, 17, 22],
  '1f486-1f3fd-2640': [8, 15, 22],
  '1f486-1f3fd-2642': [8, 16, 22],
  '1f486-1f3fe': [8, 20, 22],
  '1f486-1f3fe-2640': [8, 18, 22],
  '1f486-1f3fe-2642': [8, 19, 22],
  '1f486-1f3ff': [8, 23],
  '1f486-1f3ff-2640': [8, 21, 22],
  '1f486-1f3ff-2642': [8, 22, 22],
  '1f486-2640': [4, 165],
  '1f486-2642': [4, 166],
  '1f487': [4, 170],
  '1f487-1f3fb': [8, 23, 3],
  '1f487-1f3fb-2640': [8, 23, 1],
  '1f487-1f3fb-2642': [8, 23, 2],
  '1f487-1f3fc': [8, 23, 6],
  '1f487-1f3fc-2640': [8, 23, 4],
  '1f487-1f3fc-2642': [8, 23, 5],
  '1f487-1f3fd': [8, 23, 9],
  '1f487-1f3fd-2640': [8, 23, 7],
  '1f487-1f3fd-2642': [8, 23, 8],
  '1f487-1f3fe': [8, 23, 12],
  '1f487-1f3fe-2640': [8, 23, 10],
  '1f487-1f3fe-2642': [8, 23, 11],
  '1f487-1f3ff': [8, 23, 15],
  '1f487-1f3ff-2640': [8, 23, 13],
  '1f487-1f3ff-2642': [8, 23, 14],
  '1f487-2640': [4, 168],
  '1f487-2642': [4, 169],
  '1f488': [6, 18],
  '1f489': [6, 19],
  '1f48a': [6, 20],
  '1f48b': [4, 171],
  '1f48c': [6, 21],
  '1f48d': [4, 172],
  '1f48e': [6, 22],
  '1f48f': [4, 173],
  '1f490': [5, 115],
  '1f491': [4, 174],
  '1f492': [3, 46],
  '1f493': [0, 67],
  '1f494': [0, 68],
  '1f495': [0, 69],
  '1f496': [0, 70],
  '1f497': [0, 71],
  '1f498': [0, 72],
  '1f499': [0, 73],
  '1f49a': [0, 74],
  '1f49b': [0, 75],
  '1f49c': [0, 76],
  '1f49d': [0, 77],
  '1f49e': [0, 78],
  '1f49f': [0, 79],
  '1f4a0': [0, 80],
  '1f4a1': [6, 23],
  '1f4a2': [0, 81],
  '1f4a3': [6, 24],
  '1f4a4': [0, 82],
  '1f4a5': [5, 116],
  '1f4a6': [5, 117],
  '1f4a7': [5, 118],
  '1f4a8': [5, 119],
  '1f4a9': [4, 175],
  '1f4aa': [4, 176],
  '1f4aa-1f3fb': [8, 23, 16],
  '1f4aa-1f3fc': [8, 23, 17],
  '1f4aa-1f3fd': [8, 23, 18],
  '1f4aa-1f3fe': [8, 23, 19],
  '1f4aa-1f3ff': [8, 23, 20],
  '1f4ab': [5, 120],
  '1f4ac': [0, 83],
  '1f4ad': [0, 84],
  '1f4ae': [0, 85],
  '1f4af': [0, 86],
  '1f4b0': [6, 25],
  '1f4b1': [0, 87],
  '1f4b2': [0, 88],
  '1f4b3': [6, 26],
  '1f4b4': [6, 27],
  '1f4b5': [6, 28],
  '1f4b6': [6, 29],
  '1f4b7': [6, 30],
  '1f4b8': [6, 31],
  '1f4b9': [0, 89],
  '1f4ba': [3, 47],
  '1f4bb': [6, 32],
  '1f4bc': [4, 177],
  '1f4bd': [6, 33],
  '1f4be': [6, 34],
  '1f4bf': [6, 35],
  '1f4c0': [6, 36],
  '1f4c1': [6, 37],
  '1f4c2': [6, 38],
  '1f4c3': [6, 39],
  '1f4c4': [6, 40],
  '1f4c5': [6, 41],
  '1f4c6': [6, 42],
  '1f4c7': [6, 43],
  '1f4c8': [6, 44],
  '1f4c9': [6, 45],
  '1f4ca': [6, 46],
  '1f4cb': [6, 47],
  '1f4cc': [6, 48],
  '1f4cd': [6, 49],
  '1f4ce': [6, 50],
  '1f4cf': [6, 51],
  '1f4d0': [6, 52],
  '1f4d1': [6, 53],
  '1f4d2': [6, 54],
  '1f4d3': [6, 55],
  '1f4d4': [6, 56],
  '1f4d5': [6, 57],
  '1f4d6': [6, 58],
  '1f4d7': [6, 59],
  '1f4d8': [6, 60],
  '1f4d9': [6, 61],
  '1f4da': [6, 62],
  '1f4db': [0, 90],
  '1f4dc': [6, 63],
  '1f4dd': [6, 64],
  '1f4de': [6, 65],
  '1f4df': [6, 66],
  '1f4e0': [6, 67],
  '1f4e1': [6, 68],
  '1f4e2': [0, 91],
  '1f4e3': [0, 92],
  '1f4e4': [6, 69],
  '1f4e5': [6, 70],
  '1f4e6': [6, 71],
  '1f4e7': [6, 72],
  '1f4e8': [6, 73],
  '1f4e9': [6, 74],
  '1f4ea': [6, 75],
  '1f4eb': [6, 76],
  '1f4ec': [6, 77],
  '1f4ed': [6, 78],
  '1f4ee': [6, 79],
  '1f4ef': [6, 80],
  '1f4f0': [6, 81],
  '1f4f1': [6, 82],
  '1f4f2': [6, 83],
  '1f4f3': [0, 93],
  '1f4f4': [0, 94],
  '1f4f5': [0, 95],
  '1f4f6': [0, 96],
  '1f4f7': [6, 84],
  '1f4f8': [6, 85],
  '1f4f9': [6, 86],
  '1f4fa': [6, 87],
  '1f4fb': [6, 88],
  '1f4fc': [6, 89],
  '1f4fd': [6, 90],
  '1f4ff': [6, 91],
  '1f500': [0, 97],
  '1f501': [0, 98],
  '1f502': [0, 99],
  '1f503': [0, 100],
  '1f504': [0, 101],
  '1f505': [0, 102],
  '1f506': [0, 103],
  '1f507': [0, 104],
  '1f508': [0, 105],
  '1f509': [0, 106],
  '1f50a': [0, 107],
  '1f50b': [6, 92],
  '1f50c': [6, 93],
  '1f50d': [6, 94],
  '1f50e': [6, 95],
  '1f50f': [6, 96],
  '1f510': [6, 97],
  '1f511': [6, 98],
  '1f512': [6, 99],
  '1f513': [6, 100],
  '1f514': [0, 108],
  '1f515': [0, 109],
  '1f516': [6, 101],
  '1f517': [6, 102],
  '1f518': [0, 110],
  '1f519': [0, 111],
  '1f51a': [0, 112],
  '1f51b': [0, 113],
  '1f51c': [0, 114],
  '1f51d': [0, 115],
  '1f51e': [0, 116],
  '1f51f': [0, 117],
  '1f520': [0, 118],
  '1f521': [0, 119],
  '1f522': [0, 120],
  '1f523': [0, 121],
  '1f524': [0, 122],
  '1f525': [5, 121],
  '1f526': [6, 103],
  '1f527': [6, 104],
  '1f528': [6, 105],
  '1f529': [6, 106],
  '1f52a': [6, 107],
  '1f52b': [6, 108],
  '1f52c': [6, 109],
  '1f52d': [6, 110],
  '1f52e': [6, 111],
  '1f52f': [0, 123],
  '1f530': [0, 124],
  '1f531': [0, 125],
  '1f532': [0, 126],
  '1f533': [0, 127],
  '1f534': [0, 128],
  '1f535': [0, 129],
  '1f536': [0, 130],
  '1f537': [0, 131],
  '1f538': [0, 132],
  '1f539': [0, 133],
  '1f53a': [0, 134],
  '1f53b': [0, 135],
  '1f53c': [0, 136],
  '1f53d': [0, 137],
  '1f549': [0, 138],
  '1f54a': [5, 122],
  '1f54b': [3, 48],
  '1f54c': [3, 49],
  '1f54d': [3, 50],
  '1f54e': [0, 139],
  '1f550': [0, 140],
  '1f551': [0, 141],
  '1f552': [0, 142],
  '1f553': [0, 143],
  '1f554': [0, 144],
  '1f555': [0, 145],
  '1f556': [0, 146],
  '1f557': [0, 147],
  '1f558': [0, 148],
  '1f559': [0, 149],
  '1f55a': [0, 150],
  '1f55b': [0, 151],
  '1f55c': [0, 152],
  '1f55d': [0, 153],
  '1f55e': [0, 154],
  '1f55f': [0, 155],
  '1f560': [0, 156],
  '1f561': [0, 157],
  '1f562': [0, 158],
  '1f563': [0, 159],
  '1f564': [0, 160],
  '1f565': [0, 161],
  '1f566': [0, 162],
  '1f567': [0, 163],
  '1f56f': [6, 112],
  '1f570': [6, 113],
  '1f573': [6, 114],
  '1f574': [4, 178],
  '1f574-1f3fb': [8, 23, 21],
  '1f574-1f3fc': [8, 23, 22],
  '1f574-1f3fd': [8, 0, 23],
  '1f574-1f3fe': [8, 1, 23],
  '1f574-1f3ff': [8, 2, 23],
  '1f575': [4, 181],
  '1f575-1f3fb': [8, 5, 23],
  '1f575-1f3fb-2640': [8, 3, 23],
  '1f575-1f3fb-2642': [8, 4, 23],
  '1f575-1f3fc': [8, 8, 23],
  '1f575-1f3fc-2640': [8, 6, 23],
  '1f575-1f3fc-2642': [8, 7, 23],
  '1f575-1f3fd': [8, 11, 23],
  '1f575-1f3fd-2640': [8, 9, 23],
  '1f575-1f3fd-2642': [8, 10, 23],
  '1f575-1f3fe': [8, 14, 23],
  '1f575-1f3fe-2640': [8, 12, 23],
  '1f575-1f3fe-2642': [8, 13, 23],
  '1f575-1f3ff': [8, 17, 23],
  '1f575-1f3ff-2640': [8, 15, 23],
  '1f575-1f3ff-2642': [8, 16, 23],
  '1f575-2640': [4, 179],
  '1f575-2642': [4, 180],
  '1f576': [4, 182],
  '1f577': [5, 123],
  '1f578': [5, 124],
  '1f579': [6, 115],
  '1f57a': [4, 183],
  '1f57a-1f3fb': [8, 18, 23],
  '1f57a-1f3fc': [8, 19, 23],
  '1f57a-1f3fd': [8, 20, 23],
  '1f57a-1f3fe': [8, 21, 23],
  '1f57a-1f3ff': [8, 22, 23],
  '1f587': [6, 116],
  '1f58a': [6, 117],
  '1f58b': [6, 118],
  '1f58c': [6, 119],
  '1f58d': [6, 120],
  '1f590': [4, 184],
  '1f590-1f3fb': [8, 23, 23],
  '1f590-1f3fc': [8, 24],
  '1f590-1f3fd': [8, 24, 1],
  '1f590-1f3fe': [8, 24, 2],
  '1f590-1f3ff': [8, 24, 3],
  '1f595': [4, 185],
  '1f595-1f3fb': [8, 24, 4],
  '1f595-1f3fc': [8, 24, 5],
  '1f595-1f3fd': [8, 24, 6],
  '1f595-1f3fe': [8, 24, 7],
  '1f595-1f3ff': [8, 24, 8],
  '1f596': [4, 186],
  '1f596-1f3fb': [8, 24, 9],
  '1f596-1f3fc': [8, 24, 10],
  '1f596-1f3fd': [8, 24, 11],
  '1f596-1f3fe': [8, 24, 12],
  '1f596-1f3ff': [8, 24, 13],
  '1f5a4': [0, 164],
  '1f5a5': [6, 121],
  '1f5a8': [6, 122],
  '1f5b1': [6, 123],
  '1f5b2': [6, 124],
  '1f5bc': [6, 125],
  '1f5c2': [6, 126],
  '1f5c3': [6, 127],
  '1f5c4': [6, 128],
  '1f5d1': [6, 129],
  '1f5d2': [6, 130],
  '1f5d3': [6, 131],
  '1f5dc': [6, 132],
  '1f5dd': [6, 133],
  '1f5de': [6, 134],
  '1f5e1': [6, 135],
  '1f5e3': [4, 187],
  '1f5e8': [0, 165],
  '1f5ef': [0, 166],
  '1f5f3': [6, 136],
  '1f5fa': [3, 51],
  '1f5fb': [3, 52],
  '1f5fc': [3, 53],
  '1f5fd': [3, 54],
  '1f5fe': [3, 55],
  '1f5ff': [3, 56],
  '1f600': [4, 188],
  '1f601': [4, 189],
  '1f602': [4, 190],
  '1f603': [4, 191],
  '1f604': [4, 192],
  '1f605': [4, 193],
  '1f606': [4, 194],
  '1f607': [4, 195],
  '1f608': [4, 196],
  '1f609': [4, 197],
  '1f60a': [4, 198],
  '1f60b': [4, 199],
  '1f60c': [4, 200],
  '1f60d': [4, 201],
  '1f60e': [4, 202],
  '1f60f': [4, 203],
  '1f610': [4, 204],
  '1f611': [4, 205],
  '1f612': [4, 206],
  '1f613': [4, 207],
  '1f614': [4, 208],
  '1f615': [4, 209],
  '1f616': [4, 210],
  '1f617': [4, 211],
  '1f618': [4, 212],
  '1f619': [4, 213],
  '1f61a': [4, 214],
  '1f61b': [4, 215],
  '1f61c': [4, 216],
  '1f61d': [4, 217],
  '1f61e': [4, 218],
  '1f61f': [4, 219],
  '1f620': [4, 220],
  '1f621': [4, 221],
  '1f622': [4, 222],
  '1f623': [4, 223],
  '1f624': [4, 224],
  '1f625': [4, 225],
  '1f626': [4, 226],
  '1f627': [4, 227],
  '1f628': [4, 228],
  '1f629': [4, 229],
  '1f62a': [4, 230],
  '1f62b': [4, 231],
  '1f62c': [4, 232],
  '1f62d': [4, 233],
  '1f62e': [4, 234],
  '1f62f': [4, 235],
  '1f630': [4, 236],
  '1f631': [4, 237],
  '1f632': [4, 238],
  '1f633': [4, 239],
  '1f634': [4, 240],
  '1f635': [4, 241],
  '1f636': [4, 242],
  '1f637': [4, 243],
  '1f638': [4, 244],
  '1f639': [4, 245],
  '1f63a': [4, 246],
  '1f63b': [4, 247],
  '1f63c': [4, 248],
  '1f63d': [4, 249],
  '1f63e': [4, 250],
  '1f63f': [4, 251],
  '1f640': [4, 252],
  '1f641': [4, 253],
  '1f642': [4, 254],
  '1f643': [4, 255],
  '1f644': [4, 256],
  '1f645': [4, 259],
  '1f645-1f3fb': [8, 24, 16],
  '1f645-1f3fb-2640': [8, 24, 14],
  '1f645-1f3fb-2642': [8, 24, 15],
  '1f645-1f3fc': [8, 24, 19],
  '1f645-1f3fc-2640': [8, 24, 17],
  '1f645-1f3fc-2642': [8, 24, 18],
  '1f645-1f3fd': [8, 24, 22],
  '1f645-1f3fd-2640': [8, 24, 20],
  '1f645-1f3fd-2642': [8, 24, 21],
  '1f645-1f3fe': [8, 1, 24],
  '1f645-1f3fe-2640': [8, 24, 23],
  '1f645-1f3fe-2642': [8, 0, 24],
  '1f645-1f3ff': [8, 4, 24],
  '1f645-1f3ff-2640': [8, 2, 24],
  '1f645-1f3ff-2642': [8, 3, 24],
  '1f645-2640': [4, 257],
  '1f645-2642': [4, 258],
  '1f646': [4, 262],
  '1f646-1f3fb': [8, 7, 24],
  '1f646-1f3fb-2640': [8, 5, 24],
  '1f646-1f3fb-2642': [8, 6, 24],
  '1f646-1f3fc': [8, 10, 24],
  '1f646-1f3fc-2640': [8, 8, 24],
  '1f646-1f3fc-2642': [8, 9, 24],
  '1f646-1f3fd': [8, 13, 24],
  '1f646-1f3fd-2640': [8, 11, 24],
  '1f646-1f3fd-2642': [8, 12, 24],
  '1f646-1f3fe': [8, 16, 24],
  '1f646-1f3fe-2640': [8, 14, 24],
  '1f646-1f3fe-2642': [8, 15, 24],
  '1f646-1f3ff': [8, 19, 24],
  '1f646-1f3ff-2640': [8, 17, 24],
  '1f646-1f3ff-2642': [8, 18, 24],
  '1f646-2640': [4, 260],
  '1f646-2642': [4, 261],
  '1f647': [4, 265],
  '1f647-1f3fb': [8, 22, 24],
  '1f647-1f3fb-2640': [8, 20, 24],
  '1f647-1f3fb-2642': [8, 21, 24],
  '1f647-1f3fc': [8, 25],
  '1f647-1f3fc-2640': [8, 23, 24],
  '1f647-1f3fc-2642': [8, 24, 24],
  '1f647-1f3fd': [8, 0],
  '1f647-1f3fd-2640': [8, 25, 1],
  '1f647-1f3fd-2642': [8, 25, 2],
  '1f647-1f3fe': [8, 25, 6],
  '1f647-1f3fe-2640': [8, 25, 4],
  '1f647-1f3fe-2642': [8, 25, 5],
  '1f647-1f3ff': [8, 25, 9],
  '1f647-1f3ff-2640': [8, 25, 7],
  '1f647-1f3ff-2642': [8, 25, 8],
  '1f647-2640': [4, 263],
  '1f647-2642': [4, 264],
  '1f648': [5, 125],
  '1f649': [5, 126],
  '1f64a': [5, 127],
  '1f64b': [4, 268],
  '1f64b-1f3fb': [8, 25, 12],
  '1f64b-1f3fb-2640': [8, 25, 10],
  '1f64b-1f3fb-2642': [8, 25, 11],
  '1f64b-1f3fc': [8, 25, 15],
  '1f64b-1f3fc-2640': [8, 25, 13],
  '1f64b-1f3fc-2642': [8, 25, 14],
  '1f64b-1f3fd': [8, 25, 18],
  '1f64b-1f3fd-2640': [8, 25, 16],
  '1f64b-1f3fd-2642': [8, 25, 17],
  '1f64b-1f3fe': [8, 25, 21],
  '1f64b-1f3fe-2640': [8, 25, 19],
  '1f64b-1f3fe-2642': [8, 25, 20],
  '1f64b-1f3ff': [8, 25, 24],
  '1f64b-1f3ff-2640': [8, 25, 22],
  '1f64b-1f3ff-2642': [8, 25, 23],
  '1f64b-2640': [4, 266],
  '1f64b-2642': [4, 267],
  '1f64c': [4, 269],
  '1f64c-1f3fb': [8, 0, 25],
  '1f64c-1f3fc': [8, 1, 25],
  '1f64c-1f3fd': [8, 2, 25],
  '1f64c-1f3fe': [8, 3, 25],
  '1f64c-1f3ff': [8, 4, 25],
  '1f64d': [4, 272],
  '1f64d-1f3fb': [8, 7, 25],
  '1f64d-1f3fb-2640': [8, 5, 25],
  '1f64d-1f3fb-2642': [8, 6, 25],
  '1f64d-1f3fc': [8, 10, 25],
  '1f64d-1f3fc-2640': [8, 8, 25],
  '1f64d-1f3fc-2642': [8, 9, 25],
  '1f64d-1f3fd': [8, 13, 25],
  '1f64d-1f3fd-2640': [8, 11, 25],
  '1f64d-1f3fd-2642': [8, 12, 25],
  '1f64d-1f3fe': [8, 16, 25],
  '1f64d-1f3fe-2640': [8, 14, 25],
  '1f64d-1f3fe-2642': [8, 15, 25],
  '1f64d-1f3ff': [8, 19, 25],
  '1f64d-1f3ff-2640': [8, 17, 25],
  '1f64d-1f3ff-2642': [8, 18, 25],
  '1f64d-2640': [4, 270],
  '1f64d-2642': [4, 271],
  '1f64e': [4, 275],
  '1f64e-1f3fb': [8, 22, 25],
  '1f64e-1f3fb-2640': [8, 20, 25],
  '1f64e-1f3fb-2642': [8, 21, 25],
  '1f64e-1f3fc': [8, 25, 25],
  '1f64e-1f3fc-2640': [8, 23, 25],
  '1f64e-1f3fc-2642': [8, 24, 25],
  '1f64e-1f3fd': [8, 26, 2],
  '1f64e-1f3fd-2640': [8, 26],
  '1f64e-1f3fd-2642': [8, 26, 1],
  '1f64e-1f3fe': [8, 26, 5],
  '1f64e-1f3fe-2640': [8, 26, 3],
  '1f64e-1f3fe-2642': [8, 26, 4],
  '1f64e-1f3ff': [8, 26, 8],
  '1f64e-1f3ff-2640': [8, 26, 6],
  '1f64e-1f3ff-2642': [8, 26, 7],
  '1f64e-2640': [4, 273],
  '1f64e-2642': [4, 274],
  '1f64f': [4, 276],
  '1f64f-1f3fb': [8, 26, 9],
  '1f64f-1f3fc': [8, 26, 10],
  '1f64f-1f3fd': [8, 26, 11],
  '1f64f-1f3fe': [8, 26, 12],
  '1f64f-1f3ff': [8, 26, 13],
  '1f680': [3, 57],
  '1f681': [3, 58],
  '1f682': [3, 59],
  '1f683': [3, 60],
  '1f684': [3, 61],
  '1f685': [3, 62],
  '1f686': [3, 63],
  '1f687': [3, 64],
  '1f688': [3, 65],
  '1f689': [3, 66],
  '1f68a': [3, 67],
  '1f68b': [3, 68],
  '1f68c': [3, 69],
  '1f68d': [3, 70],
  '1f68e': [3, 71],
  '1f68f': [3, 72],
  '1f690': [3, 73],
  '1f691': [3, 74],
  '1f692': [3, 75],
  '1f693': [3, 76],
  '1f694': [3, 77],
  '1f695': [3, 78],
  '1f696': [3, 79],
  '1f697': [3, 80],
  '1f698': [3, 81],
  '1f699': [3, 82],
  '1f69a': [3, 83],
  '1f69b': [3, 84],
  '1f69c': [3, 85],
  '1f69d': [3, 86],
  '1f69e': [3, 87],
  '1f69f': [3, 88],
  '1f6a0': [3, 89],
  '1f6a1': [3, 90],
  '1f6a2': [3, 91],
  '1f6a3': [9, 56],
  '1f6a3-1f3fb': [8, 26, 16],
  '1f6a3-1f3fb-2640': [8, 26, 14],
  '1f6a3-1f3fb-2642': [8, 26, 15],
  '1f6a3-1f3fc': [8, 26, 19],
  '1f6a3-1f3fc-2640': [8, 26, 17],
  '1f6a3-1f3fc-2642': [8, 26, 18],
  '1f6a3-1f3fd': [8, 26, 22],
  '1f6a3-1f3fd-2640': [8, 26, 20],
  '1f6a3-1f3fd-2642': [8, 26, 21],
  '1f6a3-1f3fe': [8, 26, 25],
  '1f6a3-1f3fe-2640': [8, 26, 23],
  '1f6a3-1f3fe-2642': [8, 26, 24],
  '1f6a3-1f3ff': [8, 2, 26],
  '1f6a3-1f3ff-2640': [8, 0, 26],
  '1f6a3-1f3ff-2642': [8, 1, 26],
  '1f6a3-2640': [9, 54],
  '1f6a3-2642': [9, 55],
  '1f6a4': [3, 92],
  '1f6a5': [3, 93],
  '1f6a6': [3, 94],
  '1f6a7': [3, 95],
  '1f6a8': [3, 96],
  '1f6a9': [2, 268],
  '1f6aa': [6, 137],
  '1f6ab': [0, 167],
  '1f6ac': [6, 138],
  '1f6ad': [0, 168],
  '1f6ae': [0, 169],
  '1f6af': [0, 170],
  '1f6b0': [6, 139],
  '1f6b1': [0, 171],
  '1f6b2': [3, 97],
  '1f6b3': [0, 172],
  '1f6b4': [9, 59],
  '1f6b4-1f3fb': [8, 5, 26],
  '1f6b4-1f3fb-2640': [8, 3, 26],
  '1f6b4-1f3fb-2642': [8, 4, 26],
  '1f6b4-1f3fc': [8, 8, 26],
  '1f6b4-1f3fc-2640': [8, 6, 26],
  '1f6b4-1f3fc-2642': [8, 7, 26],
  '1f6b4-1f3fd': [8, 11, 26],
  '1f6b4-1f3fd-2640': [8, 9, 26],
  '1f6b4-1f3fd-2642': [8, 10, 26],
  '1f6b4-1f3fe': [8, 14, 26],
  '1f6b4-1f3fe-2640': [8, 12, 26],
  '1f6b4-1f3fe-2642': [8, 13, 26],
  '1f6b4-1f3ff': [8, 17, 26],
  '1f6b4-1f3ff-2640': [8, 15, 26],
  '1f6b4-1f3ff-2642': [8, 16, 26],
  '1f6b4-2640': [9, 57],
  '1f6b4-2642': [9, 58],
  '1f6b5': [9, 62],
  '1f6b5-1f3fb': [8, 20, 26],
  '1f6b5-1f3fb-2640': [8, 18, 26],
  '1f6b5-1f3fb-2642': [8, 19, 26],
  '1f6b5-1f3fc': [8, 23, 26],
  '1f6b5-1f3fc-2640': [8, 21, 26],
  '1f6b5-1f3fc-2642': [8, 22, 26],
  '1f6b5-1f3fd': [8, 26, 26],
  '1f6b5-1f3fd-2640': [8, 24, 26],
  '1f6b5-1f3fd-2642': [8, 25, 26],
  '1f6b5-1f3fe': [8, 27, 2],
  '1f6b5-1f3fe-2640': [8, 27],
  '1f6b5-1f3fe-2642': [8, 27, 1],
  '1f6b5-1f3ff': [8, 27, 5],
  '1f6b5-1f3ff-2640': [8, 27, 3],
  '1f6b5-1f3ff-2642': [8, 27, 4],
  '1f6b5-2640': [9, 60],
  '1f6b5-2642': [9, 61],
  '1f6b6': [4, 279],
  '1f6b6-1f3fb': [8, 27, 8],
  '1f6b6-1f3fb-2640': [8, 27, 6],
  '1f6b6-1f3fb-2642': [8, 27, 7],
  '1f6b6-1f3fc': [8, 27, 11],
  '1f6b6-1f3fc-2640': [8, 27, 9],
  '1f6b6-1f3fc-2642': [8, 27, 10],
  '1f6b6-1f3fd': [8, 27, 14],
  '1f6b6-1f3fd-2640': [8, 27, 12],
  '1f6b6-1f3fd-2642': [8, 27, 13],
  '1f6b6-1f3fe': [8, 27, 17],
  '1f6b6-1f3fe-2640': [8, 27, 15],
  '1f6b6-1f3fe-2642': [8, 27, 16],
  '1f6b6-1f3ff': [8, 27, 20],
  '1f6b6-1f3ff-2640': [8, 27, 18],
  '1f6b6-1f3ff-2642': [8, 27, 19],
  '1f6b6-2640': [4, 277],
  '1f6b6-2642': [4, 278],
  '1f6b7': [0, 173],
  '1f6b8': [0, 174],
  '1f6b9': [0, 175],
  '1f6ba': [0, 176],
  '1f6bb': [0, 177],
  '1f6bc': [0, 178],
  '1f6bd': [6, 140],
  '1f6be': [0, 179],
  '1f6bf': [6, 141],
  '1f6c0': [6, 142],
  '1f6c0-1f3fb': [8, 27, 21],
  '1f6c0-1f3fc': [8, 27, 22],
  '1f6c0-1f3fd': [8, 27, 23],
  '1f6c0-1f3fe': [8, 27, 24],
  '1f6c0-1f3ff': [8, 27, 25],
  '1f6c1': [6, 143],
  '1f6c2': [0, 180],
  '1f6c3': [0, 181],
  '1f6c4': [0, 182],
  '1f6c5': [0, 183],
  '1f6cb': [6, 144],
  '1f6cc': [6, 145],
  '1f6cc-1f3fb': [8, 27, 26],
  '1f6cc-1f3fc': [8, 0, 27],
  '1f6cc-1f3fd': [8, 1, 27],
  '1f6cc-1f3fe': [8, 2, 27],
  '1f6cc-1f3ff': [8, 3, 27],
  '1f6cd': [6, 146],
  '1f6ce': [6, 147],
  '1f6cf': [6, 148],
  '1f6d0': [0, 184],
  '1f6d1': [0, 185],
  '1f6d2': [6, 149],
  '1f6e0': [6, 150],
  '1f6e1': [6, 151],
  '1f6e2': [6, 152],
  '1f6e3': [3, 98],
  '1f6e4': [3, 99],
  '1f6e5': [3, 100],
  '1f6e9': [3, 101],
  '1f6eb': [3, 102],
  '1f6ec': [3, 103],
  '1f6f0': [3, 104],
  '1f6f3': [3, 105],
  '1f6f4': [3, 106],
  '1f6f5': [3, 107],
  '1f6f6': [3, 108],
  '1f6f7': [9, 63],
  '1f6f8': [3, 109],
  '1f6f9': [9, 64],
  '1f910': [4, 280],
  '1f911': [4, 281],
  '1f912': [4, 282],
  '1f913': [4, 283],
  '1f914': [4, 284],
  '1f915': [4, 285],
  '1f916': [4, 286],
  '1f917': [4, 287],
  '1f918': [4, 288],
  '1f918-1f3fb': [8, 4, 27],
  '1f918-1f3fc': [8, 5, 27],
  '1f918-1f3fd': [8, 6, 27],
  '1f918-1f3fe': [8, 7, 27],
  '1f918-1f3ff': [8, 8, 27],
  '1f919': [4, 289],
  '1f919-1f3fb': [8, 9, 27],
  '1f919-1f3fc': [8, 10, 27],
  '1f919-1f3fd': [8, 11, 27],
  '1f919-1f3fe': [8, 12, 27],
  '1f919-1f3ff': [8, 13, 27],
  '1f91a': [4, 290],
  '1f91a-1f3fb': [8, 14, 27],
  '1f91a-1f3fc': [8, 15, 27],
  '1f91a-1f3fd': [8, 16, 27],
  '1f91a-1f3fe': [8, 17, 27],
  '1f91a-1f3ff': [8, 18, 27],
  '1f91b': [4, 291],
  '1f91b-1f3fb': [8, 19, 27],
  '1f91b-1f3fc': [8, 20, 27],
  '1f91b-1f3fd': [8, 21, 27],
  '1f91b-1f3fe': [8, 22, 27],
  '1f91b-1f3ff': [8, 23, 27],
  '1f91c': [4, 292],
  '1f91c-1f3fb': [8, 24, 27],
  '1f91c-1f3fc': [8, 25, 27],
  '1f91c-1f3fd': [8, 26, 27],
  '1f91c-1f3fe': [8, 27, 27],
  '1f91c-1f3ff': [8, 28],
  '1f91d': [4, 293],
  '1f91e': [4, 294],
  '1f91e-1f3fb': [8, 28, 1],
  '1f91e-1f3fc': [8, 28, 2],
  '1f91e-1f3fd': [8, 28, 3],
  '1f91e-1f3fe': [8, 28, 4],
  '1f91e-1f3ff': [8, 28, 5],
  '1f91f': [4, 295],
  '1f91f-1f3fb': [8, 28, 6],
  '1f91f-1f3fc': [8, 28, 7],
  '1f91f-1f3fd': [8, 28, 8],
  '1f91f-1f3fe': [8, 28, 9],
  '1f91f-1f3ff': [8, 28, 10],
  '1f920': [4, 296],
  '1f921': [4, 297],
  '1f922': [4, 298],
  '1f923': [4, 299],
  '1f924': [4, 300],
  '1f925': [4, 301],
  '1f926': [4, 304],
  '1f926-1f3fb': [8, 28, 13],
  '1f926-1f3fb-2640': [8, 28, 11],
  '1f926-1f3fb-2642': [8, 28, 12],
  '1f926-1f3fc': [8, 28, 16],
  '1f926-1f3fc-2640': [8, 28, 14],
  '1f926-1f3fc-2642': [8, 28, 15],
  '1f926-1f3fd': [8, 28, 19],
  '1f926-1f3fd-2640': [8, 28, 17],
  '1f926-1f3fd-2642': [8, 28, 18],
  '1f926-1f3fe': [8, 28, 22],
  '1f926-1f3fe-2640': [8, 28, 20],
  '1f926-1f3fe-2642': [8, 28, 21],
  '1f926-1f3ff': [8, 28, 25],
  '1f926-1f3ff-2640': [8, 28, 23],
  '1f926-1f3ff-2642': [8, 28, 24],
  '1f926-2640': [4, 302],
  '1f926-2642': [4, 303],
  '1f927': [4, 305],
  '1f928': [4, 306],
  '1f929': [4, 307],
  '1f92a': [4, 308],
  '1f92b': [4, 309],
  '1f92c': [4, 310],
  '1f92d': [4, 311],
  '1f92e': [4, 312],
  '1f92f': [4, 313],
  '1f930': [4, 314],
  '1f930-1f3fb': [8, 28, 26],
  '1f930-1f3fc': [8, 28, 27],
  '1f930-1f3fd': [8, 0, 28],
  '1f930-1f3fe': [8, 1, 28],
  '1f930-1f3ff': [8, 2, 28],
  '1f931': [4, 315],
  '1f931-1f3fb': [8, 3, 28],
  '1f931-1f3fc': [8, 4, 28],
  '1f931-1f3fd': [8, 5, 28],
  '1f931-1f3fe': [8, 6, 28],
  '1f931-1f3ff': [8, 7, 28],
  '1f932': [4, 316],
  '1f932-1f3fb': [8, 8, 28],
  '1f932-1f3fc': [8, 9, 28],
  '1f932-1f3fd': [8, 10, 28],
  '1f932-1f3fe': [8, 11, 28],
  '1f932-1f3ff': [8, 12, 28],
  '1f933': [4, 317],
  '1f933-1f3fb': [8, 13, 28],
  '1f933-1f3fc': [8, 14, 28],
  '1f933-1f3fd': [8, 15, 28],
  '1f933-1f3fe': [8, 16, 28],
  '1f933-1f3ff': [8, 17, 28],
  '1f934': [4, 318],
  '1f934-1f3fb': [8, 18, 28],
  '1f934-1f3fc': [8, 19, 28],
  '1f934-1f3fd': [8, 20, 28],
  '1f934-1f3fe': [8, 21, 28],
  '1f934-1f3ff': [8, 22, 28],
  '1f935': [4, 319],
  '1f935-1f3fb': [8, 23, 28],
  '1f935-1f3fc': [8, 24, 28],
  '1f935-1f3fd': [8, 25, 28],
  '1f935-1f3fe': [8, 26, 28],
  '1f935-1f3ff': [8, 27, 28],
  '1f936': [4, 320],
  '1f936-1f3fb': [8, 28, 28],
  '1f936-1f3fc': [8, 29],
  '1f936-1f3fd': [8, 29, 1],
  '1f936-1f3fe': [8, 29, 2],
  '1f936-1f3ff': [8, 29, 3],
  '1f937': [4, 323],
  '1f937-1f3fb': [8, 29, 6],
  '1f937-1f3fb-2640': [8, 29, 4],
  '1f937-1f3fb-2642': [8, 29, 5],
  '1f937-1f3fc': [8, 29, 9],
  '1f937-1f3fc-2640': [8, 29, 7],
  '1f937-1f3fc-2642': [8, 29, 8],
  '1f937-1f3fd': [8, 29, 12],
  '1f937-1f3fd-2640': [8, 29, 10],
  '1f937-1f3fd-2642': [8, 29, 11],
  '1f937-1f3fe': [8, 29, 15],
  '1f937-1f3fe-2640': [8, 29, 13],
  '1f937-1f3fe-2642': [8, 29, 14],
  '1f937-1f3ff': [8, 29, 18],
  '1f937-1f3ff-2640': [8, 29, 16],
  '1f937-1f3ff-2642': [8, 29, 17],
  '1f937-2640': [4, 321],
  '1f937-2642': [4, 322],
  '1f938': [9, 67],
  '1f938-1f3fb': [8, 29, 21],
  '1f938-1f3fb-2640': [8, 29, 19],
  '1f938-1f3fb-2642': [8, 29, 20],
  '1f938-1f3fc': [8, 29, 24],
  '1f938-1f3fc-2640': [8, 29, 22],
  '1f938-1f3fc-2642': [8, 29, 23],
  '1f938-1f3fd': [8, 29, 27],
  '1f938-1f3fd-2640': [8, 29, 25],
  '1f938-1f3fd-2642': [8, 29, 26],
  '1f938-1f3fe': [8, 1, 29],
  '1f938-1f3fe-2640': [8, 29, 28],
  '1f938-1f3fe-2642': [8, 0, 29],
  '1f938-1f3ff': [8, 4, 29],
  '1f938-1f3ff-2640': [8, 2, 29],
  '1f938-1f3ff-2642': [8, 3, 29],
  '1f938-2640': [9, 65],
  '1f938-2642': [9, 66],
  '1f939': [9, 70],
  '1f939-1f3fb': [8, 7, 29],
  '1f939-1f3fb-2640': [8, 5, 29],
  '1f939-1f3fb-2642': [8, 6, 29],
  '1f939-1f3fc': [8, 10, 29],
  '1f939-1f3fc-2640': [8, 8, 29],
  '1f939-1f3fc-2642': [8, 9, 29],
  '1f939-1f3fd': [8, 13, 29],
  '1f939-1f3fd-2640': [8, 11, 29],
  '1f939-1f3fd-2642': [8, 12, 29],
  '1f939-1f3fe': [8, 16, 29],
  '1f939-1f3fe-2640': [8, 14, 29],
  '1f939-1f3fe-2642': [8, 15, 29],
  '1f939-1f3ff': [8, 19, 29],
  '1f939-1f3ff-2640': [8, 17, 29],
  '1f939-1f3ff-2642': [8, 18, 29],
  '1f939-2640': [9, 68],
  '1f939-2642': [9, 69],
  '1f93a': [9, 71],
  '1f93c': [9, 74],
  '1f93c-2640': [9, 72],
  '1f93c-2642': [9, 73],
  '1f93d': [9, 77],
  '1f93d-1f3fb': [8, 22, 29],
  '1f93d-1f3fb-2640': [8, 20, 29],
  '1f93d-1f3fb-2642': [8, 21, 29],
  '1f93d-1f3fc': [8, 25, 29],
  '1f93d-1f3fc-2640': [8, 23, 29],
  '1f93d-1f3fc-2642': [8, 24, 29],
  '1f93d-1f3fd': [8, 28, 29],
  '1f93d-1f3fd-2640': [8, 26, 29],
  '1f93d-1f3fd-2642': [8, 27, 29],
  '1f93d-1f3fe': [8, 30, 1],
  '1f93d-1f3fe-2640': [8, 29, 29],
  '1f93d-1f3fe-2642': [8, 30],
  '1f93d-1f3ff': [8, 30, 4],
  '1f93d-1f3ff-2640': [8, 30, 2],
  '1f93d-1f3ff-2642': [8, 30, 3],
  '1f93d-2640': [9, 75],
  '1f93d-2642': [9, 76],
  '1f93e': [9, 80],
  '1f93e-1f3fb': [8, 30, 7],
  '1f93e-1f3fb-2640': [8, 30, 5],
  '1f93e-1f3fb-2642': [8, 30, 6],
  '1f93e-1f3fc': [8, 30, 10],
  '1f93e-1f3fc-2640': [8, 30, 8],
  '1f93e-1f3fc-2642': [8, 30, 9],
  '1f93e-1f3fd': [8, 30, 13],
  '1f93e-1f3fd-2640': [8, 30, 11],
  '1f93e-1f3fd-2642': [8, 30, 12],
  '1f93e-1f3fe': [8, 30, 16],
  '1f93e-1f3fe-2640': [8, 30, 14],
  '1f93e-1f3fe-2642': [8, 30, 15],
  '1f93e-1f3ff': [8, 30, 19],
  '1f93e-1f3ff-2640': [8, 30, 17],
  '1f93e-1f3ff-2642': [8, 30, 18],
  '1f93e-2640': [9, 78],
  '1f93e-2642': [9, 79],
  '1f940': [5, 128],
  '1f941': [9, 81],
  '1f942': [7, 67],
  '1f943': [7, 68],
  '1f944': [7, 69],
  '1f945': [9, 82],
  '1f947': [9, 83],
  '1f948': [9, 84],
  '1f949': [9, 85],
  '1f94a': [9, 86],
  '1f94b': [9, 87],
  '1f94c': [9, 88],
  '1f94d': [9, 89],
  '1f94e': [9, 90],
  '1f94f': [9, 91],
  '1f950': [7, 70],
  '1f951': [7, 71],
  '1f952': [7, 72],
  '1f953': [7, 73],
  '1f954': [7, 74],
  '1f955': [7, 75],
  '1f956': [7, 76],
  '1f957': [7, 77],
  '1f958': [7, 78],
  '1f959': [7, 79],
  '1f95a': [7, 80],
  '1f95b': [7, 81],
  '1f95c': [7, 82],
  '1f95d': [7, 83],
  '1f95e': [7, 84],
  '1f95f': [7, 85],
  '1f960': [7, 86],
  '1f961': [7, 87],
  '1f962': [7, 88],
  '1f963': [7, 89],
  '1f964': [7, 90],
  '1f965': [7, 91],
  '1f966': [7, 92],
  '1f967': [7, 93],
  '1f968': [7, 94],
  '1f969': [7, 95],
  '1f96a': [7, 96],
  '1f96b': [7, 97],
  '1f96c': [7, 98],
  '1f96d': [7, 99],
  '1f96e': [7, 100],
  '1f96f': [7, 101],
  '1f970': [4, 324],
  '1f973': [4, 325],
  '1f974': [4, 326],
  '1f975': [4, 327],
  '1f976': [4, 328],
  '1f97a': [4, 329],
  '1f97c': [4, 330],
  '1f97d': [4, 331],
  '1f97e': [4, 332],
  '1f97f': [4, 333],
  '1f980': [5, 129],
  '1f981': [5, 130],
  '1f982': [5, 131],
  '1f983': [5, 132],
  '1f984': [5, 133],
  '1f985': [5, 134],
  '1f986': [5, 135],
  '1f987': [5, 136],
  '1f988': [5, 137],
  '1f989': [5, 138],
  '1f98a': [5, 139],
  '1f98b': [5, 140],
  '1f98c': [5, 141],
  '1f98d': [5, 142],
  '1f98e': [5, 143],
  '1f98f': [5, 144],
  '1f990': [5, 145],
  '1f991': [5, 146],
  '1f992': [5, 147],
  '1f993': [5, 148],
  '1f994': [5, 149],
  '1f995': [5, 150],
  '1f996': [5, 151],
  '1f997': [5, 152],
  '1f998': [5, 153],
  '1f999': [5, 154],
  '1f99a': [5, 155],
  '1f99b': [5, 156],
  '1f99c': [5, 157],
  '1f99d': [5, 158],
  '1f99e': [5, 159],
  '1f99f': [5, 160],
  '1f9a0': [5, 161],
  '1f9a1': [5, 162],
  '1f9a2': [5, 163],
  '1f9b0': [4, 334],
  '1f9b1': [4, 335],
  '1f9b2': [4, 336],
  '1f9b3': [4, 337],
  '1f9b4': [4, 338],
  '1f9b5': [4, 339],
  '1f9b5-1f3fb': [8, 30, 20],
  '1f9b5-1f3fc': [8, 30, 21],
  '1f9b5-1f3fd': [8, 30, 22],
  '1f9b5-1f3fe': [8, 30, 23],
  '1f9b5-1f3ff': [8, 30, 24],
  '1f9b6': [4, 340],
  '1f9b6-1f3fb': [8, 30, 25],
  '1f9b6-1f3fc': [8, 30, 26],
  '1f9b6-1f3fd': [8, 30, 27],
  '1f9b6-1f3fe': [8, 30, 28],
  '1f9b6-1f3ff': [8, 30, 29],
  '1f9b7': [4, 341],
  '1f9b8': [4, 344],
  '1f9b8-1f3fb': [8, 2, 30],
  '1f9b8-1f3fb-2640': [8, 0, 30],
  '1f9b8-1f3fb-2642': [8, 1, 30],
  '1f9b8-1f3fc': [8, 5, 30],
  '1f9b8-1f3fc-2640': [8, 3, 30],
  '1f9b8-1f3fc-2642': [8, 4, 30],
  '1f9b8-1f3fd': [8, 8, 30],
  '1f9b8-1f3fd-2640': [8, 6, 30],
  '1f9b8-1f3fd-2642': [8, 7, 30],
  '1f9b8-1f3fe': [8, 11, 30],
  '1f9b8-1f3fe-2640': [8, 9, 30],
  '1f9b8-1f3fe-2642': [8, 10, 30],
  '1f9b8-1f3ff': [8, 14, 30],
  '1f9b8-1f3ff-2640': [8, 12, 30],
  '1f9b8-1f3ff-2642': [8, 13, 30],
  '1f9b8-2640': [4, 342],
  '1f9b8-2642': [4, 343],
  '1f9b9': [4, 347],
  '1f9b9-1f3fb': [8, 17, 30],
  '1f9b9-1f3fb-2640': [8, 15, 30],
  '1f9b9-1f3fb-2642': [8, 16, 30],
  '1f9b9-1f3fc': [8, 20, 30],
  '1f9b9-1f3fc-2640': [8, 18, 30],
  '1f9b9-1f3fc-2642': [8, 19, 30],
  '1f9b9-1f3fd': [8, 23, 30],
  '1f9b9-1f3fd-2640': [8, 21, 30],
  '1f9b9-1f3fd-2642': [8, 22, 30],
  '1f9b9-1f3fe': [8, 26, 30],
  '1f9b9-1f3fe-2640': [8, 24, 30],
  '1f9b9-1f3fe-2642': [8, 25, 30],
  '1f9b9-1f3ff': [8, 29, 30],
  '1f9b9-1f3ff-2640': [8, 27, 30],
  '1f9b9-1f3ff-2642': [8, 28, 30],
  '1f9b9-2640': [4, 345],
  '1f9b9-2642': [4, 346],
  '1f9c0': [7, 103],
  '1f9c1': [7, 104],
  '1f9c2': [7, 105],
  '1f9d0': [4, 348],
  '1f9d1': [4, 349],
  '1f9d1-1f3fb': [8, 30, 30],
  '1f9d1-1f3fc': [8, 31],
  '1f9d1-1f3fd': [8, 31, 1],
  '1f9d1-1f3fe': [8, 31, 2],
  '1f9d1-1f3ff': [8, 31, 3],
  '1f9d2': [4, 350],
  '1f9d2-1f3fb': [8, 31, 4],
  '1f9d2-1f3fc': [8, 31, 5],
  '1f9d2-1f3fd': [8, 31, 6],
  '1f9d2-1f3fe': [8, 31, 7],
  '1f9d2-1f3ff': [8, 31, 8],
  '1f9d3': [4, 351],
  '1f9d3-1f3fb': [8, 31, 9],
  '1f9d3-1f3fc': [8, 31, 10],
  '1f9d3-1f3fd': [8, 31, 11],
  '1f9d3-1f3fe': [8, 31, 12],
  '1f9d3-1f3ff': [8, 31, 13],
  '1f9d4': [4, 352],
  '1f9d4-1f3fb': [8, 31, 14],
  '1f9d4-1f3fc': [8, 31, 15],
  '1f9d4-1f3fd': [8, 31, 16],
  '1f9d4-1f3fe': [8, 31, 17],
  '1f9d4-1f3ff': [8, 31, 18],
  '1f9d5': [4, 353],
  '1f9d5-1f3fb': [8, 31, 19],
  '1f9d5-1f3fc': [8, 31, 20],
  '1f9d5-1f3fd': [8, 31, 21],
  '1f9d5-1f3fe': [8, 31, 22],
  '1f9d5-1f3ff': [8, 31, 23],
  '1f9d6': [4, 356],
  '1f9d6-1f3fb': [8, 31, 26],
  '1f9d6-1f3fb-2640': [8, 31, 24],
  '1f9d6-1f3fb-2642': [8, 31, 25],
  '1f9d6-1f3fc': [8, 31, 29],
  '1f9d6-1f3fc-2640': [8, 31, 27],
  '1f9d6-1f3fc-2642': [8, 31, 28],
  '1f9d6-1f3fd': [8, 1, 31],
  '1f9d6-1f3fd-2640': [8, 31, 30],
  '1f9d6-1f3fd-2642': [8, 0, 31],
  '1f9d6-1f3fe': [8, 4, 31],
  '1f9d6-1f3fe-2640': [8, 2, 31],
  '1f9d6-1f3fe-2642': [8, 3, 31],
  '1f9d6-1f3ff': [8, 7, 31],
  '1f9d6-1f3ff-2640': [8, 5, 31],
  '1f9d6-1f3ff-2642': [8, 6, 31],
  '1f9d6-2640': [4, 354],
  '1f9d6-2642': [4, 355],
  '1f9d7': [9, 94],
  '1f9d7-1f3fb': [8, 10, 31],
  '1f9d7-1f3fb-2640': [8, 8, 31],
  '1f9d7-1f3fb-2642': [8, 9, 31],
  '1f9d7-1f3fc': [8, 13, 31],
  '1f9d7-1f3fc-2640': [8, 11, 31],
  '1f9d7-1f3fc-2642': [8, 12, 31],
  '1f9d7-1f3fd': [8, 16, 31],
  '1f9d7-1f3fd-2640': [8, 14, 31],
  '1f9d7-1f3fd-2642': [8, 15, 31],
  '1f9d7-1f3fe': [8, 19, 31],
  '1f9d7-1f3fe-2640': [8, 17, 31],
  '1f9d7-1f3fe-2642': [8, 18, 31],
  '1f9d7-1f3ff': [8, 22, 31],
  '1f9d7-1f3ff-2640': [8, 20, 31],
  '1f9d7-1f3ff-2642': [8, 21, 31],
  '1f9d7-2640': [9, 92],
  '1f9d7-2642': [9, 93],
  '1f9d8': [9, 97],
  '1f9d8-1f3fb': [8, 25, 31],
  '1f9d8-1f3fb-2640': [8, 23, 31],
  '1f9d8-1f3fb-2642': [8, 24, 31],
  '1f9d8-1f3fc': [8, 28, 31],
  '1f9d8-1f3fc-2640': [8, 26, 31],
  '1f9d8-1f3fc-2642': [8, 27, 31],
  '1f9d8-1f3fd': [8, 31, 31],
  '1f9d8-1f3fd-2640': [8, 29, 31],
  '1f9d8-1f3fd-2642': [8, 30, 31],
  '1f9d8-1f3fe': [8, 32, 2],
  '1f9d8-1f3fe-2640': [8, 32],
  '1f9d8-1f3fe-2642': [8, 32, 1],
  '1f9d8-1f3ff': [8, 32, 5],
  '1f9d8-1f3ff-2640': [8, 32, 3],
  '1f9d8-1f3ff-2642': [8, 32, 4],
  '1f9d8-2640': [9, 95],
  '1f9d8-2642': [9, 96],
  '1f9d9': [4, 359],
  '1f9d9-1f3fb': [8, 32, 8],
  '1f9d9-1f3fb-2640': [8, 32, 6],
  '1f9d9-1f3fb-2642': [8, 32, 7],
  '1f9d9-1f3fc': [8, 32, 11],
  '1f9d9-1f3fc-2640': [8, 32, 9],
  '1f9d9-1f3fc-2642': [8, 32, 10],
  '1f9d9-1f3fd': [8, 32, 14],
  '1f9d9-1f3fd-2640': [8, 32, 12],
  '1f9d9-1f3fd-2642': [8, 32, 13],
  '1f9d9-1f3fe': [8, 32, 17],
  '1f9d9-1f3fe-2640': [8, 32, 15],
  '1f9d9-1f3fe-2642': [8, 32, 16],
  '1f9d9-1f3ff': [8, 32, 20],
  '1f9d9-1f3ff-2640': [8, 32, 18],
  '1f9d9-1f3ff-2642': [8, 32, 19],
  '1f9d9-2640': [4, 357],
  '1f9d9-2642': [4, 358],
  '1f9da': [4, 362],
  '1f9da-1f3fb': [8, 32, 23],
  '1f9da-1f3fb-2640': [8, 32, 21],
  '1f9da-1f3fb-2642': [8, 32, 22],
  '1f9da-1f3fc': [8, 32, 26],
  '1f9da-1f3fc-2640': [8, 32, 24],
  '1f9da-1f3fc-2642': [8, 32, 25],
  '1f9da-1f3fd': [8, 32, 29],
  '1f9da-1f3fd-2640': [8, 32, 27],
  '1f9da-1f3fd-2642': [8, 32, 28],
  '1f9da-1f3fe': [8, 0, 32],
  '1f9da-1f3fe-2640': [8, 32, 30],
  '1f9da-1f3fe-2642': [8, 32, 31],
  '1f9da-1f3ff': [8, 3, 32],
  '1f9da-1f3ff-2640': [8, 1, 32],
  '1f9da-1f3ff-2642': [8, 2, 32],
  '1f9da-2640': [4, 360],
  '1f9da-2642': [4, 361],
  '1f9db': [4, 365],
  '1f9db-1f3fb': [8, 6, 32],
  '1f9db-1f3fb-2640': [8, 4, 32],
  '1f9db-1f3fb-2642': [8, 5, 32],
  '1f9db-1f3fc': [8, 9, 32],
  '1f9db-1f3fc-2640': [8, 7, 32],
  '1f9db-1f3fc-2642': [8, 8, 32],
  '1f9db-1f3fd': [8, 12, 32],
  '1f9db-1f3fd-2640': [8, 10, 32],
  '1f9db-1f3fd-2642': [8, 11, 32],
  '1f9db-1f3fe': [8, 15, 32],
  '1f9db-1f3fe-2640': [8, 13, 32],
  '1f9db-1f3fe-2642': [8, 14, 32],
  '1f9db-1f3ff': [8, 18, 32],
  '1f9db-1f3ff-2640': [8, 16, 32],
  '1f9db-1f3ff-2642': [8, 17, 32],
  '1f9db-2640': [4, 363],
  '1f9db-2642': [4, 364],
  '1f9dc': [4, 368],
  '1f9dc-1f3fb': [8, 21, 32],
  '1f9dc-1f3fb-2640': [8, 19, 32],
  '1f9dc-1f3fb-2642': [8, 20, 32],
  '1f9dc-1f3fc': [8, 24, 32],
  '1f9dc-1f3fc-2640': [8, 22, 32],
  '1f9dc-1f3fc-2642': [8, 23, 32],
  '1f9dc-1f3fd': [8, 27, 32],
  '1f9dc-1f3fd-2640': [8, 25, 32],
  '1f9dc-1f3fd-2642': [8, 26, 32],
  '1f9dc-1f3fe': [8, 30, 32],
  '1f9dc-1f3fe-2640': [8, 28, 32],
  '1f9dc-1f3fe-2642': [8, 29, 32],
  '1f9dc-1f3ff': [8, 33],
  '1f9dc-1f3ff-2640': [8, 31, 32],
  '1f9dc-1f3ff-2642': [8, 32, 32],
  '1f9dc-2640': [4, 366],
  '1f9dc-2642': [4, 367],
  '1f9dd': [4, 371],
  '1f9dd-1f3fb': [8, 33, 3],
  '1f9dd-1f3fb-2640': [8, 33, 1],
  '1f9dd-1f3fb-2642': [8, 33, 2],
  '1f9dd-1f3fc': [8, 33, 6],
  '1f9dd-1f3fc-2640': [8, 33, 4],
  '1f9dd-1f3fc-2642': [8, 33, 5],
  '1f9dd-1f3fd': [8, 33, 9],
  '1f9dd-1f3fd-2640': [8, 33, 7],
  '1f9dd-1f3fd-2642': [8, 33, 8],
  '1f9dd-1f3fe': [8, 33, 12],
  '1f9dd-1f3fe-2640': [8, 33, 10],
  '1f9dd-1f3fe-2642': [8, 33, 11],
  '1f9dd-1f3ff': [8, 33, 15],
  '1f9dd-1f3ff-2640': [8, 33, 13],
  '1f9dd-1f3ff-2642': [8, 33, 14],
  '1f9dd-2640': [4, 369],
  '1f9dd-2642': [4, 370],
  '1f9de': [4, 374],
  '1f9de-2640': [4, 372],
  '1f9de-2642': [4, 373],
  '1f9df': [4, 377],
  '1f9df-2640': [4, 375],
  '1f9df-2642': [4, 376],
  '1f9e0': [4, 378],
  '1f9e1': [0, 186],
  '1f9e2': [4, 379],
  '1f9e3': [4, 380],
  '1f9e4': [4, 381],
  '1f9e5': [4, 382],
  '1f9e6': [4, 383],
  '1f9e7': [6, 154],
  '1f9e8': [3, 110],
  '1f9e9': [6, 156],
  '1f9ea': [6, 157],
  '1f9eb': [6, 158],
  '1f9ec': [6, 159],
  '1f9ed': [6, 160],
  '1f9ee': [6, 161],
  '1f9ef': [6, 162],
  '1f9f0': [6, 163],
  '1f9f1': [6, 164],
  '1f9f2': [6, 165],
  '1f9f3': [3, 111],
  '1f9f4': [6, 166],
  '1f9f5': [6, 167],
  '1f9f6': [6, 168],
  '1f9f7': [6, 169],
  '1f9f8': [6, 170],
  '1f9f9': [6, 171],
  '1f9fa': [6, 172],
  '1f9fb': [6, 173],
  '1f9fc': [6, 174],
  '1f9fd': [6, 175],
  '1f9fe': [6, 176],
  '1f9ff': [6, 177],
  '203c': [0, 187],
  '2049': [0, 188],
  '2122': [0, 189],
  '2139': [0, 190],
  '2194': [0, 191],
  '2195': [0, 192],
  '2196': [0, 193],
  '2197': [0, 194],
  '2198': [0, 195],
  '2199': [0, 196],
  '21a9': [0, 197],
  '21aa': [0, 198],
  '231a': [6, 178],
  '231b': [6, 179],
  '2328': [6, 180],
  '23cf': [0, 199],
  '23e9': [0, 200],
  '23ea': [0, 201],
  '23eb': [0, 202],
  '23ec': [0, 203],
  '23ed': [0, 204],
  '23ee': [0, 205],
  '23ef': [0, 206],
  '23f0': [6, 181],
  '23f1': [6, 182],
  '23f2': [6, 183],
  '23f3': [6, 184],
  '23f8': [0, 207],
  '23f9': [0, 208],
  '23fa': [0, 209],
  '24c2': [0, 210],
  '25aa': [0, 211],
  '25ab': [0, 212],
  '25b6': [0, 213],
  '25c0': [0, 214],
  '25fb': [0, 215],
  '25fc': [0, 216],
  '25fd': [0, 217],
  '25fe': [0, 218],
  '2600': [5, 164],
  '2601': [5, 165],
  '2602': [5, 166],
  '2603': [5, 167],
  '2604': [5, 168],
  '260e': [6, 185],
  '2611': [0, 219],
  '2614': [5, 169],
  '2615': [7, 106],
  '2618': [5, 170],
  '261d': [4, 387],
  '261d-1f3fb': [8, 33, 16],
  '261d-1f3fc': [8, 33, 17],
  '261d-1f3fd': [8, 33, 18],
  '261d-1f3fe': [8, 33, 19],
  '261d-1f3ff': [8, 33, 20],
  '2620': [4, 388],
  '2622': [0, 220],
  '2623': [0, 221],
  '2626': [0, 222],
  '262a': [0, 223],
  '262e': [0, 224],
  '262f': [0, 225],
  '2638': [0, 226],
  '2639': [4, 389],
  '263a': [4, 390],
  '2640': [0, 227],
  '2642': [0, 228],
  '2648': [0, 229],
  '2649': [0, 230],
  '264a': [0, 231],
  '264b': [0, 232],
  '264c': [0, 233],
  '264d': [0, 234],
  '264e': [0, 235],
  '264f': [0, 236],
  '2650': [0, 237],
  '2651': [0, 238],
  '2652': [0, 239],
  '2653': [0, 240],
  '265f': [6, 186],
  '2660': [0, 241],
  '2663': [0, 242],
  '2665': [0, 243],
  '2666': [0, 244],
  '2668': [0, 245],
  '267b': [0, 246],
  '267e': [0, 247],
  '267f': [0, 248],
  '2692': [6, 187],
  '2693': [3, 112],
  '2694': [6, 188],
  '2695': [0, 249],
  '2696': [6, 189],
  '2697': [6, 190],
  '2699': [6, 191],
  '269b': [0, 250],
  '269c': [0, 251],
  '26a0': [0, 252],
  '26a1': [5, 171],
  '26aa': [0, 253],
  '26ab': [0, 254],
  '26b0': [6, 192],
  '26b1': [6, 193],
  '26bd': [9, 100],
  '26be': [9, 101],
  '26c4': [5, 172],
  '26c5': [5, 173],
  '26c8': [5, 174],
  '26ce': [0, 255],
  '26cf': [6, 194],
  '26d1': [4, 391],
  '26d3': [6, 195],
  '26d4': [0, 256],
  '26e9': [3, 113],
  '26ea': [3, 114],
  '26f0': [3, 115],
  '26f1': [3, 116],
  '26f2': [3, 117],
  '26f3': [9, 102],
  '26f4': [3, 118],
  '26f5': [3, 119],
  '26f7': [9, 103],
  '26f8': [9, 104],
  '26f9': [9, 107],
  '26f9-1f3fb': [8, 33, 23],
  '26f9-1f3fb-2640': [8, 33, 21],
  '26f9-1f3fb-2642': [8, 33, 22],
  '26f9-1f3fc': [8, 33, 26],
  '26f9-1f3fc-2640': [8, 33, 24],
  '26f9-1f3fc-2642': [8, 33, 25],
  '26f9-1f3fd': [8, 33, 29],
  '26f9-1f3fd-2640': [8, 33, 27],
  '26f9-1f3fd-2642': [8, 33, 28],
  '26f9-1f3fe': [8, 33, 32],
  '26f9-1f3fe-2640': [8, 33, 30],
  '26f9-1f3fe-2642': [8, 33, 31],
  '26f9-1f3ff': [8, 2, 33],
  '26f9-1f3ff-2640': [8, 0, 33],
  '26f9-1f3ff-2642': [8, 1, 33],
  '26f9-2640': [9, 105],
  '26f9-2642': [9, 106],
  '26fa': [3, 120],
  '26fd': [3, 121],
  '2702': [6, 196],
  '2705': [0, 257],
  '2708': [3, 122],
  '2709': [6, 197],
  '270a': [4, 392],
  '270a-1f3fb': [8, 3, 33],
  '270a-1f3fc': [8, 4, 33],
  '270a-1f3fd': [8, 5, 33],
  '270a-1f3fe': [8, 6, 33],
  '270a-1f3ff': [8, 7, 33],
  '270b': [4, 393],
  '270b-1f3fb': [8, 8, 33],
  '270b-1f3fc': [8, 9, 33],
  '270b-1f3fd': [8, 10, 33],
  '270b-1f3fe': [8, 11, 33],
  '270b-1f3ff': [8, 12, 33],
  '270c': [4, 394],
  '270c-1f3fb': [8, 13, 33],
  '270c-1f3fc': [8, 14, 33],
  '270c-1f3fd': [8, 15, 33],
  '270c-1f3fe': [8, 16, 33],
  '270c-1f3ff': [8, 17, 33],
  '270d': [4, 395],
  '270d-1f3fb': [8, 18, 33],
  '270d-1f3fc': [8, 19, 33],
  '270d-1f3fd': [8, 20, 33],
  '270d-1f3fe': [8, 21, 33],
  '270d-1f3ff': [8, 22, 33],
  '270f': [6, 198],
  '2712': [6, 199],
  '2714': [0, 258],
  '2716': [0, 259],
  '271d': [0, 260],
  '2721': [0, 261],
  '2728': [5, 175],
  '2733': [0, 262],
  '2734': [0, 263],
  '2744': [5, 176],
  '2747': [0, 264],
  '274c': [0, 265],
  '274e': [0, 266],
  '2753': [0, 267],
  '2754': [0, 268],
  '2755': [0, 269],
  '2757': [0, 270],
  '2763': [0, 271],
  '2764': [0, 272],
  '2795': [0, 273],
  '2796': [0, 274],
  '2797': [0, 275],
  '27a1': [0, 276],
  '27b0': [0, 277],
  '27bf': [0, 278],
  '2934': [0, 279],
  '2935': [0, 280],
  '2b05': [0, 281],
  '2b06': [0, 282],
  '2b07': [0, 283],
  '2b1b': [0, 284],
  '2b1c': [0, 285],
  '2b50': [5, 177],
  '2b55': [0, 286],
  '3030': [0, 287],
  '303d': [0, 288],
  '3297': [0, 289],
  '3299': [0, 290] // ['people', ... // index === categoryID]

};
const categories = ['symbols', 'regional', 'flags', 'travel', 'people', 'nature', 'objects', 'food', 'diversity', 'activity']; // [
//   [cols, rows]  // index === categoryID
//                 // spriteSize = {width: cols * (iconSize + 1), height: rows * (iconSize + 1)}
// ]

const spriteSizes = [[291, 1], [26, 1], [269, 1], [123, 1], [396, 1], [178, 1], [200, 1], [107, 1], [34, 34], [108, 1]];
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/split.js
let CR = 0,
    Extend = 1,
    RegionalIndicator = 2,
    Other = 3,
    EBase = 4,
    EModifier = 5,
    ZWJ = 6,
    GlueAfterZWJ = 7,
    EBaseGAZ = 8; // BreakTypes

let NotBreak = 0,
    BreakStart = 1,
    Break = 2,
    BreakLastRegional = 3,
    BreakPenultimateRegional = 4; // Private function, gets a Unicode code point from a JavaScript UTF-16 string
// handling surrogate pairs appropriately

const codePointAt = (str, idx = 0) => {
  let code = str.charCodeAt(idx); // if a high surrogate

  if (0xD800 <= code && code <= 0xDBFF && idx < str.length - 1) {
    let hi = code,
        low = str.charCodeAt(idx + 1);

    if (0xDC00 <= low && low <= 0xDFFF) {
      return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
    }

    return hi;
  } // if a low surrogate


  if (0xDC00 <= code && code <= 0xDFFF && idx >= 1) {
    let hi = str.charCodeAt(idx - 1),
        low = code;

    if (0xD800 <= hi && hi <= 0xDBFF) {
      return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
    }

    return low;
  } //just return the char if an unmatched surrogate half or a
  //single-char codepoint


  return code;
}; // Private function, returns whether a break is allowed between the
// two given grapheme breaking classes


function split_ref(c) {
  return c === Extend;
}

function split_ref2(c) {
  return c === RegionalIndicator;
}

function split_ref3(c) {
  return c === RegionalIndicator;
}

function split_ref4(c) {
  return c === Extend;
}

function _ref5(c) {
  return c === Extend;
}

const shouldBreak = (start, mid, end) => {
  let all = [start];
  all.push.apply(all, mid);
  all.push(end);
  let previous = all[all.length - 2],
      next = end; // Lookahead terminator for:
  // GB10. (EBase | EBG) Extend* ?	EModifier

  let eModifierIndex = all.lastIndexOf(EModifier);

  if (eModifierIndex > 1 && Extend !== next && EBase !== next && EBaseGAZ !== next && all.slice(1, eModifierIndex).every(split_ref)) {
    return Break;
  } // Lookahead terminator for:
  // GB12. ^ (RI RI)* RI	?	RI
  // GB13. [^RI] (RI RI)* RI	?	RI


  let rIIndex = all.lastIndexOf(RegionalIndicator);

  if (rIIndex > 0 && all.slice(1, rIIndex).every(split_ref2) && RegionalIndicator !== previous) {
    if (all.filter(split_ref3).length % 2 === 1) {
      return BreakLastRegional;
    } else {
      return BreakPenultimateRegional;
    }
  } // GB4. (Control|CR|LF) ÷


  if (previous === CR) {
    return next === EModifier && mid.every(split_ref4) ? Break : BreakStart;
  } // GB5. ÷ (Control|CR|LF)
  else if (next === CR) {
      return BreakStart;
    } // GB9. X (Extend|ZWJ)
    else if (next === Extend || next === ZWJ) {
        return NotBreak;
      } // GB10. (EBase | EBG) Extend* ?	EModifier


  let previousNonExtendIndex = all.indexOf(Extend) > -1 ? all.lastIndexOf(Extend) - 1 : all.length - 2;

  if ((EBase === all[previousNonExtendIndex] || EBaseGAZ === all[previousNonExtendIndex]) && all.slice(previousNonExtendIndex + 1, -1).every(_ref5) && next === EModifier) {
    return NotBreak;
  } // GB11. ZWJ ? (GlueAfterZWJ | EBG)


  if (previous === ZWJ && (next === GlueAfterZWJ || next === EBaseGAZ)) {
    return NotBreak;
  } // GB12. ^ (RI RI)* RI ? RI
  // GB13. [^RI] (RI RI)* RI ? RI


  if (mid.indexOf(RegionalIndicator) > -1) {
    return Break;
  }

  if (previous === RegionalIndicator && next === RegionalIndicator) {
    return NotBreak;
  } // GB999. Any ? Any


  return BreakStart;
}; // Returns the next grapheme break in the string after the given index


const nextBreak = (string, index) => {
  if (index === void 0) {
    index = 0;
  }

  if (index < 0) {
    return 0;
  }

  if (index >= string.length - 1) {
    return string.length;
  }

  let prev = getGraphemeBreakProperty(codePointAt(string, index));
  let mid = [],
      i = index + 1,
      atPrev = string.charCodeAt(index);

  for (; i < string.length; i++) {
    const atCurr = string.charCodeAt(i); // check for already processed low surrogates

    if ( // is surrogate
    0xd800 <= atPrev && atPrev <= 0xdbff && 0xdc00 <= atCurr && atCurr <= 0xdfff) {
      continue;
    }

    let next = getGraphemeBreakProperty(codePointAt(string, i));

    if (shouldBreak(prev, mid, next) !== NotBreak) {
      return i;
    }

    mid.push(next);
    atPrev = atCurr;
  }

  return string.length;
}; //given a Unicode code point, determines this symbol's grapheme break property


const getGraphemeBreakProperty = code => {
  //grapheme break property for Unicode 10.0.0,
  //taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
  //and adapted to JavaScript rules
  if (0x000D === code) {
    // Cc       <control-000D>
    return CR;
  }

  if (0x200C === code || // Cf       ZERO WIDTH NON-JOINER
  0x20D0 <= code && code <= 0x20DC || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
  0x20DD <= code && code <= 0x20E0 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
  0x20E1 === code || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
  0x20E2 <= code && code <= 0x20E4 || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
  0x20E5 <= code && code <= 0x20F0 || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
  0xFE00 <= code && code <= 0xFE0F || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
  0x1DA00 <= code && code <= 0x1DA36 || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
  0x1DA3B <= code && code <= 0x1DA6C || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
  0x1DA75 === code || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
  0x1DA84 === code || // Mn       SIGNWRITING LOCATION HEAD NECK
  0xE0020 <= code && code <= 0xE007F || // Cf  [96] TAG SPACE..CANCEL TAG
  0xE0100 <= code && code <= 0xE01EF // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
  ) {
      return Extend;
    }

  if (0x1F1E6 <= code && code <= 0x1F1FF) {
    // So  [26] REGIONAL INDICATOR SYMBOL LETTER A..REGIONAL INDICATOR SYMBOL LETTER Z
    return RegionalIndicator;
  }

  if (0x261D === code || // So       WHITE UP POINTING INDEX
  0x26F9 === code || // So       PERSON WITH BALL
  0x270A <= code && code <= 0x270D || // So   [4] RAISED FIST..WRITING HAND
  0x1F385 === code || // So       FATHER CHRISTMAS
  0x1F3C2 <= code && code <= 0x1F3C4 || // So   [3] SNOWBOARDER..SURFER
  0x1F3C7 === code || // So       HORSE RACING
  0x1F3CA <= code && code <= 0x1F3CC || // So   [3] SWIMMER..GOLFER
  0x1F442 <= code && code <= 0x1F443 || // So   [2] EAR..NOSE
  0x1F446 <= code && code <= 0x1F450 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
  0x1F46E === code || // So       POLICE OFFICER
  0x1F470 <= code && code <= 0x1F478 || // So   [9] BRIDE WITH VEIL..PRINCESS
  0x1F47C === code || // So       BABY ANGEL
  0x1F481 <= code && code <= 0x1F483 || // So   [3] INFORMATION DESK PERSON..DANCER
  0x1F485 <= code && code <= 0x1F487 || // So   [3] NAIL POLISH..HAIRCUT
  0x1F4AA === code || // So       FLEXED BICEPS
  0x1F574 <= code && code <= 0x1F575 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
  0x1F57A === code || // So       MAN DANCING
  0x1F590 === code || // So       RAISED HAND WITH FINGERS SPLAYED
  0x1F595 <= code && code <= 0x1F596 || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN
  // MIDDLE AND RING FINGERS
  0x1F645 <= code && code <= 0x1F647 || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
  0x1F64B <= code && code <= 0x1F64F || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
  0x1F6A3 === code || // So       ROWBOAT
  0x1F6B4 <= code && code <= 0x1F6B6 || // So   [3] BICYCLIST..PEDESTRIAN
  0x1F6C0 === code || // So       BATH
  0x1F6CC === code || // So       SLEEPING ACCOMMODATION
  0x1F918 <= code && code <= 0x1F91C || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
  0x1F91E <= code && code <= 0x1F91F || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
  0x1F926 === code || // So       FACE PALM
  0x1F930 <= code && code <= 0x1F939 || // So  [10] PREGNANT WOMAN..JUGGLING
  0x1F93D <= code && code <= 0x1F93E || // So   [2] WATER POLO..HANDBALL
  0x1F9D1 <= code && code <= 0x1F9DD // So  [13] ADULT..ELF
  ) {
      return EBase;
    }

  if (0x1F3FB <= code && code <= 0x1F3FF) {
    // Sk   [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
    return EModifier;
  }

  if (0x200D === code) {
    // Cf       ZERO WIDTH JOINER
    return ZWJ;
  }

  if (0x2640 === code || // So       FEMALE SIGN
  0x2642 === code || // So       MALE SIGN
  0x2695 <= code && code <= 0x2696 || // So   [2] STAFF OF AESCULAPIUS..SCALES
  0x2708 === code || // So       AIRPLANE
  0x2764 === code || // So       HEAVY BLACK HEART
  0x1F308 === code || // So       RAINBOW
  0x1F33E === code || // So       EAR OF RICE
  0x1F373 === code || // So       COOKING
  0x1F393 === code || // So       GRADUATION CAP
  0x1F3A4 === code || // So       MICROPHONE
  0x1F3A8 === code || // So       ARTIST PALETTE
  0x1F3EB === code || // So       SCHOOL
  0x1F3ED === code || // So       FACTORY
  0x1F48B === code || // So       KISS MARK
  0x1F4BB <= code && code <= 0x1F4BC || // So   [2] PERSONAL COMPUTER..BRIEFCASE
  0x1F527 === code || // So       WRENCH
  0x1F52C === code || // So       MICROSCOPE
  0x1F5E8 === code || // So       LEFT SPEECH BUBBLE
  0x1F680 === code || // So       ROCKET
  0x1F692 === code // So       FIRE ENGINE
  ) {
      return GlueAfterZWJ;
    }

  if (0x1F466 <= code && code <= 0x1F469) {
    // So   [4] BOY..WOMAN)
    return EBaseGAZ;
  } //all unlisted characters have a grapheme break property of "Other"


  return Other;
};

const splitEmojis = str => {
  let res = [],
      index = 0,
      brk,
      length = str.length;

  while ((brk = nextBreak(str, index)) < length) {
    res.push(str.substring(index, brk));
    index = brk;
  }

  if (index < str.length) {
    res.push(str.substring(index, length));
  }

  return res;
};

/* harmony default export */ var split = (splitEmojis);
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toEmojis.js




 // for skipping characters

const skipRe = /[\p{L}\sA-Za-z!@$%^&()_+\-=\[\]{};':"\\|,.<>\/?]/;
function toEmojis(string, _ref) {
  let {
    render = Emoji,
    // options
    size = 16,
    publicPath,
    hiDpi,
    extension
  } = _ref,
      props = objectWithoutProperties_default()(_ref, ["render", "size", "publicPath", "hiDpi", "extension"]);

  const options = {
    size,
    publicPath,
    hiDpi,
    extension
  };
  let strings = '';
  const converted = [];
  const chars = split(string);

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (char.match(skipRe)) {
      // skips stuff we patently know are not emojis
      strings += char;
    } else {
      const codePoint = emojiToCodePoints(char);

      if (emojis[codePoint] === void 0) {
        strings += char;
      } else {
        if (strings.length > 0) {
          converted.push(strings);
          strings = '';
        } // can safely mutate here ... famous last words ;)


        props.emoji = char;
        props.codePoint = codePoint;
        props.key = codePoint + "-" + i;
        props.options = options; // renders the emoji in React component

        converted.push(render(props));
      }
    }
  }

  if (strings.length > 0) {
    converted.push(strings);
  }

  return converted;
}
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/createEmojisComponent.js






/* harmony default export */ var createEmojisComponent = ((options = empty_object_default.a) => {
  let publicPath = options.publicPath;

  if (publicPath !== void 0 && publicPath !== null) {
    options.publicPath = publicPath.endsWith('/') === false ? publicPath + "/" : publicPath;
  }

  function Emojis(props) {
    props = extends_default()({}, props);
    const children = props.children;
    delete props.children;

    if (options !== empty_object_default.a) {
      extends_default()(props, options);
    }

    return react_default.a.Children.count(children) ? es_walk(children, toEmojis, props) : null;
  }

  if (false) {}

  return Emojis;
});
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/Emojis.js


/* harmony default export */ var es_Emojis = (createEmojisComponent());
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toSprite.js


const DEFAULT_PUBLIC_PATH = 'https://github.com/jaredLunde/react-emoji-component/blob/master/assets/sprites/';
const imageRendering = isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges';

const getPos = (pos, iconSize) => pos * -1 * (iconSize + 1) + "px";

const getSize = (x, iconSize) => (iconSize + 1) * x - 1 + "px";

function toSprite(codePoint, {
  emoji,
  size = 16,
  hiDpi = false,
  publicPath = DEFAULT_PUBLIC_PATH,
  extension = '.png'
}) {
  const [categoryID, col, row] = emojis[codePoint];
  const category = categories[categoryID];
  const [spriteCols, spriteRows] = spriteSizes[categoryID];
  size = parseInt(size);
  let iconSize = size <= 24 ? 24 : size <= 32 ? 32 : size <= 40 ? 40 : size <= 64 ? 64 : 128;
  let x = '';

  if (iconSize === 128) {
    hiDpi = false;
    iconSize = 64;
    x = '@2x';
  }

  if (hiDpi === true) {
    x = '@2x';
  }

  const scaleSize = size / (iconSize - 1) * (iconSize - 1);
  const backgroundPosition = row === void 0 ? getPos(col, scaleSize) + " 0" : getPos(col, scaleSize) + " " + getPos(row, scaleSize); // const backgroundSize = hiDpi === true ? '50%' : void 0

  const bgHeight = getSize(spriteRows, scaleSize);
  const bgWidth = getSize(spriteCols, scaleSize);
  const backgroundSize = bgWidth + " " + bgHeight;
  const qs = publicPath === DEFAULT_PUBLIC_PATH ? '?raw=true' : '';
  return {
    width: scaleSize,
    height: scaleSize,
    imageRendering,
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 1.0,
    verticalAlign: 'middle',
    contain: 'strict',
    backgroundImage: "url(" + publicPath + "emojione-sprite-" + iconSize + "-" + category + x + extension + qs + ")",
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat'
  };
}
// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/EmojiSprite.js






const EmojiSprite = (_ref) => {
  let {
    emoji,
    codePoint,
    style,
    options
  } = _ref,
      props = objectWithoutProperties_default()(_ref, ["emoji", "codePoint", "style", "options"]);

  props.role = 'img';
  props['aria-label'] = emoji;
  props.children = emoji;
  props.style = extends_default()(toSprite(codePoint, options), style);
  return react_default.a.createElement('span', props);
};

if (false) {}

/* harmony default export */ var es_EmojiSprite = (EmojiSprite);
// CONCATENATED MODULE: ./src/App/index.js





var App_ref = react_default.a.createElement(es_Emojis, {
  size: 128,
  publicPath: "https://cdn.jsdelivr.net/emojione/assets/3.0/png/"
}, react_default.a.createElement("div", null, react_default.a.createElement("h1", null, "Every emoji on the", react_default.a.createElement("br", null), "flat earth", react_default.a.createElement("br", null), "\uD83C\uDF0F")));

var App_ref2 = react_default.a.createElement("h2", null, "Options");

var App_ref3 = react_default.a.createElement("br", null);

var App_ref4 = react_default.a.createElement("br", null);

var App_ref5 = react_default.a.createElement("br", null);

var _ref6 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Smileys"), "\uD83D\uDE00 \uD83D\uDE01 \uD83D\uDE02 \uD83E\uDD23 \uD83D\uDE03 \uD83D\uDE04 \uD83D\uDE05 \uD83D\uDE06 \uD83D\uDE09 \uD83D\uDE0A \uD83D\uDE0B \uD83D\uDE0E \uD83D\uDE0D \uD83D\uDE18 \uD83D\uDE17 \uD83D\uDE19 \uD83D\uDE1A \u263A\uFE0F \uD83D\uDE42 \uD83E\uDD17 \uD83E\uDD29 \uD83E\uDD14 \uD83E\uDD28 \uD83D\uDE10 \uD83D\uDE11 \uD83D\uDE36 \uD83D\uDE44 \uD83D\uDE0F \uD83D\uDE23 \uD83D\uDE25 \uD83D\uDE2E \uD83E\uDD10 \uD83D\uDE2F \uD83D\uDE2A \uD83D\uDE2B \uD83D\uDE34 \uD83D\uDE0C \uD83D\uDE1B \uD83D\uDE1C \uD83D\uDE1D \uD83E\uDD24 \uD83D\uDE12 \uD83D\uDE13 \uD83D\uDE14 \uD83D\uDE15 \uD83D\uDE43 \uD83E\uDD11 \uD83D\uDE32 \u2639\uFE0F \uD83D\uDE41 \uD83D\uDE16 \uD83D\uDE1E \uD83D\uDE1F \uD83D\uDE24 \uD83D\uDE22 \uD83D\uDE2D \uD83D\uDE26 \uD83D\uDE27 \uD83D\uDE28 \uD83D\uDE29 \uD83E\uDD2F \uD83D\uDE2C \uD83D\uDE30 \uD83D\uDE31 \uD83D\uDE33 \uD83E\uDD2A \uD83D\uDE35 \uD83D\uDE21 \uD83D\uDE20 \uD83E\uDD2C \uD83D\uDE37 \uD83E\uDD12 \uD83E\uDD15 \uD83E\uDD22 \uD83E\uDD2E \uD83E\uDD27 \uD83D\uDE07 \uD83E\uDD20 \uD83E\uDD21 \uD83E\uDD25 \uD83E\uDD2B \uD83E\uDD2D \uD83E\uDDD0 \uD83E\uDD13 \uD83D\uDE08 \uD83D\uDC7F \uD83D\uDC79 \uD83D\uDC7A \uD83D\uDC80 \uD83D\uDC7B \uD83D\uDC7D \uD83E\uDD16 \uD83D\uDCA9 \uD83D\uDE3A \uD83D\uDE38 \uD83D\uDE39 \uD83D\uDE3B \uD83D\uDE3C \uD83D\uDE3D \uD83D\uDE40 \uD83D\uDE3F \uD83D\uDE3E");

var _ref7 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "People and Fantasy"), "\uD83D\uDC76 \uD83D\uDC67 \uD83E\uDDD2 \uD83D\uDC66 \uD83D\uDC69 \uD83E\uDDD1 \uD83D\uDC68 \uD83D\uDC75 \uD83E\uDDD3 \uD83D\uDC74 \uD83D\uDC72 \uD83D\uDC73\u200D\u2640\uFE0F \uD83D\uDC73\u200D\u2642\uFE0F \uD83E\uDDD5 \uD83D\uDC6E\u200D\u2640\uFE0F \uD83D\uDC6E\u200D\u2642\uFE0F \uD83D\uDC77\u200D\u2640\uFE0F \uD83D\uDC77\u200D\u2642\uFE0F \uD83D\uDC82\u200D\u2640\uFE0F \uD83D\uDC82\u200D\u2642\uFE0F \uD83D\uDD75\uFE0F\u200D\u2640\uFE0F \uD83D\uDD75\uFE0F\u200D\u2642\uFE0F \uD83D\uDC69\u200D\u2695\uFE0F \uD83D\uDC68\u200D\u2695\uFE0F \uD83D\uDC69\u200D\uD83C\uDF3E \uD83D\uDC68\u200D\uD83C\uDF3E \uD83D\uDC69\u200D\uD83C\uDF73 \uD83D\uDC68\u200D\uD83C\uDF73 \uD83D\uDC69\u200D\uD83C\uDF93 \uD83D\uDC68\u200D\uD83C\uDF93 \uD83D\uDC69\u200D\uD83C\uDFA4 \uD83D\uDC68\u200D\uD83C\uDFA4 \uD83D\uDC69\u200D\uD83C\uDFEB \uD83D\uDC68\u200D\uD83C\uDFEB \uD83D\uDC69\u200D\uD83C\uDFED \uD83D\uDC68\u200D\uD83C\uDFED \uD83D\uDC69\u200D\uD83D\uDCBB \uD83D\uDC68\u200D\uD83D\uDCBB \uD83D\uDC69\u200D\uD83D\uDCBC \uD83D\uDC68\u200D\uD83D\uDCBC \uD83D\uDC69\u200D\uD83D\uDD27 \uD83D\uDC68\u200D\uD83D\uDD27 \uD83D\uDC69\u200D\uD83D\uDD2C \uD83D\uDC68\u200D\uD83D\uDD2C \uD83D\uDC69\u200D\uD83C\uDFA8 \uD83D\uDC68\u200D\uD83C\uDFA8 \uD83D\uDC69\u200D\uD83D\uDE92 \uD83D\uDC68\u200D\uD83D\uDE92 \uD83D\uDC69\u200D\u2708\uFE0F \uD83D\uDC68\u200D\u2708\uFE0F \uD83D\uDC69\u200D\uD83D\uDE80 \uD83D\uDC68\u200D\uD83D\uDE80 \uD83D\uDC69\u200D\u2696\uFE0F \uD83D\uDC68\u200D\u2696\uFE0F \uD83D\uDC70 \uD83E\uDD35 \uD83D\uDC78 \uD83E\uDD34 \uD83E\uDD36 \uD83C\uDF85 \uD83E\uDDD9\u200D\u2640\uFE0F \uD83E\uDDD9\u200D\u2642\uFE0F \uD83E\uDDDD\u200D\u2640\uFE0F \uD83E\uDDDD\u200D\u2642\uFE0F \uD83E\uDDDB\u200D\u2640\uFE0F \uD83E\uDDDB\u200D\u2642\uFE0F \uD83E\uDDDF\u200D\u2640\uFE0F \uD83E\uDDDF\u200D\u2642\uFE0F \uD83E\uDDDE\u200D\u2640\uFE0F \uD83E\uDDDE\u200D\u2642\uFE0F \uD83E\uDDDC\u200D\u2640\uFE0F \uD83E\uDDDC\u200D\u2642\uFE0F \uD83E\uDDDA\u200D\u2640\uFE0F \uD83E\uDDDA\u200D\u2642\uFE0F \uD83D\uDC7C \uD83E\uDD30 \uD83E\uDD31 \uD83D\uDE47\u200D\u2640\uFE0F \uD83D\uDE47\u200D\u2642\uFE0F \uD83D\uDC81\u200D\u2640\uFE0F \uD83D\uDC81\u200D\u2642\uFE0F \uD83D\uDE45\u200D\u2640\uFE0F \uD83D\uDE45\u200D\u2642\uFE0F \uD83D\uDE46\u200D\u2640\uFE0F \uD83D\uDE46\u200D\u2642\uFE0F \uD83D\uDE4B\u200D\u2640\uFE0F \uD83D\uDE4B\u200D\u2642\uFE0F \uD83E\uDD26\u200D\u2640\uFE0F \uD83E\uDD26\u200D\u2642\uFE0F \uD83E\uDD37\u200D\u2640\uFE0F \uD83E\uDD37\u200D\u2642\uFE0F \uD83D\uDE4E\u200D\u2640\uFE0F \uD83D\uDE4E\u200D\u2642\uFE0F \uD83D\uDE4D\u200D\u2640\uFE0F \uD83D\uDE4D\u200D\u2642\uFE0F \uD83D\uDC87\u200D\u2640\uFE0F \uD83D\uDC87\u200D\u2642\uFE0F \uD83D\uDC86\u200D\u2640\uFE0F \uD83D\uDC86\u200D\u2642\uFE0F \uD83E\uDDD6\u200D\u2640\uFE0F \uD83E\uDDD6\u200D\u2642\uFE0F \uD83D\uDC85 \uD83E\uDD33 \uD83D\uDC83 \uD83D\uDD7A \uD83D\uDC6F\u200D\u2640\uFE0F \uD83D\uDC6F\u200D\u2642\uFE0F \uD83D\uDD74 \uD83D\uDEB6\u200D\u2640\uFE0F \uD83D\uDEB6\u200D\u2642\uFE0F \uD83C\uDFC3\u200D\u2640\uFE0F \uD83C\uDFC3\u200D\u2642\uFE0F \uD83D\uDC6B \uD83D\uDC6D \uD83D\uDC6C \uD83D\uDC91 \uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69 \uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68 \uD83D\uDC8F \uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69 \uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68 \uD83D\uDC6A \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67 \uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67 \uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67 \uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67 \uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67 \uD83D\uDC69\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC67 \uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66 \uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67 \uD83D\uDC68\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC67 \uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66 \uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67 \uD83E\uDD32 \uD83D\uDC50 \uD83D\uDE4C \uD83D\uDC4F \uD83E\uDD1D \uD83D\uDC4D \uD83D\uDC4E \uD83D\uDC4A \u270A \uD83E\uDD1B \uD83E\uDD1C \uD83E\uDD1E \u270C\uFE0F \uD83E\uDD1F \uD83E\uDD18 \uD83D\uDC4C \uD83D\uDC48 \uD83D\uDC49 \uD83D\uDC46 \uD83D\uDC47 \u261D\uFE0F \u270B \uD83E\uDD1A \uD83D\uDD90 \uD83D\uDD96 \uD83D\uDC4B \uD83E\uDD19 \uD83D\uDCAA \uD83D\uDD95 \u270D\uFE0F \uD83D\uDE4F \uD83D\uDC8D \uD83D\uDC84 \uD83D\uDC8B \uD83D\uDC44 \uD83D\uDC45 \uD83D\uDC42 \uD83D\uDC43 \uD83D\uDC63 \uD83D\uDC41 \uD83D\uDC40 \uD83E\uDDE0 \uD83D\uDDE3 \uD83D\uDC64 \uD83D\uDC65");

var _ref8 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Clothing and Accessories"), "\uD83E\uDDE5 \uD83D\uDC5A \uD83D\uDC55 \uD83D\uDC56 \uD83D\uDC54 \uD83D\uDC57 \uD83D\uDC59 \uD83D\uDC58 \uD83D\uDC60 \uD83D\uDC61 \uD83D\uDC62 \uD83D\uDC5E \uD83D\uDC5F \uD83E\uDDE6 \uD83E\uDDE4 \uD83E\uDDE3 \uD83C\uDFA9 \uD83E\uDDE2 \uD83D\uDC52 \uD83C\uDF93 \u26D1 \uD83D\uDC51 \uD83D\uDC5D \uD83D\uDC5B \uD83D\uDC5C \uD83D\uDCBC \uD83C\uDF92 \uD83D\uDC53 \uD83D\uDD76 \uD83C\uDF02");

var _ref9 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Pale emojis"), "\uD83D\uDC76\uD83C\uDFFB \uD83D\uDC66\uD83C\uDFFB \uD83D\uDC67\uD83C\uDFFB \uD83D\uDC68\uD83C\uDFFB \uD83D\uDC69\uD83C\uDFFB \uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDC71\uD83C\uDFFB \uD83D\uDC74\uD83C\uDFFB \uD83D\uDC75\uD83C\uDFFB \uD83D\uDC72\uD83C\uDFFB \uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDC73\uD83C\uDFFB \uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDC6E\uD83C\uDFFB \uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDC77\uD83C\uDFFB \uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDC82\uD83C\uDFFB \uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDD75\uD83C\uDFFB \uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F \uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73 \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93 \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4 \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27 \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C \uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8 \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92 \uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F \uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80 \uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F \uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F \uD83E\uDD36\uD83C\uDFFB \uD83C\uDF85\uD83C\uDFFB \uD83D\uDC78\uD83C\uDFFB \uD83E\uDD34\uD83C\uDFFB \uD83D\uDC70\uD83C\uDFFB \uD83E\uDD35\uD83C\uDFFB \uD83D\uDC7C\uD83C\uDFFB \uD83E\uDD30\uD83C\uDFFB \uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDE47\uD83C\uDFFB \uD83D\uDC81\uD83C\uDFFB \uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDE45\uD83C\uDFFB \uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDE46\uD83C\uDFFB \uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDE4B\uD83C\uDFFB \uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDE4E\uD83C\uDFFB \uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDE4D\uD83C\uDFFB \uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDC87\uD83C\uDFFB \uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDC86\uD83C\uDFFB \uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDD74\uD83C\uDFFB \uD83D\uDC83\uD83C\uDFFB \uD83D\uDD7A\uD83C\uDFFB \uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDEB6\uD83C\uDFFB \uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F \uD83C\uDFC3\uD83C\uDFFB \uD83E\uDD32\uD83C\uDFFB \uD83D\uDC50\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB \uD83D\uDC4F\uD83C\uDFFB \uD83D\uDE4F\uD83C\uDFFB \uD83D\uDC4D\uD83C\uDFFB \uD83D\uDC4E\uD83C\uDFFB \uD83D\uDC4A\uD83C\uDFFB \u270A\uD83C\uDFFB \uD83E\uDD1B\uD83C\uDFFB \uD83E\uDD1C\uD83C\uDFFB \uD83E\uDD1E\uD83C\uDFFB \u270C\uD83C\uDFFB \uD83E\uDD1F\uD83C\uDFFB \uD83E\uDD18\uD83C\uDFFB \uD83D\uDC4C\uD83C\uDFFB \uD83D\uDC48\uD83C\uDFFB \uD83D\uDC49\uD83C\uDFFB \uD83D\uDC46\uD83C\uDFFB \uD83D\uDC47\uD83C\uDFFB \u261D\uD83C\uDFFB \u270B\uD83C\uDFFB \uD83E\uDD1A\uD83C\uDFFB \uD83D\uDD90\uD83C\uDFFB \uD83D\uDD96\uD83C\uDFFB \uD83D\uDC4B\uD83C\uDFFB \uD83E\uDD19\uD83C\uDFFB \uD83D\uDCAA\uD83C\uDFFB \uD83D\uDD95\uD83C\uDFFB \u270D\uD83C\uDFFB \uD83E\uDD33\uD83C\uDFFB \uD83D\uDC85\uD83C\uDFFB \uD83D\uDC42\uD83C\uDFFB \uD83D\uDC43\uD83C\uDFFB");

var _ref10 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Cream White Emojis"), "\uD83D\uDC76\uD83C\uDFFC \uD83D\uDC66\uD83C\uDFFC \uD83D\uDC67\uD83C\uDFFC \uD83D\uDC68\uD83C\uDFFC \uD83D\uDC69\uD83C\uDFFC \uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDC71\uD83C\uDFFC \uD83D\uDC74\uD83C\uDFFC \uD83D\uDC75\uD83C\uDFFC \uD83D\uDC72\uD83C\uDFFC \uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDC73\uD83C\uDFFC \uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDC6E\uD83C\uDFFC \uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDC77\uD83C\uDFFC \uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDC82\uD83C\uDFFC \uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDD75\uD83C\uDFFC \uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F \uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73 \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93 \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4 \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27 \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C \uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8 \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92 \uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F \uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F \uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80 \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80 \uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F \uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F \uD83E\uDD36\uD83C\uDFFC \uD83C\uDF85\uD83C\uDFFC \uD83D\uDC78\uD83C\uDFFC \uD83E\uDD34\uD83C\uDFFC \uD83D\uDC70\uD83C\uDFFC \uD83E\uDD35\uD83C\uDFFC \uD83D\uDC7C\uD83C\uDFFC \uD83E\uDD30\uD83C\uDFFC \uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDE47\uD83C\uDFFC \uD83D\uDC81\uD83C\uDFFC \uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDE45\uD83C\uDFFC \uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDE46\uD83C\uDFFC \uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDE4B\uD83C\uDFFC \uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDE4E\uD83C\uDFFC \uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDE4D\uD83C\uDFFC \uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDC87\uD83C\uDFFC \uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDC86\uD83C\uDFFC \uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDD74\uD83C\uDFFC \uD83D\uDC83\uD83C\uDFFC \uD83D\uDD7A\uD83C\uDFFC \uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDEB6\uD83C\uDFFC \uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F \uD83C\uDFC3\uD83C\uDFFC \uD83E\uDD32\uD83C\uDFFC \uD83D\uDC50\uD83C\uDFFC \uD83D\uDE4C\uD83C\uDFFC \uD83D\uDC4F\uD83C\uDFFC \uD83D\uDE4F\uD83C\uDFFC \uD83D\uDC4D\uD83C\uDFFC \uD83D\uDC4E\uD83C\uDFFC \uD83D\uDC4A\uD83C\uDFFC \u270A\uD83C\uDFFC \uD83E\uDD1B\uD83C\uDFFC \uD83E\uDD1C\uD83C\uDFFC \uD83E\uDD1E\uD83C\uDFFC \u270C\uD83C\uDFFC \uD83E\uDD1F\uD83C\uDFFC \uD83E\uDD18\uD83C\uDFFC \uD83D\uDC4C\uD83C\uDFFC \uD83D\uDC48\uD83C\uDFFC \uD83D\uDC49\uD83C\uDFFC \uD83D\uDC46\uD83C\uDFFC \uD83D\uDC47\uD83C\uDFFC \u261D\uD83C\uDFFC \u270B\uD83C\uDFFC \uD83E\uDD1A\uD83C\uDFFC \uD83D\uDD90\uD83C\uDFFC \uD83D\uDD96\uD83C\uDFFC \uD83D\uDC4B\uD83C\uDFFC \uD83E\uDD19\uD83C\uDFFC \uD83D\uDCAA\uD83C\uDFFC \uD83D\uDD95\uD83C\uDFFC \u270D\uD83C\uDFFC \uD83E\uDD33\uD83C\uDFFC \uD83D\uDC85\uD83C\uDFFC \uD83D\uDC42\uD83C\uDFFC \uD83D\uDC43\uD83C\uDFFC");

var _ref11 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Moderate Brown Emojis"), "\uD83D\uDC76\uD83C\uDFFD \uD83D\uDC66\uD83C\uDFFD \uD83D\uDC67\uD83C\uDFFD \uD83D\uDC68\uD83C\uDFFD \uD83D\uDC69\uD83C\uDFFD \uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDC71\uD83C\uDFFD \uD83D\uDC74\uD83C\uDFFD \uD83D\uDC75\uD83C\uDFFD \uD83D\uDC72\uD83C\uDFFD \uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDC73\uD83C\uDFFD \uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDC6E\uD83C\uDFFD \uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDC77\uD83C\uDFFD \uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDC82\uD83C\uDFFD \uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDD75\uD83C\uDFFD \uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F \uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73 \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93 \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4 \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27 \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C \uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8 \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92 \uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F \uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F \uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80 \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80 \uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F \uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F \uD83E\uDD36\uD83C\uDFFD \uD83C\uDF85\uD83C\uDFFD \uD83D\uDC78\uD83C\uDFFD \uD83E\uDD34\uD83C\uDFFD \uD83D\uDC70\uD83C\uDFFD \uD83E\uDD35\uD83C\uDFFD \uD83D\uDC7C\uD83C\uDFFD \uD83E\uDD30\uD83C\uDFFD \uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDE47\uD83C\uDFFD \uD83D\uDC81\uD83C\uDFFD \uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDE45\uD83C\uDFFD \uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDE46\uD83C\uDFFD \uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDE4B\uD83C\uDFFD \uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDE4E\uD83C\uDFFD \uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDE4D\uD83C\uDFFD \uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDC87\uD83C\uDFFD \uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDC86\uD83C\uDFFD \uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDD74\uD83C\uDFFC \uD83D\uDC83\uD83C\uDFFD \uD83D\uDD7A\uD83C\uDFFD \uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDEB6\uD83C\uDFFD \uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F \uD83C\uDFC3\uD83C\uDFFD \uD83E\uDD32\uD83C\uDFFD \uD83D\uDC50\uD83C\uDFFD \uD83D\uDE4C\uD83C\uDFFD \uD83D\uDC4F\uD83C\uDFFD \uD83D\uDE4F\uD83C\uDFFD \uD83D\uDC4D\uD83C\uDFFD \uD83D\uDC4E\uD83C\uDFFD \uD83D\uDC4A\uD83C\uDFFD \u270A\uD83C\uDFFD \uD83E\uDD1B\uD83C\uDFFD \uD83E\uDD1C\uD83C\uDFFD \uD83E\uDD1E\uD83C\uDFFD \u270C\uD83C\uDFFD \uD83E\uDD1F\uD83C\uDFFD \uD83E\uDD18\uD83C\uDFFD \uD83D\uDC4C\uD83C\uDFFD \uD83D\uDC48\uD83C\uDFFD \uD83D\uDC49\uD83C\uDFFD \uD83D\uDC46\uD83C\uDFFD \uD83D\uDC47\uD83C\uDFFD \u261D\uD83C\uDFFD \u270B\uD83C\uDFFD \uD83E\uDD1A\uD83C\uDFFD \uD83D\uDD90\uD83C\uDFFD \uD83D\uDD96\uD83C\uDFFD \uD83D\uDC4B\uD83C\uDFFD \uD83E\uDD19\uD83C\uDFFD \uD83D\uDCAA\uD83C\uDFFD \uD83D\uDD95\uD83C\uDFFD \u270D\uD83C\uDFFD \uD83E\uDD33\uD83C\uDFFD \uD83D\uDC85\uD83C\uDFFD \uD83D\uDC42\uD83C\uDFFD \uD83D\uDC43\uD83C\uDFFD");

var _ref12 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Dark Brown Emojis"), "\uD83D\uDC76\uD83C\uDFFE \uD83D\uDC66\uD83C\uDFFE \uD83D\uDC67\uD83C\uDFFE \uD83D\uDC68\uD83C\uDFFE \uD83D\uDC69\uD83C\uDFFE \uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDC71\uD83C\uDFFE \uD83D\uDC74\uD83C\uDFFE \uD83D\uDC75\uD83C\uDFFE \uD83D\uDC72\uD83C\uDFFE \uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDC73\uD83C\uDFFE \uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDC6E\uD83C\uDFFE \uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDC77\uD83C\uDFFE \uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDC82\uD83C\uDFFE \uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDD75\uD83C\uDFFE \uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F \uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73 \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93 \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4 \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27 \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C \uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8 \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92 \uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F \uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F \uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80 \uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80 \uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F \uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F \uD83E\uDD36\uD83C\uDFFE \uD83C\uDF85\uD83C\uDFFE \uD83D\uDC78\uD83C\uDFFE \uD83E\uDD34\uD83C\uDFFE \uD83D\uDC70\uD83C\uDFFE \uD83E\uDD35\uD83C\uDFFE \uD83D\uDC7C\uD83C\uDFFE \uD83E\uDD30\uD83C\uDFFE \uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDE47\uD83C\uDFFE \uD83D\uDC81\uD83C\uDFFE \uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDE45\uD83C\uDFFE \uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDE46\uD83C\uDFFE \uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDE4B\uD83C\uDFFE \uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDE4E\uD83C\uDFFE \uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDE4D\uD83C\uDFFE \uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDC87\uD83C\uDFFE \uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDC86\uD83C\uDFFE \uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDD74\uD83C\uDFFE \uD83D\uDC83\uD83C\uDFFE \uD83D\uDD7A\uD83C\uDFFE \uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDEB6\uD83C\uDFFE \uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F \uD83C\uDFC3\uD83C\uDFFE \uD83E\uDD32\uD83C\uDFFE \uD83D\uDC50\uD83C\uDFFE \uD83D\uDE4C\uD83C\uDFFE \uD83D\uDC4F\uD83C\uDFFE \uD83D\uDE4F\uD83C\uDFFE \uD83D\uDC4D\uD83C\uDFFE \uD83D\uDC4E\uD83C\uDFFE \uD83D\uDC4A\uD83C\uDFFE \u270A\uD83C\uDFFE \uD83E\uDD1B\uD83C\uDFFE \uD83E\uDD1C\uD83C\uDFFE \uD83E\uDD1E\uD83C\uDFFE \u270C\uD83C\uDFFE \uD83E\uDD1F\uD83C\uDFFE \uD83E\uDD18\uD83C\uDFFE \uD83D\uDC4C\uD83C\uDFFE \uD83D\uDC48\uD83C\uDFFE \uD83D\uDC49\uD83C\uDFFE \uD83D\uDC46\uD83C\uDFFE \uD83D\uDC47\uD83C\uDFFE \u261D\uD83C\uDFFE \u270B\uD83C\uDFFE \uD83E\uDD1A\uD83C\uDFFE \uD83D\uDD90\uD83C\uDFFE \uD83D\uDD96\uD83C\uDFFE \uD83D\uDC4B\uD83C\uDFFE \uD83E\uDD19\uD83C\uDFFE \uD83D\uDCAA\uD83C\uDFFE \uD83D\uDD95\uD83C\uDFFE \u270D\uD83C\uDFFE \uD83E\uDD33\uD83C\uDFFE \uD83D\uDC85\uD83C\uDFFE \uD83D\uDC42\uD83C\uDFFE \uD83D\uDC43\uD83C\uDFFE");

var _ref13 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Black Emojis"), "\uD83D\uDC76\uD83C\uDFFF \uD83D\uDC66\uD83C\uDFFF \uD83D\uDC67\uD83C\uDFFF \uD83D\uDC68\uD83C\uDFFF \uD83D\uDC69\uD83C\uDFFF \uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDC71\uD83C\uDFFF \uD83D\uDC74\uD83C\uDFFF \uD83D\uDC75\uD83C\uDFFF \uD83D\uDC72\uD83C\uDFFF \uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDC73\uD83C\uDFFF \uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDC6E\uD83C\uDFFF \uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDC77\uD83C\uDFFF \uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDC82\uD83C\uDFFF \uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDD75\uD83C\uDFFF \uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F \uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73 \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93 \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4 \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27 \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C \uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8 \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92 \uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F \uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F \uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80 \uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80 \uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F \uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F \uD83E\uDD36\uD83C\uDFFF \uD83C\uDF85\uD83C\uDFFF \uD83D\uDC78\uD83C\uDFFF \uD83E\uDD34\uD83C\uDFFF \uD83D\uDC70\uD83C\uDFFF \uD83E\uDD35\uD83C\uDFFF \uD83D\uDC7C\uD83C\uDFFF \uD83E\uDD30\uD83C\uDFFF \uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDE47\uD83C\uDFFF \uD83D\uDC81\uD83C\uDFFF \uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDE45\uD83C\uDFFF \uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDE46\uD83C\uDFFF \uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDE4B\uD83C\uDFFF \uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDE4E\uD83C\uDFFF \uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDE4D\uD83C\uDFFF \uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDC87\uD83C\uDFFF \uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDC86\uD83C\uDFFF \uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDD74\uD83C\uDFFF \uD83D\uDC83\uD83C\uDFFF \uD83D\uDD7A\uD83C\uDFFF \uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDEB6\uD83C\uDFFF \uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F \uD83C\uDFC3\uD83C\uDFFF \uD83E\uDD32\uD83C\uDFFF \uD83D\uDC50\uD83C\uDFFF \uD83D\uDE4C\uD83C\uDFFF \uD83D\uDC4F\uD83C\uDFFF \uD83D\uDE4F\uD83C\uDFFF \uD83D\uDC4D\uD83C\uDFFF \uD83D\uDC4E\uD83C\uDFFF \uD83D\uDC4A\uD83C\uDFFF \u270A\uD83C\uDFFF \uD83E\uDD1B\uD83C\uDFFF \uD83E\uDD1C\uD83C\uDFFF \uD83E\uDD1E\uD83C\uDFFF \u270C\uD83C\uDFFF \uD83E\uDD1F\uD83C\uDFFF \uD83E\uDD18\uD83C\uDFFF \uD83D\uDC4C\uD83C\uDFFF \uD83D\uDC48\uD83C\uDFFF \uD83D\uDC49\uD83C\uDFFF \uD83D\uDC46\uD83C\uDFFF \uD83D\uDC47\uD83C\uDFFF \u261D\uD83C\uDFFF \u270B\uD83C\uDFFF \uD83E\uDD1A\uD83C\uDFFF \uD83D\uDD90\uD83C\uDFFF \uD83D\uDD96\uD83C\uDFFF \uD83D\uDC4B\uD83C\uDFFF \uD83E\uDD19\uD83C\uDFFF \uD83D\uDCAA\uD83C\uDFFF \uD83D\uDD95\uD83C\uDFFF \u270D\uD83C\uDFFF \uD83E\uDD33\uD83C\uDFFF \uD83D\uDC85\uD83C\uDFFF \uD83D\uDC42\uD83C\uDFFF \uD83D\uDC43\uD83C\uDFFF");

var _ref14 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Animals"), "\uD83D\uDC36 \uD83D\uDC31 \uD83D\uDC2D \uD83D\uDC39 \uD83D\uDC30 \uD83E\uDD8A \uD83D\uDC3B \uD83D\uDC3C \uD83D\uDC28 \uD83D\uDC2F \uD83E\uDD81 \uD83D\uDC2E \uD83D\uDC37 \uD83D\uDC3D \uD83D\uDC38 \uD83D\uDC35 \uD83D\uDE48 \uD83D\uDE49 \uD83D\uDE4A \uD83D\uDC12 \uD83D\uDC14 \uD83D\uDC27 \uD83D\uDC26 \uD83D\uDC24 \uD83D\uDC23 \uD83D\uDC25 \uD83E\uDD86 \uD83E\uDD85 \uD83E\uDD89 \uD83E\uDD87 \uD83D\uDC3A \uD83D\uDC17 \uD83D\uDC34 \uD83E\uDD84 \uD83D\uDC1D \uD83D\uDC1B \uD83E\uDD8B \uD83D\uDC0C \uD83D\uDC1A \uD83D\uDC1E \uD83D\uDC1C \uD83E\uDD97 \uD83D\uDD77 \uD83D\uDD78 \uD83E\uDD82 \uD83D\uDC22 \uD83D\uDC0D \uD83E\uDD8E \uD83E\uDD96 \uD83E\uDD95 \uD83D\uDC19 \uD83E\uDD91 \uD83E\uDD90 \uD83E\uDD80 \uD83D\uDC21 \uD83D\uDC20 \uD83D\uDC1F \uD83D\uDC2C \uD83D\uDC33 \uD83D\uDC0B \uD83E\uDD88 \uD83D\uDC0A \uD83D\uDC05 \uD83D\uDC06 \uD83E\uDD93 \uD83E\uDD8D \uD83D\uDC18 \uD83E\uDD8F \uD83D\uDC2A \uD83D\uDC2B \uD83E\uDD92 \uD83D\uDC03 \uD83D\uDC02 \uD83D\uDC04 \uD83D\uDC0E \uD83D\uDC16 \uD83D\uDC0F \uD83D\uDC11 \uD83D\uDC10 \uD83E\uDD8C \uD83D\uDC15 \uD83D\uDC29 \uD83D\uDC08 \uD83D\uDC13 \uD83E\uDD83 \uD83D\uDD4A \uD83D\uDC07 \uD83D\uDC01 \uD83D\uDC00 \uD83D\uDC3F \uD83E\uDD94 \uD83D\uDC3E \uD83D\uDC09 \uD83D\uDC32 \uD83C\uDF35 \uD83C\uDF84 \uD83C\uDF32 \uD83C\uDF33 \uD83C\uDF34 \uD83C\uDF31 \uD83C\uDF3F \u2618\uFE0F \uD83C\uDF40 \uD83C\uDF8D \uD83C\uDF8B \uD83C\uDF43 \uD83C\uDF42 \uD83C\uDF41 \uD83C\uDF44 \uD83C\uDF3E \uD83D\uDC90 \uD83C\uDF37 \uD83C\uDF39 \uD83E\uDD40 \uD83C\uDF3A \uD83C\uDF38 \uD83C\uDF3C \uD83C\uDF3B \uD83C\uDF1E \uD83C\uDF1D \uD83C\uDF1B \uD83C\uDF1C \uD83C\uDF1A \uD83C\uDF15 \uD83C\uDF16 \uD83C\uDF17 \uD83C\uDF18 \uD83C\uDF11 \uD83C\uDF12 \uD83C\uDF13 \uD83C\uDF14 \uD83C\uDF19 \uD83C\uDF0E \uD83C\uDF0D \uD83C\uDF0F \uD83D\uDCAB \u2B50\uFE0F \uD83C\uDF1F \u2728 \u26A1\uFE0F \u2604\uFE0F \uD83D\uDCA5 \uD83D\uDD25 \uD83C\uDF2A \uD83C\uDF08 \u2600\uFE0F \uD83C\uDF24 \u26C5\uFE0F \uD83C\uDF25 \u2601\uFE0F \uD83C\uDF26 \uD83C\uDF27 \u26C8 \uD83C\uDF29 \uD83C\uDF28 \u2744\uFE0F \u2603\uFE0F \u26C4\uFE0F \uD83C\uDF2C \uD83D\uDCA8 \uD83D\uDCA7 \uD83D\uDCA6 \u2614\uFE0F \u2602\uFE0F \uD83C\uDF0A \uD83C\uDF2B");

var _ref15 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Food & Drink"), "\uD83C\uDF4F \uD83C\uDF4E \uD83C\uDF50 \uD83C\uDF4A \uD83C\uDF4B \uD83C\uDF4C \uD83C\uDF49 \uD83C\uDF47 \uD83C\uDF53 \uD83C\uDF48 \uD83C\uDF52 \uD83C\uDF51 \uD83C\uDF4D \uD83E\uDD65 \uD83E\uDD5D \uD83C\uDF45 \uD83C\uDF46 \uD83E\uDD51 \uD83E\uDD66 \uD83E\uDD52 \uD83C\uDF36 \uD83C\uDF3D \uD83E\uDD55 \uD83E\uDD54 \uD83C\uDF60 \uD83E\uDD50 \uD83C\uDF5E \uD83E\uDD56 \uD83E\uDD68 \uD83E\uDDC0 \uD83E\uDD5A \uD83C\uDF73 \uD83E\uDD5E \uD83E\uDD53 \uD83E\uDD69 \uD83C\uDF57 \uD83C\uDF56 \uD83C\uDF2D \uD83C\uDF54 \uD83C\uDF5F \uD83C\uDF55 \uD83E\uDD6A \uD83E\uDD59 \uD83C\uDF2E \uD83C\uDF2F \uD83E\uDD57 \uD83E\uDD58 \uD83E\uDD6B \uD83C\uDF5D \uD83C\uDF5C \uD83C\uDF72 \uD83C\uDF5B \uD83C\uDF63 \uD83C\uDF71 \uD83E\uDD5F \uD83C\uDF64 \uD83C\uDF59 \uD83C\uDF5A \uD83C\uDF58 \uD83C\uDF65 \uD83E\uDD60 \uD83C\uDF62 \uD83C\uDF61 \uD83C\uDF67 \uD83C\uDF68 \uD83C\uDF66 \uD83E\uDD67 \uD83C\uDF70 \uD83C\uDF82 \uD83C\uDF6E \uD83C\uDF6D \uD83C\uDF6C \uD83C\uDF6B \uD83C\uDF7F \uD83C\uDF69 \uD83C\uDF6A \uD83C\uDF30 \uD83E\uDD5C \uD83C\uDF6F \uD83E\uDD5B \uD83C\uDF7C \u2615\uFE0F \uD83C\uDF75 \uD83E\uDD64 \uD83C\uDF76 \uD83C\uDF7A \uD83C\uDF7B \uD83E\uDD42 \uD83C\uDF77 \uD83E\uDD43 \uD83C\uDF78 \uD83C\uDF79 \uD83C\uDF7E \uD83E\uDD44 \uD83C\uDF74 \uD83C\uDF7D \uD83E\uDD63 \uD83E\uDD61 \uD83E\uDD62");

var _ref16 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Activity and Sports"), "\u26BD\uFE0F \uD83C\uDFC0 \uD83C\uDFC8 \u26BE\uFE0F \uD83C\uDFBE \uD83C\uDFD0 \uD83C\uDFC9 \uD83C\uDFB1 \uD83C\uDFD3 \uD83C\uDFF8 \uD83E\uDD45 \uD83C\uDFD2 \uD83C\uDFD1 \uD83C\uDFCF \u26F3\uFE0F \uD83C\uDFF9 \uD83C\uDFA3 \uD83E\uDD4A \uD83E\uDD4B \uD83C\uDFBD \u26F8 \uD83E\uDD4C \uD83D\uDEF7 \uD83C\uDFBF \u26F7 \uD83C\uDFC2 \uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F \uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F \uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F \uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F \uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F \uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F \uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F \uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F \uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F \uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F \uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F \uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDD3C\u200D\u2640\uFE0F \uD83E\uDD3C\u200D\u2642\uFE0F \uD83E\uDD38\u200D\u2640\uFE0F \uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD38\u200D\u2642\uFE0F \uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F \u26F9\uFE0F\u200D\u2640\uFE0F \u26F9\uD83C\uDFFB\u200D\u2640\uFE0F \u26F9\uD83C\uDFFC\u200D\u2640\uFE0F \u26F9\uD83C\uDFFD\u200D\u2640\uFE0F \u26F9\uD83C\uDFFE\u200D\u2640\uFE0F \u26F9\uD83C\uDFFF\u200D\u2640\uFE0F \u26F9\uFE0F\u200D\u2642\uFE0F \u26F9\uD83C\uDFFB\u200D\u2642\uFE0F \u26F9\uD83C\uDFFC\u200D\u2642\uFE0F \u26F9\uD83C\uDFFD\u200D\u2642\uFE0F \u26F9\uD83C\uDFFE\u200D\u2642\uFE0F \u26F9\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDD3A \uD83E\uDD3E\u200D\u2640\uFE0F \uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD3E\u200D\u2642\uFE0F \uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F \uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F \uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F \uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F \uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F \uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F \uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F \uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F \uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F \uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F \uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F \uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFC7 \uD83C\uDFC7\uD83C\uDFFB \uD83C\uDFC7\uD83C\uDFFC \uD83C\uDFC7\uD83C\uDFFD \uD83C\uDFC7\uD83C\uDFFE \uD83C\uDFC7\uD83C\uDFFF \uD83E\uDDD8\u200D\u2640\uFE0F \uD83E\uDDD8\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDDD8\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDDD8\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDDD8\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDDD8\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDDD8\u200D\u2642\uFE0F \uD83E\uDDD8\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDDD8\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDDD8\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDDD8\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDDD8\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFC4\u200D\u2640\uFE0F \uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F \uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F \uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F \uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F \uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F \uD83C\uDFC4\u200D\u2642\uFE0F \uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F \uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F \uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F \uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F \uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFCA\u200D\u2640\uFE0F \uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F \uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F \uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F \uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F \uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F \uD83C\uDFCA\u200D\u2642\uFE0F \uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F \uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F \uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F \uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F \uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDD3D\u200D\u2640\uFE0F \uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD3D\u200D\u2642\uFE0F \uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDEA3\u200D\u2640\uFE0F \uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDEA3\u200D\u2642\uFE0F \uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F \uD83E\uDDD7\u200D\u2640\uFE0F \uD83E\uDDD7\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDDD7\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDDD7\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDDD7\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDDD7\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDDD7\u200D\u2642\uFE0F \uD83E\uDDD7\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDDD7\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDDD7\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDDD7\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDDD7\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDEB5\u200D\u2640\uFE0F \uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDEB5\u200D\u2642\uFE0F \uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F \uD83D\uDEB4\u200D\u2640\uFE0F \uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F \uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F \uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F \uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F \uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F \uD83D\uDEB4\u200D\u2642\uFE0F \uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F \uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F \uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F \uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F \uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFC6 \uD83E\uDD47 \uD83E\uDD48 \uD83E\uDD49 \uD83C\uDFC5 \uD83C\uDF96 \uD83C\uDFF5 \uD83C\uDF97 \uD83C\uDFAB \uD83C\uDF9F \uD83C\uDFAA \uD83E\uDD39\u200D\u2640\uFE0F \uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F \uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F \uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F \uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F \uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F \uD83E\uDD39\u200D\u2642\uFE0F \uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F \uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F \uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F \uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F \uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F \uD83C\uDFAD \uD83C\uDFA8 \uD83C\uDFAC \uD83C\uDFA4 \uD83C\uDFA7 \uD83C\uDFBC \uD83C\uDFB9 \uD83E\uDD41 \uD83C\uDFB7 \uD83C\uDFBA \uD83C\uDFB8 \uD83C\uDFBB \uD83C\uDFB2 \uD83C\uDFAF \uD83C\uDFB3 \uD83C\uDFAE \uD83C\uDFB0");

var _ref17 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Travel & Places"), "\uD83D\uDE97 \uD83D\uDE95 \uD83D\uDE99 \uD83D\uDE8C \uD83D\uDE8E \uD83C\uDFCE \uD83D\uDE93 \uD83D\uDE91 \uD83D\uDE92 \uD83D\uDE90 \uD83D\uDE9A \uD83D\uDE9B \uD83D\uDE9C \uD83D\uDEF4 \uD83D\uDEB2 \uD83D\uDEF5 \uD83C\uDFCD \uD83D\uDEA8 \uD83D\uDE94 \uD83D\uDE8D \uD83D\uDE98 \uD83D\uDE96 \uD83D\uDEA1 \uD83D\uDEA0 \uD83D\uDE9F \uD83D\uDE83 \uD83D\uDE8B \uD83D\uDE9E \uD83D\uDE9D \uD83D\uDE84 \uD83D\uDE85 \uD83D\uDE88 \uD83D\uDE82 \uD83D\uDE86 \uD83D\uDE87 \uD83D\uDE8A \uD83D\uDE89 \u2708\uFE0F \uD83D\uDEEB \uD83D\uDEEC \uD83D\uDEE9 \uD83D\uDCBA \uD83D\uDEF0 \uD83D\uDE80 \uD83D\uDEF8 \uD83D\uDE81 \uD83D\uDEF6 \u26F5\uFE0F \uD83D\uDEA4 \uD83D\uDEE5 \uD83D\uDEF3 \u26F4 \uD83D\uDEA2 \u2693\uFE0F \u26FD\uFE0F \uD83D\uDEA7 \uD83D\uDEA6 \uD83D\uDEA5 \uD83D\uDE8F \uD83D\uDDFA \uD83D\uDDFF \uD83D\uDDFD \uD83D\uDDFC \uD83C\uDFF0 \uD83C\uDFEF \uD83C\uDFDF \uD83C\uDFA1 \uD83C\uDFA2 \uD83C\uDFA0 \u26F2\uFE0F \u26F1 \uD83C\uDFD6 \uD83C\uDFDD \uD83C\uDFDC \uD83C\uDF0B \u26F0 \uD83C\uDFD4 \uD83D\uDDFB \uD83C\uDFD5 \u26FA\uFE0F \uD83C\uDFE0 \uD83C\uDFE1 \uD83C\uDFD8 \uD83C\uDFDA \uD83C\uDFD7 \uD83C\uDFED \uD83C\uDFE2 \uD83C\uDFEC \uD83C\uDFE3 \uD83C\uDFE4 \uD83C\uDFE5 \uD83C\uDFE6 \uD83C\uDFE8 \uD83C\uDFEA \uD83C\uDFEB \uD83C\uDFE9 \uD83D\uDC92 \uD83C\uDFDB \u26EA\uFE0F \uD83D\uDD4C \uD83D\uDD4D \uD83D\uDD4B \u26E9 \uD83D\uDEE4 \uD83D\uDEE3 \uD83D\uDDFE \uD83C\uDF91 \uD83C\uDFDE \uD83C\uDF05 \uD83C\uDF04 \uD83C\uDF20 \uD83C\uDF87 \uD83C\uDF86 \uD83C\uDF07 \uD83C\uDF06 \uD83C\uDFD9 \uD83C\uDF03 \uD83C\uDF0C \uD83C\uDF09 \uD83C\uDF01");

var _ref18 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Objects"), "\u231A\uFE0F \uD83D\uDCF1 \uD83D\uDCF2 \uD83D\uDCBB \u2328\uFE0F \uD83D\uDDA5 \uD83D\uDDA8 \uD83D\uDDB1 \uD83D\uDDB2 \uD83D\uDD79 \uD83D\uDDDC \uD83D\uDCBD \uD83D\uDCBE \uD83D\uDCBF \uD83D\uDCC0 \uD83D\uDCFC \uD83D\uDCF7 \uD83D\uDCF8 \uD83D\uDCF9 \uD83C\uDFA5 \uD83D\uDCFD \uD83C\uDF9E \uD83D\uDCDE \u260E\uFE0F \uD83D\uDCDF \uD83D\uDCE0 \uD83D\uDCFA \uD83D\uDCFB \uD83C\uDF99 \uD83C\uDF9A \uD83C\uDF9B \u23F1 \u23F2 \u23F0 \uD83D\uDD70 \u231B\uFE0F \u23F3 \uD83D\uDCE1 \uD83D\uDD0B \uD83D\uDD0C \uD83D\uDCA1 \uD83D\uDD26 \uD83D\uDD6F \uD83D\uDDD1 \uD83D\uDEE2 \uD83D\uDCB8 \uD83D\uDCB5 \uD83D\uDCB4 \uD83D\uDCB6 \uD83D\uDCB7 \uD83D\uDCB0 \uD83D\uDCB3 \uD83D\uDC8E \u2696\uFE0F \uD83D\uDD27 \uD83D\uDD28 \u2692 \uD83D\uDEE0 \u26CF \uD83D\uDD29 \u2699\uFE0F \u26D3 \uD83D\uDD2B \uD83D\uDCA3 \uD83D\uDD2A \uD83D\uDDE1 \u2694\uFE0F \uD83D\uDEE1 \uD83D\uDEAC \u26B0\uFE0F \u26B1\uFE0F \uD83C\uDFFA \uD83D\uDD2E \uD83D\uDCFF \uD83D\uDC88 \u2697\uFE0F \uD83D\uDD2D \uD83D\uDD2C \uD83D\uDD73 \uD83D\uDC8A \uD83D\uDC89 \uD83C\uDF21 \uD83D\uDEBD \uD83D\uDEB0 \uD83D\uDEBF \uD83D\uDEC1 \uD83D\uDEC0 \uD83D\uDEC0\uD83C\uDFFB \uD83D\uDEC0\uD83C\uDFFC \uD83D\uDEC0\uD83C\uDFFD \uD83D\uDEC0\uD83C\uDFFE \uD83D\uDEC0\uD83C\uDFFF \uD83D\uDECE \uD83D\uDD11 \uD83D\uDDDD \uD83D\uDEAA \uD83D\uDECB \uD83D\uDECF \uD83D\uDECC \uD83D\uDDBC \uD83D\uDECD \uD83D\uDED2 \uD83C\uDF81 \uD83C\uDF88 \uD83C\uDF8F \uD83C\uDF80 \uD83C\uDF8A \uD83C\uDF89 \uD83C\uDF8E \uD83C\uDFEE \uD83C\uDF90 \u2709\uFE0F \uD83D\uDCE9 \uD83D\uDCE8 \uD83D\uDCE7 \uD83D\uDC8C \uD83D\uDCE5 \uD83D\uDCE4 \uD83D\uDCE6 \uD83C\uDFF7 \uD83D\uDCEA \uD83D\uDCEB \uD83D\uDCEC \uD83D\uDCED \uD83D\uDCEE \uD83D\uDCEF \uD83D\uDCDC \uD83D\uDCC3 \uD83D\uDCC4 \uD83D\uDCD1 \uD83D\uDCCA \uD83D\uDCC8 \uD83D\uDCC9 \uD83D\uDDD2 \uD83D\uDDD3 \uD83D\uDCC6 \uD83D\uDCC5 \uD83D\uDCC7 \uD83D\uDDC3 \uD83D\uDDF3 \uD83D\uDDC4 \uD83D\uDCCB \uD83D\uDCC1 \uD83D\uDCC2 \uD83D\uDDC2 \uD83D\uDDDE \uD83D\uDCF0 \uD83D\uDCD3 \uD83D\uDCD4 \uD83D\uDCD2 \uD83D\uDCD5 \uD83D\uDCD7 \uD83D\uDCD8 \uD83D\uDCD9 \uD83D\uDCDA \uD83D\uDCD6 \uD83D\uDD16 \uD83D\uDD17 \uD83D\uDCCE \uD83D\uDD87 \uD83D\uDCD0 \uD83D\uDCCF \uD83D\uDCCC \uD83D\uDCCD \u2702\uFE0F \uD83D\uDD8A \uD83D\uDD8B \u2712\uFE0F \uD83D\uDD8C \uD83D\uDD8D \uD83D\uDCDD \u270F\uFE0F \uD83D\uDD0D \uD83D\uDD0E \uD83D\uDD0F \uD83D\uDD10 \uD83D\uDD12 \uD83D\uDD13");

var _ref19 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Symbols"), "\u2764\uFE0F \uD83E\uDDE1 \uD83D\uDC9B \uD83D\uDC9A \uD83D\uDC99 \uD83D\uDC9C \uD83D\uDDA4 \uD83D\uDC94 \u2763\uFE0F \uD83D\uDC95 \uD83D\uDC9E \uD83D\uDC93 \uD83D\uDC97 \uD83D\uDC96 \uD83D\uDC98 \uD83D\uDC9D \uD83D\uDC9F \u262E\uFE0F \u271D\uFE0F \u262A\uFE0F \uD83D\uDD49 \u2638\uFE0F \u2721\uFE0F \uD83D\uDD2F \uD83D\uDD4E \u262F\uFE0F \u2626\uFE0F \uD83D\uDED0 \u26CE \u2648\uFE0F \u2649\uFE0F \u264A\uFE0F \u264B\uFE0F \u264C\uFE0F \u264D\uFE0F \u264E\uFE0F \u264F\uFE0F \u2650\uFE0F \u2651\uFE0F \u2652\uFE0F \u2653\uFE0F \uD83C\uDD94 \u269B\uFE0F \uD83C\uDE51 \u2622\uFE0F \u2623\uFE0F \uD83D\uDCF4 \uD83D\uDCF3 \uD83C\uDE36 \uD83C\uDE1A\uFE0F \uD83C\uDE38 \uD83C\uDE3A \uD83C\uDE37\uFE0F \u2734\uFE0F \uD83C\uDD9A \uD83D\uDCAE \uD83C\uDE50 \u3299\uFE0F \u3297\uFE0F \uD83C\uDE34 \uD83C\uDE35 \uD83C\uDE39 \uD83C\uDE32 \uD83C\uDD70\uFE0F \uD83C\uDD71\uFE0F \uD83C\uDD8E \uD83C\uDD91 \uD83C\uDD7E\uFE0F \uD83C\uDD98 \u274C \u2B55\uFE0F \uD83D\uDED1 \u26D4\uFE0F \uD83D\uDCDB \uD83D\uDEAB \uD83D\uDCAF \uD83D\uDCA2 \u2668\uFE0F \uD83D\uDEB7 \uD83D\uDEAF \uD83D\uDEB3 \uD83D\uDEB1 \uD83D\uDD1E \uD83D\uDCF5 \uD83D\uDEAD \u2757\uFE0F \u2755 \u2753 \u2754 \u203C\uFE0F \u2049\uFE0F \uD83D\uDD05 \uD83D\uDD06 \u303D\uFE0F \u26A0\uFE0F \uD83D\uDEB8 \uD83D\uDD31 \u269C\uFE0F \uD83D\uDD30 \u267B\uFE0F \u2705 \uD83C\uDE2F\uFE0F \uD83D\uDCB9 \u2747\uFE0F \u2733\uFE0F \u274E \uD83C\uDF10 \uD83D\uDCA0 \u24C2\uFE0F \uD83C\uDF00 \uD83D\uDCA4 \uD83C\uDFE7 \uD83D\uDEBE \u267F\uFE0F \uD83C\uDD7F\uFE0F \uD83C\uDE33 \uD83C\uDE02\uFE0F \uD83D\uDEC2 \uD83D\uDEC3 \uD83D\uDEC4 \uD83D\uDEC5 \uD83D\uDEB9 \uD83D\uDEBA \uD83D\uDEBC \uD83D\uDEBB \uD83D\uDEAE \uD83C\uDFA6 \uD83D\uDCF6 \uD83C\uDE01 \uD83D\uDD23 \u2139\uFE0F \uD83D\uDD24 \uD83D\uDD21 \uD83D\uDD20 \uD83C\uDD96 \uD83C\uDD97 \uD83C\uDD99 \uD83C\uDD92 \uD83C\uDD95 \uD83C\uDD93 0\uFE0F\u20E3 1\uFE0F\u20E3 2\uFE0F\u20E3 3\uFE0F\u20E3 4\uFE0F\u20E3 5\uFE0F\u20E3 6\uFE0F\u20E3 7\uFE0F\u20E3 8\uFE0F\u20E3 9\uFE0F\u20E3 \uD83D\uDD1F \uD83D\uDD22 #\uFE0F\u20E3 *\uFE0F\u20E3 \u23CF\uFE0F \u25B6\uFE0F \u23F8 \u23EF \u23F9 \u23FA \u23ED \u23EE \u23E9 \u23EA \u23EB \u23EC \u25C0\uFE0F \uD83D\uDD3C \uD83D\uDD3D \u27A1\uFE0F \u2B05\uFE0F \u2B06\uFE0F \u2B07\uFE0F \u2197\uFE0F \u2198\uFE0F \u2199\uFE0F \u2196\uFE0F \u2195\uFE0F \u2194\uFE0F \u21AA\uFE0F \u21A9\uFE0F \u2934\uFE0F \u2935\uFE0F \uD83D\uDD00 \uD83D\uDD01 \uD83D\uDD02 \uD83D\uDD04 \uD83D\uDD03 \uD83C\uDFB5 \uD83C\uDFB6 \u2795 \u2796 \u2797 \u2716\uFE0F \uD83D\uDCB2 \uD83D\uDCB1 \u2122\uFE0F \xA9\uFE0F \xAE\uFE0F \u3030\uFE0F \u27B0 \u27BF \uD83D\uDD1A \uD83D\uDD19 \uD83D\uDD1B \uD83D\uDD1D \uD83D\uDD1C \u2714\uFE0F \u2611\uFE0F \uD83D\uDD18 \u26AA\uFE0F \u26AB\uFE0F \uD83D\uDD34 \uD83D\uDD35 \uD83D\uDD3A \uD83D\uDD3B \uD83D\uDD38 \uD83D\uDD39 \uD83D\uDD36 \uD83D\uDD37 \uD83D\uDD33 \uD83D\uDD32 \u25AA\uFE0F \u25AB\uFE0F \u25FE\uFE0F \u25FD\uFE0F \u25FC\uFE0F \u25FB\uFE0F \u2B1B\uFE0F \u2B1C\uFE0F \uD83D\uDD08 \uD83D\uDD07 \uD83D\uDD09 \uD83D\uDD0A \uD83D\uDD14 \uD83D\uDD15 \uD83D\uDCE3 \uD83D\uDCE2 \uD83D\uDC41\u200D\uD83D\uDDE8 \uD83D\uDCAC \uD83D\uDCAD \uD83D\uDDEF \u2660\uFE0F \u2663\uFE0F \u2665\uFE0F \u2666\uFE0F \uD83C\uDCCF \uD83C\uDFB4 \uD83C\uDC04\uFE0F \uD83D\uDD50 \uD83D\uDD51 \uD83D\uDD52 \uD83D\uDD53 \uD83D\uDD54 \uD83D\uDD55 \uD83D\uDD56 \uD83D\uDD57 \uD83D\uDD58 \uD83D\uDD59 \uD83D\uDD5A \uD83D\uDD5B \uD83D\uDD5C \uD83D\uDD5D \uD83D\uDD5E \uD83D\uDD5F \uD83D\uDD60 \uD83D\uDD61 \uD83D\uDD62 \uD83D\uDD63 \uD83D\uDD64 \uD83D\uDD65 \uD83D\uDD66 \uD83D\uDD67");

var _ref20 = react_default.a.createElement("div", null, react_default.a.createElement("h2", null, "Flags"), "\uD83C\uDFF3\uFE0F \uD83C\uDFF4 \uD83C\uDFC1 \uD83D\uDEA9 \uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08 \uD83C\uDDE6\uD83C\uDDEB \uD83C\uDDE6\uD83C\uDDFD \uD83C\uDDE6\uD83C\uDDF1 \uD83C\uDDE9\uD83C\uDDFF \uD83C\uDDE6\uD83C\uDDF8 \uD83C\uDDE6\uD83C\uDDE9 \uD83C\uDDE6\uD83C\uDDF4 \uD83C\uDDE6\uD83C\uDDEE \uD83C\uDDE6\uD83C\uDDF6 \uD83C\uDDE6\uD83C\uDDEC \uD83C\uDDE6\uD83C\uDDF7 \uD83C\uDDE6\uD83C\uDDF2 \uD83C\uDDE6\uD83C\uDDFC \uD83C\uDDE6\uD83C\uDDFA \uD83C\uDDE6\uD83C\uDDF9 \uD83C\uDDE6\uD83C\uDDFF \uD83C\uDDE7\uD83C\uDDF8 \uD83C\uDDE7\uD83C\uDDED \uD83C\uDDE7\uD83C\uDDE9 \uD83C\uDDE7\uD83C\uDDE7 \uD83C\uDDE7\uD83C\uDDFE \uD83C\uDDE7\uD83C\uDDEA \uD83C\uDDE7\uD83C\uDDFF \uD83C\uDDE7\uD83C\uDDEF \uD83C\uDDE7\uD83C\uDDF2 \uD83C\uDDE7\uD83C\uDDF9 \uD83C\uDDE7\uD83C\uDDF4 \uD83C\uDDE7\uD83C\uDDE6 \uD83C\uDDE7\uD83C\uDDFC \uD83C\uDDE7\uD83C\uDDF7 \uD83C\uDDEE\uD83C\uDDF4 \uD83C\uDDFB\uD83C\uDDEC \uD83C\uDDE7\uD83C\uDDF3 \uD83C\uDDE7\uD83C\uDDEC \uD83C\uDDE7\uD83C\uDDEB \uD83C\uDDE7\uD83C\uDDEE \uD83C\uDDF0\uD83C\uDDED \uD83C\uDDE8\uD83C\uDDF2 \uD83C\uDDE8\uD83C\uDDE6 \uD83C\uDDEE\uD83C\uDDE8 \uD83C\uDDE8\uD83C\uDDFB \uD83C\uDDE7\uD83C\uDDF6 \uD83C\uDDF0\uD83C\uDDFE \uD83C\uDDE8\uD83C\uDDEB \uD83C\uDDF9\uD83C\uDDE9 \uD83C\uDDE8\uD83C\uDDF1 \uD83C\uDDE8\uD83C\uDDF3 \uD83C\uDDE8\uD83C\uDDFD \uD83C\uDDE8\uD83C\uDDE8 \uD83C\uDDE8\uD83C\uDDF4 \uD83C\uDDF0\uD83C\uDDF2 \uD83C\uDDE8\uD83C\uDDEC \uD83C\uDDE8\uD83C\uDDE9 \uD83C\uDDE8\uD83C\uDDF0 \uD83C\uDDE8\uD83C\uDDF7 \uD83C\uDDE8\uD83C\uDDEE \uD83C\uDDED\uD83C\uDDF7 \uD83C\uDDE8\uD83C\uDDFA \uD83C\uDDE8\uD83C\uDDFC \uD83C\uDDE8\uD83C\uDDFE \uD83C\uDDE8\uD83C\uDDFF \uD83C\uDDE9\uD83C\uDDF0 \uD83C\uDDE9\uD83C\uDDEF \uD83C\uDDE9\uD83C\uDDF2 \uD83C\uDDE9\uD83C\uDDF4 \uD83C\uDDEA\uD83C\uDDE8 \uD83C\uDDEA\uD83C\uDDEC \uD83C\uDDF8\uD83C\uDDFB \uD83C\uDDEC\uD83C\uDDF6 \uD83C\uDDEA\uD83C\uDDF7 \uD83C\uDDEA\uD83C\uDDEA \uD83C\uDDEA\uD83C\uDDF9 \uD83C\uDDEA\uD83C\uDDFA \uD83C\uDDEB\uD83C\uDDF0 \uD83C\uDDEB\uD83C\uDDF4 \uD83C\uDDEB\uD83C\uDDEF \uD83C\uDDEB\uD83C\uDDEE \uD83C\uDDEB\uD83C\uDDF7 \uD83C\uDDEC\uD83C\uDDEB \uD83C\uDDF5\uD83C\uDDEB \uD83C\uDDF9\uD83C\uDDEB \uD83C\uDDEC\uD83C\uDDE6 \uD83C\uDDEC\uD83C\uDDF2 \uD83C\uDDEC\uD83C\uDDEA \uD83C\uDDE9\uD83C\uDDEA \uD83C\uDDEC\uD83C\uDDED \uD83C\uDDEC\uD83C\uDDEE \uD83C\uDDEC\uD83C\uDDF7 \uD83C\uDDEC\uD83C\uDDF1 \uD83C\uDDEC\uD83C\uDDE9 \uD83C\uDDEC\uD83C\uDDF5 \uD83C\uDDEC\uD83C\uDDFA \uD83C\uDDEC\uD83C\uDDF9 \uD83C\uDDEC\uD83C\uDDEC \uD83C\uDDEC\uD83C\uDDF3 \uD83C\uDDEC\uD83C\uDDFC \uD83C\uDDEC\uD83C\uDDFE \uD83C\uDDED\uD83C\uDDF9 \uD83C\uDDED\uD83C\uDDF3 \uD83C\uDDED\uD83C\uDDF0 \uD83C\uDDED\uD83C\uDDFA \uD83C\uDDEE\uD83C\uDDF8 \uD83C\uDDEE\uD83C\uDDF3 \uD83C\uDDEE\uD83C\uDDE9 \uD83C\uDDEE\uD83C\uDDF7 \uD83C\uDDEE\uD83C\uDDF6 \uD83C\uDDEE\uD83C\uDDEA \uD83C\uDDEE\uD83C\uDDF2 \uD83C\uDDEE\uD83C\uDDF1 \uD83C\uDDEE\uD83C\uDDF9 \uD83C\uDDEF\uD83C\uDDF2 \uD83C\uDDEF\uD83C\uDDF5 \uD83C\uDF8C \uD83C\uDDEF\uD83C\uDDEA \uD83C\uDDEF\uD83C\uDDF4 \uD83C\uDDF0\uD83C\uDDFF \uD83C\uDDF0\uD83C\uDDEA \uD83C\uDDF0\uD83C\uDDEE \uD83C\uDDFD\uD83C\uDDF0 \uD83C\uDDF0\uD83C\uDDFC \uD83C\uDDF0\uD83C\uDDEC \uD83C\uDDF1\uD83C\uDDE6 \uD83C\uDDF1\uD83C\uDDFB \uD83C\uDDF1\uD83C\uDDE7 \uD83C\uDDF1\uD83C\uDDF8 \uD83C\uDDF1\uD83C\uDDF7 \uD83C\uDDF1\uD83C\uDDFE \uD83C\uDDF1\uD83C\uDDEE \uD83C\uDDF1\uD83C\uDDF9 \uD83C\uDDF1\uD83C\uDDFA \uD83C\uDDF2\uD83C\uDDF4 \uD83C\uDDF2\uD83C\uDDF0 \uD83C\uDDF2\uD83C\uDDEC \uD83C\uDDF2\uD83C\uDDFC \uD83C\uDDF2\uD83C\uDDFE \uD83C\uDDF2\uD83C\uDDFB \uD83C\uDDF2\uD83C\uDDF1 \uD83C\uDDF2\uD83C\uDDF9 \uD83C\uDDF2\uD83C\uDDED \uD83C\uDDF2\uD83C\uDDF6 \uD83C\uDDF2\uD83C\uDDF7 \uD83C\uDDF2\uD83C\uDDFA \uD83C\uDDFE\uD83C\uDDF9 \uD83C\uDDF2\uD83C\uDDFD \uD83C\uDDEB\uD83C\uDDF2 \uD83C\uDDF2\uD83C\uDDE9 \uD83C\uDDF2\uD83C\uDDE8 \uD83C\uDDF2\uD83C\uDDF3 \uD83C\uDDF2\uD83C\uDDEA \uD83C\uDDF2\uD83C\uDDF8 \uD83C\uDDF2\uD83C\uDDE6 \uD83C\uDDF2\uD83C\uDDFF \uD83C\uDDF2\uD83C\uDDF2 \uD83C\uDDF3\uD83C\uDDE6 \uD83C\uDDF3\uD83C\uDDF7 \uD83C\uDDF3\uD83C\uDDF5 \uD83C\uDDF3\uD83C\uDDF1 \uD83C\uDDF3\uD83C\uDDE8 \uD83C\uDDF3\uD83C\uDDFF \uD83C\uDDF3\uD83C\uDDEE \uD83C\uDDF3\uD83C\uDDEA \uD83C\uDDF3\uD83C\uDDEC \uD83C\uDDF3\uD83C\uDDFA \uD83C\uDDF3\uD83C\uDDEB \uD83C\uDDF0\uD83C\uDDF5 \uD83C\uDDF2\uD83C\uDDF5 \uD83C\uDDF3\uD83C\uDDF4 \uD83C\uDDF4\uD83C\uDDF2 \uD83C\uDDF5\uD83C\uDDF0 \uD83C\uDDF5\uD83C\uDDFC \uD83C\uDDF5\uD83C\uDDF8 \uD83C\uDDF5\uD83C\uDDE6 \uD83C\uDDF5\uD83C\uDDEC \uD83C\uDDF5\uD83C\uDDFE \uD83C\uDDF5\uD83C\uDDEA \uD83C\uDDF5\uD83C\uDDED \uD83C\uDDF5\uD83C\uDDF3 \uD83C\uDDF5\uD83C\uDDF1 \uD83C\uDDF5\uD83C\uDDF9 \uD83C\uDDF5\uD83C\uDDF7 \uD83C\uDDF6\uD83C\uDDE6 \uD83C\uDDF7\uD83C\uDDEA \uD83C\uDDF7\uD83C\uDDF4 \uD83C\uDDF7\uD83C\uDDFA \uD83C\uDDF7\uD83C\uDDFC \uD83C\uDDFC\uD83C\uDDF8 \uD83C\uDDF8\uD83C\uDDF2 \uD83C\uDDF8\uD83C\uDDE6 \uD83C\uDDF8\uD83C\uDDF3 \uD83C\uDDF7\uD83C\uDDF8 \uD83C\uDDF8\uD83C\uDDE8 \uD83C\uDDF8\uD83C\uDDF1 \uD83C\uDDF8\uD83C\uDDEC \uD83C\uDDF8\uD83C\uDDFD \uD83C\uDDF8\uD83C\uDDF0 \uD83C\uDDF8\uD83C\uDDEE \uD83C\uDDEC\uD83C\uDDF8 \uD83C\uDDF8\uD83C\uDDE7 \uD83C\uDDF8\uD83C\uDDF4 \uD83C\uDDFF\uD83C\uDDE6 \uD83C\uDDF0\uD83C\uDDF7 \uD83C\uDDF8\uD83C\uDDF8 \uD83C\uDDEA\uD83C\uDDF8 \uD83C\uDDF1\uD83C\uDDF0 \uD83C\uDDE7\uD83C\uDDF1 \uD83C\uDDF8\uD83C\uDDED \uD83C\uDDF0\uD83C\uDDF3 \uD83C\uDDF1\uD83C\uDDE8 \uD83C\uDDF5\uD83C\uDDF2 \uD83C\uDDFB\uD83C\uDDE8 \uD83C\uDDF8\uD83C\uDDE9 \uD83C\uDDF8\uD83C\uDDF7 \uD83C\uDDF8\uD83C\uDDFF \uD83C\uDDF8\uD83C\uDDEA \uD83C\uDDE8\uD83C\uDDED \uD83C\uDDF8\uD83C\uDDFE \uD83C\uDDF9\uD83C\uDDFC \uD83C\uDDF9\uD83C\uDDEF \uD83C\uDDF9\uD83C\uDDFF \uD83C\uDDF9\uD83C\uDDED \uD83C\uDDF9\uD83C\uDDF1 \uD83C\uDDF9\uD83C\uDDEC \uD83C\uDDF9\uD83C\uDDF0 \uD83C\uDDF9\uD83C\uDDF4 \uD83C\uDDF9\uD83C\uDDF9 \uD83C\uDDF9\uD83C\uDDF3 \uD83C\uDDF9\uD83C\uDDF7 \uD83C\uDDF9\uD83C\uDDF2 \uD83C\uDDF9\uD83C\uDDE8 \uD83C\uDDF9\uD83C\uDDFB \uD83C\uDDFB\uD83C\uDDEE \uD83C\uDDFA\uD83C\uDDEC \uD83C\uDDFA\uD83C\uDDE6 \uD83C\uDDE6\uD83C\uDDEA \uD83C\uDDEC\uD83C\uDDE7 \uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F \uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F \uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F \uD83C\uDDFA\uD83C\uDDF8 \uD83C\uDDFA\uD83C\uDDFE \uD83C\uDDFA\uD83C\uDDFF \uD83C\uDDFB\uD83C\uDDFA \uD83C\uDDFB\uD83C\uDDE6 \uD83C\uDDFB\uD83C\uDDEA \uD83C\uDDFB\uD83C\uDDF3 \uD83C\uDDFC\uD83C\uDDEB \uD83C\uDDEA\uD83C\uDDED \uD83C\uDDFE\uD83C\uDDEA \uD83C\uDDFF\uD83C\uDDF2 \uD83C\uDDFF\uD83C\uDDFC");

function _render() {
  var _this2 = this;

  return react_default.a.createElement("center", null, react_default.a.createElement("div", {
    style: {
      textAlign: 'center',
      width: '100%',
      fontFamily: "\"Fantasque Sans Mono\", Hack, \"Fira Code\", monospace",
      maxWidth: 460
    }
  }, App_ref, react_default.a.createElement("div", null, App_ref2, react_default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
  }, react_default.a.createElement("span", {
    style: {
      margin: '0 16px 16px'
    }
  }, "Use sprites?", App_ref3, react_default.a.createElement("input", {
    type: "checkbox",
    defaultChecked: this.state.useSprites,
    onChange: function onChange(e) {
      return _this2.setState({
        useSprites: e.target.checked
      });
    }
  })), react_default.a.createElement("span", {
    style: {
      margin: '0 16px 16px'
    }
  }, "Size?", App_ref4, react_default.a.createElement("input", {
    defaultValue: this.state.size,
    type: "number",
    onChange: function onChange(e) {
      return _this2.setState({
        size: parse_int_default()(e.target.value)
      });
    }
  })), react_default.a.createElement("span", {
    style: {
      margin: '0 16px 16px'
    }
  }, "High DPI?", App_ref5, react_default.a.createElement("input", {
    type: "checkbox",
    defaultChecked: this.state.hiDpi,
    onChange: function onChange(e) {
      return _this2.setState({
        hiDpi: e.target.checked
      });
    }
  })))), react_default.a.createElement(es_Emojis, {
    size: this.state.size,
    render: this.state.useSprites ? es_EmojiSprite : void 0,
    hiDpi: this.state.hiDpi
  }, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20)));
}

var App_App = function (_React$PureComponent) {
  inheritsLoose_default()(App, _React$PureComponent);

  function App() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      useSprites: false,
      size: 32,
      hiDpi: false
    };
    return _this;
  }

  var _proto = App.prototype;
  _proto.render = _render;
  return App;
}(react_default.a.PureComponent);


// CONCATENATED MODULE: ./src/server/render.js


/* harmony default export */ var server_render = __webpack_exports__["default"] = (function (_ref) {
  var clientStats = _ref.clientStats;
  return createRenderer({
    clientStats: clientStats,
    App: App_App
  });
});

/***/ })
/******/ ]);