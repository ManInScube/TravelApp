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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Icon/Icon.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/Select/Select */ \"(app-client)/./app/UI/Select/Select.tsx\");\n/* harmony import */ var _mui_icons_material_AirplaneTicket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/AirplaneTicket */ \"(app-client)/./node_modules/@mui/icons-material/AirplaneTicket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst libraries = [\n    \"places\"\n];\nfunction Map(param) {\n    let { addRoutes } = param;\n    _s();\n    // const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [originPoint, setOriginPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destinationPoint, setDestinationPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stops, setStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"DRIVING\");\n    const [interRes, setInterRes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [flights, setFlight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //отдельный стейт с объектом original, dest, name, LatLng\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        buildRoute(destinationPoint);\n    }, [\n        stops,\n        mode\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (Object.keys(interRes).length == 2) {\n            handleRoute(interRes);\n            setInterRes({});\n        }\n    }, [\n        interRes\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        }), []);\n    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            disableDefaultUI: true,\n            clickableIcons: false\n        }), []);\n    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRef.current = map, []);\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: libraries\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 72,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 73,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n    //setCenterMap({lat, lng});\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    async function buildRoute(dest) {\n        if (!origin) return;\n        const dirService = new google.maps.DirectionsService();\n        await dirService.route({\n            origin: originPoint,\n            destination: dest,\n            waypoints: stops,\n            travelMode: mode\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n                //addRoutes(result.geocoded_waypoints);\n                console.log(result);\n            }\n        });\n    }\n    function buildFlight() {\n    //Polyline drowing\n    }\n    function addPlace(val, locationName) {\n        setInterRes({\n            ...interRes,\n            destination: locationName\n        });\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setDestinationPoint(val);\n        buildRoute(val);\n    }\n    function addOrigin(val, locationName) {\n        setInterRes({\n            ...interRes,\n            start: locationName\n        });\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setOriginPoint(val);\n    }\n    function addStop(val) {\n        let stop = {\n            location: val\n        };\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setStops([\n            ...stops,\n            stop\n        ]);\n    }\n    function addMode(val) {\n        setMode(val);\n        console.log(mode);\n    }\n    function handleRoute(val) {\n        addRoutes(val);\n    }\n    function FlightIcon() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n            lineNumber: 140,\n            columnNumber: 13\n        }, this);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Starting point\",\n                                handler: addOrigin,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Destination point\",\n                                handler: addPlace,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                placeholder: \"Transit points\",\n                                handler: addStop,\n                                setOrigin: addOrigin,\n                                setOffice: (position)=>{\n                                    var _mapRef_current;\n                                    setOffice(position);\n                                    (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Select_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                handler: addMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 147,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {\n                    zoom: 10,\n                    center: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 179,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 40\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Polyline, {\n                            path: markers,\n                            options: {\n                                strokeColor: \"#ff2527\",\n                                strokeOpacity: 0.75,\n                                strokeWeight: 5,\n                                icons: [\n                                    {\n                                        icon: _mui_icons_material_AirplaneTicket__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        offset: \"0\",\n                                        repeat: \"20px\"\n                                    }\n                                ]\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"s9hS+56JqkAMMhbRQkn2MIOkQTQ=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL01hcC50c3g/YzllMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VMb2FkU2NyaXB0LCBNYXJrZXIsIERpcmVjdGlvbnNSZW5kZXJlciwgUG9seWxpbmUgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB1c2VQbGFjZXNBdXRvY29tcGxldGUgZnJvbSBcInVzZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBQbGFjZVNlYXJjaCBmcm9tIFwiLi9QbGFjZVNlYXJjaFwiO1xyXG5pbXBvcnQgeyBCb3gsIEljb24sIElucHV0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gXCIuL1VJL1NlbGVjdC9TZWxlY3RcIjtcclxuaW1wb3J0IEFpcnBsYW5lVGlja2V0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FpcnBsYW5lVGlja2V0JztcclxuXHJcblxyXG50eXBlIExhdExuZ0xpdGVyYWwgPSBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsOyAgICBcclxudHlwZSBEaXJlY3Rpb25SZXN1bHQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0O1xyXG50eXBlIERpcmVjdGlvbldheXBvaW50ID0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1dheXBvaW50O1xyXG50eXBlIE1hcE9wdGlvbnMgPSBnb29nbGUubWFwcy5NYXBPcHRpb25zO1xyXG50eXBlIFRyYXZlbE1vZGUgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlO1xyXG5cclxuXHJcbmNvbnN0IGxpYnJhcmllczpzdHJpbmdbXSA9IFtcInBsYWNlc1wiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCh7YWRkUm91dGVzfSl7XHJcbiAgICAvLyBjb25zdCBbY2VudGVyTWFwLCBzZXRDZW50ZXJNYXBdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oe2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9KTtcclxuICAgIGNvbnN0IFtvZmZpY2UsIHNldE9mZmljZV0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPigpO1xyXG4gICAgY29uc3QgW29yaWdpblBvaW50LCBzZXRPcmlnaW5Qb2ludF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjAsbG5nOjB9KTtcclxuICAgIGNvbnN0IFtkZXN0aW5hdGlvblBvaW50LCBzZXREZXN0aW5hdGlvblBvaW50XSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6MCxsbmc6MH0pO1xyXG4gICAgY29uc3QgW2Rlc3RpbmF0aW9uLCBzZXREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZTxEaXJlY3Rpb25SZXN1bHQ+KCk7XHJcbiAgICBjb25zdCBbc3RvcHMsIHNldFN0b3BzXSA9IHVzZVN0YXRlPERpcmVjdGlvbldheXBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWxbXT4oW1xyXG4gICAgICAgICAgICB7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30sXHJcbiAgICAgICAgICAgIHtsYXQ6NTQuNjY1MTQ4NjY0MzM0NzgsIGxuZzoyMS44MTU1Nzk4NTI5NjM4MX1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBjb25zdFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiRFJJVklOR1wiKTtcclxuICAgIGNvbnN0W2ludGVyUmVzLCBzZXRJbnRlclJlc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdFtmbGlnaHRzLCBzZXRGbGlnaHRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8v0L7RgtC00LXQu9GM0L3Ri9C5INGB0YLQtdC50YIg0YEg0L7QsdGK0LXQutGC0L7QvCBvcmlnaW5hbCwgZGVzdCwgbmFtZSwgTGF0TG5nXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYnVpbGRSb3V0ZShkZXN0aW5hdGlvblBvaW50KTtcclxuICAgIH0sW3N0b3BzLCBtb2RlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoaW50ZXJSZXMpLmxlbmd0aCA9PSAyKXtcclxuICAgICAgICAgICAgaGFuZGxlUm91dGUoaW50ZXJSZXMpO1xyXG4gICAgICAgICAgICBzZXRJbnRlclJlcyh7fSk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sW2ludGVyUmVzXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZjxHb29nbGVNYXA+KCk7XHJcblxyXG4gICAgY29uc3QgY2VudGVyID0gdXNlTWVtbzxMYXRMbmdMaXRlcmFsPihcclxuICAgICAgICAoKSA9PiAoe2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9KSxcclxuICAgICAgICBbXVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vPE1hcE9wdGlvbnM+KFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2FkID0gdXNlQ2FsbGJhY2soKG1hcCk9PihtYXBSZWYuY3VycmVudD1tYXApLFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGVkfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUF9BUElfS0VZLFxyXG4gICAgICAgIGxpYnJhcmllczogbGlicmFyaWVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWlzTG9hZGVkKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgcmV0dXJuIDxNYXBMb2NhbC8+XHJcblxyXG4gICAgZnVuY3Rpb24gQ2FsY0NlbnRlcigpe1xyXG4gICAgICAgIGxldCBsYXQgPSAobWFya2Vyc1swXS5sYXQgKyBtYXJrZXJzWzFdLmxhdFsxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICBsZXQgbG5nID0gKG1hcmtlcnNbMF0ubG5nICsgbWFya2Vyc1sxXS5sbmdbMV0pIC8gbWFya2Vycy5sZW5ndGg7XHJcbiAgICAgICAgLy9zZXRDZW50ZXJNYXAoe2xhdCwgbG5nfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL1RPRE86IGFkZCB0cmFuc2l0IHBvaW50cyAvIFRyYXZlbE1vZGUuVFJBTlNJVFxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBidWlsZFJvdXRlIChkZXN0OiBMYXRMbmdMaXRlcmFsKSB7XHJcblxyXG4gICAgICAgIGlmKCFvcmlnaW4pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkaXJTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZGlyU2VydmljZS5yb3V0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW5Qb2ludCxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0LFxyXG4gICAgICAgICAgICAgICAgd2F5cG9pbnRzOiBzdG9wcyxcclxuICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IG1vZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXM9PT1cIk9LXCIgJiYgcmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZXN0aW5hdGlvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkUm91dGVzKHJlc3VsdC5nZW9jb2RlZF93YXlwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRGbGlnaHQoKXtcclxuICAgICAgICAvL1BvbHlsaW5lIGRyb3dpbmdcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQbGFjZSh2YWwsIGxvY2F0aW9uTmFtZSl7XHJcbiAgICAgICAgc2V0SW50ZXJSZXMoey4uLmludGVyUmVzLCBkZXN0aW5hdGlvbjogbG9jYXRpb25OYW1lfSk7XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgc2V0RGVzdGluYXRpb25Qb2ludCh2YWwpO1xyXG4gICAgICAgIGJ1aWxkUm91dGUodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRPcmlnaW4odmFsLCBsb2NhdGlvbk5hbWUpe1xyXG4gICAgICAgIHNldEludGVyUmVzKHsuLi5pbnRlclJlcywgc3RhcnQ6IGxvY2F0aW9uTmFtZX0pO1xyXG4gICAgICAgIHNldE1hcmtlcnMoWy4uLm1hcmtlcnMsIHZhbF0pO1xyXG4gICAgICAgIHNldE9yaWdpblBvaW50KHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU3RvcCh2YWwpe1xyXG4gICAgICAgIGxldCBzdG9wID0ge2xvY2F0aW9uOiB2YWx9O1xyXG4gICAgICAgIHNldE1hcmtlcnMoWy4uLm1hcmtlcnMsIHZhbF0pO1xyXG4gICAgICAgIHNldFN0b3BzKFsuLi5zdG9wcywgc3RvcF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE1vZGUodmFsOiBUcmF2ZWxNb2RlKXtcclxuICAgICAgICBzZXRNb2RlKHZhbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUm91dGUodmFsKXtcclxuICAgICAgICBhZGRSb3V0ZXModmFsKTtcclxuICAgIH0gIFxyXG5cclxuICAgIGZ1bmN0aW9uIEZsaWdodEljb24oKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxJY29uIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1hcExvY2FsKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxQbGFjZVNlYXJjaCBhZGRQbGFjZT17YWRkUGxhY2V9IHNldE9yaWdpbj17YWRkT3JpZ2lufSBzZXRPZmZpY2U9eyhwb3NpdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRPZmZpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9fS8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhEaXJlY3Rpb249e1wicm93XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9IC8qc3g9e3t3aWR0aDo1MDB9fSovPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZVNlYXJjaCBwbGFjZWhvbGRlcj1cIlN0YXJ0aW5nIHBvaW50XCIgaGFuZGxlcj17YWRkT3JpZ2lufSBzZXRPcmlnaW49e2FkZE9yaWdpbn0gc2V0T2ZmaWNlPXsocG9zaXRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9mZmljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2VTZWFyY2ggcGxhY2Vob2xkZXI9XCJEZXN0aW5hdGlvbiBwb2ludFwiIGhhbmRsZXI9e2FkZFBsYWNlfSBzZXRPcmlnaW49e2FkZE9yaWdpbn0gc2V0T2ZmaWNlPXsocG9zaXRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9mZmljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50Py5wYW5Ubyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZVNlYXJjaCBwbGFjZWhvbGRlcj1cIlRyYW5zaXQgcG9pbnRzXCIgaGFuZGxlcj17YWRkU3RvcH0gc2V0T3JpZ2luPXthZGRPcmlnaW59IHNldE9mZmljZT17KHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhc2ljU2VsZWN0IGhhbmRsZXI9e2FkZE1vZGV9Lz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgICAgIHpvb209ezEwfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgICAgICAgICBtYXBDb250YWluZXJDbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uICYmIDxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17ZGVzdGluYXRpb259Lz59XHJcbiAgICAgICAgICAgICAgICB7Lyoge2Rlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm1hcCgoaXRlbSk9PjxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17aXRlbX0gLz4pfSAqL31cclxuICAgICAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKT0+PE1hcmtlciBwb3NpdGlvbj17bWFya2VyfSAvPil9XHJcblxyXG4gICAgICAgICAgICAgICAgPFBvbHlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aD17bWFya2Vyc30gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiNmZjI1MjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC43NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEFpcnBsYW5lVGlja2V0SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdDogXCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIkdvb2dsZU1hcCIsInVzZUxvYWRTY3JpcHQiLCJNYXJrZXIiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJQb2x5bGluZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiUGxhY2VTZWFyY2giLCJCb3giLCJJY29uIiwiQmFzaWNTZWxlY3QiLCJBaXJwbGFuZVRpY2tldEljb24iLCJsaWJyYXJpZXMiLCJNYXAiLCJhZGRSb3V0ZXMiLCJvZmZpY2UiLCJzZXRPZmZpY2UiLCJvcmlnaW5Qb2ludCIsInNldE9yaWdpblBvaW50IiwibGF0IiwibG5nIiwiZGVzdGluYXRpb25Qb2ludCIsInNldERlc3RpbmF0aW9uUG9pbnQiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwic3RvcHMiLCJzZXRTdG9wcyIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwibW9kZSIsInNldE1vZGUiLCJpbnRlclJlcyIsInNldEludGVyUmVzIiwiZmxpZ2h0cyIsInNldEZsaWdodCIsImJ1aWxkUm91dGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaGFuZGxlUm91dGUiLCJtYXBSZWYiLCJjZW50ZXIiLCJvcHRpb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImNsaWNrYWJsZUljb25zIiwib25Mb2FkIiwibWFwIiwiY3VycmVudCIsImlzTG9hZGVkIiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBfQVBJX0tFWSIsImRpdiIsIk1hcExvY2FsIiwiQ2FsY0NlbnRlciIsImRlc3QiLCJvcmlnaW4iLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJ3YXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwicmVzdWx0Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImJ1aWxkRmxpZ2h0IiwiYWRkUGxhY2UiLCJ2YWwiLCJsb2NhdGlvbk5hbWUiLCJhZGRPcmlnaW4iLCJzdGFydCIsImFkZFN0b3AiLCJzdG9wIiwibG9jYXRpb24iLCJhZGRNb2RlIiwiRmxpZ2h0SWNvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlciIsInNldE9yaWdpbiIsInBvc2l0aW9uIiwicGFuVG8iLCJ6b29tIiwibWFwQ29udGFpbmVyQ2xhc3NOYW1lIiwiZGlyZWN0aW9ucyIsIm1hcmtlciIsInBhdGgiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJpY29ucyIsImljb24iLCJvZmZzZXQiLCJyZXBlYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});