/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	file1 = __webpack_require__(1);
	file2 = __webpack_require__(2);

	document.write("It works.");
	document.write(React.createElement(
	  Nav,
	  { color: 'blue' },
	  React.createElement(
	    Profile,
	    null,
	    'click'
	  )
	));
	document.write(file1);
	document.write(file2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "something";

	// nodes = [{"data":{"id":"0"}},{"data":{"id":"1"}}]
	// edges = [{"data":{"id":"10","source":"1","target":"0"}}]

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "something";

	// nodes = [{"data":{"id":"0"}},{"data":{"id":"1"}}]
	// edges = [{"data":{"id":"10","source":"1","target":"0"}}]

/***/ }
/******/ ]);