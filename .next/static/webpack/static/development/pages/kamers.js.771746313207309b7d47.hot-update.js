webpackHotUpdate("static/development/pages/kamers.js",{

/***/ "./images/kamer_mainimg.jpg":
/*!**********************************!*\
  !*** ./images/kamer_mainimg.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/kamer_mainimg-dde9714b5e80824f1e5639f649c5b80e.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMva2FtZXJfbWFpbmltZy5qcGc/NmYxMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2ltYWdlcy9rYW1lcl9tYWluaW1nLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9rYW1lcl9tYWluaW1nLWRkZTk3MTRiNWU4MDgyNGYxZTU2MzlmNjQ5YzViODBlLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/kamer_mainimg.jpg\n");

/***/ }),

/***/ "./pages/kamers.js":
/*!*************************!*\
  !*** ./pages/kamers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/logo_title.png */ \"./images/logo_title.png\");\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_logo_title_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/kamer_mainimg.jpg */ \"./images/kamer_mainimg.jpg\");\n/* harmony import */ var _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/pages/kamers.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar Kamer = function Kamer() {\n  //const [data, setData] = useState([]);\n  // useEffect(() => {\n  //     async function loadData(){\n  //         const response = await axios(\"https://wdev.be/wdev_anneleen/eindwerk/api/kamers\");\n  //         setData(response.data['hydra:member']);\n  //         console.log(response.data['hydra:member']);\n  //     }\n  //     loadData();\n  // },[]);\n  return __jsx(\"div\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"La Garchere - Kamers\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: _images_logo_title_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n    type: \"image/icon type\",\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1363255855\" + \" \" + \"kamer-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1363255855\" + \" \" + \"kamer-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1363255855\" + \" \" + \"kamer-block-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-1363255855\" + \" \" + \"heading-style-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 29\n    }\n  }, \"Luxe\"), __jsx(\"p\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 29\n    }\n  }, \"2 personen, 10m2\"), __jsx(\"p\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }, \"Op de begane grond bevindt zich eveneens tweepersoonsslaapkamer met badkamer ensuite en toegang tot een achterliggend terrasje. Christian Lacroix gaf de inspiratie voor de inrichting. Taften gordijnen en grote kussens stralen luxe en overdaad uit.\"), __jsx(\"p\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 29\n    }\n  }, \"Prijs hoogseizoen: 200 euro/nacht\"), __jsx(\"p\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }, \"Prijs laagseizoen: 150 euro/nacht\"), __jsx(\"h2\", {\n    className: \"jsx-1363255855\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 29\n    }\n  }, \"Diensten\"), __jsx(\"ul\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }, __jsx(\"li\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 33\n    }\n  }, \"Gratis wifi\"), __jsx(\"li\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 33\n    }\n  }, \"Linnengoed\"), __jsx(\"li\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 33\n    }\n  }, \"Gratis gebruik van spafaciliteiten\"), __jsx(\"li\", {\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 33\n    }\n  }, \"Gratis parkeren rond het domein\"))), __jsx(\"div\", {\n    className: \"jsx-1363255855\" + \" \" + \"kamer-block-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    alt: \"jow\",\n    className: \"jsx-1363255855\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1363255855\",\n    __self: _this\n  }, \".kamer-section.jsx-1363255855{background-color:#1F1F1F;color:white;}.heading-style-2.jsx-1363255855,.heading-style-1.jsx-1363255855{color:white;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL3BhZ2VzL2thbWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRzBDLEFBTWIsWUFDaEIsYUFOZ0IsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL0FubmVsZWVuL1NpdGVzL2xhZ2FyY2hlcmUvcGFnZXMva2FtZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgbG9nb1RpdGxlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvZ29fdGl0bGUucG5nJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VTV1J9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQga2FtZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMva2FtZXJfbWFpbmltZy5qcGcnXG5cblxuY29uc3QgS2FtZXIgPSAoKSA9PiB7XG4gICAgLy9jb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkva2FtZXJzXCIpO1xuICAgIC8vICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbG9hZERhdGEoKTtcbiAgICAvLyB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgR2FyY2hlcmUgLSBLYW1lcnM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtsb2dvVGl0bGVJbWFnZX0gdHlwZT1cImltYWdlL2ljb24gdHlwZVwiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2stb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMVwiPkx1eGU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIgcGVyc29uZW4sIDEwbTI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3AgZGUgYmVnYW5lIGdyb25kIGJldmluZHQgemljaCBldmVuZWVucyB0d2VlcGVyc29vbnNzbGFhcGthbWVyIG1ldCBiYWRrYW1lciBlbnN1aXRlIGVuIHRvZWdhbmcgdG90IGVlbiBhY2h0ZXJsaWdnZW5kIHRlcnJhc2plLiBDaHJpc3RpYW4gTGFjcm9peCBnYWYgZGUgaW5zcGlyYXRpZSB2b29yIGRlIGlucmljaHRpbmcuIFRhZnRlbiBnb3JkaWpuZW4gZW4gZ3JvdGUga3Vzc2VucyBzdHJhbGVuIGx1eGUgZW4gb3ZlcmRhYWQgdWl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmlqcyBob29nc2Vpem9lbjogMjAwIGV1cm8vbmFjaHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpanMgbGFhZ3NlaXpvZW46IDE1MCBldXJvL25hY2h0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5EaWVuc3RlbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3JhdGlzIHdpZmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGlubmVuZ29lZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HcmF0aXMgZ2VicnVpayB2YW4gc3BhZmFjaWxpdGVpdGVuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdyYXRpcyBwYXJrZXJlbiByb25kIGhldCBkb21laW48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2staW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2thbWVySW1hZ2V9IGFsdD1cImpvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmthbWVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjFGMUY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGluZy1zdHlsZS0yLFxuICAgICAgICAgICAgLmhlYWRpbmctc3R5bGUtMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgS2FtZXJcblxuXG5cblxuXG4gICAgIFxuICAgICAgICAgICJdfQ== */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/pages/kamers.js */\"));\n};\n\n_c = Kamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Kamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9rYW1lcnMuanM/NGVhYiJdLCJuYW1lcyI6WyJLYW1lciIsImxvZ29UaXRsZUltYWdlIiwia2FtZXJJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixFQUVJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFFQyw2REFBdkI7QUFBdUMsUUFBSSxFQUFDLGlCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQSx3Q0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBZSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrUEFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FMSixFQU1JO0FBQUEsd0NBQWMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FKSixDQVBKLENBREosRUFlSTtBQUFBLHdDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsZ0VBQVY7QUFBc0IsT0FBRyxFQUFDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBZkosQ0FESixDQURKLENBREEsQ0FMSjtBQUFBO0FBQUE7QUFBQSw4bUlBREo7QUE2Q0QsQ0F4REg7O0tBQU1GLEs7QUEwRFdBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMva2FtZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgbG9nb1RpdGxlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvZ29fdGl0bGUucG5nJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VTV1J9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQga2FtZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMva2FtZXJfbWFpbmltZy5qcGcnXG5cblxuY29uc3QgS2FtZXIgPSAoKSA9PiB7XG4gICAgLy9jb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkva2FtZXJzXCIpO1xuICAgIC8vICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbG9hZERhdGEoKTtcbiAgICAvLyB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgR2FyY2hlcmUgLSBLYW1lcnM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtsb2dvVGl0bGVJbWFnZX0gdHlwZT1cImltYWdlL2ljb24gdHlwZVwiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2stb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMVwiPkx1eGU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIgcGVyc29uZW4sIDEwbTI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3AgZGUgYmVnYW5lIGdyb25kIGJldmluZHQgemljaCBldmVuZWVucyB0d2VlcGVyc29vbnNzbGFhcGthbWVyIG1ldCBiYWRrYW1lciBlbnN1aXRlIGVuIHRvZWdhbmcgdG90IGVlbiBhY2h0ZXJsaWdnZW5kIHRlcnJhc2plLiBDaHJpc3RpYW4gTGFjcm9peCBnYWYgZGUgaW5zcGlyYXRpZSB2b29yIGRlIGlucmljaHRpbmcuIFRhZnRlbiBnb3JkaWpuZW4gZW4gZ3JvdGUga3Vzc2VucyBzdHJhbGVuIGx1eGUgZW4gb3ZlcmRhYWQgdWl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmlqcyBob29nc2Vpem9lbjogMjAwIGV1cm8vbmFjaHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpanMgbGFhZ3NlaXpvZW46IDE1MCBldXJvL25hY2h0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5EaWVuc3RlbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3JhdGlzIHdpZmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGlubmVuZ29lZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HcmF0aXMgZ2VicnVpayB2YW4gc3BhZmFjaWxpdGVpdGVuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdyYXRpcyBwYXJrZXJlbiByb25kIGhldCBkb21laW48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2staW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2thbWVySW1hZ2V9IGFsdD1cImpvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmthbWVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjFGMUY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGluZy1zdHlsZS0yLFxuICAgICAgICAgICAgLmhlYWRpbmctc3R5bGUtMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgS2FtZXJcblxuXG5cblxuXG4gICAgIFxuICAgICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/kamers.js\n");

/***/ })

})