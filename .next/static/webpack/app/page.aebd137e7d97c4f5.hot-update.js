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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Icon/Icon.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Select/Select */ \"(app-client)/./app/UI/Select/Select.tsx\");\n/* harmony import */ var _mui_icons_material_AirplaneTicket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/AirplaneTicket */ \"(app-client)/./node_modules/@mui/icons-material/AirplaneTicket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst libraries = [\n    \"places\"\n];\nfunction Map(param) {\n    let { addRoutes } = param;\n    _s();\n    // const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [originPoint, setOriginPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destinationPoint, setDestinationPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stops, setStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"DRIVING\");\n    const [interRes, setInterRes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [flights, setFlights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //отдельный стейт с объектом original, dest, name, LatLng\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        buildRoute(destinationPoint);\n    }, [\n        stops,\n        mode\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (Object.keys(interRes).length == 2) {\n            handleRoute(interRes);\n            setInterRes({});\n        }\n    }, [\n        interRes\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        }), []);\n    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            disableDefaultUI: true,\n            clickableIcons: false\n        }), []);\n    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRef.current = map, []);\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: libraries\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 72,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 73,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n    //setCenterMap({lat, lng});\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    async function buildRoute(dest) {\n        if (!origin) return;\n        const dirService = new google.maps.DirectionsService();\n        if (mode == \"FLIGHT\") {\n            setFlights([\n                ...flights,\n                {\n                    lat: originPoint,\n                    lng: dest\n                }\n            ]);\n        } else {\n            await dirService.route({\n                origin: originPoint,\n                destination: dest,\n                waypoints: stops,\n                travelMode: mode\n            }, (result, status)=>{\n                if (status === \"OK\" && result) {\n                    setDestination(result);\n                    //addRoutes(result.geocoded_waypoints);\n                    console.log(result);\n                }\n            });\n        }\n    }\n    function buildFlight() {\n    //Polyline drowing\n    }\n    function addPlace(val, locationName) {\n        setInterRes({\n            ...interRes,\n            destination: locationName\n        });\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setDestinationPoint(val);\n        buildRoute(val);\n    }\n    function addOrigin(val, locationName) {\n        setInterRes({\n            ...interRes,\n            start: locationName\n        });\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setOriginPoint(val);\n    }\n    function addStop(val) {\n        let stop = {\n            location: val\n        };\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setStops([\n            ...stops,\n            stop\n        ]);\n    }\n    function addMode(val) {\n        setMode(val);\n        console.log(mode);\n    }\n    function handleRoute(val) {\n        addRoutes(val);\n    }\n    function FlightIcon() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n            lineNumber: 145,\n            columnNumber: 13\n        }, this);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Starting point\",\n                                handler: addOrigin,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Destination point\",\n                                handler: addPlace,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Transit points\",\n                                handler: addStop,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                handler: addMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {\n                    zoom: 10,\n                    center: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 179,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 40\n                            }, this)),\n                        flights && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Polyline, {\n                            path: flights,\n                            options: {\n                                strokeColor: \"#ff2527\",\n                                strokeOpacity: 0.75,\n                                strokeWeight: 5,\n                                icons: [\n                                    {\n                                        icon: _mui_icons_material_AirplaneTicket__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        offset: \"0\",\n                                        repeat: \"20px\"\n                                    }\n                                ]\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"ZL9gALl4tgkju7FBIdmYefCt/z4=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEYsMEVBQWtCQTt3Q0FDeEJ1RixRQUFRO3dDQUNSQyxRQUFRO29DQUNaO2lDQUNIOzRCQUNMOzs7Ozs7Ozs7Ozs7OztJQUtoQjtBQUVKO0dBdEx3QnRGOztRQThDRGYsaUVBQWFBOzs7S0E5Q1plIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9NYXAudHN4P2M5ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlTG9hZFNjcmlwdCwgTWFya2VyLCBEaXJlY3Rpb25zUmVuZGVyZXIsIFBvbHlsaW5lIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdXNlUGxhY2VzQXV0b2NvbXBsZXRlIGZyb20gXCJ1c2UtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgUGxhY2VTZWFyY2ggZnJvbSBcIi4vUGxhY2VTZWFyY2hcIjtcclxuaW1wb3J0IHsgQm94LCBJY29uLCBJbnB1dCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBCYXNpY1NlbGVjdCBmcm9tIFwiLi9VSS9TZWxlY3QvU2VsZWN0XCI7XHJcbmltcG9ydCBBaXJwbGFuZVRpY2tldEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BaXJwbGFuZVRpY2tldCc7XHJcblxyXG5cclxudHlwZSBMYXRMbmdMaXRlcmFsID0gZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbDsgICAgXHJcbnR5cGUgRGlyZWN0aW9uUmVzdWx0ID0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdDtcclxudHlwZSBEaXJlY3Rpb25XYXlwb2ludCA9IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNXYXlwb2ludDtcclxudHlwZSBNYXBPcHRpb25zID0gZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucztcclxudHlwZSBUcmF2ZWxNb2RlID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZTtcclxuXHJcblxyXG5jb25zdCBsaWJyYXJpZXM6c3RyaW5nW10gPSBbXCJwbGFjZXNcIl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoe2FkZFJvdXRlc30pe1xyXG4gICAgLy8gY29uc3QgW2NlbnRlck1hcCwgc2V0Q2VudGVyTWFwXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSk7XHJcbiAgICBjb25zdCBbb2ZmaWNlLCBzZXRPZmZpY2VdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oKTtcclxuICAgIGNvbnN0IFtvcmlnaW5Qb2ludCwgc2V0T3JpZ2luUG9pbnRdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oe2xhdDowLGxuZzowfSk7XHJcbiAgICBjb25zdCBbZGVzdGluYXRpb25Qb2ludCwgc2V0RGVzdGluYXRpb25Qb2ludF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjAsbG5nOjB9KTtcclxuICAgIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGU8RGlyZWN0aW9uUmVzdWx0PigpO1xyXG4gICAgY29uc3QgW3N0b3BzLCBzZXRTdG9wc10gPSB1c2VTdGF0ZTxEaXJlY3Rpb25XYXlwb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbbWFya2Vycywgc2V0TWFya2Vyc10gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsW10+KFtcclxuICAgICAgICAgICAge2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9LFxyXG4gICAgICAgICAgICB7bGF0OjU0LjY2NTE0ODY2NDMzNDc4LCBsbmc6MjEuODE1NTc5ODUyOTYzODF9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgY29uc3RbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiRFJJVklOR1wiKTtcclxuICAgIGNvbnN0W2ludGVyUmVzLCBzZXRJbnRlclJlc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtmbGlnaHRzLCBzZXRGbGlnaHRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcblxyXG4gICAgLy/QvtGC0LTQtdC70YzQvdGL0Lkg0YHRgtC10LnRgiDRgSDQvtCx0YrQtdC60YLQvtC8IG9yaWdpbmFsLCBkZXN0LCBuYW1lLCBMYXRMbmdcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBidWlsZFJvdXRlKGRlc3RpbmF0aW9uUG9pbnQpO1xyXG4gICAgfSxbc3RvcHMsIG1vZGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihPYmplY3Qua2V5cyhpbnRlclJlcykubGVuZ3RoID09IDIpe1xyXG4gICAgICAgICAgICBoYW5kbGVSb3V0ZShpbnRlclJlcyk7XHJcbiAgICAgICAgICAgIHNldEludGVyUmVzKHt9KTtcclxuICAgICAgICB9IFxyXG4gICAgfSxbaW50ZXJSZXNdKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmPEdvb2dsZU1hcD4oKTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXIgPSB1c2VNZW1vPExhdExuZ0xpdGVyYWw+KFxyXG4gICAgICAgICgpID0+ICh7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30pLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW88TWFwT3B0aW9ucz4oXHJcbiAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICBjbGlja2FibGVJY29uczogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW11cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBvbkxvYWQgPSB1c2VDYWxsYmFjaygobWFwKT0+KG1hcFJlZi5jdXJyZW50PW1hcCksW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCB7aXNMb2FkZWR9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICAgICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQX0FQSV9LRVksXHJcbiAgICAgICAgbGlicmFyaWVzOiBsaWJyYXJpZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZighaXNMb2FkZWQpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICByZXR1cm4gPE1hcExvY2FsLz5cclxuXHJcbiAgICBmdW5jdGlvbiBDYWxjQ2VudGVyKCl7XHJcbiAgICAgICAgbGV0IGxhdCA9IChtYXJrZXJzWzBdLmxhdCArIG1hcmtlcnNbMV0ubGF0WzFdKSAvIG1hcmtlcnMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsbmcgPSAobWFya2Vyc1swXS5sbmcgKyBtYXJrZXJzWzFdLmxuZ1sxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICAvL3NldENlbnRlck1hcCh7bGF0LCBsbmd9KTtcclxuICAgIH1cclxuICBcclxuICAgIC8vVE9ETzogYWRkIHRyYW5zaXQgcG9pbnRzIC8gVHJhdmVsTW9kZS5UUkFOU0lUXHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUm91dGUgKGRlc3Q6IExhdExuZ0xpdGVyYWwpIHtcclxuXHJcbiAgICAgICAgaWYoIW9yaWdpbikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpclNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihtb2RlPT1cIkZMSUdIVFwiKXtcclxuICAgICAgICAgICAgc2V0RmxpZ2h0cyhbLi4uZmxpZ2h0cywge2xhdDpvcmlnaW5Qb2ludCwgbG5nOiBkZXN0fV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhd2FpdCBkaXJTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luUG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IGRlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnRzOiBzdG9wcyxcclxuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiBtb2RlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3RhdHVzPT09XCJPS1wiICYmIHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc3RpbmF0aW9uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkUm91dGVzKHJlc3VsdC5nZW9jb2RlZF93YXlwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZEZsaWdodCgpe1xyXG4gICAgICAgIC8vUG9seWxpbmUgZHJvd2luZ1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFBsYWNlKHZhbCwgbG9jYXRpb25OYW1lKXtcclxuICAgICAgICBzZXRJbnRlclJlcyh7Li4uaW50ZXJSZXMsIGRlc3RpbmF0aW9uOiBsb2NhdGlvbk5hbWV9KTtcclxuICAgICAgICBzZXRNYXJrZXJzKFsuLi5tYXJrZXJzLCB2YWxdKTtcclxuICAgICAgICBzZXREZXN0aW5hdGlvblBvaW50KHZhbCk7XHJcbiAgICAgICAgYnVpbGRSb3V0ZSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE9yaWdpbih2YWwsIGxvY2F0aW9uTmFtZSl7XHJcbiAgICAgICAgc2V0SW50ZXJSZXMoey4uLmludGVyUmVzLCBzdGFydDogbG9jYXRpb25OYW1lfSk7XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgc2V0T3JpZ2luUG9pbnQodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTdG9wKHZhbCl7XHJcbiAgICAgICAgbGV0IHN0b3AgPSB7bG9jYXRpb246IHZhbH07XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgc2V0U3RvcHMoWy4uLnN0b3BzLCBzdG9wXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTW9kZSh2YWw6IFRyYXZlbE1vZGUpe1xyXG4gICAgICAgIHNldE1vZGUodmFsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSb3V0ZSh2YWwpe1xyXG4gICAgICAgIGFkZFJvdXRlcyh2YWwpO1xyXG4gICAgfSAgXHJcblxyXG4gICAgZnVuY3Rpb24gRmxpZ2h0SWNvbigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEljb24gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWFwTG9jYWwoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleERpcmVjdGlvbj17XCJyb3dcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0gLypzeD17e3dpZHRoOjUwMH19Ki8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlU2VhcmNoIHBsYWNlaG9sZGVyPVwiU3RhcnRpbmcgcG9pbnRcIiBoYW5kbGVyPXthZGRPcmlnaW59IHNldE9yaWdpbj17YWRkT3JpZ2lufSBzZXRPZmZpY2U9eyhwb3NpdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LnBhblRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlU2VhcmNoIHBsYWNlaG9sZGVyPVwiRGVzdGluYXRpb24gcG9pbnRcIiBoYW5kbGVyPXthZGRQbGFjZX0gc2V0T3JpZ2luPXthZGRPcmlnaW59IHNldE9mZmljZT17KHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2VTZWFyY2ggcGxhY2Vob2xkZXI9XCJUcmFuc2l0IHBvaW50c1wiIGhhbmRsZXI9e2FkZFN0b3B9IHNldE9yaWdpbj17YWRkT3JpZ2lufSBzZXRPZmZpY2U9eyhwb3NpdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LnBhblRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9fS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1NlbGVjdCBoYW5kbGVyPXthZGRNb2RlfS8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgICAgICAgICB6b29tPXsxMH1cclxuICAgICAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICAgICAgbWFwQ29udGFpbmVyQ2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZXN0aW5hdGlvbiAmJiA8RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2Rlc3RpbmF0aW9ufS8+fVxyXG4gICAgICAgICAgICAgICAgey8qIHtkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5tYXAoKGl0ZW0pPT48RGlyZWN0aW9uc1JlbmRlcmVyIGRpcmVjdGlvbnM9e2l0ZW19IC8+KX0gKi99XHJcbiAgICAgICAgICAgICAgICB7bWFya2Vycy5tYXAoKG1hcmtlcik9PjxNYXJrZXIgcG9zaXRpb249e21hcmtlcn0gLz4pfVxyXG5cclxuICAgICAgICAgICAgICAgIHtmbGlnaHRzICYmIDxQb2x5bGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e2ZsaWdodHN9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjZmYyNTI3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBBaXJwbGFuZVRpY2tldEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IFwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwidXNlTG9hZFNjcmlwdCIsIk1hcmtlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsIlBvbHlsaW5lIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJQbGFjZVNlYXJjaCIsIkJveCIsIkljb24iLCJCYXNpY1NlbGVjdCIsIkFpcnBsYW5lVGlja2V0SWNvbiIsImxpYnJhcmllcyIsIk1hcCIsImFkZFJvdXRlcyIsIm9mZmljZSIsInNldE9mZmljZSIsIm9yaWdpblBvaW50Iiwic2V0T3JpZ2luUG9pbnQiLCJsYXQiLCJsbmciLCJkZXN0aW5hdGlvblBvaW50Iiwic2V0RGVzdGluYXRpb25Qb2ludCIsImRlc3RpbmF0aW9uIiwic2V0RGVzdGluYXRpb24iLCJzdG9wcyIsInNldFN0b3BzIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJtb2RlIiwic2V0TW9kZSIsImludGVyUmVzIiwic2V0SW50ZXJSZXMiLCJmbGlnaHRzIiwic2V0RmxpZ2h0cyIsImJ1aWxkUm91dGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaGFuZGxlUm91dGUiLCJtYXBSZWYiLCJjZW50ZXIiLCJvcHRpb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImNsaWNrYWJsZUljb25zIiwib25Mb2FkIiwibWFwIiwiY3VycmVudCIsImlzTG9hZGVkIiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBfQVBJX0tFWSIsImRpdiIsIk1hcExvY2FsIiwiQ2FsY0NlbnRlciIsImRlc3QiLCJvcmlnaW4iLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJ3YXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwicmVzdWx0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImJ1aWxkRmxpZ2h0IiwiYWRkUGxhY2UiLCJ2YWwiLCJsb2NhdGlvbk5hbWUiLCJhZGRPcmlnaW4iLCJzdGFydCIsImFkZFN0b3AiLCJzdG9wIiwibG9jYXRpb24iLCJhZGRNb2RlIiwiRmxpZ2h0SWNvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlciIsInNldE9yaWdpbiIsInBvc2l0aW9uIiwicGFuVG8iLCJ6b29tIiwibWFwQ29udGFpbmVyQ2xhc3NOYW1lIiwiZGlyZWN0aW9ucyIsIm1hcmtlciIsInBhdGgiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJpY29ucyIsImljb24iLCJvZmZzZXQiLCJyZXBlYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});