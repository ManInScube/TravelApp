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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Map() {\n    _s();\n    const [centerMap, setCenterMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentPoint, setCurrentPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //CalcCenter();\n        buildRoute;\n    }, [\n        destination\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: [\n            \"places\"\n        ]\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 35,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 36,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n        setCenterMap({\n            lat,\n            lng\n        });\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    async function buildRoute() {\n        if (!destination) return;\n        console.log(\"kek\");\n        const dirService = new google.maps.DirectionsService();\n        //TODO: if markers > 1\n        await dirService.route({\n            origin: markers[1],\n            destination: markers[0],\n            travelMode: google.maps.TravelMode.DRIVING\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n            }\n        });\n    }\n    function addPlace(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n    //buildRoute(val);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        addPlace: addPlace,\n                        setOffice: (position)=>{\n                            var _mapRef_current;\n                            setOffice(position);\n                            (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                    zoom: 10,\n                    center: centerMap,\n                    mapContainerClassName: \"map-container\",\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 40\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"WJ6f7RljH4FnydLWCizFnfNSsy0=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBHb29nbGVNYXAsIHVzZUxvYWRTY3JpcHQsIE1hcmtlciwgRGlyZWN0aW9uc1JlbmRlcmVyIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB1c2VQbGFjZXNBdXRvY29tcGxldGUgZnJvbSBcInVzZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBQbGFjZVNlYXJjaCBmcm9tIFwiLi9QbGFjZVNlYXJjaFwiO1xyXG5cclxudHlwZSBEZXJlY3Rpb25SZXN1bHQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCl7XHJcbiAgICBjb25zdCBbY2VudGVyTWFwLCBzZXRDZW50ZXJNYXBdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oe2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9KTtcclxuICAgIGNvbnN0IFtvZmZpY2UsIHNldE9mZmljZV0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPigpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQb2ludCwgc2V0Q3VycmVudFBvaW50XSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSk7XHJcbiAgICBjb25zdCBbZGVzdGluYXRpb24sIHNldERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlPERlcmVjdGlvblJlc3VsdD4oKTtcclxuXHJcbiAgICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsW10+KFtcclxuICAgICAgICAgICAge2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9LFxyXG4gICAgICAgICAgICB7bGF0OjU0LjY2NTE0ODY2NDMzNDc4LCBsbmc6MjEuODE1NTc5ODUyOTYzODF9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy9DYWxjQ2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBidWlsZFJvdXRlO1xyXG4gICAgICAgICAgICB9LCBbZGVzdGluYXRpb25dKVxyXG4gICAgXHJcbiAgICBjb25zdCBtYXBSZWYgPSB1c2VSZWY8R29vZ2xlTWFwPigpO1xyXG5cclxuICAgIHR5cGUgTGF0TG5nTGl0ZXJhbCA9IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw7ICAgIFxyXG5cclxuICAgIGNvbnN0IHtpc0xvYWRlZH0gPSB1c2VMb2FkU2NyaXB0KHtcclxuICAgICAgICBnb29nbGVNYXBzQXBpS2V5OiBcIkFJemFTeUR3ejQzV296X0Zsd2gwbzRwZzJBRXVWUUJ5MXVKQkxpOFwiLFxyXG4gICAgICAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZighaXNMb2FkZWQpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICByZXR1cm4gPE1hcExvY2FsLz5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIENhbGNDZW50ZXIoKXtcclxuICAgICAgICBsZXQgbGF0ID0gKG1hcmtlcnNbMF0ubGF0ICsgbWFya2Vyc1sxXS5sYXRbMV0pIC8gbWFya2Vycy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGxuZyA9IChtYXJrZXJzWzBdLmxuZyArIG1hcmtlcnNbMV0ubG5nWzFdKSAvIG1hcmtlcnMubGVuZ3RoO1xyXG4gICAgICAgIHNldENlbnRlck1hcCh7bGF0LCBsbmd9KTtcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4gICAgLy9UT0RPOiBhZGQgdHJhbnNpdCBwb2ludHMgLyBUcmF2ZWxNb2RlLlRSQU5TSVRcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYnVpbGRSb3V0ZSAoKSB7XHJcbiAgICAgICAgaWYoIWRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJrZWtcIik7XHJcbiAgICAgICAgY29uc3QgZGlyU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG5cclxuICAgICAgICAvL1RPRE86IGlmIG1hcmtlcnMgPiAxXHJcblxyXG4gICAgICAgIGF3YWl0IGRpclNlcnZpY2Uucm91dGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogbWFya2Vyc1sxXSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBtYXJrZXJzWzBdLFxyXG4gICAgICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzPT09XCJPS1wiICYmIHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVzdGluYXRpb24ocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQbGFjZSh2YWwpe1xyXG4gICAgICAgIHNldE1hcmtlcnMoWy4uLm1hcmtlcnMsIHZhbF0pO1xyXG4gICAgICAgIC8vYnVpbGRSb3V0ZSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1hcExvY2FsKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBsYWNlU2VhcmNoIGFkZFBsYWNlPXthZGRQbGFjZX0gc2V0T2ZmaWNlPXsocG9zaXRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T2ZmaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgICAgICAgICAgem9vbT17MTB9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI9e2NlbnRlck1hcH1cclxuICAgICAgICAgICAgICAgIG1hcENvbnRhaW5lckNsYXNzTmFtZT1cIm1hcC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVzdGluYXRpb24gJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkZXN0aW5hdGlvbn0vPn1cclxuICAgICAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKT0+PE1hcmtlciBwb3NpdGlvbj17bWFya2VyfSAvPil9XHJcbiAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwidXNlTG9hZFNjcmlwdCIsIk1hcmtlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGxhY2VTZWFyY2giLCJNYXAiLCJjZW50ZXJNYXAiLCJzZXRDZW50ZXJNYXAiLCJsYXQiLCJsbmciLCJvZmZpY2UiLCJzZXRPZmZpY2UiLCJjdXJyZW50UG9pbnQiLCJzZXRDdXJyZW50UG9pbnQiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJidWlsZFJvdXRlIiwibWFwUmVmIiwiaXNMb2FkZWQiLCJnb29nbGVNYXBzQXBpS2V5IiwibGlicmFyaWVzIiwiZGl2IiwiTWFwTG9jYWwiLCJDYWxjQ2VudGVyIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRpclNlcnZpY2UiLCJnb29nbGUiLCJtYXBzIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJyb3V0ZSIsIm9yaWdpbiIsInRyYXZlbE1vZGUiLCJUcmF2ZWxNb2RlIiwiRFJJVklORyIsInJlc3VsdCIsInN0YXR1cyIsImFkZFBsYWNlIiwidmFsIiwicG9zaXRpb24iLCJjdXJyZW50IiwicGFuVG8iLCJ6b29tIiwiY2VudGVyIiwibWFwQ29udGFpbmVyQ2xhc3NOYW1lIiwiZGlyZWN0aW9ucyIsIm1hcCIsIm1hcmtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});