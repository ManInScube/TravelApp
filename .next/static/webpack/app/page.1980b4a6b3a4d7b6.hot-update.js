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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlaceSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-places-autocomplete */ \"(app-client)/./node_modules/use-places-autocomplete/dist/index.esm.js\");\n/* harmony import */ var _reach_combobox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/combobox */ \"(app-client)/./node_modules/@reach/combobox/dist/reach-combobox.mjs\");\n/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/combobox/styles.css */ \"(app-client)/./node_modules/@reach/combobox/styles.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlaceSearch(param) {\n    let { addPlace, setOffice, setOrigin } = param;\n    _s();\n    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const handleSelect = async (val)=>{\n        setValue(val, false);\n        // clearSuggestions(); //!!!\n        const result = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getGeocode)({\n            address: val\n        });\n        const { lat, lng } = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getLatLng)(result[0]);\n        addPlace({\n            lat,\n            lng\n        });\n        setOffice({\n            lat,\n            lng\n        });\n    };\n    const handleOrigin = async (val)=>{\n        setValue(val, false);\n        //clearSuggestions();\n        const result = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getGeocode)({\n            address: val\n        });\n        const { lat, lng } = await (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__.getLatLng)(result[0]);\n        setOrigin({\n            lat,\n            lng\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.Combobox, {\n            onSelect: handleSelect,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxInput, {\n                    value: value,\n                    onChange: (e)=>setValue(e.target.value),\n                    disabled: !ready\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxPopover, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxList, {\n                        children: status === \"OK\" && data.map((param)=>/*#__PURE__*/ {\n                            let { place_id, description } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reach_combobox__WEBPACK_IMPORTED_MODULE_3__.ComboboxOption, {\n                                value: description\n                            }, place_id, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 33\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\PlaceSearch.tsx\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(PlaceSearch, \"aHvPrXWCTjZlo3qw+BDCI5tvZcc=\", false, function() {\n    return [\n        use_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = PlaceSearch;\nvar _c;\n$RefreshReg$(_c, \"PlaceSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL1BsYWNlU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNGO0FBUTNEO0FBQ1c7QUFJdkIsU0FBU1EsWUFBWSxLQUFnQztRQUFoQyxFQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFDLEdBQWhDOztJQUVoQyxNQUFNLEVBQ0ZDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGFBQWEsRUFBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUMsRUFDM0JDLGdCQUFnQixFQUNuQixHQUFHbEIsbUVBQXFCQTtJQUl6QixNQUFNbUIsZUFBZSxPQUFPQztRQUN4Qk4sU0FBU00sS0FBSztRQUNmLDRCQUE0QjtRQUMzQixNQUFNQyxTQUFTLE1BQU1wQixtRUFBVUEsQ0FBQztZQUFDcUIsU0FBU0Y7UUFBRztRQUM3QyxNQUFNLEVBQUNHLEdBQUcsRUFBRUMsR0FBRyxFQUFDLEdBQUcsTUFBTXRCLGtFQUFTQSxDQUFDbUIsTUFBTSxDQUFDLEVBQUU7UUFDNUNaLFNBQVM7WUFBQ2M7WUFBS0M7UUFBRztRQUNsQmQsVUFBVTtZQUFDYTtZQUFLQztRQUFHO0lBQ3ZCO0lBRUEsTUFBTUMsZUFBZSxPQUFPTDtRQUN4Qk4sU0FBU00sS0FBSztRQUNkLHFCQUFxQjtRQUNyQixNQUFNQyxTQUFTLE1BQU1wQixtRUFBVUEsQ0FBQztZQUFDcUIsU0FBU0Y7UUFBRztRQUM3QyxNQUFNLEVBQUNHLEdBQUcsRUFBRUMsR0FBRyxFQUFDLEdBQUcsTUFBTXRCLGtFQUFTQSxDQUFDbUIsTUFBTSxDQUFDLEVBQUU7UUFDNUNWLFVBQVU7WUFBQ1k7WUFBS0M7UUFBRztJQUN2QjtJQUdBLHFCQUNJO2tCQThCSSw0RUFBQ3JCLHFEQUFRQTtZQUFDdUIsVUFBVVA7OzhCQUNoQiw4REFBQ2YsMERBQWFBO29CQUFDUyxPQUFPQTtvQkFDdEJjLFVBQVVDLENBQUFBLElBQUdkLFNBQVNjLEVBQUVDLE9BQU9oQjtvQkFDL0JpQixVQUFVLENBQUNsQjs7Ozs7OzhCQUNYLDhEQUFDUCw0REFBZUE7OEJBQ1osNEVBQUNDLHlEQUFZQTtrQ0FDUlUsV0FBUyxRQUNOQyxLQUFLYyxJQUFJO2dDQUFDLEVBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFDO21DQUM3Qiw4REFBQzFCLDJEQUFjQTtnQ0FBZ0JNLE9BQU9vQjsrQkFBakJEOzs7Ozt3QkFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVuRjtHQS9Fd0J4Qjs7UUFRaEJSLCtEQUFxQkE7OztLQVJMUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvUGxhY2VTZWFyY2gudHN4Pzc5NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSwgeyBnZXRHZW9jb2RlLCBnZXRMYXRMbmcgfSBmcm9tIFwidXNlLXBsYWNlcy1hdXRvY29tcGxldGVcIlxyXG5pbXBvcnQge1xyXG4gICAgQ29tYm9ib3gsXHJcbiAgICBDb21ib2JveElucHV0LFxyXG4gICAgQ29tYm9ib3hQb3BvdmVyLFxyXG4gICAgQ29tYm9ib3hMaXN0LFxyXG4gICAgQ29tYm9ib3hPcHRpb24sXHJcbiAgICBDb21ib2JveE9wdGlvblRleHQsXHJcbiAgfSBmcm9tIFwiQHJlYWNoL2NvbWJvYm94XCI7XHJcbiAgaW1wb3J0IFwiQHJlYWNoL2NvbWJvYm94L3N0eWxlcy5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhY2VTZWFyY2goe2FkZFBsYWNlLCBzZXRPZmZpY2UsIHNldE9yaWdpbn0pe1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICByZWFkeSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBzZXRWYWx1ZSxcclxuICAgICAgICBzdWdnZXN0aW9uczoge3N0YXR1cywgZGF0YX0sXHJcbiAgICAgICAgY2xlYXJTdWdnZXN0aW9uc1xyXG4gICAgfSA9IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSgpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gYXN5bmMgKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUodmFsLCBmYWxzZSk7XHJcbiAgICAgICAvLyBjbGVhclN1Z2dlc3Rpb25zKCk7IC8vISEhXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0R2VvY29kZSh7YWRkcmVzczogdmFsfSk7XHJcbiAgICAgICAgY29uc3Qge2xhdCwgbG5nfSA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRbMF0pO1xyXG4gICAgICAgIGFkZFBsYWNlKHtsYXQsIGxuZ30pO1xyXG4gICAgICAgIHNldE9mZmljZSh7bGF0LCBsbmd9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPcmlnaW4gPSBhc3luYyAodmFsOnN0cmluZyApPT57XHJcbiAgICAgICAgc2V0VmFsdWUodmFsLCBmYWxzZSk7XHJcbiAgICAgICAgLy9jbGVhclN1Z2dlc3Rpb25zKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0R2VvY29kZSh7YWRkcmVzczogdmFsfSk7XHJcbiAgICAgICAgY29uc3Qge2xhdCwgbG5nfSA9IGF3YWl0IGdldExhdExuZyhyZXN1bHRbMF0pO1xyXG4gICAgICAgIHNldE9yaWdpbih7bGF0LCBsbmd9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8Q29tYm9ib3ggb25TZWxlY3Q9e2hhbmRsZU9yaWdpbn0+XHJcbiAgICAgICAgICAgICAgICA8Q29tYm9ib3hJbnB1dCB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFyZWFkeX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbWJvYm94UG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3hMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzPT09XCJPS1wiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHtwbGFjZV9pZCwgZGVzY3JpcHRpb259KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21ib2JveE9wdGlvbiBrZXk9e3BsYWNlX2lkfSB2YWx1ZT17ZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbWJvYm94TGlzdD5cclxuICAgICAgICAgICAgICAgIDwvQ29tYm9ib3hQb3BvdmVyPlxyXG4gICAgICAgICAgICA8L0NvbWJvYm94PlxyXG5cclxuICAgICAgICAgICAgPENvbWJvYm94IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgPENvbWJvYm94SW5wdXQgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcmVhZHl9Lz5cclxuICAgICAgICAgICAgICAgIDxDb21ib2JveFBvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbWJvYm94TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cz09PVwiT0tcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh7cGxhY2VfaWQsIGRlc2NyaXB0aW9ufSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tYm9ib3hPcHRpb24ga2V5PXtwbGFjZV9pZH0gdmFsdWU9e2Rlc2NyaXB0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db21ib2JveExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0NvbWJvYm94UG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9Db21ib2JveD4gKi99XHJcbiAgICAgICAgICAgIDxDb21ib2JveCBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cclxuICAgICAgICAgICAgICAgIDxDb21ib2JveElucHV0IHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5zZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXJlYWR5fS8+XHJcbiAgICAgICAgICAgICAgICA8Q29tYm9ib3hQb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21ib2JveExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXM9PT1cIk9LXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoe3BsYWNlX2lkLCBkZXNjcmlwdGlvbn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbWJvYm94T3B0aW9uIGtleT17cGxhY2VfaWR9IHZhbHVlPXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29tYm9ib3hMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9Db21ib2JveFBvcG92ZXI+XHJcbiAgICAgICAgICAgIDwvQ29tYm9ib3g+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VQbGFjZXNBdXRvY29tcGxldGUiLCJnZXRHZW9jb2RlIiwiZ2V0TGF0TG5nIiwiQ29tYm9ib3giLCJDb21ib2JveElucHV0IiwiQ29tYm9ib3hQb3BvdmVyIiwiQ29tYm9ib3hMaXN0IiwiQ29tYm9ib3hPcHRpb24iLCJQbGFjZVNlYXJjaCIsImFkZFBsYWNlIiwic2V0T2ZmaWNlIiwic2V0T3JpZ2luIiwicmVhZHkiLCJ2YWx1ZSIsInNldFZhbHVlIiwic3VnZ2VzdGlvbnMiLCJzdGF0dXMiLCJkYXRhIiwiY2xlYXJTdWdnZXN0aW9ucyIsImhhbmRsZVNlbGVjdCIsInZhbCIsInJlc3VsdCIsImFkZHJlc3MiLCJsYXQiLCJsbmciLCJoYW5kbGVPcmlnaW4iLCJvblNlbGVjdCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpc2FibGVkIiwibWFwIiwicGxhY2VfaWQiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/PlaceSearch.tsx\n"));

/***/ })

});