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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToDoList */ \"./components/ToDoList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomePage = ()=>{\n    _s();\n    const [toDoItems, setToDoItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch to-do items on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchToDoItems = {\n                \"HomePage.useEffect.fetchToDoItems\": async ()=>{\n                    try {\n                        const res = await fetch('/api/todos'); // API to fetch to-do items\n                        const data = await res.json();\n                        setToDoItems(data);\n                    } catch (error) {\n                        console.error('Error fetching to-do items:', error);\n                    } finally{\n                        // Add artificial delay before setting loading to false\n                        setTimeout({\n                            \"HomePage.useEffect.fetchToDoItems\": ()=>{\n                                setLoading(false);\n                            }\n                        }[\"HomePage.useEffect.fetchToDoItems\"], 500); // 500ms delay to show loading message\n                    }\n                }\n            }[\"HomePage.useEffect.fetchToDoItems\"];\n            fetchToDoItems();\n        }\n    }[\"HomePage.useEffect\"], []); // Empty dependency array to run only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"To-Do List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading to-do list...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined) // Show this while loading\n             : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                toDoItems: toDoItems\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"gc99XZk183JhsKmssi5dlevgukg=\");\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQVM5QyxNQUFNSSxXQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFhLEVBQUU7SUFDekQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLGlDQUFpQztJQUNqQ0MsZ0RBQVNBOzhCQUFDO1lBQ1IsTUFBTU87cURBQWlCO29CQUNyQixJQUFJO3dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxlQUFlLDJCQUEyQjt3QkFDbEUsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO3dCQUMzQlAsYUFBYU07b0JBQ2YsRUFBRSxPQUFPRSxPQUFPO3dCQUNkQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtvQkFDL0MsU0FBVTt3QkFDUix1REFBdUQ7d0JBQ3ZERTtpRUFBVztnQ0FDVFIsV0FBVzs0QkFDYjtnRUFBRyxNQUFNLHNDQUFzQztvQkFDakQ7Z0JBQ0Y7O1lBRUFDO1FBQ0Y7NkJBQUcsRUFBRSxHQUFHLDBDQUEwQztJQUVsRCxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7O1lBRUhYLHdCQUNDLDhEQUFDVTswQkFBSTs7Ozs7MEJBQTRCLDBCQUEwQjs2QkFFM0QsOERBQUNkLDREQUFRQTtnQkFBQ0UsV0FBV0E7Ozs7Ozs7Ozs7OztBQUk3QjtHQW5DTUQ7S0FBQUE7QUFxQ04saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxERVZcXE5FV1dXV1dXV1dXV1dcXFRvRG9MaXN0LU5leHQuanNcXFRvIERvIExpc3RcXHBhZ2VzXFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb0RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvRG9MaXN0JzsgXHJcblxyXG4vLyBEZWZpbmUgdGhlIHR5cGVzIGZvciB0by1kbyBpdGVtc1xyXG50eXBlIFRvRG9JdGVtID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvRG9JdGVtcywgc2V0VG9Eb0l0ZW1zXSA9IHVzZVN0YXRlPFRvRG9JdGVtW10+KFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gRmV0Y2ggdG8tZG8gaXRlbXMgb24gcGFnZSBsb2FkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVG9Eb0l0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9zJyk7IC8vIEFQSSB0byBmZXRjaCB0by1kbyBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldFRvRG9JdGVtcyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0by1kbyBpdGVtczonLCBlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgLy8gQWRkIGFydGlmaWNpYWwgZGVsYXkgYmVmb3JlIHNldHRpbmcgbG9hZGluZyB0byBmYWxzZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSwgNTAwKTsgLy8gNTAwbXMgZGVsYXkgdG8gc2hvdyBsb2FkaW5nIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRvRG9JdGVtcygpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBydW4gb25seSBvbmNlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VG8tRG8gTGlzdDwvaDE+XHJcblxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8ZGl2PkxvYWRpbmcgdG8tZG8gbGlzdC4uLjwvZGl2PiAvLyBTaG93IHRoaXMgd2hpbGUgbG9hZGluZ1xyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxUb0RvTGlzdCB0b0RvSXRlbXM9e3RvRG9JdGVtc30gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb0RvTGlzdCIsIkhvbWVQYWdlIiwidG9Eb0l0ZW1zIiwic2V0VG9Eb0l0ZW1zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFRvRG9JdGVtcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiaDEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});