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

/***/ "./components/form/FormCategory.js":
/*!*****************************************!*\
  !*** ./components/form/FormCategory.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FormProduct(param) {\n    var myRef = param.myRef, globalCtx = param.globalCtx, globalAct = param.globalAct, onSubmit = param.onSubmit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full select-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border border-gray-300\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-auto relative mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-bold text-red-600 mb-2\",\n                                    children: \"Category Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                    lineNumber: 10,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"category\",\n                                    type: \"text\",\n                                    className: \"placeholder-gray-300 bg-gray-500/20 form-input mt-1 rounded-md border border-gray-300 w-full focus:ring-2 duration-500 focus:ring-blue-500\",\n                                    placeholder: \"Provide category name\",\n                                    disabled: globalCtx.isFetch ? \"disabled\" : \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-12 flex justify-between gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-full flex items-center text-xs text-red-400\",\n                                    children: globalCtx.errorMsg\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-auto h-full flex items-center gap-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            disabled: globalCtx.isFetch ? \"disabled\" : \"\",\n                                            className: \"px-8 h-10 bg-red-500/30 text-red-500 border-2 border-red-300 font-semibold rounded overflow-hidden\",\n                                            children: \"Cancel\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            disabled: globalCtx.isFetch ? \"disabled\" : \"\",\n                                            className: \"px-8 h-10 bg-green-500/30 text-green-500 border-2 border-green-300 font-semibold rounded overflow-hidden\",\n                                            children: \"Create\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\form\\\\FormCategory.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n};\n_c = FormProduct;\nvar _c;\n$RefreshReg$(_c, \"FormProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0vRm9ybUNhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFbEIsU0FBU0MsV0FBVyxDQUFDLEtBQXlDLEVBQUU7UUFBekNDLEtBQUssR0FBUCxLQUF5QyxDQUF2Q0EsS0FBSyxFQUFFQyxTQUFTLEdBQWxCLEtBQXlDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBN0IsS0FBeUMsQ0FBckJBLFNBQVMsRUFBRUMsUUFBUSxHQUF2QyxLQUF5QyxDQUFWQSxRQUFRO0lBQ3pFLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlO2tCQUM1Qiw0RUFBQ0MsTUFBSTtZQUFDSCxRQUFRLEVBQUVBLFFBQVE7c0JBQ3RCLDRFQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzBCQUN4Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLCtFQUErRTs7c0NBQzVGLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzs4Q0FDMUMsOERBQUNFLEdBQUM7b0NBQUNGLFNBQVMsRUFBQyxxQ0FBcUM7OENBQUMsZUFFbkQ7Ozs7O3dDQUFJOzhDQUNKLDhEQUFDRyxPQUFLO29DQUNKQyxJQUFJLEVBQUMsVUFBVTtvQ0FDZkMsSUFBSSxFQUFDLE1BQU07b0NBQ1hMLFNBQVMsRUFBQyw0SUFBNEk7b0NBQ3RKTSxXQUFXLEVBQUMsdUJBQXVCO29DQUNuQ0MsUUFBUSxFQUFFWCxTQUFTLENBQUNZLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTs7Ozs7d0NBQzdDOzs7Ozs7Z0NBQ0U7c0NBQ04sOERBQUNULEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7OzhDQUNyRCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHNEQUFzRDs4Q0FDbEVKLFNBQVMsQ0FBQ2EsUUFBUTs7Ozs7d0NBQ2Y7OENBQ04sOERBQUNWLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7O3NEQUN0RCw4REFBQ1UsUUFBTTs0Q0FDTEgsUUFBUSxFQUFFWCxTQUFTLENBQUNZLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTs0Q0FDN0NSLFNBQVMsRUFBQyxvR0FBb0c7c0RBQy9HLFFBRUQ7Ozs7O2dEQUFTO3NEQUNULDhEQUFDVSxRQUFNOzRDQUNMSCxRQUFRLEVBQUVYLFNBQVMsQ0FBQ1ksT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFOzRDQUM3Q1IsU0FBUyxFQUFDLDBHQUEwRztzREFDckgsUUFFRDs7Ozs7Z0RBQVM7Ozs7Ozt3Q0FDTDs7Ozs7O2dDQUNGOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzs7OztnQkFDRDs7Ozs7WUFDSCxDQUNOO0NBQ0g7QUExQ3VCTixLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9Gb3JtQ2F0ZWdvcnkuanM/MGM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb2R1Y3QoeyBteVJlZiwgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QsIG9uU3VibWl0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHNlbGVjdC1ub25lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC0zIGJhY2tkcm9wLWJsdXIgYmctd2hpdGUvMzAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByZWxhdGl2ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1yZWQtNjAwIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIENhdGVnb3J5IE5hbWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXItZ3JheS0zMDAgYmctZ3JheS01MDAvMjAgZm9ybS1pbnB1dCBtdC0xIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB3LWZ1bGwgZm9jdXM6cmluZy0yIGR1cmF0aW9uLTUwMCBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvdmlkZSBjYXRlZ29yeSBuYW1lXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtnbG9iYWxDdHguaXNGZXRjaCA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB0ZXh0LXJlZC00MDBcIj5cclxuICAgICAgICAgICAgICAgIHtnbG9iYWxDdHguZXJyb3JNc2d9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2dsb2JhbEN0eC5pc0ZldGNoID8gXCJkaXNhYmxlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBoLTEwIGJnLXJlZC01MDAvMzAgdGV4dC1yZWQtNTAwIGJvcmRlci0yIGJvcmRlci1yZWQtMzAwIGZvbnQtc2VtaWJvbGQgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Z2xvYmFsQ3R4LmlzRmV0Y2ggPyBcImRpc2FibGVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IGgtMTAgYmctZ3JlZW4tNTAwLzMwIHRleHQtZ3JlZW4tNTAwIGJvcmRlci0yIGJvcmRlci1ncmVlbi0zMDAgZm9udC1zZW1pYm9sZCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybVByb2R1Y3QiLCJteVJlZiIsImdsb2JhbEN0eCIsImdsb2JhbEFjdCIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsInAiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsImlzRmV0Y2giLCJlcnJvck1zZyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form/FormCategory.js\n");

/***/ })

});