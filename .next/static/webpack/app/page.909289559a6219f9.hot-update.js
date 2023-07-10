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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Map() {\n    _s();\n    const [centerMap, setCenterMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentPoint, setCurrentPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //CalcCenter();\n        buildRoute;\n    }, [\n        destination\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: [\n            \"places\"\n        ]\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 35,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n        setCenterMap({\n            lat,\n            lng\n        });\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    function buildRoute() {\n        if (!destination) return;\n        console.log(\"kek\");\n        const dirService = new google.maps.DirectionsService();\n        //TODO: if markers > 1\n        dirService.route({\n            origin: markers[1],\n            destination: markers[0],\n            travelMode: google.maps.TravelMode.DRIVING\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n            }\n        });\n    }\n    function addPlace(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n    //buildRoute(val);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        addPlace: addPlace,\n                        setOffice: (position)=>{\n                            var _mapRef_current;\n                            setOffice(position);\n                            (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                    zoom: 10,\n                    center: centerMap,\n                    mapContainerClassName: \"map-container\",\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 40\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"WJ6f7RljH4FnydLWCizFnfNSsy0=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VMb2FkU2NyaXB0LCBNYXJrZXIsIERpcmVjdGlvbnNSZW5kZXJlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdXNlUGxhY2VzQXV0b2NvbXBsZXRlIGZyb20gXCJ1c2UtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgUGxhY2VTZWFyY2ggZnJvbSBcIi4vUGxhY2VTZWFyY2hcIjtcclxuXHJcbnR5cGUgRGVyZWN0aW9uUmVzdWx0ID0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpe1xyXG4gICAgY29uc3QgW2NlbnRlck1hcCwgc2V0Q2VudGVyTWFwXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSk7XHJcbiAgICBjb25zdCBbb2ZmaWNlLCBzZXRPZmZpY2VdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UG9pbnQsIHNldEN1cnJlbnRQb2ludF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30pO1xyXG4gICAgY29uc3QgW2Rlc3RpbmF0aW9uLCBzZXREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZTxEZXJlY3Rpb25SZXN1bHQ+KCk7XHJcblxyXG4gICAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbFtdPihbXHJcbiAgICAgICAgICAgIHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSxcclxuICAgICAgICAgICAge2xhdDo1NC42NjUxNDg2NjQzMzQ3OCwgbG5nOjIxLjgxNTU3OTg1Mjk2MzgxfV1cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vQ2FsY0NlbnRlcigpO1xyXG4gICAgICAgICAgICAgICAgYnVpbGRSb3V0ZTtcclxuICAgICAgICAgICAgfSwgW2Rlc3RpbmF0aW9uXSlcclxuICAgIFxyXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmPEdvb2dsZU1hcD4oKTtcclxuXHJcbiAgICB0eXBlIExhdExuZ0xpdGVyYWwgPSBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsOyAgICBcclxuXHJcbiAgICBjb25zdCB7aXNMb2FkZWR9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgICAgZ29vZ2xlTWFwc0FwaUtleTogXCJBSXphU3lEd3o0M1dvel9GbHdoMG80cGcyQUV1VlFCeTF1SkJMaThcIixcclxuICAgICAgICBsaWJyYXJpZXM6IFtcInBsYWNlc1wiXVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWlzTG9hZGVkKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgcmV0dXJuIDxNYXBMb2NhbC8+XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBDYWxjQ2VudGVyKCl7XHJcbiAgICAgICAgbGV0IGxhdCA9IChtYXJrZXJzWzBdLmxhdCArIG1hcmtlcnNbMV0ubGF0WzFdKSAvIG1hcmtlcnMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsbmcgPSAobWFya2Vyc1swXS5sbmcgKyBtYXJrZXJzWzFdLmxuZ1sxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICBzZXRDZW50ZXJNYXAoe2xhdCwgbG5nfSk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxuICAgIC8vVE9ETzogYWRkIHRyYW5zaXQgcG9pbnRzIC8gVHJhdmVsTW9kZS5UUkFOU0lUXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkUm91dGUgKCkge1xyXG4gICAgICAgIGlmKCFkZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwia2VrXCIpO1xyXG4gICAgICAgIGNvbnN0IGRpclNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBpZiBtYXJrZXJzID4gMVxyXG5cclxuICAgICAgICBkaXJTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG1hcmtlcnNbMV0sXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogbWFya2Vyc1swXSxcclxuICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHN0YXR1cz09PVwiT0tcIiAmJiByZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERlc3RpbmF0aW9uKHJlc3VsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUGxhY2UodmFsKXtcclxuICAgICAgICBzZXRNYXJrZXJzKFsuLi5tYXJrZXJzLCB2YWxdKTtcclxuICAgICAgICAvL2J1aWxkUm91dGUodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNYXBMb2NhbCgpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQbGFjZVNlYXJjaCBhZGRQbGFjZT17YWRkUGxhY2V9IHNldE9mZmljZT17KHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZmljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LnBhblRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgICAgIHpvb209ezEwfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyPXtjZW50ZXJNYXB9XHJcbiAgICAgICAgICAgICAgICBtYXBDb250YWluZXJDbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uICYmIDxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17ZGVzdGluYXRpb259Lz59XHJcbiAgICAgICAgICAgICAgICB7bWFya2Vycy5tYXAoKG1hcmtlcik9PjxNYXJrZXIgcG9zaXRpb249e21hcmtlcn0gLz4pfVxyXG4gICAgICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIkdvb2dsZU1hcCIsInVzZUxvYWRTY3JpcHQiLCJNYXJrZXIiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBsYWNlU2VhcmNoIiwiTWFwIiwiY2VudGVyTWFwIiwic2V0Q2VudGVyTWFwIiwibGF0IiwibG5nIiwib2ZmaWNlIiwic2V0T2ZmaWNlIiwiY3VycmVudFBvaW50Iiwic2V0Q3VycmVudFBvaW50IiwiZGVzdGluYXRpb24iLCJzZXREZXN0aW5hdGlvbiIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwiYnVpbGRSb3V0ZSIsIm1hcFJlZiIsImlzTG9hZGVkIiwiZ29vZ2xlTWFwc0FwaUtleSIsImxpYnJhcmllcyIsImRpdiIsIk1hcExvY2FsIiwiQ2FsY0NlbnRlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJvcmlnaW4iLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJhZGRQbGFjZSIsInZhbCIsInBvc2l0aW9uIiwiY3VycmVudCIsInBhblRvIiwiem9vbSIsImNlbnRlciIsIm1hcENvbnRhaW5lckNsYXNzTmFtZSIsImRpcmVjdGlvbnMiLCJtYXAiLCJtYXJrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});