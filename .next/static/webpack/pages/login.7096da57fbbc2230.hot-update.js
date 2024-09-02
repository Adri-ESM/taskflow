"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _components_Back__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Back */ \"./components/Back.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { login } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const handleLogin = async ()=>{\n        setLoading(true) // Comenzar el proceso de carga\n        ;\n        try {\n            await login(email, password);\n        // Redirigir al usuario o realizar otra acción después del inicio de sesión exitoso\n        } catch (error) {\n            console.error(\"Error al iniciar sesi\\xf3n:\", error);\n        } finally{\n            setLoading(false) // Finalizar el proceso de carga\n            ;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Back__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Iniciar Sesi\\xf3n\"\n            }, void 0, false, {\n                fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value),\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value),\n                placeholder: \"Password\"\n            }, void 0, false, {\n                fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                disabled: loading,\n                children: loading ? \"Cargando...\" : \"Iniciar Sesi\\xf3n\"\n            }, void 0, false, {\n                fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/login.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"Yaevy7jwMk8lTXwtEE8pYX9StIo=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ2dCO0FBQ1g7QUFFckMsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVVLEtBQUssRUFBRSxHQUFHVCw2REFBT0E7SUFFekIsTUFBTVUsY0FBYztRQUNsQkYsV0FBVyxNQUFNLCtCQUErQjs7UUFDaEQsSUFBSTtZQUNGLE1BQU1DLE1BQU1OLE9BQU9FO1FBQ25CLG1GQUFtRjtRQUNyRixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLCtCQUE0QkE7UUFDNUMsU0FBVTtZQUNSSCxXQUFXLE9BQU8sZ0NBQWdDOztRQUNwRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ1osd0RBQUlBOzs7OzswQkFDTCw4REFBQ2E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9kO2dCQUNQZSxVQUFVQyxDQUFBQSxJQUFLZixTQUFTZSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQ3RDSSxhQUFZOzs7Ozs7MEJBRWQsOERBQUNOO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPWjtnQkFDUGEsVUFBVUMsQ0FBQUEsSUFBS2IsWUFBWWEsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUN6Q0ksYUFBWTs7Ozs7OzBCQUVkLDhEQUFDQztnQkFBT0MsU0FBU2I7Z0JBQWFjLFVBQVVqQjswQkFDckNBLFVBQVUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUFJbkM7R0F2Q01MOztRQUljRix5REFBT0E7OztLQUpyQkU7QUF5Q04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IEJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrJ1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUF1dGgoKVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSkgLy8gQ29tZW56YXIgZWwgcHJvY2VzbyBkZSBjYXJnYVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbihlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAvLyBSZWRpcmlnaXIgYWwgdXN1YXJpbyBvIHJlYWxpemFyIG90cmEgYWNjacOzbiBkZXNwdcOpcyBkZWwgaW5pY2lvIGRlIHNlc2nDs24gZXhpdG9zb1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBpbmljaWFyIHNlc2nDs246JywgZXJyb3IpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpIC8vIEZpbmFsaXphciBlbCBwcm9jZXNvIGRlIGNhcmdhXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJhY2sgLz5cbiAgICAgIDxoMT5JbmljaWFyIFNlc2nDs248L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBkaXNhYmxlZD17bG9hZGluZ30+XG4gICAgICAgIHtsb2FkaW5nID8gJ0NhcmdhbmRvLi4uJyA6ICdJbmljaWFyIFNlc2nDs24nfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUF1dGgiLCJCYWNrIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9naW4iLCJoYW5kbGVMb2dpbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});