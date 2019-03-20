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
/******/ 	return __webpack_require__(__webpack_require__.s = 163);
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
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ 148);
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

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ 162);

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
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 101);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 102);
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
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 91);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 92);
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
var IObject = __webpack_require__(/*! ./_iobject */ 108);
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

module.exports = __webpack_require__(/*! regenerator-runtime */ 89);


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
var aFunction = __webpack_require__(/*! ./_a-function */ 93);
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
var asc = __webpack_require__(/*! ./_array-species-create */ 94);
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

var $at = __webpack_require__(/*! ./_string-at */ 100)(true);

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
var redefine = __webpack_require__(/*! ./_redefine */ 103);
var hide = __webpack_require__(/*! ./_hide */ 10);
var Iterators = __webpack_require__(/*! ./_iterators */ 14);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 104);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 38);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 111);
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
var dPs = __webpack_require__(/*! ./_object-dps */ 105);
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

__webpack_require__(/*! ./es6.array.iterator */ 113);
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
var invoke = __webpack_require__(/*! ./_invoke */ 121);
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
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 137);
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
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 160)();
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

var _Promise = __webpack_require__(/*! ../core-js/promise */ 97);

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

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ 143);

/***/ }),
/* 82 */
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ 145);

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


module.exports = __webpack_require__(/*! ./server.node */ 149);


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

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ 153);

/***/ }),
/* 87 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inheritsLoose.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ 157);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 88 */
/*!************************************************************************************!*\
  !*** ./node_modules/react-emoji-component/node_modules/grapheme-splitter/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/*
Breaks a Javascript string into individual user-perceived "characters" 
called extended grapheme clusters by implementing the Unicode UAX-29 standard, version 10.0.0

Usage:
var splitter = new GraphemeSplitter();
//returns an array of strings, one string for each grapheme cluster
var graphemes = splitter.splitGraphemes(string); 

*/
function GraphemeSplitter(){
	var CR = 0,
		LF = 1,
		Control = 2,
		Extend = 3,
		Regional_Indicator = 4,
		SpacingMark = 5,
		L = 6,
		V = 7,
		T = 8,
		LV = 9,
		LVT = 10,
		Other = 11,
		Prepend = 12,
		E_Base = 13,
		E_Modifier = 14,
		ZWJ = 15,
		Glue_After_Zwj = 16,
		E_Base_GAZ = 17;
		
	// BreakTypes
	var NotBreak = 0,
		BreakStart = 1,
		Break = 2,
		BreakLastRegional = 3,
		BreakPenultimateRegional = 4;
		
	function isSurrogate(str, pos) {
		return  0xd800 <= str.charCodeAt(pos) && str.charCodeAt(pos) <= 0xdbff && 
				0xdc00 <= str.charCodeAt(pos + 1) && str.charCodeAt(pos + 1) <= 0xdfff;
	}
		
	// Private function, gets a Unicode code point from a JavaScript UTF-16 string
	// handling surrogate pairs appropriately
	function codePointAt(str, idx){
		if(idx === undefined){
			idx = 0;
		}
		var code = str.charCodeAt(idx);

		// if a high surrogate
		if (0xD800 <= code && code <= 0xDBFF && 
			idx < str.length - 1){
			var hi = code;
			var low = str.charCodeAt(idx + 1);
			if (0xDC00 <= low && low <= 0xDFFF){
				return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
			}
			return hi;
		}
		
		// if a low surrogate
		if (0xDC00 <= code && code <= 0xDFFF &&
			idx >= 1){
			var hi = str.charCodeAt(idx - 1);
			var low = code;
			if (0xD800 <= hi && hi <= 0xDBFF){
				return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
			}
			return low;
		}
		
		//just return the char if an unmatched surrogate half or a 
		//single-char codepoint
		return code;
	}
	
	// Private function, returns whether a break is allowed between the 
	// two given grapheme breaking classes
	function shouldBreak(start, mid, end){
		var all = [start].concat(mid).concat([end]);
		var previous = all[all.length - 2]
		var next = end
		
		// Lookahead termintor for:
		// GB10. (E_Base | EBG) Extend* ?	E_Modifier
		var eModifierIndex = all.lastIndexOf(E_Modifier)
		if(eModifierIndex > 1 &&
			all.slice(1, eModifierIndex).every(function(c){return c == Extend}) &&
			[Extend, E_Base, E_Base_GAZ].indexOf(start) == -1){
			return Break
		}

		// Lookahead termintor for:
		// GB12. ^ (RI RI)* RI	?	RI
		// GB13. [^RI] (RI RI)* RI	?	RI
		var rIIndex = all.lastIndexOf(Regional_Indicator)
		if(rIIndex > 0 &&
			all.slice(1, rIIndex).every(function(c){return c == Regional_Indicator}) &&
			[Prepend, Regional_Indicator].indexOf(previous) == -1) { 
			if(all.filter(function(c){return c == Regional_Indicator}).length % 2 == 1) {
				return BreakLastRegional
			}
			else {
				return BreakPenultimateRegional
			}
		}
		
		// GB3. CR X LF
		if(previous == CR && next == LF){
			return NotBreak;
		}
		// GB4. (Control|CR|LF) ÷
		else if(previous == Control || previous == CR || previous == LF){
			if(next == E_Modifier && mid.every(function(c){return c == Extend})){
				return Break
			}
			else {
				return BreakStart
			}
		}
		// GB5. ÷ (Control|CR|LF)
		else if(next == Control || next == CR || next == LF){
			return BreakStart;
		}
		// GB6. L X (L|V|LV|LVT)
		else if(previous == L && 
			(next == L || next == V || next == LV || next == LVT)){
			return NotBreak;
		}
		// GB7. (LV|V) X (V|T)
		else if((previous == LV || previous == V) && 
			(next == V || next == T)){
			return NotBreak;
		}
		// GB8. (LVT|T) X (T)
		else if((previous == LVT || previous == T) && 
			next == T){
			return NotBreak;
		}
		// GB9. X (Extend|ZWJ)
		else if (next == Extend || next == ZWJ){
			return NotBreak;
		}
		// GB9a. X SpacingMark
		else if(next == SpacingMark){
			return NotBreak;
		}
		// GB9b. Prepend X
		else if (previous == Prepend){
			return NotBreak;
		}
		
		// GB10. (E_Base | EBG) Extend* ?	E_Modifier
		var previousNonExtendIndex = all.indexOf(Extend) != -1 ? all.lastIndexOf(Extend) - 1 : all.length - 2;
		if([E_Base, E_Base_GAZ].indexOf(all[previousNonExtendIndex]) != -1 &&
			all.slice(previousNonExtendIndex + 1, -1).every(function(c){return c == Extend}) &&
			next == E_Modifier){
			return NotBreak;
		}
		
		// GB11. ZWJ ? (Glue_After_Zwj | EBG)
		if(previous == ZWJ && [Glue_After_Zwj, E_Base_GAZ].indexOf(next) != -1) {
			return NotBreak;
		}

		// GB12. ^ (RI RI)* RI ? RI
		// GB13. [^RI] (RI RI)* RI ? RI
		if(mid.indexOf(Regional_Indicator) != -1) { 
			return Break;
		}
		if(previous == Regional_Indicator && next == Regional_Indicator) {
			return NotBreak;
		}

		// GB999. Any ? Any
		return BreakStart;
	}
	
	// Returns the next grapheme break in the string after the given index
	this.nextBreak = function(string, index){
		if(index === undefined){
			index = 0;
		}
		if(index < 0){
			return 0;
		}
		if(index >= string.length - 1){
			return string.length;
		}
		var prev = getGraphemeBreakProperty(codePointAt(string, index));
		var mid = []
		for (var i = index + 1; i < string.length; i++) {
			// check for already processed low surrogates
			if(isSurrogate(string, i - 1)){
				continue;
			}
		
			var next = getGraphemeBreakProperty(codePointAt(string, i));
			if(shouldBreak(prev, mid, next)){
				return i;
			}
			
			mid.push(next);
		}
		return string.length;
	};
	
	// Breaks the given string into an array of grapheme cluster strings
	this.splitGraphemes = function(str){
		var res = [];
		var index = 0;
		var brk;
		while((brk = this.nextBreak(str, index)) < str.length){
			res.push(str.slice(index, brk));
			index = brk;
		}
		if(index < str.length){
			res.push(str.slice(index));
		}
		return res;
	};

	// Returns the iterator of grapheme clusters there are in the given string
	this.iterateGraphemes = function(str) {
		var index = 0;
		var res = {
			next: (function() {
				var value;
				var brk;
				if ((brk = this.nextBreak(str, index)) < str.length) {
					value = str.slice(index, brk);
					index = brk;
					return { value: value, done: false };
				}
				if (index < str.length) {
					value = str.slice(index);
					index = str.length;
					return { value: value, done: false };
				}
				return { value: undefined, done: true };
			}).bind(this)
		};
		// ES2015 @@iterator method (iterable) for spread syntax and for...of statement
		if (typeof Symbol !== 'undefined' && Symbol.iterator) {
			res[Symbol.iterator] = function() {return res};
		}
		return res;
	};

	// Returns the number of grapheme clusters there are in the given string
	this.countGraphemes = function(str){
		var count = 0;
		var index = 0;
		var brk;
		while((brk = this.nextBreak(str, index)) < str.length){
			index = brk;
			count++;
		}
		if(index < str.length){
			count++;
		}
		return count;
	};
	
	//given a Unicode code point, determines this symbol's grapheme break property
	function getGraphemeBreakProperty(code){
		
		//grapheme break property for Unicode 10.0.0, 
		//taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
		//and adapted to JavaScript rules
		
		if(		
		(0x0600 <= code && code <= 0x0605) || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
		0x06DD == code || // Cf       ARABIC END OF AYAH
		0x070F == code || // Cf       SYRIAC ABBREVIATION MARK
		0x08E2 == code || // Cf       ARABIC DISPUTED END OF AYAH
		0x0D4E == code || // Lo       MALAYALAM LETTER DOT REPH
		0x110BD == code || // Cf       KAITHI NUMBER SIGN
		(0x111C2 <= code && code <= 0x111C3) || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
		0x11A3A == code || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
		(0x11A86 <= code && code <= 0x11A89) || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
		0x11D46 == code // Lo       MASARAM GONDI REPHA
		){
			return Prepend;
		}
		if(
		0x000D == code // Cc       <control-000D>
		){
			return CR;
		}
		
		if(
		0x000A == code // Cc       <control-000A>
		){
			return LF;
		}
		
		
		if(
		(0x0000 <= code && code <= 0x0009) || // Cc  [10] <control-0000>..<control-0009>
		(0x000B <= code && code <= 0x000C) || // Cc   [2] <control-000B>..<control-000C>
		(0x000E <= code && code <= 0x001F) || // Cc  [18] <control-000E>..<control-001F>
		(0x007F <= code && code <= 0x009F) || // Cc  [33] <control-007F>..<control-009F>
		0x00AD == code || // Cf       SOFT HYPHEN
		0x061C == code || // Cf       ARABIC LETTER MARK
	
		0x180E == code || // Cf       MONGOLIAN VOWEL SEPARATOR
		0x200B == code || // Cf       ZERO WIDTH SPACE
		(0x200E <= code && code <= 0x200F) || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
		0x2028 == code || // Zl       LINE SEPARATOR
		0x2029 == code || // Zp       PARAGRAPH SEPARATOR
		(0x202A <= code && code <= 0x202E) || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
		(0x2060 <= code && code <= 0x2064) || // Cf   [5] WORD JOINER..INVISIBLE PLUS
		0x2065 == code || // Cn       <reserved-2065>
		(0x2066 <= code && code <= 0x206F) || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
		(0xD800 <= code && code <= 0xDFFF) || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
		0xFEFF == code || // Cf       ZERO WIDTH NO-BREAK SPACE
		(0xFFF0 <= code && code <= 0xFFF8) || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
		(0xFFF9 <= code && code <= 0xFFFB) || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
		(0x1BCA0 <= code && code <= 0x1BCA3) || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
		(0x1D173 <= code && code <= 0x1D17A) || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
		0xE0000 == code || // Cn       <reserved-E0000>
		0xE0001 == code || // Cf       LANGUAGE TAG
		(0xE0002 <= code && code <= 0xE001F) || // Cn  [30] <reserved-E0002>..<reserved-E001F>
		(0xE0080 <= code && code <= 0xE00FF) || // Cn [128] <reserved-E0080>..<reserved-E00FF>
		(0xE01F0 <= code && code <= 0xE0FFF) // Cn [3600] <reserved-E01F0>..<reserved-E0FFF>
		){
			return Control;
		}
		
		
		if(
		(0x0300 <= code && code <= 0x036F) || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
		(0x0483 <= code && code <= 0x0487) || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
		(0x0488 <= code && code <= 0x0489) || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
		(0x0591 <= code && code <= 0x05BD) || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
		0x05BF == code || // Mn       HEBREW POINT RAFE
		(0x05C1 <= code && code <= 0x05C2) || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
		(0x05C4 <= code && code <= 0x05C5) || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
		0x05C7 == code || // Mn       HEBREW POINT QAMATS QATAN
		(0x0610 <= code && code <= 0x061A) || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
		(0x064B <= code && code <= 0x065F) || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
		0x0670 == code || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
		(0x06D6 <= code && code <= 0x06DC) || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
		(0x06DF <= code && code <= 0x06E4) || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
		(0x06E7 <= code && code <= 0x06E8) || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
		(0x06EA <= code && code <= 0x06ED) || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
		0x0711 == code || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
		(0x0730 <= code && code <= 0x074A) || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
		(0x07A6 <= code && code <= 0x07B0) || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
		(0x07EB <= code && code <= 0x07F3) || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
		(0x0816 <= code && code <= 0x0819) || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
		(0x081B <= code && code <= 0x0823) || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
		(0x0825 <= code && code <= 0x0827) || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
		(0x0829 <= code && code <= 0x082D) || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
		(0x0859 <= code && code <= 0x085B) || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
		(0x08D4 <= code && code <= 0x08E1) || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
		(0x08E3 <= code && code <= 0x0902) || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
		0x093A == code || // Mn       DEVANAGARI VOWEL SIGN OE
		0x093C == code || // Mn       DEVANAGARI SIGN NUKTA
		(0x0941 <= code && code <= 0x0948) || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
		0x094D == code || // Mn       DEVANAGARI SIGN VIRAMA
		(0x0951 <= code && code <= 0x0957) || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
		(0x0962 <= code && code <= 0x0963) || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
		0x0981 == code || // Mn       BENGALI SIGN CANDRABINDU
		0x09BC == code || // Mn       BENGALI SIGN NUKTA
		0x09BE == code || // Mc       BENGALI VOWEL SIGN AA
		(0x09C1 <= code && code <= 0x09C4) || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
		0x09CD == code || // Mn       BENGALI SIGN VIRAMA
		0x09D7 == code || // Mc       BENGALI AU LENGTH MARK
		(0x09E2 <= code && code <= 0x09E3) || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
		(0x0A01 <= code && code <= 0x0A02) || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
		0x0A3C == code || // Mn       GURMUKHI SIGN NUKTA
		(0x0A41 <= code && code <= 0x0A42) || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
		(0x0A47 <= code && code <= 0x0A48) || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
		(0x0A4B <= code && code <= 0x0A4D) || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
		0x0A51 == code || // Mn       GURMUKHI SIGN UDAAT
		(0x0A70 <= code && code <= 0x0A71) || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
		0x0A75 == code || // Mn       GURMUKHI SIGN YAKASH
		(0x0A81 <= code && code <= 0x0A82) || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
		0x0ABC == code || // Mn       GUJARATI SIGN NUKTA
		(0x0AC1 <= code && code <= 0x0AC5) || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
		(0x0AC7 <= code && code <= 0x0AC8) || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
		0x0ACD == code || // Mn       GUJARATI SIGN VIRAMA
		(0x0AE2 <= code && code <= 0x0AE3) || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
		(0x0AFA <= code && code <= 0x0AFF) || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
		0x0B01 == code || // Mn       ORIYA SIGN CANDRABINDU
		0x0B3C == code || // Mn       ORIYA SIGN NUKTA
		0x0B3E == code || // Mc       ORIYA VOWEL SIGN AA
		0x0B3F == code || // Mn       ORIYA VOWEL SIGN I
		(0x0B41 <= code && code <= 0x0B44) || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
		0x0B4D == code || // Mn       ORIYA SIGN VIRAMA
		0x0B56 == code || // Mn       ORIYA AI LENGTH MARK
		0x0B57 == code || // Mc       ORIYA AU LENGTH MARK
		(0x0B62 <= code && code <= 0x0B63) || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
		0x0B82 == code || // Mn       TAMIL SIGN ANUSVARA
		0x0BBE == code || // Mc       TAMIL VOWEL SIGN AA
		0x0BC0 == code || // Mn       TAMIL VOWEL SIGN II
		0x0BCD == code || // Mn       TAMIL SIGN VIRAMA
		0x0BD7 == code || // Mc       TAMIL AU LENGTH MARK
		0x0C00 == code || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
		(0x0C3E <= code && code <= 0x0C40) || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
		(0x0C46 <= code && code <= 0x0C48) || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
		(0x0C4A <= code && code <= 0x0C4D) || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
		(0x0C55 <= code && code <= 0x0C56) || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
		(0x0C62 <= code && code <= 0x0C63) || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
		0x0C81 == code || // Mn       KANNADA SIGN CANDRABINDU
		0x0CBC == code || // Mn       KANNADA SIGN NUKTA
		0x0CBF == code || // Mn       KANNADA VOWEL SIGN I
		0x0CC2 == code || // Mc       KANNADA VOWEL SIGN UU
		0x0CC6 == code || // Mn       KANNADA VOWEL SIGN E
		(0x0CCC <= code && code <= 0x0CCD) || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
		(0x0CD5 <= code && code <= 0x0CD6) || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
		(0x0CE2 <= code && code <= 0x0CE3) || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
		(0x0D00 <= code && code <= 0x0D01) || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
		(0x0D3B <= code && code <= 0x0D3C) || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
		0x0D3E == code || // Mc       MALAYALAM VOWEL SIGN AA
		(0x0D41 <= code && code <= 0x0D44) || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
		0x0D4D == code || // Mn       MALAYALAM SIGN VIRAMA
		0x0D57 == code || // Mc       MALAYALAM AU LENGTH MARK
		(0x0D62 <= code && code <= 0x0D63) || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
		0x0DCA == code || // Mn       SINHALA SIGN AL-LAKUNA
		0x0DCF == code || // Mc       SINHALA VOWEL SIGN AELA-PILLA
		(0x0DD2 <= code && code <= 0x0DD4) || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
		0x0DD6 == code || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
		0x0DDF == code || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
		0x0E31 == code || // Mn       THAI CHARACTER MAI HAN-AKAT
		(0x0E34 <= code && code <= 0x0E3A) || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
		(0x0E47 <= code && code <= 0x0E4E) || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
		0x0EB1 == code || // Mn       LAO VOWEL SIGN MAI KAN
		(0x0EB4 <= code && code <= 0x0EB9) || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
		(0x0EBB <= code && code <= 0x0EBC) || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
		(0x0EC8 <= code && code <= 0x0ECD) || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
		(0x0F18 <= code && code <= 0x0F19) || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
		0x0F35 == code || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
		0x0F37 == code || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
		0x0F39 == code || // Mn       TIBETAN MARK TSA -PHRU
		(0x0F71 <= code && code <= 0x0F7E) || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
		(0x0F80 <= code && code <= 0x0F84) || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
		(0x0F86 <= code && code <= 0x0F87) || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
		(0x0F8D <= code && code <= 0x0F97) || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
		(0x0F99 <= code && code <= 0x0FBC) || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
		0x0FC6 == code || // Mn       TIBETAN SYMBOL PADMA GDAN
		(0x102D <= code && code <= 0x1030) || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
		(0x1032 <= code && code <= 0x1037) || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
		(0x1039 <= code && code <= 0x103A) || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
		(0x103D <= code && code <= 0x103E) || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
		(0x1058 <= code && code <= 0x1059) || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
		(0x105E <= code && code <= 0x1060) || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
		(0x1071 <= code && code <= 0x1074) || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
		0x1082 == code || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
		(0x1085 <= code && code <= 0x1086) || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
		0x108D == code || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
		0x109D == code || // Mn       MYANMAR VOWEL SIGN AITON AI
		(0x135D <= code && code <= 0x135F) || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
		(0x1712 <= code && code <= 0x1714) || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
		(0x1732 <= code && code <= 0x1734) || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
		(0x1752 <= code && code <= 0x1753) || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
		(0x1772 <= code && code <= 0x1773) || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
		(0x17B4 <= code && code <= 0x17B5) || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
		(0x17B7 <= code && code <= 0x17BD) || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
		0x17C6 == code || // Mn       KHMER SIGN NIKAHIT
		(0x17C9 <= code && code <= 0x17D3) || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
		0x17DD == code || // Mn       KHMER SIGN ATTHACAN
		(0x180B <= code && code <= 0x180D) || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
		(0x1885 <= code && code <= 0x1886) || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
		0x18A9 == code || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
		(0x1920 <= code && code <= 0x1922) || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
		(0x1927 <= code && code <= 0x1928) || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
		0x1932 == code || // Mn       LIMBU SMALL LETTER ANUSVARA
		(0x1939 <= code && code <= 0x193B) || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
		(0x1A17 <= code && code <= 0x1A18) || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
		0x1A1B == code || // Mn       BUGINESE VOWEL SIGN AE
		0x1A56 == code || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
		(0x1A58 <= code && code <= 0x1A5E) || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
		0x1A60 == code || // Mn       TAI THAM SIGN SAKOT
		0x1A62 == code || // Mn       TAI THAM VOWEL SIGN MAI SAT
		(0x1A65 <= code && code <= 0x1A6C) || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
		(0x1A73 <= code && code <= 0x1A7C) || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
		0x1A7F == code || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
		(0x1AB0 <= code && code <= 0x1ABD) || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
		0x1ABE == code || // Me       COMBINING PARENTHESES OVERLAY
		(0x1B00 <= code && code <= 0x1B03) || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
		0x1B34 == code || // Mn       BALINESE SIGN REREKAN
		(0x1B36 <= code && code <= 0x1B3A) || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
		0x1B3C == code || // Mn       BALINESE VOWEL SIGN LA LENGA
		0x1B42 == code || // Mn       BALINESE VOWEL SIGN PEPET
		(0x1B6B <= code && code <= 0x1B73) || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
		(0x1B80 <= code && code <= 0x1B81) || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
		(0x1BA2 <= code && code <= 0x1BA5) || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
		(0x1BA8 <= code && code <= 0x1BA9) || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
		(0x1BAB <= code && code <= 0x1BAD) || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
		0x1BE6 == code || // Mn       BATAK SIGN TOMPI
		(0x1BE8 <= code && code <= 0x1BE9) || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
		0x1BED == code || // Mn       BATAK VOWEL SIGN KARO O
		(0x1BEF <= code && code <= 0x1BF1) || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
		(0x1C2C <= code && code <= 0x1C33) || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
		(0x1C36 <= code && code <= 0x1C37) || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
		(0x1CD0 <= code && code <= 0x1CD2) || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
		(0x1CD4 <= code && code <= 0x1CE0) || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
		(0x1CE2 <= code && code <= 0x1CE8) || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
		0x1CED == code || // Mn       VEDIC SIGN TIRYAK
		0x1CF4 == code || // Mn       VEDIC TONE CANDRA ABOVE
		(0x1CF8 <= code && code <= 0x1CF9) || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
		(0x1DC0 <= code && code <= 0x1DF9) || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
		(0x1DFB <= code && code <= 0x1DFF) || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
		0x200C == code || // Cf       ZERO WIDTH NON-JOINER
		(0x20D0 <= code && code <= 0x20DC) || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
		(0x20DD <= code && code <= 0x20E0) || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
		0x20E1 == code || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
		(0x20E2 <= code && code <= 0x20E4) || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
		(0x20E5 <= code && code <= 0x20F0) || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
		(0x2CEF <= code && code <= 0x2CF1) || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
		0x2D7F == code || // Mn       TIFINAGH CONSONANT JOINER
		(0x2DE0 <= code && code <= 0x2DFF) || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
		(0x302A <= code && code <= 0x302D) || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
		(0x302E <= code && code <= 0x302F) || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
		(0x3099 <= code && code <= 0x309A) || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
		0xA66F == code || // Mn       COMBINING CYRILLIC VZMET
		(0xA670 <= code && code <= 0xA672) || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
		(0xA674 <= code && code <= 0xA67D) || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
		(0xA69E <= code && code <= 0xA69F) || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
		(0xA6F0 <= code && code <= 0xA6F1) || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
		0xA802 == code || // Mn       SYLOTI NAGRI SIGN DVISVARA
		0xA806 == code || // Mn       SYLOTI NAGRI SIGN HASANTA
		0xA80B == code || // Mn       SYLOTI NAGRI SIGN ANUSVARA
		(0xA825 <= code && code <= 0xA826) || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
		(0xA8C4 <= code && code <= 0xA8C5) || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
		(0xA8E0 <= code && code <= 0xA8F1) || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
		(0xA926 <= code && code <= 0xA92D) || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
		(0xA947 <= code && code <= 0xA951) || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
		(0xA980 <= code && code <= 0xA982) || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
		0xA9B3 == code || // Mn       JAVANESE SIGN CECAK TELU
		(0xA9B6 <= code && code <= 0xA9B9) || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
		0xA9BC == code || // Mn       JAVANESE VOWEL SIGN PEPET
		0xA9E5 == code || // Mn       MYANMAR SIGN SHAN SAW
		(0xAA29 <= code && code <= 0xAA2E) || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
		(0xAA31 <= code && code <= 0xAA32) || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
		(0xAA35 <= code && code <= 0xAA36) || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
		0xAA43 == code || // Mn       CHAM CONSONANT SIGN FINAL NG
		0xAA4C == code || // Mn       CHAM CONSONANT SIGN FINAL M
		0xAA7C == code || // Mn       MYANMAR SIGN TAI LAING TONE-2
		0xAAB0 == code || // Mn       TAI VIET MAI KANG
		(0xAAB2 <= code && code <= 0xAAB4) || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
		(0xAAB7 <= code && code <= 0xAAB8) || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
		(0xAABE <= code && code <= 0xAABF) || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
		0xAAC1 == code || // Mn       TAI VIET TONE MAI THO
		(0xAAEC <= code && code <= 0xAAED) || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
		0xAAF6 == code || // Mn       MEETEI MAYEK VIRAMA
		0xABE5 == code || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
		0xABE8 == code || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
		0xABED == code || // Mn       MEETEI MAYEK APUN IYEK
		0xFB1E == code || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
		(0xFE00 <= code && code <= 0xFE0F) || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
		(0xFE20 <= code && code <= 0xFE2F) || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
		(0xFF9E <= code && code <= 0xFF9F) || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
		0x101FD == code || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
		0x102E0 == code || // Mn       COPTIC EPACT THOUSANDS MARK
		(0x10376 <= code && code <= 0x1037A) || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
		(0x10A01 <= code && code <= 0x10A03) || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
		(0x10A05 <= code && code <= 0x10A06) || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
		(0x10A0C <= code && code <= 0x10A0F) || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
		(0x10A38 <= code && code <= 0x10A3A) || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
		0x10A3F == code || // Mn       KHAROSHTHI VIRAMA
		(0x10AE5 <= code && code <= 0x10AE6) || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
		0x11001 == code || // Mn       BRAHMI SIGN ANUSVARA
		(0x11038 <= code && code <= 0x11046) || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
		(0x1107F <= code && code <= 0x11081) || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
		(0x110B3 <= code && code <= 0x110B6) || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
		(0x110B9 <= code && code <= 0x110BA) || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
		(0x11100 <= code && code <= 0x11102) || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
		(0x11127 <= code && code <= 0x1112B) || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
		(0x1112D <= code && code <= 0x11134) || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
		0x11173 == code || // Mn       MAHAJANI SIGN NUKTA
		(0x11180 <= code && code <= 0x11181) || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
		(0x111B6 <= code && code <= 0x111BE) || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
		(0x111CA <= code && code <= 0x111CC) || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
		(0x1122F <= code && code <= 0x11231) || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
		0x11234 == code || // Mn       KHOJKI SIGN ANUSVARA
		(0x11236 <= code && code <= 0x11237) || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
		0x1123E == code || // Mn       KHOJKI SIGN SUKUN
		0x112DF == code || // Mn       KHUDAWADI SIGN ANUSVARA
		(0x112E3 <= code && code <= 0x112EA) || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
		(0x11300 <= code && code <= 0x11301) || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
		0x1133C == code || // Mn       GRANTHA SIGN NUKTA
		0x1133E == code || // Mc       GRANTHA VOWEL SIGN AA
		0x11340 == code || // Mn       GRANTHA VOWEL SIGN II
		0x11357 == code || // Mc       GRANTHA AU LENGTH MARK
		(0x11366 <= code && code <= 0x1136C) || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
		(0x11370 <= code && code <= 0x11374) || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
		(0x11438 <= code && code <= 0x1143F) || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
		(0x11442 <= code && code <= 0x11444) || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
		0x11446 == code || // Mn       NEWA SIGN NUKTA
		0x114B0 == code || // Mc       TIRHUTA VOWEL SIGN AA
		(0x114B3 <= code && code <= 0x114B8) || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
		0x114BA == code || // Mn       TIRHUTA VOWEL SIGN SHORT E
		0x114BD == code || // Mc       TIRHUTA VOWEL SIGN SHORT O
		(0x114BF <= code && code <= 0x114C0) || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
		(0x114C2 <= code && code <= 0x114C3) || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
		0x115AF == code || // Mc       SIDDHAM VOWEL SIGN AA
		(0x115B2 <= code && code <= 0x115B5) || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
		(0x115BC <= code && code <= 0x115BD) || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
		(0x115BF <= code && code <= 0x115C0) || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
		(0x115DC <= code && code <= 0x115DD) || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
		(0x11633 <= code && code <= 0x1163A) || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
		0x1163D == code || // Mn       MODI SIGN ANUSVARA
		(0x1163F <= code && code <= 0x11640) || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
		0x116AB == code || // Mn       TAKRI SIGN ANUSVARA
		0x116AD == code || // Mn       TAKRI VOWEL SIGN AA
		(0x116B0 <= code && code <= 0x116B5) || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
		0x116B7 == code || // Mn       TAKRI SIGN NUKTA
		(0x1171D <= code && code <= 0x1171F) || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
		(0x11722 <= code && code <= 0x11725) || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
		(0x11727 <= code && code <= 0x1172B) || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
		(0x11A01 <= code && code <= 0x11A06) || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
		(0x11A09 <= code && code <= 0x11A0A) || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
		(0x11A33 <= code && code <= 0x11A38) || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
		(0x11A3B <= code && code <= 0x11A3E) || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
		0x11A47 == code || // Mn       ZANABAZAR SQUARE SUBJOINER
		(0x11A51 <= code && code <= 0x11A56) || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
		(0x11A59 <= code && code <= 0x11A5B) || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
		(0x11A8A <= code && code <= 0x11A96) || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
		(0x11A98 <= code && code <= 0x11A99) || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
		(0x11C30 <= code && code <= 0x11C36) || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
		(0x11C38 <= code && code <= 0x11C3D) || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
		0x11C3F == code || // Mn       BHAIKSUKI SIGN VIRAMA
		(0x11C92 <= code && code <= 0x11CA7) || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
		(0x11CAA <= code && code <= 0x11CB0) || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
		(0x11CB2 <= code && code <= 0x11CB3) || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
		(0x11CB5 <= code && code <= 0x11CB6) || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
		(0x11D31 <= code && code <= 0x11D36) || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
		0x11D3A == code || // Mn       MASARAM GONDI VOWEL SIGN E
		(0x11D3C <= code && code <= 0x11D3D) || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
		(0x11D3F <= code && code <= 0x11D45) || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
		0x11D47 == code || // Mn       MASARAM GONDI RA-KARA
		(0x16AF0 <= code && code <= 0x16AF4) || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
		(0x16B30 <= code && code <= 0x16B36) || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
		(0x16F8F <= code && code <= 0x16F92) || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
		(0x1BC9D <= code && code <= 0x1BC9E) || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
		0x1D165 == code || // Mc       MUSICAL SYMBOL COMBINING STEM
		(0x1D167 <= code && code <= 0x1D169) || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
		(0x1D16E <= code && code <= 0x1D172) || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
		(0x1D17B <= code && code <= 0x1D182) || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
		(0x1D185 <= code && code <= 0x1D18B) || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
		(0x1D1AA <= code && code <= 0x1D1AD) || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
		(0x1D242 <= code && code <= 0x1D244) || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
		(0x1DA00 <= code && code <= 0x1DA36) || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
		(0x1DA3B <= code && code <= 0x1DA6C) || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
		0x1DA75 == code || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
		0x1DA84 == code || // Mn       SIGNWRITING LOCATION HEAD NECK
		(0x1DA9B <= code && code <= 0x1DA9F) || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
		(0x1DAA1 <= code && code <= 0x1DAAF) || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
		(0x1E000 <= code && code <= 0x1E006) || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
		(0x1E008 <= code && code <= 0x1E018) || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
		(0x1E01B <= code && code <= 0x1E021) || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
		(0x1E023 <= code && code <= 0x1E024) || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
		(0x1E026 <= code && code <= 0x1E02A) || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
		(0x1E8D0 <= code && code <= 0x1E8D6) || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
		(0x1E944 <= code && code <= 0x1E94A) || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
		(0xE0020 <= code && code <= 0xE007F) || // Cf  [96] TAG SPACE..CANCEL TAG
		(0xE0100 <= code && code <= 0xE01EF) // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
		){
			return Extend;
		}
		
		
		if(
		(0x1F1E6 <= code && code <= 0x1F1FF) // So  [26] REGIONAL INDICATOR SYMBOL LETTER A..REGIONAL INDICATOR SYMBOL LETTER Z
		){
			return Regional_Indicator;
		}
		
		if(
		0x0903 == code || // Mc       DEVANAGARI SIGN VISARGA
		0x093B == code || // Mc       DEVANAGARI VOWEL SIGN OOE
		(0x093E <= code && code <= 0x0940) || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
		(0x0949 <= code && code <= 0x094C) || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
		(0x094E <= code && code <= 0x094F) || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
		(0x0982 <= code && code <= 0x0983) || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
		(0x09BF <= code && code <= 0x09C0) || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
		(0x09C7 <= code && code <= 0x09C8) || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
		(0x09CB <= code && code <= 0x09CC) || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
		0x0A03 == code || // Mc       GURMUKHI SIGN VISARGA
		(0x0A3E <= code && code <= 0x0A40) || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
		0x0A83 == code || // Mc       GUJARATI SIGN VISARGA
		(0x0ABE <= code && code <= 0x0AC0) || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
		0x0AC9 == code || // Mc       GUJARATI VOWEL SIGN CANDRA O
		(0x0ACB <= code && code <= 0x0ACC) || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
		(0x0B02 <= code && code <= 0x0B03) || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
		0x0B40 == code || // Mc       ORIYA VOWEL SIGN II
		(0x0B47 <= code && code <= 0x0B48) || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
		(0x0B4B <= code && code <= 0x0B4C) || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
		0x0BBF == code || // Mc       TAMIL VOWEL SIGN I
		(0x0BC1 <= code && code <= 0x0BC2) || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
		(0x0BC6 <= code && code <= 0x0BC8) || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
		(0x0BCA <= code && code <= 0x0BCC) || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
		(0x0C01 <= code && code <= 0x0C03) || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
		(0x0C41 <= code && code <= 0x0C44) || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
		(0x0C82 <= code && code <= 0x0C83) || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
		0x0CBE == code || // Mc       KANNADA VOWEL SIGN AA
		(0x0CC0 <= code && code <= 0x0CC1) || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
		(0x0CC3 <= code && code <= 0x0CC4) || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
		(0x0CC7 <= code && code <= 0x0CC8) || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
		(0x0CCA <= code && code <= 0x0CCB) || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
		(0x0D02 <= code && code <= 0x0D03) || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
		(0x0D3F <= code && code <= 0x0D40) || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
		(0x0D46 <= code && code <= 0x0D48) || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
		(0x0D4A <= code && code <= 0x0D4C) || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
		(0x0D82 <= code && code <= 0x0D83) || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
		(0x0DD0 <= code && code <= 0x0DD1) || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
		(0x0DD8 <= code && code <= 0x0DDE) || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
		(0x0DF2 <= code && code <= 0x0DF3) || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
		0x0E33 == code || // Lo       THAI CHARACTER SARA AM
		0x0EB3 == code || // Lo       LAO VOWEL SIGN AM
		(0x0F3E <= code && code <= 0x0F3F) || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
		0x0F7F == code || // Mc       TIBETAN SIGN RNAM BCAD
		0x1031 == code || // Mc       MYANMAR VOWEL SIGN E
		(0x103B <= code && code <= 0x103C) || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
		(0x1056 <= code && code <= 0x1057) || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
		0x1084 == code || // Mc       MYANMAR VOWEL SIGN SHAN E
		0x17B6 == code || // Mc       KHMER VOWEL SIGN AA
		(0x17BE <= code && code <= 0x17C5) || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
		(0x17C7 <= code && code <= 0x17C8) || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
		(0x1923 <= code && code <= 0x1926) || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
		(0x1929 <= code && code <= 0x192B) || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
		(0x1930 <= code && code <= 0x1931) || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
		(0x1933 <= code && code <= 0x1938) || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
		(0x1A19 <= code && code <= 0x1A1A) || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
		0x1A55 == code || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
		0x1A57 == code || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
		(0x1A6D <= code && code <= 0x1A72) || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
		0x1B04 == code || // Mc       BALINESE SIGN BISAH
		0x1B35 == code || // Mc       BALINESE VOWEL SIGN TEDUNG
		0x1B3B == code || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
		(0x1B3D <= code && code <= 0x1B41) || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
		(0x1B43 <= code && code <= 0x1B44) || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
		0x1B82 == code || // Mc       SUNDANESE SIGN PANGWISAD
		0x1BA1 == code || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
		(0x1BA6 <= code && code <= 0x1BA7) || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
		0x1BAA == code || // Mc       SUNDANESE SIGN PAMAAEH
		0x1BE7 == code || // Mc       BATAK VOWEL SIGN E
		(0x1BEA <= code && code <= 0x1BEC) || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
		0x1BEE == code || // Mc       BATAK VOWEL SIGN U
		(0x1BF2 <= code && code <= 0x1BF3) || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
		(0x1C24 <= code && code <= 0x1C2B) || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
		(0x1C34 <= code && code <= 0x1C35) || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
		0x1CE1 == code || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
		(0x1CF2 <= code && code <= 0x1CF3) || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
		0x1CF7 == code || // Mc       VEDIC SIGN ATIKRAMA
		(0xA823 <= code && code <= 0xA824) || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
		0xA827 == code || // Mc       SYLOTI NAGRI VOWEL SIGN OO
		(0xA880 <= code && code <= 0xA881) || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
		(0xA8B4 <= code && code <= 0xA8C3) || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
		(0xA952 <= code && code <= 0xA953) || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
		0xA983 == code || // Mc       JAVANESE SIGN WIGNYAN
		(0xA9B4 <= code && code <= 0xA9B5) || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
		(0xA9BA <= code && code <= 0xA9BB) || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
		(0xA9BD <= code && code <= 0xA9C0) || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
		(0xAA2F <= code && code <= 0xAA30) || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
		(0xAA33 <= code && code <= 0xAA34) || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
		0xAA4D == code || // Mc       CHAM CONSONANT SIGN FINAL H
		0xAAEB == code || // Mc       MEETEI MAYEK VOWEL SIGN II
		(0xAAEE <= code && code <= 0xAAEF) || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
		0xAAF5 == code || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
		(0xABE3 <= code && code <= 0xABE4) || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
		(0xABE6 <= code && code <= 0xABE7) || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
		(0xABE9 <= code && code <= 0xABEA) || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
		0xABEC == code || // Mc       MEETEI MAYEK LUM IYEK
		0x11000 == code || // Mc       BRAHMI SIGN CANDRABINDU
		0x11002 == code || // Mc       BRAHMI SIGN VISARGA
		0x11082 == code || // Mc       KAITHI SIGN VISARGA
		(0x110B0 <= code && code <= 0x110B2) || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
		(0x110B7 <= code && code <= 0x110B8) || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
		0x1112C == code || // Mc       CHAKMA VOWEL SIGN E
		0x11182 == code || // Mc       SHARADA SIGN VISARGA
		(0x111B3 <= code && code <= 0x111B5) || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
		(0x111BF <= code && code <= 0x111C0) || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
		(0x1122C <= code && code <= 0x1122E) || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
		(0x11232 <= code && code <= 0x11233) || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
		0x11235 == code || // Mc       KHOJKI SIGN VIRAMA
		(0x112E0 <= code && code <= 0x112E2) || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
		(0x11302 <= code && code <= 0x11303) || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
		0x1133F == code || // Mc       GRANTHA VOWEL SIGN I
		(0x11341 <= code && code <= 0x11344) || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
		(0x11347 <= code && code <= 0x11348) || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
		(0x1134B <= code && code <= 0x1134D) || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
		(0x11362 <= code && code <= 0x11363) || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
		(0x11435 <= code && code <= 0x11437) || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
		(0x11440 <= code && code <= 0x11441) || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
		0x11445 == code || // Mc       NEWA SIGN VISARGA
		(0x114B1 <= code && code <= 0x114B2) || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
		0x114B9 == code || // Mc       TIRHUTA VOWEL SIGN E
		(0x114BB <= code && code <= 0x114BC) || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
		0x114BE == code || // Mc       TIRHUTA VOWEL SIGN AU
		0x114C1 == code || // Mc       TIRHUTA SIGN VISARGA
		(0x115B0 <= code && code <= 0x115B1) || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
		(0x115B8 <= code && code <= 0x115BB) || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
		0x115BE == code || // Mc       SIDDHAM SIGN VISARGA
		(0x11630 <= code && code <= 0x11632) || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
		(0x1163B <= code && code <= 0x1163C) || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
		0x1163E == code || // Mc       MODI SIGN VISARGA
		0x116AC == code || // Mc       TAKRI SIGN VISARGA
		(0x116AE <= code && code <= 0x116AF) || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
		0x116B6 == code || // Mc       TAKRI SIGN VIRAMA
		(0x11720 <= code && code <= 0x11721) || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
		0x11726 == code || // Mc       AHOM VOWEL SIGN E
		(0x11A07 <= code && code <= 0x11A08) || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
		0x11A39 == code || // Mc       ZANABAZAR SQUARE SIGN VISARGA
		(0x11A57 <= code && code <= 0x11A58) || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
		0x11A97 == code || // Mc       SOYOMBO SIGN VISARGA
		0x11C2F == code || // Mc       BHAIKSUKI VOWEL SIGN AA
		0x11C3E == code || // Mc       BHAIKSUKI SIGN VISARGA
		0x11CA9 == code || // Mc       MARCHEN SUBJOINED LETTER YA
		0x11CB1 == code || // Mc       MARCHEN VOWEL SIGN I
		0x11CB4 == code || // Mc       MARCHEN VOWEL SIGN O
		(0x16F51 <= code && code <= 0x16F7E) || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
		0x1D166 == code || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
		0x1D16D == code // Mc       MUSICAL SYMBOL COMBINING AUGMENTATION DOT
		){
			return SpacingMark;
		}
		
		
		if(
		(0x1100 <= code && code <= 0x115F) || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
		(0xA960 <= code && code <= 0xA97C) // Lo  [29] HANGUL CHOSEONG TIKEUT-MIEUM..HANGUL CHOSEONG SSANGYEORINHIEUH
		){
			return L;
		}
		
		if(
		(0x1160 <= code && code <= 0x11A7) || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
		(0xD7B0 <= code && code <= 0xD7C6) // Lo  [23] HANGUL JUNGSEONG O-YEO..HANGUL JUNGSEONG ARAEA-E
		){
			return V;
		}
		
		
		if(
		(0x11A8 <= code && code <= 0x11FF) || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
		(0xD7CB <= code && code <= 0xD7FB) // Lo  [49] HANGUL JONGSEONG NIEUN-RIEUL..HANGUL JONGSEONG PHIEUPH-THIEUTH
		){
			return T;
		}
		
		if(
		0xAC00 == code || // Lo       HANGUL SYLLABLE GA
		0xAC1C == code || // Lo       HANGUL SYLLABLE GAE
		0xAC38 == code || // Lo       HANGUL SYLLABLE GYA
		0xAC54 == code || // Lo       HANGUL SYLLABLE GYAE
		0xAC70 == code || // Lo       HANGUL SYLLABLE GEO
		0xAC8C == code || // Lo       HANGUL SYLLABLE GE
		0xACA8 == code || // Lo       HANGUL SYLLABLE GYEO
		0xACC4 == code || // Lo       HANGUL SYLLABLE GYE
		0xACE0 == code || // Lo       HANGUL SYLLABLE GO
		0xACFC == code || // Lo       HANGUL SYLLABLE GWA
		0xAD18 == code || // Lo       HANGUL SYLLABLE GWAE
		0xAD34 == code || // Lo       HANGUL SYLLABLE GOE
		0xAD50 == code || // Lo       HANGUL SYLLABLE GYO
		0xAD6C == code || // Lo       HANGUL SYLLABLE GU
		0xAD88 == code || // Lo       HANGUL SYLLABLE GWEO
		0xADA4 == code || // Lo       HANGUL SYLLABLE GWE
		0xADC0 == code || // Lo       HANGUL SYLLABLE GWI
		0xADDC == code || // Lo       HANGUL SYLLABLE GYU
		0xADF8 == code || // Lo       HANGUL SYLLABLE GEU
		0xAE14 == code || // Lo       HANGUL SYLLABLE GYI
		0xAE30 == code || // Lo       HANGUL SYLLABLE GI
		0xAE4C == code || // Lo       HANGUL SYLLABLE GGA
		0xAE68 == code || // Lo       HANGUL SYLLABLE GGAE
		0xAE84 == code || // Lo       HANGUL SYLLABLE GGYA
		0xAEA0 == code || // Lo       HANGUL SYLLABLE GGYAE
		0xAEBC == code || // Lo       HANGUL SYLLABLE GGEO
		0xAED8 == code || // Lo       HANGUL SYLLABLE GGE
		0xAEF4 == code || // Lo       HANGUL SYLLABLE GGYEO
		0xAF10 == code || // Lo       HANGUL SYLLABLE GGYE
		0xAF2C == code || // Lo       HANGUL SYLLABLE GGO
		0xAF48 == code || // Lo       HANGUL SYLLABLE GGWA
		0xAF64 == code || // Lo       HANGUL SYLLABLE GGWAE
		0xAF80 == code || // Lo       HANGUL SYLLABLE GGOE
		0xAF9C == code || // Lo       HANGUL SYLLABLE GGYO
		0xAFB8 == code || // Lo       HANGUL SYLLABLE GGU
		0xAFD4 == code || // Lo       HANGUL SYLLABLE GGWEO
		0xAFF0 == code || // Lo       HANGUL SYLLABLE GGWE
		0xB00C == code || // Lo       HANGUL SYLLABLE GGWI
		0xB028 == code || // Lo       HANGUL SYLLABLE GGYU
		0xB044 == code || // Lo       HANGUL SYLLABLE GGEU
		0xB060 == code || // Lo       HANGUL SYLLABLE GGYI
		0xB07C == code || // Lo       HANGUL SYLLABLE GGI
		0xB098 == code || // Lo       HANGUL SYLLABLE NA
		0xB0B4 == code || // Lo       HANGUL SYLLABLE NAE
		0xB0D0 == code || // Lo       HANGUL SYLLABLE NYA
		0xB0EC == code || // Lo       HANGUL SYLLABLE NYAE
		0xB108 == code || // Lo       HANGUL SYLLABLE NEO
		0xB124 == code || // Lo       HANGUL SYLLABLE NE
		0xB140 == code || // Lo       HANGUL SYLLABLE NYEO
		0xB15C == code || // Lo       HANGUL SYLLABLE NYE
		0xB178 == code || // Lo       HANGUL SYLLABLE NO
		0xB194 == code || // Lo       HANGUL SYLLABLE NWA
		0xB1B0 == code || // Lo       HANGUL SYLLABLE NWAE
		0xB1CC == code || // Lo       HANGUL SYLLABLE NOE
		0xB1E8 == code || // Lo       HANGUL SYLLABLE NYO
		0xB204 == code || // Lo       HANGUL SYLLABLE NU
		0xB220 == code || // Lo       HANGUL SYLLABLE NWEO
		0xB23C == code || // Lo       HANGUL SYLLABLE NWE
		0xB258 == code || // Lo       HANGUL SYLLABLE NWI
		0xB274 == code || // Lo       HANGUL SYLLABLE NYU
		0xB290 == code || // Lo       HANGUL SYLLABLE NEU
		0xB2AC == code || // Lo       HANGUL SYLLABLE NYI
		0xB2C8 == code || // Lo       HANGUL SYLLABLE NI
		0xB2E4 == code || // Lo       HANGUL SYLLABLE DA
		0xB300 == code || // Lo       HANGUL SYLLABLE DAE
		0xB31C == code || // Lo       HANGUL SYLLABLE DYA
		0xB338 == code || // Lo       HANGUL SYLLABLE DYAE
		0xB354 == code || // Lo       HANGUL SYLLABLE DEO
		0xB370 == code || // Lo       HANGUL SYLLABLE DE
		0xB38C == code || // Lo       HANGUL SYLLABLE DYEO
		0xB3A8 == code || // Lo       HANGUL SYLLABLE DYE
		0xB3C4 == code || // Lo       HANGUL SYLLABLE DO
		0xB3E0 == code || // Lo       HANGUL SYLLABLE DWA
		0xB3FC == code || // Lo       HANGUL SYLLABLE DWAE
		0xB418 == code || // Lo       HANGUL SYLLABLE DOE
		0xB434 == code || // Lo       HANGUL SYLLABLE DYO
		0xB450 == code || // Lo       HANGUL SYLLABLE DU
		0xB46C == code || // Lo       HANGUL SYLLABLE DWEO
		0xB488 == code || // Lo       HANGUL SYLLABLE DWE
		0xB4A4 == code || // Lo       HANGUL SYLLABLE DWI
		0xB4C0 == code || // Lo       HANGUL SYLLABLE DYU
		0xB4DC == code || // Lo       HANGUL SYLLABLE DEU
		0xB4F8 == code || // Lo       HANGUL SYLLABLE DYI
		0xB514 == code || // Lo       HANGUL SYLLABLE DI
		0xB530 == code || // Lo       HANGUL SYLLABLE DDA
		0xB54C == code || // Lo       HANGUL SYLLABLE DDAE
		0xB568 == code || // Lo       HANGUL SYLLABLE DDYA
		0xB584 == code || // Lo       HANGUL SYLLABLE DDYAE
		0xB5A0 == code || // Lo       HANGUL SYLLABLE DDEO
		0xB5BC == code || // Lo       HANGUL SYLLABLE DDE
		0xB5D8 == code || // Lo       HANGUL SYLLABLE DDYEO
		0xB5F4 == code || // Lo       HANGUL SYLLABLE DDYE
		0xB610 == code || // Lo       HANGUL SYLLABLE DDO
		0xB62C == code || // Lo       HANGUL SYLLABLE DDWA
		0xB648 == code || // Lo       HANGUL SYLLABLE DDWAE
		0xB664 == code || // Lo       HANGUL SYLLABLE DDOE
		0xB680 == code || // Lo       HANGUL SYLLABLE DDYO
		0xB69C == code || // Lo       HANGUL SYLLABLE DDU
		0xB6B8 == code || // Lo       HANGUL SYLLABLE DDWEO
		0xB6D4 == code || // Lo       HANGUL SYLLABLE DDWE
		0xB6F0 == code || // Lo       HANGUL SYLLABLE DDWI
		0xB70C == code || // Lo       HANGUL SYLLABLE DDYU
		0xB728 == code || // Lo       HANGUL SYLLABLE DDEU
		0xB744 == code || // Lo       HANGUL SYLLABLE DDYI
		0xB760 == code || // Lo       HANGUL SYLLABLE DDI
		0xB77C == code || // Lo       HANGUL SYLLABLE RA
		0xB798 == code || // Lo       HANGUL SYLLABLE RAE
		0xB7B4 == code || // Lo       HANGUL SYLLABLE RYA
		0xB7D0 == code || // Lo       HANGUL SYLLABLE RYAE
		0xB7EC == code || // Lo       HANGUL SYLLABLE REO
		0xB808 == code || // Lo       HANGUL SYLLABLE RE
		0xB824 == code || // Lo       HANGUL SYLLABLE RYEO
		0xB840 == code || // Lo       HANGUL SYLLABLE RYE
		0xB85C == code || // Lo       HANGUL SYLLABLE RO
		0xB878 == code || // Lo       HANGUL SYLLABLE RWA
		0xB894 == code || // Lo       HANGUL SYLLABLE RWAE
		0xB8B0 == code || // Lo       HANGUL SYLLABLE ROE
		0xB8CC == code || // Lo       HANGUL SYLLABLE RYO
		0xB8E8 == code || // Lo       HANGUL SYLLABLE RU
		0xB904 == code || // Lo       HANGUL SYLLABLE RWEO
		0xB920 == code || // Lo       HANGUL SYLLABLE RWE
		0xB93C == code || // Lo       HANGUL SYLLABLE RWI
		0xB958 == code || // Lo       HANGUL SYLLABLE RYU
		0xB974 == code || // Lo       HANGUL SYLLABLE REU
		0xB990 == code || // Lo       HANGUL SYLLABLE RYI
		0xB9AC == code || // Lo       HANGUL SYLLABLE RI
		0xB9C8 == code || // Lo       HANGUL SYLLABLE MA
		0xB9E4 == code || // Lo       HANGUL SYLLABLE MAE
		0xBA00 == code || // Lo       HANGUL SYLLABLE MYA
		0xBA1C == code || // Lo       HANGUL SYLLABLE MYAE
		0xBA38 == code || // Lo       HANGUL SYLLABLE MEO
		0xBA54 == code || // Lo       HANGUL SYLLABLE ME
		0xBA70 == code || // Lo       HANGUL SYLLABLE MYEO
		0xBA8C == code || // Lo       HANGUL SYLLABLE MYE
		0xBAA8 == code || // Lo       HANGUL SYLLABLE MO
		0xBAC4 == code || // Lo       HANGUL SYLLABLE MWA
		0xBAE0 == code || // Lo       HANGUL SYLLABLE MWAE
		0xBAFC == code || // Lo       HANGUL SYLLABLE MOE
		0xBB18 == code || // Lo       HANGUL SYLLABLE MYO
		0xBB34 == code || // Lo       HANGUL SYLLABLE MU
		0xBB50 == code || // Lo       HANGUL SYLLABLE MWEO
		0xBB6C == code || // Lo       HANGUL SYLLABLE MWE
		0xBB88 == code || // Lo       HANGUL SYLLABLE MWI
		0xBBA4 == code || // Lo       HANGUL SYLLABLE MYU
		0xBBC0 == code || // Lo       HANGUL SYLLABLE MEU
		0xBBDC == code || // Lo       HANGUL SYLLABLE MYI
		0xBBF8 == code || // Lo       HANGUL SYLLABLE MI
		0xBC14 == code || // Lo       HANGUL SYLLABLE BA
		0xBC30 == code || // Lo       HANGUL SYLLABLE BAE
		0xBC4C == code || // Lo       HANGUL SYLLABLE BYA
		0xBC68 == code || // Lo       HANGUL SYLLABLE BYAE
		0xBC84 == code || // Lo       HANGUL SYLLABLE BEO
		0xBCA0 == code || // Lo       HANGUL SYLLABLE BE
		0xBCBC == code || // Lo       HANGUL SYLLABLE BYEO
		0xBCD8 == code || // Lo       HANGUL SYLLABLE BYE
		0xBCF4 == code || // Lo       HANGUL SYLLABLE BO
		0xBD10 == code || // Lo       HANGUL SYLLABLE BWA
		0xBD2C == code || // Lo       HANGUL SYLLABLE BWAE
		0xBD48 == code || // Lo       HANGUL SYLLABLE BOE
		0xBD64 == code || // Lo       HANGUL SYLLABLE BYO
		0xBD80 == code || // Lo       HANGUL SYLLABLE BU
		0xBD9C == code || // Lo       HANGUL SYLLABLE BWEO
		0xBDB8 == code || // Lo       HANGUL SYLLABLE BWE
		0xBDD4 == code || // Lo       HANGUL SYLLABLE BWI
		0xBDF0 == code || // Lo       HANGUL SYLLABLE BYU
		0xBE0C == code || // Lo       HANGUL SYLLABLE BEU
		0xBE28 == code || // Lo       HANGUL SYLLABLE BYI
		0xBE44 == code || // Lo       HANGUL SYLLABLE BI
		0xBE60 == code || // Lo       HANGUL SYLLABLE BBA
		0xBE7C == code || // Lo       HANGUL SYLLABLE BBAE
		0xBE98 == code || // Lo       HANGUL SYLLABLE BBYA
		0xBEB4 == code || // Lo       HANGUL SYLLABLE BBYAE
		0xBED0 == code || // Lo       HANGUL SYLLABLE BBEO
		0xBEEC == code || // Lo       HANGUL SYLLABLE BBE
		0xBF08 == code || // Lo       HANGUL SYLLABLE BBYEO
		0xBF24 == code || // Lo       HANGUL SYLLABLE BBYE
		0xBF40 == code || // Lo       HANGUL SYLLABLE BBO
		0xBF5C == code || // Lo       HANGUL SYLLABLE BBWA
		0xBF78 == code || // Lo       HANGUL SYLLABLE BBWAE
		0xBF94 == code || // Lo       HANGUL SYLLABLE BBOE
		0xBFB0 == code || // Lo       HANGUL SYLLABLE BBYO
		0xBFCC == code || // Lo       HANGUL SYLLABLE BBU
		0xBFE8 == code || // Lo       HANGUL SYLLABLE BBWEO
		0xC004 == code || // Lo       HANGUL SYLLABLE BBWE
		0xC020 == code || // Lo       HANGUL SYLLABLE BBWI
		0xC03C == code || // Lo       HANGUL SYLLABLE BBYU
		0xC058 == code || // Lo       HANGUL SYLLABLE BBEU
		0xC074 == code || // Lo       HANGUL SYLLABLE BBYI
		0xC090 == code || // Lo       HANGUL SYLLABLE BBI
		0xC0AC == code || // Lo       HANGUL SYLLABLE SA
		0xC0C8 == code || // Lo       HANGUL SYLLABLE SAE
		0xC0E4 == code || // Lo       HANGUL SYLLABLE SYA
		0xC100 == code || // Lo       HANGUL SYLLABLE SYAE
		0xC11C == code || // Lo       HANGUL SYLLABLE SEO
		0xC138 == code || // Lo       HANGUL SYLLABLE SE
		0xC154 == code || // Lo       HANGUL SYLLABLE SYEO
		0xC170 == code || // Lo       HANGUL SYLLABLE SYE
		0xC18C == code || // Lo       HANGUL SYLLABLE SO
		0xC1A8 == code || // Lo       HANGUL SYLLABLE SWA
		0xC1C4 == code || // Lo       HANGUL SYLLABLE SWAE
		0xC1E0 == code || // Lo       HANGUL SYLLABLE SOE
		0xC1FC == code || // Lo       HANGUL SYLLABLE SYO
		0xC218 == code || // Lo       HANGUL SYLLABLE SU
		0xC234 == code || // Lo       HANGUL SYLLABLE SWEO
		0xC250 == code || // Lo       HANGUL SYLLABLE SWE
		0xC26C == code || // Lo       HANGUL SYLLABLE SWI
		0xC288 == code || // Lo       HANGUL SYLLABLE SYU
		0xC2A4 == code || // Lo       HANGUL SYLLABLE SEU
		0xC2C0 == code || // Lo       HANGUL SYLLABLE SYI
		0xC2DC == code || // Lo       HANGUL SYLLABLE SI
		0xC2F8 == code || // Lo       HANGUL SYLLABLE SSA
		0xC314 == code || // Lo       HANGUL SYLLABLE SSAE
		0xC330 == code || // Lo       HANGUL SYLLABLE SSYA
		0xC34C == code || // Lo       HANGUL SYLLABLE SSYAE
		0xC368 == code || // Lo       HANGUL SYLLABLE SSEO
		0xC384 == code || // Lo       HANGUL SYLLABLE SSE
		0xC3A0 == code || // Lo       HANGUL SYLLABLE SSYEO
		0xC3BC == code || // Lo       HANGUL SYLLABLE SSYE
		0xC3D8 == code || // Lo       HANGUL SYLLABLE SSO
		0xC3F4 == code || // Lo       HANGUL SYLLABLE SSWA
		0xC410 == code || // Lo       HANGUL SYLLABLE SSWAE
		0xC42C == code || // Lo       HANGUL SYLLABLE SSOE
		0xC448 == code || // Lo       HANGUL SYLLABLE SSYO
		0xC464 == code || // Lo       HANGUL SYLLABLE SSU
		0xC480 == code || // Lo       HANGUL SYLLABLE SSWEO
		0xC49C == code || // Lo       HANGUL SYLLABLE SSWE
		0xC4B8 == code || // Lo       HANGUL SYLLABLE SSWI
		0xC4D4 == code || // Lo       HANGUL SYLLABLE SSYU
		0xC4F0 == code || // Lo       HANGUL SYLLABLE SSEU
		0xC50C == code || // Lo       HANGUL SYLLABLE SSYI
		0xC528 == code || // Lo       HANGUL SYLLABLE SSI
		0xC544 == code || // Lo       HANGUL SYLLABLE A
		0xC560 == code || // Lo       HANGUL SYLLABLE AE
		0xC57C == code || // Lo       HANGUL SYLLABLE YA
		0xC598 == code || // Lo       HANGUL SYLLABLE YAE
		0xC5B4 == code || // Lo       HANGUL SYLLABLE EO
		0xC5D0 == code || // Lo       HANGUL SYLLABLE E
		0xC5EC == code || // Lo       HANGUL SYLLABLE YEO
		0xC608 == code || // Lo       HANGUL SYLLABLE YE
		0xC624 == code || // Lo       HANGUL SYLLABLE O
		0xC640 == code || // Lo       HANGUL SYLLABLE WA
		0xC65C == code || // Lo       HANGUL SYLLABLE WAE
		0xC678 == code || // Lo       HANGUL SYLLABLE OE
		0xC694 == code || // Lo       HANGUL SYLLABLE YO
		0xC6B0 == code || // Lo       HANGUL SYLLABLE U
		0xC6CC == code || // Lo       HANGUL SYLLABLE WEO
		0xC6E8 == code || // Lo       HANGUL SYLLABLE WE
		0xC704 == code || // Lo       HANGUL SYLLABLE WI
		0xC720 == code || // Lo       HANGUL SYLLABLE YU
		0xC73C == code || // Lo       HANGUL SYLLABLE EU
		0xC758 == code || // Lo       HANGUL SYLLABLE YI
		0xC774 == code || // Lo       HANGUL SYLLABLE I
		0xC790 == code || // Lo       HANGUL SYLLABLE JA
		0xC7AC == code || // Lo       HANGUL SYLLABLE JAE
		0xC7C8 == code || // Lo       HANGUL SYLLABLE JYA
		0xC7E4 == code || // Lo       HANGUL SYLLABLE JYAE
		0xC800 == code || // Lo       HANGUL SYLLABLE JEO
		0xC81C == code || // Lo       HANGUL SYLLABLE JE
		0xC838 == code || // Lo       HANGUL SYLLABLE JYEO
		0xC854 == code || // Lo       HANGUL SYLLABLE JYE
		0xC870 == code || // Lo       HANGUL SYLLABLE JO
		0xC88C == code || // Lo       HANGUL SYLLABLE JWA
		0xC8A8 == code || // Lo       HANGUL SYLLABLE JWAE
		0xC8C4 == code || // Lo       HANGUL SYLLABLE JOE
		0xC8E0 == code || // Lo       HANGUL SYLLABLE JYO
		0xC8FC == code || // Lo       HANGUL SYLLABLE JU
		0xC918 == code || // Lo       HANGUL SYLLABLE JWEO
		0xC934 == code || // Lo       HANGUL SYLLABLE JWE
		0xC950 == code || // Lo       HANGUL SYLLABLE JWI
		0xC96C == code || // Lo       HANGUL SYLLABLE JYU
		0xC988 == code || // Lo       HANGUL SYLLABLE JEU
		0xC9A4 == code || // Lo       HANGUL SYLLABLE JYI
		0xC9C0 == code || // Lo       HANGUL SYLLABLE JI
		0xC9DC == code || // Lo       HANGUL SYLLABLE JJA
		0xC9F8 == code || // Lo       HANGUL SYLLABLE JJAE
		0xCA14 == code || // Lo       HANGUL SYLLABLE JJYA
		0xCA30 == code || // Lo       HANGUL SYLLABLE JJYAE
		0xCA4C == code || // Lo       HANGUL SYLLABLE JJEO
		0xCA68 == code || // Lo       HANGUL SYLLABLE JJE
		0xCA84 == code || // Lo       HANGUL SYLLABLE JJYEO
		0xCAA0 == code || // Lo       HANGUL SYLLABLE JJYE
		0xCABC == code || // Lo       HANGUL SYLLABLE JJO
		0xCAD8 == code || // Lo       HANGUL SYLLABLE JJWA
		0xCAF4 == code || // Lo       HANGUL SYLLABLE JJWAE
		0xCB10 == code || // Lo       HANGUL SYLLABLE JJOE
		0xCB2C == code || // Lo       HANGUL SYLLABLE JJYO
		0xCB48 == code || // Lo       HANGUL SYLLABLE JJU
		0xCB64 == code || // Lo       HANGUL SYLLABLE JJWEO
		0xCB80 == code || // Lo       HANGUL SYLLABLE JJWE
		0xCB9C == code || // Lo       HANGUL SYLLABLE JJWI
		0xCBB8 == code || // Lo       HANGUL SYLLABLE JJYU
		0xCBD4 == code || // Lo       HANGUL SYLLABLE JJEU
		0xCBF0 == code || // Lo       HANGUL SYLLABLE JJYI
		0xCC0C == code || // Lo       HANGUL SYLLABLE JJI
		0xCC28 == code || // Lo       HANGUL SYLLABLE CA
		0xCC44 == code || // Lo       HANGUL SYLLABLE CAE
		0xCC60 == code || // Lo       HANGUL SYLLABLE CYA
		0xCC7C == code || // Lo       HANGUL SYLLABLE CYAE
		0xCC98 == code || // Lo       HANGUL SYLLABLE CEO
		0xCCB4 == code || // Lo       HANGUL SYLLABLE CE
		0xCCD0 == code || // Lo       HANGUL SYLLABLE CYEO
		0xCCEC == code || // Lo       HANGUL SYLLABLE CYE
		0xCD08 == code || // Lo       HANGUL SYLLABLE CO
		0xCD24 == code || // Lo       HANGUL SYLLABLE CWA
		0xCD40 == code || // Lo       HANGUL SYLLABLE CWAE
		0xCD5C == code || // Lo       HANGUL SYLLABLE COE
		0xCD78 == code || // Lo       HANGUL SYLLABLE CYO
		0xCD94 == code || // Lo       HANGUL SYLLABLE CU
		0xCDB0 == code || // Lo       HANGUL SYLLABLE CWEO
		0xCDCC == code || // Lo       HANGUL SYLLABLE CWE
		0xCDE8 == code || // Lo       HANGUL SYLLABLE CWI
		0xCE04 == code || // Lo       HANGUL SYLLABLE CYU
		0xCE20 == code || // Lo       HANGUL SYLLABLE CEU
		0xCE3C == code || // Lo       HANGUL SYLLABLE CYI
		0xCE58 == code || // Lo       HANGUL SYLLABLE CI
		0xCE74 == code || // Lo       HANGUL SYLLABLE KA
		0xCE90 == code || // Lo       HANGUL SYLLABLE KAE
		0xCEAC == code || // Lo       HANGUL SYLLABLE KYA
		0xCEC8 == code || // Lo       HANGUL SYLLABLE KYAE
		0xCEE4 == code || // Lo       HANGUL SYLLABLE KEO
		0xCF00 == code || // Lo       HANGUL SYLLABLE KE
		0xCF1C == code || // Lo       HANGUL SYLLABLE KYEO
		0xCF38 == code || // Lo       HANGUL SYLLABLE KYE
		0xCF54 == code || // Lo       HANGUL SYLLABLE KO
		0xCF70 == code || // Lo       HANGUL SYLLABLE KWA
		0xCF8C == code || // Lo       HANGUL SYLLABLE KWAE
		0xCFA8 == code || // Lo       HANGUL SYLLABLE KOE
		0xCFC4 == code || // Lo       HANGUL SYLLABLE KYO
		0xCFE0 == code || // Lo       HANGUL SYLLABLE KU
		0xCFFC == code || // Lo       HANGUL SYLLABLE KWEO
		0xD018 == code || // Lo       HANGUL SYLLABLE KWE
		0xD034 == code || // Lo       HANGUL SYLLABLE KWI
		0xD050 == code || // Lo       HANGUL SYLLABLE KYU
		0xD06C == code || // Lo       HANGUL SYLLABLE KEU
		0xD088 == code || // Lo       HANGUL SYLLABLE KYI
		0xD0A4 == code || // Lo       HANGUL SYLLABLE KI
		0xD0C0 == code || // Lo       HANGUL SYLLABLE TA
		0xD0DC == code || // Lo       HANGUL SYLLABLE TAE
		0xD0F8 == code || // Lo       HANGUL SYLLABLE TYA
		0xD114 == code || // Lo       HANGUL SYLLABLE TYAE
		0xD130 == code || // Lo       HANGUL SYLLABLE TEO
		0xD14C == code || // Lo       HANGUL SYLLABLE TE
		0xD168 == code || // Lo       HANGUL SYLLABLE TYEO
		0xD184 == code || // Lo       HANGUL SYLLABLE TYE
		0xD1A0 == code || // Lo       HANGUL SYLLABLE TO
		0xD1BC == code || // Lo       HANGUL SYLLABLE TWA
		0xD1D8 == code || // Lo       HANGUL SYLLABLE TWAE
		0xD1F4 == code || // Lo       HANGUL SYLLABLE TOE
		0xD210 == code || // Lo       HANGUL SYLLABLE TYO
		0xD22C == code || // Lo       HANGUL SYLLABLE TU
		0xD248 == code || // Lo       HANGUL SYLLABLE TWEO
		0xD264 == code || // Lo       HANGUL SYLLABLE TWE
		0xD280 == code || // Lo       HANGUL SYLLABLE TWI
		0xD29C == code || // Lo       HANGUL SYLLABLE TYU
		0xD2B8 == code || // Lo       HANGUL SYLLABLE TEU
		0xD2D4 == code || // Lo       HANGUL SYLLABLE TYI
		0xD2F0 == code || // Lo       HANGUL SYLLABLE TI
		0xD30C == code || // Lo       HANGUL SYLLABLE PA
		0xD328 == code || // Lo       HANGUL SYLLABLE PAE
		0xD344 == code || // Lo       HANGUL SYLLABLE PYA
		0xD360 == code || // Lo       HANGUL SYLLABLE PYAE
		0xD37C == code || // Lo       HANGUL SYLLABLE PEO
		0xD398 == code || // Lo       HANGUL SYLLABLE PE
		0xD3B4 == code || // Lo       HANGUL SYLLABLE PYEO
		0xD3D0 == code || // Lo       HANGUL SYLLABLE PYE
		0xD3EC == code || // Lo       HANGUL SYLLABLE PO
		0xD408 == code || // Lo       HANGUL SYLLABLE PWA
		0xD424 == code || // Lo       HANGUL SYLLABLE PWAE
		0xD440 == code || // Lo       HANGUL SYLLABLE POE
		0xD45C == code || // Lo       HANGUL SYLLABLE PYO
		0xD478 == code || // Lo       HANGUL SYLLABLE PU
		0xD494 == code || // Lo       HANGUL SYLLABLE PWEO
		0xD4B0 == code || // Lo       HANGUL SYLLABLE PWE
		0xD4CC == code || // Lo       HANGUL SYLLABLE PWI
		0xD4E8 == code || // Lo       HANGUL SYLLABLE PYU
		0xD504 == code || // Lo       HANGUL SYLLABLE PEU
		0xD520 == code || // Lo       HANGUL SYLLABLE PYI
		0xD53C == code || // Lo       HANGUL SYLLABLE PI
		0xD558 == code || // Lo       HANGUL SYLLABLE HA
		0xD574 == code || // Lo       HANGUL SYLLABLE HAE
		0xD590 == code || // Lo       HANGUL SYLLABLE HYA
		0xD5AC == code || // Lo       HANGUL SYLLABLE HYAE
		0xD5C8 == code || // Lo       HANGUL SYLLABLE HEO
		0xD5E4 == code || // Lo       HANGUL SYLLABLE HE
		0xD600 == code || // Lo       HANGUL SYLLABLE HYEO
		0xD61C == code || // Lo       HANGUL SYLLABLE HYE
		0xD638 == code || // Lo       HANGUL SYLLABLE HO
		0xD654 == code || // Lo       HANGUL SYLLABLE HWA
		0xD670 == code || // Lo       HANGUL SYLLABLE HWAE
		0xD68C == code || // Lo       HANGUL SYLLABLE HOE
		0xD6A8 == code || // Lo       HANGUL SYLLABLE HYO
		0xD6C4 == code || // Lo       HANGUL SYLLABLE HU
		0xD6E0 == code || // Lo       HANGUL SYLLABLE HWEO
		0xD6FC == code || // Lo       HANGUL SYLLABLE HWE
		0xD718 == code || // Lo       HANGUL SYLLABLE HWI
		0xD734 == code || // Lo       HANGUL SYLLABLE HYU
		0xD750 == code || // Lo       HANGUL SYLLABLE HEU
		0xD76C == code || // Lo       HANGUL SYLLABLE HYI
		0xD788 == code // Lo       HANGUL SYLLABLE HI
		){
			return LV;
		}
		
		if(
		(0xAC01 <= code && code <= 0xAC1B) || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
		(0xAC1D <= code && code <= 0xAC37) || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
		(0xAC39 <= code && code <= 0xAC53) || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
		(0xAC55 <= code && code <= 0xAC6F) || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
		(0xAC71 <= code && code <= 0xAC8B) || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
		(0xAC8D <= code && code <= 0xACA7) || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
		(0xACA9 <= code && code <= 0xACC3) || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
		(0xACC5 <= code && code <= 0xACDF) || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
		(0xACE1 <= code && code <= 0xACFB) || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
		(0xACFD <= code && code <= 0xAD17) || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
		(0xAD19 <= code && code <= 0xAD33) || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
		(0xAD35 <= code && code <= 0xAD4F) || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
		(0xAD51 <= code && code <= 0xAD6B) || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
		(0xAD6D <= code && code <= 0xAD87) || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
		(0xAD89 <= code && code <= 0xADA3) || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
		(0xADA5 <= code && code <= 0xADBF) || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
		(0xADC1 <= code && code <= 0xADDB) || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
		(0xADDD <= code && code <= 0xADF7) || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
		(0xADF9 <= code && code <= 0xAE13) || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
		(0xAE15 <= code && code <= 0xAE2F) || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
		(0xAE31 <= code && code <= 0xAE4B) || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
		(0xAE4D <= code && code <= 0xAE67) || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
		(0xAE69 <= code && code <= 0xAE83) || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
		(0xAE85 <= code && code <= 0xAE9F) || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
		(0xAEA1 <= code && code <= 0xAEBB) || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
		(0xAEBD <= code && code <= 0xAED7) || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
		(0xAED9 <= code && code <= 0xAEF3) || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
		(0xAEF5 <= code && code <= 0xAF0F) || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
		(0xAF11 <= code && code <= 0xAF2B) || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
		(0xAF2D <= code && code <= 0xAF47) || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
		(0xAF49 <= code && code <= 0xAF63) || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
		(0xAF65 <= code && code <= 0xAF7F) || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
		(0xAF81 <= code && code <= 0xAF9B) || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
		(0xAF9D <= code && code <= 0xAFB7) || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
		(0xAFB9 <= code && code <= 0xAFD3) || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
		(0xAFD5 <= code && code <= 0xAFEF) || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
		(0xAFF1 <= code && code <= 0xB00B) || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
		(0xB00D <= code && code <= 0xB027) || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
		(0xB029 <= code && code <= 0xB043) || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
		(0xB045 <= code && code <= 0xB05F) || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
		(0xB061 <= code && code <= 0xB07B) || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
		(0xB07D <= code && code <= 0xB097) || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
		(0xB099 <= code && code <= 0xB0B3) || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
		(0xB0B5 <= code && code <= 0xB0CF) || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
		(0xB0D1 <= code && code <= 0xB0EB) || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
		(0xB0ED <= code && code <= 0xB107) || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
		(0xB109 <= code && code <= 0xB123) || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
		(0xB125 <= code && code <= 0xB13F) || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
		(0xB141 <= code && code <= 0xB15B) || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
		(0xB15D <= code && code <= 0xB177) || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
		(0xB179 <= code && code <= 0xB193) || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
		(0xB195 <= code && code <= 0xB1AF) || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
		(0xB1B1 <= code && code <= 0xB1CB) || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
		(0xB1CD <= code && code <= 0xB1E7) || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
		(0xB1E9 <= code && code <= 0xB203) || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
		(0xB205 <= code && code <= 0xB21F) || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
		(0xB221 <= code && code <= 0xB23B) || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
		(0xB23D <= code && code <= 0xB257) || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
		(0xB259 <= code && code <= 0xB273) || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
		(0xB275 <= code && code <= 0xB28F) || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
		(0xB291 <= code && code <= 0xB2AB) || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
		(0xB2AD <= code && code <= 0xB2C7) || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
		(0xB2C9 <= code && code <= 0xB2E3) || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
		(0xB2E5 <= code && code <= 0xB2FF) || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
		(0xB301 <= code && code <= 0xB31B) || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
		(0xB31D <= code && code <= 0xB337) || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
		(0xB339 <= code && code <= 0xB353) || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
		(0xB355 <= code && code <= 0xB36F) || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
		(0xB371 <= code && code <= 0xB38B) || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
		(0xB38D <= code && code <= 0xB3A7) || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
		(0xB3A9 <= code && code <= 0xB3C3) || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
		(0xB3C5 <= code && code <= 0xB3DF) || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
		(0xB3E1 <= code && code <= 0xB3FB) || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
		(0xB3FD <= code && code <= 0xB417) || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
		(0xB419 <= code && code <= 0xB433) || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
		(0xB435 <= code && code <= 0xB44F) || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
		(0xB451 <= code && code <= 0xB46B) || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
		(0xB46D <= code && code <= 0xB487) || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
		(0xB489 <= code && code <= 0xB4A3) || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
		(0xB4A5 <= code && code <= 0xB4BF) || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
		(0xB4C1 <= code && code <= 0xB4DB) || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
		(0xB4DD <= code && code <= 0xB4F7) || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
		(0xB4F9 <= code && code <= 0xB513) || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
		(0xB515 <= code && code <= 0xB52F) || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
		(0xB531 <= code && code <= 0xB54B) || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
		(0xB54D <= code && code <= 0xB567) || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
		(0xB569 <= code && code <= 0xB583) || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
		(0xB585 <= code && code <= 0xB59F) || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
		(0xB5A1 <= code && code <= 0xB5BB) || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
		(0xB5BD <= code && code <= 0xB5D7) || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
		(0xB5D9 <= code && code <= 0xB5F3) || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
		(0xB5F5 <= code && code <= 0xB60F) || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
		(0xB611 <= code && code <= 0xB62B) || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
		(0xB62D <= code && code <= 0xB647) || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
		(0xB649 <= code && code <= 0xB663) || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
		(0xB665 <= code && code <= 0xB67F) || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
		(0xB681 <= code && code <= 0xB69B) || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
		(0xB69D <= code && code <= 0xB6B7) || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
		(0xB6B9 <= code && code <= 0xB6D3) || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
		(0xB6D5 <= code && code <= 0xB6EF) || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
		(0xB6F1 <= code && code <= 0xB70B) || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
		(0xB70D <= code && code <= 0xB727) || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
		(0xB729 <= code && code <= 0xB743) || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
		(0xB745 <= code && code <= 0xB75F) || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
		(0xB761 <= code && code <= 0xB77B) || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
		(0xB77D <= code && code <= 0xB797) || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
		(0xB799 <= code && code <= 0xB7B3) || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
		(0xB7B5 <= code && code <= 0xB7CF) || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
		(0xB7D1 <= code && code <= 0xB7EB) || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
		(0xB7ED <= code && code <= 0xB807) || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
		(0xB809 <= code && code <= 0xB823) || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
		(0xB825 <= code && code <= 0xB83F) || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
		(0xB841 <= code && code <= 0xB85B) || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
		(0xB85D <= code && code <= 0xB877) || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
		(0xB879 <= code && code <= 0xB893) || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
		(0xB895 <= code && code <= 0xB8AF) || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
		(0xB8B1 <= code && code <= 0xB8CB) || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
		(0xB8CD <= code && code <= 0xB8E7) || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
		(0xB8E9 <= code && code <= 0xB903) || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
		(0xB905 <= code && code <= 0xB91F) || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
		(0xB921 <= code && code <= 0xB93B) || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
		(0xB93D <= code && code <= 0xB957) || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
		(0xB959 <= code && code <= 0xB973) || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
		(0xB975 <= code && code <= 0xB98F) || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
		(0xB991 <= code && code <= 0xB9AB) || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
		(0xB9AD <= code && code <= 0xB9C7) || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
		(0xB9C9 <= code && code <= 0xB9E3) || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
		(0xB9E5 <= code && code <= 0xB9FF) || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
		(0xBA01 <= code && code <= 0xBA1B) || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
		(0xBA1D <= code && code <= 0xBA37) || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
		(0xBA39 <= code && code <= 0xBA53) || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
		(0xBA55 <= code && code <= 0xBA6F) || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
		(0xBA71 <= code && code <= 0xBA8B) || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
		(0xBA8D <= code && code <= 0xBAA7) || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
		(0xBAA9 <= code && code <= 0xBAC3) || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
		(0xBAC5 <= code && code <= 0xBADF) || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
		(0xBAE1 <= code && code <= 0xBAFB) || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
		(0xBAFD <= code && code <= 0xBB17) || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
		(0xBB19 <= code && code <= 0xBB33) || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
		(0xBB35 <= code && code <= 0xBB4F) || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
		(0xBB51 <= code && code <= 0xBB6B) || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
		(0xBB6D <= code && code <= 0xBB87) || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
		(0xBB89 <= code && code <= 0xBBA3) || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
		(0xBBA5 <= code && code <= 0xBBBF) || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
		(0xBBC1 <= code && code <= 0xBBDB) || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
		(0xBBDD <= code && code <= 0xBBF7) || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
		(0xBBF9 <= code && code <= 0xBC13) || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
		(0xBC15 <= code && code <= 0xBC2F) || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
		(0xBC31 <= code && code <= 0xBC4B) || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
		(0xBC4D <= code && code <= 0xBC67) || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
		(0xBC69 <= code && code <= 0xBC83) || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
		(0xBC85 <= code && code <= 0xBC9F) || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
		(0xBCA1 <= code && code <= 0xBCBB) || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
		(0xBCBD <= code && code <= 0xBCD7) || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
		(0xBCD9 <= code && code <= 0xBCF3) || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
		(0xBCF5 <= code && code <= 0xBD0F) || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
		(0xBD11 <= code && code <= 0xBD2B) || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
		(0xBD2D <= code && code <= 0xBD47) || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
		(0xBD49 <= code && code <= 0xBD63) || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
		(0xBD65 <= code && code <= 0xBD7F) || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
		(0xBD81 <= code && code <= 0xBD9B) || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
		(0xBD9D <= code && code <= 0xBDB7) || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
		(0xBDB9 <= code && code <= 0xBDD3) || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
		(0xBDD5 <= code && code <= 0xBDEF) || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
		(0xBDF1 <= code && code <= 0xBE0B) || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
		(0xBE0D <= code && code <= 0xBE27) || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
		(0xBE29 <= code && code <= 0xBE43) || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
		(0xBE45 <= code && code <= 0xBE5F) || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
		(0xBE61 <= code && code <= 0xBE7B) || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
		(0xBE7D <= code && code <= 0xBE97) || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
		(0xBE99 <= code && code <= 0xBEB3) || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
		(0xBEB5 <= code && code <= 0xBECF) || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
		(0xBED1 <= code && code <= 0xBEEB) || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
		(0xBEED <= code && code <= 0xBF07) || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
		(0xBF09 <= code && code <= 0xBF23) || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
		(0xBF25 <= code && code <= 0xBF3F) || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
		(0xBF41 <= code && code <= 0xBF5B) || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
		(0xBF5D <= code && code <= 0xBF77) || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
		(0xBF79 <= code && code <= 0xBF93) || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
		(0xBF95 <= code && code <= 0xBFAF) || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
		(0xBFB1 <= code && code <= 0xBFCB) || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
		(0xBFCD <= code && code <= 0xBFE7) || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
		(0xBFE9 <= code && code <= 0xC003) || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
		(0xC005 <= code && code <= 0xC01F) || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
		(0xC021 <= code && code <= 0xC03B) || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
		(0xC03D <= code && code <= 0xC057) || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
		(0xC059 <= code && code <= 0xC073) || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
		(0xC075 <= code && code <= 0xC08F) || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
		(0xC091 <= code && code <= 0xC0AB) || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
		(0xC0AD <= code && code <= 0xC0C7) || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
		(0xC0C9 <= code && code <= 0xC0E3) || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
		(0xC0E5 <= code && code <= 0xC0FF) || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
		(0xC101 <= code && code <= 0xC11B) || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
		(0xC11D <= code && code <= 0xC137) || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
		(0xC139 <= code && code <= 0xC153) || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
		(0xC155 <= code && code <= 0xC16F) || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
		(0xC171 <= code && code <= 0xC18B) || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
		(0xC18D <= code && code <= 0xC1A7) || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
		(0xC1A9 <= code && code <= 0xC1C3) || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
		(0xC1C5 <= code && code <= 0xC1DF) || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
		(0xC1E1 <= code && code <= 0xC1FB) || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
		(0xC1FD <= code && code <= 0xC217) || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
		(0xC219 <= code && code <= 0xC233) || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
		(0xC235 <= code && code <= 0xC24F) || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
		(0xC251 <= code && code <= 0xC26B) || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
		(0xC26D <= code && code <= 0xC287) || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
		(0xC289 <= code && code <= 0xC2A3) || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
		(0xC2A5 <= code && code <= 0xC2BF) || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
		(0xC2C1 <= code && code <= 0xC2DB) || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
		(0xC2DD <= code && code <= 0xC2F7) || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
		(0xC2F9 <= code && code <= 0xC313) || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
		(0xC315 <= code && code <= 0xC32F) || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
		(0xC331 <= code && code <= 0xC34B) || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
		(0xC34D <= code && code <= 0xC367) || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
		(0xC369 <= code && code <= 0xC383) || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
		(0xC385 <= code && code <= 0xC39F) || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
		(0xC3A1 <= code && code <= 0xC3BB) || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
		(0xC3BD <= code && code <= 0xC3D7) || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
		(0xC3D9 <= code && code <= 0xC3F3) || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
		(0xC3F5 <= code && code <= 0xC40F) || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
		(0xC411 <= code && code <= 0xC42B) || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
		(0xC42D <= code && code <= 0xC447) || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
		(0xC449 <= code && code <= 0xC463) || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
		(0xC465 <= code && code <= 0xC47F) || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
		(0xC481 <= code && code <= 0xC49B) || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
		(0xC49D <= code && code <= 0xC4B7) || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
		(0xC4B9 <= code && code <= 0xC4D3) || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
		(0xC4D5 <= code && code <= 0xC4EF) || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
		(0xC4F1 <= code && code <= 0xC50B) || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
		(0xC50D <= code && code <= 0xC527) || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
		(0xC529 <= code && code <= 0xC543) || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
		(0xC545 <= code && code <= 0xC55F) || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
		(0xC561 <= code && code <= 0xC57B) || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
		(0xC57D <= code && code <= 0xC597) || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
		(0xC599 <= code && code <= 0xC5B3) || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
		(0xC5B5 <= code && code <= 0xC5CF) || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
		(0xC5D1 <= code && code <= 0xC5EB) || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
		(0xC5ED <= code && code <= 0xC607) || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
		(0xC609 <= code && code <= 0xC623) || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
		(0xC625 <= code && code <= 0xC63F) || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
		(0xC641 <= code && code <= 0xC65B) || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
		(0xC65D <= code && code <= 0xC677) || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
		(0xC679 <= code && code <= 0xC693) || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
		(0xC695 <= code && code <= 0xC6AF) || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
		(0xC6B1 <= code && code <= 0xC6CB) || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
		(0xC6CD <= code && code <= 0xC6E7) || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
		(0xC6E9 <= code && code <= 0xC703) || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
		(0xC705 <= code && code <= 0xC71F) || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
		(0xC721 <= code && code <= 0xC73B) || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
		(0xC73D <= code && code <= 0xC757) || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
		(0xC759 <= code && code <= 0xC773) || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
		(0xC775 <= code && code <= 0xC78F) || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
		(0xC791 <= code && code <= 0xC7AB) || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
		(0xC7AD <= code && code <= 0xC7C7) || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
		(0xC7C9 <= code && code <= 0xC7E3) || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
		(0xC7E5 <= code && code <= 0xC7FF) || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
		(0xC801 <= code && code <= 0xC81B) || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
		(0xC81D <= code && code <= 0xC837) || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
		(0xC839 <= code && code <= 0xC853) || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
		(0xC855 <= code && code <= 0xC86F) || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
		(0xC871 <= code && code <= 0xC88B) || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
		(0xC88D <= code && code <= 0xC8A7) || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
		(0xC8A9 <= code && code <= 0xC8C3) || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
		(0xC8C5 <= code && code <= 0xC8DF) || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
		(0xC8E1 <= code && code <= 0xC8FB) || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
		(0xC8FD <= code && code <= 0xC917) || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
		(0xC919 <= code && code <= 0xC933) || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
		(0xC935 <= code && code <= 0xC94F) || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
		(0xC951 <= code && code <= 0xC96B) || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
		(0xC96D <= code && code <= 0xC987) || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
		(0xC989 <= code && code <= 0xC9A3) || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
		(0xC9A5 <= code && code <= 0xC9BF) || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
		(0xC9C1 <= code && code <= 0xC9DB) || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
		(0xC9DD <= code && code <= 0xC9F7) || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
		(0xC9F9 <= code && code <= 0xCA13) || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
		(0xCA15 <= code && code <= 0xCA2F) || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
		(0xCA31 <= code && code <= 0xCA4B) || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
		(0xCA4D <= code && code <= 0xCA67) || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
		(0xCA69 <= code && code <= 0xCA83) || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
		(0xCA85 <= code && code <= 0xCA9F) || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
		(0xCAA1 <= code && code <= 0xCABB) || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
		(0xCABD <= code && code <= 0xCAD7) || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
		(0xCAD9 <= code && code <= 0xCAF3) || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
		(0xCAF5 <= code && code <= 0xCB0F) || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
		(0xCB11 <= code && code <= 0xCB2B) || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
		(0xCB2D <= code && code <= 0xCB47) || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
		(0xCB49 <= code && code <= 0xCB63) || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
		(0xCB65 <= code && code <= 0xCB7F) || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
		(0xCB81 <= code && code <= 0xCB9B) || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
		(0xCB9D <= code && code <= 0xCBB7) || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
		(0xCBB9 <= code && code <= 0xCBD3) || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
		(0xCBD5 <= code && code <= 0xCBEF) || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
		(0xCBF1 <= code && code <= 0xCC0B) || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
		(0xCC0D <= code && code <= 0xCC27) || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
		(0xCC29 <= code && code <= 0xCC43) || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
		(0xCC45 <= code && code <= 0xCC5F) || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
		(0xCC61 <= code && code <= 0xCC7B) || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
		(0xCC7D <= code && code <= 0xCC97) || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
		(0xCC99 <= code && code <= 0xCCB3) || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
		(0xCCB5 <= code && code <= 0xCCCF) || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
		(0xCCD1 <= code && code <= 0xCCEB) || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
		(0xCCED <= code && code <= 0xCD07) || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
		(0xCD09 <= code && code <= 0xCD23) || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
		(0xCD25 <= code && code <= 0xCD3F) || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
		(0xCD41 <= code && code <= 0xCD5B) || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
		(0xCD5D <= code && code <= 0xCD77) || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
		(0xCD79 <= code && code <= 0xCD93) || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
		(0xCD95 <= code && code <= 0xCDAF) || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
		(0xCDB1 <= code && code <= 0xCDCB) || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
		(0xCDCD <= code && code <= 0xCDE7) || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
		(0xCDE9 <= code && code <= 0xCE03) || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
		(0xCE05 <= code && code <= 0xCE1F) || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
		(0xCE21 <= code && code <= 0xCE3B) || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
		(0xCE3D <= code && code <= 0xCE57) || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
		(0xCE59 <= code && code <= 0xCE73) || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
		(0xCE75 <= code && code <= 0xCE8F) || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
		(0xCE91 <= code && code <= 0xCEAB) || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
		(0xCEAD <= code && code <= 0xCEC7) || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
		(0xCEC9 <= code && code <= 0xCEE3) || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
		(0xCEE5 <= code && code <= 0xCEFF) || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
		(0xCF01 <= code && code <= 0xCF1B) || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
		(0xCF1D <= code && code <= 0xCF37) || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
		(0xCF39 <= code && code <= 0xCF53) || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
		(0xCF55 <= code && code <= 0xCF6F) || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
		(0xCF71 <= code && code <= 0xCF8B) || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
		(0xCF8D <= code && code <= 0xCFA7) || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
		(0xCFA9 <= code && code <= 0xCFC3) || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
		(0xCFC5 <= code && code <= 0xCFDF) || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
		(0xCFE1 <= code && code <= 0xCFFB) || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
		(0xCFFD <= code && code <= 0xD017) || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
		(0xD019 <= code && code <= 0xD033) || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
		(0xD035 <= code && code <= 0xD04F) || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
		(0xD051 <= code && code <= 0xD06B) || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
		(0xD06D <= code && code <= 0xD087) || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
		(0xD089 <= code && code <= 0xD0A3) || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
		(0xD0A5 <= code && code <= 0xD0BF) || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
		(0xD0C1 <= code && code <= 0xD0DB) || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
		(0xD0DD <= code && code <= 0xD0F7) || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
		(0xD0F9 <= code && code <= 0xD113) || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
		(0xD115 <= code && code <= 0xD12F) || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
		(0xD131 <= code && code <= 0xD14B) || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
		(0xD14D <= code && code <= 0xD167) || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
		(0xD169 <= code && code <= 0xD183) || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
		(0xD185 <= code && code <= 0xD19F) || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
		(0xD1A1 <= code && code <= 0xD1BB) || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
		(0xD1BD <= code && code <= 0xD1D7) || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
		(0xD1D9 <= code && code <= 0xD1F3) || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
		(0xD1F5 <= code && code <= 0xD20F) || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
		(0xD211 <= code && code <= 0xD22B) || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
		(0xD22D <= code && code <= 0xD247) || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
		(0xD249 <= code && code <= 0xD263) || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
		(0xD265 <= code && code <= 0xD27F) || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
		(0xD281 <= code && code <= 0xD29B) || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
		(0xD29D <= code && code <= 0xD2B7) || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
		(0xD2B9 <= code && code <= 0xD2D3) || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
		(0xD2D5 <= code && code <= 0xD2EF) || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
		(0xD2F1 <= code && code <= 0xD30B) || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
		(0xD30D <= code && code <= 0xD327) || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
		(0xD329 <= code && code <= 0xD343) || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
		(0xD345 <= code && code <= 0xD35F) || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
		(0xD361 <= code && code <= 0xD37B) || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
		(0xD37D <= code && code <= 0xD397) || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
		(0xD399 <= code && code <= 0xD3B3) || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
		(0xD3B5 <= code && code <= 0xD3CF) || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
		(0xD3D1 <= code && code <= 0xD3EB) || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
		(0xD3ED <= code && code <= 0xD407) || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
		(0xD409 <= code && code <= 0xD423) || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
		(0xD425 <= code && code <= 0xD43F) || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
		(0xD441 <= code && code <= 0xD45B) || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
		(0xD45D <= code && code <= 0xD477) || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
		(0xD479 <= code && code <= 0xD493) || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
		(0xD495 <= code && code <= 0xD4AF) || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
		(0xD4B1 <= code && code <= 0xD4CB) || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
		(0xD4CD <= code && code <= 0xD4E7) || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
		(0xD4E9 <= code && code <= 0xD503) || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
		(0xD505 <= code && code <= 0xD51F) || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
		(0xD521 <= code && code <= 0xD53B) || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
		(0xD53D <= code && code <= 0xD557) || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
		(0xD559 <= code && code <= 0xD573) || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
		(0xD575 <= code && code <= 0xD58F) || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
		(0xD591 <= code && code <= 0xD5AB) || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
		(0xD5AD <= code && code <= 0xD5C7) || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
		(0xD5C9 <= code && code <= 0xD5E3) || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
		(0xD5E5 <= code && code <= 0xD5FF) || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
		(0xD601 <= code && code <= 0xD61B) || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
		(0xD61D <= code && code <= 0xD637) || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
		(0xD639 <= code && code <= 0xD653) || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
		(0xD655 <= code && code <= 0xD66F) || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
		(0xD671 <= code && code <= 0xD68B) || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
		(0xD68D <= code && code <= 0xD6A7) || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
		(0xD6A9 <= code && code <= 0xD6C3) || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
		(0xD6C5 <= code && code <= 0xD6DF) || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
		(0xD6E1 <= code && code <= 0xD6FB) || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
		(0xD6FD <= code && code <= 0xD717) || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
		(0xD719 <= code && code <= 0xD733) || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
		(0xD735 <= code && code <= 0xD74F) || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
		(0xD751 <= code && code <= 0xD76B) || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
		(0xD76D <= code && code <= 0xD787) || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
		(0xD789 <= code && code <= 0xD7A3) // Lo  [27] HANGUL SYLLABLE HIG..HANGUL SYLLABLE HIH
		){
			return LVT;
		}
		
		if(
		0x261D == code || // So       WHITE UP POINTING INDEX
		0x26F9 == code || // So       PERSON WITH BALL
		(0x270A <= code && code <= 0x270D) || // So   [4] RAISED FIST..WRITING HAND
		0x1F385 == code || // So       FATHER CHRISTMAS
		(0x1F3C2 <= code && code <= 0x1F3C4) || // So   [3] SNOWBOARDER..SURFER
		0x1F3C7 == code || // So       HORSE RACING
		(0x1F3CA <= code && code <= 0x1F3CC) || // So   [3] SWIMMER..GOLFER
		(0x1F442 <= code && code <= 0x1F443) || // So   [2] EAR..NOSE
		(0x1F446 <= code && code <= 0x1F450) || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
		0x1F46E == code || // So       POLICE OFFICER
		(0x1F470 <= code && code <= 0x1F478) || // So   [9] BRIDE WITH VEIL..PRINCESS
		0x1F47C == code || // So       BABY ANGEL
		(0x1F481 <= code && code <= 0x1F483) || // So   [3] INFORMATION DESK PERSON..DANCER
		(0x1F485 <= code && code <= 0x1F487) || // So   [3] NAIL POLISH..HAIRCUT
		0x1F4AA == code || // So       FLEXED BICEPS
		(0x1F574 <= code && code <= 0x1F575) || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
		0x1F57A == code || // So       MAN DANCING
		0x1F590 == code || // So       RAISED HAND WITH FINGERS SPLAYED
		(0x1F595 <= code && code <= 0x1F596) || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
		(0x1F645 <= code && code <= 0x1F647) || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
		(0x1F64B <= code && code <= 0x1F64F) || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
		0x1F6A3 == code || // So       ROWBOAT
		(0x1F6B4 <= code && code <= 0x1F6B6) || // So   [3] BICYCLIST..PEDESTRIAN
		0x1F6C0 == code || // So       BATH
		0x1F6CC == code || // So       SLEEPING ACCOMMODATION
		(0x1F918 <= code && code <= 0x1F91C) || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
		(0x1F91E <= code && code <= 0x1F91F) || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
		0x1F926 == code || // So       FACE PALM
		(0x1F930 <= code && code <= 0x1F939) || // So  [10] PREGNANT WOMAN..JUGGLING
		(0x1F93D <= code && code <= 0x1F93E) || // So   [2] WATER POLO..HANDBALL
		(0x1F9D1 <= code && code <= 0x1F9DD) // So  [13] ADULT..ELF
		){
			return E_Base;
		}

		if(
		(0x1F3FB <= code && code <= 0x1F3FF) // Sk   [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
		){
			return E_Modifier;
		}

		if(
		0x200D == code // Cf       ZERO WIDTH JOINER
		){
			return ZWJ;
		}

		if(
		0x2640 == code || // So       FEMALE SIGN
		0x2642 == code || // So       MALE SIGN
		(0x2695 <= code && code <= 0x2696) || // So   [2] STAFF OF AESCULAPIUS..SCALES
		0x2708 == code || // So       AIRPLANE
		0x2764 == code || // So       HEAVY BLACK HEART
		0x1F308 == code || // So       RAINBOW
		0x1F33E == code || // So       EAR OF RICE
		0x1F373 == code || // So       COOKING
		0x1F393 == code || // So       GRADUATION CAP
		0x1F3A4 == code || // So       MICROPHONE
		0x1F3A8 == code || // So       ARTIST PALETTE
		0x1F3EB == code || // So       SCHOOL
		0x1F3ED == code || // So       FACTORY
		0x1F48B == code || // So       KISS MARK
		(0x1F4BB <= code && code <= 0x1F4BC) || // So   [2] PERSONAL COMPUTER..BRIEFCASE
		0x1F527 == code || // So       WRENCH
		0x1F52C == code || // So       MICROSCOPE
		0x1F5E8 == code || // So       LEFT SPEECH BUBBLE
		0x1F680 == code || // So       ROCKET
		0x1F692 == code // So       FIRE ENGINE
		){
			return Glue_After_Zwj;
		}

		if(
		(0x1F466 <= code && code <= 0x1F469) // So   [4] BOY..WOMAN
		){
			return E_Base_GAZ;
		}
		
		
		//all unlisted characters have a grapheme break property of "Other"
		return Other;
	}
	return this;
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = GraphemeSplitter;
}


/***/ }),
/* 89 */
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 95);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 95 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 17);
var isArray = __webpack_require__(/*! ./_is-array */ 96);
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
/* 96 */
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
/* 97 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ 98);

/***/ }),
/* 98 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ 99);
__webpack_require__(/*! ../modules/es6.string.iterator */ 58);
__webpack_require__(/*! ../modules/web.dom.iterable */ 67);
__webpack_require__(/*! ../modules/es6.promise */ 116);
__webpack_require__(/*! ../modules/es7.promise.finally */ 127);
__webpack_require__(/*! ../modules/es7.promise.try */ 128);
module.exports = __webpack_require__(/*! ../modules/_core */ 2).Promise;


/***/ }),
/* 99 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 100 */
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
/* 101 */
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
/* 102 */
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
/* 103 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 10);


/***/ }),
/* 104 */
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
/* 105 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 23);
var anObject = __webpack_require__(/*! ./_an-object */ 5);
var getKeys = __webpack_require__(/*! ./_object-keys */ 106);

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
/* 106 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 107);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 65);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 107 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 24);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 36);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 109)(false);
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
/* 108 */
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
/* 109 */
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
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 110);
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
/* 110 */
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
/* 111 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 24);
var toObject = __webpack_require__(/*! ./_to-object */ 112);
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
/* 112 */
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
/* 113 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 114);
var step = __webpack_require__(/*! ./_iter-step */ 115);
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
/* 114 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 115 */
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
/* 116 */
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
var anInstance = __webpack_require__(/*! ./_an-instance */ 117);
var forOf = __webpack_require__(/*! ./_for-of */ 118);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 70);
var task = __webpack_require__(/*! ./_task */ 71).set;
var microtask = __webpack_require__(/*! ./_microtask */ 122)();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ 39);
var perform = __webpack_require__(/*! ./_perform */ 72);
var userAgent = __webpack_require__(/*! ./_user-agent */ 123);
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
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 124)($Promise.prototype, {
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
__webpack_require__(/*! ./_set-species */ 125)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 126)(function (iter) {
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
/* 117 */
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
/* 118 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ 21);
var call = __webpack_require__(/*! ./_iter-call */ 119);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 120);
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
/* 119 */
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
/* 120 */
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
/* 121 */
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
/* 122 */
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
/* 123 */
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
/* 124 */
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
/* 125 */
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
/* 126 */
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
/* 127 */
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
/* 128 */
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
/* 129 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ 130);
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
/* 130 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 131);
var step = __webpack_require__(/*! ./_iter-step */ 132);
var Iterators = __webpack_require__(/*! ./_iterators */ 40);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 41);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 133)(Array, 'Array', function (iterated, kind) {
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
/* 131 */
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
/* 132 */
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
/* 133 */
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
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 134);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 76);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 141);
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
/* 134 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 135);
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
/* 135 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 28);
var dPs = __webpack_require__(/*! ./_object-dps */ 136);
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
  __webpack_require__(/*! ./_html */ 140).appendChild(iframe);
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
/* 136 */
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
/* 137 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 19);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 41);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 138)(false);
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
/* 138 */
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
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 139);
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
/* 139 */
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
/* 140 */
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
/* 141 */
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
/* 142 */
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
/* 143 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 67);
__webpack_require__(/*! ../modules/es6.string.iterator */ 58);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 144);


/***/ }),
/* 144 */
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
/* 145 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ 146);
module.exports = __webpack_require__(/*! ../../modules/_core */ 2).Array.isArray;


/***/ }),
/* 146 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ 4);

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ 147) });


/***/ }),
/* 147 */
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
/* 148 */
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
/* 149 */
/*!***********************************************!*\
  !*** ./node_modules/react-dom/server.node.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.production.min.js */ 150);
} else {}


/***/ }),
/* 150 */
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

var p=__webpack_require__(/*! object-assign */ 77),q=__webpack_require__(/*! react */ 0),aa=__webpack_require__(/*! stream */ 151);function ba(a,b,d,c,g,f,k,l){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var D=[d,c,g,f,k,l],z=0;a=Error(b.replace(/%s/g,function(){return D[z++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
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
/* 151 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 152 */
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
/* 153 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ 154);
module.exports = __webpack_require__(/*! ../modules/_core */ 2).parseInt;


/***/ }),
/* 154 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 4);
var $parseInt = __webpack_require__(/*! ./_parse-int */ 155);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 155 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ 1).parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ 156).trim;
var ws = __webpack_require__(/*! ./_string-ws */ 78);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 156 */
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
/* 157 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ 158);

/***/ }),
/* 158 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 159);
var $Object = __webpack_require__(/*! ../../modules/_core */ 2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 159 */
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
/* 160 */
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



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 161);

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
/* 161 */
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
/* 162 */
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
/* 163 */
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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-emoji-component/node_modules/grapheme-splitter/index.js (<- Module is not an ECMAScript module) */
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
var es6_array_map = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(80);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(142);

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
var object = __webpack_require__(152);

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
  return react_default.a.Children.map(
    component,
    child =>
      react_default.a.isValidElement(child)
        ? react_default.a.cloneElement(
            child,
            empty_object_default.a,
            walk(child.props.children, visitor, props)
          )
        : typeof child === 'string'
          ? visitor(child, props)
          : child
  )
}

/* harmony default export */ var es_walk = (walk);

// EXTERNAL MODULE: ./node_modules/react-emoji-component/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(11);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/emojiToCodePoints.js
const cache = {}
/* harmony default export */ var emojiToCodePoints = (uc => {
  if (cache[uc] === void 0) {
    const chars = Array.from(uc)
    const codePoints = []

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]
      const codePoint = char.codePointAt(0) // ignores empty joiners (0x200D) and variation selectors (0xFE0F)

      if (codePoint !== 0x200d && codePoint !== 0xfe0f) {
        codePoints.push(codePoint.toString(16).padStart(4, '0'))
      }
    }

    cache[uc] = codePoints.join('-')
  }

  return cache[uc]
});

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/isChrome.js
/* harmony default export */ var isChrome = (typeof navigator === 'undefined' ||
  (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)));

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toImage.js
/* harmony default export */ var toImage = ((
  codePoint,
  {
    size = 16,
    hiDpi = false,
    publicPath = 'https://cdn.jsdelivr.net/emojione/assets/4.5/png/',
    extension = '.png',
  }
) => {
  size = parseInt(size)
  size = hiDpi ? size * 2 : size
  size = size < 32 ? 32 : size <= 64 ? 64 : 128
  return '' + publicPath + size + '/' + codePoint + extension
});

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/Emoji.js






const defaultImgStyle = {
  contain: 'strict',
  verticalAlign: 'middle',
  imageRendering:
    isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges',
}
function Emoji(_ref) {
  let {emoji, codePoint, style, options} = _ref,
    props = objectWithoutProperties_default()(_ref, [
      'emoji',
      'codePoint',
      'style',
      'options',
    ])

  props.width = options.size
  props.height = options.size
  props.style =
    style === void 0 ? defaultImgStyle : extends_default()({}, defaultImgStyle, style)
  props.src = toImage(codePoint, options)
  props.alt = emoji
  return react_default.a.createElement('img', props)
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
  '3299': [0, 290], // ['people', ... // index === categoryID]
}
const categories = [
  'symbols',
  'regional',
  'flags',
  'travel',
  'people',
  'nature',
  'objects',
  'food',
  'diversity',
  'activity',
] // [
//   [cols, rows]  // index === categoryID
//                 // spriteSize = {width: cols * (iconSize + 1), height: rows * (iconSize + 1)}
// ]

const spriteSizes = [
  [291, 1],
  [26, 1],
  [269, 1],
  [123, 1],
  [396, 1],
  [178, 1],
  [200, 1],
  [107, 1],
  [34, 34],
  [108, 1],
]

// EXTERNAL MODULE: ./node_modules/react-emoji-component/node_modules/grapheme-splitter/index.js
var grapheme_splitter = __webpack_require__(88);
var grapheme_splitter_default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter);

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/split.js

const splitter = new grapheme_splitter_default.a()
/* harmony default export */ var split = (splitter.splitGraphemes.bind(splitter));

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toEmojis.js




 // for skipping characters

const skipRe = /[\p{L}\sA-Za-z!@$%^&()_+\-=\[\]{};':"\\|,.<>\/?]/
function toEmojis(string, _ref) {
  let {
      render = Emoji,
      // options
      size = 16,
      publicPath,
      hiDpi,
      extension,
    } = _ref,
    props = objectWithoutProperties_default()(_ref, [
      'render',
      'size',
      'publicPath',
      'hiDpi',
      'extension',
    ])

  const options = {
    size,
    publicPath,
    hiDpi,
    extension,
  }
  let strings = ''
  const converted = []
  const chars = split(string)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]

    if (char.match(skipRe)) {
      // skips stuff we patently know are not emojis
      strings += char
    } else {
      const codePoint = emojiToCodePoints(char)

      if (emojis[codePoint] === void 0) {
        strings += char
      } else {
        if (strings.length > 0) {
          converted.push(strings)
          strings = ''
        } // can safely mutate here ... famous last words ;)

        props.emoji = char
        props.codePoint = codePoint
        props.key = codePoint + '-' + i
        props.options = options // renders the emoji in React component

        converted.push(render(props))
      }
    }
  }

  if (strings.length > 0) {
    converted.push(strings)
  }

  return converted
}

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/createEmojisComponent.js






/* harmony default export */ var createEmojisComponent = ((options = empty_object_default.a) => {
  let publicPath = options.publicPath

  if (publicPath !== void 0 && publicPath !== null) {
    options.publicPath =
      publicPath.endsWith('/') === false ? publicPath + '/' : publicPath
  }

  function Emojis(props) {
    props = extends_default()({}, props)
    const children = props.children
    delete props.children

    if (options !== empty_object_default.a) {
      extends_default()(props, options)
    }

    return react_default.a.Children.count(children)
      ? es_walk(children, toEmojis, props)
      : null
  }

  if (false) {}

  return Emojis
});

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/Emojis.js


/* harmony default export */ var es_Emojis = (createEmojisComponent());

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/utils/toSprite.js


const DEFAULT_PUBLIC_PATH =
  'https://github.com/jaredLunde/react-emoji-component/blob/master/assets/sprites/'
const imageRendering =
  isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges'

const getPos = (pos, iconSize) => pos * -1 * (iconSize + 1) + 'px'

const getSize = (x, iconSize) => (iconSize + 1) * x - 1 + 'px'

function toSprite(
  codePoint,
  {
    emoji,
    size = 16,
    hiDpi = false,
    publicPath = DEFAULT_PUBLIC_PATH,
    extension = '.png',
  }
) {
  const [categoryID, col, row] = emojis[codePoint]
  const category = categories[categoryID]
  const [spriteCols, spriteRows] = spriteSizes[categoryID]
  size = parseInt(size)
  let iconSize =
    size <= 24 ? 24 : size <= 32 ? 32 : size <= 40 ? 40 : size <= 64 ? 64 : 128
  let x = ''

  if (iconSize === 128) {
    hiDpi = false
    iconSize = 64
    x = '@2x'
  }

  if (hiDpi === true) {
    x = '@2x'
  }

  const scaleSize = (size / (iconSize - 1)) * (iconSize - 1)
  const backgroundPosition =
    row === void 0
      ? getPos(col, scaleSize) + ' 0'
      : getPos(col, scaleSize) + ' ' + getPos(row, scaleSize) // const backgroundSize = hiDpi === true ? '50%' : void 0

  const bgHeight = getSize(spriteRows, scaleSize)
  const bgWidth = getSize(spriteCols, scaleSize)
  const backgroundSize = bgWidth + ' ' + bgHeight
  const qs = publicPath === DEFAULT_PUBLIC_PATH ? '?raw=true' : ''
  return {
    width: scaleSize,
    height: scaleSize,
    imageRendering,
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 1.0,
    verticalAlign: 'middle',
    contain: 'strict',
    backgroundImage:
      'url(' +
      publicPath +
      'emojione-sprite-' +
      iconSize +
      '-' +
      category +
      x +
      extension +
      qs +
      ')',
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat',
  }
}

// CONCATENATED MODULE: ./node_modules/react-emoji-component/es/EmojiSprite.js






const EmojiSprite = _ref => {
  let {emoji, codePoint, style, options} = _ref,
    props = objectWithoutProperties_default()(_ref, [
      'emoji',
      'codePoint',
      'style',
      'options',
    ])

  props.role = 'img'
  props['aria-label'] = emoji
  props.children = emoji
  props.style = extends_default()(toSprite(codePoint, options), style)
  return react_default.a.createElement('span', props)
}

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

var _ref5 = react_default.a.createElement("br", null);

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
  }, "High DPI?", _ref5, react_default.a.createElement("input", {
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