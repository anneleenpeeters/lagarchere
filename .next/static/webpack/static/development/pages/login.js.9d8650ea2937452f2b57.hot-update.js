webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Nav(_ref) {\n  _s();\n\n  var jwt = _ref.jwt;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      ingelogd = _useState[0],\n      setIngelogd = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (typeof jwt !== \"undefined\") {\n      setIngelogd(true);\n      console.log('inloggen true');\n    } else {\n      setIngelogd(false);\n      console.log('inloggen false');\n    }\n  }, []);\n\n  function logout() {\n    Object(nookies__WEBPACK_IMPORTED_MODULE_7__[\"destroyCookie\"])(null, \"jwtToken\");\n    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(\"/login\");\n  }\n\n  return __jsx(\"nav\", {\n    className: \"nav stroke\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 28\n    }\n  }, __jsx(\"img\", {\n    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"La Garch\\xE8re\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 52\n    }\n  })))), __jsx(\"input\", {\n    className: \"menu-btn\",\n    type: \"checkbox\",\n    id: \"menu-btn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    className: \"menu-icon\",\n    htmlFor: \"menu-btn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"navicon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 57\n    }\n  })), __jsx(\"ul\", {\n    className: \"menu nav-midden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/kamers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 38\n    }\n  }, \"Kamers\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activiteiten\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 44\n    }\n  }, \"Activiteiten\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/contact\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 39\n    }\n  }, \"Contact\"))), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/reserveren\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 42\n    }\n  }, \"Reserveren\")))), __jsx(\"ul\", {\n    className: \"nav-login menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, ingelogd ? __jsx(\"button\", {\n    onClick: logout,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 25\n    }\n  }, \"logout\") : __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 68\n    }\n  }, \"login\"), __jsx(\"li\", {\n    className: \"login-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 39\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 59\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faUser\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 62\n    }\n  }))))));\n}\n\n_s(Nav, \"40m4zxovx7buJ9g0D8ZA3a2r8R0=\");\n\n_c = Nav;\nvar getServerSideProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var cookies, jwt;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_7__[\"parseCookies\"])(ctx);\n            jwt = cookies.jwtToken;\n\n            if (!(typeof jwt === \"undefined\")) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              props: {}\n            });\n\n          case 6:\n            return _context.abrupt(\"return\", {\n              props: {\n                jwt: jwt\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getServerSideProps(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz9hMTMzIl0sIm5hbWVzIjpbIk5hdiIsImp3dCIsInVzZVN0YXRlIiwiaW5nZWxvZ2QiLCJzZXRJbmdlbG9nZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJkZXN0cm95Q29va2llIiwiUm91dGVyIiwicHVzaCIsImxvZ29JbWFnZSIsImZhVXNlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImNvb2tpZXMiLCJwYXJzZUNvb2tpZXMiLCJqd3RUb2tlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsR0FBVCxPQUFvQjtBQUFBOztBQUFBLE1BQUxDLEdBQUssUUFBTEEsR0FBSzs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ1RDLFFBRFM7QUFBQSxNQUNDQyxXQUREOztBQUdoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxPQUFPSixHQUFQLEtBQWUsV0FBbkIsRUFBZ0M7QUFDNUJHLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSCxLQUhELE1BR087QUFDSEgsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSDtBQUNKLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsV0FBU0MsTUFBVCxHQUFtQjtBQUNmQyxpRUFBYSxDQUFDLElBQUQsRUFBTyxVQUFQLENBQWI7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDSDs7QUFFRCxTQUNBO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBQUE7QUFBQTtBQUN6QkMsbUJBRHlCLEdBQ2ZDLDREQUFZLENBQUNGLEdBQUQsQ0FERztBQUV6QmQsZUFGeUIsR0FFbkJlLE9BQU8sQ0FBQ0UsUUFGVzs7QUFBQSxrQkFHNUIsT0FBT2pCLEdBQVAsS0FBZSxXQUhhO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQUlyQjtBQUFFa0IsbUJBQUssRUFBRTtBQUFULGFBSnFCOztBQUFBO0FBQUEsNkNBTXBCO0FBQUVBLG1CQUFLLEVBQUU7QUFBQ2xCLG1CQUFHLEVBQUhBO0FBQUQ7QUFBVCxhQU5vQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQmEsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCO0FBVU9kLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmZ1bmN0aW9uIE5hdiAoe2p3dH0pe1xuICAgIGNvbnN0IFtpbmdlbG9nZCwgc2V0SW5nZWxvZ2RdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBqd3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHNldEluZ2Vsb2dkKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lubG9nZ2VuIHRydWUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SW5nZWxvZ2QoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lubG9nZ2VuIGZhbHNlJylcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkgIHtcbiAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcImp3dFRva2VuXCIpO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXYgc3Ryb2tlXCI+XG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJuYXYtbG9nb1wiPjxpbWcgc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxhIEdhcmNow6hyZVwiLz48L2E+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1lbnUtYnRuXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtZW51LWJ0blwiIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZW51LWljb25cIiBodG1sRm9yPVwibWVudS1idG5cIj48c3BhbiBjbGFzc05hbWU9XCJuYXZpY29uXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IG5hdi1taWRkZW5cIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2thbWVyc1wiPjxhPkthbWVyczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2FjdGl2aXRlaXRlblwiPjxhPkFjdGl2aXRlaXRlbjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvbnRhY3RcIj48YT5Db250YWN0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcmVzZXJ2ZXJlblwiPjxhPlJlc2VydmVyZW48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbG9naW4gbWVudVwiPlxuICAgICAgICAgICAgey8qIHtpbmdlbG9nZCA/IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4td29yZFwiPjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5Mb2dpbjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLXdvcmRcIj48YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+TG9nb3V0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICl9ICovfVxuXG4gICAgICAgICAgICB7aW5nZWxvZ2QgPyA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+bG9nb3V0PC9idXR0b24+IDogPHA+bG9naW48L3A+IH1cbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWljb25cIj48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9Lz48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+KVxuIH1cblxuIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpXG4gICAgY29uc3Qgand0ID0gY29va2llcy5qd3RUb2tlbjtcbiAgICBpZih0eXBlb2Ygand0ID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgcmV0dXJueyBwcm9wczoge30gfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7and0fSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})