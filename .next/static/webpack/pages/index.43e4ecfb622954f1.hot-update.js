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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_SwapForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SwapForm */ \"./components/SwapForm.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar UniswapIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(UniswapIndex, Component1);\n    var _super = _createSuper(UniswapIndex);\n    function UniswapIndex(props) {\n        _classCallCheck(this, UniswapIndex);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"handleItemClick\", function(e, param) {\n            var name = param.name;\n            _this.setState({\n                activeItem: name\n            });\n            if (name !== 'Swap') {\n                _routes__WEBPACK_IMPORTED_MODULE_7__.Router.pushRoute(name);\n            } else {\n                _routes__WEBPACK_IMPORTED_MODULE_7__.Router.pushRoute('/');\n            }\n        });\n        _this.state = {\n            activeItem: \"home\",\n            tokenPrice: \"1\",\n            address: \"\"\n        };\n        return _this;\n    }\n    _createClass(UniswapIndex, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                this.setState({\n                                    tokenPrice: this.props.tokenPrice,\n                                    latestGasPrice: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.fromWei(this.props.latestGasPrice, \"gwei\")\n                                }); // sets the tokenPrice in state from this.props\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    act: this.state.activeItem,\n                    handleItemClick: this.handleItemClick,\n                    latestGasPrice: this.state.latestGasPrice,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                                async: true,\n                                rel: \"stylesheet\",\n                                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                textAlign: \"center\",\n                                style: {\n                                    height: \"70vh\"\n                                },\n                                verticalAlign: \"middle\",\n                                color: \"pink\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Column, {\n                                    style: {\n                                        maxWidth: 450\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SwapForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 10\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _addr, _tokenPrice, _latestGasPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.owner().call();\n                            case 2:\n                                _addr = _ctx.sent;\n                                _ctx.next = 5;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 5:\n                                _tokenPrice = _ctx.sent;\n                                _ctx.next = 8;\n                                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getGasPrice();\n                            case 8:\n                                _latestGasPrice = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: _addr,\n                                    tokenPrice: _tokenPrice,\n                                    latestGasPrice: _latestGasPrice\n                                });\n                            case 10:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return UniswapIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniswapIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVvQixLQUFLO29DQUNkckIsVUFBVSxFQUFFc0IsV0FBVztvQ0FDdkJuQixjQUFjLEVBQUVvQixlQUFlO2dDQUNqQyxDQUFDOzs7Ozs7Z0JBQ0gsQ0FBQzs7OztXQTFCR2hDLFlBQVk7RUFBU3BCLDRDQUFTO0FBa0VwQywrREFBZW9CLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVbmlzd2FwIGZyb20gXCIuLi9ldGhlcmV1bS91bmlzd2FwXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBTd2FwRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Td2FwRm9ybVwiO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEZvcm0sXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSW1hZ2UsXG4gIC8vIE1lbnUsXG4gIElucHV0LFxuICBJY29uLFxuICBNZXNzYWdlLFxuICBEaXZpZGVyLFxuICBUZXh0QXJlYSxcbiAgU2VnbWVudCxcbiAgQ2FyZCxcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jbGFzcyBVbmlzd2FwSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhY3RpdmVJdGVtOiBcImhvbWVcIiwgdG9rZW5QcmljZTogXCIxXCIsIGFkZHJlc3M6IFwiXCIgfTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuICAgIGlmKG5hbWUgIT09ICdTd2FwJylcbiAgICB7XG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgX2FkZHIgPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMub3duZXIoKS5jYWxsKCk7XG4gICAgY29uc3QgX3Rva2VuUHJpY2UgPSBhd2FpdCBVbmlzd2FwLm1ldGhvZHMudGVtcFRva2VuUHJpY2UoKS5jYWxsKCk7XG4gICAgY29uc3QgX2xhdGVzdEdhc1ByaWNlID0gYXdhaXQgd2ViMy5ldGguZ2V0R2FzUHJpY2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczogX2FkZHIsXG4gICAgICB0b2tlblByaWNlOiBfdG9rZW5QcmljZSxcbiAgICAgIGxhdGVzdEdhc1ByaWNlOiBfbGF0ZXN0R2FzUHJpY2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5QcmljZTogdGhpcy5wcm9wcy50b2tlblByaWNlLFxuICAgICAgbGF0ZXN0R2FzUHJpY2U6IHdlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLmxhdGVzdEdhc1ByaWNlLCBcImd3ZWlcIiksXG4gICAgfSk7IC8vIHNldHMgdGhlIHRva2VuUHJpY2UgaW4gc3RhdGUgZnJvbSB0aGlzLnByb3BzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dFxuICAgICAgICAgYWN0PXt0aGlzLnN0YXRlLmFjdGl2ZUl0ZW19XG4gICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgbGF0ZXN0R2FzUHJpY2U9e3RoaXMuc3RhdGUubGF0ZXN0R2FzUHJpY2V9XG4gICAgICAgPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNzB2aFwiIH19XG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcbiAgICAgICAgICAgIGNvbG9yPVwicGlua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IG1heFdpZHRoOiA0NTAgfX0+XG4gICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgIDxTd2FwRm9ybSAvPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbmlzd2FwSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVbmlzd2FwIiwid2ViMyIsIlN3YXBGb3JtIiwiTGluayIsIlJvdXRlciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJJbnB1dCIsIkljb24iLCJNZXNzYWdlIiwiRGl2aWRlciIsIlRleHRBcmVhIiwiU2VnbWVudCIsIkNhcmQiLCJMYXlvdXQiLCJVbmlzd2FwSW5kZXgiLCJwcm9wcyIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIiwicHVzaFJvdXRlIiwic3RhdGUiLCJ0b2tlblByaWNlIiwiYWRkcmVzcyIsImNvbXBvbmVudERpZE1vdW50IiwibGF0ZXN0R2FzUHJpY2UiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXIiLCJhY3QiLCJkaXYiLCJsaW5rIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwidGV4dEFsaWduIiwic3R5bGUiLCJoZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY29sb3IiLCJDb2x1bW4iLCJtYXhXaWR0aCIsImdldEluaXRpYWxQcm9wcyIsIl9hZGRyIiwiX3Rva2VuUHJpY2UiLCJfbGF0ZXN0R2FzUHJpY2UiLCJtZXRob2RzIiwib3duZXIiLCJjYWxsIiwidGVtcFRva2VuUHJpY2UiLCJldGgiLCJnZXRHYXNQcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});