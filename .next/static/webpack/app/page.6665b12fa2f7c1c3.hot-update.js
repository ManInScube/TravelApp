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

/***/ "(app-client)/./app/store/reducers/routesSlice.ts":
/*!*******************************************!*\
  !*** ./app/store/reducers/routesSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routesSlice: function() { return /* binding */ routesSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-client)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = [\n    {\n        \"routes\": []\n    }\n];\nconst routesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"route\",\n    initialState,\n    reducers: {\n        addRoute: (state, action)=>{\n            state = [];\n            state.push(action.payload);\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (routesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3N0b3JlL3JlZHVjZXJzL3JvdXRlc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThEO0FBZ0I5RCxNQUFNQyxlQUFrQztJQUFDO1FBQ3JDLFVBQVMsRUFBRTtJQUNmO0NBQUc7QUFFSSxNQUFNQyxjQUFjRiw2REFBV0EsQ0FBQztJQUNuQ0csTUFBTTtJQUNORjtJQUNBRyxVQUFVO1FBQ05DLFVBQVUsQ0FBQ0MsT0FBT0M7WUFDZEQsUUFBUSxFQUFFO1lBQ1ZBLE1BQU1FLEtBQUtELE9BQU9FO1FBQ3RCO0lBQ0o7QUFDSixHQUFFO0FBRUYsK0RBQWVQLFlBQVlRLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0b3JlL3JlZHVjZXJzL3JvdXRlc1NsaWNlLnRzP2RlN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuXHJcblxyXG50eXBlIExhdExuZ0xpdGVyYWwgPSBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsOyAgICBcclxudHlwZSBEaXJlY3Rpb25SZXN1bHQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0O1xyXG5cclxuLy8gaW50ZXJmYWNlIFJvdXRlIHtcclxuLy8gICAgIG9yaWdpbmFsOiBMYXRMbmdMaXRlcmFsLFxyXG4vLyAgICAgZGVzdGluYXRpb246IExhdExuZ0xpdGVyYWxcclxuLy8gfVxyXG5cclxuaW50ZXJmYWNlIElSb3V0ZSB7XHJcbiAgICByZXN1bHQ6IERpcmVjdGlvblJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IERpcmVjdGlvblJlc3VsdFtdID0gW3tcclxuICAgIFwicm91dGVzXCI6W11cclxufSBdXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAncm91dGUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBhZGRSb3V0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248RGlyZWN0aW9uUmVzdWx0Pik9PntcclxuICAgICAgICAgICAgc3RhdGUgPSBbXVxyXG4gICAgICAgICAgICBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicm91dGVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRSb3V0ZSIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/store/reducers/routesSlice.ts\n"));

/***/ })

});