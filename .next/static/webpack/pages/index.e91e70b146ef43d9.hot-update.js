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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! iron-session/next */ \"./node_modules/iron-session/next/dist/index.mjs\");\n/* harmony import */ var lib_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/session */ \"./lib/session.js\");\n/* harmony import */ var lib_arangoDb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/arangoDb */ \"./lib/arangoDb.js\");\n/* harmony import */ var lib_listFunct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/listFunct */ \"./lib/listFunct.js\");\n/* harmony import */ var lib_listFunct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lib_listFunct__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var components_form_FormLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/form/FormLogin */ \"./components/form/FormLogin.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// export const getServerSideProps = withIronSessionSsr(async function ({req, res, query}) {\n//   var user = await req.session.user;\n//   if (!user || !user.access_token) {\n//     return retObject({isLogin: false})\n//   }\n//   const validationToken = await checkerToken( user )\n//   if (validationToken.error) {\n//     await req.session.destroy();\n//     return redirect(\"/administration\")\n//   }\n//   if ( validationToken.status === \"refresh\" ) {\n//     user = { isLoggedIn: true, access_token: validationToken.access_token, refresh_token: validationToken.refresh_token };\n//     req.session.user = user;\n//     await req.session.save();\n//   }\n//   const uid = JSON.parse(atob(user.access_token.split('.')[1]));\n//   const checkUids = await checkUid(uid.user_id);\n//   if (checkUids.length < 1 || checkUids[0].blocked || checkUids[0].group !== \"admin\") {\n//     return redirect(\"/\")\n//   }\n//   return retObject({\n//     isLogin: true,\n//     fullName: checkUids[0].fullname\n//   })\n// },sessionOptions);\nvar Administration = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    {\n    /* Default */ }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        router.prefetch(\"/config/dashboard\");\n    }, []);\n    {\n    /* Default */ }\n    var logout = function() {\n        var _ref = _asyncToGenerator(C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var body, lg;\n            return C_Users_ghean_OneDrive_Documents_GitHub_DashboardSKI_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            uri: \"bo/logout\"\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 4:\n                        lg = _ctx.sent;\n                        router.push(\"/administration\");\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        } else {\n                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                        }\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen relative bg-white flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen relative flex flex-row justify-center items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-100 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-96 h-auto relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-full h-32 relative select-none \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: [\n                                            \"Hi \",\n                                            props.fullName,\n                                            \",\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-full relative flex justify-between items-center gap-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/config/dashboard\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    className: \"w-full h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                                    children: \"Dashboard\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                onClick: function() {\n                                                    return logout();\n                                                },\n                                                className: \"w-full h-auto bg-red-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                                children: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghean\\\\OneDrive\\\\Documents\\\\GitHub\\\\DashboardSKI\\\\pages\\\\index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(Administration, \"x0GdF0o/1fUwvzT6pNnakk7aPA0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Administration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Administration);\nvar _c;\n$RefreshReg$(_c, \"Administration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsU0FBUzs7NENBQUMsS0FBRzs0Q0FBQ3BCLEtBQUssQ0FBQ3NCLFFBQVE7NENBQUMsR0FBQzs7Ozs7OzZDQUFJO2tEQUMvQyw4REFBQ0gsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGdFQUFnRTs7MERBQzdFLDhEQUFDaEMsa0RBQUk7Z0RBQUNtQyxJQUFJLEVBQUMsbUJBQW1COzBEQUM1Qiw0RUFBQ0MsUUFBTTtvREFBQ0osU0FBUyxFQUFDLHVGQUF1Rjs4REFBQyxXQUUxRzs7Ozs7eURBQVM7Ozs7O3FEQUNKOzBEQUNQLDhEQUFDSSxRQUFNO2dEQUNMQyxPQUFPLEVBQUU7MkRBQU1sQixNQUFNLEVBQUU7aURBQUE7Z0RBQ3ZCYSxTQUFTLEVBQUMsc0ZBQXNGOzBEQUNqRyxRQUVEOzs7OztxREFBUzs7Ozs7OzZDQUNMOzs7Ozs7cUNBQ0Y7Ozs7O2lDQUNGOzs7Ozs2QkFrQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBL0ZLckIsY0FBYzs7UUFDSFosa0RBQVM7OztBQURwQlksS0FBQUEsY0FBYztBQWdHcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmZXRjaEpzb24sIHsgRmV0Y2hFcnJvciB9IGZyb20gXCJsaWIvZmV0Y2hKc29uXCI7XHJcblxyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvZ2xvYmFsXCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbk9wdGlvbnMgfSBmcm9tIFwibGliL3Nlc3Npb25cIjtcclxuXHJcbmltcG9ydCB7IGNoZWNrVWlkIH0gZnJvbSBcImxpYi9hcmFuZ29EYlwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgcmV0T2JqZWN0LCBjaGVja2VyVG9rZW4gfSBmcm9tIFwibGliL2xpc3RGdW5jdFwiO1xyXG5cclxuaW1wb3J0IEZvcm1Mb2dpbiBmcm9tIFwiY29tcG9uZW50cy9mb3JtL0Zvcm1Mb2dpblwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe3JlcSwgcmVzLCBxdWVyeX0pIHtcclxuXHJcbi8vICAgdmFyIHVzZXIgPSBhd2FpdCByZXEuc2Vzc2lvbi51c2VyO1xyXG4vLyAgIGlmICghdXNlciB8fCAhdXNlci5hY2Nlc3NfdG9rZW4pIHtcclxuLy8gICAgIHJldHVybiByZXRPYmplY3Qoe2lzTG9naW46IGZhbHNlfSlcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IHZhbGlkYXRpb25Ub2tlbiA9IGF3YWl0IGNoZWNrZXJUb2tlbiggdXNlciApXHJcbi8vICAgaWYgKHZhbGlkYXRpb25Ub2tlbi5lcnJvcikge1xyXG4vLyAgICAgYXdhaXQgcmVxLnNlc3Npb24uZGVzdHJveSgpO1xyXG4vLyAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluaXN0cmF0aW9uXCIpXHJcbi8vICAgfVxyXG5cclxuLy8gICBpZiAoIHZhbGlkYXRpb25Ub2tlbi5zdGF0dXMgPT09IFwicmVmcmVzaFwiICkge1xyXG4vLyAgICAgdXNlciA9IHsgaXNMb2dnZWRJbjogdHJ1ZSwgYWNjZXNzX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4uYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4ucmVmcmVzaF90b2tlbiB9O1xyXG4vLyAgICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbi8vICAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4vLyAgIGNvbnN0IGNoZWNrVWlkcyA9IGF3YWl0IGNoZWNrVWlkKHVpZC51c2VyX2lkKTtcclxuXHJcbi8vICAgaWYgKGNoZWNrVWlkcy5sZW5ndGggPCAxIHx8IGNoZWNrVWlkc1swXS5ibG9ja2VkIHx8IGNoZWNrVWlkc1swXS5ncm91cCAhPT0gXCJhZG1pblwiKSB7XHJcbi8vICAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpXHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gcmV0T2JqZWN0KHtcclxuLy8gICAgIGlzTG9naW46IHRydWUsXHJcbi8vICAgICBmdWxsTmFtZTogY2hlY2tVaWRzWzBdLmZ1bGxuYW1lXHJcbi8vICAgfSlcclxuXHJcbi8vIH0sc2Vzc2lvbk9wdGlvbnMpO1xyXG5cclxuY29uc3QgQWRtaW5pc3RyYXRpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB7XHJcbiAgICAvKiBEZWZhdWx0ICovXHJcbiAgfVxyXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgIHJvdXRlci5wcmVmZXRjaChcIi9jb25maWcvZGFzaGJvYXJkXCIpO1xyXG4gIH0sIFtdKTtcclxuICB7XHJcbiAgICAvKiBEZWZhdWx0ICovXHJcbiAgfVxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIHVyaTogXCJiby9sb2dvdXRcIixcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBsZyA9IGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcHJvdC9wb3N0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2FkbWluaXN0cmF0aW9uXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gcmVsYXRpdmUgYmctd2hpdGUgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW5cIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuIHJlbGF0aXZlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWZ1bGxcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBoLWF1dG8gcmVsYXRpdmVcIj5cclxuICAgICAgICAgIHsvKiB7cHJvcHMuaXNMb2dpbiA/ICggKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIHJlbGF0aXZlIHNlbGVjdC1ub25lIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC0zIGJhY2tkcm9wLWJsdXIgYmctd2hpdGUvMzAgcm91bmRlZC1tZCBib3JkZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkhpIHtwcm9wcy5mdWxsTmFtZX0sPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29uZmlnL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctYmx1ZS01MCBweS0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlci0yIGJvcmRlci13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLXJlZC01MCBweS0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlci0yIGJvcmRlci13aGl0ZSBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qICkgOiAoICovfVxyXG4gICAgICAgICAgey8qIDxGb3JtTG9naW5cclxuICAgICAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgICAgIGdsb2JhbEFjdD17Z2xvYmFsQWN0fVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2godHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZS5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUuY3VycmVudFRhcmdldC5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHVyaTogXCJsb2dpbl9vZmZpY2VcIixcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wb3N0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY29uZmlnL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5pc3RyYXRpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiZmV0Y2hKc29uIiwiRmV0Y2hFcnJvciIsIkdsb2JhbENvbnRleHQiLCJ3aXRoSXJvblNlc3Npb25Tc3IiLCJzZXNzaW9uT3B0aW9ucyIsImNoZWNrVWlkIiwicmVkaXJlY3QiLCJyZXRPYmplY3QiLCJjaGVja2VyVG9rZW4iLCJGb3JtTG9naW4iLCJBZG1pbmlzdHJhdGlvbiIsInByb3BzIiwicm91dGVyIiwiZ2xvYmFsQ3R4IiwiZ2xvYmFsQWN0Iiwic2V0SXNGZXRjaCIsInNldEVycm9yTXNnIiwicHJlZmV0Y2giLCJsb2dvdXQiLCJib2R5IiwibGciLCJ1cmkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImZ1bGxOYW1lIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});