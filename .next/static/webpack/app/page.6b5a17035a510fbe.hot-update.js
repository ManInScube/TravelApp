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

/***/ "(app-client)/./app/Map.tsx":
/*!*********************!*\
  !*** ./app/Map.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Map() {\n    _s();\n    //     // Initialize and add the map\n    // let map;\n    // async function initMap(): Promise<void> {\n    //   // The location of Uluru\n    //   const position = { lat: -25.344, lng: 131.031 };\n    //   // Request needed libraries.\n    //   //@ts-ignore\n    //   const { GooleMap } = await google.maps.importLibrary(\"maps\") as google.maps.MapsLibrary;\n    //   const { AdvancedMarkerView } = await google.maps.importLibrary(\"marker\") as google.maps.MarkerLibrary;\n    //   // The map, centered at Uluru\n    //   map = new GooleMap(\n    //     document.getElementById('map') as HTMLElement,\n    //     {\n    //       zoom: 4,\n    //       center: position,\n    //       mapId: 'DEMO_MAP_ID',\n    //     }\n    //   );\n    //   // The marker, positioned at Uluru\n    //   const marker = new AdvancedMarkerView({\n    //     map: map,\n    //     position: position,\n    //     title: 'Uluru'\n    //   });\n    // }\n    // initMap();\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyBlMh0q0wf_Z_l1Hodbw1apqC_t8RF2iYk\"\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 40,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 41,\n        columnNumber: 12\n    }, this);\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.GoogleMap, {\n            zoom: 10,\n            center: {\n                lat: 44,\n                lng: -80\n            },\n            mapContainerClassName: \"width: 100%; hight: 100vh;\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n            lineNumber: 44,\n            columnNumber: 16\n        }, this);\n    }\n}\n_s(Map, \"fRYUc8216GFzAjlYDEKboTmtS+U=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUU7QUFFMUQsU0FBU0U7O0lBQ3hCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3QixxREFBcUQ7SUFFckQsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQiw2RkFBNkY7SUFDN0YsMkdBQTJHO0lBRTNHLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIscURBQXFEO0lBQ3JELFFBQVE7SUFDUixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsT0FBTztJQUVQLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLElBQUk7SUFFSixhQUFhO0lBRVQsTUFBTSxFQUFDQyxRQUFRLEVBQUMsR0FBR0YscUVBQWFBLENBQUM7UUFDN0JHLGtCQUFrQjtJQUN0QjtJQUVBLElBQUcsQ0FBQ0QsVUFBVSxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUMxQixxQkFBTyw4REFBQ0M7Ozs7O0lBRVIsU0FBU0E7UUFDTCxxQkFBTyw4REFBQ04sNkRBQVNBO1lBQUNPLE1BQU07WUFBSUMsUUFBUTtnQkFBQ0MsS0FBSTtnQkFBSUMsS0FBSSxDQUFDO1lBQUU7WUFBR0MsdUJBQXNCOzs7Ozs7SUFDakY7QUFDSjtHQTFDd0JUOztRQWdDREQsaUVBQWFBOzs7S0FoQ1pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9NYXAudHN4P2M5ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlTG9hZFNjcmlwdCwgTWFya2VyIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIiBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpe1xyXG4vLyAgICAgLy8gSW5pdGlhbGl6ZSBhbmQgYWRkIHRoZSBtYXBcclxuLy8gbGV0IG1hcDtcclxuLy8gYXN5bmMgZnVuY3Rpb24gaW5pdE1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuLy8gICAvLyBUaGUgbG9jYXRpb24gb2YgVWx1cnVcclxuLy8gICBjb25zdCBwb3NpdGlvbiA9IHsgbGF0OiAtMjUuMzQ0LCBsbmc6IDEzMS4wMzEgfTtcclxuXHJcbi8vICAgLy8gUmVxdWVzdCBuZWVkZWQgbGlicmFyaWVzLlxyXG4vLyAgIC8vQHRzLWlnbm9yZVxyXG4vLyAgIGNvbnN0IHsgR29vbGVNYXAgfSA9IGF3YWl0IGdvb2dsZS5tYXBzLmltcG9ydExpYnJhcnkoXCJtYXBzXCIpIGFzIGdvb2dsZS5tYXBzLk1hcHNMaWJyYXJ5O1xyXG4vLyAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJWaWV3IH0gPSBhd2FpdCBnb29nbGUubWFwcy5pbXBvcnRMaWJyYXJ5KFwibWFya2VyXCIpIGFzIGdvb2dsZS5tYXBzLk1hcmtlckxpYnJhcnk7XHJcblxyXG4vLyAgIC8vIFRoZSBtYXAsIGNlbnRlcmVkIGF0IFVsdXJ1XHJcbi8vICAgbWFwID0gbmV3IEdvb2xlTWFwKFxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpIGFzIEhUTUxFbGVtZW50LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICB6b29tOiA0LFxyXG4vLyAgICAgICBjZW50ZXI6IHBvc2l0aW9uLFxyXG4vLyAgICAgICBtYXBJZDogJ0RFTU9fTUFQX0lEJyxcclxuLy8gICAgIH1cclxuLy8gICApO1xyXG5cclxuLy8gICAvLyBUaGUgbWFya2VyLCBwb3NpdGlvbmVkIGF0IFVsdXJ1XHJcbi8vICAgY29uc3QgbWFya2VyID0gbmV3IEFkdmFuY2VkTWFya2VyVmlldyh7XHJcbi8vICAgICBtYXA6IG1hcCxcclxuLy8gICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuLy8gICAgIHRpdGxlOiAnVWx1cnUnXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGluaXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCB7aXNMb2FkZWR9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgICAgZ29vZ2xlTWFwc0FwaUtleTogXCJBSXphU3lCbE1oMHEwd2ZfWl9sMUhvZGJ3MWFwcUNfdDhSRjJpWWtcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCFpc0xvYWRlZCkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIHJldHVybiA8TWFwTG9jYWwvPlxyXG4gIFxyXG4gICAgZnVuY3Rpb24gTWFwTG9jYWwoKXtcclxuICAgICAgICByZXR1cm4gPEdvb2dsZU1hcCB6b29tPXsxMH0gY2VudGVyPXt7bGF0OjQ0LCBsbmc6LTgwfX0gbWFwQ29udGFpbmVyQ2xhc3NOYW1lPVwid2lkdGg6IDEwMCU7IGhpZ2h0OiAxMDB2aDtcIj48L0dvb2dsZU1hcD47XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwidXNlTG9hZFNjcmlwdCIsIk1hcCIsImlzTG9hZGVkIiwiZ29vZ2xlTWFwc0FwaUtleSIsImRpdiIsIk1hcExvY2FsIiwiem9vbSIsImNlbnRlciIsImxhdCIsImxuZyIsIm1hcENvbnRhaW5lckNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});