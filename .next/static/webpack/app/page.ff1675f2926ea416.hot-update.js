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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* harmony import */ var _UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Select/Select */ \"(app-client)/./app/UI/Select/Select.tsx\");\n/* harmony import */ var _UI_Select_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst libraries = [\n    \"places\"\n];\nfunction Map() {\n    _s();\n    // const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [originPoint, setOriginPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destinationPoint, setDestinationPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stops, setStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        buildRoute(destinationPoint);\n    }, [\n        stops\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        }), []);\n    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            disableDefaultUI: true,\n            clickableIcons: false\n        }), []);\n    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRef.current = map, []);\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: libraries\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 58,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 59,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n    //setCenterMap({lat, lng});\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    async function buildRoute(dest) {\n        console.log(\"before\");\n        if (!origin) return;\n        console.log(\"after\");\n        const dirService = new google.maps.DirectionsService();\n        await dirService.route({\n            origin: originPoint,\n            destination: dest,\n            // waypoints: [\n            //     {location: {lat: 57.24047038843604, lng: 37.8380564694735}}\n            // ],\n            waypoints: stops,\n            travelMode: google.maps.TravelMode.DRIVING\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n                console.log(result);\n            }\n        });\n    }\n    function addPlace(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setDestinationPoint(val);\n        buildRoute(val);\n    }\n    function addOrigin(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setOriginPoint(val);\n    }\n    function addStop(val) {\n        let stop = {\n            location: val\n        };\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setStops([\n            ...stops,\n            stop\n        ]);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            handler: addOrigin,\n                            setOrigin: addOrigin,\n                            setOffice: (position)=>{\n                                var _mapRef_current;\n                                setOffice(position);\n                                (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            handler: addPlace,\n                            setOrigin: addOrigin,\n                            setOffice: (position)=>{\n                                var _mapRef_current;\n                                setOffice(position);\n                                (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            handler: addStop,\n                            setOrigin: addOrigin,\n                            setOffice: (position)=>{\n                                var _mapRef_current;\n                                setOffice(position);\n                                (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_UI_Select_Select__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {\n                    zoom: 10,\n                    center: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 40\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"pfKtlwm/iRHcRY5oD/2VWv053sI=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUo7R0ExSXdCN0Q7O1FBbUNEWCxpRUFBYUE7OztLQW5DWlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL01hcC50c3g/YzllMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VMb2FkU2NyaXB0LCBNYXJrZXIsIERpcmVjdGlvbnNSZW5kZXJlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tIFwidXNlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFBsYWNlU2VhcmNoIGZyb20gXCIuL1BsYWNlU2VhcmNoXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gXCIuL1VJL1NlbGVjdC9TZWxlY3RcIjtcclxuXHJcblxyXG50eXBlIExhdExuZ0xpdGVyYWwgPSBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsOyAgICBcclxudHlwZSBEaXJlY3Rpb25SZXN1bHQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0O1xyXG50eXBlIERpcmVjdGlvbldheXBvaW50ID0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1dheXBvaW50O1xyXG50eXBlIE1hcE9wdGlvbnMgPSBnb29nbGUubWFwcy5NYXBPcHRpb25zO1xyXG5cclxuY29uc3QgbGlicmFyaWVzOnN0cmluZ1tdID0gW1wicGxhY2VzXCJdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCl7XHJcbiAgICAvLyBjb25zdCBbY2VudGVyTWFwLCBzZXRDZW50ZXJNYXBdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oe2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9KTtcclxuICAgIGNvbnN0IFtvZmZpY2UsIHNldE9mZmljZV0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPigpO1xyXG4gICAgY29uc3QgW29yaWdpblBvaW50LCBzZXRPcmlnaW5Qb2ludF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjAsbG5nOjB9KTtcclxuICAgIGNvbnN0IFtkZXN0aW5hdGlvblBvaW50LCBzZXREZXN0aW5hdGlvblBvaW50XSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6MCxsbmc6MH0pO1xyXG4gICAgY29uc3QgW2Rlc3RpbmF0aW9uLCBzZXREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZTxEaXJlY3Rpb25SZXN1bHQ+KCk7XHJcbiAgICBjb25zdCBbc3RvcHMsIHNldFN0b3BzXSA9IHVzZVN0YXRlPERpcmVjdGlvbldheXBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWxbXT4oW1xyXG4gICAgICAgICAgICB7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30sXHJcbiAgICAgICAgICAgIHtsYXQ6NTQuNjY1MTQ4NjY0MzM0NzgsIGxuZzoyMS44MTU1Nzk4NTI5NjM4MX1dXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgICAgIGJ1aWxkUm91dGUoZGVzdGluYXRpb25Qb2ludCk7XHJcbiAgICAgICAgICAgIH0sW3N0b3BzXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZjxHb29nbGVNYXA+KCk7XHJcbiAgICBjb25zdCBjZW50ZXIgPSB1c2VNZW1vPExhdExuZ0xpdGVyYWw+KFxyXG4gICAgICAgICgpID0+ICh7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30pLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vPE1hcE9wdGlvbnM+KFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2FkID0gdXNlQ2FsbGJhY2soKG1hcCk9PihtYXBSZWYuY3VycmVudD1tYXApLFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7aXNMb2FkZWR9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQX0FQSV9LRVksXHJcbiAgICAgICAgbGlicmFyaWVzOiBsaWJyYXJpZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZighaXNMb2FkZWQpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICByZXR1cm4gPE1hcExvY2FsLz5cclxuXHJcbiAgICBmdW5jdGlvbiBDYWxjQ2VudGVyKCl7XHJcbiAgICAgICAgbGV0IGxhdCA9IChtYXJrZXJzWzBdLmxhdCArIG1hcmtlcnNbMV0ubGF0WzFdKSAvIG1hcmtlcnMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsbmcgPSAobWFya2Vyc1swXS5sbmcgKyBtYXJrZXJzWzFdLmxuZ1sxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICAvL3NldENlbnRlck1hcCh7bGF0LCBsbmd9KTtcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4gICAgLy9UT0RPOiBhZGQgdHJhbnNpdCBwb2ludHMgLyBUcmF2ZWxNb2RlLlRSQU5TSVRcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYnVpbGRSb3V0ZSAoZGVzdDogTGF0TG5nTGl0ZXJhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlXCIpO1xyXG5cclxuICAgICAgICBpZighb3JpZ2luKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICBjb25zdCBkaXJTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IGRpclNlcnZpY2Uucm91dGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luUG9pbnQsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogZGVzdCxcclxuICAgICAgICAgICAgICAgIC8vIHdheXBvaW50czogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHtsb2NhdGlvbjoge2xhdDogNTcuMjQwNDcwMzg4NDM2MDQsIGxuZzogMzcuODM4MDU2NDY5NDczNX19XHJcbiAgICAgICAgICAgICAgICAvLyBdLFxyXG4gICAgICAgICAgICAgICAgd2F5cG9pbnRzOiBzdG9wcyxcclxuICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHN0YXR1cz09PVwiT0tcIiAmJiByZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERlc3RpbmF0aW9uKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQbGFjZSh2YWwpe1xyXG4gICAgICAgIHNldE1hcmtlcnMoWy4uLm1hcmtlcnMsIHZhbF0pO1xyXG4gICAgICAgIHNldERlc3RpbmF0aW9uUG9pbnQodmFsKTtcclxuICAgICAgICBidWlsZFJvdXRlKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT3JpZ2luKHZhbCl7XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgc2V0T3JpZ2luUG9pbnQodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTdG9wKHZhbCl7XHJcbiAgICAgICAgbGV0IHN0b3AgPSB7bG9jYXRpb246IHZhbH07XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgc2V0U3RvcHMoWy4uLnN0b3BzLCBzdG9wXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWFwTG9jYWwoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiA8UGxhY2VTZWFyY2ggYWRkUGxhY2U9e2FkZFBsYWNlfSBzZXRPcmlnaW49e2FkZE9yaWdpbn0gc2V0T2ZmaWNlPXsocG9zaXRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T2ZmaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfX0vPiAqL31cclxuICAgICAgICAgICAgICAgIDxQbGFjZVNlYXJjaCBoYW5kbGVyPXthZGRPcmlnaW59IHNldE9yaWdpbj17YWRkT3JpZ2lufSBzZXRPZmZpY2U9eyhwb3NpdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRPZmZpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8UGxhY2VTZWFyY2ggaGFuZGxlcj17YWRkUGxhY2V9IHNldE9yaWdpbj17YWRkT3JpZ2lufSBzZXRPZmZpY2U9eyhwb3NpdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRPZmZpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8UGxhY2VTZWFyY2ggaGFuZGxlcj17YWRkU3RvcH0gc2V0T3JpZ2luPXthZGRPcmlnaW59IHNldE9mZmljZT17KHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZmljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LnBhblRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJhc2ljU2VsZWN0Lz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgICAgICAgICB6b29tPXsxMH1cclxuICAgICAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICAgICAgbWFwQ29udGFpbmVyQ2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZXN0aW5hdGlvbiAmJiA8RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2Rlc3RpbmF0aW9ufS8+fVxyXG4gICAgICAgICAgICAgICAgey8qIHtkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5tYXAoKGl0ZW0pPT48RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2l0ZW19IC8+KX0gKi99XHJcbiAgICAgICAgICAgICAgICB7bWFya2Vycy5tYXAoKG1hcmtlcik9PjxNYXJrZXIgcG9zaXRpb249e21hcmtlcn0gLz4pfVxyXG4gICAgICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIkdvb2dsZU1hcCIsInVzZUxvYWRTY3JpcHQiLCJNYXJrZXIiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTWVtbyIsIlBsYWNlU2VhcmNoIiwiQmFzaWNTZWxlY3QiLCJsaWJyYXJpZXMiLCJNYXAiLCJvZmZpY2UiLCJzZXRPZmZpY2UiLCJvcmlnaW5Qb2ludCIsInNldE9yaWdpblBvaW50IiwibGF0IiwibG5nIiwiZGVzdGluYXRpb25Qb2ludCIsInNldERlc3RpbmF0aW9uUG9pbnQiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwic3RvcHMiLCJzZXRTdG9wcyIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwiYnVpbGRSb3V0ZSIsIm1hcFJlZiIsImNlbnRlciIsIm9wdGlvbnMiLCJkaXNhYmxlRGVmYXVsdFVJIiwiY2xpY2thYmxlSWNvbnMiLCJvbkxvYWQiLCJtYXAiLCJjdXJyZW50IiwiaXNMb2FkZWQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01BUF9BUElfS0VZIiwiZGl2IiwiTWFwTG9jYWwiLCJDYWxjQ2VudGVyIiwibGVuZ3RoIiwiZGVzdCIsImNvbnNvbGUiLCJsb2ciLCJvcmlnaW4iLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJ3YXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJhZGRQbGFjZSIsInZhbCIsImFkZE9yaWdpbiIsImFkZFN0b3AiLCJzdG9wIiwibG9jYXRpb24iLCJoYW5kbGVyIiwic2V0T3JpZ2luIiwicG9zaXRpb24iLCJwYW5UbyIsInpvb20iLCJtYXBDb250YWluZXJDbGFzc05hbWUiLCJkaXJlY3Rpb25zIiwibWFya2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ }),

/***/ "(app-client)/./app/UI/Select/Select.tsx":
/*!**********************************!*\
  !*** ./app/UI/Select/Select.tsx ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});