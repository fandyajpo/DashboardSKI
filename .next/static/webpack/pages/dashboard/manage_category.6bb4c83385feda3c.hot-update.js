"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/manage_category",{

/***/ "./components/modal/Product.js":
/*!*************************************!*\
  !*** ./components/modal/Product.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_form_FormProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form/FormProduct */ \"./components/form/FormProduct.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProductModal = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white w-full h-full rounded-md shadow-md shadow-red-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-red-500 h-12 w-full rounded-md flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-white font-bold\",\n                    children: \"Create new product\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\modal\\\\Product.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\modal\\\\Product.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                // Default Form\n                globalCtx: globalCtx,\n                globalAct: globalAct,\n                onSubmit: function() {\n                    var _handleSubmit = _asyncToGenerator(C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                        var body;\n                        return C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    e.preventDefault();\n                                    globalAct.setIsFetch(true);\n                                    body = {\n                                        username: e.currentTarget.username.value,\n                                        password: e.currentTarget.password.value,\n                                        uri: \"login_office\"\n                                    };\n                                    _ctx.prev = 3;\n                                    _ctx.next = 6;\n                                    return fetchJson(\"/api/post\", {\n                                        method: \"POST\",\n                                        headers: {\n                                            \"Content-Type\": \"application/json\"\n                                        },\n                                        body: JSON.stringify(body)\n                                    });\n                                case 6:\n                                    router.replace(\"/config/dashboard\");\n                                    _ctx.next = 12;\n                                    break;\n                                case 9:\n                                    _ctx.prev = 9;\n                                    _ctx.t0 = _ctx[\"catch\"](3);\n                                    if (_instanceof(_ctx.t0, FetchError)) {\n                                        globalAct.setErrorMsg(_ctx.t0.data.message);\n                                    } else {\n                                        globalAct.setErrorMsg(\"An unexpected error happened\");\n                                    }\n                                case 12:\n                                    globalAct.setIsFetch(false);\n                                case 13:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, null, [\n                            [\n                                3,\n                                9\n                            ]\n                        ]);\n                    }));\n                    function handleSubmit(e) {\n                        return _handleSubmit.apply(this, arguments);\n                    }\n                    return handleSubmit;\n                }()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\modal\\\\Product.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\modal\\\\Product.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductModal, \"hTwxGC+rohkk3S1bj+YCQ6cmvHY=\");\n_c = ProductModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductModal);\nvar _c;\n$RefreshReg$(_c, \"ProductModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFsL1Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNuQjtBQUNZOztBQUMvQyxJQUFNRyxZQUFZLEdBQUcsV0FBTTs7SUFDekIsSUFBaUNGLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDQyx5REFBYSxDQUFDLEVBQWxERSxTQUFTLEdBQWdCSCxHQUF5QixDQUFsREcsU0FBUyxFQUFFQyxTQUFTLEdBQUtKLEdBQXlCLENBQXZDSSxTQUFTO0lBQzVCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw0REFBNEQ7OzBCQUN6RSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9FQUFvRTswQkFDakYsNEVBQUNDLEdBQUM7b0JBQUNELFNBQVMsRUFBQyxzQkFBc0I7OEJBQUMsb0JBQWtCOzs7Ozt5QkFBSTs7Ozs7cUJBQ3REOzBCQUNOLDhEQUFDUCxtRUFBVztnQkFDVixlQUFlO2dCQUNmSyxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCRCxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCSyxRQUFRO3dCQUFpQkMsYUFBWSxHQUEzQixtTUFBNEJDLENBQUMsRUFBRTs0QkFJakNDLElBQUk7Ozs7b0NBSFZELENBQUMsQ0FBQ0UsY0FBYyxFQUFFLENBQUM7b0NBQ25CVCxTQUFTLENBQUNVLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FFckJGLElBQUksR0FBRzt3Q0FDWEcsUUFBUSxFQUFFSixDQUFDLENBQUNLLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLO3dDQUN4Q0MsUUFBUSxFQUFFUCxDQUFDLENBQUNLLGFBQWEsQ0FBQ0UsUUFBUSxDQUFDRCxLQUFLO3dDQUN4Q0UsR0FBRyxFQUFFLGNBQWM7cUNBQ3BCLENBQUM7OzsyQ0FHTUMsU0FBUyxDQUFDLFdBQVcsRUFBRTt3Q0FDM0JDLE1BQU0sRUFBRSxNQUFNO3dDQUNkQyxPQUFPLEVBQUU7NENBQUUsY0FBYyxFQUFFLGtCQUFrQjt5Q0FBRTt3Q0FDL0NWLElBQUksRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUNaLElBQUksQ0FBQztxQ0FDM0IsQ0FBQzs7b0NBQ0ZhLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7OztvQ0FFcEMsSUFBSUMsV0FBMkIsVUFBVkMsVUFBVSxHQUFFO3dDQUMvQnhCLFNBQVMsQ0FBQ3lCLFdBQVcsQ0FBQ0YsUUFBTUcsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztxQ0FDM0MsTUFBTTt3Q0FDTDNCLFNBQVMsQ0FBQ3lCLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3FDQUN2RDs7b0NBR0h6QixTQUFTLENBQUNVLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7cUJBQzdCOzZCQTFCd0JKLFlBQVksQ0FBQ0MsQ0FBQzsrQkFBZEQsYUFBWTs7MkJBQVpBLFlBQVk7Ozs7OztxQkEyQnJDOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0F6Q0tQLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTJDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFsL1Byb2R1Y3QuanM/ODhjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybVByb2R1Y3QgZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuY29uc3QgUHJvZHVjdE1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQWN0LCBnbG9iYWxDdHggfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGgtZnVsbCByb3VuZGVkLW1kIHNoYWRvdy1tZCBzaGFkb3ctcmVkLTUwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaC0xMiB3LWZ1bGwgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+Q3JlYXRlIG5ldyBwcm9kdWN0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvcm1Qcm9kdWN0XHJcbiAgICAgICAgLy8gRGVmYXVsdCBGb3JtXHJcbiAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgZ2xvYmFsQWN0PXtnbG9iYWxBY3R9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZS5jdXJyZW50VGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICB1cmk6IFwibG9naW5fb2ZmaWNlXCIsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcG9zdFwiLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9jb25maWcvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJGb3JtUHJvZHVjdCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiUHJvZHVjdE1vZGFsIiwiZ2xvYmFsQWN0IiwiZ2xvYmFsQ3R4IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsImJvZHkiLCJwcmV2ZW50RGVmYXVsdCIsInNldElzRmV0Y2giLCJ1c2VybmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwidXJpIiwiZmV0Y2hKc29uIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiZXJyb3IiLCJGZXRjaEVycm9yIiwic2V0RXJyb3JNc2ciLCJkYXRhIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/modal/Product.js\n");

/***/ })

});