"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/manage_product",{

/***/ "./components/table/Product.js":
/*!*************************************!*\
  !*** ./components/table/Product.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\nvar OrderTable = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    var data = [\n        {\n            name: \"Coffe Stone\",\n            category: \"Coffee\"\n        },\n        {\n            name: \"Coffe Stone\",\n            category: \"Coffee\"\n        },\n        {\n            name: \"Coffe Stone\",\n            category: \"Coffee\"\n        }, \n    ];\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            grow: 5,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            grow: 4,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1 items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center font-bold text-red-500\",\n                children: \"Action\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this),\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-x-2 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return alert(\"delete\");\n                            },\n                            className: \"bg-orange-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-orange-500/50 shadow-md flex gap-x-2 text-xs text-orange-500 hover:w-24 duration-150 hover:before:content-['View']\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-orange-500\",\n                                viewBox: \"0 0 20 20\",\n                                fill: \"currentColor\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M10 12a2 2 0 100-4 2 2 0 000 4z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return alert(\"delete\");\n                            },\n                            className: \"bg-blue-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-blue-500/50 shadow-md flex gap-x-2 text-xs text-blue-500 hover:w-24 duration-150 hover:before:content-['Edit']\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-blue-500\",\n                                viewBox: \"0 0 20 20\",\n                                fill: \"currentColor\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return alert(\"delete\");\n                            },\n                            className: \"bg-red-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-red-500/50 shadow-md flex gap-x-2 text-xs text-red-500 hover:w-24 duration-150 hover:before:content-['Remove']\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-red-500\",\n                                viewBox: \"0 0 20 20\",\n                                fill: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fillRule: \"evenodd\",\n                                    d: \"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z\",\n                                    clipRule: \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"shadow-md border-2 rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                // title={\n                //   <p className=\"text-red-500 font-bold text-sm\">Category List</p>\n                // }\n                columns: columns,\n                data: data,\n                responsive: true,\n                highlightOnHover: true,\n                pagination: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Product.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, _this);\n};\n_c = OrderTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderTable);\nvar _c;\n$RefreshReg$(_c, \"OrderTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7OztBQUFtRDtBQUVuRCxJQUFNQyxVQUFVLEdBQUcsZ0JBQVE7UUFBUCxzRkFBRTs7SUFDcEIsSUFBTUMsSUFBSSxHQUFHO1FBQ1g7WUFDRUMsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFFBQVEsRUFBRSxRQUFRO1NBQ25CO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFFBQVEsRUFBRSxRQUFRO1NBQ25CO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFFBQVEsRUFBRSxRQUFRO1NBQ25CO0tBQ0Y7SUFDRCxJQUFNQyxPQUFPLEdBQUc7UUFDZDtZQUNFRixJQUFJLGdCQUFFLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLFNBQU87Ozs7O3FCQUFNO1lBQzNEQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs4QkFDckQsNEVBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUVHLENBQUMsQ0FBQ1AsSUFBSTs7Ozs7OEJBQUs7Ozs7OzBCQUN6QzthQUNQO1NBQ0Y7UUFDRDtZQUNFQSxJQUFJLGdCQUFFLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLFVBQVE7Ozs7O3FCQUFNO1lBQzVEQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFEQUFxRDs4QkFDbEUsNEVBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUVHLENBQUMsQ0FBQ04sUUFBUTs7Ozs7OEJBQUs7Ozs7OzBCQUM3QzthQUNQO1NBQ0Y7UUFDRDtZQUNFRCxJQUFJLGdCQUNGLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzBCQUFDLFFBQU07Ozs7O3FCQUFNO1lBRXpFQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDBEQUEwRDs7c0NBQ3ZFLDhEQUFDSyxRQUFNOzRCQUNMQyxPQUFPLEVBQUU7dUNBQU1DLEtBQUssQ0FBQyxRQUFRLENBQUM7NkJBQUE7NEJBQzlCUCxTQUFTLEVBQ1AsNkxBQTZMO3NDQUcvTCw0RUFBQ1EsS0FBRztnQ0FDRkMsS0FBSyxFQUFDLDRCQUE0QjtnQ0FDbENULFNBQVMsRUFBQyx5QkFBeUI7Z0NBQ25DVSxPQUFPLEVBQUMsV0FBVztnQ0FDbkJDLElBQUksRUFBQyxjQUFjOztrREFFbkIsOERBQUNDLE1BQUk7d0NBQUNDLENBQUMsRUFBQyxpQ0FBaUM7Ozs7OzhDQUFHO2tEQUM1Qyw4REFBQ0QsTUFBSTt3Q0FDSEUsUUFBUSxFQUFDLFNBQVM7d0NBQ2xCRCxDQUFDLEVBQUMseUlBQXlJO3dDQUMzSUUsUUFBUSxFQUFDLFNBQVM7Ozs7OzhDQUNsQjs7Ozs7O3NDQUNFOzs7OztrQ0FDQztzQ0FDVCw4REFBQ1YsUUFBTTs0QkFDTEMsT0FBTyxFQUFFO3VDQUFNQyxLQUFLLENBQUMsUUFBUSxDQUFDOzZCQUFBOzRCQUM5QlAsU0FBUyxFQUNQLHVMQUF1TDtzQ0FHekwsNEVBQUNRLEtBQUc7Z0NBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7Z0NBQ2xDVCxTQUFTLEVBQUMsdUJBQXVCO2dDQUNqQ1UsT0FBTyxFQUFDLFdBQVc7Z0NBQ25CQyxJQUFJLEVBQUMsY0FBYzs7a0RBRW5CLDhEQUFDQyxNQUFJO3dDQUFDQyxDQUFDLEVBQUMsK0VBQStFOzs7Ozs4Q0FBRztrREFDMUYsOERBQUNELE1BQUk7d0NBQ0hFLFFBQVEsRUFBQyxTQUFTO3dDQUNsQkQsQ0FBQyxFQUFDLHdGQUF3Rjt3Q0FDMUZFLFFBQVEsRUFBQyxTQUFTOzs7Ozs4Q0FDbEI7Ozs7OztzQ0FDRTs7Ozs7a0NBQ0M7c0NBQ1QsOERBQUNWLFFBQU07NEJBQ0xDLE9BQU8sRUFBRTt1Q0FBTUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs2QkFBQTs0QkFDOUJQLFNBQVMsRUFDUCxzTEFBc0w7c0NBR3hMLDRFQUFDUSxLQUFHO2dDQUNGQyxLQUFLLEVBQUMsNEJBQTRCO2dDQUNsQ1QsU0FBUyxFQUFDLHNCQUFzQjtnQ0FDaENVLE9BQU8sRUFBQyxXQUFXO2dDQUNuQkMsSUFBSSxFQUFDLGNBQWM7MENBRW5CLDRFQUFDQyxNQUFJO29DQUNIRSxRQUFRLEVBQUMsU0FBUztvQ0FDbEJELENBQUMsRUFBQyw2TUFBNk07b0NBQy9NRSxRQUFRLEVBQUMsU0FBUzs7Ozs7MENBQ2xCOzs7OztzQ0FDRTs7Ozs7a0NBQ0M7Ozs7OzswQkFDTDthQUNQO1NBQ0Y7S0FDRjtJQUVELHFCQUNFLDhEQUFDaEIsS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tCQUN0Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsK0JBQStCO3NCQUM1Qyw0RUFBQ1Asa0VBQVM7Z0JBQ1IsVUFBVTtnQkFDVixvRUFBb0U7Z0JBQ3BFLElBQUk7Z0JBQ0pLLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJILElBQUksRUFBRUEsSUFBSTtnQkFDVnFCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEJDLFVBQVU7Ozs7O3FCQUNWOzs7OztpQkFDRTs7Ozs7YUFDRixDQUNOO0NBQ0g7QUF6SEt4QixLQUFBQSxVQUFVO0FBMkhoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibGUvUHJvZHVjdC5qcz81ZDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBPcmRlclRhYmxlID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDb2ZmZSBTdG9uZVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJDb2ZmZWVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ29mZmUgU3RvbmVcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiQ29mZmVlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNvZmZlIFN0b25lXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcIkNvZmZlZVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcmVkLTUwMFwiPlByb2R1Y3Q8L2Rpdj4sXHJcbiAgICAgIGdyb3c6IDUsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTEgZmxleCBmbGV4LXJvdyBnYXAtMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj57YS5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcmVkLTUwMFwiPkNhdGVnb3J5PC9kaXY+LFxyXG4gICAgICBncm93OiA0LFxyXG4gICAgICBjZWxsOiAoYSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBweS0xIGZsZXggZmxleC1yb3cgZ2FwLTEgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZFwiPnthLmNhdGVnb3J5fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+QWN0aW9uPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICAgIGdyb3c6IDIsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcImRlbGV0ZVwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBcImJnLW9yYW5nZS01MDAvMzAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1tZCBob3ZlcjpiZy1vcmFuZ2UtNTAwLzUwIHNoYWRvdy1tZCBmbGV4IGdhcC14LTIgdGV4dC14cyB0ZXh0LW9yYW5nZS01MDAgaG92ZXI6dy0yNCBkdXJhdGlvbi0xNTAgaG92ZXI6YmVmb3JlOmNvbnRlbnQtWydWaWV3J11cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtb3JhbmdlLTUwMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTS40NTggMTBDMS43MzIgNS45NDMgNS41MjIgMyAxMCAzczguMjY4IDIuOTQzIDkuNTQyIDdjLTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgN1MxLjczMiAxNC4wNTcuNDU4IDEwek0xNCAxMGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoXCJkZWxldGVcIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJiZy1ibHVlLTUwMC8zMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNTAwLzUwIHNoYWRvdy1tZCBmbGV4IGdhcC14LTIgdGV4dC14cyB0ZXh0LWJsdWUtNTAwIGhvdmVyOnctMjQgZHVyYXRpb24tMTUwIGhvdmVyOmJlZm9yZTpjb250ZW50LVsnRWRpdCddXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuNDE0IDIuNTg2YTIgMiAwIDAwLTIuODI4IDBMNyAxMC4xNzJWMTNoMi44MjhsNy41ODYtNy41ODZhMiAyIDAgMDAwLTIuODI4elwiIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIgNmEyIDIgMCAwMTItMmg0YTEgMSAwIDAxMCAySDR2MTBoMTB2LTRhMSAxIDAgMTEyIDB2NGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIlxyXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcImRlbGV0ZVwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBcImJnLXJlZC01MDAvMzAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1tZCBob3ZlcjpiZy1yZWQtNTAwLzUwIHNoYWRvdy1tZCBmbGV4IGdhcC14LTIgdGV4dC14cyB0ZXh0LXJlZC01MDAgaG92ZXI6dy0yNCBkdXJhdGlvbi0xNTAgaG92ZXI6YmVmb3JlOmNvbnRlbnQtWydSZW1vdmUnXVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk05IDJhMSAxIDAgMDAtLjg5NC41NTNMNy4zODIgNEg0YTEgMSAwIDAwMCAydjEwYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNmExIDEgMCAxMDAtMmgtMy4zODJsLS43MjQtMS40NDdBMSAxIDAgMDAxMSAySDl6TTcgOGExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMFY4em01LTFhMSAxIDAgMDAtMSAxdjZhMSAxIDAgMTAyIDBWOGExIDEgMCAwMC0xLTF6XCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByZWxhdGl2ZSBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgYm9yZGVyLTIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIC8vIHRpdGxlPXtcclxuICAgICAgICAgIC8vICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZCB0ZXh0LXNtXCI+Q2F0ZWdvcnkgTGlzdDwvcD5cclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgcmVzcG9uc2l2ZT17dHJ1ZX1cclxuICAgICAgICAgIGhpZ2hsaWdodE9uSG92ZXI9e3RydWV9XHJcbiAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJUYWJsZTtcclxuIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsIk9yZGVyVGFibGUiLCJkYXRhIiwibmFtZSIsImNhdGVnb3J5IiwiY29sdW1ucyIsImRpdiIsImNsYXNzTmFtZSIsImdyb3ciLCJjZWxsIiwiYSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiYWxlcnQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImQiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwicmVzcG9uc2l2ZSIsImhpZ2hsaWdodE9uSG92ZXIiLCJwYWdpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/table/Product.js\n");

/***/ })

});