webpackHotUpdate("static/development/pages/kamers.js",{

/***/ "./images/home_main.jpg":
false,

/***/ "./pages/kamers.js":
/*!*************************!*\
  !*** ./pages/kamers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/logo_title.png */ \"./images/logo_title.png\");\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logo_title_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/kamer_mainimg.jpg */ \"./images/kamer_mainimg.jpg\");\n/* harmony import */ var _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/pages/kamers.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar Kamer = function Kamer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    function _loadData() {\n      _loadData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_6___default()(\"https://wdev.be/wdev_anneleen/eindwerk/api/kamers\");\n\n              case 2:\n                response = _context.sent;\n                setData(response.data['hydra:member']);\n                console.log(response.data['hydra:member']);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadData.apply(this, arguments);\n    }\n\n    loadData();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"La Garchere - Kamers\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    type: \"image/icon type\",\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-733293128\" + \" \" + \"kamer-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-733293128\" + \" \" + \"kamer-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-733293128\" + \" \" + \"kamer-block-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-733293128\" + \" \" + \"heading-style-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 29\n    }\n  }, \"Luxe\"), __jsx(\"p\", {\n    className: \"jsx-733293128\" + \" \" + \"ondertitel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }, \"2 personen, 10m2\"), __jsx(\"p\", {\n    className: \"jsx-733293128\" + \" \" + \"omschrijving\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 29\n    }\n  }, \"Op de begane grond bevindt zich eveneens tweepersoonsslaapkamer met badkamer ensuite en toegang tot een achterliggend terrasje. Christian Lacroix gaf de inspiratie voor de inrichting. Taften gordijnen en grote kussens stralen luxe en overdaad uit.\"), __jsx(\"p\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }, \"Prijs hoogseizoen: 200 euro/nacht\"), __jsx(\"p\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 29\n    }\n  }, \"Prijs laagseizoen: 150 euro/nacht\"), __jsx(\"h2\", {\n    className: \"jsx-733293128\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }, \"Diensten\"), __jsx(\"ul\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 29\n    }\n  }, __jsx(\"li\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 33\n    }\n  }, \"Gratis wifi\"), __jsx(\"li\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 33\n    }\n  }, \"Linnengoed\"), __jsx(\"li\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 33\n    }\n  }, \"Gratis gebruik van spafaciliteiten\"), __jsx(\"li\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 33\n    }\n  }, \"Gratis parkeren rond het domein\"))), __jsx(\"div\", {\n    className: \"jsx-733293128\" + \" \" + \"kamer-block-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _images_kamer_mainimg_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,\n    alt: \"jow\",\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 29\n    }\n  }), __jsx(\"a\", {\n    className: \"jsx-733293128\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 29\n    }\n  }, \"Bekijk alle foto's\")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"733293128\",\n    __self: _this\n  }, \"p.jsx-733293128{line-height:1.5;}.kamer-container.jsx-733293128{margin:20px;}.kamer-section.jsx-733293128{background-color:#1F1F1F;color:#fffefa;}.heading-style-2.jsx-733293128,.heading-style-1.jsx-733293128{color:#fffefa;}.kamer-block-one.jsx-733293128{padding:50px 5% 20px 5%;}.ondertitel.jsx-733293128{font-size:0.8rem;margin-bottom:20px;}.omschrijving.jsx-733293128{margin-bottom:20px;}.heading-style-2.jsx-733293128{margin-top:40px;}.kamer-block-two.jsx-733293128 img.jsx-733293128{height:480px;width:80%;object-fit:cover;margin:0 auto;}section.jsx-733293128{margin-bottom:80px;}li.jsx-733293128{list-style-type:circle;margin-left:40px;line-height:1.8;}.kamer-block-two.jsx-733293128{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.kamer-block-two.jsx-733293128 a.jsx-733293128{font-family:'Abhaya Libre',serif;text-transform:uppercase;border-bottom:1px solid #fffefa;font-weight:600;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-top:20px;color:#fffefa;font-size:1.2rem;margin-bottom:70px;}@media (min-width:40em){.kamer-block-one.jsx-733293128{padding:70px 10% 20px 10%;}.kamer-block-two.jsx-733293128 img.jsx-733293128{width:60%;padding:20px 10% 20px 10%;}}@media (min-width:45em){.kamer-section.jsx-733293128{display:grid;grid-template-columns:auto auto;grid-column-gap:20px;}.kamer-block-one.jsx-733293128{max-width:400px;padding-bottom:80px;}.kamer-block-two.jsx-733293128{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:40px;}.kamer-block-two.jsx-733293128 img.jsx-733293128{height:500px;width:300px;padding:0;margin-top:70px;}}@media (min-width:58em){.kamer-section.jsx-733293128{margin:3%;}.kamer-block-one.jsx-733293128{max-width:400px;}.kamer-block-two.jsx-733293128{max-width:400px;}}@media (min-width:62em){.kamer-section.jsx-733293128{position:relative;margin-bottom:180px;}.kamer-block-one.jsx-733293128{width:400px;}.kamer-block-two.jsx-733293128{position:absolute;right:0;top:80px;}.kamer-block-two.jsx-733293128 img.jsx-733293128{height:600px;width:400px;object-fit:cover;}.kamer-block-two.jsx-733293128 a.jsx-733293128{color:#1F1F1F;border-bottom:1px solid #1F1F1F;}}@media (min-width:73em){.kamer-section.jsx-733293128{margin:0 10% 180px 10%;}.kamer-block-two.jsx-733293128 img.jsx-733293128{height:600px;width:400px;object-fit:cover;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL3BhZ2VzL2thbWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCLEFBR2lDLEFBR0osQUFJYSxBQU1YLEFBSVUsQUFJUCxBQUtFLEFBSUgsQUFJSCxBQU9NLEFBSUksQUFNVixBQU9xQixBQWFKLEFBSWhCLEFBT0csQUFNRyxBQUtKLEFBTUMsQUFTSCxBQUlNLEFBSUEsQUFPRSxBQUtOLEFBSU0sQUFPTCxBQU1HLEFBUU8sQUFJVixVQWpGYSxBQWlDOUIsRUF6R0osQUEwRnFCLEFBbUNqQixDQTlGVSxBQWdEMEIsQUFpQnBCLEFBd0NBLEFBa0JBLENBaEpwQixBQW9JeUMsRUFqSnpDLEFBOEJBLEFBMEQ0QixBQXdCeEIsQUFJQSxDQS9GbUIsQ0FzR0ssQUFTWixDQTFHaEIsQUFlQSxJQU5xQixBQVVBLEFBNEdqQixDQXhJSixDQVZrQixBQTZGQSxBQXdDTyxBQWtCQSxDQXZGckIsQUE4RGEsT0EzRVksRUEyQ0wsQUFrQ3BCLENBakhKLEFBc0RJLEFBYUEsRUFtQ0EsQ0FwSEosQ0E0QmtCLEFBVUUsRUErRmQsQUFrQkEsR0E1RXVCLENBK0R2QixLQTVDQSxHQWpFTixFQVVBLEVBWW9DLFFBeUJoQyxRQWpDc0IsWUEyQ0MsSUFsQ1AsZUFtQ2hCLENBbENtQiw4Q0FUSSwrQ0FVUCxnQkFDRixjQUNHLGlCQUNFLEtBWkEsY0FhdkIsK0VBWkEiLCJmaWxlIjoiL1VzZXJzL0FubmVsZWVuL1NpdGVzL2xhZ2FyY2hlcmUvcGFnZXMva2FtZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgbG9nb1RpdGxlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvZ29fdGl0bGUucG5nJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VTV1J9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQga2FtZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMva2FtZXJfbWFpbmltZy5qcGcnXG5cblxuXG5jb25zdCBLYW1lciA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkva2FtZXJzXCIpO1xuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZERhdGEoKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgR2FyY2hlcmUgLSBLYW1lcnM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtsb2dvVGl0bGVJbWFnZX0gdHlwZT1cImltYWdlL2ljb24gdHlwZVwiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2stb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMVwiPkx1eGU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9uZGVydGl0ZWxcIj4yIHBlcnNvbmVuLCAxMG0yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9tc2NocmlqdmluZ1wiPk9wIGRlIGJlZ2FuZSBncm9uZCBiZXZpbmR0IHppY2ggZXZlbmVlbnMgdHdlZXBlcnNvb25zc2xhYXBrYW1lciBtZXQgYmFka2FtZXIgZW5zdWl0ZSBlbiB0b2VnYW5nIHRvdCBlZW4gYWNodGVybGlnZ2VuZCB0ZXJyYXNqZS4gQ2hyaXN0aWFuIExhY3JvaXggZ2FmIGRlIGluc3BpcmF0aWUgdm9vciBkZSBpbnJpY2h0aW5nLiBUYWZ0ZW4gZ29yZGlqbmVuIGVuIGdyb3RlIGt1c3NlbnMgc3RyYWxlbiBsdXhlIGVuIG92ZXJkYWFkIHVpdC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpanMgaG9vZ3NlaXpvZW46IDIwMCBldXJvL25hY2h0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWpzIGxhYWdzZWl6b2VuOiAxNTAgZXVyby9uYWNodDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0yXCI+RGllbnN0ZW48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdyYXRpcyB3aWZpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxpbm5lbmdvZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3JhdGlzIGdlYnJ1aWsgdmFuIHNwYWZhY2lsaXRlaXRlbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HcmF0aXMgcGFya2VyZW4gcm9uZCBoZXQgZG9tZWluPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImthbWVyLWJsb2NrLXR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtrYW1lckltYWdlfSBhbHQ9XCJqb3dcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVraWprIGFsbGUgZm90bydzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmthbWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FtZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMUYxRjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmVmYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRpbmctc3R5bGUtMixcbiAgICAgICAgICAgIC5oZWFkaW5nLXN0eWxlLTEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZWZhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FtZXItYmxvY2stb25lIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDUlIDIwcHggNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vbmRlcnRpdGVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub21zY2hyaWp2aW5nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGluZy1zdHlsZS0yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0ODBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZWZhO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZWZhO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLW9uZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDcwcHggMTAlIDIwcHggMTAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMCUgMjBweCAxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDVlbSkge1xuICAgICAgICAgICAgICAgIC5rYW1lci1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stb25lIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU4ZW0pIHtcbiAgICAgICAgICAgICAgICAua2FtZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLW9uZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gICAgICAgICAgICAgICAgLmthbWVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay1vbmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogODBweDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byBhIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFGMUYxRjtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tIDFweCBzb2xpZCAjMUYxRjFGO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3M2VtKSB7XG4gICAgICAgICAgICAgICAgLmthbWVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTAlIDE4MHB4IDEwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgS2FtZXJcblxuXG5cblxuXG4gICAgIFxuICAgICAgICAgICJdfQ== */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/pages/kamers.js */\"));\n};\n\n_s(Kamer, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Kamer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Kamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9rYW1lcnMuanM/NGVhYiJdLCJuYW1lcyI6WyJLYW1lciIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJsb2FkRGF0YSIsImF4aW9zIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibG9nb1RpdGxlSW1hZ2UiLCJrYW1lckltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFFBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU1BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJDLDRDQUFLLENBQUMsbURBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsd0JBRFY7QUFFSUosdUJBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFULENBQWMsY0FBZCxDQUFELENBQVA7QUFDQU0sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNMLElBQVQsQ0FBYyxjQUFkLENBQVo7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBTVpHLFlBQVE7QUFDWCxHQVBRLEVBT1AsRUFQTyxDQUFUO0FBU0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBRUssNkRBQXZCO0FBQXVDLFFBQUksRUFBQyxpQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUEsdUNBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsdUNBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx1Q0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx1Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBLHVDQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixFQUdJO0FBQUEsdUNBQWEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtQQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUxKLEVBTUk7QUFBQSx1Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUpKLENBUEosQ0FESixFQWVJO0FBQUEsdUNBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFQyxnRUFBVjtBQUFzQixPQUFHLEVBQUMsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosQ0FmSixDQURKLENBREosQ0FEQSxDQUxKO0FBQUE7QUFBQTtBQUFBLGlvWkFESjtBQXVNRCxDQWxOSDs7R0FBTVgsSzs7S0FBQUEsSztBQW9OV0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9rYW1lcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBsb2dvVGl0bGVJbWFnZSBmcm9tICcuLi9pbWFnZXMvbG9nb190aXRsZS5wbmcnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVNXUn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBrYW1lckltYWdlIGZyb20gJy4uL2ltYWdlcy9rYW1lcl9tYWluaW1nLmpwZydcblxuXG5cbmNvbnN0IEthbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS9rYW1lcnNcIik7XG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkRGF0YSgpO1xuICAgIH0sW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYSBHYXJjaGVyZSAtIEthbWVyczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2xvZ29UaXRsZUltYWdlfSB0eXBlPVwiaW1hZ2UvaWNvbiB0eXBlXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrYW1lci1ibG9jay1vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0xXCI+THV4ZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib25kZXJ0aXRlbFwiPjIgcGVyc29uZW4sIDEwbTI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib21zY2hyaWp2aW5nXCI+T3AgZGUgYmVnYW5lIGdyb25kIGJldmluZHQgemljaCBldmVuZWVucyB0d2VlcGVyc29vbnNzbGFhcGthbWVyIG1ldCBiYWRrYW1lciBlbnN1aXRlIGVuIHRvZWdhbmcgdG90IGVlbiBhY2h0ZXJsaWdnZW5kIHRlcnJhc2plLiBDaHJpc3RpYW4gTGFjcm9peCBnYWYgZGUgaW5zcGlyYXRpZSB2b29yIGRlIGlucmljaHRpbmcuIFRhZnRlbiBnb3JkaWpuZW4gZW4gZ3JvdGUga3Vzc2VucyBzdHJhbGVuIGx1eGUgZW4gb3ZlcmRhYWQgdWl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmlqcyBob29nc2Vpem9lbjogMjAwIGV1cm8vbmFjaHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpanMgbGFhZ3NlaXpvZW46IDE1MCBldXJvL25hY2h0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5EaWVuc3RlbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3JhdGlzIHdpZmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGlubmVuZ29lZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HcmF0aXMgZ2VicnVpayB2YW4gc3BhZmFjaWxpdGVpdGVuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdyYXRpcyBwYXJrZXJlbiByb25kIGhldCBkb21laW48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FtZXItYmxvY2stdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2thbWVySW1hZ2V9IGFsdD1cImpvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5CZWtpamsgYWxsZSBmb3RvJ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAua2FtZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYW1lci1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZWZhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGluZy1zdHlsZS0yLFxuICAgICAgICAgICAgLmhlYWRpbmctc3R5bGUtMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZlZmE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYW1lci1ibG9jay1vbmUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggNSUgMjBweCA1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9uZGVydGl0ZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vbXNjaHJpanZpbmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkaW5nLXN0eWxlLTIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byBhIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIHNlcmlmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZlZmE7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZlZmE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNzBweCAxMCUgMjBweCAxMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwJSAyMHB4IDEwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAgICAgLmthbWVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay1vbmUge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNThlbSkge1xuICAgICAgICAgICAgICAgIC5rYW1lci1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stb25lIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgICAgICAgICAgICAgICAua2FtZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTgwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLW9uZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmthbWVyLWJsb2NrLXR3byBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAua2FtZXItYmxvY2stdHdvIGEge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUYxRjFGO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20gMXB4IHNvbGlkICMxRjFGMUY7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDczZW0pIHtcbiAgICAgICAgICAgICAgICAua2FtZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMCUgMTgwcHggMTAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rYW1lci1ibG9jay10d28gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBLYW1lclxuXG5cblxuXG5cbiAgICAgXG4gICAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/kamers.js\n");

/***/ })

})