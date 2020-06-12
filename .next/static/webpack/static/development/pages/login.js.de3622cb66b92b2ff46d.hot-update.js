webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction Nav(_ref) {\n  _s();\n\n  var jwt = _ref.jwt;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      ingelogd = _useState[0],\n      setIngelogd = _useState[1];\n\n  console.log(jwt);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (typeof jwt !== \"undefined\") {\n      setIngelogd(true);\n    } else {\n      setIngelogd(false);\n    }\n  }, []);\n\n  function logout() {\n    destroyCookie(null, \"jwtToken\");\n    Router.push(\"/\");\n  }\n\n  return __jsx(\"nav\", {\n    className: \"nav stroke\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 28\n    }\n  }, __jsx(\"img\", {\n    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"La Garch\\xE8re\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 52\n    }\n  })))), __jsx(\"input\", {\n    className: \"menu-btn\",\n    type: \"checkbox\",\n    id: \"menu-btn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    className: \"menu-icon\",\n    htmlFor: \"menu-btn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"navicon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 57\n    }\n  })), __jsx(\"ul\", {\n    className: \"menu nav-midden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/kamers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 38\n    }\n  }, \"Kamers\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activiteiten\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 44\n    }\n  }, \"Activiteiten\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 39\n    }\n  }, \"Contact\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/reserveren\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 42\n    }\n  }, \"Reserveren\")))), __jsx(\"ul\", {\n    className: \"nav-login menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, ingelogd ? __jsx(\"li\", {\n    className: \"login-word\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 26\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 53\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 73\n    }\n  }, \"Login\"))) : __jsx(\"li\", {\n    className: \"login-word\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 102\n    }\n  }, __jsx(\"button\", {\n    onClick: logout,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 129\n    }\n  }, \"Logout\")), __jsx(\"li\", {\n    className: \"login-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 39\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 59\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faUser\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 62\n    }\n  }))))));\n}\n\n_s(Nav, \"0BT7gkzZ/fztsMHtqIFh/qjA0GM=\");\n\n_c = Nav;\nvar getServerSideProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var cookies, jwt;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            cookies = parseCookies(ctx);\n            jwt = cookies.jwtToken;\n\n            if (!(typeof jwt === \"undefined\")) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              props: {}\n            });\n\n          case 6:\n            return _context.abrupt(\"return\", {\n              props: {\n                jwt: jwt\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getServerSideProps(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz9hMTMzIl0sIm5hbWVzIjpbIk5hdiIsImp3dCIsInVzZVN0YXRlIiwiaW5nZWxvZ2QiLCJzZXRJbmdlbG9nZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJsb2dvdXQiLCJkZXN0cm95Q29va2llIiwiUm91dGVyIiwicHVzaCIsImxvZ29JbWFnZSIsImZhVXNlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImNvb2tpZXMiLCJwYXJzZUNvb2tpZXMiLCJqd3RUb2tlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsT0FBb0I7QUFBQTs7QUFBQSxNQUFMQyxHQUFLLFFBQUxBLEdBQUs7O0FBQUEsa0JBRWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVUQyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFJaEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxHQUFaO0FBQ0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksT0FBT04sR0FBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzVCRyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEtBRkQsTUFFTztBQUNIQSxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIO0FBQ0osR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxXQUFTSSxNQUFULEdBQW1CO0FBQ2ZDLGlCQUFhLENBQUMsSUFBRCxFQUFPLFVBQVAsQ0FBYjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7O0FBRUQsU0FDQTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FB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QUFJLEVBQUVLLHdFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsQ0FBcEIsQ0FBM0IsQ0FGSCxDQVpKLENBREE7QUFrQkY7O0dBcENPYixHOztLQUFBQSxHO0FBc0NELElBQU1jLGtCQUFrQjtBQUFBLCtMQUFHLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QkMsbUJBRHlCLEdBQ2ZDLFlBQVksQ0FBQ0YsR0FBRCxDQURHO0FBRXpCZCxlQUZ5QixHQUVuQmUsT0FBTyxDQUFDRSxRQUZXOztBQUFBLGtCQUc1QixPQUFPakIsR0FBUCxLQUFlLFdBSGE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBSXJCO0FBQUVrQixtQkFBSyxFQUFFO0FBQVQsYUFKcUI7O0FBQUE7QUFBQSw2Q0FNcEI7QUFBRUEsbUJBQUssRUFBRTtBQUFDbEIsbUJBQUcsRUFBSEE7QUFBRDtBQUFULGFBTm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCYSxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUFVT2Qsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFVc2VyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBOYXYgKHtqd3R9KXtcblxuICAgIGNvbnN0IFtpbmdlbG9nZCwgc2V0SW5nZWxvZ2RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc29sZS5sb2coand0KVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygand0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzZXRJbmdlbG9nZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEluZ2Vsb2dkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkgIHtcbiAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcImp3dFRva2VuXCIpO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2IHN0cm9rZVwiPlxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxvZ29cIj48aW1nIHNyYz17bG9nb0ltYWdlfSBhbHQ9XCJMYSBHYXJjaMOocmVcIi8+PC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtZW51LWJ0blwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwibWVudS1idG5cIiAvPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWVudS1pY29uXCIgaHRtbEZvcj1cIm1lbnUtYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibmF2aWNvblwiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBuYXYtbWlkZGVuXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9rYW1lcnNcIj48YT5LYW1lcnM8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9hY3Rpdml0ZWl0ZW5cIj48YT5BY3Rpdml0ZWl0ZW48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGE+Q29udGFjdDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Jlc2VydmVyZW5cIj48YT5SZXNlcnZlcmVuPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxvZ2luIG1lbnVcIj5cbiAgICAgICAgICAgIHtpbmdlbG9nZCA/ICg8bGkgY2xhc3NOYW1lPVwibG9naW4td29yZFwiPjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5Mb2dpbjwvYT48L0xpbms+PC9saT4pIDogKDxsaSBjbGFzc05hbWU9XCJsb2dpbi13b3JkXCI+PGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvYnV0dG9uPjwvbGk+KX1cbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWljb25cIj48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9Lz48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+KVxuIH1cblxuIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpXG4gICAgY29uc3Qgand0ID0gY29va2llcy5qd3RUb2tlbjtcbiAgICBpZih0eXBlb2Ygand0ID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgcmV0dXJueyBwcm9wczoge30gfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7and0fSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})