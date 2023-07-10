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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-client)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceSearch */ \"(app-client)/./app/PlaceSearch.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Map() {\n    _s();\n    const [centerMap, setCenterMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [office, setOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentPoint, setCurrentPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 54.702800971968976,\n        lng: 20.74240559049013\n    });\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            lat: 54.702800971968976,\n            lng: 20.74240559049013\n        },\n        {\n            lat: 54.66514866433478,\n            lng: 21.81557985296381\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //CalcCenter();\n        buildRoute;\n    }, [\n        destination\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript)({\n        googleMapsApiKey: \"AIzaSyDwz43Woz_Flwh0o4pg2AEuVQBy1uJBLi8\",\n        libraries: [\n            \"places\"\n        ]\n    });\n    // if(!isLoaded) return <div>Loading...</div>;\n    // return <MapLocal/>\n    function CalcCenter() {\n        let lat = (markers[0].lat + markers[1].lat[1]) / markers.length;\n        let lng = (markers[0].lng + markers[1].lng[1]) / markers.length;\n        setCenterMap({\n            lat,\n            lng\n        });\n    }\n    //TODO: add transit points / TravelMode.TRANSIT\n    function buildRoute() {\n        if (!destination) return;\n        console.log(\"kek\");\n        const dirService = new google.maps.DirectionsService();\n        //TODO: if markers > 1\n        dirService.route({\n            origin: markers[1],\n            destination: markers[0],\n            travelMode: google.maps.TravelMode.DRIVING\n        }, (result, status)=>{\n            if (status === \"OK\" && result) {\n                setDestination(result);\n            }\n        });\n    }\n    function addPlace(val) {\n        setMarkers([\n            ...markers,\n            val\n        ]);\n    //buildRoute(val);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlaceSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    addPlace: addPlace,\n                    setOffice: (position)=>{\n                        var _mapRef_current;\n                        setOffice(position);\n                        (_mapRef_current = mapRef.current) === null || _mapRef_current === void 0 ? void 0 : _mapRef_current.panTo(position);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                zoom: 10,\n                center: centerMap,\n                mapContainerClassName: \"map-container\",\n                children: [\n                    destination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.DirectionsRenderer, {\n                        directions: destination\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 33\n                    }, this),\n                    markers.map((marker)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                            position: marker\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 40\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kam\\\\Documents\\\\frontend\\\\TravelApp\\\\app\\\\Map.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n// function MapLocal(){\n// }\n}\n_s(Map, \"WJ6f7RljH4FnydLWCizFnfNSsy0=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEY7QUFDNUM7QUFHVjtBQUl6QixTQUFTUTs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFnQjtRQUFDSyxLQUFJO1FBQW9CQyxLQUFLO0lBQWlCO0lBQ3pHLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWdCO1FBQUNLLEtBQUk7UUFBb0JDLEtBQUs7SUFBaUI7SUFDL0csTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQTtJQUU5QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQWtCO1FBQ2hEO1lBQUNLLEtBQUk7WUFBb0JDLEtBQUs7UUFBaUI7UUFDL0M7WUFBQ0QsS0FBSTtZQUFtQkMsS0FBSTtRQUFpQjtLQUFFO0lBRy9DUixnREFBU0EsQ0FBQztRQUNOLGVBQWU7UUFDZmlCO0lBQ0osR0FBRztRQUFDSjtLQUFZO0lBRXhCLE1BQU1LLFNBQVNqQiw2Q0FBTUE7SUFJckIsTUFBTSxFQUFDa0IsUUFBUSxFQUFDLEdBQUd0QixxRUFBYUEsQ0FBQztRQUM3QnVCLGtCQUFrQjtRQUNsQkMsV0FBVztZQUFDO1NBQVM7SUFDekI7SUFFQSw4Q0FBOEM7SUFDOUMscUJBQXFCO0lBSXJCLFNBQVNDO1FBQ0wsSUFBSWYsTUFBTSxDQUFDUSxPQUFPLENBQUMsRUFBRSxDQUFDUixNQUFNUSxPQUFPLENBQUMsRUFBRSxDQUFDUixHQUFHLENBQUMsRUFBRSxJQUFJUSxRQUFRUTtRQUN6RCxJQUFJZixNQUFNLENBQUNPLE9BQU8sQ0FBQyxFQUFFLENBQUNQLE1BQU1PLE9BQU8sQ0FBQyxFQUFFLENBQUNQLEdBQUcsQ0FBQyxFQUFFLElBQUlPLFFBQVFRO1FBQ3pEakIsYUFBYTtZQUFDQztZQUFLQztRQUFHO0lBQzFCO0lBSUEsK0NBQStDO0lBRS9DLFNBQVNTO1FBQ0wsSUFBRyxDQUFDSixhQUFhO1FBRWpCVyxRQUFRQyxJQUFJO1FBQ1osTUFBTUMsYUFBYSxJQUFJQyxPQUFPQyxLQUFLQztRQUVuQyxzQkFBc0I7UUFFdEJILFdBQVdJLE1BQ1A7WUFDSUMsUUFBUWhCLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCRixhQUFhRSxPQUFPLENBQUMsRUFBRTtZQUN2QmlCLFlBQVlMLE9BQU9DLEtBQUtLLFdBQVdDO1FBQ3ZDLEdBQ0EsQ0FBQ0MsUUFBUUM7WUFDTCxJQUFHQSxXQUFTLFFBQVFELFFBQU87Z0JBQ3ZCckIsZUFBZXFCO1lBQ25CO1FBQ0o7SUFFUjtJQUdBLFNBQVNFLFNBQVNDLEdBQUc7UUFDakJ0QixXQUFXO2VBQUlEO1lBQVN1QjtTQUFJO0lBQzVCLGtCQUFrQjtJQUN0QjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0M7MEJBQ0csNEVBQUNwQyxvREFBV0E7b0JBQUNrQyxVQUFVQTtvQkFBVTNCLFdBQVcsQ0FBQzhCOzRCQUV6Q3RCO3dCQURBUixVQUFVOEI7d0JBQ1Z0QixDQUFBQSxrQkFBQUEsT0FBT3VCLHFCQUFQdkIsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFnQndCLE1BQU1GO29CQUMxQjs7Ozs7Ozs7Ozs7MEJBRUosOERBQUM1Qyw2REFBU0E7Z0JBQ04rQyxNQUFNO2dCQUNOQyxRQUFRdkM7Z0JBQ1J3Qyx1QkFBc0I7O29CQUVyQmhDLDZCQUFlLDhEQUFDZCxzRUFBa0JBO3dCQUFDK0MsWUFBWWpDOzs7Ozs7b0JBQy9DRSxRQUFRZ0MsSUFBSSxDQUFDQyx1QkFBUyw4REFBQ2xELDBEQUFNQTs0QkFBQzBDLFVBQVVROzs7Ozs7Ozs7Ozs7OztBQUtyRCx1QkFBdUI7QUFFdkIsSUFBSTtBQUVSO0dBM0Z3QjVDOztRQW9CRFAsaUVBQWFBOzs7S0FwQlpPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9NYXAudHN4P2M5ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlTG9hZFNjcmlwdCwgTWFya2VyLCBEaXJlY3Rpb25zUmVuZGVyZXIgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHVzZVBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tIFwidXNlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFBsYWNlU2VhcmNoIGZyb20gXCIuL1BsYWNlU2VhcmNoXCI7XHJcblxyXG50eXBlIERlcmVjdGlvblJlc3VsdCA9IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZXN1bHQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKXtcclxuICAgIGNvbnN0IFtjZW50ZXJNYXAsIHNldENlbnRlck1hcF0gPSB1c2VTdGF0ZTxMYXRMbmdMaXRlcmFsPih7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30pO1xyXG4gICAgY29uc3QgW29mZmljZSwgc2V0T2ZmaWNlXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWw+KCk7XHJcbiAgICBjb25zdCBbY3VycmVudFBvaW50LCBzZXRDdXJyZW50UG9pbnRdID0gdXNlU3RhdGU8TGF0TG5nTGl0ZXJhbD4oe2xhdDo1NC43MDI4MDA5NzE5Njg5NzYsIGxuZzogMjAuNzQyNDA1NTkwNDkwMTN9KTtcclxuICAgIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGU8RGVyZWN0aW9uUmVzdWx0PigpO1xyXG5cclxuICAgIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IHVzZVN0YXRlPExhdExuZ0xpdGVyYWxbXT4oW1xyXG4gICAgICAgICAgICB7bGF0OjU0LjcwMjgwMDk3MTk2ODk3NiwgbG5nOiAyMC43NDI0MDU1OTA0OTAxM30sXHJcbiAgICAgICAgICAgIHtsYXQ6NTQuNjY1MTQ4NjY0MzM0NzgsIGxuZzoyMS44MTU1Nzk4NTI5NjM4MX1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAvL0NhbGNDZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkUm91dGU7XHJcbiAgICAgICAgICAgIH0sIFtkZXN0aW5hdGlvbl0pXHJcbiAgICBcclxuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZjxHb29nbGVNYXA+KCk7XHJcblxyXG4gICAgdHlwZSBMYXRMbmdMaXRlcmFsID0gZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbDsgICAgXHJcblxyXG4gICAgY29uc3Qge2lzTG9hZGVkfSA9IHVzZUxvYWRTY3JpcHQoe1xyXG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXk6IFwiQUl6YVN5RHd6NDNXb3pfRmx3aDBvNHBnMkFFdVZRQnkxdUpCTGk4XCIsXHJcbiAgICAgICAgbGlicmFyaWVzOiBbXCJwbGFjZXNcIl1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmKCFpc0xvYWRlZCkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIC8vIHJldHVybiA8TWFwTG9jYWwvPlxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQ2FsY0NlbnRlcigpe1xyXG4gICAgICAgIGxldCBsYXQgPSAobWFya2Vyc1swXS5sYXQgKyBtYXJrZXJzWzFdLmxhdFsxXSkgLyBtYXJrZXJzLmxlbmd0aDtcclxuICAgICAgICBsZXQgbG5nID0gKG1hcmtlcnNbMF0ubG5nICsgbWFya2Vyc1sxXS5sbmdbMV0pIC8gbWFya2Vycy5sZW5ndGg7XHJcbiAgICAgICAgc2V0Q2VudGVyTWFwKHtsYXQsIGxuZ30pO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuXHJcbiAgICAvL1RPRE86IGFkZCB0cmFuc2l0IHBvaW50cyAvIFRyYXZlbE1vZGUuVFJBTlNJVFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBidWlsZFJvdXRlICgpIHtcclxuICAgICAgICBpZighZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImtla1wiKTtcclxuICAgICAgICBjb25zdCBkaXJTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogaWYgbWFya2VycyA+IDFcclxuXHJcbiAgICAgICAgZGlyU2VydmljZS5yb3V0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBtYXJrZXJzWzFdLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IG1hcmtlcnNbMF0sXHJcbiAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihzdGF0dXM9PT1cIk9LXCIgJiYgcmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZXN0aW5hdGlvbihyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFBsYWNlKHZhbCl7XHJcbiAgICAgICAgc2V0TWFya2VycyhbLi4ubWFya2VycywgdmFsXSk7XHJcbiAgICAgICAgLy9idWlsZFJvdXRlKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBsYWNlU2VhcmNoIGFkZFBsYWNlPXthZGRQbGFjZX0gc2V0T2ZmaWNlPXsocG9zaXRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T2ZmaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudD8ucGFuVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgICAgICAgICAgem9vbT17MTB9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI9e2NlbnRlck1hcH1cclxuICAgICAgICAgICAgICAgIG1hcENvbnRhaW5lckNsYXNzTmFtZT1cIm1hcC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVzdGluYXRpb24gJiYgPERpcmVjdGlvbnNSZW5kZXJlciBkaXJlY3Rpb25zPXtkZXN0aW5hdGlvbn0vPn1cclxuICAgICAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobWFya2VyKT0+PE1hcmtlciBwb3NpdGlvbj17bWFya2VyfSAvPil9XHJcbiAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBNYXBMb2NhbCgpe1xyXG5cclxuICAgIC8vIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiR29vZ2xlTWFwIiwidXNlTG9hZFNjcmlwdCIsIk1hcmtlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGxhY2VTZWFyY2giLCJNYXAiLCJjZW50ZXJNYXAiLCJzZXRDZW50ZXJNYXAiLCJsYXQiLCJsbmciLCJvZmZpY2UiLCJzZXRPZmZpY2UiLCJjdXJyZW50UG9pbnQiLCJzZXRDdXJyZW50UG9pbnQiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwibWFya2VycyIsInNldE1hcmtlcnMiLCJidWlsZFJvdXRlIiwibWFwUmVmIiwiaXNMb2FkZWQiLCJnb29nbGVNYXBzQXBpS2V5IiwibGlicmFyaWVzIiwiQ2FsY0NlbnRlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXJTZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJvcmlnaW4iLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJhZGRQbGFjZSIsInZhbCIsImRpdiIsInBvc2l0aW9uIiwiY3VycmVudCIsInBhblRvIiwiem9vbSIsImNlbnRlciIsIm1hcENvbnRhaW5lckNsYXNzTmFtZSIsImRpcmVjdGlvbnMiLCJtYXAiLCJtYXJrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/Map.tsx\n"));

/***/ })

});