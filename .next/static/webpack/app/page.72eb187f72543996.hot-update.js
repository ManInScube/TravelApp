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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Map() {\n    _s();\n    // const [centerMap, setCenterMap] = useState<LatLngLiteral>({lat:54.702800971968976, lng: 20.74240559049013});\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [originPoint, setOriginPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 0,\n        lng: 0\n    });\n    const [destinationPoint, setDestinationPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stops, setStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    // useEffect(()=>{\n    //     //CalcCenter();\n    //     buildRoute;\n    // }, [destination])\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        }), []);\n    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            disableDefaultUI: true,\n            clickableIcons: false\n        }), []);\n    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRef.current = map, []);\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: [\n            \"places\"\n        ]\n    });\n    if (!isLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 52,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapLocal, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n        lineNumber: 53,\n        columnNumber: 12\n    }, this);\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n    //setCenterMap({lat, lng});\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    async function buildRoute(dest) {\n        console.log(\"before\");\n        //if(!destination) return;\n        if (!origin) return;\n        console.log(\"after\");\n        const dirService = new google.maps.DirectionsService();\n        //TODO: if markers > 1\n        await dirService.route({\n            origin: originPoint,\n            destination: dest,\n            // waypoints: [\n            //     {location: {lat: 57.24047038843604, lng: 37.8380564694735}}\n            // ],\n            waypoints: stops,\n            travelMode: google.maps.TravelMode.DRIVING\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n                console.log(result);\n            }\n        });\n    }\n    function addPlace(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        buildRoute(val);\n    }\n    function addOrigin(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setOriginPoint(val);\n    }\n    function addStop(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n        setStops([\n            ...stops,\n            val\n        ]);\n    }\n    function MapLocal() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            handler: addOrigin,\n                            setOrigin: addOrigin\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            handler: addPlace,\n                            setOrigin: addOrigin\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                    zoom: 10,\n                    center: center,\n                    mapContainerClassName: \"map-container\",\n                    options: options,\n                    onLoad: onLoad,\n                    children: [\n                        destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.DirectionsRenderer, {\n                            directions: destination\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 33\n                        }, this),\n                        markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                position: marker\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 40\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Map, \"t22nRI17WnTo/PRg6NoWYnl5pI8=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEY7QUFDdEI7QUFHaEM7QUFRekIsU0FBU1M7O0lBQ3BCLCtHQUErRztJQUMvRyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBZ0I7UUFBQ1EsS0FBSTtRQUFFQyxLQUFJO0lBQUM7SUFDMUUsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHWCwrQ0FBUUE7SUFDeEQsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQTtJQUM5QyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQVEsRUFBRTtJQUM1QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBa0I7UUFDaEQ7WUFBQ1EsS0FBSTtZQUFvQkMsS0FBSztRQUFpQjtRQUMvQztZQUFDRCxLQUFJO1lBQW1CQyxLQUFJO1FBQWlCO0tBQUU7SUFHL0Msa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBRTVCLE1BQU1TLFNBQVNuQiw2Q0FBTUE7SUFDckIsTUFBTW9CLFNBQVNsQiw4Q0FBT0EsQ0FDbEIsSUFBTztZQUFDTyxLQUFJO1lBQW9CQyxLQUFLO1FBQWlCLElBQ3RELEVBQUU7SUFFTixNQUFNVyxVQUFVbkIsOENBQU9BLENBQ25CLElBQU87WUFDTG9CLGtCQUFrQjtZQUNsQkMsZ0JBQWdCO1FBQ2xCLElBQ0EsRUFBRTtJQUdOLE1BQU1DLFNBQVN6QixrREFBV0EsQ0FBQyxDQUFDMEIsTUFBT04sT0FBT08sVUFBUUQsS0FBSyxFQUFFO0lBR3pELE1BQU0sRUFBQ0UsUUFBUSxFQUFDLEdBQUcvQixxRUFBYUEsQ0FBQztRQUM3QmdDLGtCQUFrQkMseUNBQW1DRTtRQUNyREMsV0FBVztZQUFDO1NBQVM7SUFDekI7SUFFQSxJQUFHLENBQUNMLFVBQVUscUJBQU8sOERBQUNNO2tCQUFJOzs7Ozs7SUFDMUIscUJBQU8sOERBQUNDOzs7OztJQUVSLFNBQVNDO1FBQ0wsSUFBSTFCLE1BQU0sQ0FBQ1EsT0FBTyxDQUFDLEVBQUUsQ0FBQ1IsTUFBTVEsT0FBTyxDQUFDLEVBQUUsQ0FBQ1IsR0FBRyxDQUFDLEVBQUUsSUFBSVEsUUFBUW1CO1FBQ3pELElBQUkxQixNQUFNLENBQUNPLE9BQU8sQ0FBQyxFQUFFLENBQUNQLE1BQU1PLE9BQU8sQ0FBQyxFQUFFLENBQUNQLEdBQUcsQ0FBQyxFQUFFLElBQUlPLFFBQVFtQjtJQUN6RCwyQkFBMkI7SUFDL0I7SUFJQSwrQ0FBK0M7SUFFL0MsZUFBZUMsV0FBWUMsSUFBbUI7UUFDMUNDLFFBQVFDLElBQUk7UUFFWiwwQkFBMEI7UUFDMUIsSUFBRyxDQUFDQyxRQUFRO1FBRVpGLFFBQVFDLElBQUk7UUFDWixNQUFNRSxhQUFhLElBQUlDLE9BQU9DLEtBQUtDO1FBRW5DLHNCQUFzQjtRQUV0QixNQUFNSCxXQUFXSSxNQUNiO1lBQ0lMLFFBQVFsQztZQUNSTSxhQUFheUI7WUFDYixlQUFlO1lBQ2Ysa0VBQWtFO1lBQ2xFLEtBQUs7WUFDTFMsV0FBV2hDO1lBQ1hpQyxZQUFZTCxPQUFPQyxLQUFLSyxXQUFXQztRQUN2QyxHQUNBLENBQUNDLFFBQVFDO1lBQ0wsSUFBR0EsV0FBUyxRQUFRRCxRQUFPO2dCQUN2QnJDLGVBQWVxQztnQkFDZlosUUFBUUMsSUFBSVc7WUFDaEI7UUFDSjtJQUVSO0lBR0EsU0FBU0UsU0FBU0MsR0FBRztRQUNqQnBDLFdBQVc7ZUFBSUQ7WUFBU3FDO1NBQUk7UUFDNUJqQixXQUFXaUI7SUFDZjtJQUVBLFNBQVNDLFVBQVVELEdBQUc7UUFDbEJwQyxXQUFXO2VBQUlEO1lBQVNxQztTQUFJO1FBQzVCOUMsZUFBZThDO0lBQ25CO0lBRUEsU0FBU0UsUUFBUUYsR0FBTztRQUNwQnBDLFdBQVc7ZUFBSUQ7WUFBU3FDO1NBQUk7UUFDNUJ0QyxTQUFTO2VBQUlEO1lBQU91QztTQUFJO0lBQzVCO0lBRUEsU0FBU3BCO1FBQ0wscUJBQ0E7OzhCQUNJLDhEQUFDRDs7c0NBTUcsOERBQUM5QixvREFBV0E7NEJBQUNzRCxTQUFTRjs0QkFBV0csV0FBV0g7Ozs7OztzQ0FFNUMsOERBQUNwRCxvREFBV0E7NEJBQUNzRCxTQUFTSjs0QkFBVUssV0FBV0g7Ozs7Ozs7Ozs7Ozs4QkFJL0MsOERBQUM1RCw2REFBU0E7b0JBQ05nRSxNQUFNO29CQUNOdkMsUUFBUUE7b0JBQ1J3Qyx1QkFBc0I7b0JBQ3RCdkMsU0FBU0E7b0JBQ1RHLFFBQVFBOzt3QkFFUFgsNkJBQWUsOERBQUNmLHNFQUFrQkE7NEJBQUMrRCxZQUFZaEQ7Ozs7Ozt3QkFFL0NJLFFBQVFRLElBQUksQ0FBQ3FDLHVCQUFTLDhEQUFDakUsMERBQU1BO2dDQUFDa0UsVUFBVUQ7Ozs7Ozs7Ozs7Ozs7O0lBSXJEO0FBRUo7R0EvSHdCMUQ7O1FBaUNEUixpRUFBYUE7OztLQWpDWlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL01hcC50c3g/YzllMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VMb2FkU2NyaXB0LCBNYXJrZXIsIERpcmVjdGlvbnNSZW5kZXJlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tIFwidXNlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFBsYWNlU2VhcmNoIGZyb20gXCIuL1BsYWNlU2VhcmNoXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbnR5cGUgTGF0TG5nTGl0ZXJhbCA9IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw7ICAgIFxyXG50eXBlIERpcmVjdGlvblJlc3VsdCA9IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZXN1bHQ7XHJcbnR5cGUgRGlyZWN0aW9uV2F5cG9pbnQgPSBnb29nbGUubWFwcy5EaXJlY3Rpb25zV2F5cG9pbnQ7XHJcbnR5cGUgTWFwT3B0aW9ucyA9IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKXtcclxuICAgIC8vIGNvbnN0IFtjZW50ZXJNYXAsIHNldENlbnRlck1hcF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30pO1xyXG4gICAgY29uc3QgW29mZmljZSwgc2V0T2ZmaWNlXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KCk7XHJcbiAgICBjb25zdCBbb3JpZ2luUG9pbnQsIHNldE9yaWdpblBvaW50XSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KHtsYXQ6MCxsbmc6MH0pO1xyXG4gICAgY29uc3QgW2Rlc3RpbmF0aW9uUG9pbnQsIHNldERlc3RpbmF0aW9uUG9pbnRdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oKTtcclxuICAgIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGU8RGlyZWN0aW9uUmVzdWx0PigpO1xyXG4gICAgY29uc3QgW3N0b3BzLCBzZXRTdG9wc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gICAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbFtdPihbXHJcbiAgICAgICAgICAgIHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSxcclxuICAgICAgICAgICAge2xhdDo1NC42NjUxNDg2NjQzMzQ3OCwgbG5nOjIxLjgxNTU3OTg1Mjk2MzgxfV1cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgLy8gICAgIC8vQ2FsY0NlbnRlcigpO1xyXG4gICAgICAgICAgICAvLyAgICAgYnVpbGRSb3V0ZTtcclxuICAgICAgICAgICAgLy8gfSwgW2Rlc3RpbmF0aW9uXSlcclxuICAgIFxyXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmPEdvb2dsZU1hcD4oKTtcclxuICAgIGNvbnN0IGNlbnRlciA9IHVzZU1lbW88TGF0TG5nTGl0ZXJhbD4oXHJcbiAgICAgICAgKCkgPT4gKHtsYXQ6NTQuNzAyODAwOTcxOTY4OTc2LCBsbmc6IDIwLjc0MjQwNTU5MDQ5MDEzfSksXHJcbiAgICAgICAgW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vPE1hcE9wdGlvbnM+KFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2FkID0gdXNlQ2FsbGJhY2soKG1hcCk9PihtYXBSZWYuY3VycmVudD1tYXApLFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGVkfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUF9BUElfS0VZLFxyXG4gICAgICAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIWlzTG9hZGVkKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgcmV0dXJuIDxNYXBMb2NhbC8+XHJcblxyXG4gICAgZnVuY3Rpb24gQ2FsY0NlbnRlcigpe1xyXG4gICAgICAgIGxldCBsYXQgPSAobWFya2Vyc1swXS5sYXQgKyBtYXJrZXJzWzFdLmxhdFsxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICBsZXQgbG5nID0gKG1hcmtlcnNbMF0ubG5nICsgbWFya2Vyc1sxXS5sbmdbMV0pIC8gbWFya2Vycy5sZW5ndGg7XHJcbiAgICAgICAgLy9zZXRDZW50ZXJNYXAoe2xhdCwgbG5nfSk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxuICAgIC8vVE9ETzogYWRkIHRyYW5zaXQgcG9pbnRzIC8gVHJhdmVsTW9kZS5UUkFOU0lUXHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUm91dGUgKGRlc3Q6IExhdExuZ0xpdGVyYWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcclxuXHJcbiAgICAgICAgLy9pZighZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBpZighb3JpZ2luKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICBjb25zdCBkaXJTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogaWYgbWFya2VycyA+IDFcclxuXHJcbiAgICAgICAgYXdhaXQgZGlyU2VydmljZS5yb3V0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW5Qb2ludCxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0LFxyXG4gICAgICAgICAgICAgICAgLy8gd2F5cG9pbnRzOiBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAge2xvY2F0aW9uOiB7bGF0OiA1Ny4yNDA0NzAzODg0MzYwNCwgbG5nOiAzNy44MzgwNTY0Njk0NzM1fX1cclxuICAgICAgICAgICAgICAgIC8vIF0sXHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludHM6IHN0b3BzLFxyXG4gICAgICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdHVzPT09XCJPS1wiICYmIHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVzdGluYXRpb24ocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFBsYWNlKHZhbCl7XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgYnVpbGRSb3V0ZSh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE9yaWdpbih2YWwpe1xyXG4gICAgICAgIHNldE1hcmtlcnMoWy4uLm1hcmtlcnMsIHZhbF0pO1xyXG4gICAgICAgIHNldE9yaWdpblBvaW50KHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU3RvcCh2YWw6YW55KXtcclxuICAgICAgICBzZXRNYXJrZXJzKFsuLi5tYXJrZXJzLCB2YWxdKTtcclxuICAgICAgICBzZXRTdG9wcyhbLi4uc3RvcHMsIHZhbF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1hcExvY2FsKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPFBsYWNlU2VhcmNoIGFkZFBsYWNlPXthZGRQbGFjZX0gc2V0T3JpZ2luPXthZGRPcmlnaW59IHNldE9mZmljZT17KHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE9mZmljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwUmVmLmN1cnJlbnQ/LnBhblRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIH19Lz4gKi99XHJcbiAgICAgICAgICAgICAgICA8UGxhY2VTZWFyY2ggaGFuZGxlcj17YWRkT3JpZ2lufSBzZXRPcmlnaW49e2FkZE9yaWdpbn0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYWNlU2VhcmNoIGhhbmRsZXI9e2FkZFBsYWNlfSBzZXRPcmlnaW49e2FkZE9yaWdpbn0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgICAgICAgIHpvb209ezEwfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgICAgICAgICBtYXBDb250YWluZXJDbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uICYmIDxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17ZGVzdGluYXRpb259Lz59XHJcbiAgICAgICAgICAgICAgICB7Lyoge2Rlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm1hcCgoaXRlbSk9PjxEaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17aXRlbX0gLz4pfSAqL31cclxuICAgICAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKT0+PE1hcmtlciBwb3NpdGlvbj17bWFya2VyfSAvPil9XHJcbiAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwidXNlTG9hZFNjcmlwdCIsIk1hcmtlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiUGxhY2VTZWFyY2giLCJNYXAiLCJvZmZpY2UiLCJzZXRPZmZpY2UiLCJvcmlnaW5Qb2ludCIsInNldE9yaWdpblBvaW50IiwibGF0IiwibG5nIiwiZGVzdGluYXRpb25Qb2ludCIsInNldERlc3RpbmF0aW9uUG9pbnQiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwic3RvcHMiLCJzZXRTdG9wcyIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwibWFwUmVmIiwiY2VudGVyIiwib3B0aW9ucyIsImRpc2FibGVEZWZhdWx0VUkiLCJjbGlja2FibGVJY29ucyIsIm9uTG9hZCIsIm1hcCIsImN1cnJlbnQiLCJpc0xvYWRlZCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUFQX0FQSV9LRVkiLCJsaWJyYXJpZXMiLCJkaXYiLCJNYXBMb2NhbCIsIkNhbGNDZW50ZXIiLCJsZW5ndGgiLCJidWlsZFJvdXRlIiwiZGVzdCIsImNvbnNvbGUiLCJsb2ciLCJvcmlnaW4iLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJ3YXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJhZGRQbGFjZSIsInZhbCIsImFkZE9yaWdpbiIsImFkZFN0b3AiLCJoYW5kbGVyIiwic2V0T3JpZ2luIiwiem9vbSIsIm1hcENvbnRhaW5lckNsYXNzTmFtZSIsImRpcmVjdGlvbnMiLCJtYXJrZXIiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});