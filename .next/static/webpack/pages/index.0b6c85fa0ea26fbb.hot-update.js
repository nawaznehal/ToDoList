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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToDoList */ \"./components/ToDoList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomePage = ()=>{\n    _s();\n    const [toDoItems, setToDoItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    // Fetch to-do items on page load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchToDoItems = {\n                \"HomePage.useEffect.fetchToDoItems\": async ()=>{\n                    try {\n                        const res = await fetch('/api/todos');\n                        const data = await res.json();\n                        setToDoItems(data);\n                    } catch (error) {\n                        console.error('Error fetching to-do items:', error);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchToDoItems\"];\n            fetchToDoItems();\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Filter to-do items based on search term\n    const filteredToDos = toDoItems.filter((item)=>item.title.toLowerCase().includes(searchTerm.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"To-Do List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search to-dos\",\n                value: searchTerm,\n                onChange: (e)=>setSearchTerm(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading to-do list...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                toDoItems: filteredToDos\n            }, void 0, false, {\n                fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\DEV\\\\NEWWWWWWWWWWW\\\\ToDoList-Next.js\\\\To Do List\\\\pages\\\\index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"nUqWzEKvUsMfoGF9zNVrxcNklVU=\");\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQVE5QyxNQUFNSSxXQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFhLEVBQUU7SUFDekQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUU3QyxpQ0FBaUM7SUFDakNDLGdEQUFTQTs4QkFBQztZQUNSLE1BQU1TO3FEQUFpQjtvQkFDckIsSUFBSTt3QkFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU07d0JBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTt3QkFDM0JULGFBQWFRO29CQUNmLEVBQUUsT0FBT0UsT0FBTzt3QkFDZEMsUUFBUUQsS0FBSyxDQUFDLCtCQUErQkE7b0JBQy9DLFNBQVU7d0JBQ1JSLFdBQVc7b0JBQ2I7Z0JBQ0Y7O1lBQ0FHO1FBQ0Y7NkJBQUcsRUFBRTtJQUVMLDBDQUEwQztJQUMxQyxNQUFNTyxnQkFBZ0JiLFVBQVVjLE1BQU0sQ0FBQyxDQUFDQyxPQUN0Q0EsS0FBS0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsV0FBV2EsV0FBVztJQUcxRCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT3BCO2dCQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsY0FBY3FCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O1lBRzlDdEIsd0JBQ0MsOERBQUNpQjswQkFBSTs7Ozs7MENBRUwsOERBQUNyQiw0REFBUUE7Z0JBQUNFLFdBQVdhOzs7Ozs7Ozs7Ozs7QUFJN0I7R0E1Q01kO0tBQUFBO0FBOENOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcREVWXFxORVdXV1dXV1dXV1dXXFxUb0RvTGlzdC1OZXh0LmpzXFxUbyBEbyBMaXN0XFxwYWdlc1xcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9Eb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub0RvTGlzdCc7XHJcblxyXG50eXBlIFRvRG9JdGVtID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvRG9JdGVtcywgc2V0VG9Eb0l0ZW1zXSA9IHVzZVN0YXRlPFRvRG9JdGVtW10+KFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIEZldGNoIHRvLWRvIGl0ZW1zIG9uIHBhZ2UgbG9hZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRvRG9JdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldFRvRG9JdGVtcyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0by1kbyBpdGVtczonLCBlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFRvRG9JdGVtcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRmlsdGVyIHRvLWRvIGl0ZW1zIGJhc2VkIG9uIHNlYXJjaCB0ZXJtXHJcbiAgY29uc3QgZmlsdGVyZWRUb0RvcyA9IHRvRG9JdGVtcy5maWx0ZXIoKGl0ZW0pID0+XHJcbiAgICBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VG8tRG8gTGlzdDwvaDE+XHJcblxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdG8tZG9zXCJcclxuICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nIHRvLWRvIGxpc3QuLi48L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8VG9Eb0xpc3QgdG9Eb0l0ZW1zPXtmaWx0ZXJlZFRvRG9zfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvRG9MaXN0IiwiSG9tZVBhZ2UiLCJ0b0RvSXRlbXMiLCJzZXRUb0RvSXRlbXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmV0Y2hUb0RvSXRlbXMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZmlsdGVyZWRUb0RvcyIsImZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});