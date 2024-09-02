/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseConfig */ \"./utils/firebaseConfig.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = async (email, password)=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            setUser(userCredential.user);\n        } catch (error) {\n            console.error(\"Authentication failed\", error);\n            alert(\"There was an error with authentication. Please try again.\");\n        }\n    };\n    const register = async (email, password)=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            setUser(userCredential.user);\n        } catch (error) {\n            console.error(\"Authentication failed\", error);\n            alert(\"There was an error with authentication. Please try again.\");\n        }\n    };\n    const logout = async ()=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth);\n        setUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            register,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/context/AuthContext.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFNaEQ7QUFDd0I7QUFTOUMsTUFBTU8sNEJBQWNQLG9EQUFhQSxDQUErQlE7QUFFekQsTUFBTUMsVUFBVTtJQUNyQixNQUFNQyxVQUFVVCxpREFBVUEsQ0FBQ007SUFDM0IsSUFBSSxDQUFDRyxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFDO0FBRU0sTUFBTUUsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBMkI7SUFDaEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1jLFFBQVEsT0FBT0MsT0FBZUM7UUFDbEMsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixNQUFNaEIseUVBQTBCQSxDQUNyREcsdURBQUlBLEVBQ0pXLE9BQ0FDO1lBRUZILFFBQVFJLGVBQWVMLElBQUk7UUFDN0IsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDRSxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLFdBQVcsT0FBT04sT0FBZUM7UUFDckMsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixNQUFNZiw2RUFBOEJBLENBQ3pERSx1REFBSUEsRUFDSlcsT0FDQUM7WUFFRkgsUUFBUUksZUFBZUwsSUFBSTtRQUM3QixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNFLE1BQU07UUFDUjtJQUNGO0lBRUEsTUFBTUUsU0FBUztRQUNiLE1BQU1uQixzREFBT0EsQ0FBQ0MsdURBQUlBO1FBQ2xCUyxRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ1IsWUFBWWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFFWjtZQUFNRTtZQUFPTztZQUFVQztRQUFPO2tCQUMxRFg7Ozs7OztBQUdQLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWZsb3cvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFVzZXIsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25PdXRcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi91dGlscy9maXJlYmFzZUNvbmZpZydcblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0UHJvcHMge1xuICB1c2VyOiBVc2VyIHwgbnVsbFxuICBsb2dpbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbiAgcmVnaXN0ZXI6IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XG4gIGxvZ291dDogKCkgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRQcm9wcyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgYXV0aCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApXG4gICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCcsIGVycm9yKVxuICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgYXV0aCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICApXG4gICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCcsIGVycm9yKVxuICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25PdXQoYXV0aClcbiAgICBzZXRVc2VyKG51bGwpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgcmVnaXN0ZXIsIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJlcnJvciIsImNvbnNvbGUiLCJhbGVydCIsInJlZ2lzdGVyIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/asanchez/Desktop/desktop/CURSOS/PROYECTOS-NUEVOS-PROPIOS/task-flow/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXVCO0FBRXJELFNBQVNDLE1BQU8sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDaEQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1mbG93Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/firebaseConfig.ts":
/*!*********************************!*\
  !*** ./utils/firebaseConfig.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: () => (/* binding */ analytics),\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_analytics__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCzdOSLtwcqoUC0MedpHv8sZ5yW0jY5ewo\",\n    authDomain: \"task-flow-a5b2f.firebaseapp.com\",\n    projectId: \"task-flow-a5b2f\",\n    storageBucket: \"task-flow-a5b2f.appspot.com\",\n    messagingSenderId: \"835349777666\",\n    appId: \"1:835349777666:web:d2e2a6dcc9b99890f7061b\",\n    measurementId: \"G-W4FDQ0H3DX\"\n};\n// Verificar si ya existe una app inicializada\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n// Solo ejecutar getAnalytics en el cliente\nlet analytics;\nif (false) {}\n //ESTE CODIGO ES DE LA DOCUMENTACION DE FIREBASE\n // // Import the functions you need from the SDKs you need\n // import { initializeApp } from \"firebase/app\";\n // import { getAuth } from \"firebase/auth\";\n // import { getAnalytics } from \"firebase/analytics\";\n // const firebaseConfig = {\n //   apiKey: \"AIzaSyBvBPVdr7WdOuvw1idaFRnbBqWTBsR7Quo\",\n //   authDomain: \"task-flow-a5b2f.firebaseapp.com\",\n //   projectId: \"task-flow-a5b2f\",\n //   storageBucket: \"task-flow-a5b2f.appspot.com\",\n //   messagingSenderId: \"835349777666\",\n //   appId: \"1:835349777666:web:d2e2a6dcc9b99890f7061b\",\n //   measurementId: \"G-W4FDQ0H3DX\"\n // };\n // const app = initializeApp(firebaseConfig);\n // const auth = getAuth(app);\n // // Solo ejecutar getAnalytics en el cliente\n // let analytics;\n // if (typeof window !== 'undefined') {\n //   analytics = getAnalytics(app);\n // }\n // export { auth, analytics };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZUNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUN0QjtBQUNVO0FBRWxELE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxpQ0FBNEM7SUFDeERLLFdBQVdMLGlCQUEyQztJQUN0RE8sZUFBZVAsNkJBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7SUFDOUNhLGVBQWViLGNBQStDO0FBQ2hFO0FBRUEsOENBQThDO0FBQzlDLE1BQU1lLE1BQU0sQ0FBQ3JCLHFEQUFPQSxHQUFHc0IsTUFBTSxHQUFHdkIsMkRBQWFBLENBQUNLLGtCQUFrQkgsb0RBQU1BO0FBQ3RFLE1BQU1zQixPQUFPckIsc0RBQU9BLENBQUNtQjtBQUVyQiwyQ0FBMkM7QUFDM0MsSUFBSUc7QUFDSixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7QUFFMEIsQ0FJM0IsZ0RBQWdEO0NBQ2hELDBEQUEwRDtDQUMxRCxnREFBZ0Q7Q0FDaEQsMkNBQTJDO0NBQzNDLHFEQUFxRDtDQUdyRCwyQkFBMkI7Q0FDM0IsdURBQXVEO0NBQ3ZELG1EQUFtRDtDQUNuRCxrQ0FBa0M7Q0FDbEMsa0RBQWtEO0NBQ2xELHVDQUF1QztDQUN2Qyx3REFBd0Q7Q0FDeEQsa0NBQWtDO0NBQ2xDLEtBQUs7Q0FFTCw2Q0FBNkM7Q0FDN0MsNkJBQTZCO0NBRTdCLDhDQUE4QztDQUM5QyxpQkFBaUI7Q0FDakIsdUNBQXVDO0NBQ3ZDLG1DQUFtQztDQUNuQyxJQUFJO0NBRUosOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay1mbG93Ly4vdXRpbHMvZmlyZWJhc2VDb25maWcudHM/N2NjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzLCBnZXRBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCwgLy8gRXMgb3BjaW9uYWwgc2kgdXNhcyBBbmFseXRpY3Ncbn07XG5cbi8vIFZlcmlmaWNhciBzaSB5YSBleGlzdGUgdW5hIGFwcCBpbmljaWFsaXphZGFcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKTtcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5cbi8vIFNvbG8gZWplY3V0YXIgZ2V0QW5hbHl0aWNzIGVuIGVsIGNsaWVudGVcbmxldCBhbmFseXRpY3M7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG59XG5cbmV4cG9ydCB7IGF1dGgsIGFuYWx5dGljcyB9O1xuXG5cblxuLy9FU1RFIENPRElHTyBFUyBERSBMQSBET0NVTUVOVEFDSU9OIERFIEZJUkVCQVNFXG4vLyAvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG4vLyBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy8gaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG4vLyBpbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5cblxuLy8gY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4vLyAgIGFwaUtleTogXCJBSXphU3lCdkJQVmRyN1dkT3V2dzFpZGFGUm5iQnFXVEJzUjdRdW9cIixcbi8vICAgYXV0aERvbWFpbjogXCJ0YXNrLWZsb3ctYTViMmYuZmlyZWJhc2VhcHAuY29tXCIsXG4vLyAgIHByb2plY3RJZDogXCJ0YXNrLWZsb3ctYTViMmZcIixcbi8vICAgc3RvcmFnZUJ1Y2tldDogXCJ0YXNrLWZsb3ctYTViMmYuYXBwc3BvdC5jb21cIixcbi8vICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODM1MzQ5Nzc3NjY2XCIsXG4vLyAgIGFwcElkOiBcIjE6ODM1MzQ5Nzc3NjY2OndlYjpkMmUyYTZkY2M5Yjk5ODkwZjcwNjFiXCIsXG4vLyAgIG1lYXN1cmVtZW50SWQ6IFwiRy1XNEZEUTBIM0RYXCJcbi8vIH07XG5cbi8vIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy8gY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcblxuLy8gLy8gU29sbyBlamVjdXRhciBnZXRBbmFseXRpY3MgZW4gZWwgY2xpZW50ZVxuLy8gbGV0IGFuYWx5dGljcztcbi8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuLy8gICBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcbi8vIH1cblxuLy8gZXhwb3J0IHsgYXV0aCwgYW5hbHl0aWNzIH07XG5cblxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHBzIiwiZ2V0QXBwIiwiZ2V0QXV0aCIsImdldEFuYWx5dGljcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJhcHAiLCJsZW5ndGgiLCJhdXRoIiwiYW5hbHl0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/firebaseConfig.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();