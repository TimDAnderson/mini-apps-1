/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/components/component1.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/component1.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar myFunc = function myFunc() {\n  console.log('hello');\n};\n\nconsole.log('this is the component page');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myFunc);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/component1.jsx?");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_component1_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component1.jsx */ \"./client/src/components/component1.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      black: 1,\n      red: 2,\n      redsTurn: true,\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 2, 0, 0]]\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"hasVerticalWinner\",\n    value: function hasVerticalWinner() {\n      var board = this.state.board;\n\n      for (var i = 0; i < board[0].length; i++) {\n        var columnArray = [];\n\n        for (var j = 0; j < board.length; j++) {\n          columnArray.push(board[j][i]);\n        } //check columnArray for winner - this will keep changing\n\n\n        bCount = 0;\n        rCount = 0;\n\n        for (var k = 0; k < columnArray.length; k++) {\n          if (columnArray[k] === 1) {\n            bCount++;\n            rCount = 0;\n          } else if (columnArray[k] === 2) {\n            bCount = 0;\n            rCount++;\n          }\n\n          if (bCount === 4) {\n            return 'black wins';\n          } else if (rCount === 4) {\n            return 'red wins';\n          }\n        }\n      }\n    }\n  }, {\n    key: \"hasHorizontalWinner\",\n    value: function hasHorizontalWinner() {\n      var board = this.state.board;\n\n      for (var i = 0; i < board.length; i++) {\n        bCount = 0;\n        rCount = 0;\n\n        for (var j = 0; j < board[i].length; j++) {\n          if (board[i[j]] === 1) {\n            bCount++;\n            rCount = 0;\n          } else if (board[i[j]] === 2) {\n            bCount = 0;\n            rCount++;\n          }\n\n          if (bCount === 4) {\n            return 'black wins';\n          } else if (rCount === 4) {\n            return 'red wins';\n          }\n        }\n      }\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      console.log('got a click');\n      console.log(event.target.id);\n      var index = Number(event.target.id[4]); //place the piece\n\n      var board = this.state.board;\n      console.log(this.state.redsTurn);\n\n      if (board[5][index] === 0) {\n        if (this.state.redsTurn) {\n          board[5][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[5][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      } else if (board[4][index] === 0) {\n        if (this.state.redsTurn) {\n          board[4][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[4][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      } else if (board[3][index] === 0) {\n        if (this.state.redsTurn) {\n          board[3][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[3][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      } else if (board[2][index] === 0) {\n        if (this.state.redsTurn) {\n          board[2][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[2][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      } else if (board[1][index] === 0) {\n        if (this.state.redsTurn) {\n          board[1][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[1][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      } else if (board[0][index] === 0) {\n        if (this.state.redsTurn) {\n          board[0][index] = 2;\n          this.setState({\n            redsTurn: false,\n            board: board\n          });\n        } else {\n          board[0][index] = 1;\n          this.setState({\n            redsTurn: true,\n            board: board\n          });\n        }\n      }\n\n      console.log(this.state.board);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('component did mount');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"table\", {\n        className: \"game-board\"\n      }, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot0\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot1\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot2\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot3\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot4\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot5\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\"), /*#__PURE__*/React.createElement(\"th\", {\n        id: \"slot6\",\n        className: \"dropSlot\",\n        onClick: this.handleClick.bind(this)\n      }, \"*\")), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][0])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][1])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][2])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][3])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][4])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][5])\n      }, \"\\xA0\\xA0\\xA0\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[0][6])\n      }, \"\\xA0\\xA0\\xA0\\xA0\")), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][0])\n      }, \"\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][1])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][2])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][3])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][4])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][5])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[1][6])\n      })), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][0])\n      }, \"\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][1])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][2])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][3])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][4])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][5])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[2][6])\n      })), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][0])\n      }, \"\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][1])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][2])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][3])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][4])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][5])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[3][6])\n      })), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][0])\n      }, \"\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][1])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][2])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][3])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][4])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][5])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[4][6])\n      })), /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][0])\n      }, \"\\xA0\"), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][1])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][2])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][3])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][4])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][5])\n      }), /*#__PURE__*/React.createElement(\"td\", {\n        className: \"class\".concat(this.state.board[5][6])\n      })));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://challenge_4/./client/src/index.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/index.jsx");
/******/ 	
/******/ })()
;