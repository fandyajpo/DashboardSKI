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

/***/ "./components/table/Category.js":
/*!**************************************!*\
  !*** ./components/table/Category.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\nvar OrderTable = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    var data = [\n        {\n            name: \"goblok\"\n        },\n        {\n            name: \"goblok\"\n        },\n        {\n            name: \"goblok\"\n        }, \n    ];\n    var columns = [\n        {\n            name: \"Category Name\",\n            grow: 30,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs\",\n                        children: a.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: \"Action\",\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs\",\n                        children: \"anjing\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative border shadow rounded\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 font-bold text-sm\",\n                children: \"Category List\"\n            }, void 0, false, void 0, void 0),\n            columns: columns,\n            data: data,\n            responsive: true,\n            highlightOnHover: true,\n            pagination: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\table\\\\Category.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_c = OrderTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderTable);\nvar _c;\n$RefreshReg$(_c, \"OrderTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL0NhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7QUFBbUQ7QUFFbkQsSUFBTUMsVUFBVSxHQUFHLGdCQUFRO1FBQVAsc0ZBQUU7O0lBQ3BCLElBQU1DLElBQUksR0FBRztRQUNYO1lBQ0VDLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNFQSxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDRUEsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0lBQ0QsSUFBTUMsT0FBTyxHQUFHO1FBQ2Q7WUFDRUQsSUFBSSxFQUFFLGVBQWU7WUFDckJFLElBQUksRUFBRSxFQUFFO1lBQ1JDLElBQUksRUFBRSxTQUFDQyxDQUFDO3FDQUNOLDhEQUFDQyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzhCQUNyRCw0RUFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLFNBQVM7a0NBQUVGLENBQUMsQ0FBQ0osSUFBSTs7Ozs7OEJBQUs7Ozs7OzBCQUMvQjthQUNQO1NBQ0Y7UUFDRDtZQUNFQSxJQUFJLEVBQUUsUUFBUTtZQUNkRSxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs4QkFDckQsNEVBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyxTQUFTO2tDQUFDLFFBQU07Ozs7OzhCQUFJOzs7OzswQkFDN0I7YUFDUDtTQUNGO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0QsS0FBRztRQUFDQyxTQUFTLEVBQUMsOENBQThDO2tCQUMzRCw0RUFBQ1Qsa0VBQVM7WUFDUlcsS0FBSyxnQkFBRSw4REFBQ0QsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLGdDQUFnQzswQkFBQyxlQUFhOzZDQUFJO1lBQ3RFTCxPQUFPLEVBQUVBLE9BQU87WUFDaEJGLElBQUksRUFBRUEsSUFBSTtZQUNWVSxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QkMsVUFBVTs7Ozs7aUJBQ1Y7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0FBN0NLYixLQUFBQSxVQUFVO0FBK0NoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibGUvQ2F0ZWdvcnkuanM/ZmQ2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgT3JkZXJUYWJsZSA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZ29ibG9rXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImdvYmxva1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJnb2Jsb2tcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhdGVnb3J5IE5hbWVcIixcclxuICAgICAgZ3JvdzogMzAsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTEgZmxleCBmbGV4LXJvdyBnYXAtMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPnthLm5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBY3Rpb25cIixcclxuICAgICAgZ3JvdzogMixcclxuICAgICAgY2VsbDogKGEpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMSBmbGV4IGZsZXgtcm93IGdhcC0xXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+YW5qaW5nPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJlbGF0aXZlIGJvcmRlciBzaGFkb3cgcm91bmRlZFwiPlxyXG4gICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgdGl0bGU9ezxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGQgdGV4dC1zbVwiPkNhdGVnb3J5IExpc3Q8L3A+fVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICByZXNwb25zaXZlPXt0cnVlfVxyXG4gICAgICAgIGhpZ2hsaWdodE9uSG92ZXI9e3RydWV9XHJcbiAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyVGFibGU7XHJcbiJdLCJuYW1lcyI6WyJEYXRhVGFibGUiLCJPcmRlclRhYmxlIiwiZGF0YSIsIm5hbWUiLCJjb2x1bW5zIiwiZ3JvdyIsImNlbGwiLCJhIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInRpdGxlIiwicmVzcG9uc2l2ZSIsImhpZ2hsaWdodE9uSG92ZXIiLCJwYWdpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/table/Category.js\n");

/***/ })

});