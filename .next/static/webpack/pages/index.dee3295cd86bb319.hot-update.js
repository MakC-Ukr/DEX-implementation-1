"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                inverted: true,\n                secondary: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                        name: \"home\",\n                        active: props.activeItem === \"home\",\n                        onClick: props.onClick\n                    }, void 0, false, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/Layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                        name: \"messages\",\n                        active: props.activeItem === \"messages\",\n                        onClick: props.onClick\n                    }, void 0, false, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/Layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                        name: \"friends\",\n                        active: props.activeItem === \"friends\",\n                        onClick: props.onClick\n                    }, void 0, false, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/Layout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/Layout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            props.children,\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/Layout.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUdDOztBQUcxQiw2QkFBZUUsb0NBQUFBLEtBQUssRUFBSSxDQUFDO0lBQ3ZCLE1BQU07Z0ZBRUhDLENBQUc7O3dGQUNERixtREFBSTtnQkFBQ0csUUFBUTtnQkFBQ0MsU0FBUzs7Z0dBQ3JCSix3REFBUzt3QkFDUk0sSUFBSSxFQUFDLENBQU07d0JBQ1hDLE1BQU0sRUFBRU4sS0FBSyxDQUFDTyxVQUFVLEtBQUssQ0FBTTt3QkFDbkNDLE9BQU8sRUFBRVIsS0FBSyxDQUFDUSxPQUFPOzs7Ozs7Z0dBRXZCVCx3REFBUzt3QkFDUk0sSUFBSSxFQUFDLENBQVU7d0JBQ2ZDLE1BQU0sRUFBRU4sS0FBSyxDQUFDTyxVQUFVLEtBQUssQ0FBVTt3QkFDdkNDLE9BQU8sRUFBRVIsS0FBSyxDQUFDUSxPQUFPOzs7Ozs7Z0dBRXZCVCx3REFBUzt3QkFDUk0sSUFBSSxFQUFDLENBQVM7d0JBQ2RDLE1BQU0sRUFBRU4sS0FBSyxDQUFDTyxVQUFVLEtBQUssQ0FBUzt3QkFDdENDLE9BQU8sRUFBRVIsS0FBSyxDQUFDUSxPQUFPOzs7Ozs7Ozs7Ozs7WUFHekJSLEtBQUssQ0FBQ1MsUUFBUTtZQUFDLENBQ2xCOzs7Ozs7O0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE1lbnUsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgcmV0dXJuXG4gIChcbiAgICA8ZGl2PlxuICAgICAgPE1lbnUgaW52ZXJ0ZWQgc2Vjb25kYXJ5PlxuICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgbmFtZT1cImhvbWVcIlxuICAgICAgICAgIGFjdGl2ZT17cHJvcHMuYWN0aXZlSXRlbSA9PT0gXCJob21lXCJ9XG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlc1wiXG4gICAgICAgICAgYWN0aXZlPXtwcm9wcy5hY3RpdmVJdGVtID09PSBcIm1lc3NhZ2VzXCJ9XG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG5hbWU9XCJmcmllbmRzXCJcbiAgICAgICAgICBhY3RpdmU9e3Byb3BzLmFjdGl2ZUl0ZW0gPT09IFwiZnJpZW5kc1wifVxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L01lbnU+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59O1xuICAgIDwvZGl2Pik7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwicHJvcHMiLCJkaXYiLCJpbnZlcnRlZCIsInNlY29uZGFyeSIsIkl0ZW0iLCJuYW1lIiwiYWN0aXZlIiwiYWN0aXZlSXRlbSIsIm9uQ2xpY2siLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar UniswapIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(UniswapIndex, Component1);\n    var _super = _createSuper(UniswapIndex);\n    function UniswapIndex() {\n        _classCallCheck(this, UniswapIndex);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            activeItem: 'home'\n        });\n        _defineProperty(_assertThisInitialized(_this), \"handleItemClick\", function(e, param) {\n            var name = param.name;\n            return _this.setState({\n                activeItem: name\n            });\n        });\n        return _this;\n    }\n    _createClass(UniswapIndex, [\n        {\n            key: \"render\",\n            value: function render() {\n                var activeItem = this.state.activeItem;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                            text: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Menu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Menu.Item, {\n                                        name: \"Swap\",\n                                        active: activeItem === 'Swap',\n                                        onClick: this.handleItemClick\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Menu.Item, {\n                                        name: \"Liquidity\",\n                                        active: activeItem === 'Liquidity',\n                                        onClick: this.handleItemClick\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        fluid: true,\n                                        compact: true,\n                                        basic: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            href: \"https://rinkeby.etherscan.io/address/0xF56efC2E2eD9770482c690377c8F4E137Df268DA\",\n                                            children: \"Contract: 0xF56efC2E2eD9770482c690377c8F4E137Df268DA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            textAlign: \"center\",\n                            style: {\n                                height: \"100vh\"\n                            },\n                            verticalAlign: \"middle\",\n                            color: \"pink\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                                style: {\n                                    maxWidth: 450\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                size: \"large\",\n                                                icon: \"ethereum\",\n                                                placeholder: \"0.00\",\n                                                fluid: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                size: \"large\",\n                                                icon: \"wordpress\",\n                                                placeholder: \"0.00\",\n                                                fluid: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                color: \"pink\",\n                                                fluid: true,\n                                                size: \"large\",\n                                                children: \"Approve\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _addr;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.owner().call();\n                            case 2:\n                                _addr = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: _addr\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return UniswapIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniswapIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDOzs7O1dBVEcvQixZQUFZO0VBQVNmLDRDQUFTO0FBZ0VwQywrREFBZWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVuaXN3YXAgZnJvbSBcIi4uL2V0aGVyZXVtL3VuaXN3YXBcIjtcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRm9ybSxcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJbWFnZSxcbiAgLy8gTWVudSxcbiAgSW5wdXQsXG4gIEljb24sXG4gIE1lc3NhZ2UsXG4gIERpdmlkZXIsXG4gIFNlZ21lbnQsXG4gIENhcmQsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY2xhc3MgVW5pc3dhcEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdob21lJyB9O1xuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG5cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IF9hZGRyID0gYXdhaXQgVW5pc3dhcC5tZXRob2RzLm93bmVyKCkuY2FsbCgpO1xuICAgIHJldHVybiB7IGFkZHJlc3M6IF9hZGRyIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8bGluayBhc3luYyByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIi8+ICovfVxuICAgICAgICA8Q29udGFpbmVyIHRleHQ+XG4gICAgICAgICAgPE1lbnUgPlxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIG5hbWU9J1N3YXAnXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdTd2FwJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgbmFtZT0nTGlxdWlkaXR5J1xuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnTGlxdWlkaXR5J31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxCdXR0b24gZmx1aWQgY29tcGFjdCBiYXNpYyAgPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLzB4RjU2ZWZDMkUyZUQ5NzcwNDgyYzY5MDM3N2M4RjRFMTM3RGYyNjhEQVwiPlxuICAgICAgICAgICAgICAgIENvbnRyYWN0OiAweEY1NmVmQzJFMmVEOTc3MDQ4MmM2OTAzNzdjOEY0RTEzN0RmMjY4REFcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXG4gICAgICAgICAgY29sb3I9XCJwaW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgICAgICAgPFNlZ21lbnQgPlxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgaWNvbj1cImV0aGVyZXVtXCIgcGxhY2Vob2xkZXI9XCIwLjAwXCIgZmx1aWQgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImxhcmdlXCIgaWNvbj1cIndvcmRwcmVzc1wiIHBsYWNlaG9sZGVyPVwiMC4wMFwiIGZsdWlkIC8+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicGlua1wiIGZsdWlkIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgQXBwcm92ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuaXN3YXBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlVuaXN3YXAiLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiSW5wdXQiLCJJY29uIiwiTWVzc2FnZSIsIkRpdmlkZXIiLCJTZWdtZW50IiwiQ2FyZCIsIkxheW91dCIsIlVuaXN3YXBJbmRleCIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJkaXYiLCJ0ZXh0IiwiTWVudSIsIkl0ZW0iLCJhY3RpdmUiLCJvbkNsaWNrIiwiZmx1aWQiLCJjb21wYWN0IiwiYmFzaWMiLCJhIiwiaHJlZiIsInRleHRBbGlnbiIsInN0eWxlIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImNvbG9yIiwiQ29sdW1uIiwibWF4V2lkdGgiLCJzaXplIiwiaWNvbiIsInBsYWNlaG9sZGVyIiwiYnIiLCJnZXRJbml0aWFsUHJvcHMiLCJfYWRkciIsIm1ldGhvZHMiLCJvd25lciIsImNhbGwiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});