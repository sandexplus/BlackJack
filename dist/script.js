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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '?? 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('endsWith') }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('startsWith') }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/modules/addBet.js":
/*!**********************************!*\
  !*** ./src/js/modules/addBet.js ***!
  \**********************************/
/*! exports provided: addBet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBet", function() { return addBet; });
/* harmony import */ var _newRound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newRound */ "./src/js/modules/newRound.js");


function addBet(btnSelector, inputSelector, bankSelector, newGameSelector, betModalSelector, gameSelector, btnsSelector, addCardSelector, holdSelector, surrenderSelector, splitBtnSelector, splitBtnsSelector, secondHandSelector, cbSelector, deckCountSelector) {
  var btn = document.querySelector(btnSelector),
      bankTitle = document.querySelector(bankSelector),
      newGame = document.querySelector(newGameSelector),
      betModal = document.querySelector(betModalSelector),
      gameSection = document.querySelector(gameSelector),
      btnsSection = document.querySelector(btnsSelector),
      addCardBtn = document.querySelector(addCardSelector),
      holdBtnBtn = document.querySelector(holdSelector),
      surrenderBtn = document.querySelector(surrenderSelector),
      splitBtn = document.querySelector(splitBtnSelector),
      splitBtns = document.querySelector(splitBtnsSelector),
      secondHand = document.querySelector(secondHandSelector),
      chb = document.querySelector(cbSelector),
      deckCount = document.querySelector(deckCountSelector);
  btn.addEventListener('click', function () {
    var bet = +document.querySelector(inputSelector).value;
    var bank;

    if (localStorage.getItem('bank')) {
      bank = localStorage.getItem('bank');
    } else {
      bank = 1000;
    }

    if (bank - bet < 0) {
      bankTitle.textContent = "You don't have enough money";
      return;
    }

    bank -= bet; //newGame.click();

    localStorage.setItem('bank', bank);
    localStorage.setItem('bet', +localStorage.getItem('bet') + bet);
    bankTitle.textContent = "Your bank: ".concat(bank, "$");
    betModal.style.display = 'none';
    gameSection.style.display = 'block';
    btnsSection.style.display = 'block';
    addCardBtn.style.display = 'block';
    holdBtnBtn.style.display = 'block';
    surrenderBtn.style.display = 'block';
    splitBtn.style.display = 'block';
    splitBtns.style.display = 'none';
    secondHand.style.display = 'none';
    newGame.style.boxShadow = '';
    Object(_newRound__WEBPACK_IMPORTED_MODULE_0__["newRound"])('.popup__winner', '.nav__new-game', '.popup', '.black-jack', '.popup__reward', '.btns__double', '.btns__add-card', '.btns__hold', '.btns__surrender', '.btns__split');
  });
}



/***/ }),

/***/ "./src/js/modules/addCard.js":
/*!***********************************!*\
  !*** ./src/js/modules/addCard.js ***!
  \***********************************/
/*! exports provided: addCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");


function addCard(handLS, scoreSelector, hold) {
  var deck = JSON.parse(localStorage.getItem('deck')),
      hand = JSON.parse(localStorage.getItem(handLS));
  hand.push(deck[0]);
  deck.shift();
  localStorage.setItem('deck', JSON.stringify(deck));
  localStorage.setItem(handLS, JSON.stringify(hand));
  Object(_checkScore__WEBPACK_IMPORTED_MODULE_0__["checkScore"])(handLS, scoreSelector, hold);
}



/***/ }),

/***/ "./src/js/modules/addCardBtn.js":
/*!**************************************!*\
  !*** ./src/js/modules/addCardBtn.js ***!
  \**************************************/
/*! exports provided: addCardBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardBtn", function() { return addCardBtn; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");







function addCardBtn(yourScoreSelector, yourHandOutputSelector, holdBtnSelector, addCardBtnSelector, doubleBtnSelector) {
  var split = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  function addCardClick() {
    var yourHandOutput = document.querySelector(yourHandOutputSelector),
        yourScoreOutput = document.querySelector(yourScoreSelector),
        doubleBtn = document.querySelector(doubleBtnSelector),
        holdBtn = document.querySelector(holdBtnSelector);
    var hand;

    if (yourHandOutputSelector === '.game__your-hand') {
      hand = 'yourHand';
    } else {
      hand = 'yourHand2';
    }

    doubleBtn.style.display = 'none';

    while (yourHandOutput.firstChild) {
      yourHandOutput.removeChild(yourHandOutput.firstChild);
    }

    Object(_addCard__WEBPACK_IMPORTED_MODULE_4__["addCard"])(hand, yourScoreSelector);
    var yourHand = JSON.parse(localStorage.getItem(hand));
    yourHand.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_5__["drawCard"])(yourHandOutputSelector, card);
    });
    var yourScore = +yourScoreOutput.textContent.replace('Your score: ', '');

    if (!split) {
      if (+yourScore >= 21) {
        holdBtn.click();
      }
    }
  }

  var addCardBtn = document.querySelector(addCardBtnSelector);
  addCardBtn.addEventListener('click', addCardClick);
}



/***/ }),

/***/ "./src/js/modules/checkScore.js":
/*!**************************************!*\
  !*** ./src/js/modules/checkScore.js ***!
  \**************************************/
/*! exports provided: checkScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkScore", function() { return checkScore; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);






function checkScore(handLS, scoreSelector) {
  var hold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var write = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var regex = /..$/;
  var scoreOutput = document.querySelector(scoreSelector),
      hand = JSON.parse(localStorage.getItem(handLS));
  var score = 0;
  var tempScore;
  hand.forEach(function (element) {
    tempScore = 0;

    if (isNaN(+element.replace(regex, '')) && !element.startsWith('a')) {
      score += 10;
      tempScore += 10;
    } else if (element.startsWith('a')) {
      if (score + 11 > 21) {
        score += 1;
        tempScore += 1;
      } else {
        score += 11;
        tempScore += 11;
      }
    } else {
      score += +element.replace(regex, '');
      tempScore += +element.replace(regex, '');
    }

    if (scoreSelector === '.btns__dealer-score' && !hold && element === hand[1] && hand.length > 1) {
      score -= tempScore;
    }
  });

  if (write) {
    if (scoreSelector === '.btns__your-score' || scoreSelector === '.btns__your-score-2') {
      scoreOutput.textContent = "Your score: ".concat(score);
    } else {
      scoreOutput.textContent = "Dealer score: ".concat(score);
    }
  } else {
    return score;
  }
}



/***/ }),

/***/ "./src/js/modules/checkWin.js":
/*!************************************!*\
  !*** ./src/js/modules/checkWin.js ***!
  \************************************/
/*! exports provided: checkWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWin", function() { return checkWin; });
function checkWin(yourScore, dealerScore, winnerSelector, rewardSelector) {
  var yourHand = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'yourHand';
  var winner = document.querySelector(winnerSelector),
      reward = document.querySelector(rewardSelector);
  reward.textContent = '';

  if (dealerScore === 21) {
    if (yourScore < 21) {
      winner.textContent = "Winner: Dealer";
      localStorage.setItem('bet', 0);
    }

    if (yourScore === 21) {
      winner.textContent = "Draw";
    }

    if (yourScore > 21) {
      winner.textContent = "Winner: Dealer";
      localStorage.setItem('bet', 0);
    }
  }

  if (dealerScore > 21) {
    if (yourScore < 21) {
      winner.textContent = "Winner: You";
      localStorage.setItem('bet', localStorage.getItem('bet') * 2);
      reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
    }

    if (yourScore === 21) {
      if (yourHand.length === 2) {
        winner.textContent = "Winner: You";
        localStorage.setItem('bet', localStorage.getItem('bet') * 2.5);
        reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
      } else {
        winner.textContent = "Winner: You";
        localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
      }
    }

    if (yourScore > 21) {
      winner.textContent = "Winner: Dealer";
      localStorage.setItem('bet', 0);
    }
  }

  if (dealerScore < 21) {
    if (yourScore < 21) {
      if (yourScore < dealerScore) {
        winner.textContent = "Winner: Dealer";
        localStorage.setItem('bet', 0);
      }

      if (yourScore === dealerScore) {
        winner.textContent = "Draw";
      }

      if (yourScore > dealerScore) {
        winner.textContent = "Winner: You";
        localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
      }
    }

    if (yourScore === 21) {
      if (yourHand.length === 2) {
        winner.textContent = "Winner: You";
        localStorage.setItem('bet', localStorage.getItem('bet') * 2.5);
        reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
      } else {
        winner.textContent = "Winner: You";
        localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet'), "$");
      }
    }

    if (yourScore > 21) {
      winner.textContent = "Winner: Dealer";
      localStorage.setItem('bet', 0);
    }
  }
}



/***/ }),

/***/ "./src/js/modules/continueGameBtn.js":
/*!*******************************************!*\
  !*** ./src/js/modules/continueGameBtn.js ***!
  \*******************************************/
/*! exports provided: continueGameBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continueGameBtn", function() { return continueGameBtn; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");





function continueGameBtn(continueGameSelector, dealerHandSelector, yourHandSelector) {
  var continueGame = document.querySelector(continueGameSelector);
  continueGame.addEventListener('click', function () {
    console.log(1);
    var dealerHandOutput = document.querySelector(dealerHandSelector),
        yourHandOutput = document.querySelector(yourHandSelector);
    localStorage.setItem('deck', localStorage.getItem('savedDeck'));
    localStorage.setItem('yourHand', localStorage.getItem('savedYourHand'));
    localStorage.setItem('dealerHand', localStorage.getItem('savedDealerHand'));
    localStorage.setItem('bank', localStorage.getItem('savedBank'));
    localStorage.setItem('bet', localStorage.getItem('savedBet'));

    while (dealerHandOutput.firstChild) {
      dealerHandOutput.removeChild(dealerHandOutput.firstChild);
    }

    while (yourHandOutput.firstChild) {
      yourHandOutput.removeChild(yourHandOutput.firstChild);
    }

    var dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
    dealerHand.forEach(function (card, i) {
      if (i === 1) {
        Object(_drawCard__WEBPACK_IMPORTED_MODULE_3__["drawCard"])('.game__dealer-hand', card, true);
      } else {
        Object(_drawCard__WEBPACK_IMPORTED_MODULE_3__["drawCard"])('.game__dealer-hand', card);
      }
    });
    Object(_checkScore__WEBPACK_IMPORTED_MODULE_2__["checkScore"])('dealerHand', '.btns__dealer-score');
    var yourHand = JSON.parse(localStorage.getItem('yourHand'));
    yourHand.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_3__["drawCard"])('.game__your-hand', card);
    });
    Object(_checkScore__WEBPACK_IMPORTED_MODULE_2__["checkScore"])('yourHand', '.btns__your-score');
  });
}



/***/ }),

/***/ "./src/js/modules/doubleBtn.js":
/*!*************************************!*\
  !*** ./src/js/modules/doubleBtn.js ***!
  \*************************************/
/*! exports provided: doubleBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleBtn", function() { return doubleBtn; });
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");


function doubleBtn(doubleBtnSelector, addCardBtnSelector, holdBtnSelector) {
  var doubleBtn = document.querySelector(doubleBtnSelector);
  doubleBtn.addEventListener('click', function () {
    var addCardBtn = document.querySelector(addCardBtnSelector),
        holdBtn = document.querySelector(holdBtnSelector);

    if (localStorage.getItem('bank') - localStorage.getItem('bet') >= 0) {
      localStorage.setItem('bank', localStorage.getItem('bank') - localStorage.getItem('bet'));
      localStorage.setItem('bet', localStorage.getItem('bet') * 2);
      alert("Your bet was increased to ".concat(localStorage.getItem('bet'), "$"));
      addCardBtn.click();

      if (+Object(_checkScore__WEBPACK_IMPORTED_MODULE_0__["checkScore"])('yourHand', '.btns__your-score', false, false) < 21) {
        holdBtn.click();
      }
    }
  });
}



/***/ }),

/***/ "./src/js/modules/drawCard.js":
/*!************************************!*\
  !*** ./src/js/modules/drawCard.js ***!
  \************************************/
/*! exports provided: drawCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCard", function() { return drawCard; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);




function drawCard(parentSelector, cardTile) {
  var hidden = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cardBorder = document.createElement('div'),
      cards = document.querySelector(parentSelector),
      suit = document.createElement('img'),
      power = document.createElement('div');
  cardBorder.classList.add('game__card');
  suit.classList.add('game__suit');
  power.classList.add('game__power');
  cardBorder.appendChild(suit);
  cardBorder.appendChild(power);

  if (hidden) {
    cardBorder.classList.add('game__card-hidden');
  }

  if (cardTile.endsWith('s')) {
    suit.src = './assets/img/spades.svg';
    power.textContent = cardTile.replace(/..$/, '');
  }

  if (cardTile.endsWith('d')) {
    suit.src = './assets/img/diamond.svg';
    power.textContent = cardTile.replace(/..$/, '');
  }

  if (cardTile.endsWith('c')) {
    suit.src = './assets/img/clubs.svg';
    power.textContent = cardTile.replace(/..$/, '');
  }

  if (cardTile.endsWith('h')) {
    suit.src = './assets/img/heart.svg';
    power.textContent = cardTile.replace(/..$/, '');
  }

  cards.appendChild(cardBorder);
}



/***/ }),

/***/ "./src/js/modules/holdBtn.js":
/*!***********************************!*\
  !*** ./src/js/modules/holdBtn.js ***!
  \***********************************/
/*! exports provided: holdBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holdBtn", function() { return holdBtn; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");
/* harmony import */ var _checkWin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkWin */ "./src/js/modules/checkWin.js");









function holdBtn(dealerScoreSelector, yourScoreSelector, dealerHandSelector, bankSelector, newGameSelector, addCardBtnSelector, modalSelector, holdBtnSelector, surrenderSelector, doubleBtnSelector, splitBtnSelector) {
  function holdClick() {
    var dealerScoreOutput = document.querySelector(dealerScoreSelector),
        dealerHandOutput = document.querySelector(dealerHandSelector),
        bank = document.querySelector(bankSelector),
        newGame = document.querySelector(newGameSelector),
        addCardBtn = document.querySelector(addCardBtnSelector),
        surrenderBtn = document.querySelector(surrenderSelector),
        modal = document.querySelector(modalSelector),
        yourScore = +document.querySelector(yourScoreSelector).textContent.replace('Your score: ', ''),
        doubleBtn = document.querySelector(doubleBtnSelector),
        splitBtn = document.querySelector(splitBtnSelector);
    doubleBtn.style.display = 'none';
    var dealerScore = Object(_checkScore__WEBPACK_IMPORTED_MODULE_4__["checkScore"])('dealerHand', '.btns__dealer-score', true, false);

    while (dealerScore < 17) {
      Object(_addCard__WEBPACK_IMPORTED_MODULE_5__["addCard"])('dealerHand', '.btns__dealer-score', true);
      dealerScore = +dealerScoreOutput.textContent.replace('Dealer score: ', '');
    }

    dealerScoreOutput.textContent = "Dealer score: ".concat(dealerScore);

    while (dealerHandOutput.firstChild) {
      dealerHandOutput.removeChild(dealerHandOutput.firstChild);
    }

    var dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
    dealerHand.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_6__["drawCard"])('.game__dealer-hand', card);
    });
    Object(_checkWin__WEBPACK_IMPORTED_MODULE_7__["checkWin"])(yourScore, dealerScore, '.popup__winner', '.popup__reward');
    localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +localStorage.getItem('bet')));
    localStorage.setItem('bet', 0);
    bank.textContent = "Your bank: ".concat(localStorage.getItem('bank'), "$");
    newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
    addCardBtn.style.display = 'none';
    holdBtnBtn.style.display = 'none';
    surrenderBtn.style.display = 'none';
    splitBtn.style.display = 'none';
    setTimeout(function () {
      modal.style.display = 'block';
    }, 1000);
  }

  var holdBtnBtn = document.querySelector(holdBtnSelector);
  holdBtnBtn.addEventListener('click', holdClick);
}



/***/ }),

/***/ "./src/js/modules/holdSplitBtn.js":
/*!****************************************!*\
  !*** ./src/js/modules/holdSplitBtn.js ***!
  \****************************************/
/*! exports provided: holdSplitBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holdSplitBtn", function() { return holdSplitBtn; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");
/* harmony import */ var _checkWin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkWin */ "./src/js/modules/checkWin.js");









function holdSplitBtn(dealerScoreSelector, yourScoreSelector, dealerHandSelector, bankSelector, newGameSelector, addCardBtnSelector, modalSelector, holdBtnSelector, surrenderSelector, doubleBtnSelector) {
  var winnerSelector = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : '.popup__winner';
  var rewardSelector = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : '.popup__reward';

  function holdClick() {
    var dealerScoreOutput = document.querySelector(dealerScoreSelector),
        dealerHandOutput = document.querySelector(dealerHandSelector),
        bank = document.querySelector(bankSelector),
        newGame = document.querySelector(newGameSelector),
        addCardBtn = document.querySelector(addCardBtnSelector),
        surrenderBtn = document.querySelector(surrenderSelector),
        modal = document.querySelector(modalSelector),
        yourScore = +document.querySelector(yourScoreSelector).textContent.replace('Your score: ', '').replace('Dealer score: ', ''),
        doubleBtn = document.querySelector(doubleBtnSelector);
    doubleBtn.style.display = 'none';
    var dealerScore = Object(_checkScore__WEBPACK_IMPORTED_MODULE_4__["checkScore"])('dealerHand', '.btns__dealer-score', true, false);
    localStorage.setItem('holdCount', +localStorage.getItem('holdCount') + 1);
    localStorage.setItem(yourScoreSelector, +yourScore);

    if (localStorage.getItem('holdCount') < 2) {
      return;
    }

    while (dealerScore < 17) {
      Object(_addCard__WEBPACK_IMPORTED_MODULE_5__["addCard"])('dealerHand', '.btns__dealer-score', true);
      dealerScore = +dealerScoreOutput.textContent.replace('Dealer score: ', '');
    }

    dealerScoreOutput.textContent = "Dealer score: ".concat(dealerScore);

    while (dealerHandOutput.firstChild) {
      dealerHandOutput.removeChild(dealerHandOutput.firstChild);
    }

    var dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
    dealerHand.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_6__["drawCard"])('.game__dealer-hand', card);
    });
    var score1 = localStorage.getItem('.btns__your-score'),
        score2 = localStorage.getItem('.btns__your-score-2'),
        bet = localStorage.getItem('bet');
    Object(_checkWin__WEBPACK_IMPORTED_MODULE_7__["checkWin"])(score1, dealerScore, winnerSelector, rewardSelector, 'yourHand');
    localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +bet));
    localStorage.setItem('bet', bet);
    var winner2 = document.createElement('div'),
        reward2 = document.createElement('div');
    winner2.classList.add('popup__winner', 'winner2');
    reward2.classList.add('popup__reward', 'reward2');
    document.querySelector('.popup__wrapper').appendChild(winner2);
    document.querySelector('.popup__wrapper').appendChild(reward2);
    Object(_checkWin__WEBPACK_IMPORTED_MODULE_7__["checkWin"])(score2, dealerScore, '.winner2', '.reward2', 'yourHand2');
    localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +localStorage.getItem('bet')));
    localStorage.setItem('bet', 0);
    bank.textContent = "Your bank: ".concat(localStorage.getItem('bank'), "$");
    newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
    addCardBtn.style.display = 'none';
    holdBtnBtn.style.display = 'none';
    surrenderBtn.style.display = 'none';
    document.querySelector('.hold-2').style.display = 'none';
    document.querySelector('.add-card-2').style.display = 'none';
    setTimeout(function () {
      modal.style.display = 'block';
    }, 1000);
  }

  var holdBtnBtn = document.querySelector(holdBtnSelector);
  holdBtnBtn.addEventListener('click', holdClick);
}



/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
function modal(modalSelector, closeSelector) {
  var modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);
  modal.addEventListener('click', function (e) {
    if (e.target && e.target === modal || e.target === close) {
      modal.style.display = 'none';
    }
  });
}



/***/ }),

/***/ "./src/js/modules/newGame.js":
/*!***********************************!*\
  !*** ./src/js/modules/newGame.js ***!
  \***********************************/
/*! exports provided: newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
function newGame(newGameSelector, btnsSelector, gameSelector, betPopupSelector, bankSelector, dealerHandSelector, yourHandSelector, winnerSelector, rewardSelector) {
  var newGameBtn = document.querySelector(newGameSelector),
      btns = document.querySelector(btnsSelector),
      game = document.querySelector(gameSelector),
      betPopup = document.querySelector(betPopupSelector),
      bank = document.querySelector(bankSelector),
      dealerHandOutput = document.querySelector(dealerHandSelector),
      yourHandOutput = document.querySelector(yourHandSelector),
      winner = document.querySelector(winnerSelector),
      reward = document.querySelector(rewardSelector);

  if (localStorage.getItem('bank')) {
    bank.textContent = "Your bank: ".concat(localStorage.getItem('bank'), "$");
  } else {
    bank.textContent = "Your bank: 1000$";
    localStorage.setItem('bank', 1000);
  }

  localStorage.setItem('bet', 0);
  newGameBtn.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';

  while (yourHandOutput.firstChild) {
    yourHandOutput.removeChild(yourHandOutput.firstChild);
  }

  while (dealerHandOutput.firstChild) {
    dealerHandOutput.removeChild(dealerHandOutput.firstChild);
  }

  winner.textContent = "";
  reward.textContent = "";
  btns.style.display = 'none';
  game.style.display = 'none';

  function newGameClick() {
    betPopup.style.display = 'block';
  }

  newGameBtn.addEventListener('click', newGameClick);
}



/***/ }),

/***/ "./src/js/modules/newGameBtn.js":
/*!**************************************!*\
  !*** ./src/js/modules/newGameBtn.js ***!
  \**************************************/
/*! exports provided: newGameBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGameBtn", function() { return newGameBtn; });
/* harmony import */ var _newRound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newRound */ "./src/js/modules/newRound.js");
/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newGame */ "./src/js/modules/newGame.js");



function newGameBtn(newGameSelector) {
  var newGameBtn = document.querySelector(newGameSelector);
  newGameBtn.addEventListener('click', function () {
    Object(_newGame__WEBPACK_IMPORTED_MODULE_1__["newGame"])('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand', '.popup__winner', '.popup__reward', '.bet__deck-count');
  });
}



/***/ }),

/***/ "./src/js/modules/newRound.js":
/*!************************************!*\
  !*** ./src/js/modules/newRound.js ***!
  \************************************/
/*! exports provided: newRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newRound", function() { return newRound; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuffle */ "./src/js/modules/shuffle.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");
/* harmony import */ var _checkScore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkScore */ "./src/js/modules/checkScore.js");










function newRound(winnerSelector, newGameSelector, modalSelector, bjModalSelector, rewardSelector, doubleBtnSelector, addCardBtnSelector, holdBtnSelector, surrenderBtnSelector, splitBtnSelector) {
  var winner = document.querySelector(winnerSelector),
      newGame = document.querySelector(newGameSelector),
      modal = document.querySelector(modalSelector),
      bjModal = document.querySelector(bjModalSelector),
      reward = document.querySelector(rewardSelector),
      doubleBtn = document.querySelector(doubleBtnSelector),
      addCardBtn = document.querySelector(addCardBtnSelector),
      holdBtn = document.querySelector(holdBtnSelector),
      surrenderBtn = document.querySelector(surrenderBtnSelector),
      splitBtn = document.querySelector(splitBtnSelector);
  winner.textContent = '';
  reward.textContent = '';

  if (document.querySelector('.winner2') || document.querySelector('.reward2')) {
    document.querySelector('.winner2').textContent = '';
    document.querySelector('.reward2').textContent = '';
  }

  var deck = ['2-s', '3-s', '4-h', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s', '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-s', '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c', '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'];
  var yourHand = [],
      dealerHand = [];
  deck = Object(_shuffle__WEBPACK_IMPORTED_MODULE_5__["shuffle"])(deck);
  localStorage.setItem('yourHand', JSON.stringify(yourHand));
  localStorage.setItem('dealerHand', JSON.stringify(dealerHand));
  localStorage.setItem('deck', JSON.stringify(deck));
  Object(_addCard__WEBPACK_IMPORTED_MODULE_6__["addCard"])('yourHand', '.btns__your-score');
  Object(_addCard__WEBPACK_IMPORTED_MODULE_6__["addCard"])('dealerHand', '.btns__dealer-score');
  Object(_addCard__WEBPACK_IMPORTED_MODULE_6__["addCard"])('yourHand', '.btns__your-score');
  Object(_addCard__WEBPACK_IMPORTED_MODULE_6__["addCard"])('dealerHand', '.btns__dealer-score');
  yourHand = JSON.parse(localStorage.getItem('yourHand'));
  yourHand.forEach(function (card) {
    Object(_drawCard__WEBPACK_IMPORTED_MODULE_7__["drawCard"])('.game__your-hand', card);
  });
  dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
  dealerHand.forEach(function (card, i) {
    if (i === 1) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_7__["drawCard"])('.game__dealer-hand', card, true);
    } else {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_7__["drawCard"])('.game__dealer-hand', card);
    }
  });
  var regex = /..$/;
  yourHand.forEach(function (card, i) {
    if (card.replace(regex, '') === 'j') {
      yourHand[i] = card.replace('j', '10');
    }

    if (card.replace(regex, '') === 'q') {
      yourHand[i] = card.replace('q', '10');
    }

    if (card.replace(regex, '') === 'k') {
      yourHand[i] = card.replace('k', '10');
    }

    if (card.replace(regex, '') === 'a') {
      yourHand[i] = card.replace('a', '11');
    }
  });

  if (yourHand[0].replace(regex, '') !== yourHand[1].replace(regex, '')) {
    splitBtn.style.display = 'none';
  }

  if (+Object(_checkScore__WEBPACK_IMPORTED_MODULE_8__["checkScore"])('yourHand', '.btns__your-score', false, false) === 21) {
    if (dealerHand[0].startsWith('a')) {
      bjModal.style.display = 'block';
    } else {
      winner.textContent = "Winner: You";
      localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2.5);
      reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet') * 2.5, "$");
      localStorage.setItem('bet', 0);
      newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
      addCardBtn.style.display = 'none';
      holdBtn.style.display = 'none';
      surrenderBtn.style.display = 'none';
      splitBtn.style.display = 'none';
      setTimeout(function () {
        modal.style.display = 'block';
      }, 1000);
    }
  } else {
    if (+Object(_checkScore__WEBPACK_IMPORTED_MODULE_8__["checkScore"])('yourHand', '.btns__your-score', false, false) < 12 && +Object(_checkScore__WEBPACK_IMPORTED_MODULE_8__["checkScore"])('yourHand', '.btns__your-score', false, false) > 8) {
      alert('You can double your bet');
    }

    doubleBtn.style.display = 'block';
  }
}



/***/ }),

/***/ "./src/js/modules/playOnBtn.js":
/*!*************************************!*\
  !*** ./src/js/modules/playOnBtn.js ***!
  \*************************************/
/*! exports provided: playOnBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playOnBtn", function() { return playOnBtn; });
/* harmony import */ var _holdBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdBtn */ "./src/js/modules/holdBtn.js");


function playOnBtn(btnSelector, modalSelector, holdBtnSelector) {
  var playOn = document.querySelector(btnSelector);
  playOn.addEventListener('click', function () {
    var modal = document.querySelector(modalSelector),
        holdBtn = document.querySelector(holdBtnSelector);
    modal.style.display = 'none';
    holdBtn.click();
  });
}



/***/ }),

/***/ "./src/js/modules/range.js":
/*!*********************************!*\
  !*** ./src/js/modules/range.js ***!
  \*********************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
function range(rangeSelector, betSelector) {
  var range = document.querySelector(rangeSelector),
      bet = document.querySelector(betSelector);
  range.addEventListener('input', function () {
    bet.textContent = "Your bet: ".concat(range.value, "$");
  });
}



/***/ }),

/***/ "./src/js/modules/resetBank.js":
/*!*************************************!*\
  !*** ./src/js/modules/resetBank.js ***!
  \*************************************/
/*! exports provided: resetBank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBank", function() { return resetBank; });
function resetBank(resetBankSelector, bankSelector) {
  var resetBankBtn = document.querySelector(resetBankSelector);
  resetBankBtn.addEventListener('click', function () {
    var bank = document.querySelector(bankSelector);
    localStorage.setItem('bank', 1000);
    bank.textContent = "Your bank: ".concat(localStorage.getItem('bank'), "$");
  });
}



/***/ }),

/***/ "./src/js/modules/saveGameBtn.js":
/*!***************************************!*\
  !*** ./src/js/modules/saveGameBtn.js ***!
  \***************************************/
/*! exports provided: saveGameBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGameBtn", function() { return saveGameBtn; });
function saveGameBtn(saveGameSelector) {
  var saveGame = document.querySelector(saveGameSelector);
  saveGame.addEventListener('click', function () {
    localStorage.setItem('savedDeck', localStorage.getItem('deck'));
    localStorage.setItem('savedYourHand', localStorage.getItem('yourHand'));
    localStorage.setItem('savedDealerHand', localStorage.getItem('dealerHand'));
    localStorage.setItem('savedBank', localStorage.getItem('bank'));
    localStorage.setItem('savedBet', localStorage.getItem('bet'));
  });
}



/***/ }),

/***/ "./src/js/modules/shuffle.js":
/*!***********************************!*\
  !*** ./src/js/modules/shuffle.js ***!
  \***********************************/
/*! exports provided: shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
function shuffle(arr) {
  var j, temp;

  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
}



/***/ }),

/***/ "./src/js/modules/splitBtn.js":
/*!************************************!*\
  !*** ./src/js/modules/splitBtn.js ***!
  \************************************/
/*! exports provided: splitBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBtn", function() { return splitBtn; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawCard */ "./src/js/modules/drawCard.js");





function splitBtn(splitBtnSelector, doubleBtnSelector, surrenderSelector, addCardBtnSelector, holdBtnSelector, btns1Selector, btns2Selector, btns3Selector, btns4Selector, btnsSplitSelector, firstHandSelector, secondHandSelector, hand2Selector) {
  var splitBtn = document.querySelector(splitBtnSelector);
  splitBtn.addEventListener('click', function () {
    var doubleBtn = document.querySelector(doubleBtnSelector),
        surrenderBtn = document.querySelector(surrenderSelector),
        addCardBtn = document.querySelector(addCardBtnSelector),
        holdBtn = document.querySelector(holdBtnSelector),
        btns1 = document.querySelector(btns1Selector),
        btns2 = document.querySelector(btns2Selector),
        btns3 = document.querySelector(btns3Selector),
        btns4 = document.querySelector(btns4Selector),
        btnsSplit = document.querySelector(btnsSplitSelector),
        firstHand = document.querySelector(firstHandSelector),
        secondHand = document.querySelector(secondHandSelector),
        hand2 = document.querySelector(hand2Selector);
    splitBtn.style.display = 'none';
    doubleBtn.style.display = 'none';
    surrenderBtn.style.display = 'none';
    addCardBtn.style.display = 'none';
    holdBtn.style.display = 'none';
    btnsSplit.style.display = 'block';
    secondHand.style.display = 'block';
    hand2.style.display = 'block';
    btns1.style.display = 'block';
    btns2.style.display = 'block';
    btns3.style.display = 'block';
    btns4.style.display = 'block';
    localStorage.removeItem('.btns__your-score');
    localStorage.removeItem('.btns__your-score-2');
    var yourHand2 = [],
        yourHand = JSON.parse(localStorage.getItem('yourHand'));
    localStorage.setItem('yourHand2', JSON.stringify(yourHand2));
    yourHand2[0] = yourHand[1];
    yourHand.pop();
    localStorage.setItem('yourHand2', JSON.stringify(yourHand2));
    localStorage.setItem('yourHand', JSON.stringify(yourHand));
    Object(_addCard__WEBPACK_IMPORTED_MODULE_2__["addCard"])('yourHand', '.btns__your-score');
    Object(_addCard__WEBPACK_IMPORTED_MODULE_2__["addCard"])('yourHand2', '.btns__your-score-2');
    localStorage.setItem('holdCount', 0);

    while (firstHand.firstChild) {
      firstHand.removeChild(firstHand.firstChild);
    }

    yourHand = JSON.parse(localStorage.getItem('yourHand'));
    yourHand.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_3__["drawCard"])('.game__your-hand', card);
    });

    while (secondHand.firstChild) {
      secondHand.removeChild(secondHand.firstChild);
    }

    yourHand2 = JSON.parse(localStorage.getItem('yourHand2'));
    yourHand2.forEach(function (card) {
      Object(_drawCard__WEBPACK_IMPORTED_MODULE_3__["drawCard"])('.game__your-hand-2', card);
    });
  });
}



/***/ }),

/***/ "./src/js/modules/surrenderBtn.js":
/*!****************************************!*\
  !*** ./src/js/modules/surrenderBtn.js ***!
  \****************************************/
/*! exports provided: surrenderBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surrenderBtn", function() { return surrenderBtn; });
function surrenderBtn(surrenderSelector, subwinnerSelector, winnerSelector, modalSelector, addCardSelector, holdSelector, newGameSelector, doubleBtnSelector) {
  var surrender = document.querySelector(surrenderSelector);
  surrender.addEventListener('click', function () {
    var winner = document.querySelector(winnerSelector),
        modal = document.querySelector(modalSelector),
        subwinner = document.querySelector(subwinnerSelector),
        addCardBtn = document.querySelector(addCardSelector),
        holdBtn = document.querySelector(holdSelector),
        newGame = document.querySelector(newGameSelector),
        doubleBtn = document.querySelector(doubleBtnSelector);
    doubleBtn.style.display = 'none';
    localStorage.setItem('bank', +localStorage.getItem('bank') + Math.floor(+localStorage.getItem('bet') / 2));
    winner.textContent = "You surrendered";
    subwinner.textContent = "Your winnigs are ".concat(Math.floor(localStorage.getItem('bet') / 2), "$");
    addCardBtn.style.display = "none";
    holdBtn.style.display = "none";
    surrender.style.display = "none";
    newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
    setTimeout(function () {
      modal.style.display = 'block';
    }, 1000);
  });
}



/***/ }),

/***/ "./src/js/modules/takeBetBtn.js":
/*!**************************************!*\
  !*** ./src/js/modules/takeBetBtn.js ***!
  \**************************************/
/*! exports provided: takeBetBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeBetBtn", function() { return takeBetBtn; });
function takeBetBtn(takeBetSelector, newGameSelector, winnerSelector, modalSelector, thisModalSelector, addCardSelector, holdSelector, rewardSelector, surrenderSelector) {
  var takeBet = document.querySelector(takeBetSelector);
  takeBet.addEventListener('click', function () {
    var newGame = document.querySelector(newGameSelector),
        winner = document.querySelector(winnerSelector),
        modal = document.querySelector(modalSelector),
        thisModal = document.querySelector(thisModalSelector),
        addCardBtn = document.querySelector(addCardSelector),
        holdBtn = document.querySelector(holdSelector),
        reward = document.querySelector(rewardSelector),
        surrenderBtn = document.querySelector(surrenderSelector);
    winner.textContent = "Winner: You";
    localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2);
    reward.textContent = "Your winnings are ".concat(localStorage.getItem('bet') * 2, "$");
    localStorage.setItem('bet', 0);
    newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
    thisModal.style.display = 'none';
    addCardBtn.style.display = 'none';
    holdBtn.style.display = 'none';
    surrenderBtn.style.display = "none";
    setTimeout(function () {
      modal.style.display = 'block';
    }, 1000);
  });
}



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/range */ "./src/js/modules/range.js");
/* harmony import */ var _modules_addBet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addBet */ "./src/js/modules/addBet.js");
/* harmony import */ var _modules_newGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newGame */ "./src/js/modules/newGame.js");
/* harmony import */ var _modules_addCardBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addCardBtn */ "./src/js/modules/addCardBtn.js");
/* harmony import */ var _modules_holdBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/holdBtn */ "./src/js/modules/holdBtn.js");
/* harmony import */ var _modules_newGameBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/newGameBtn */ "./src/js/modules/newGameBtn.js");
/* harmony import */ var _modules_resetBank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/resetBank */ "./src/js/modules/resetBank.js");
/* harmony import */ var _modules_saveGameBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/saveGameBtn */ "./src/js/modules/saveGameBtn.js");
/* harmony import */ var _modules_continueGameBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/continueGameBtn */ "./src/js/modules/continueGameBtn.js");
/* harmony import */ var _modules_takeBetBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/takeBetBtn */ "./src/js/modules/takeBetBtn.js");
/* harmony import */ var _modules_playOnBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/playOnBtn */ "./src/js/modules/playOnBtn.js");
/* harmony import */ var _modules_surrenderBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/surrenderBtn */ "./src/js/modules/surrenderBtn.js");
/* harmony import */ var _modules_doubleBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/doubleBtn */ "./src/js/modules/doubleBtn.js");
/* harmony import */ var _modules_splitBtn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/splitBtn */ "./src/js/modules/splitBtn.js");
/* harmony import */ var _modules_holdSplitBtn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/holdSplitBtn */ "./src/js/modules/holdSplitBtn.js");
















window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_modules_newGame__WEBPACK_IMPORTED_MODULE_3__["newGame"])('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand', '.popup__winner', '.popup__reward');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["modal"])('.popup', '.popup__close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["modal"])('.bet', '.bet__close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["modal"])('.black-jack', '.black-jack__close');
  Object(_modules_range__WEBPACK_IMPORTED_MODULE_1__["range"])('.bet__input', '.bet__your-bet');
  Object(_modules_resetBank__WEBPACK_IMPORTED_MODULE_7__["resetBank"])('.bet__reset', '.bet__bank');
  Object(_modules_addBet__WEBPACK_IMPORTED_MODULE_2__["addBet"])('.bet__make-bet', '.bet__input', '.bet__bank', '.nav__new-game', '.bet', '.game', '.btns', '.btns__add-card', '.btns__hold', '.btns__surrender', '.btns__split', '.split-btns', '.game__second-hand', '.bet__checkbox', '.bet__deck-count');
  Object(_modules_addCardBtn__WEBPACK_IMPORTED_MODULE_4__["addCardBtn"])('.btns__your-score', '.game__your-hand', '.btns__hold', '.btns__add-card', '.btns__double');
  Object(_modules_holdBtn__WEBPACK_IMPORTED_MODULE_5__["holdBtn"])('.btns__dealer-score', '.btns__your-score', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.btns__add-card', '.popup', '.btns__hold', '.btns__surrender', '.btns__double', '.btns__split'); // Split btns

  Object(_modules_addCardBtn__WEBPACK_IMPORTED_MODULE_4__["addCardBtn"])('.btns__your-score', '.game__your-hand', '.hold-1', '.add-card-1', '.btns__double', true);
  Object(_modules_addCardBtn__WEBPACK_IMPORTED_MODULE_4__["addCardBtn"])('.btns__your-score-2', '.game__your-hand-2', '.hold-2', '.add-card-2', '.btns__double', true);
  Object(_modules_holdSplitBtn__WEBPACK_IMPORTED_MODULE_15__["holdSplitBtn"])('.btns__dealer-score', '.btns__your-score', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.add-card-1', '.popup', '.hold-1', '.btns__surrender', '.btns__double');
  Object(_modules_holdSplitBtn__WEBPACK_IMPORTED_MODULE_15__["holdSplitBtn"])('.btns__dealer-score', '.btns__your-score-2', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.add-card-2', '.popup', '.hold-2', '.btns__surrender', '.btns__double');
  Object(_modules_surrenderBtn__WEBPACK_IMPORTED_MODULE_12__["surrenderBtn"])('.btns__surrender', '.popup__reward', '.popup__winner', '.popup', '.btns__add-card', '.btns__hold', '.nav__new-game', '.btns__double');
  Object(_modules_doubleBtn__WEBPACK_IMPORTED_MODULE_13__["doubleBtn"])('.btns__double', '.btns__add-card', '.btns__hold');
  Object(_modules_splitBtn__WEBPACK_IMPORTED_MODULE_14__["splitBtn"])('.btns__split', '.btns__double', '.btns__surrender', '.btns__add-card', '.btns__hold', '.add-card-1', '.hold-1', '.add-card-2', '.hold-2', '.split-btns', '.game__your-hand', '.game__your-hand-2', '.game__second-hand');
  Object(_modules_newGameBtn__WEBPACK_IMPORTED_MODULE_6__["newGameBtn"])('.nav__new-game');
  Object(_modules_saveGameBtn__WEBPACK_IMPORTED_MODULE_8__["saveGameBtn"])('.nav__save');
  Object(_modules_continueGameBtn__WEBPACK_IMPORTED_MODULE_9__["continueGameBtn"])('.nav__continue', '.game__dealer-hand', '.game__your-hand');
  Object(_modules_takeBetBtn__WEBPACK_IMPORTED_MODULE_10__["takeBetBtn"])('.black-jack__take-bet', '.nav__new-game', '.popup__winner', '.popup', '.black-jack', '.btns__add-card', '.btns__hold', '.popup__reward', '.btns__surrender');
  Object(_modules_playOnBtn__WEBPACK_IMPORTED_MODULE_11__["playOnBtn"])('.black-jack__play-on', '.black-jack', '.btns__hold');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map