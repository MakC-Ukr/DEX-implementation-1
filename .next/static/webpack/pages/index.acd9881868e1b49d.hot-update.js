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

/***/ "./components/SwapForm.js":
/*!********************************!*\
  !*** ./components/SwapForm.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/uniswap */ \"./ethereum/uniswap.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar SwapForm = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(SwapForm, _Component);\n    var _super = _createSuper(SwapForm);\n    function SwapForm() {\n        _classCallCheck(this, SwapForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), //   constructorconstructor(props) {\n        //     // this.onSwap = this.onSwap.bind(this);\n        //     this.handleInputchange = this.handleInputchange.bind(this);\n        //   }\n        \"state\", {\n            tokenA: \"0\",\n            tokenPrice: \"1\",\n            ethIsTokenA: true\n        });\n        _defineProperty(_assertThisInitialized(_this), \"handleInputchange\", function(event) {\n            _this.setState({\n                tokenA: event.target.value\n            });\n        });\n        return _this;\n    }\n    _createClass(SwapForm, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                this.setState({\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, this);\n                }).bind(this))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var self = this;\n                // used later in form, since scope for \"this\" gets changed.\n                // More on \"https://stackoverflow.com/questions/68550323/unhandled-rejection-typeerror-this-is-undefined-when-write-this-setstatedata\"\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                            async: true,\n                            rel: \"stylesheet\",\n                            href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                            onSubmit: function() {\n                                var _ref = _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                                    var accounts;\n                                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                event.preventDefault();\n                                                console.log(\"Onsubmit called\");\n                                                _ctx.prev = 2;\n                                                if (!self.state.ethIsTokenA) {\n                                                    _ctx.next = 8;\n                                                    break;\n                                                }\n                                                _ctx.next = 6;\n                                                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                                            case 6:\n                                                accounts = _ctx.sent;\n                                                _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.swapEthToToken().send({\n                                                    from: accounts[0],\n                                                    value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(self.state.tokenA, \"ether\")\n                                                });\n                                            case 8:\n                                                console.log(\"succesful\");\n                                                _ctx.next = 14;\n                                                break;\n                                            case 11:\n                                                _ctx.prev = 11;\n                                                _ctx.t0 = _ctx[\"catch\"](2);\n                                                console.log(_ctx.t0);\n                                            case 14:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee, null, [\n                                        [\n                                            2,\n                                            11\n                                        ]\n                                    ]);\n                                }));\n                                return function(event) {\n                                    return _ref.apply(this, arguments);\n                                };\n                            }(),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                    info: true,\n                                    children: \"Swapping Eth to Weenus\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                        size: \"large\",\n                                        icon: this.state.ethIsTokenA ? \"ethereum\" : \"wordpress\",\n                                        placeholder: \"0.00\",\n                                        fluid: true,\n                                        value: this.state.tokenA,\n                                        onChange: function(event) {\n                                            _this.handleInputchange(event);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: function(event) {\n                                        _this.setState({\n                                            ethIsTokenA: !_this.state.ethIsTokenA\n                                        });\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaArrowDown, {}, void 0, false, {\n                                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                        size: \"large\",\n                                        icon: !this.state.ethIsTokenA ? \"ethereum\" : \"wordpress\",\n                                        placeholder: \"0.00\",\n                                        fluid: true,\n                                        value: this.state.tokenA * this.state.tokenPrice\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"pink\",\n                                    fluid: true,\n                                    size: \"large\",\n                                    children: \"Swap\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maksimchowdhary/Desktop/Coding/Web3/solidity-with-examples/uniswap/components/SwapForm.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var _tokenPrice;\n                    return _Users_maksimchowdhary_Desktop_Coding_Web3_solidity_with_examples_uniswap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_uniswap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.tempTokenPrice().call();\n                            case 2:\n                                _tokenPrice = _ctx.sent;\n                                console.log(_tokenPrice);\n                                return _ctx.abrupt(\"return\", {\n                                    tokenPrice: _tokenPrice\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return SwapForm;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapForm);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7OztXQVpHWCxRQUFRO0VBQVNkLHdEQUFlO0FBa0d0QywrREFBZWMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcEZvcm0uanM/ZTRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVW5pc3dhcCBmcm9tIFwiLi4vZXRoZXJldW0vdW5pc3dhcFwiO1xuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBEaXZpZGVyLCBMYWJlbCwgSWNvbiwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgRmFBcnJvd0Rvd24sIEZhQmVlciwgRmFTaGllbGRBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cblxuY2xhc3MgU3dhcEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3RvcmNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgLy8gdGhpcy5vblN3YXAgPSB0aGlzLm9uU3dhcC5iaW5kKHRoaXMpO1xuLy8gICAgIHRoaXMuaGFuZGxlSW5wdXRjaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Y2hhbmdlLmJpbmQodGhpcyk7XG4vLyAgIH1cblxuICBzdGF0ZSA9IHsgdG9rZW5BOiBcIjBcIiwgdG9rZW5QcmljZTogXCIxXCIgLGV0aElzVG9rZW5BIDogdHJ1ZX07XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCBfdG9rZW5QcmljZSA9IGF3YWl0IFVuaXN3YXAubWV0aG9kcy50ZW1wVG9rZW5QcmljZSgpLmNhbGwoKTtcbiAgICBjb25zb2xlLmxvZyhfdG9rZW5QcmljZSk7XG4gICAgcmV0dXJuIHsgdG9rZW5QcmljZTogX3Rva2VuUHJpY2UgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IF90b2tlblByaWNlID0gYXdhaXQgVW5pc3dhcC5tZXRob2RzLnRlbXBUb2tlblByaWNlKCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKF90b2tlblByaWNlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9rZW5QcmljZTogX3Rva2VuUHJpY2UgfSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dGNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5BOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIC8vIHVzZWQgbGF0ZXIgaW4gZm9ybSwgc2luY2Ugc2NvcGUgZm9yIFwidGhpc1wiIGdldHMgY2hhbmdlZC5cbiAgICAvLyBNb3JlIG9uIFwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg1NTAzMjMvdW5oYW5kbGVkLXJlamVjdGlvbi10eXBlZXJyb3ItdGhpcy1pcy11bmRlZmluZWQtd2hlbi13cml0ZS10aGlzLXNldHN0YXRlZGF0YVwiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIvPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uc3VibWl0IGNhbGxlZFwiKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5zdGF0ZS50b2tlbkEpO1xuICAgICAgICAgICAgICBpZihzZWxmLnN0YXRlLmV0aElzVG9rZW5BKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgICAgIFVuaXN3YXAubWV0aG9kcy5zd2FwRXRoVG9Ub2tlbigpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaShzZWxmLnN0YXRlLnRva2VuQSwgXCJldGhlclwiKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNmdWxcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19PlxuXG4gICAgICAgICAgPE1lc3NhZ2UgaW5mbz5Td2FwcGluZyBFdGggdG8gV2VlbnVzPC9NZXNzYWdlPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGljb24gPSB7dGhpcy5zdGF0ZS5ldGhJc1Rva2VuQSA/IFwiZXRoZXJldW1cIiA6IFwid29yZHByZXNzXCJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VuQX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5wdXRjaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgey8qIDxTd2FwRm9ybUlucHV0IGV0aElzVG9rZW5BID0ge3RoaXMuc3RhdGUuZXRoSXNUb2tlbkF9IGhhbmRsZUlucENoID0ge3RoaXMuaGFuZGxlSW5wdXRjaGFuZ2V9Lz4gKi99XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPSB7KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V0aElzVG9rZW5BIDogIXRoaXMuc3RhdGUuZXRoSXNUb2tlbkF9KVxuICAgICAgICAgIH19PlxuICAgICAgICAgIDxoMj48RmFBcnJvd0Rvd24gLz48L2gyPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cblxuICAgICAgICAgIHsvKiA8U3dhcEZvcm1JbnB1dCBldGhJc1Rva2VuQSA9IHsgIXRoaXMuc3RhdGUuZXRoSXNUb2tlbkF9IGhhbmRsZUlucENoID0ge3RoaXMuaGFuZGxlSW5wdXRjaGFuZ2V9Lz4gKi99XG5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBpY29uID0geyEgdGhpcy5zdGF0ZS5ldGhJc1Rva2VuQSA/IFwiZXRoZXJldW1cIiA6IFwid29yZHByZXNzXCJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRva2VuQSAqIHRoaXMuc3RhdGUudG9rZW5QcmljZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInBpbmtcIiBmbHVpZCBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2FwRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVuaXN3YXAiLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkRpdmlkZXIiLCJMYWJlbCIsIkljb24iLCJTZWdtZW50IiwiRmFBcnJvd0Rvd24iLCJGYUJlZXIiLCJGYVNoaWVsZEFsdCIsIlN3YXBGb3JtIiwic3RhdGUiLCJ0b2tlbkEiLCJ0b2tlblByaWNlIiwiZXRoSXNUb2tlbkEiLCJoYW5kbGVJbnB1dGNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiX3Rva2VuUHJpY2UiLCJtZXRob2RzIiwidGVtcFRva2VuUHJpY2UiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInNlbGYiLCJkaXYiLCJsaW5rIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwib25TdWJtaXQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzd2FwRXRoVG9Ub2tlbiIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsImluZm8iLCJGaWVsZCIsInNpemUiLCJpY29uIiwicGxhY2Vob2xkZXIiLCJmbHVpZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJoMiIsImJyIiwiY29sb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapForm.js\n");

/***/ })

});