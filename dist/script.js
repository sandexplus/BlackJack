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

/***/ "./src/js/modules/addCard.js":
/*!***********************************!*\
  !*** ./src/js/modules/addCard.js ***!
  \***********************************/
/*! exports provided: addCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
function addCard(deck, hand) {
  hand.push(deck[0]);
  deck.shift();
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
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shuffle */ "./src/js/modules/shuffle.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCard */ "./src/js/modules/addCard.js");



function newRound(deck, yourHand, dealerHand) {
  var yourHandOutput = document.querySelector('.game__your-hand'),
      dealerHandOutput = document.querySelector('.game__dealer-hand');
  deck = Object(_shuffle__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(deck);
  console.log(deck);
  Object(_addCard__WEBPACK_IMPORTED_MODULE_1__["addCard"])(deck, yourHand);
  Object(_addCard__WEBPACK_IMPORTED_MODULE_1__["addCard"])(deck, yourHand);
  Object(_addCard__WEBPACK_IMPORTED_MODULE_1__["addCard"])(deck, dealerHand);
  Object(_addCard__WEBPACK_IMPORTED_MODULE_1__["addCard"])(deck, dealerHand);
  yourHandOutput.textContent = yourHand;
  dealerHandOutput.textContent = dealerHand;
  console.log('deck: ' + deck);
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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addCard */ "./src/js/modules/addCard.js");
/* harmony import */ var _modules_newRound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/newRound */ "./src/js/modules/newRound.js");


window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var yourHandOutput = document.querySelector('.game__your-hand'),
      dealerHandOutput = document.querySelector('.game__dealer-hand');
  var deck = ['2-s', '3-s', '4-s', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s', '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-h', '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c', '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'];
  var yourHand = [],
      dealerHand = [],
      yourScore = 0,
      dealerScore = 0;
  Object(_modules_newRound__WEBPACK_IMPORTED_MODULE_1__["newRound"])(deck, yourHand, dealerHand);
  var addCardBtn = document.querySelector('.game__add-card');
  addCardBtn.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_modules_addCard__WEBPACK_IMPORTED_MODULE_0__["addCard"])(deck, yourHand);
    yourHandOutput.textContent = yourHand;
    dealerHandOutput.textContent = dealerHand;
    console.log('deck: ' + deck);
  });
  var holdBtn = document.querySelector('.game__hold-card');
  holdBtn.addEventListener('click', function (e) {
    e.preventDefault();

    while (dealerScore < 17) {
      Object(_modules_addCard__WEBPACK_IMPORTED_MODULE_0__["addCard"])(deck, dealerHand);
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map