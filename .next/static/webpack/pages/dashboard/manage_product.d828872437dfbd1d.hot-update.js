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

/***/ "./components/layout/Modal.js":
/*!************************************!*\
  !*** ./components/layout/Modal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_modal_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/Product */ \"./components/modal/Product.js\");\nvar _this = undefined;\n\n\nvar Modal = function(props) {\n    var modal = props.globalCtx.modal;\n    var setModal = props.globalAct.setModal;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setModal(\"\");\n                },\n                className: \"bg-black/60 fixed w-full h-screen z-40 \".concat(modal !== \"\" ? \"\" : \"hidden\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(modal === \"addProduct\" ? \"translate-x-0\" : \"-translate-x-full\", \" z-50 fixed duration-700 w-2/4 h-screen p-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_modal_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    globalCtx: props.globalCtx,\n                    globalAct: props.globalAct\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(modal === \"addProduct\" ? \"translate-x-0\" : \"-translate-x-full\", \" z-50 fixed duration-700 w-2/4 h-screen p-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_modal_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    globalCtx: props.globalCtx,\n                    globalAct: props.globalAct\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\components\\\\layout\\\\Modal.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQW9EO0FBRXBELElBQU1DLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDdkIsSUFBTSxLQUFPLEdBQUtBLEtBQUssQ0FBQ0UsU0FBUyxDQUF6QkQsS0FBSztJQUNiLElBQU0sUUFBVSxHQUFLRCxLQUFLLENBQUNJLFNBQVMsQ0FBNUJELFFBQVE7SUFFaEIscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEVBQUU7OzBCQUNmLDhEQUFDRCxLQUFHO2dCQUNGRSxPQUFPLEVBQUU7MkJBQU1KLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQUE7Z0JBQzNCRyxTQUFTLEVBQUUseUNBQXdDLENBRWxELE9BRENMLEtBQUssS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FDNUI7Ozs7O3FCQUNGOzBCQUNGLDhEQUFDSSxLQUFHO2dCQUNGQyxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQTJDLENBRDFDTCxLQUFLLEtBQUssWUFBWSxHQUFHLGVBQWUsR0FBRyxtQkFBbUIsRUFDL0QsNkNBQTJDLENBQUM7MEJBRTdDLDRFQUFDSCxnRUFBWTtvQkFBQ0ksU0FBUyxFQUFFRixLQUFLLENBQUNFLFNBQVM7b0JBQUVFLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ3BFOzBCQUNOLDhEQUFDQyxLQUFHO2dCQUNGQyxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQTJDLENBRDFDTCxLQUFLLEtBQUssWUFBWSxHQUFHLGVBQWUsR0FBRyxtQkFBbUIsRUFDL0QsNkNBQTJDLENBQUM7MEJBRTdDLDRFQUFDSCxnRUFBWTtvQkFBQ0ksU0FBUyxFQUFFRixLQUFLLENBQUNFLFNBQVM7b0JBQUVFLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ3BFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUE1QktMLEtBQUFBLEtBQUs7QUE4QlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9Nb2RhbC5qcz9lYTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvUHJvZHVjdFwiO1xyXG5cclxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG1vZGFsIH0gPSBwcm9wcy5nbG9iYWxDdHg7XHJcbiAgY29uc3QgeyBzZXRNb2RhbCB9ID0gcHJvcHMuZ2xvYmFsQWN0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKFwiXCIpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGJnLWJsYWNrLzYwIGZpeGVkIHctZnVsbCBoLXNjcmVlbiB6LTQwICR7XHJcbiAgICAgICAgICBtb2RhbCAhPT0gXCJcIiA/IFwiXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgbW9kYWwgPT09IFwiYWRkUHJvZHVjdFwiID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcIi10cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICB9IHotNTAgZml4ZWQgZHVyYXRpb24tNzAwIHctMi80IGgtc2NyZWVuIHAtNGB9XHJcbiAgICAgID5cclxuICAgICAgICA8UHJvZHVjdE1vZGFsIGdsb2JhbEN0eD17cHJvcHMuZ2xvYmFsQ3R4fSBnbG9iYWxBY3Q9e3Byb3BzLmdsb2JhbEFjdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgbW9kYWwgPT09IFwiYWRkUHJvZHVjdFwiID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcIi10cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICB9IHotNTAgZml4ZWQgZHVyYXRpb24tNzAwIHctMi80IGgtc2NyZWVuIHAtNGB9XHJcbiAgICAgID5cclxuICAgICAgICA8UHJvZHVjdE1vZGFsIGdsb2JhbEN0eD17cHJvcHMuZ2xvYmFsQ3R4fSBnbG9iYWxBY3Q9e3Byb3BzLmdsb2JhbEFjdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJQcm9kdWN0TW9kYWwiLCJNb2RhbCIsInByb3BzIiwibW9kYWwiLCJnbG9iYWxDdHgiLCJzZXRNb2RhbCIsImdsb2JhbEFjdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Modal.js\n");

/***/ })

});