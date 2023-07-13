"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/PlaceSearch.tsx":
/*!*****************************!*\
  !*** ./app/PlaceSearch.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlaceSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-places-autocomplete */ \"(app-client)/./node_modules/use-places-autocomplete/dist/index.esm.js\");\n/* harmony import */ var _reach_combobox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/combobox */ \"(app-client)/./node_modules/@reach/combobox/dist/reach-combobox.mjs\");\n/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/combobox/styles.css */ \"(app-client)/./node_modules/@reach/combobox/styles.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlaceSearch(param) {\n    let { addPlace, setOffice, setOrigin } = param;\n    _s();\n    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const handleSelect = async (val)=>{\n        setValue(val, false);\n        clearSuggestions();\n        const result = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getGeocode)({\n            address: val\n        });\n        const { lat, lng } = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getLatLng)(result[0]);\n        addPlace({\n            lat,\n            lng\n        });\n        setOffice({\n            lat,\n            lng\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.Combobox, {\n                onSelect: handleSelect,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxInput, {\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value),\n                        disabled: !ready\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxPopover, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxList, {\n                            children: status === \"OK\" && data.map((param)=>/*#__PURE__*/ {\n                                let { place_id, description } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxOption, {\n                                    value: description\n                                }, place_id, false, {\n                                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.Combobox, {\n                onSelect: handleSelect,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxInput, {\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value),\n                        disabled: !ready\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxPopover, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxList, {\n                            children: status === \"OK\" && data.map((param)=>/*#__PURE__*/ {\n                                let { place_id, description } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxOption, {\n                                    value: description\n                                }, place_id, false, {\n                                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlaceSearch, \"aHvPrXWCTjZlo3qw+BDCI5tvZcc=\", false, function() {\n    return [\n        use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = PlaceSearch;\nvar _c;\n$RefreshReg$(_c, \"PlaceSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL1BsYWNlU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNGO0FBUTNEO0FBQ1c7QUFJdkIsU0FBU1EsWUFBWSxLQUFnQztRQUFoQyxFQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFDLEdBQWhDOztJQUVoQyxNQUFNLEVBQ0ZDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGFBQWEsRUFBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUMsRUFDM0JDLGdCQUFnQixFQUNuQixHQUFHbEIsbUVBQXFCQTtJQUd6QixNQUFNbUIsZUFBZSxPQUFPQztRQUN4Qk4sU0FBU00sS0FBSztRQUNkRjtRQUNBLE1BQU1HLFNBQVMsTUFBTXBCLG1FQUFVQSxDQUFDO1lBQUNxQixTQUFTRjtRQUFHO1FBQzdDLE1BQU0sRUFBQ0csR0FBRyxFQUFFQyxHQUFHLEVBQUMsR0FBRyxNQUFNdEIsa0VBQVNBLENBQUNtQixNQUFNLENBQUMsRUFBRTtRQUM1Q1osU0FBUztZQUFDYztZQUFLQztRQUFHO1FBQ2xCZCxVQUFVO1lBQUNhO1lBQUtDO1FBQUc7SUFDdkI7SUFHQSxxQkFDSTs7MEJBQ0ksOERBQUNyQixxREFBUUE7Z0JBQUNzQixVQUFVTjs7a0NBQ2hCLDhEQUFDZiwwREFBYUE7d0JBQUNTLE9BQU9BO3dCQUN0QmEsVUFBVUMsQ0FBQUEsSUFBR2IsU0FBU2EsRUFBRUMsT0FBT2Y7d0JBQy9CZ0IsVUFBVSxDQUFDakI7Ozs7OztrQ0FDWCw4REFBQ1AsNERBQWVBO2tDQUNaLDRFQUFDQyx5REFBWUE7c0NBQ1JVLFdBQVMsUUFDTkMsS0FBS2EsSUFBSTtvQ0FBQyxFQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBQzt1Q0FDN0IsOERBQUN6QiwyREFBY0E7b0NBQWdCTSxPQUFPbUI7bUNBQWpCRDs7Ozs7NEJBQThCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdkUsOERBQUM1QixxREFBUUE7Z0JBQUNzQixVQUFVTjs7a0NBQ2hCLDhEQUFDZiwwREFBYUE7d0JBQUNTLE9BQU9BO3dCQUN0QmEsVUFBVUMsQ0FBQUEsSUFBR2IsU0FBU2EsRUFBRUMsT0FBT2Y7d0JBQy9CZ0IsVUFBVSxDQUFDakI7Ozs7OztrQ0FDWCw4REFBQ1AsNERBQWVBO2tDQUNaLDRFQUFDQyx5REFBWUE7c0NBQ1JVLFdBQVMsUUFDTkMsS0FBS2EsSUFBSTtvQ0FBQyxFQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBQzt1Q0FDN0IsOERBQUN6QiwyREFBY0E7b0NBQWdCTSxPQUFPbUI7bUNBQWpCRDs7Ozs7NEJBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25GO0dBdkR3QnZCOztRQVFoQlIsK0RBQXFCQTs7O0tBUkxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9QbGFjZVNlYXJjaC50c3g/Nzk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUGxhY2VzQXV0b2NvbXBsZXRlLCB7IGdldEdlb2NvZGUsIGdldExhdExuZyB9IGZyb20gXCJ1c2UtcGxhY2VzLWF1dG9jb21wbGV0ZVwiXHJcbmltcG9ydCB7XHJcbiAgICBDb21ib2JveCxcclxuICAgIENvbWJvYm94SW5wdXQsXHJcbiAgICBDb21ib2JveFBvcG92ZXIsXHJcbiAgICBDb21ib2JveExpc3QsXHJcbiAgICBDb21ib2JveE9wdGlvbixcclxuICAgIENvbWJvYm94T3B0aW9uVGV4dCxcclxuICB9IGZyb20gXCJAcmVhY2gvY29tYm9ib3hcIjtcclxuICBpbXBvcnQgXCJAcmVhY2gvY29tYm9ib3gvc3R5bGVzLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFjZVNlYXJjaCh7YWRkUGxhY2UsIHNldE9mZmljZSwgc2V0T3JpZ2lufSl7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJlYWR5LFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHNldFZhbHVlLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zOiB7c3RhdHVzLCBkYXRhfSxcclxuICAgICAgICBjbGVhclN1Z2dlc3Rpb25zXHJcbiAgICB9ID0gdXNlUGxhY2VzQXV0b2NvbXBsZXRlKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGFzeW5jICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHZhbCwgZmFsc2UpO1xyXG4gICAgICAgIGNsZWFyU3VnZ2VzdGlvbnMoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRHZW9jb2RlKHthZGRyZXNzOiB2YWx9KTtcclxuICAgICAgICBjb25zdCB7bGF0LCBsbmd9ID0gYXdhaXQgZ2V0TGF0TG5nKHJlc3VsdFswXSk7XHJcbiAgICAgICAgYWRkUGxhY2Uoe2xhdCwgbG5nfSk7XHJcbiAgICAgICAgc2V0T2ZmaWNlKHtsYXQsIGxuZ30pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbWJvYm94IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgPENvbWJvYm94SW5wdXQgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcmVhZHl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb21ib2JveFBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbWJvYm94TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cz09PVwiT0tcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh7cGxhY2VfaWQsIGRlc2NyaXB0aW9ufSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3hPcHRpb24ga2V5PXtwbGFjZV9pZH0gdmFsdWU9e2Rlc2NyaXB0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db21ib2JveExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0NvbWJvYm94UG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9Db21ib2JveD5cclxuXHJcbiAgICAgICAgICAgIDxDb21ib2JveCBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIDxDb21ib2JveElucHV0IHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5zZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXJlYWR5fS8+XHJcbiAgICAgICAgICAgICAgICA8Q29tYm9ib3hQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21ib2JveExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXM9PT1cIk9LXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoe3BsYWNlX2lkLCBkZXNjcmlwdGlvbn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbWJvYm94T3B0aW9uIGtleT17cGxhY2VfaWR9IHZhbHVlPXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29tYm9ib3hMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Db21ib2JveFBvcG92ZXI+XHJcbiAgICAgICAgICAgIDwvQ29tYm9ib3g+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVBsYWNlc0F1dG9jb21wbGV0ZSIsImdldEdlb2NvZGUiLCJnZXRMYXRMbmciLCJDb21ib2JveCIsIkNvbWJvYm94SW5wdXQiLCJDb21ib2JveFBvcG92ZXIiLCJDb21ib2JveExpc3QiLCJDb21ib2JveE9wdGlvbiIsIlBsYWNlU2VhcmNoIiwiYWRkUGxhY2UiLCJzZXRPZmZpY2UiLCJzZXRPcmlnaW4iLCJyZWFkeSIsInZhbHVlIiwic2V0VmFsdWUiLCJzdWdnZXN0aW9ucyIsInN0YXR1cyIsImRhdGEiLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlU2VsZWN0IiwidmFsIiwicmVzdWx0IiwiYWRkcmVzcyIsImxhdCIsImxuZyIsIm9uU2VsZWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJtYXAiLCJwbGFjZV9pZCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/PlaceSearch.tsx\n"));

/***/ })

});